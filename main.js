/**
 * Portfolio Data & Interactive Engine
 * Pure Vanilla JavaScript — Zero Build Dependencies
 */

const personalInfo = {
  name: "Jacob Josh Tubo",
  firstName: "Jacob",
  title: "Computer Engineer",
  tagline: "Hardware • Software • IT",
  email: "jjanselmoo@gmail.com",
  github: "https://github.com/Jacanselmo",
  linkedin: "https://www.linkedin.com/in/jjanselmo",
  resumeUrl: "#",
};

const interests = [
  "Software Development",
  "IT Support",
  "Networking",
  "Embedded Systems",
  "Robotics",
  "Technical Support",
  "Systems Integration",
];

const skills = [
  {
    id: "embedded",
    title: "Embedded & Hardware",
    icon: "cpu",
    description:
      "Building and troubleshooting hardware systems using microcontrollers, sensors, communication modules, and embedded platforms.",
    tags: [
      "ESP32", "Arduino", "Raspberry Pi", "C", "C++", "Sensors",
      "Actuators", "SPI", "I²C", "UART", "NRF24L01", "TFT Displays",
      "Electronics", "Hardware Prototyping"
    ],
  },
  {
    id: "software",
    title: "Software & Development",
    icon: "code",
    description:
      "Developing applications and software systems using programming languages, frameworks, databases, and APIs.",
    tags: [
      "Python", "Java", "JavaScript", "HTML", "CSS", "React",
      "React Native", "Expo", "Supabase", "Firebase", "MySQL",
      "SQL", "REST APIs", "JSON", "Git", "GitHub"
    ],
  },
  {
    id: "networking",
    title: "Networking, Robotics & Systems",
    icon: "network",
    description:
      "Working with networks, robotics platforms, computer vision, and integrated systems.",
    tags: [
      "Network Troubleshooting", "IP Configuration", "Routers", "Switches",
      "Ethernet / RJ45", "CCTV", "DVR", "Hikvision", "Fiber Optics",
      "Linux", "ROS2", "LiDAR", "SLAM", "Computer Vision", "YOLO",
      "Sensor Integration"
    ],
  },
];

const certifications = [
  {
    id: 1,
    title: "Google AI Professional Certificate",
    provider: "Google",
    image: "certificates/google-ai-professional.png",
  },
  {
    id: 2,
    title: "Google AI Essentials",
    provider: "Google",
    image: "certificates/google-ai-essentials.png",
  },
  {
    id: 3,
    title: "Analyzing IoT Data in Python",
    provider: "",
    image: "certificates/iot-data-python.png",
  },
  {
    id: 4,
    title: "Introduction to Cybersecurity",
    provider: "",
    image: "certificates/intro-cybersecurity.png",
  },
  {
    id: 5,
    title: "2024 ICpEP-NCR Webinar Series 1: Reinventing Hello World: Perspectives on AI-driven Approaches to Programming",
    provider: "ICpEP-NCR",
    image: "certificates/icpep-ai-programming.png",
  },
  {
    id: 6,
    title: "2024 ICpEP-NCR Webinar Series 1: Securing the Future: Cybersecurity Challenges and Solutions in IoT for Engineers",
    provider: "ICpEP-NCR",
    image: "certificates/icpep-cybersecurity-iot.png",
  },
];

const nodes = [
  { id: "hw", label: "HW", name: "Hardware", desc: "ESP32, Sensors, SPI, I²C, Prototyping", cx: 120, cy: 160, r: 24, connections: ["sw", "rob", "sys"] },
  { id: "sw", label: "SW", name: "Software", desc: "Python, C++, Java, JS, APIs, Git", cx: 240, cy: 120, r: 28, connections: ["hw", "net", "sys"] },
  { id: "net", label: "NET", name: "Networking", desc: "IP Config, Switches, CCTV, Fiber", cx: 360, cy: 160, r: 24, connections: ["sw", "iot", "sys"] },
  { id: "sys", label: "SYS", name: "Systems Core", desc: "Systems Integration & Architecture", cx: 240, cy: 240, r: 32, isCore: true, connections: ["hw", "sw", "net", "rob", "iot", "int"] },
  { id: "rob", label: "ROB", name: "Robotics", desc: "ROS2, SLAM, LiDAR, YOLO Vision", cx: 160, cy: 280, r: 20, connections: ["hw", "sys", "int"] },
  { id: "iot", label: "IoT", name: "IoT & Sensors", desc: "Telemetry, Edge AI, NRF24L01", cx: 320, cy: 280, r: 20, connections: ["net", "sys", "int"] },
  { id: "int", label: "INT", name: "Integration", desc: "Hardware + Software + Network", cx: 240, cy: 360, r: 24, connections: ["rob", "iot", "sys"] },
];

