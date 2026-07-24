const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const modal = document.querySelector("[data-modal]");
const modalClose = document.querySelector("[data-modal-close]");
const modalImage = document.querySelector("[data-modal-image]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalBody = document.querySelector("[data-modal-body]");
const modalPoints = document.querySelector("[data-modal-points]");
const contactForm = document.querySelector("[data-contact-form]");

const projectDetails = {
  mapify: {
    kicker: "Software Product",
    title: "Mapify",
    image: "assets/mapify.png",
    body: "A product concept focused on making location-based information easier to organize, understand, and use in daily decisions.",
    points: ["User-centered map experience", "Information organization", "Mobile-first product thinking"],
  },
  connextion: {
    kicker: "Startup",
    title: "Connextion",
    image: "assets/flutter.png",
    body: "A software company founded to create apps that make people's lives more convenient through thoughtful workflows and practical design.",
    points: ["Founder-led product direction", "Flutter app development", "Firebase-backed application architecture"],
  },
  shooting: {
    kicker: "Computer Vision",
    title: "Shooting Correction System",
    image: "assets/shooting-correction.png",
    body: "A basketball free-throw posture correction system that studies motion and provides feedback for more consistent shooting mechanics.",
    points: ["Pose and motion analysis", "Feedback-oriented interface", "Sports technology application"],
  },
  autonomous: {
    kicker: "Robotics",
    title: "Autonomous Robot",
    image: "assets/autonomous-robot.png",
    body: "A compact robot project exploring autonomous navigation, obstacle avoidance, and sensor-driven control.",
    points: ["Computer vision pipeline", "Embedded control", "Real-time navigation behavior"],
  },
  rescue: {
    kicker: "Robotics",
    title: "Rescue Robot",
    image: "assets/rescue-robot.png",
    body: "A rescue robot concept built around disaster-zone mobility and practical field use, with emphasis on reliability and mission-focused design.",
    points: ["Mobility-focused mechanical design", "Rescue scenario planning", "Integrated sensing and control"],
  },
  tank: {
    kicker: "Game Development",
    title: "Tank Shooting Game",
    image: "assets/tank-game.png",
    body: "An anti-epidemic themed third-person shooter tank game prototype combining gameplay systems with visual storytelling.",
    points: ["TPS game mechanics", "Interactive prototype", "Themed visual direction"],
  },
  bbcar: {
    kicker: "Embedded Systems",
    title: "BBcar",
    image: "assets/bbcar.png",
    body: "A compact autonomous vehicle platform for experimenting with embedded control, sensing, and movement behavior.",
    points: ["Microcontroller programming", "Sensor integration", "Autonomous vehicle testing"],
  },
  remote: {
    kicker: "Embedded Systems",
    title: "Remote Controlled Car",
    image: "assets/remote-controlled-car.png",
    body: "An Arduino and Bluetooth-based car prototype controlled from a phone interface, connecting hardware control with app interaction.",
    points: ["Arduino control", "Bluetooth communication", "Mobile interface integration"],
  },
  chip: {
    kicker: "Hardware",
    title: "Chip Layout",
    image: "assets/chip-layout.png",
    body: "VLSI layout work focused on the connection between digital circuit design, physical layout, and implementation constraints.",
    points: ["VLSI fundamentals", "Physical layout reasoning", "Hardware design workflow"],
  },
};

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("click", (event) => {
  const trigger = event.target instanceof HTMLElement ? event.target.closest("[data-project]") : null;
  if (!(trigger instanceof HTMLElement) || !modal) return;

  const project = projectDetails[trigger.dataset.project ?? ""];
  if (!project) return;

  modalImage.src = project.image;
  modalImage.alt = `${project.title} project image.`;
  modalKicker.textContent = project.kicker;
  modalTitle.textContent = project.title;
  modalBody.textContent = project.body;
  modalPoints.replaceChildren(
    ...project.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    }),
  );

  modal.showModal();
  document.body.classList.add("modal-open");
});

modalClose?.addEventListener("click", () => {
  modal?.close();
});

modal?.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:pupss97306@gapp.nthu.edu.tw?subject=${subject}&body=${body}`;
});
