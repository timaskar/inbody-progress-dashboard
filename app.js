const scans = [
  {
    date: "2025-02-09",
    label: "09 фев 2025",
    source: "InBody.pdf",
    height: 176,
    weight: 70.5,
    water: 41.4,
    protein: 11.0,
    minerals: 3.77,
    bodyFatMass: 14.3,
    skeletalMuscleMass: 31.4,
    bmi: 22.8,
    bodyFatPct: 20.3,
    score: 74,
    idealWeight: 68.1,
    weightControl: -2.4,
    fatControl: -4.1,
    muscleControl: 1.7,
    whr: 0.88,
    visceralFatLevel: 6,
    fatFreeMass: 56.2,
    bmr: 1584,
    recommendedCalories: 2752,
  },
  {
    date: "2025-02-20",
    label: "20 фев 2025",
    source: "Adobe Scan Feb 20, 2025.pdf",
    height: 176,
    weight: 70.3,
    water: 40.9,
    protein: 10.9,
    minerals: 3.87,
    bodyFatMass: 14.6,
    skeletalMuscleMass: 31.0,
    bmi: 22.7,
    bodyFatPct: 20.8,
    score: 73,
    idealWeight: 68.2,
    weightControl: -2.1,
    fatControl: -4.4,
    muscleControl: 2.3,
    whr: 0.85,
    visceralFatLevel: 6,
    fatFreeMass: 55.7,
    bmr: 1572,
    recommendedCalories: 2748,
  },
  {
    date: "2025-03-18",
    label: "18 мар 2025",
    source: "Adobe Scan Mar 18, 2025.pdf",
    height: 176,
    weight: 70.3,
    water: 41.4,
    protein: 11.1,
    minerals: 3.78,
    bodyFatMass: 14.0,
    skeletalMuscleMass: 31.6,
    bmi: 22.7,
    bodyFatPct: 19.9,
    score: 75,
    idealWeight: 68.1,
    weightControl: -2.2,
    fatControl: -3.8,
    muscleControl: 1.6,
    whr: 0.87,
    visceralFatLevel: 6,
    fatFreeMass: 56.3,
    bmr: 1586,
    recommendedCalories: 2748,
  },
  {
    date: "2025-04-11",
    label: "11 апр 2025",
    source: "Adobe Scan Apr 11, 2025.pdf",
    height: 176,
    weight: 70.5,
    water: 41.1,
    protein: 11.0,
    minerals: 3.77,
    bodyFatMass: 14.6,
    skeletalMuscleMass: 31.3,
    bmi: 22.8,
    bodyFatPct: 20.7,
    score: 74,
    idealWeight: 68.1,
    weightControl: -2.4,
    fatControl: -4.4,
    muscleControl: 2.0,
    whr: 0.89,
    visceralFatLevel: 6,
    fatFreeMass: 55.9,
    bmr: 1578,
    recommendedCalories: 2752,
  },
  {
    date: "2025-09-07",
    label: "07 сен 2025",
    source: "Adobe Scan Sep 7, 2025.pdf",
    height: 177,
    weight: 69.9,
    water: 42.0,
    protein: 11.4,
    minerals: 3.89,
    bodyFatMass: 12.6,
    skeletalMuscleMass: 32.2,
    bmi: 22.3,
    bodyFatPct: 18.1,
    score: 76,
    idealWeight: 68.9,
    weightControl: -1.0,
    fatControl: -2.3,
    muscleControl: 1.3,
    whr: 0.85,
    visceralFatLevel: 5,
    fatFreeMass: 57.3,
    bmr: 1607,
    recommendedCalories: null,
  },
  {
    date: "2025-11-26",
    label: "26 ноя 2025",
    source: "Adobe Scan Nov 26, 2025.pdf",
    height: 178,
    weight: 71.5,
    water: 43.4,
    protein: 11.6,
    minerals: 4.0,
    bodyFatMass: 12.5,
    skeletalMuscleMass: 33.1,
    bmi: 22.6,
    bodyFatPct: 17.5,
    score: 78,
    idealWeight: 69.7,
    weightControl: -1.8,
    fatControl: -2.1,
    muscleControl: 0.3,
    whr: 0.84,
    visceralFatLevel: 5,
    fatFreeMass: 59.0,
    bmr: 1644,
    recommendedCalories: 2772,
  },
  {
    date: "2025-12-03",
    label: "03 дек 2025",
    source: "Adobe Scan Dec 3, 2025.pdf",
    height: 175,
    weight: 71.6,
    water: 42.4,
    protein: 11.4,
    minerals: 3.9,
    bodyFatMass: 13.9,
    skeletalMuscleMass: 32.3,
    bmi: 23.4,
    bodyFatPct: 19.4,
    score: 77,
    idealWeight: 67.9,
    weightControl: -3.7,
    fatControl: -3.7,
    muscleControl: 0.0,
    whr: 0.86,
    visceralFatLevel: 6,
    fatFreeMass: 57.7,
    bmr: 1616,
    recommendedCalories: 2755,
  },
  {
    date: "2026-02-28",
    label: "28 фев 2026",
    source: "Adobe Scan Feb 28, 2026.pdf",
    height: 175,
    weight: 71.6,
    water: 42.5,
    protein: 11.4,
    minerals: 3.89,
    bodyFatMass: 13.8,
    skeletalMuscleMass: 32.5,
    bmi: 23.4,
    bodyFatPct: 19.3,
    score: 77,
    idealWeight: 68.0,
    weightControl: -3.6,
    fatControl: -3.6,
    muscleControl: 0.0,
    whr: 0.87,
    visceralFatLevel: 6,
    fatFreeMass: 57.8,
    bmr: 1619,
    recommendedCalories: 2756,
  },
];