const lines = [
  { id: "l1", from: "hw", to: "sw", x1: 120, y1: 160, x2: 240, y2: 120 },
  { id: "l2", from: "sw", to: "net", x1: 240, y1: 120, x2: 360, y2: 160 },
  { id: "l3", from: "hw", to: "rob", x1: 120, y1: 160, x2: 160, y2: 280 },
  { id: "l4", from: "net", to: "iot", x1: 360, y1: 160, x2: 320, y2: 280 },
  { id: "l5", from: "rob", to: "int", x1: 160, y1: 280, x2: 240, y2: 360 },
  { id: "l6", from: "iot", to: "int", x1: 320, y1: 280, x2: 240, y2: 360 },
  { id: "l7", from: "sw", to: "sys", x1: 240, y1: 120, x2: 240, y2: 240 },
  { id: "l8", from: "rob", to: "iot", x1: 160, y1: 280, x2: 320, y2: 280 },
  { id: "l9", from: "hw", to: "sys", x1: 120, y1: 160, x2: 240, y2: 240 },
  { id: "l10", from: "net", to: "sys", x1: 360, y1: 160, x2: 240, y2: 240 },
  { id: "l11", from: "int", to: "sys", x1: 240, y1: 360, x2: 240, y2: 240 },
];

function getIconSvg(name) {
  if (name === "cpu") {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`;
  } else if (name === "code") {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
  } else if (name === "network") {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`;
  }
  return "";
}

// 1. Render Interests
function renderInterests() {
  const container = document.getElementById("interests-container");
  if (!container) return;
  container.innerHTML = interests
    .map((item) => `<span class="about__interest-pill">${item}</span>`)
    .join("");
}

