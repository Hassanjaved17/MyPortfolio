<div align="center">

# ✦ Hassan Javed — Personal Portfolio

### A modern, fully responsive MERN Stack Developer portfolio
### built with React, Tailwind CSS, Framer Motion & more.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-hassanjaveds.netlify.app-fb9718?style=for-the-badge&logoColor=white)](https://hassanjaveds.netlify.app)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00c7b7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)

<br/>

![Portfolio Preview](https://github.com/user-attachments/assets/d1608292-e425-4dee-885b-c47ba7bdaab2)


</div>

---

## 📌 Table of Contents

- [About](#-about)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Sections](#-sections)
- [Projects Showcased](#-projects-showcased)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [Connect With Me](#-connect-with-me)

---

## 👨‍💻 About

This is my **personal developer portfolio** — designed and built from scratch without following any tutorial. It showcases my skills, experience, and real-world projects as a MERN Stack Developer with 2 years of experience.

The portfolio features a **unique dark amber/orange theme** that stands out from the typical blue/purple developer portfolios, smooth animations, and a fully functional contact form that delivers messages directly to my inbox.

---

## 🌐 Live Demo

> **[https://hassanjaveds.netlify.app](https://hassanjaveds.netlify.app)**

---

## ✨ Features

- 🎨 **Unique Dark Amber Theme** — warm, distinctive, and memorable
- ⚡ **Smooth Scroll Animations** — powered by Framer Motion & AOS
- 🖊️ **Typing Animation** — role cycling in the hero section via `react-type-animation`
- 🗂️ **Filterable Projects** — filter by HTML/CSS/JS · React · Full Stack
- 📬 **Working Contact Form** — EmailJS integration, sends directly to inbox
- 🔄 **Infinite Skills Marquee** — auto-scrolling soft skills strip via Swiper
- 📱 **Fully Responsive** — optimized for mobile, tablet, and desktop
- 🚀 **Resume Download** — one-click resume access from navbar
- ♾️ **Scalable Skills Grid** — adds new skills without breaking layout
- 🔝 **Scroll to Top Button** — smooth UX on long scroll

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18, Tailwind CSS, Framer Motion, AOS |
| **Animations** | Framer Motion, AOS, React Type Animation, Swiper JS |
| **Icons** | React Icons (fa, si, ri, tb, io, pi) |
| **Form** | EmailJS |
| **State** | Redux |
| **Deployment** | Netlify |
| **Dev Tools** | Vite, Git, GitHub, Postman, VS Code |

---

## 📂 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navbar** | Sticky pill-style navbar with amber border + Resume download |
| 2 | **Hero** | Name, typing animation, profile photo with hexagon spin |
| 3 | **Skills Marquee** | Auto-scrolling soft skills strip |
| 4 | **About Me** | Bio, stack summary, link to projects |
| 5 | **My Skills** | Responsive grid of 15 tech skills with brand color hover |
| 6 | **Experience** | Since 2023, 3-column layout with laptop illustration |
| 7 | **Projects** | 8 real projects with filter tabs + See More / Show Less |
| 8 | **Contact** | EmailJS form with animated Send button (shimmer + ripple) |
| 9 | **Footer** | 3-column grid — brand, nav links, social icons |

---

## 🚀 Projects Showcased

| Project | Category | Live Link |
|---|---|---|
| Saloon Website | React | [View →](https://dictatewebinane.netlify.app/) |
| Jewellery Store | React | [View →](https://premium-jewellers-hki1.vercel.app/) |
| Nexcent Landing Page | HTML/CSS/JS | [View →](https://hassanjaved17.github.io/nexcent-landing-page/) |
| Modern Portfolio | Full Stack | [View →](https://hassanjaved17.github.io/Demo_Portfolio_Assignment/) |
| FitZone E-com Store | Full Stack | [View →](https://hassanjaved17.github.io/FitZone-E-com-store/) |
| Rental Car Landing Page | HTML/CSS/JS | [View →](https://hassanjaved17.github.io/Rent-Car-Landing-Page/) |
| Digital Clock | HTML/CSS/JS | [View →](https://hassanjaved17.github.io/Digital-Clock/) |
| Neon Calculator | HTML/CSS/JS | [View →](https://hassanjaved17.github.io/Neon-Calculator/) |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Hassanjaved17/your-portfolio-repo.git

# 2. Navigate into the project
cd your-portfolio-repo

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

> App runs at `http://localhost:5173`

### Environment Setup

This project uses **EmailJS** for the contact form. To make it work locally:

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Get your `Service ID`, `Template ID`, and `Public Key`
3. Replace them in `ContactForm.jsx`:

```js
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
  publicKey: "YOUR_PUBLIC_KEY",
});
```

### Build for Production

```bash
npm run build
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── navbar/
│   │   └── NavbarMain.jsx
│   ├── heroSection/
│   │   ├── HeroMain.jsx
│   │   ├── HeroText.jsx
│   │   ├── HeroPic.jsx
│   │   └── HeroGradient.jsx
│   ├── subHeroSection/
│   │   └── SubHeroMain.jsx
│   ├── aboutSection/
│   │   ├── AboutMain.jsx
│   │   └── AboutMeText.jsx
│   ├── skillsSection/
│   │   ├── SkillsMain.jsx
│   │   ├── SkillsText.jsx
│   │   ├── SingleSkill.jsx
│   │   └── SubSkills.jsx
│   ├── experienceSection/
│   │   ├── ExperienceMain.jsx
│   │   ├── ExperienceTopLeft.jsx
│   │   └── ExperienceTopRight.jsx
│   ├── projectsSection/
│   │   ├── ProjectsMain.jsx
│   │   ├── ProjectsText.jsx
│   │   └── SingleProject.jsx
│   ├── contactSection/
│   │   └── ContactForm.jsx
│   └── footer/
│       └── FooterMain.jsx
├── framerMotion/
│   └── variants.js
├── App.jsx
└── main.jsx
```

---

## 🤝 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hassan_Javed-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hassan-javed-69766b336/)
[![GitHub](https://img.shields.io/badge/GitHub-Hassanjaved17-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Hassanjaved17)
[![Instagram](https://img.shields.io/badge/Instagram-hassan__javed__17-e4405f?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/hassan_javed_17/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat_Now-25d366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/923302479878)
[![Email](https://img.shields.io/badge/Gmail-hassandeveloper341-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hassandeveloper341@gmail.com)

</div>

---

<div align="center">

**⭐ If you like this project, drop a star on the repo — it means a lot!**

Made with ❤️ by **Hassan Javed** — © 2026 All Rights Reserved

</div>
