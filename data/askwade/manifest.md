# askwade corpus manifest

Built for askwade.kerzie.ai from Wade OS content and the kerzie.ai site repo. Public, published
sources only. Corpus file: data/askwade/corpus.json. 142 chunks total (below the 150 to 400
target by a small margin; see notes at the end for why, and for what a follow-up pass would add).

## Included, by source

- **Beehiiv newsletter archive** (`kerzie_ai_content/newsletter_archive/beehiiv/2026-06-23_export/`,
  the newer of two exports on disk; every entry confirmed via `archive_manifest.json` with
  `status: confirmed` and a live `web_url`). 41 issues, 53 chunks. Date range 2025-03-12 to
  2026-06-17.
- **Newsletter drafts, confirmed sent** (`kerzie_ai_content/newsletter_drafts/`). 12 issues, 21
  chunks. Date range 2026-07-23 to 2026-09-17. Each included file carries explicit evidence of
  being sent or scheduled-and-confirmed (Beehiiv API status "confirmed", or "SENT" with delivery
  numbers) for a date on or before today, 2026-09-17. Three of the twelve had their date corrected
  from the filename to the actual, later-confirmed send date after a reschedule (see Corrections
  below).
- **LinkedIn, published only** (`kerzie_ai_content/linkedin/`). 2 posts, 2 chunks: the 2026-09-16
  native post (verified verbatim after posting) and Post 1 of the Executive Legacy arc, published
  2026-09-17. Posts 2 to 4 of that arc are scheduled for future dates (9/24, 10/1, 10/8) and are
  excluded as not yet published.
- **Nation's Restaurant News byline**, fetched live, not from the repo draft. 1 piece, 3 chunks.
  https://www.nrn.com/expert-opinions/why-restaurants-don-t-need-an-11-000-consultant-to-fix-prime-cost-anymore
  (published 2026-08-20, byline Wade Kerzie). The text in the corpus is what is actually printed,
  confirmed by direct fetch, not the earlier repo draft of the piece.
- **kerzie.ai site essays** (`src/app/blast-door`, `src/app/consequence-clock`,
  `src/app/kerzie-effect`). 3 pages, 30 chunks. Visible prose only, no nav or button text.
- **kerzie.ai site pages** (One-Window and its access/business/welcome subpages, Back Cover,
  Ventures index plus all 8 venture pages, Services index plus its 4 subpages, Team, and the
  generated llms.txt). 21 pages, 33 chunks.

## Excluded by rule (folder or content type)

- `captures/`, `memory/`, `ACTIONS.md`, `ACTIONS_ARCHIVE.md`, `00_system/`, `00_system/Private/`:
  internal operating record, never published.
- `job_search/`, `pro.wadekerzie.com`: discreet by standing rule, never in public content.
- `published/wwt-ai-execution-plan/`, `published/wwt-velocity-sales-hunter/`,
  `published/wade-os-dashboard/`: name WWT/AT&T people and deal specifics by name. Excluded whole.
- `kerzie_ai_content/promotion/oped/` drafts and pitch trackers: pitch and submission material,
  not published text, except the one NRN piece confirmed live (see above).
- `kerzie_ai_content/weekly_packets/2026-09-14/`, `2026-09-21/`, `2026-09-28/`: every LinkedIn and
  Substack file in these folders is marked DRAFT, MOVED, or scheduled for a date after today
  (2026-09-17). None has run yet.
- `kerzie_ai_content/substack/issues/2026-09-29_twelve_questions.md`: scheduled for 2026-09-29, a
  future date. Not yet published.
- `src/app/one-window/pass/page.tsx`: a noindex confirmation page describing a $99 + $149 paid
  "upgrade pass" flow that the current `src/app/one-window/page.tsx` explicitly says was retired
  2026-09-05 in favor of the free model. Including it would put a contradicted, stale price in a
  corpus meant to reflect the current published record.
- Any text naming VIAVI, Kurt, WWT staff, or a client by name/number: not present in what was
  included. The source material already anonymizes these per standing rule (e.g. "a photographer"
  for Kurt, "my last corporate job" for VIAVI), and each draft was checked against the rule before
  inclusion.

## Excluded, unsure

- `kerzie_ai_content/newsletter_drafts/2026-06-23_wade-os-the-work-is-moving-into-one-window.md`:
  companion `.beehiiv-payload.json` explicitly carries `"status": "draft"`.
- `2026-09-15_when-the-buyer-is-no-longer-human.md`, `2026-09-17_i-opened-her-own-page-it-was-blank.md`:
  explicit "Status: DRAFT. NOT staged, NOT scheduled."
- `2026-07-09_the-xbox-problem.md`, `2026-07-22_bye-bye-digital-marketing-agencies.md`,
  `2026-07-28_ai-literacy-new-computer-literacy.md`, `2026-07-30_dont-invent-go-where-the-money-is.md`,
  `2026-08-25_i-argued-with-googles-ai-about-a-page-i-was-looking-at.md`: no status, staging,
  scheduling, or send evidence anywhere in the file.
- `2026-07-22_intelligence_inside_the_building.md`: header says "Status: DRAFT for Wade review"
  but also notes it was staged/scheduled in Beehiiv; contradictory, no send confirmation.
- `2026-07-23_the-phone-company-just-validated-the-whole-thing.md`: says "SCHEDULED IN BEEHIIV
  2026-07-17" but adds "Wade can still edit in Beehiiv before Thursday," with no later
  confirmation the send locked or happened. Worth re-checking in a follow-up pass; likely ran.

