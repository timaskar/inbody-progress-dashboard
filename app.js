const scans = [
  { date: "2025-02-09", label: "09 фев", source: "InBody.pdf", height: 176, weight: 70.5, muscle: 31.4, fatMass: 14.3, fatPct: 20.3, visceral: 6, score: 74 },
  { date: "2025-02-20", label: "20 фев", source: "Adobe Scan Feb 20, 2025.pdf", height: 176, weight: 70.3, muscle: 31.0, fatMass: 14.6, fatPct: 20.8, visceral: 6, score: 73 },
  { date: "2025-03-18", label: "18 мар", source: "Adobe Scan Mar 18, 2025.pdf", height: 176, weight: 70.3, muscle: 31.6, fatMass: 14.0, fatPct: 19.9, visceral: 6, score: 75 },
  { date: "2025-04-11", label: "11 апр", source: "Adobe Scan Apr 11, 2025.pdf", height: 176, weight: 70.5, muscle: 31.3, fatMass: 14.6, fatPct: 20.7, visceral: 6, score: 74 },
  { date: "2025-09-07", label: "07 сен", source: "Adobe Scan Sep 7, 2025.pdf", height: 177, weight: 69.9, muscle: 32.2, fatMass: 12.6, fatPct: 18.1, visceral: 5, score: 76 },
  { date: "2025-11-26", label: "26 ноя", source: "Adobe Scan Nov 26, 2025.pdf", height: 178, weight: 71.5, muscle: 33.1, fatMass: 12.5, fatPct: 17.5, visceral: 5, score: 78 },
  { date: "2025-12-03", label: "03 дек", source: "Adobe Scan Dec 3, 2025.pdf", height: 175, weight: 71.6, muscle: 32.3, fatMass: 13.9, fatPct: 19.4, visceral: 6, score: 77 },
  { date: "2026-02-28", label: "28 фев", source: "Adobe Scan Feb 28, 2026.pdf", height: 175, weight: 71.6, muscle: 32.5, fatMass: 13.8, fatPct: 19.3, visceral: 6, score: 77 },
  { date: "2026-05-25", label: "25 май", source: "260525_inbody_result.pdf", height: 175, weight: 72.3, muscle: 33.1, fatMass: 13.6, fatPct: 18.8, visceral: 5, score: null },
];

const state = {
  baseIndex: 0,
  heightMode: "176",
  focus: "composition",
};

const metrics = [
  { key: "muscle", label: "Мышцы", unit: "кг", color: "#087f8c", good: "up", precision: 1 },
  { key: "fatMass", label: "Жир", unit: "кг", color: "#f15b4f", good: "down", precision: 1 },
  { key: "fatPct", label: "% жира", unit: "%", color: "#ff7a59", good: "down", precision: 1 },
  { key: "weight", label: "Вес", unit: "кг", color: "#277da1", good: "neutral", precision: 1 },
  { key: "bmi", label: "BMI", unit: "", color: "#7057d2", good: "neutral", precision: 1 },
  { key: "visceral", label: "Висц. жир", unit: "ур.", color: "#d79200", good: "down", precision: 0 },
  { key: "score", label: "InBody", unit: "балл", color: "#0b6e99", good: "up", precision: 0 },
];

const questions = {
  composition: ["muscle", "fatMass", "fatPct"],
  weight: ["weight", "bmi"],
  score: ["score", "visceral"],
};

const el = (id) => document.getElementById(id);
const fmt = (value, precision = 1) => value == null || Number.isNaN(Number(value)) ? "-" : Number(value).toFixed(precision);
const signed = (value, precision = 1) => value == null || Number.isNaN(Number(value)) ? "-" : `${value > 0 ? "+" : ""}${fmt(value, precision)}`;
const metric = (key) => metrics.find((item) => item.key === key);
const normalizedHeight = () => state.heightMode === "reported" ? null : Number(state.heightMode);
const labelWithYear = (scan) => `${scan.label} ${scan.date.slice(0, 4)}`;
const daysBetween = (a, b) => Math.max(1, (new Date(b.date) - new Date(a.date)) / 86400000);

function value(scan, key) {
  if (scan[key] == null && key !== "bmi") return null;
  if (key !== "bmi") return scan[key];
  const heightCm = normalizedHeight() || scan.height;
  const heightM = heightCm / 100;
  return scan.weight / (heightM * heightM);
}

function valueLabel(key) {
  if (key !== "bmi") return metric(key).label;
  return normalizedHeight() ? `BMI @ ${normalizedHeight()} см` : "BMI из отчета";
}

