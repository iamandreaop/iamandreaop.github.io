# Andrea Ong-Potapov — Portfolio Website

A clean, editorial portfolio site. Edit simple JavaScript data files to update content — no HTML knowledge required. Works by opening `index.html` directly in your browser (no server needed).

---

## Quick Start

Just open `index.html` in your browser. That's it!

---

## How to Update Content

All content lives in the `content/` folder as `.js` files. Open them in any text editor (TextEdit, Notepad, VS Code, etc.) and change the values between the quotes.

**Important:** Keep the punctuation intact — quotes, commas, and brackets all matter. If something breaks, check that you haven't accidentally deleted a comma or quote mark.

### Update Your Bio

Edit `content/bio.js` — change the text between the quotes:

```js
window.SITE_CONTENT.bio = {
  headline: "Your headline here",
  intro: "Your intro paragraph",
  body: [
    "First paragraph of your bio.",
    "Second paragraph.",
    "Add as many paragraphs as you like."
  ],
  headshot: "images/headshot/andrea.jpg",
  skills: ["Skill 1", "Skill 2", "Skill 3"]
};
```

### Add a New Case Study

Edit `content/case-studies.js` — copy an existing case study block and paste it at the end (before the closing `];`). Make sure there's a comma between entries.

### Add a New Blog Post

Edit `content/blog.js` — copy an existing blog post block and paste it at the end (before the closing `];`).

### Update Site Settings

Edit `content/settings.js` to change your name, email, tagline, social links, and contact form URL.

---

## How to Add Images

1. Save your image files into the appropriate folder:
   - `images/headshot/` — Your headshot photo (name it `andrea.jpg`)
   - `images/case-studies/` — Case study thumbnails and hero images
   - `images/blog/` — Blog post images

2. Update the `.js` content files to reference the new image path.

**Image tips:**
- Use `.jpg` or `.webp` for photos (keep under 500KB each for fast loading)
- Recommended sizes: Headshot 800x1000px, Case studies 1200x900px, Blog 1200x800px
- Name files with lowercase and hyphens: `my-project-thumb.jpg`

---

## Deploy to Netlify (Free)

### First-Time Setup

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **"Add new site"** then **"Deploy manually"**
3. Drag and drop your entire `portfolio` folder onto the upload area
4. Your site will be live in seconds at a URL like `random-name-123.netlify.app`

### Update Your Site

After editing content or adding images:
1. Log into Netlify
2. Go to your site, then the **Deploys** tab
3. Drag and drop the `portfolio` folder again
4. Changes go live in seconds

### Connect a Custom Domain (optional)

1. In Netlify, go to **Domain management**, then **Add custom domain**
2. Enter your domain (e.g., `andreaongpotapov.com`)
3. Follow the DNS instructions Netlify provides
4. Netlify provides free HTTPS automatically

---

## Set Up Contact Form

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form endpoint (looks like `https://formspree.io/f/xabcdefg`)
4. Open `content/settings.js` and replace `YOUR_FORM_ID` with your endpoint:
   ```js
   contactFormAction: "https://formspree.io/f/xabcdefg",
   ```

---

## Set Up Google Analytics (optional)

1. Go to [analytics.google.com](https://analytics.google.com) and create a property
2. Get your Measurement ID (starts with `G-`)
3. Open `index.html` and uncomment the analytics script near the top
4. Replace `G-XXXXXXXXXX` with your actual ID

---

## File Structure

```
portfolio/
├── index.html              ← Main HTML file (rarely needs editing)
├── css/
│   └── style.css           ← Styles (edit for design changes)
├── js/
│   └── main.js             ← Site logic (rarely needs editing)
├── content/                ← EDIT THESE FILES
│   ├── settings.js         ← Site name, email, social links
│   ├── bio.js              ← Your bio and skills
│   ├── case-studies.js     ← Your case studies
│   └── blog.js             ← Your blog posts
├── images/                 ← ADD IMAGES HERE
│   ├── headshot/
│   ├── case-studies/
│   └── blog/
├── netlify.toml            ← Netlify config (caching, headers)
├── _redirects              ← URL routing for Netlify
└── README.md               ← This file
```

---

## Troubleshooting

**Images not showing:**
Check that the file path in your `.js` content file matches the actual file location in `images/`.

**Contact form says "not configured":**
Set up Formspree and add your form URL to `content/settings.js`. See "Set Up Contact Form" above.

**Changes not showing on Netlify:**
Re-deploy by dragging the folder into Netlify again under the Deploys tab.

**Something broke after editing a content file:**
Check for missing commas, quotes, or brackets. Every string needs quotes around it, and every item in a list needs a comma after it (except the last one).