const metrics = [
  { key: "weight", label: "Вес", unit: "кг", color: "#087f8c", direction: "neutral", precision: 1 },
  { key: "skeletalMuscleMass", label: "Скелетная мышечная масса", unit: "кг", color: "#277da1", direction: "up", precision: 1 },
  { key: "bodyFatMass", label: "Жировая масса", unit: "кг", color: "#f15b4f", direction: "down", precision: 1 },
  { key: "bodyFatPct", label: "Процент жира", unit: "%", color: "#ff7a59", direction: "down", precision: 1 },
  { key: "bmi", label: "ИМТ", unit: "кг/м²", color: "#7057d2", direction: "neutral", precision: 1 },
  { key: "visceralFatLevel", label: "Висцеральный жир", unit: "ур.", color: "#d79200", direction: "down", precision: 0 },
  { key: "score", label: "Оценка InBody", unit: "балл", color: "#0b6e99", direction: "up", precision: 0 },
];

const tableMetrics = [
  ...metrics,
  { key: "water", label: "Вода", unit: "л", precision: 1 },
  { key: "protein", label: "Протеин", unit: "кг", precision: 1 },
  { key: "minerals", label: "Минералы", unit: "кг", precision: 2 },
  { key: "fatFreeMass", label: "Безжировая масса", unit: "кг", precision: 1 },
  { key: "bmr", label: "Базовый обмен", unit: "ккал", precision: 0 },
  { key: "whr", label: "Талия/бедра", unit: "", precision: 2 },
];

const composition = [
  { key: "water", label: "Вода", color: "#59bfc2" },
  { key: "protein", label: "Протеин", color: "#087f8c" },
  { key: "minerals", label: "Минералы", color: "#7057d2" },
  { key: "bodyFatMass", label: "Жировая масса", color: "#f15b4f" },
];

const state = {
  selectedMetrics: new Set(["weight", "skeletalMuscleMass", "bodyFatMass", "bodyFatPct", "score"]),
  chartMode: "normalized",
  range: "all",
  selectedIndex: scans.length - 1,
  baselineIndex: 0,
};

const el = (id) => document.getElementById(id);
const fmt = (value, precision = 1) => value == null ? "-" : Number(value).toFixed(precision);
const signed = (value, precision = 1) => `${value > 0 ? "+" : ""}${fmt(value, precision)}`;
const pct = (value) => `${value > 0 ? "+" : ""}${fmt(value, 1)}%`;
const byKey = (key) => metrics.find((metric) => metric.key === key) || tableMetrics.find((metric) => metric.key === key);

function filteredScans() {
  if (state.range === "2025") return scans.filter((scan) => scan.date.startsWith("2025"));
  if (state.range === "last4") return scans.slice(-4);
  return scans;
}

function classifyDelta(metric, delta) {
  if (Math.abs(delta) < 0.05) return "neutral";
  if (metric.direction === "up") return delta > 0 ? "good" : "bad";
  if (metric.direction === "down") return delta < 0 ? "good" : "bad";
  return "neutral";
}

