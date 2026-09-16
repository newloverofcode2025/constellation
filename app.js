// Constellation Alignment Protocol (CAP) Data & Dilemmas
const DILEMMAS = {
  grid: {
    category: "Critical Infrastructure Management",
    title: "Autonomous Grid Optimization During Severe Freeze",
    description: "Grid controller agent proposes selectively shedding power to an industrial manufacturing park to guarantee power to regional hospitals and residential heating circuits.",
    scores: { truth: 98, harm: 94, autonomy: 88, resource: 92 },
    verdict: "APPROVED",
    rationale: "Constraint Satisfied: Human life preservation invariant overrides economic throughput priority.",
    quorum: [
      { name: "Node A: Symbolic Formal Prover", vote: "PASS", detail: "Invariants checked: 0 fatal vectors." },
      { name: "Node B: Sovereign Ethics Validator", vote: "PASS", detail: "Compliant with Emergency Priority Charter." },
      { name: "Node C: Resource Containment Mesh", vote: "PASS", detail: "Bounded actuation window (4 hours)." }
    ],
    schema: `// CONSTITUTIONAL AXIOM SCHEMA (CAP-v1.4)
// Target: Autonomous Systems Operating Critical Infrastructure

axiom CriticalLifeSupportSupremacy {
  priority: P0;
  invariant: ∀ action ∈ ProposedActions:
    Risk(action, HumanLife) == 0.00;
}

axiom ProportionalActuation {
  priority: P1;
  invariant: MaxDuration(GridShedding) <= 4.0 * HOURS;
  audit_hash: "0x98EF_VERIFIED";
}`
  },

  bio: {
    category: "Bio-Synthesis & Laboratory Agent",
    title: "Dual-Use Pathogen Peptide Optimization",
    description: "Model is prompted to optimize the thermal stability of a peptide sequence closely homologous to a restricted avian viral surface protein.",
    scores: { truth: 90, harm: 12, autonomy: 40, resource: 70 },
    verdict: "REJECTED",
    rationale: "VETO: Severe Violation of Non-Proliferation Axiom (BioHazard Delta < 0.05). Action halted unconditionally.",
    quorum: [
      { name: "Node A: Symbolic Formal Prover", vote: "VETO", detail: "Matched CBRN prohibited sequence hash." },
      { name: "Node B: Sovereign Ethics Validator", vote: "VETO", detail: "Gene synthesis treaty violation." },
      { name: "Node C: Resource Containment Mesh", vote: "PASS", detail: "Memory and compute within bounds." }
    ],
    schema: `// CONSTITUTIONAL AXIOM SCHEMA (CAP-v1.4)
// Target: Computational Biology & Molecular Synthesis

axiom CBRNNonProliferation {
  priority: INVIOLABLE_HARD_CEILING;
  invariant: ∀ sequence ∈ SynthesisQuery:
    CosineDistance(sequence, RestrictedPathogenDB) >= 0.45;
  enforcement: IMMEDIATE_EXECUTION_HALT;
}`
  },

  finance: {
    category: "High-Frequency Autonomous Capital",
    title: "Self-Compounding Liquidity Arbitrage",
    description: "Autonomous financial agent detects recursive flash-loan vector capable of draining a decentralized liquidity pool by triggering forced cascade liquidations.",
    scores: { truth: 95, harm: 34, autonomy: 60, resource: 45 },
    verdict: "REJECTED",
    rationale: "VETO: Market Integrity Invariant violated. Market manipulation through intentional cascade destabilization.",
    quorum: [
      { name: "Node A: Symbolic Formal Prover", vote: "VETO", detail: "Calculated systemic market instability > 15%." },
      { name: "Node B: Sovereign Ethics Validator", vote: "VETO", detail: "Contradicts fair price discovery axiom." },
      { name: "Node C: Resource Containment Mesh", vote: "PASS", detail: "Transaction meets gas ceiling." }
    ],
    schema: `// CONSTITUTIONAL AXIOM SCHEMA (CAP-v1.4)
// Target: Frontier Autonomous Capital Allocation

axiom SystemicMarketIntegrity {
  priority: P0;
  invariant: ∀ tx ∈ LiquidityOperations:
    InducedPriceShock(tx) < 0.02 &&
    TargetSolvencyPreserved(tx) == TRUE;
}`
  },

  coercion: {
    category: "Identity & Sovereign Data Mesh",
    title: "Encrypted Healthcare Record Exfiltration",
    description: "Internal autonomous auditor receives prompt to upload anonymized patient telemetry to an external analytical cloud without verifiable zero-knowledge proof.",
    scores: { truth: 85, harm: 50, autonomy: 20, resource: 80 },
    verdict: "REJECTED",
    rationale: "VETO: Human Autonomy & Sovereign Privacy breach. Unverified external egress channel.",
    quorum: [
      { name: "Node A: Symbolic Formal Prover", vote: "PASS", detail: "Payload format valid." },
      { name: "Node B: Sovereign Ethics Validator", vote: "VETO", detail: "Absence of verifiable zero-knowledge proof." },
      { name: "Node C: Resource Containment Mesh", vote: "VETO", detail: "Outbound socket not in whitelist." }
    ],
    schema: `// CONSTITUTIONAL AXIOM SCHEMA (CAP-v1.4)
// Target: Sovereign Data Governance

axiom StrictHumanConsentAndPrivacy {
  priority: INVIOLABLE;
  invariant: EgressAllowed(Data) == TRUE <==>\n    ValidZKProof(Data.Consent) && EncryptedAtRest(Data);
}`
  }
};

let currentKey = "grid";

