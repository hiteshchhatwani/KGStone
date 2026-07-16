export const stats = [
  { label: "Stone surgeries performed", value: "15,000+", icon: "activity" },
  { label: "Years serving Ajmer", value: "15+", icon: "calendar" },
  { label: "Stone-free success rate", value: "98%", icon: "target" },
  { label: "Patient rating", value: "4.9/5", icon: "star" },
] as const;

export const homeStats = [
  { label: "Successful stone surgeries", value: 15000, suffix: "+" },
  { label: "Years of dedicated stone care", value: 15, suffix: "+" },
  { label: "Stone-free success rate", value: 98, suffix: "%" },
  { label: "Average patient rating", value: 4.9, suffix: "/5" },
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