## Corrections applied to subagent-extracted dates

Three newsletter-drafts issues were rescheduled after their filename date, and the file's own
later status notes confirm the actual send date. The corpus uses the actual date, not the
filename date:
- "If Today Were the Ceiling": filename says 2026-08-04, actually sent 2026-08-06 (Wade's
  reorder call, 2026-07-30).
- "What the Cleanup App Was Actually Selling": filename says 2026-08-06, actually sent
  2026-08-18 (rescheduled twice: 8/6 to 8/11, then 8/11 to 8/18).
- "I Deleted Outlook Today": filename says 2026-08-13, actually sent 2026-08-25 (rescheduled
  2026-08-10, API-confirmed).

## Gap: not yet processed

- `src/app/industry-pain-points` does not exist as a page on the live site; confirmed absent, not
  a gap.
- Everything else named in the brief's "where to look" list was reached in this pass. The
  shortfall against the 150-400 target (142 delivered) is mostly a function of how much of the
  newsletter_drafts folder had to be excluded as unsure (7 of 19 files) rather than missing
  coverage; a follow-up pass re-checking `the-phone-company-just-validated-the-whole-thing` and the
  five other unsure drafts against Beehiiv's live post history directly (rather than repo notes)
  would likely add another 10 to 15 chunks.

## URLs not individually re-verified live

- All 41 beehiiv-archive URLs use the `wades-newsletter-9cf259.beehiiv.com` domain recorded in the
  archive at export time. The newsletter has since migrated to `kerzieai.substack.com` (all 60
  issues imported 2026-09-15 keeping the same `/p/<slug>`, per
  `kerzie_ai_content/substack/substack_cutover_recipe.md`), and Beehiiv is expected to close around
  2026-10-15. These URLs should still resolve today but will need updating to
  `https://kerzieai.substack.com/p/<slug>` (same slug) once Beehiiv closes.
- The 12 newsletter-drafts URLs use `news.kerzie.ai` (live since 2026-07-29) or the Beehiiv default
  domain for the one issue before that cutover; slugs came from the file itself where the body
  named a live link, otherwise from the filename. None of these 12 were checked with a fresh live
  fetch in this pass.
- The NRN byline URL was fetched live in this pass and its text confirmed word for word; that one
  is solid.
- Site page URLs (kerzie.ai/*) were derived from the Next.js route and not individually re-fetched,
  but the route structure is unambiguous (folder path = URL path).

## Ten strongest "Wade's judgment" chunks

1. `the-kerzie-effect-1`: names the mechanism ("the most valuable thing you sell is the document
   you hand over for free to win the work") and states its two phases and its limits.
2. `the-blast-door-1`: states the belief and labels it a belief, not a measurement ("maybe less
   than three years... the direction is what I'm sure of").
3. `if-today-were-the-ceiling-1`: the ruling on "you don't need another model," reframing the fear
   as a fixed amount of learning rather than a moving target.
4. `we-dont-accept-speeding-tickets-1`: states, then breaks, the fast/cheap/good rule he carried
   his whole career.
5. `i-know-what-needs-to-get-done-i-just-dont-know-how-1`: the claim that most of what gets called
   execution is translation, and that AI removed the translation step.
6. `why-restaurants-dont-need-an-11000-consultant-to-fix-prime-cost-anymore-2`: the AI-competency
   continuum, stated as a real, moving line that is still far from either end.
7. `why-restaurants-dont-need-an-11000-consultant-to-fix-prime-cost-anymore-3`: the ruling that
   judgment was never for sale, and that somebody has to care or the tool does nothing.
8. `the-phone-company-just-validated-the-whole-thing-1` [not in corpus; excluded, unsure]: the
   split he predicts between the commoditized carrier layer and the specific business layer.
   Cited here only as the strongest candidate to re-verify and add in a follow-up pass.
9. `what-leaves-with-the-executive-1`: the diagnosis of what a successor actually inherits versus
   what they need, and why an exit interview and a transition document both fail.
10. `google-cant-afford-to-say-yes-2`: the incentive-based read on why Google can't afford to
    answer questions the way an AI assistant does.

## Notes

- Two background subagents did this extraction: one classified and cleaned the newsletter-drafts
  folder, one extracted prose from the site pages. Both finished and wrote schema-valid JSON; this
  pass merged their output, corrected three dates against the source files' own later status notes,
  dropped one stale/superseded page, fixed one title collision between a LinkedIn post and a
  newsletter issue that shared an identical title, and re-split one oversized chunk (the generated
  llms.txt, at 1,034 words) into two.
- Deduplication ran across the whole merged set (normalized whitespace, case-insensitive exact
  match). Zero duplicate paragraphs were found across sources.
- A few single-chunk short pieces run outside the 300-500 word target (several early, short
  beehiiv issues around 550-590 words; a few thin site pages like `ai-operating-system` and `the-people`
  at 50-80 words). These are complete pieces, not truncated chunks: short newsletter issues stay
  as one chunk per the brief, and thin marketing pages were extracted honestly rather than padded.


Excluded 9/17 by Fable review: the Fast-Track page chunk naming Kurt and Tana Nelson (standing rule: Kurt is never named in Kerzie AI content; the live page still carries the story, flagged to Wade separately).