function renderControls() {
  const toggles = metrics.map((metric) => {
    const checked = state.selectedMetrics.has(metric.key) ? "checked" : "";
    return `
      <label class="metric-toggle">
        <span class="metric-dot" style="background:${metric.color}"></span>
        <span>${metric.label}</span>
        <input type="checkbox" value="${metric.key}" ${checked} />
      </label>
    `;
  }).join("");
  el("metricToggles").innerHTML = toggles;
  el("metricToggles").querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) state.selectedMetrics.add(input.value);
      else state.selectedMetrics.delete(input.value);
      renderChart();
    });
  });

  el("baselineSelect").innerHTML = scans.map((scan, index) => (
    `<option value="${index}" ${index === state.baselineIndex ? "selected" : ""}>${scan.label}</option>`
  )).join("");
  el("baselineSelect").addEventListener("change", (event) => {
    state.baselineIndex = Number(event.target.value);
    renderAll();
  });

  el("rangeSelect").addEventListener("change", (event) => {
    state.range = event.target.value;
    renderChart();
  });

  el("focusMetric").innerHTML = metrics.map((metric) => (
    `<option value="${metric.key}">${metric.label}</option>`
  )).join("");

  el("normalizeButton").addEventListener("click", () => {
    state.chartMode = "normalized";
    el("normalizeButton").classList.add("active");
    el("absoluteButton").classList.remove("active");
    renderChart();
  });

  el("absoluteButton").addEventListener("click", () => {
    state.chartMode = "absolute";
    el("absoluteButton").classList.add("active");
    el("normalizeButton").classList.remove("active");
    renderChart();
  });

  el("focusMetric").addEventListener("change", () => {
    state.chartMode = "absolute";
    el("absoluteButton").classList.add("active");
    el("normalizeButton").classList.remove("active");
    renderChart();
  });
}

function renderKpis() {
  const latest = scans.at(-1);
  const base = scans[state.baselineIndex];
  const kpis = metrics.map((metric) => {
    const delta = latest[metric.key] - base[metric.key];
    const rel = base[metric.key] ? (delta / base[metric.key]) * 100 : 0;
    const cls = classifyDelta(metric, delta);
    return `
      <article class="kpi-card">
        <div class="kpi-label">
          <span class="metric-dot" style="background:${metric.color}"></span>
          ${metric.label}
        </div>
        <div class="kpi-value">${fmt(latest[metric.key], metric.precision)} <span class="kpi-unit">${metric.unit}</span></div>
        <div class="kpi-change ${cls}">${signed(delta, metric.precision)} ${metric.unit} (${pct(rel)})</div>
        ${sparkline(metric.key, metric.color)}
      </article>
    `;
  }).join("");
  el("kpiGrid").innerHTML = kpis;
}

function sparkline(key, color) {
  const width = 170;
  const height = 34;
  const values = scans.map((scan) => scan[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - ((value - min) / span) * (height - 8) - 4;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `
    <svg class="sparkline" viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <polyline points="${points}" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

function renderChart() {
  const svg = el("trendChart");
  const data = filteredScans();
  const keys = state.chartMode === "absolute" ? [el("focusMetric").value] : [...state.selectedMetrics];
  const selectedKeys = keys.length ? keys : ["weight"];
  const width = svg.clientWidth || 900;
  const height = svg.clientHeight || 390;
  const margin = { top: 24, right: 28, bottom: 48, left: 48 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  const x = (index) => margin.left + (data.length === 1 ? innerW / 2 : (index / (data.length - 1)) * innerW);
  const allValues = selectedKeys.flatMap((key) => data.map((scan) => scan[key]));
  let absoluteMin = Math.min(...allValues);
  let absoluteMax = Math.max(...allValues);
  if (absoluteMin === absoluteMax) {
    absoluteMin -= 1;
    absoluteMax += 1;
  }
  const pad = (absoluteMax - absoluteMin) * 0.12;
  absoluteMin -= pad;
  absoluteMax += pad;

  const yAbsolute = (value) => margin.top + (1 - (value - absoluteMin) / (absoluteMax - absoluteMin)) * innerH;
  const yNormalized = (key, value) => {
    const values = data.map((scan) => scan[key]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    return margin.top + (1 - (value - min) / span) * innerH;
  };

  for (let i = 0; i <= 4; i += 1) {
    const y = margin.top + (i / 4) * innerH;
    svg.insertAdjacentHTML("beforeend", `<line class="grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" />`);
  }

  data.forEach((scan, index) => {
    const tx = x(index);
    svg.insertAdjacentHTML("beforeend", `<text class="chart-label" x="${tx}" y="${height - 18}" text-anchor="middle">${scan.label.replace(" 2025", "").replace(" 2026", "")}</text>`);
  });

  if (state.chartMode === "absolute") {
    for (let i = 0; i <= 4; i += 1) {
      const value = absoluteMax - ((absoluteMax - absoluteMin) * i) / 4;
      const y = margin.top + (i / 4) * innerH + 4;
      svg.insertAdjacentHTML("beforeend", `<text class="axis-label" x="8" y="${y}">${fmt(value, byKey(selectedKeys[0]).precision)}</text>`);
    }
  } else {
    svg.insertAdjacentHTML("beforeend", `<text class="axis-label" x="8" y="${margin.top + 4}">max</text>`);
    svg.insertAdjacentHTML("beforeend", `<text class="axis-label" x="8" y="${margin.top + innerH + 4}">min</text>`);
  }

  selectedKeys.forEach((key) => {
    const metric = byKey(key);
    const points = data.map((scan, index) => {
      const y = state.chartMode === "absolute" ? yAbsolute(scan[key]) : yNormalized(key, scan[key]);
      return `${x(index)},${y}`;
    }).join(" ");
    svg.insertAdjacentHTML("beforeend", `<polyline points="${points}" fill="none" stroke="${metric.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`);
    data.forEach((scan, index) => {
      const cy = state.chartMode === "absolute" ? yAbsolute(scan[key]) : yNormalized(key, scan[key]);
      svg.insertAdjacentHTML("beforeend", `<circle cx="${x(index)}" cy="${cy}" r="4" fill="${metric.color}" stroke="#fff" stroke-width="2" />`);
    });
  });

  const overlay = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  overlay.setAttribute("x", margin.left);
  overlay.setAttribute("y", margin.top);
  overlay.setAttribute("width", innerW);
  overlay.setAttribute("height", innerH);
  overlay.setAttribute("fill", "transparent");
  overlay.addEventListener("mousemove", (event) => showTooltip(event, data, selectedKeys, margin, innerW, innerH));
  overlay.addEventListener("mouseleave", () => {
    el("chartTooltip").hidden = true;
    svg.querySelectorAll(".hover-guide").forEach((node) => node.remove());
  });
  svg.appendChild(overlay);
}

