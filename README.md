# Winry Cigna — Portfolio Website

A simple portfolio site: Home, About, Projects, Contact.
Plain HTML/CSS — no build tools, no npm needed.

## Files

```
index.html      Home page
about.html      Longer bio, education, skills
projects.html   Projects + experience timeline
contact.html    LinkedIn + email
assets/
  style.css     All page styling
  photo.jpg     Your photo
  projects/     Project photos
```

## Editing content

Every page is plain HTML — open any `.html` file in a text editor (even
Notepad or TextEdit works) and edit the text between the tags.

## Put this on GitHub

If you don't already have a repo for this:

1. Go to [github.com/new](https://github.com/new), name it (e.g.
   `portfolio`), and create it — don't add a README (you already have
   one here).
2. On your computer, open a terminal in this folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

   (Replace `YOUR-USERNAME/YOUR-REPO` with your actual GitHub username
   and repo name.)

   No `git` installed? You can also drag-and-drop every file in this
   folder into the GitHub repo page in your browser ("Add file" →
   "Upload files"), which needs no command line at all.

## Publish it live with GitHub Pages (free)

1. In your repo on GitHub, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a
   branch", branch `main`, folder `/ (root)`.
3. Save. GitHub will give you a URL like
   `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two.

That URL is your live site — put it on your resume and LinkedIn.
