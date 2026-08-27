# CLAUDE.md - Kerzie AI Website

## Project Context
This is the kerzie.ai website. It is not a consumer product page.
It is the builder's portfolio. The person landing here is trying to
understand who built these products and why. Target visitor: investors,
potential partners, consulting prospects, people who heard about a
Kerzie AI product and want to know who is behind it.

## Stack
- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- GitHub repo: wadekerzie/KerzieAIwebsite
- Project lives at: ~/projects/kerzie.ai

## Deployment
- Push to main branch triggers automatic Vercel deployment
- Custom domain: kerzie.ai
- Do not touch vercel.json unless explicitly instructed

## Brand Posture
Kerzie AI builds products that solve obvious, long-standing problems
using AI. We do not teach AI. We do not explain AI. We do not justify
it. We solve problems and the technology is invisible in the solution.

The visitor does not need to understand how we do it. They need to
understand what we fixed and why it needed fixing.

## Voice Rules - Non-Negotiable
- Certain not angry. Write like Wade talks when he knows he is right.
- Short sentences when making a point. Longer ones when telling
  the story.
- No hedging. No "we believe" or "we think" or "we aim to".
  We do it or we don't.
- Name the villains. Not companies. Behaviors. Slow response times.
  Complicated apps. Lost leads. Friction dressed up as process.
- Raw and specific beats polished and generic every time.
- The minute it sounds like a website it is dead.
- Never use: leverage, solution, empower, revolutionary, game-changer,
  seamless, robust, cutting-edge, innovative, or transformative.
- No em dashes. Use hyphens, commas, colons, or periods instead.

## Design Language

### Palette in hierarchy
- #1A1B2E - primary background, the canvas for everything
- #6B9FD4 - primary accent, headlines, key phrases, CTAs
- #AABBCC - body copy, supporting text, labels
- #FFFFFF - high impact single lines only, MTP, belief statement
- Coral (#E8896A approximate) - punctuation not furniture.
  Thin left borders on problem statements. Short section dividers.
  Hover states. Never used as background. Never used to frame sections.

### Typography
- Inter font throughout, all weights
- No system fonts as fallback display faces

### What this should feel like
- A serious builder's workshop
- Dark, certain, focused
- NOT crypto, NOT cybersecurity, NOT a nightclub
- No gradients
- No glowing effects
- No animated particles
- No decorative borders framing entire sections or the full page
- Restraint is the design principle

## Site Architecture

### Homepage - Three acts
1. The belief. Why we exist. MTP front and center.
   "Life is best when technology just works."
   Subheadline: "The world's best tech feels the easiest."
   Under 30 seconds to understand who this is and why they built things.
2. The problems. Not product names. Not feature lists.
   Plain human language problem statements with coral left border accent.
   Each problem links to its own product page.
3. The one question. "What problem hurts the most?"
   Single text input. No character limit. No form fields beyond this.
   No budget dropdown. No timeline selector. No category picker.
   One instruction: don't worry about the solution, just tell us
   the problem, the longer the better.

### Product pages
Each product gets its own page. The page tells the builder's story.
Structure for every product page:
- The problem. Written as a human would say it out loud.
- Why it has been ignored or poorly solved until now.
- What got built.
- How it works. Plain language, no jargon.
- Product name appears after the problem lands. Never before.

### Current products
- GotaGuy: SMS-native home repair. No app. No account. Text and done.
- Unison: SMB lead response. Leads die because nobody responds fast
  enough. Unison fixes that.
- Zorli: Important information in one place for fast retrieval.
- Ad2Action: Leads find an SMB but slow response loses them.

### Navigation
- Logo + minimal nav
- No Services dropdown
- No About page as primary nav item
- No Book a Call button as primary CTA
- Legal pages (privacy, terms) live in footer only

### What gets killed
- "AI-Powered Everything" headline - gone
- "We are an AI Studio" - gone
- Services menu - gone
- About page as a destination - gone
- Any intake form with budget or timeline fields - gone
- Zapier partner page as primary content - gone
- Any language positioning this as a consulting firm
  that takes every engagement - gone

## Components
- Header.tsx: redesign to dark theme, minimal nav
- Footer.tsx: redesign to dark theme, legal links only
- Keep component structure, replace content and styling

## What Claude Code Should Never Do
- Add decorative gradients or glow effects
- Use coral as a background color for any section
- Frame entire page or sections with rounded corner borders
- Add animations beyond subtle hover states
- Write copy that sounds like a typical agency website
- Use any word from the banned list above
- Create new pages without being explicitly asked
- Change vercel.json deployment configuration
- Touch package.json or next.config.ts without being explicitly asked
## Daughter pages (client proposals, partner views, share pages) - THE CHECKLIST (Wade's rule, 2026-08-27)

Raw-HTML pages served from `public/` via a `src/app/<slug>/route.ts` (the attaccountproposal
pattern) bypass Next's head handling, so EVERY new one bakes in, before first push:

1. **Favicons - always** (Wade: "any daughter pages we publish should have this baked in"):
   ```html
   <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
   <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png">
   <link rel="apple-touch-icon" href="/apple-touch-icon.png">
   ```
   Without these the tab shows a grainy upscaled favicon.ico (caught by Wade on /tagproposal, 8/27).
2. `<meta name="robots" content="noindex, nofollow">` - daughter pages are shared by URL, never indexed.
3. `<meta charset="utf-8">` + viewport meta + a real `<title>... | Kerzie AI</title>`.
4. Existing examples to copy: `public/tag-phased-plan.html`, `public/att-execution-plan.html`.

Next-rendered daughter pages (e.g. /partners/danny) inherit icons from the app - this checklist
is for the raw-HTML route.ts pattern only.

### Sharing metadata (added to the checklist 8/27, Wade's rule)
5. **og tags - always**: og:title (the page's real name), og:description, and
   `og:image` pointing at `https://kerzie.ai/og/brand-card.jpg` (ABSOLUTE url - raw pages
   have no base). The one-window creative is one-window's ALONE - the brand card is the
   default face of every other link Wade texts or forwards. A per-client custom og card is
   allowed when it earns its keep; the brand card is the floor.