function statusClass(key, delta) {
  const direction = metric(key).good;
  if (Math.abs(delta) < 0.05) return "neutral";
  if (direction === "up") return delta > 0 ? "good" : "bad";
  if (direction === "down") return delta < 0 ? "good" : "bad";
  return "neutral";
}

function benchmarkRecomp(monthlyIndex, muscleDelta, fatDelta) {
  const signal = Math.abs(muscleDelta) >= 0.5 || Math.abs(fatDelta) >= 0.7;
  if (!signal) {
    return {
      title: "пока похоже на шум",
      text: "Изменения меньше практического порога BIA. Нужны еще 1-2 замера в тех же условиях.",
    };
  }
  if (monthlyIndex < 0.15) {
    return {
      title: "медленно, но в правильную сторону",
      text: "Сигнал уже выше шума, но темп рекомпозиции спокойный.",
    };
  }
  if (monthlyIndex < 0.35) {
    return {
      title: "хороший устойчивый рекомп",
      text: "Темп выглядит реалистично для долгого периода без агрессивной сушки.",
    };
  }
  return {
    title: "очень быстрый темп",
    text: "Стоит перепроверять условия замера: вода, соль, тренировка накануне и введенный рост.",
  };
}

function renderControls() {
  el("baselineSelect").innerHTML = scans.map((scan, index) => (
    `<option value="${index}" ${index === state.baseIndex ? "selected" : ""}>${labelWithYear(scan)}</option>`
  )).join("");
  el("baselineSelect").addEventListener("change", (event) => {
    state.baseIndex = Number(event.target.value);
    render();
  });

  el("heightMode").addEventListener("change", (event) => {
    state.heightMode = event.target.value;
    render();
  });

  document.querySelectorAll("[data-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      state.focus = button.dataset.focus;
      render();
    });
  });
}

function renderSummary() {
  const base = scans[state.baseIndex];
  const last = scans.at(-1);
  const muscleDelta = value(last, "muscle") - value(base, "muscle");
  const fatDelta = value(last, "fatMass") - value(base, "fatMass");
  const fatPctDelta = value(last, "fatPct") - value(base, "fatPct");
  const weightDelta = value(last, "weight") - value(base, "weight");
  const months = daysBetween(base, last) / 30.44;
  const recompIndex = muscleDelta - fatDelta;
  const monthlyIndex = recompIndex / months;
  const benchmark = benchmarkRecomp(monthlyIndex, muscleDelta, fatDelta);
  const verdict = muscleDelta > 0 && fatDelta < 0 ? "Да, состав тела стал лучше" : "Тренд смешанный";

  el("trendSummary").innerHTML = `
    <article class="answer-card primary">
      <span>Главный вопрос</span>
      <strong>${verdict}</strong>
      <p>От ${labelWithYear(base)} до ${labelWithYear(last)}: мышцы ${signed(muscleDelta)} кг, жир ${signed(fatDelta)} кг, вес ${signed(weightDelta)} кг.</p>
    </article>
    <article class="answer-card">
      <span>Индекс рекомпозиции</span>
      <strong>${signed(recompIndex)} кг</strong>
      <p>${benchmark.title}: ${signed(monthlyIndex, 2)} кг/мес. ${benchmark.text}</p>
    </article>
    <article class="answer-card">
      <span>Процент жира</span>
      <strong>${fmt(value(last, "fatPct"))}%</strong>
      <p>${signed(fatPctDelta)} п.п. к базе. Лучший замер: ${fmt(Math.min(...scans.map((scan) => scan.fatPct)))}%.</p>
    </article>
  `;
}

function renderKpis() {
  const base = scans[state.baseIndex];
  const last = scans.at(-1);
  const keys = ["muscle", "fatMass", "fatPct", "weight", "bmi"];
  el("kpiGrid").innerHTML = keys.map((key) => {
    const item = metric(key);
    const current = value(last, key);
    const delta = current - value(base, key);
    return `
      <article class="kpi-card compact-kpi">
        <div class="kpi-label"><span class="metric-dot" style="background:${item.color}"></span>${valueLabel(key)}</div>
        <div class="kpi-value">${fmt(current, item.precision)} <span class="kpi-unit">${item.unit}</span></div>
        <div class="kpi-change ${statusClass(key, delta)}">${signed(delta, item.precision)} ${item.unit}</div>
      </article>
    `;
  }).join("");
}

