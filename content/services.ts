export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  summary: string;
  bestFor: string;
  duration: string;
  anesthesia: string;
  hospitalStay: string;
  recovery: string;
  about: string[];
  procedure: string[];
  benefits: string[];
  risks: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "laser-stone-surgery",
    name: "Laser Stone Surgery",
    shortName: "Laser Surgery",
    tagline: "Precise, scarless stone fragmentation with holmium laser",
    icon: "zap",
    summary:
      "Laser stone surgery uses a holmium laser fibre passed through a thin scope to break kidney and ureteric stones into dust or fragments small enough to pass naturally or be removed directly — no cuts, no external incision.",
    bestFor: "Stones up to 2 cm in the kidney or anywhere along the ureter",
    duration: "45–75 minutes",
    anesthesia: "Spinal or general anaesthesia",
    hospitalStay: "Same day to 1 night",
    recovery: "2–4 days to resume normal activity",
    about: [
      "Laser stone surgery is the umbrella term for laser-assisted procedures — most commonly delivered as RIRS (for kidney stones) or URS (for ureteric stones) — where a holmium:YAG laser fibre is threaded through a ureteroscope to fragment stones under direct vision.",
      "Because the laser can be tuned to 'dust' a stone into fine particles that pass naturally in urine, or fragment it into pieces small enough to retrieve with a basket, it is one of the most versatile tools in modern stone treatment and is suitable for stones that are too hard for shockwave therapy.",
    ],
    procedure: [
      "You'll be given spinal or general anaesthesia so the procedure is pain-free.",
      "A ureteroscope is passed through the natural urinary passage — no external cut is made.",
      "The holmium laser fibre fragments or dusts the stone under live video guidance.",
      "A temporary DJ (double-J) stent may be placed to keep the ureter open while it heals.",
      "You're moved to recovery and monitored for a few hours before discharge.",
    ],
    benefits: [
      "No external incision or visible scar",
      "Effective on stones of any hardness composition",
      "Short hospital stay, often same-day discharge",
      "Faster return to work than open surgery",
      "High single-session clearance rate",
    ],
    risks: [
      "Mild burning or blood-tinged urine for 1–2 days",
      "Temporary stent discomfort until removal",
      "Small risk of infection, managed with antibiotics",
      "Rare chance a second session is needed for very large stones",
    ],
    faqs: [
      {
        question: "Is laser stone surgery painful?",
        answer:
          "The procedure itself is done under anaesthesia, so you won't feel it. Mild discomfort or a burning sensation while urinating is common for a day or two afterward and is managed with medication.",
      },
      {
        question: "Will I need a stent after laser surgery?",
        answer:
          "For many ureteric stones, yes — a temporary DJ stent is placed for 1–2 weeks to prevent swelling from blocking urine flow, and is removed in a quick outpatient visit.",
      },
      {
        question: "How soon can I go back to work?",
        answer:
          "Most patients with desk jobs return within 2–4 days. Those with physically demanding work are advised to wait about a week.",
      },
    ],
  },
  {
    slug: "pcnl",
    name: "Percutaneous Nephrolithotomy (PCNL)",
    shortName: "PCNL",
    tagline: "The gold standard for large and staghorn kidney stones",
    icon: "scan",
    summary:
      "PCNL removes large kidney stones (typically above 2 cm) through a small, keyhole tract made directly into the kidney through the back, allowing the surgeon to break and extract the stone in a single procedure.",
    bestFor: "Large, multiple, or staghorn kidney stones above 2 cm",
    duration: "60–120 minutes",
    anesthesia: "General or spinal anaesthesia",
    hospitalStay: "2–3 nights",
    recovery: "1–2 weeks to resume normal activity",
    about: [
      "PCNL (Percutaneous Nephrolithotomy) is the most effective option for kidney stones too large or too dense to clear efficiently with laser or shockwave alone. Rather than approaching through the natural urinary passage, the surgeon creates a small tunnel — about the width of a pencil — directly into the kidney through the back.",
      "This direct access lets us clear large-volume and staghorn stones in a single sitting far more efficiently than repeated smaller procedures, which is why it remains the internationally recommended 'gold standard' for stones of this size.",
    ],
    procedure: [
      "Under anaesthesia, a needle tract is created into the kidney under X-ray/ultrasound guidance.",
      "The tract is gradually widened to accommodate a small telescope (nephroscope).",
      "The stone is fragmented using laser or pneumatic energy and fragments are suctioned or removed.",
      "A drainage tube (nephrostomy) and/or internal stent is placed temporarily.",
      "You're monitored in-hospital for 2–3 nights before discharge.",
    ],
    benefits: [
      "Clears large and staghorn stones in one session",
      "Higher single-session stone-free rate than other methods for large stones",
      "Small keyhole tract instead of open surgical incision",
      "Immediate visual confirmation of stone clearance",
    ],
    risks: [
      "Some post-operative pain at the tract site, managed with medication",
      "Temporary blood in urine for a few days",
      "Small risk of bleeding requiring transfusion (rare)",
      "Possible need for a short drainage tube after the procedure",
    ],
    faqs: [
      {
        question: "Is PCNL a major surgery?",
        answer:
          "It's minimally invasive compared to traditional open stone surgery — there's no large incision, just a small keyhole tract — but it is a more involved procedure than laser or ESWL, which is why it requires a short hospital stay.",
      },
      {
        question: "Will I have a visible scar after PCNL?",
        answer:
          "The tract is about 1 cm wide and heals into a small, faint mark on the back, not the long scar associated with open stone surgery.",
      },
      {
        question: "How large a stone can PCNL treat?",
        answer:
          "PCNL is typically recommended for stones above 2 cm, including complex staghorn stones that fill much of the kidney's collecting system.",
      },
    ],
  },
  {
    slug: "urs",
    name: "Ureteroscopy (URS)",
    shortName: "URS",
    tagline: "Scope-based removal of stones lodged in the ureter",
    icon: "circuit-board",
    summary:
      "Ureteroscopy (URS) uses a slim scope passed through the natural urinary passage up into the ureter to locate, fragment (usually with a laser) and retrieve stones that have moved down from the kidney and become lodged.",
    bestFor: "Stones anywhere along the ureter, including near the bladder",
    duration: "30–60 minutes",
    anesthesia: "Spinal or general anaesthesia",
    hospitalStay: "Same day to 1 night",
    recovery: "2–3 days to resume normal activity",
    about: [
      "When a kidney stone breaks loose and travels down the ureter — the tube connecting kidney to bladder — it can cause sudden, severe pain and, if it doesn't pass on its own, may need direct removal. URS is the most direct way to reach and clear these stones.",
      "A rigid or semi-rigid ureteroscope is passed through the urethra and bladder into the ureter with no external incision at all. Once the stone is located, a laser fibre fragments it, and pieces are removed with a small basket or allowed to pass naturally.",
    ],
    procedure: [
      "Anaesthesia is administered so the procedure is pain-free.",
      "The ureteroscope is guided up through the natural urinary passage to the stone.",
      "The stone is fragmented with laser energy and fragments are retrieved with a basket.",
      "A temporary stent may be placed if there was swelling or the ureter was tight.",
      "Discharge is typically the same day or after one night of observation.",
    ],
    benefits: [
      "No incision anywhere on the body",
      "Excellent option for mid- and lower-ureter stones",
      "High success rate in a single session",
      "Quick recovery — most patients are back to normal within days",
    ],
    risks: [
      "Mild burning or urgency while urinating for a few days",
      "Stent-related discomfort if one is placed",
      "Small risk the stone migrates back to the kidney, requiring RIRS instead",
    ],
    faqs: [
      {
        question: "What's the difference between URS and RIRS?",
        answer:
          "URS uses a rigid or semi-rigid scope and is best for stones in the ureter. RIRS uses a flexible scope that can bend into the kidney itself, so it's used for stones sitting inside the kidney's collecting system.",
      },
      {
        question: "Can URS be done for a stone stuck near the bladder?",
        answer:
          "Yes — the lower ureter, closest to the bladder, is one of the most common and straightforward locations for URS.",
      },
    ],
  },
  {
    slug: "rirs",
    name: "Retrograde Intrarenal Surgery (RIRS)",
    shortName: "RIRS",
    tagline: "Flexible-scope laser surgery for stones inside the kidney",
    icon: "waves",
    summary:
      "RIRS uses a flexible ureteroscope that can bend and reach every part of the kidney's internal drainage system, combined with holmium laser dusting, to clear kidney stones up to about 2 cm without any incision.",
    bestFor: "Kidney stones up to 2 cm, including those in hard-to-reach parts of the kidney",
    duration: "45–90 minutes",
    anesthesia: "Spinal or general anaesthesia",
    hospitalStay: "Same day to 1 night",
    recovery: "3–5 days to resume normal activity",
    about: [
      "RIRS (Retrograde Intrarenal Surgery) is the modern, scarless alternative to PCNL for small-to-medium kidney stones. Instead of a tract through the back, the flexible scope travels up through the natural urinary passage, through the ureter, and into the kidney itself.",
      "Because the scope can flex and angle into calyces (the small chambers of the kidney) that a rigid scope can't reach, RIRS can clear stones sitting in awkward positions that would otherwise need a more invasive approach.",
    ],
    procedure: [
      "Under anaesthesia, a flexible ureteroscope is passed up to the kidney via the natural passage.",
      "A guiding sheath is often used to allow repeated, gentle passes of the scope.",
      "The holmium laser dusts the stone into fine particles that clear naturally.",
      "A temporary stent is placed to support drainage while the kidney heals.",
      "Most patients are discharged the same day or after one night.",
    ],
    benefits: [
      "No incision — access is entirely through the natural urinary passage",
      "Reaches stones in awkward calyces that PCNL access may miss",
      "Shorter hospital stay than PCNL for comparable stone sizes",
      "Suitable for patients on blood thinners who can't safely undergo PCNL",
    ],
    risks: [
      "Post-procedure stent discomfort for 1–2 weeks",
      "Mild fever risk if a urine infection was present pre-operatively",
      "May need a second, staged session for stones near the upper size limit",
    ],
    faqs: [
      {
        question: "Is RIRS as effective as PCNL for kidney stones?",
        answer:
          "For stones up to roughly 2 cm, RIRS achieves comparable clearance rates to PCNL with a smaller footprint — no tract, shorter stay, faster recovery. For larger or staghorn stones, PCNL remains more efficient.",
      },
      {
        question: "Why would I need a stent after RIRS?",
        answer:
          "The ureter can swell slightly after repeated scope passes. A temporary stent keeps urine draining freely while that swelling resolves, and is removed in a brief outpatient visit.",
      },
    ],
  },
  {
    slug: "eswl",
    name: "Extracorporeal Shock Wave Lithotripsy (ESWL)",
    shortName: "ESWL",
    tagline: "Non-invasive, no-incision stone treatment from outside the body",
    icon: "target",
    summary:
      "ESWL uses focused shockwaves generated outside the body to break kidney or upper-ureter stones into sand-like fragments that pass naturally in urine — no anaesthesia downtime, no incision, and no hospital stay for most patients.",
    bestFor: "Smaller, softer stones up to about 1.5 cm in the kidney or upper ureter",
    duration: "30–45 minutes per session",
    anesthesia: "None to mild sedation",
    hospitalStay: "Outpatient — go home the same day",
    recovery: "1–2 days to resume normal activity",
    about: [
      "ESWL (shockwave lithotripsy) is the least invasive way to treat suitable kidney stones. High-energy shockwaves are focused precisely onto the stone using X-ray or ultrasound targeting, delivered through the skin with no cuts and no scopes inside the body.",
      "The shockwaves fracture the stone into small fragments over the course of the session, which then pass out naturally over the following days to weeks. It's best suited to smaller, softer stones — harder or larger stones respond better to laser-based options.",
    ],
    procedure: [
      "You lie on the treatment table; the stone is located and targeted with imaging.",
      "Focused shockwaves are delivered through the skin onto the stone, typically 1,500–3,000 shocks per session.",
      "Mild sedation or pain relief is given if needed — most patients tolerate it well without general anaesthesia.",
      "You rest for a short period and go home the same day.",
      "Fragments pass over the following 1–3 weeks; follow-up imaging confirms clearance.",
    ],
    benefits: [
      "Completely non-invasive — no scope, no incision",
      "No hospital admission required",
      "Minimal recovery time — most return to work the next day",
      "Can often be repeated if a second session is needed",
    ],
    risks: [
      "Mild bruising or discomfort at the treatment site",
      "Some blood in urine for a day or two",
      "Passing fragments can cause temporary colicky pain",
      "Less effective on very hard or large stones — may need laser treatment instead",
    ],
    faqs: [
      {
        question: "Does ESWL hurt?",
        answer:
          "Most patients describe it as a tapping or thumping sensation rather than pain. Mild sedation or oral pain relief keeps you comfortable throughout.",
      },
      {
        question: "How do I know if my stone is suitable for ESWL?",
        answer:
          "Dr. Sharma reviews your stone's size, location and density (from a CT or X-ray) at consultation — softer, smaller stones respond best. Harder or larger stones are usually better served by laser treatment or PCNL.",
      },
      {
        question: "How many ESWL sessions will I need?",
        answer:
          "Many smaller stones clear in a single session. Larger or denser stones may need 2–3 sessions spaced a couple of weeks apart.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
