import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 1000;

function sanitize(value: unknown, maxLen = MAX_LEN): string {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = {
    name: sanitize(body.name, 120),
    email: sanitize(body.email, 254),
    phone: sanitize(body.phone, 20),
    message: sanitize(body.message, MAX_LEN),
  };

  if (payload.name.length < 2) {
    return NextResponse.json({ error: "A valid name is required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(payload.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (payload.message.length < 5) {
    return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  }

  // Demo build: request is validated and logged server-side only.
  // Wire this up to email (e.g. Resend) or a CRM webhook before going live.
  console.info("[contact-message]", { ...payload, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