function renderChart() {
  document.querySelectorAll("[data-focus]").forEach((button) => {
    button.classList.toggle("active", button.dataset.focus === state.focus);
  });
  const keys = questions[state.focus];
  const svg = el("trendChart");
  const width = svg.clientWidth || 720;
  const height = svg.clientHeight || 330;
  const margin = { top: 24, right: 16, bottom: 42, left: 42 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  for (let i = 0; i <= 4; i += 1) {
    const y = margin.top + (i / 4) * innerH;
    svg.insertAdjacentHTML("beforeend", `<line class="grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" />`);
  }

  const x = (index) => margin.left + (index / (scans.length - 1)) * innerW;
  const yNorm = (key, current) => {
    const values = scans.map((scan) => value(scan, key)).filter((item) => item != null);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    return margin.top + (1 - (current - min) / span) * innerH;
  };

  scans.forEach((scan, index) => {
    const tx = x(index);
    const outlier = Math.abs(scan.height - 176) >= 2;
    if (outlier) {
      svg.insertAdjacentHTML("beforeend", `<line x1="${tx}" y1="${margin.top}" x2="${tx}" y2="${margin.top + innerH}" stroke="#d79200" stroke-width="1.5" stroke-dasharray="5 5" />`);
      svg.insertAdjacentHTML("beforeend", `<text class="chart-warning" x="${tx}" y="${margin.top - 8}" text-anchor="middle">${scan.height} см</text>`);
    }
    const showLabel = width >= 560 || index % 2 === 0 || outlier || index === scans.length - 1;
    if (showLabel) {
      svg.insertAdjacentHTML("beforeend", `<text class="chart-label" x="${tx}" y="${height - 16}" text-anchor="middle">${scan.label}</text>`);
    }
  });

  keys.forEach((key) => {
    const item = metric(key);
    const points = scans.map((scan, index) => {
      const current = value(scan, key);
      return current == null ? null : `${x(index)},${yNorm(key, current)}`;
    }).filter(Boolean).join(" ");
    if (points) {
      svg.insertAdjacentHTML("beforeend", `<polyline points="${points}" fill="none" stroke="${item.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`);
    }
    scans.forEach((scan, index) => {
      const current = value(scan, key);
      if (current != null) {
        svg.insertAdjacentHTML("beforeend", `<circle cx="${x(index)}" cy="${yNorm(key, current)}" r="4" fill="${item.color}" stroke="#fff" stroke-width="2" />`);
      }
    });
  });

  el("chartLegend").innerHTML = keys.map((key) => {
    const item = metric(key);
    return `<span><i style="background:${item.color}"></i>${valueLabel(key)}</span>`;
  }).join("");
}

function renderNoise() {
  const baseHeight = normalizedHeight() || 176;
  const rows = scans.map((scan) => {
    const delta = scan.height - baseHeight;
    const bmiReported = scan.weight / ((scan.height / 100) ** 2);
    const bmiNorm = scan.weight / ((baseHeight / 100) ** 2);
    const cls = Math.abs(delta) >= 2 ? "bad" : Math.abs(delta) >= 1 ? "neutral" : "good";
    return `
      <tr>
        <td>${scan.label}</td>
        <td>${scan.height} см</td>
        <td class="delta-${cls}">${delta > 0 ? "+" : ""}${delta} см</td>
        <td>${fmt(bmiReported)}</td>
        <td>${fmt(bmiNorm)}</td>
      </tr>
    `;
  }).join("");

  el("noiseTable").innerHTML = `
    <table>
      <thead><tr><th>Дата</th><th>Рост</th><th>Откл.</th><th>BMI отчет</th><th>BMI норм.</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderDataTable() {
  const keys = ["weight", "muscle", "fatMass", "fatPct", "bmi", "visceral", "score"];
  el("detailHead").innerHTML = `
    <tr>
      <th>Дата</th>
      <th>Рост</th>
      ${keys.map((key) => `<th>${valueLabel(key)}</th>`).join("")}
    </tr>
  `;
  el("detailBody").innerHTML = scans.map((scan) => `
    <tr>
      <td>${scan.label}</td>
      <td>${scan.height} см</td>
      ${keys.map((key) => {
        const item = metric(key);
        const current = value(scan, key);
        return `<td>${fmt(current, item.precision)} ${current == null ? "" : item.unit}</td>`;
      }).join("")}
    </tr>
  `).join("");
}

function render() {
  renderSummary();
  renderKpis();
  renderChart();
  renderNoise();
  renderDataTable();
}

renderControls();
render();
