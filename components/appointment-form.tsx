"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-config";

type FormState = {
  name: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  preferredDate: "",
  preferredTime: "",
  symptoms: "",
  message: "",
};

const timeSlots = ["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 8 PM)"];
const symptomOptions = [
  "Back or side pain",
  "Blood in urine",
  "Burning while urinating",
  "Recurring UTI",
  "Follow-up after treatment",
  "No symptoms — routine check",
  "Other",
];

function isValidPhone(phone: string) {
  return /^[+]?[\d\s-]{10,15}$/.test(phone.trim());
}
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Enter your full name.";
    if (!isValidPhone(form.phone)) next.phone = "Enter a valid phone number.";
    if (form.email && !isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (form.age && (Number(form.age) < 1 || Number(form.age) > 120)) {
      next.age = "Enter a valid age.";
    }
    if (!form.gender) next.gender = "Please select an option.";
    if (!form.preferredDate) next.preferredDate = "Choose a preferred date.";
    if (!form.preferredTime) next.preferredTime = "Choose a preferred time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
          Appointment request received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Our team will call you shortly to confirm your slot. For anything urgent, call us
          directly at {contactInfo.phoneDisplay}.
        </p>
        <Button className="mt-6 rounded-full px-6" onClick={() => setStatus("idle")}>
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name} required>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone" error={errors.phone} required>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 94609 60666"
            aria-invalid={!!errors.phone}
          />
        </Field>
        <Field label="Email Address" htmlFor="email" error={errors.email}>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Age" htmlFor="age" error={errors.age}>
          <Input
            id="age"
            type="number"
            min={1}
            max={120}
            value={form.age}
            onChange={(e) => update("age", e.target.value)}
            placeholder="e.g. 42"
            aria-invalid={!!errors.age}
          />
        </Field>
        <Field label="Gender" htmlFor="gender" error={errors.gender} required>
          <Select value={form.gender} onValueChange={(v) => update("gender", v as string)}>
            <SelectTrigger id="gender" className="w-full">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              {["Male", "Female", "Other", "Prefer not to say"].map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred Date" htmlFor="preferredDate" error={errors.preferredDate} required>
          <Input
            id="preferredDate"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={form.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            aria-invalid={!!errors.preferredDate}
          />
        </Field>
        <Field label="Preferred Time" htmlFor="preferredTime" error={errors.preferredTime} required>
          <Select value={form.preferredTime} onValueChange={(v) => update("preferredTime", v as string)}>
            <SelectTrigger id="preferredTime" className="w-full">
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Symptoms" htmlFor="symptoms" error={errors.symptoms}>
          <Select value={form.symptoms} onValueChange={(v) => update("symptoms", v as string)}>
            <SelectTrigger id="symptoms" className="w-full">
              <SelectValue placeholder="Select the closest match" />
            </SelectTrigger>
            <SelectContent>
              {symptomOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us anything else that would help — prior reports, ongoing medication, etc."
          rows={4}
        />
      </Field>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong sending your request. Please try again or call us directly.
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full rounded-full sm:w-auto">
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Request Appointment"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
