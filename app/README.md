# Justine Bermillo — YouTube-inspired portfolio

A responsive dark-purple portfolio built with **Next.js 15**, React, and vanilla CSS. Includes a YouTube-style channel banner, channel navigation, searchable/filterable project library, project detail modal, skills, career timeline, and contact page.

## Run locally

1. Install Node.js 20 or later.
2. Open a terminal in this folder.
3. Run `npm install` and then `npm run dev`.
4. Open http://localhost:3000.

## Publish to GitHub and Vercel

1. Create a new **public** GitHub repository, e.g. `portfolio`, under `justinep-b`.
2. Upload the **contents** of this folder to that repository (not the ZIP itself). Do not upload `node_modules` or `.next`.
3. Go to https://vercel.com/new and choose **Import Git Repository**.
4. Select the repo. Vercel should recognize **Next.js** automatically.
5. Click Deploy. Future pushes to GitHub will trigger a new deployment.

## Customize

- `app/data.ts`: change categories, work samples, project details, skill groups, and URLs.
- `app/page.tsx`: change your headline, bio, social/contact links, and page layout.
- `app/globals.css`: change colors and typography.
- `public/`: place your own headshot, banners, and approved portfolio thumbnail images here. Use `/filename.png` as an image URL in `app/data.ts`.

## Important before publishing

- Four YouTube channel links were provided as portfolio references; only descriptions confirmed by Justine should be published as personal contributions. **Do not imply sole ownership or authorship.**
- Client-specific email campaigns, GoHighLevel screenshots, team/project processes, and operational results remain placeholders until permission or anonymization.
- The Google Drive folder may not be publicly accessible to every portfolio visitor. Consider exporting a curated set of **approved** samples into `public/`, or making only those specific Drive files publicly viewable with permission.
- Add a professional contact email or contact form before public launch. GitHub is the temporary contact link.
- No invented growth metrics, client testimonials, or private analytics have been included.

## License

Portfolio source supplied for Justine's use. Existing linked client work remains the property of its respective rights holders.


## October 2026 update

Updated categories, contact email, résumé link, About, Claude Code portal case studies and thumbnail sample image links. Thumbnail photos are loaded from Google Drive preview URLs and will show only if the Google Drive files are publicly accessible. If the images do not load, change Google Drive sharing or add the image files locally under `public/` and update `app/data.ts`.

**GitHub browser upload:** Enter `app` in the GitHub repository, use Add file > Upload files for the four files in the local `app` directory, and commit overwrites. Other files should remain in repository root. For a full replacement, upload both `app` and the root-level config files, preserving their directories.

## Version 7 deployment instructions
The portrait is now imported from `app/justine-profile.png`, so it is bundled into the app instead of depending on uploading `public/`. Upload all five files inside `app/` to the GitHub `app/` directory, preserving the full filenames.
Videos and private client screenshots are **not** included publicly until reviewed/redacted. The testimonial remains linked through the provided Loom URL.


## V8: evidence and privacy
Six selected screenshot excerpts (deduplicated and masked) appear under public/proof. Three SILENT, HEAVILY OBSCURED motion previews appear there as well. Raw client recordings are intentionally NOT included. Review assets and obtain client approval before public use. No confidential raw material is linked on the site. Full source videos remain in private Drive. Upload the ENTIRE repository contents including `public/proof` and `app`.


## Version 9 media
John and Jennifer feedback image gallery, John's Loom embed. Internal portal demonstration videos are not published. The portal demos can be added later by owner after editing and authorization.


## V10: Three user-edited project previews

- `public/previews/cyborg-va-community.mp4` — GoHighLevel community and VA placement experience.
- `public/previews/team-portal.mp4` — onboarding, offboarding, task/time tracking, invoice exports.
- `public/previews/client-portal.mp4` — client resource/action-item hub.

These are the short edited MP4 files supplied by Justine and are included without modification. Videos open in the project detail popup; their accompanying descriptions provide context. Upload **both** `app/` and `public/` to the repository, keeping the directory structure intact.
