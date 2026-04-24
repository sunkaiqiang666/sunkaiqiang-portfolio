const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const cursor = document.querySelector(".cursor");
const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };

if (cursor && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    document.documentElement.style.setProperty("--mx", `${(event.clientX / window.innerWidth) * 100}%`);
    document.documentElement.style.setProperty("--my", `${(event.clientY / window.innerHeight) * 100}%`);
  });

  document.querySelectorAll("a, button, .tilt-card, .orbit-card, .showcase-card").forEach((item) => {
    item.addEventListener("pointerenter", () => cursor.classList.add("is-active"));
    item.addEventListener("pointerleave", () => cursor.classList.remove("is-active"));
  });
}

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 52, 320)}ms`;
  revealObserver.observe(item);
});

document.querySelectorAll(".tilt-card, .orbit-card, .showcase-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${y * -7}deg) rotateY(${x * 9}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

document.querySelectorAll("[data-drag-scroll]").forEach((rail) => {
  let isDragging = false;
  let startX = 0;
  let startScroll = 0;

  rail.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startX = event.clientX;
    startScroll = rail.scrollLeft;
    rail.classList.add("is-dragging");
    rail.setPointerCapture(event.pointerId);
  });

  rail.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    rail.scrollLeft = startScroll - (event.clientX - startX);
  });

  const stopDragging = () => {
    isDragging = false;
    rail.classList.remove("is-dragging");
  };

  rail.addEventListener("pointerup", stopDragging);
  rail.addEventListener("pointercancel", stopDragging);
});

document.querySelectorAll("[data-scramble]").forEach((node) => {
  const original = node.textContent;
  const glyphs = "SUNKAIQIANGFUTUREVISION0123456789";
  let frame = 0;
  let timer = null;

  const tick = () => {
    frame += 1;
    node.textContent = original
      .split("")
      .map((char, index) => {
        if (char === " " || index < frame / 3) {
          return char;
        }

        return glyphs[Math.floor(Math.random() * glyphs.length)];
      })
      .join("");

    if (frame >= original.length * 3) {
      window.clearInterval(timer);
      timer = null;
      node.textContent = original;
    }
  };

  node.addEventListener("pointerenter", () => {
    if (timer) {
      return;
    }

    frame = 0;
    timer = window.setInterval(tick, 28);
  });
});

const canvas = document.querySelector("#depth-field");

if (canvas) {
  const ctx = canvas.getContext("2d");
  const particles = [];
  const bands = [];
  let width = 0;
  let height = 0;
  let frame = 0;

  const resize = () => {
    const ratio = window.devicePixelRatio || 1;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles.length = 0;
    bands.length = 0;

    const particleCount = Math.max(70, Math.floor((width * height) / 16500));

    for (let i = 0; i < particleCount; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.25 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.007,
      });
    }

    for (let i = 0; i < 7; i += 1) {
      bands.push({
        y: height * (0.18 + i * 0.12),
        speed: 0.18 + Math.random() * 0.34,
        alpha: 0.03 + Math.random() * 0.045,
      });
    }
  };

  const draw = () => {
    frame += 1;
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(
      pointer.x,
      pointer.y,
      0,
      pointer.x,
      pointer.y,
      Math.max(width, height) * 0.72
    );
    gradient.addColorStop(0, "rgba(122,247,255,0.16)");
    gradient.addColorStop(0.32, "rgba(117,183,255,0.08)");
    gradient.addColorStop(1, "rgba(3,4,7,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    bands.forEach((band, index) => {
      const y = band.y + Math.sin(frame * 0.006 + index) * 28;
      ctx.globalAlpha = band.alpha;
      ctx.strokeStyle = index % 2 ? "#7af7ff" : "#9b8cff";
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let x = -80; x <= width + 80; x += 42) {
        const wave = Math.sin(x * 0.008 + frame * band.speed * 0.03 + index) * 18;
        if (x === -80) {
          ctx.moveTo(x, y + wave);
        } else {
          ctx.lineTo(x, y + wave);
        }
      }

      ctx.stroke();
    });

    particles.forEach((particle, index) => {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);
      const pull = Math.max(0, 1 - distance / 280) * 0.85;

      particle.x += Math.cos(frame * particle.speed + particle.phase) * particle.z + dx * pull * 0.006;
      particle.y += Math.sin(frame * particle.speed + particle.phase) * particle.z + dy * pull * 0.006;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      ctx.globalAlpha = 0.28 + particle.z * 0.2;
      ctx.fillStyle = index % 4 === 0 ? "#9dffcf" : "#f6f7fb";
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.z * 1.35, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  resize();
  draw();
}
