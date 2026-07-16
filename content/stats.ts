export const stats = [
  { label: "Surgeries performed", value: "10,000+", icon: "activity" },
  { label: "Ajmer division's", value: "1st Urology Surgery", icon: "award" },
  { label: "Emergency care", value: "24×7", icon: "calendar" },
  { label: "Core specialties", value: "5", icon: "target" },
] as const;

export const homeStats = [
  { label: "Successful surgeries performed", value: 10000, suffix: "+" },
  { label: "Core urology specialties", value: 5, suffix: "" },
  { label: "Emergency care availability", value: 24, suffix: "×7" },
  { label: "In-house diagnostic facilities", value: 5, suffix: "+" },
] as const;

export const technology = [
  {
    title: "Holmium Laser Lithotripsy",
    description:
      "Fine, precise laser fibre that fragments stones of any hardness with minimal damage to surrounding tissue, used in RIRS and URS procedures.",
    icon: "zap",
  },
  {
    title: "Fluoroscopy-Guided PCNL Setup",
    description:
      "Real-time imaging guidance for pinpoint kidney access during PCNL, reducing radiation exposure and operating time for large stones.",
    icon: "scan",
  },
  {
    title: "Flexible Ureteroscopes",
    description:
      "High-definition flexible scopes that reach every part of the kidney's collecting system, enabling scarless RIRS for mid-sized stones.",
    icon: "circuit-board",
  },
  {
    title: "Third-Generation ESWL",
    description:
      "Non-invasive shockwave lithotripsy that breaks smaller stones from outside the body, with no incision and no hospital stay required.",
    icon: "waves",
  },
  {
    title: "Digital Imaging & Reporting",
    description:
      "In-house digital X-ray and ultrasound with rapid reporting, so treatment decisions aren't delayed waiting on outside labs.",
    icon: "monitor",
  },
  {
    title: "Modern Recovery Suite",
    description:
      "Private, monitored recovery rooms designed for same-day discharge comfort after laser and endoscopic procedures.",
    icon: "bed",
  },
] as const;

export const insurance = {
  intro:
    "KG Stone Hospital works with major insurers and third-party administrators (TPAs) to make treatment financially manageable, including cashless admission for eligible policies.",
  accepted: [
    "Star Health Insurance",
    "HDFC ERGO Health",
    "Care Health Insurance",
    "Niva Bupa Health Insurance",
    "ICICI Lombard",
    "National Insurance Co.",
    "Ayushman Bharat (select procedures)",
    "Corporate & TPA tie-ups",
  ],
  note: "Coverage varies by policy and procedure. Our billing desk verifies your cashless eligibility before admission — bring your policy card and ID to your consultation.",
} as const;