function showTooltip(event, data, keys, margin, innerW, innerH) {
  const svg = el("trendChart");
  const rect = svg.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, (mouseX - margin.left) / innerW));
  const index = Math.round(ratio * (data.length - 1));
  const scan = data[index];
  const x = margin.left + (index / (data.length - 1)) * innerW;
  svg.querySelectorAll(".hover-guide").forEach((node) => node.remove());
  svg.insertAdjacentHTML("beforeend", `<line class="hover-guide" x1="${x}" y1="${margin.top}" x2="${x}" y2="${margin.top + innerH}" stroke="#8a99a5" stroke-dasharray="4 4" />`);

  const rows = keys.map((key) => {
    const metric = byKey(key);
    return `<div class="tooltip-row"><span style="color:${metric.color}">${metric.label}</span><b>${fmt(scan[key], metric.precision)} ${metric.unit}</b></div>`;
  }).join("");
  const tooltip = el("chartTooltip");
  tooltip.innerHTML = `<strong>${scan.label}</strong>${rows}`;
  tooltip.hidden = false;
  const left = Math.min(rect.width - 210, Math.max(12, x + 18));
  tooltip.style.left = `${left}px`;
  tooltip.style.top = "58px";
}

function renderInsights() {
  const first = scans[state.baselineIndex];
  const latest = scans.at(-1);
  const items = [
    {
      icon: "+",
      title: "Мышцы выросли",
      text: `Скелетная мышечная масса: ${fmt(first.skeletalMuscleMass)} -> ${fmt(latest.skeletalMuscleMass)} кг (${signed(latest.skeletalMuscleMass - first.skeletalMuscleMass)} кг).`,
    },
    {
      icon: "-",
      title: "Жир снизился относительно старта",
      text: `Жировая масса: ${fmt(first.bodyFatMass)} -> ${fmt(latest.bodyFatMass)} кг; процент жира: ${fmt(first.bodyFatPct)}% -> ${fmt(latest.bodyFatPct)}%.`,
    },
    {
      icon: "!",
      title: "Откат после лучшего замера",
      text: `Лучший процент жира был ${fmt(Math.min(...scans.map((s) => s.bodyFatPct)))}% 26 ноя 2025, последний скан показывает ${fmt(latest.bodyFatPct)}%.`,
    },
    {
      icon: "↑",
      title: "Оценка InBody выше старта",
      text: `Оценка: ${first.score} -> ${latest.score} баллов. Пик был ${Math.max(...scans.map((s) => s.score))} баллов.`,
    },
  ];
  el("insights").innerHTML = items.map((item) => `
    <div class="insight">
      <div class="insight-icon">${item.icon}</div>
      <div><strong>${item.title}</strong><span>${item.text}</span></div>
    </div>
  `).join("");
}

