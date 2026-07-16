export type FAQ = {
  category: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  // General
  {
    category: "General",
    question: "What is a kidney stone?",
    answer:
      "A kidney stone is a hard deposit made of minerals and salts that forms inside the kidneys when urine becomes concentrated, allowing crystals to stick together. Stones range from as small as a grain of sand to a few centimetres across.",
  },
  {
    category: "General",
    question: "How common are kidney stones in India?",
    answer:
      "Kidney stones are increasingly common across India, with certain regions — including parts of Rajasthan — seeing higher rates due to hot climate, lower fluid intake, and dietary patterns. About 1 in 10 people will experience a kidney stone in their lifetime.",
  },
  {
    category: "General",
    question: "Can kidney stones go away on their own?",
    answer:
      "Small stones (typically under 5 mm) often pass on their own with increased fluid intake and pain management. Larger stones, or ones causing blockage or infection, usually need medical intervention such as laser surgery, ESWL, or PCNL.",
  },
  {
    category: "General",
    question: "Are kidney stones hereditary?",
    answer:
      "Yes, family history increases your risk. If a parent or sibling has had kidney stones, your own risk is higher, which is why we often recommend preventive dietary counselling for patients with a family history.",
  },
  // Symptoms
  {
    category: "Symptoms",
    question: "What does kidney stone pain feel like?",
    answer:
      "Classic stone pain (renal colic) is a sudden, severe, cramping pain in the side or back, below the ribs, that can radiate to the lower abdomen and groin. It often comes in waves and is frequently described as one of the most intense pains a person can experience.",
  },
  {
    category: "Symptoms",
    question: "Can I have a kidney stone with no symptoms?",
    answer:
      "Yes — small stones sitting quietly in the kidney often cause no symptoms at all and are discovered incidentally on a scan done for another reason. Symptoms typically appear once a stone moves or blocks urine flow.",
  },
  {
    category: "Symptoms",
    question: "Is blood in urine always a sign of a kidney stone?",
    answer:
      "Blood in urine (haematuria) is a common stone symptom but can have other causes too, including infections. Any blood in urine should be evaluated promptly with a urine test and imaging.",
  },
  {
    category: "Symptoms",
    question: "When should I go to the hospital immediately for stone pain?",
    answer:
      "Seek emergency care if you have severe pain that won't ease, fever with chills, persistent vomiting, or you're unable to urinate — these can indicate an infected or completely blocked kidney, which needs urgent treatment.",
  },
  // Diagnosis
  {
    category: "Diagnosis",
    question: "How are kidney stones diagnosed?",
    answer:
      "Diagnosis typically starts with a urine test and ultrasound, with a non-contrast CT scan used to precisely determine the stone's size, location, and density when surgical planning is needed.",
  },
  {
    category: "Diagnosis",
    question: "Do I need a CT scan for every kidney stone?",
    answer:
      "Not always — many stones can be monitored with ultrasound and X-ray. A CT scan is recommended when planning a procedure, when the diagnosis is unclear, or when a stone isn't visible clearly on other imaging.",
  },
  // Treatment
  {
    category: "Treatment",
    question: "What treatment options are available for kidney stones?",
    answer:
      "Options range from conservative management (fluids and medication for small stones) to ESWL, URS, RIRS, PCNL and laser stone surgery for larger or symptomatic stones. Dr. Sharma recommends the least invasive option appropriate for your stone's size, location and composition.",
  },
  {
    category: "Treatment",
    question: "Which treatment is right for my stone?",
    answer:
      "It depends on stone size, location, hardness, your kidney anatomy, and any prior treatment history. A CT scan and consultation lets us recommend the most appropriate, least invasive option for your specific case.",
  },
  {
    category: "Treatment",
    question: "Is surgery always required for kidney stones?",
    answer:
      "No. Many small stones under 5 mm pass on their own with hydration and medication. Surgery or a procedure is generally recommended for larger stones, stones causing blockage, infection, or unrelenting pain.",
  },
  {
    category: "Treatment",
    question: "How long does kidney stone surgery take?",
    answer:
      "Most laser, URS and RIRS procedures take 30–90 minutes. PCNL for larger stones typically takes 60–120 minutes. ESWL sessions run 30–45 minutes and require no anaesthesia downtime.",
  },
  {
    category: "Treatment",
    question: "Will I be admitted to the hospital for stone treatment?",
    answer:
      "ESWL is done on an outpatient basis with same-day discharge. Laser, URS and RIRS usually involve same-day to one-night stays. PCNL, used for larger stones, typically requires a two- to three-night stay.",
  },
  {
    category: "Treatment",
    question: "What is a DJ stent and will I need one?",
    answer:
      "A DJ (double-J) stent is a thin, flexible tube placed temporarily inside the ureter to keep it open and support drainage while it heals after a procedure. Many, though not all, patients need one for 1–3 weeks after laser, URS or RIRS.",
  },
  {
    category: "Treatment",
    question: "Is stent removal painful?",
    answer:
      "Stent removal is a quick outpatient procedure, usually done under local anaesthesia or without anaesthesia at all, and takes only a few minutes with minimal discomfort.",
  },
  // Recovery
  {
    category: "Recovery",
    question: "How long is the recovery after kidney stone surgery?",
    answer:
      "Recovery varies by procedure: 1–2 days for ESWL, 2–4 days for laser/URS, 3–5 days for RIRS, and 1–2 weeks for PCNL. Most patients resume light activity well before full recovery is complete.",
  },
  {
    category: "Recovery",
    question: "What should I eat after kidney stone treatment?",
    answer:
      "Drink plenty of water, favour a balanced diet with moderate salt and animal protein, and avoid excessive oxalate-rich foods if you've had calcium-oxalate stones. We provide a stone-type-specific diet sheet after treatment.",
  },
  {
    category: "Recovery",
    question: "When can I drive after a stone procedure?",
    answer:
      "Most patients can drive again within 2–3 days after laser/URS/RIRS and about a week after PCNL, once pain has settled and you're off sedating medication. ESWL patients can usually drive the next day.",
  },
  {
    category: "Recovery",
    question: "Will I need follow-up visits after treatment?",
    answer:
      "Yes — a follow-up scan (usually 4–6 weeks after treatment) confirms complete stone clearance, and any temporary stent is removed at a scheduled visit.",
  },
  // Prevention
  {
    category: "Prevention",
    question: "How can I prevent kidney stones from coming back?",
    answer:
      "Drink 2.5–3 litres of water daily, moderate salt and animal protein intake, maintain a healthy weight, and follow any stone-specific dietary advice based on your stone's composition. Roughly half of patients who've had one stone will have another within 10 years without preventive steps.",
  },
  {
    category: "Prevention",
    question: "Does drinking more water really prevent kidney stones?",
    answer:
      "Yes — adequate hydration is the single most effective prevention step. Concentrated urine allows minerals to crystallise; diluting urine with sufficient water intake significantly reduces stone-forming risk.",
  },
  {
    category: "Prevention",
    question: "Should I avoid calcium to prevent stones?",
    answer:
      "No — counterintuitively, adequate dietary calcium (from food, not necessarily supplements) helps bind oxalate in the gut and can reduce stone risk. Restricting calcium is generally not recommended unless specifically advised.",
  },
  {
    category: "Prevention",
    question: "What foods should I avoid if I've had a kidney stone?",
    answer:
      "It depends on stone composition. For calcium-oxalate stones (the most common type), moderating spinach, nuts, chocolate, and excess salt and animal protein is often advised. We provide personalised dietary guidance based on your stone analysis.",
  },
  // Cost & Insurance
  {
    category: "Cost & Insurance",
    question: "Does insurance cover kidney stone treatment?",
    answer:
      "Most health insurance policies cover medically necessary stone procedures, including laser surgery, PCNL and RIRS. We work with major insurers for cashless admission where eligible — our billing desk verifies coverage before your procedure.",
  },
  {
    category: "Cost & Insurance",
    question: "How much does kidney stone treatment cost?",
    answer:
      "Cost depends on the procedure recommended, stone size and complexity, and hospital stay required. We provide a clear cost estimate at consultation before any procedure is scheduled, with no hidden charges.",
  },
  // Visiting the hospital
  {
    category: "Visiting Us",
    question: "Do I need an appointment or can I walk in?",
    answer:
      "We recommend booking an appointment online or via WhatsApp/phone so we can prepare for your visit, but walk-ins are accommodated, especially for urgent stone pain.",
  },
  {
    category: "Visiting Us",
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any prior scans or reports (ultrasound, CT, X-ray), a list of current medications, your insurance card if applicable, and a valid photo ID.",
  },
  {
    category: "Visiting Us",
    question: "Is emergency stone care available at night or on weekends?",
    answer:
      "Yes — KG Stone Hospital provides 24×7 emergency care for severe stone pain and urological emergencies, including outside our regular outpatient hours.",
  },
];

export const faqCategories = Array.from(new Set(faqs.map((f) => f.category)));
