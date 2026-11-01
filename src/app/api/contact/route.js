import nodemailer from "nodemailer";

export const runtime = "nodejs";

const senderEmail = "peramedia0@gmail.com";
const inquiryRecipient = "naved2010m@gmail.com";
const projectTypes = new Set([
  "Web application",
  "Business automation",
  "Dashboard",
  "Customer portal",
  "E-commerce",
  "AI solution",
  "Other",
]);
const budgets = new Set(["$1k–$3k", "$3k–$5k", "$5k–$10k", "$10k+", "Not sure yet"]);

function isText(value, maxLength) {
  return typeof value === "string" && value.trim().length <= maxLength;
}

export async function POST(request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12000) {
    return Response.json({ error: "The inquiry is too large. Please shorten your message." }, { status: 413 });
  }

  let inquiry;
  try {
    const body = await request.text();
    if (body.length > 12000) {
      return Response.json({ error: "The inquiry is too large. Please shorten your message." }, { status: 413 });
    }
    inquiry = JSON.parse(body);
  } catch {
    return Response.json({ error: "Please submit a valid inquiry." }, { status: 400 });
  }

  if (!inquiry || typeof inquiry !== "object" || Array.isArray(inquiry)) {
    return Response.json({ error: "Please submit a valid inquiry." }, { status: 400 });
  }

  if (typeof inquiry.faxNumber === "string" && inquiry.faxNumber.trim()) {
    return Response.json({ error: "This submission could not be accepted." }, { status: 400 });
  }

  const { name, email, company = "", website = "", projectType = "", budget = "", message } = inquiry;
  if (
    !isText(name, 100) || !name.trim() ||
    !isText(email, 254) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    !isText(company, 160) ||
    !isText(website, 2048) ||
    !isText(projectType, 80) ||
    !isText(budget, 40) ||
    !isText(message, 5000) || !message.trim() ||
    (projectType && !projectTypes.has(projectType)) ||
    (budget && !budgets.has(budget))
  ) {
    return Response.json({ error: "Please check the inquiry fields and try again." }, { status: 400 });
  }

  if (website.trim()) {
    try {
      const websiteUrl = new URL(website);
      if (websiteUrl.protocol !== "http:" && websiteUrl.protocol !== "https:") {
        return Response.json({ error: "Please enter a valid website URL." }, { status: 400 });
      }
    } catch {
      return Response.json({ error: "Please enter a valid website URL." }, { status: 400 });
    }
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (gmailUser !== senderEmail || !gmailAppPassword) {
    console.error("Inquiry email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.");
    return Response.json(
      { error: "The inquiry form is temporarily unavailable. Please email peramedia0@gmail.com." },
      { status: 503 },
    );
  }

  const cleanName = name.trim().replace(/[\r\n]/g, " ");
  const cleanEmail = email.trim();
  const summary = [
    `Name: ${cleanName}`,
    `Email: ${cleanEmail}`,
    `Company: ${company.trim() || "Not provided"}`,
    `Website: ${website.trim() || "Not provided"}`,
    `Project type: ${projectType || "Not selected"}`,
    `Budget: ${budget || "Not selected"}`,
    "",
    "Project details:",
    message.trim(),
  ].join("\n");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword.replace(/\s/g, ""),
    },
  });

  const results = await Promise.allSettled([
    transporter.sendMail({
      from: { name: "Peramedia", address: senderEmail },
      to: inquiryRecipient,
      replyTo: { name: cleanName, address: cleanEmail },
      subject: `New project inquiry from ${cleanName}`,
      text: summary,
    }),
    transporter.sendMail({
      from: { name: "Peramedia", address: senderEmail },
      to: cleanEmail,
      subject: "We received your Peramedia project inquiry",
      text: [
        `Hi ${cleanName},`,
        "",
        "Thanks for getting in touch with Peramedia. We received your project inquiry and will usually reply within two business days.",
        "",
        "Here is a copy of what you sent:",
        "",
        summary,
        "",
        "— Peramedia",
      ].join("\n"),
    }),
  ]);
  const failures = results.filter((result) => result.status === "rejected");
  if (failures.length) {
    console.error(
      "Inquiry email delivery failed:",
      failures.map(({ reason }) => reason instanceof Error ? reason.message : String(reason)),
    );
    return Response.json(
      { error: "We couldn't confirm delivery. Please try again or email peramedia0@gmail.com." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
