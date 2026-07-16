import { NextResponse } from "next/server";

type AppointmentPayload = {
  name: string;
  phone: string;
  email?: string;
  age?: string;
  gender: string;
  preferredDate: string;
  preferredTime: string;
  symptoms?: string;
  message?: string;
};

const PHONE_RE = /^[+]?[\d\s-]{10,15}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 1000;

function sanitize(value: unknown, maxLen = MAX_LEN): string {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

export async function POST(request: Request) {
  let body: Partial<AppointmentPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload: AppointmentPayload = {
    name: sanitize(body.name, 120),
    phone: sanitize(body.phone, 20),
    email: sanitize(body.email, 254),
    age: sanitize(body.age, 3),
    gender: sanitize(body.gender, 30),
    preferredDate: sanitize(body.preferredDate, 10),
    preferredTime: sanitize(body.preferredTime, 60),
    symptoms: sanitize(body.symptoms, 120),
    message: sanitize(body.message, MAX_LEN),
  };

  if (payload.name.length < 2) {
    return NextResponse.json({ error: "A valid name is required." }, { status: 400 });
  }
  if (!PHONE_RE.test(payload.phone)) {
    return NextResponse.json({ error: "A valid phone number is required." }, { status: 400 });
  }
  if (payload.email && !EMAIL_RE.test(payload.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!payload.gender || !payload.preferredDate || !payload.preferredTime) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Demo build: request is validated and logged server-side only.
  // Wire this up to email (e.g. Resend), a CRM webhook, or a database
  // before going live — see README.md "Connecting the appointment form".
  console.info("[appointment-request]", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
