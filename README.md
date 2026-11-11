# SAIPRATAP — Developer Portfolio

A responsive static portfolio built with HTML, CSS and vanilla JavaScript. It includes a mobile navigation menu, contact email copy action, installable PWA manifest, service worker offline app shell, custom icon and a 404 page.

## 1. Personalise before publishing

1. Open `script.js` and change `PORTFOLIO_EMAIL` from `hello@example.com` to your real public contact email.
2. In `index.html`, update the About text, skills, project descriptions and social links.
3. Replace the three sample project cards with your real projects and actual repository/demo URLs. The current cards are clearly sample entries.
4. Update the page title and description in `index.html` if desired.

## 2. Run locally

This is a static site. You can open `index.html` directly to preview the layout. For PWA/service-worker testing, use a local web server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. Service workers require HTTPS or localhost.

## 3. Publish with GitHub Pages

1. Create a GitHub repository named `saipratap-portfolio` (or any name you prefer).
2. Extract this project ZIP.
3. Upload the contents of this folder to the repository root. Ensure `index.html` is at the root, not inside an extra nested folder.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait for the Pages deployment to finish. Your site URL will be:
   - `https://YOUR-GITHUB-USERNAME.github.io/saipratap-portfolio/`
   - If the repository is named `YOUR-GITHUB-USERNAME.github.io`, the URL is `https://YOUR-GITHUB-USERNAME.github.io/`.

## 4. Publish with Git commands

From the extracted project folder:

```bash
git init
git add .
git commit -m "Launch SAIPRATAP portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/saipratap-portfolio.git
git push -u origin main
```

Then enable GitHub Pages using the steps above.

## 5. PWA installation

After deployment over HTTPS, open the website in a supported browser. Use the browser's **Install app** or **Add to Home Screen** option. The service worker caches the core app shell for repeat visits and basic offline access. First visit requires an internet connection.

## 6. Important notes

- No build step, Node.js, API key, database or paid service is required.
- Contact uses a `mailto:` link; it opens the visitor's configured email application. It does not send mail from a server.
- The social links are generic placeholders. Replace them with your own profiles.
- Skill bars are illustrative, not measured proficiency scores.
- This project does not include analytics or a backend contact form, so no visitor data is collected by the site.
- GitHub Pages may take a few minutes to publish changes. Check the **Actions** tab if deployment fails.
