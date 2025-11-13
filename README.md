# 🧠 Conversa Verlix – AI Chat Tool Landing Page

**Conversa Verlix** is a modern, responsive, and high-performance landing page built with **Next.js**, **TailwindCSS**, and **TypeScript** — perfect for **AI Chat Tools**, **SaaS platforms**, or **startup websites**.

It offers a stunning UI, clean code, and full customizability — giving developers total control over every section through a single configuration system.

---

## 🚀 Features

- Fully **responsive** (mobile, tablet, desktop)
- Built with **Next.js**, **TailwindCSS**, and **TypeScript**
- Clean, well-commented, and developer-friendly code
- **Fast loading**, SEO optimized, and performance-focused
- Modern UI with smooth animations and transitions
- Integrated **YouTube demo video (direct embed)**
- Pre-built **pages**: Home, Demo, FAQ, Contact, Support, Privacy Policy, Terms, Cookie Policy, Login, Signup, Upgrade
- 100% **customizable via config folder**
- Compatible with all major browsers (Chrome, Safari, Edge, Firefox)
- Fully supports **ThemeForest live preview system**

---

## 📂 Folder Structure

Conversa-Verlix/ │ ├── public/ │ ├── images/ # Hero and section images │ ├── favicon.png # Optional site icon │ ├── preview.jpg # ThemeForest thumbnail preview │ ├── app/ │ ├── pages/ # All main pages (Home, Demo, FAQ, etc.) │ ├── components/ # Reusable UI components │ ├── styles/ # TailwindCSS & global styles │ └── utils/ # Optional helper functions │ ├── config/ # 🔥 Core configuration folder (root-level) │ ├── cookie.ts │ ├── demo.ts │ ├── faq.ts │ ├── features.ts │ ├── footer.ts │ ├── hero.ts │ ├── navbar.ts │ ├── pricing.ts │ ├── privacy.ts │ ├── reviews.ts │ ├── terms.ts │ ├── upgrade.ts │ ├── usecases.ts │ └── siteConfig.ts # 🧩 Master config file controlling all sections │ ├── LICENSE.txt # License file ├── README.md # Documentation (this file) └── package.json # Dependencies & scripts


> ✅ **Note:**  
> Keep the folder structure as shown for ThemeForest approval and smooth deployment.  
> You can rename or adjust sections inside the **config/** folder freely.

---

## ⚙️ Installation & Setup

1. **Extract** the ZIP package you downloaded.  
2. Open the folder in your preferred code editor (**VS Code** recommended).  
3. Install dependencies and run the development server:

```bash
npm install
npm run dev
Open your browser and navigate to: 👉 http://localhost:3000
🧩 Customization Guide (100% Config Driven)
All content, texts, links, and visuals can be changed inside the config/ folder.

Each section (Hero, Features, Pricing, Footer, etc.) has its own file.
The main file siteConfig.ts acts as the parent — controlling global settings like brand name, logo, and meta data.

Example:

// config/siteConfig.ts
export const siteConfig = {
  name: "Conversa Verlix",
  description: "AI Chat Tool Landing Page",
  logo: "/logo.svg",
  footerText: "© 2025 Verlix Official. All rights reserved.",
};
🔧 Editable from Config Folder:
Brand name & tagline
Logo & favicon
Navbar items & footer links
Hero section content
Features, Pricing, and FAQ data
Privacy Policy & Terms pages
Upgrade & Demo text
SEO meta titles and descriptions
🪄 Pro Tip:
You can customize every section of the site without touching a single component file — perfect for beginners and professionals alike.

🎨 Editing Components & Styles
Update text and structure: /app/components/
Replace demo media: /public/images/
Edit global configuration: /config/siteConfig.ts
SEO, meta titles, and OG tags: handled automatically via config
🎥 Demo Video Integration
Conversa Verlix includes a direct YouTube embed — not a local file.
To update your demo video, simply replace the YouTube video URL in the demo.ts config file.
Example:

// config/demo.ts
export const demo = {
videoUrl: "https://www.youtube.com/embed/tBv2xWCS3wo?si=w7E26Gl2tLDLSQ1N",
};
🚀 Build & Deployment
When ready for production:

npm run build
npm run start
You can deploy easily on Vercel, Netlify, or your own hosting server.
Make sure all folders and configs remain in place for smooth performance.

🖼️ Demo Assets
⚠️ Important:
All demo images and videos are for preview purposes only.
Replace them with your own licensed media before submission or launch.

📧 Support
For technical support, customization requests, or inquiries:

Author: Verlix Official
Email: verlixdev@gmail.com

📝 Notes
Designed specifically for AI Chat Tools, but adaptable for any SaaS or tech startup.
All content is editable through the config folder — no need to modify core components.
Follow ThemeForest submission rules for packaging, structure, and file formats.
Include LICENSE.txt, README.md, and documentation.html before submission.
📄 License
This project is released under the MIT License
You can replace this with your own license if required by ThemeForest.

© 2025 Verlix Official. All rights reserved.


---