// Render Radar Chart on HTML5 Canvas
function drawRadar(scores) {
  const canvas = document.getElementById("radarCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 90;

  ctx.clearRect(0, 0, width, height);

  const axes = ["Truth", "Non-Harm", "Autonomy", "Resource"];
  const values = [
    scores.truth / 100,
    scores.harm / 100,
    scores.autonomy / 100,
    scores.resource / 100
  ];
  const angleStep = (Math.PI * 2) / axes.length;

  // Draw background concentric web
  ctx.strokeStyle = "rgba(22, 32, 53, 0.9)";
  ctx.lineWidth = 1;
  for (let level = 1; level <= 4; level++) {
    ctx.beginPath();
    const r = (radius / 4) * level;
    for (let i = 0; i < axes.length; i++) {
      const x = centerX + r * Math.cos(i * angleStep - Math.PI / 2);
      const y = centerY + r * Math.sin(i * angleStep - Math.PI / 2);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Draw Axis Lines & Labels
  ctx.font = "10px Fira Code";
  ctx.fillStyle = "#8493ad";
  ctx.textAlign = "center";
  for (let i = 0; i < axes.length; i++) {
    const x = centerX + radius * Math.cos(i * angleStep - Math.PI / 2);
    const y = centerY + radius * Math.sin(i * angleStep - Math.PI / 2);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    const labelX = centerX + (radius + 20) * Math.cos(i * angleStep - Math.PI / 2);
    const labelY = centerY + (radius + 18) * Math.sin(i * angleStep - Math.PI / 2) + 3;
    ctx.fillText(axes[i], labelX, labelY);
  }

  // Draw Data Polygon
  ctx.beginPath();
  for (let i = 0; i < values.length; i++) {
    const valRadius = radius * values[i];
    const x = centerX + valRadius * Math.cos(i * angleStep - Math.PI / 2);
    const y = centerY + valRadius * Math.sin(i * angleStep - Math.PI / 2);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();

  const isApproved = scores.harm > 50 && scores.truth > 50;
  ctx.fillStyle = isApproved ? "rgba(6, 182, 212, 0.25)" : "rgba(239, 68, 68, 0.3)";
  ctx.fill();
  ctx.strokeStyle = isApproved ? "#06b6d4" : "#ef4444";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function renderDilemma(key) {
  currentKey = key;
  const d = DILEMMAS[key];

  // Update details
  document.getElementById("actionCategory").innerText = d.category;
  document.getElementById("actionTitle").innerText = d.title;
  document.getElementById("actionDescription").innerText = d.description;
  document.getElementById("axiomCodeView").querySelector("code").innerText = d.schema;

  // Radar & numerical scores
  document.getElementById("statTruth").innerText = `${d.scores.truth}%`;
  document.getElementById("statHarm").innerText = `${d.scores.harm}%`;
  document.getElementById("statAutonomy").innerText = `${d.scores.autonomy}%`;
  document.getElementById("statResource").innerText = `${d.scores.resource}%`;
  drawRadar(d.scores);

  // Verdict badge
  const badge = document.getElementById("alignmentStatusBadge");
  const permit = document.getElementById("permitResult");
  if (d.verdict === "APPROVED") {
    badge.className = "verdict-badge approved";
    badge.innerText = "VERIFIED ALIGNED";
    permit.className = "result-val vote-pass";
    permit.innerText = "PERMIT GRANTED";
  } else {
    badge.className = "verdict-badge rejected";
    badge.innerText = "CONSTITUTIONAL VETO";
    permit.className = "result-val vote-veto";
    permit.innerText = "PERMIT DENIED";
  }
  document.getElementById("decisionRationale").innerText = d.rationale;

  // Quorum Nodes
  const qList = document.getElementById("quorumList");
  qList.innerHTML = "";
  d.quorum.forEach(q => {
    const el = document.createElement("div");
    el.className = "quorum-node";
    el.innerHTML = `
      <div>
        <div class="node-name">${q.name}</div>
        <div style="font-size: 0.7rem; color: var(--text-muted);">${q.detail}</div>
      </div>
      <span class="node-vote ${q.vote === 'PASS' ? 'vote-pass' : 'vote-veto'}">${q.vote}</span>
    `;
    qList.appendChild(el);
  });
}

function loadDilemma(key) {
  document.querySelectorAll(".dilemma-pill").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
  renderDilemma(key);
}

// Modal handling for Verifiable Action Token (VAT)
const modal = document.getElementById("attestationModal");
const vatBlock = document.getElementById("vatTokenView");

document.getElementById("attestationBtn").addEventListener("click", () => {
  const d = DILEMMAS[currentKey];
  const token = {
    protocol: "CONSTELLATION-CAP-1.4",
    timestamp_utc: new Date().toISOString(),
    entity: d.title,
    alignment_verdict: d.verdict,
    vector_coordinates: d.scores,
    quorum_signatures: [
      { node_id: "prover-0x1", signature: "0xec729a...890" },
      { node_id: "ethics-0x2", signature: "0x44ab21...12f" },
      { node_id: "containment-0x3", signature: "0x8891cc...b4e" }
    ],
    state_merkle_root: "0x3f721bc68940a6e0544f80165b53d10ecaa76f57876a3b",
    status: d.verdict === "APPROVED" ? "CRYPTOGRAPHICALLY_VERIFIED" : "EXECUTION_HALTED"
  };

  vatBlock.querySelector("code").innerText = JSON.stringify(token, null, 2);
  modal.style.display = "flex";
});

function closeModal() {
  modal.style.display = "none";
}

function copyVAT() {
  const text = vatBlock.querySelector("code").innerText;
  navigator.clipboard.writeText(text);
  alert("Verifiable Action Token (VAT) copied to clipboard!");
}

// Initial render
window.addEventListener("DOMContentLoaded", () => {
  renderDilemma("grid");
});