function renderComposition() {
  const scan = scans[state.selectedIndex];
  el("selectedScanCaption").textContent = `${scan.label}, вес ${fmt(scan.weight)} кг, источник: ${scan.source}`;
  renderDonut(scan);
  renderBars(scan);
  renderControl(scan);
}

function renderDonut(scan) {
  const svg = el("compositionDonut");
  const size = 220;
  const radius = 86;
  const stroke = 28;
  const center = size / 2;
  const total = scan.weight;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svg.innerHTML = `<circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="#edf2f5" stroke-width="${stroke}" />`;
  composition.forEach((part) => {
    const value = scan[part.key];
    const dash = (value / total) * circumference;
    svg.insertAdjacentHTML("beforeend", `
      <circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="${part.color}" stroke-width="${stroke}"
        stroke-dasharray="${dash} ${circumference - dash}" stroke-dashoffset="${-offset}"
        transform="rotate(-90 ${center} ${center})" />
    `);
    offset += dash;
  });
  svg.insertAdjacentHTML("beforeend", `
    <text x="${center}" y="${center - 4}" text-anchor="middle" font-size="28" font-weight="780" fill="#14212b">${fmt(scan.weight)}</text>
    <text x="${center}" y="${center + 20}" text-anchor="middle" font-size="12" fill="#657480">кг общий вес</text>
  `);
}

function renderBars(scan) {
  el("compositionBars").innerHTML = composition.map((part) => {
    const value = scan[part.key];
    const share = (value / scan.weight) * 100;
    return `
      <div class="bar-row">
        <div class="bar-meta">
          <span class="bar-label">${part.label}</span>
          <span>${fmt(value, part.key === "minerals" ? 2 : 1)} кг / ${fmt(share, 1)}%</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${share}%; background:${part.color}"></div></div>
      </div>
    `;
  }).join("");
}

function renderControl(scan) {
  const items = [
    ["Идеальный вес", scan.idealWeight, "кг"],
    ["Контроль веса", scan.weightControl, "кг"],
    ["Контроль жира", scan.fatControl, "кг"],
    ["Контроль мышц", scan.muscleControl, "кг"],
    ["Талия/бедра", scan.whr, ""],
    ["Базовый обмен", scan.bmr, "ккал"],
  ];
  el("controlPanel").innerHTML = items.map(([label, value, unit]) => `
    <div class="control-item">
      <span>${label}</span>
      <strong>${value > 0 && label.includes("Контроль") ? "+" : ""}${fmt(value, label === "Талия/бедра" ? 2 : 1)} ${unit}</strong>
    </div>
  `).join("");
}

function renderHistory() {
  el("scanHistory").innerHTML = scans.map((scan, index) => `
    <button class="scan-card ${index === state.selectedIndex ? "active" : ""}" type="button" data-index="${index}">
      <strong>${scan.label}</strong>
      <span>${fmt(scan.weight)} кг</span>
      <small>${fmt(scan.skeletalMuscleMass)} кг мышц, ${fmt(scan.bodyFatPct)}% жира</small>
    </button>
  `).join("");
  el("scanHistory").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedIndex = Number(button.dataset.index);
      renderComposition();
      renderHistory();
    });
  });
}

function renderTable() {
  const base = scans[state.baselineIndex];
  el("detailHead").innerHTML = `
    <tr>
      <th>Метрика</th>
      ${scans.map((scan) => `<th>${scan.label}</th>`).join("")}
      <th>Изм. к базе</th>
    </tr>
  `;
  el("detailBody").innerHTML = tableMetrics.map((metric) => {
    const last = scans.at(-1)[metric.key];
    const delta = last - base[metric.key];
    const cls = delta > 0.049 ? "delta-pos" : delta < -0.049 ? "delta-neg" : "delta-neutral";
    return `
      <tr>
        <td>${metric.label}, ${metric.unit || "индекс"}</td>
        ${scans.map((scan) => `<td>${fmt(scan[metric.key], metric.precision)}</td>`).join("")}
        <td class="${cls}">${signed(delta, metric.precision)}</td>
      </tr>
    `;
  }).join("");
}

function renderAll() {
  renderKpis();
  renderChart();
  renderInsights();
  renderComposition();
  renderHistory();
  renderTable();
}

renderControls();
renderAll();
