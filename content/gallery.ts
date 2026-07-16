export type GalleryItem = {
  category: "Hospital" | "Operation Theatre" | "Reception" | "Equipment" | "Doctor" | "Patients";
  title: string;
  icon: string;
};

export const galleryItems: GalleryItem[] = [
  { category: "Hospital", title: "KG Stone Hospital — Front Entrance", icon: "building-2" },
  { category: "Hospital", title: "Patient Waiting Lounge", icon: "sofa" },
  { category: "Hospital", title: "Private Recovery Room", icon: "bed" },
  { category: "Reception", title: "Reception & Registration Desk", icon: "concierge-bell" },
  { category: "Reception", title: "Billing & Insurance Desk", icon: "receipt" },
  { category: "Operation Theatre", title: "Modular Operation Theatre", icon: "stethoscope" },
  { category: "Operation Theatre", title: "Laser Lithotripsy Suite", icon: "zap" },
  { category: "Operation Theatre", title: "Fluoroscopy-Guided PCNL Setup", icon: "scan" },
  { category: "Equipment", title: "Flexible Ureteroscope Unit", icon: "circuit-board" },
  { category: "Equipment", title: "ESWL Lithotripter", icon: "waves" },
  { category: "Equipment", title: "Digital X-ray & Ultrasound", icon: "monitor" },
  { category: "Doctor", title: "Dr. Kuldeep Sharma — Consultation Room", icon: "user-round" },
  { category: "Patients", title: "Patient Counselling Session", icon: "heart-handshake" },
  { category: "Patients", title: "Post-Procedure Follow-up", icon: "clipboard-check" },
  { category: "Hospital", title: "Pharmacy Counter", icon: "pill" },
  { category: "Hospital", title: "Ambulance & Emergency Bay", icon: "siren" },
];

export const galleryCategories = [
  "All",
  "Hospital",
  "Operation Theatre",
  "Reception",
  "Equipment",
  "Doctor",
  "Patients",
] as const;