// 2. Render Skills with 3D tilt
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (s) => `
      <div class="skill-card fade-up" id="skill-${s.id}">
        <div class="skill-card__glare"></div>
        <div class="skill-card__icon">${getIconSvg(s.icon)}</div>
        <h3 class="skill-card__title">${s.title}</h3>
        <p class="skill-card__desc">${s.description}</p>
        <div class="skill-card__tags">
          ${s.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");

  document.querySelectorAll(".skill-card").forEach((card) => {
    attach3DTilt(card, 6, 1.015);
  });
}

// 3. Render Certifications
function renderCertifications() {
  const grid = document.getElementById("certs-grid");
  if (!grid) return;

  grid.innerHTML = certifications
    .map(
      (c) => `
      <div class="cert-card fade-up" id="cert-${c.id}" role="button" tabindex="0" aria-label="View certificate: ${c.title}">
        <div class="cert-card__glare"></div>
        <div class="cert-card__overlay-hint">
          <span class="cert-card__hint-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            View Certificate
          </span>
        </div>
        <img class="cert-card__image" src="${c.image}" alt="${c.title}" loading="lazy" />
      </div>
    `
    )
    .join("");

  document.querySelectorAll(".cert-card").forEach((card, idx) => {
    const cert = certifications[idx];
    card.addEventListener("click", () => openLightbox(cert));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(cert);
      }
    });
    attach3DTilt(card, 7, 1.02);
  });
}

// 4. Render Interactive SVG Topology Graph (Matching Previous Portfolio)
function renderTopology() {
  const svg = document.getElementById("hero-svg");
  const tooltip = document.getElementById("hero-tooltip");
  if (!svg || !tooltip) return;

  // Render static SVG base
  let linesHtml = "";
  lines.forEach((line) => {
    linesHtml += `
      <g id="line-group-${line.id}">
        <line
          id="line-base-${line.id}"
          x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}"
          stroke="#146EF5"
          stroke-width="1.2"
          opacity="0.18"
          style="transition: stroke-width 0.3s ease, opacity 0.3s ease;"
        />
        <line
          id="line-pulse-${line.id}"
          x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}"
          stroke="#146EF5"
          stroke-width="2"
          stroke-dasharray="6 18"
          class="pulse-signal-line"
          opacity="0.4"
          style="transition: opacity 0.3s ease;"
        />
      </g>
    `;
  });

  let nodesHtml = "";
  nodes.forEach((node) => {
    nodesHtml += `
      <g class="hero__node-group" id="node-group-${node.id}" data-id="${node.id}" style="cursor: pointer;">
        <circle
          id="node-pulse-${node.id}"
          cx="${node.cx}" cy="${node.cy}" r="${node.r + 8}"
          fill="none" stroke="#146EF5" stroke-width="1.5"
          class="hero__node-pulse"
          style="display: none;"
        />
        <circle
          id="node-circle-${node.id}"
          cx="${node.cx}" cy="${node.cy}" r="${node.r}"
          fill="#F7FAFF"
          stroke="#146EF5"
          stroke-width="1.5"
          filter="url(#glow)"
          style="transition: fill 0.25s ease, stroke-width 0.25s ease, opacity 0.25s ease;"
        />
        <text
          id="node-label-${node.id}"
          x="${node.cx}" y="${node.cy + (node.isCore ? -2 : 3)}"
          text-anchor="middle"
          font-size="${node.isCore ? 8 : 7.5}"
          font-weight="700"
          fill="#146EF5"
          font-family="Inter, sans-serif"
          style="pointer-events: none; transition: fill 0.25s ease;"
        >
          ${node.label}
        </text>
        ${
          node.isCore
            ? `<text id="node-core-label" x="${node.cx}" y="${node.cy + 9}" text-anchor="middle" font-size="5.5" font-weight="600" fill="#667085" font-family="Inter, sans-serif" style="pointer-events: none; transition: fill 0.25s ease;">CORE</text>`
            : ""
        }
        <text
          id="node-name-${node.id}"
          x="${node.cx}" y="${node.cy + node.r + 14}"
          text-anchor="middle"
          font-size="9"
          font-weight="500"
          fill="#667085"
          font-family="Inter, sans-serif"
          style="transition: fill 0.25s ease, font-weight 0.25s ease; pointer-events: none;"
        >
          ${node.name}
        </text>
      </g>
    `;
  });

  svg.innerHTML = `
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="0.8" fill="#D0D5DD" />
      </pattern>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect width="480" height="480" fill="url(#grid)" rx="20" opacity="0.6" />
    ${linesHtml}
    ${nodesHtml}
  `;

  // Attach hover events directly modifying styles
  svg.querySelectorAll(".hero__node-group").forEach((group) => {
    const id = group.getAttribute("data-id");
    const nodeData = nodes.find((n) => n.id === id);

    group.addEventListener("mouseenter", () => {
      // 1. Update tooltip
      tooltip.classList.add("active");
      tooltip.innerHTML = `
        <div class="hero__tooltip-header">
          <span class="hero__tooltip-badge">Connected Node</span>
          <strong class="hero__tooltip-title">${nodeData.name}</strong>
        </div>
        <p class="hero__tooltip-desc">${nodeData.desc}</p>
      `;

      // 2. Highlight active and connected nodes
      nodes.forEach((n) => {
        const isHovered = n.id === id;
        const isConnected = isHovered || nodeData.connections.includes(n.id);
        const circle = document.getElementById(`node-circle-${n.id}`);
        const pulse = document.getElementById(`node-pulse-${n.id}`);
        const label = document.getElementById(`node-label-${n.id}`);
        const name = document.getElementById(`node-name-${n.id}`);

        if (pulse) pulse.style.display = isHovered ? "block" : "none";

        if (isHovered) {
          circle.setAttribute("fill", "#146EF5");
          circle.setAttribute("stroke-width", "2.5");
          circle.style.opacity = "1";
          label.setAttribute("fill", "#FFFFFF");
          name.setAttribute("fill", "#146EF5");
          name.setAttribute("font-weight", "700");
        } else if (isConnected) {
          circle.setAttribute("fill", "#F7FAFF");
          circle.setAttribute("stroke-width", "2");
          circle.style.opacity = "1";
          label.setAttribute("fill", "#146EF5");
          name.setAttribute("fill", "#146EF5");
          name.setAttribute("font-weight", "600");
        } else {
          circle.setAttribute("fill", "#F7FAFF");
          circle.setAttribute("stroke-width", "1.5");
          circle.style.opacity = "0.4";
          label.setAttribute("fill", "#146EF5");
          name.setAttribute("fill", "#667085");
          name.setAttribute("font-weight", "500");
        }
      });

      // 3. Highlight lines
      lines.forEach((l) => {
        const isLineConnected = l.from === id || l.to === id;
        const baseLine = document.getElementById(`line-base-${l.id}`);
        const pulseLine = document.getElementById(`line-pulse-${l.id}`);
        if (baseLine) {
          baseLine.setAttribute("stroke-width", isLineConnected ? "2.5" : "1.2");
          baseLine.setAttribute("opacity", isLineConnected ? "0.9" : "0.18");
        }
        if (pulseLine) {
          pulseLine.setAttribute("opacity", isLineConnected ? "1" : "0.4");
        }
      });
    });

    group.addEventListener("mouseleave", () => {
      // 1. Reset tooltip
      tooltip.classList.remove("active");
      tooltip.innerHTML = `<span class="hero__tooltip-hint">Hover over nodes to explore systems connectivity</span>`;

      // 2. Reset nodes
      nodes.forEach((n) => {
        const circle = document.getElementById(`node-circle-${n.id}`);
        const pulse = document.getElementById(`node-pulse-${n.id}`);
        const label = document.getElementById(`node-label-${n.id}`);
        const name = document.getElementById(`node-name-${n.id}`);

        if (pulse) pulse.style.display = "none";
        circle.setAttribute("fill", "#F7FAFF");
        circle.setAttribute("stroke-width", "1.5");
        circle.style.opacity = "1";
        label.setAttribute("fill", "#146EF5");
        name.setAttribute("fill", "#667085");
        name.setAttribute("font-weight", "500");
      });

      // 3. Reset lines
      lines.forEach((l) => {
        const baseLine = document.getElementById(`line-base-${l.id}`);
        const pulseLine = document.getElementById(`line-pulse-${l.id}`);
        if (baseLine) {
          baseLine.setAttribute("stroke-width", "1.2");
          baseLine.setAttribute("opacity", "0.18");
        }
        if (pulseLine) {
          pulseLine.setAttribute("opacity", "0.4");
        }
      });
    });
  });
}

// 5. 3D Tilt
function attach3DTilt(element, maxTilt = 7, scale = 1.02) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const glare = element.querySelector(".cert-card__glare, .skill-card__glare");

  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    element.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
    element.style.transition = "transform 0.1s ease-out";

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.opacity = "0.15";
      glare.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(20, 110, 245, 0.4) 0%, rgba(255, 255, 255, 0) 70%)`;
      glare.style.transition = "opacity 0.2s ease-out";
    }
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    element.style.transition = "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    if (glare) {
      glare.style.opacity = "0";
      glare.style.transition = "opacity 0.4s ease";
    }
  });
}

// 6. Lightbox Modal
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxBackdrop = document.getElementById("lightbox-backdrop");

function openLightbox(cert) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = cert.image;
  lightboxImage.alt = cert.title;
  lightboxCaption.textContent = cert.title;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  if (lightboxImage) lightboxImage.src = "";
  document.body.style.overflow = "";
}

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});

// 7. Scroll Reveal
function initScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".fade-up").forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

// 8. Navigation
function initNavigation() {
  const hamburger = document.getElementById("nav-hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("[data-nav]");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
    });

    mobileMenu.querySelectorAll(".navbar__mobile-link, .navbar__mobile-cta").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
      });
    });
  }

  window.addEventListener(
    "scroll",
    () => {
      const scrollPos = window.scrollY + 120;
      const sections = ["about", "skills", "certifications", "contact"];

      let current = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          current = sections[i];
          break;
        }
      }

      navLinks.forEach((link) => {
        if (link.getAttribute("data-nav") === current) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    },
    { passive: true }
  );
}

// 9. Init
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderInterests();
  renderSkills();
  renderCertifications();
  renderTopology();
  initNavigation();
  initScrollReveal();
});
