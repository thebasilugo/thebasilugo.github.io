# Basil Ugochukwu: portfolio

Astro static site. Run `npm install`, then `npm run dev`. Check with `npm run build`. Deploy on Vercel (framework preset: Astro).

## Updating content (no component edits needed)
- Projects: `src/data/work.ts`. Add an object; a page at `/work/<slug>/` is generated. Commented-out entries stay hidden. Add `outcome` only for facts you can prove.
- Links, experience, stage and screen items: `src/data/site.ts`.
- Colours and type: variables at the top of `src/styles/global.css`.

## Contact and tester forms
Both forms post to one endpoint. Create a free Formspree (or Web3Forms) form, then set `PUBLIC_FORM_ENDPOINT` in Vercel environment variables. Submissions arrive in its dashboard and by email, with `form=contact` or `form=tester` to tell them apart. Without the variable, forms open a pre-filled email instead.
