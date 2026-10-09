import Link from "next/link";
import type { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";
import {
  EssaySheet,
  EssayMasthead,
  Abstract,
  P,
  Section,
  Note,
  Thesis,
  Callout,
  Colophon,
} from "@/components/Essay";

export const metadata: Metadata = {
  title: "The Shrapnel | Kerzie AI",
  description:
    "For twenty years we packed every job a business has into its website. AI is pulling those jobs back out, one at a time, and the businesses that keep the pieces straight are the ones machines will recommend.",
  openGraph: {
    title: "The Shrapnel",
    description:
      "For twenty years we packed every job a business has into its website. AI is pulling those jobs back out, one at a time, and the businesses that keep the pieces straight are the ones machines will recommend.",
    type: "article",
    publishedTime: "2026-10-09",
    authors: ["Wade Kerzie"],
    url: "https://kerzie.ai/shrapnel",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shrapnel",
    description:
      "Six jobs the website used to do. Six places they're landing now.",
  },
};

const srcLink = "k-focus underline underline-offset-2 hover:text-[#2B5D96]";

const afterMatter = (
  <>
    <p className="text-[#262B3D]/80 leading-relaxed max-w-xl">
      This essay follows four others.{" "}
      <Link href="/kerzie-effect" className="k-link k-focus text-[#2B5D96]">
        The Kerzie Effect
      </Link>{" "}
      is the firm-level argument: what happens to sellers of judgment when the
      buyer can run the playbook.{" "}
      <Link href="/consequence-clock" className="k-link k-focus text-[#2B5D96]">
        The Consequence Clock
      </Link>{" "}
      is the person-level one: you work at the speed you are checked.{" "}
      <Link href="/blast-door" className="k-link k-focus text-[#2B5D96]">
        The Blast Door
      </Link>{" "}
      is the time limit on both.{" "}
      <Link href="/blast-radius" className="k-link k-focus text-[#2B5D96]">
        The Blast Radius
      </Link>{" "}
      is how far the effect travels inside the building. This one is about
      what the same force does to the website.
    </p>
    <div className="mt-10">
      <SubscribeForm source="shrapnel-essay" />
    </div>
  </>
);

export default function ShrapnelPage() {
  return (
    <EssaySheet after={afterMatter}>
      <EssayMasthead
        kicker="Essay"
        author="Wade Kerzie"
        date="October 9, 2026"
        title={
          <>
            The Shrapnel<span className="dot">.</span>
          </>
        }
        deck={<>Your website is breaking apart.</>}
      />

      <Abstract>
        For twenty years we packed every job a business has into its website.
        AI is pulling those jobs back out, one at a time, and the businesses
        that keep the pieces straight are the ones machines will recommend.
      </Abstract>

      <Section>The hub</Section>
      <P open>
        Think about what your website has turned into over the last twenty
        years.
      </P>
      <Note>Put it on the website.</Note>
      <P>
        It started as a brochure. Then it became the place everything went.
        Product descriptions and pricing. The documents your customers need.
        Customer support. Ordering. Booking. Videos. Reviews. Contact forms,
        chat bubbles, the careers page. Every time a new job came along, the
        answer was the same: put it on the website.
      </P>
      <P>
        That was the right call. The website was the commercial hub of the
        company, the one place a customer could go to learn, decide and buy.
        Everything lived in one place, built for a person to click through,
        read, watch and download.
      </P>
      <P>That held for two decades because the visitor was a person.</P>
      <Note>More than half of the traffic on the internet is now machines.</Note>
      <P>
        The visitor is changing. Cloudflare reported this summer that more than
        half of the traffic on the internet is now machines, not people. And
        the force pulling all those jobs back out of the website, one by one,
        is AI.
      </P>
      <P>
        I&rsquo;ve had a picture in my head that I can&rsquo;t shake. Your
        website, blown apart, and every job it used to do flying off like
        shrapnel to somewhere new.
      </P>

      <Section>Where the pieces are going</Section>
      <P>Six jobs the website used to do. Six places they&rsquo;re landing now.</P>
      <P>
        <strong>Being found</strong> is moving into AI answers, and it starts
        on Google itself. Type a question into Google today and the first
        thing on the screen is often Google&rsquo;s own AI summary. It answers
        the question before you see a single link. Google says its newer AI
        Mode alone has more than a billion monthly users.
      </P>
      <Note>8% vs 15%.</Note>
      <P>
        When the answer is already on the screen, people stop clicking. In a
        randomized study of more than 1,000 people searching Google this year,
        clicks to websites dropped by about 38% when an AI summary appeared,
        and searches that ended with no click at all rose from 54% to 72%.
        Ahrefs found the number one result gets 58% fewer clicks when a
        summary sits above it. Pew saw the same pattern in a 2025 study:
        people clicked through to a website 8% of the time when a summary
        appeared, against 15% when it didn&rsquo;t, and only 1% clicked a link
        inside the summary itself.
      </P>
      <P>
        Paying for the top spot doesn&rsquo;t get you out from under it. On
        searches where a summary appears, ads still get clicked, but about a
        quarter less often than on searches without one, by Seer
        Interactive&rsquo;s count. Add it all up and SparkToro found that more
        than two-thirds of U.S. Google searches this year ended without a
        click.
      </P>
      <P>
        And Google isn&rsquo;t the only one answering. People ask ChatGPT,
        Gemini, Perplexity and Claude who to call, and they take the answer.
        BrightLocal found that 45% of consumers now use AI tools for local
        recommendations, up from 6% a year earlier.
      </P>
      <P>
        The summary gets people their answer. Whoever ranked first, and
        whoever paid to sit on top, gets the click less often.
      </P>
      <Callout>
        The summary gets people their answer. Whoever ranked first, and
        whoever paid to sit on top, gets the click less often.
      </Callout>
      <Note>It wants a clean, current list.</Note>
      <P>
        <strong>What you have</strong> is moving into live feeds the AI can
        read. Your products, your inventory, your hours, your prices. An AI
        answering a question doesn&rsquo;t want to wander your menus. It wants
        a clean, current list. Google&rsquo;s Chrome team now calls llms.txt,
        a plain page written for AI to read, &ldquo;an emerging
        convention,&rdquo; and Chrome&rsquo;s Lighthouse audit checks for it.
        We run one for a client that rebuilds its entire inventory every
        morning, every item with its price and ID.
      </P>
      <Note>People reserve &ldquo;without leaving their chat.&rdquo;</Note>
      <P>
        <strong>Taking the booking</strong> is moving off the website
        entirely. In restaurants and hotels, it&rsquo;s already happening
        inside the AI itself. ChatGPT books tables through OpenTable, Resy and
        Yelp; in Yelp&rsquo;s words, people reserve &ldquo;without leaving
        their chat.&rdquo; Since late August, Google&rsquo;s AI Mode lets
        people book select hotels right inside the search and pay with Google
        Pay, with partners like Booking.com, Expedia, Hilton and Marriott.
        Appointment businesses are next in line: Booksy says Google&rsquo;s AI
        Mode books directly into its providers&rsquo; calendars. The
        scheduling still runs through a booking platform. It just isn&rsquo;t
        happening on your website anymore.
      </P>
      <P>
        <strong>Taking the order</strong> is moving inside the AI. This summer
        Square turned on ordering in ChatGPT and Claude for U.S. restaurants
        and cafes that use Square Online Ordering. Someone asks for dinner,
        and the order goes in without your website ever loading.
      </P>
      <P>
        <strong>Answering the call</strong> is moving to AI, on both ends of
        the line. On the caller&rsquo;s side, Google&rsquo;s AI now calls
        local businesses on people&rsquo;s behalf to check prices and
        availability, and Google has started rolling out a &ldquo;Call for
        Me&rdquo; feature in Gemini. I see it on my own phone too: my
        carrier&rsquo;s AI screens my calls before I ever pick up.
      </P>
      <P>
        On the business side, AI receptionists are getting better fast. The
        voices sound more natural every month, and they&rsquo;re taking on
        real work: answering, transferring the call, booking the appointment,
        taking the order. Every one of those conversations happens on the
        phone, not on the website. A calendar might show the booking
        afterward. Most of the time, nothing on the site changes at all.
      </P>
      <Note>The chat bubble most people close without reading.</Note>
      <P>
        That leaves the website one live channel: the chat bubble in the
        corner, the one most people I know close without reading.
      </P>
      <Note>Your website is one witness among many.</Note>
      <P>
        <strong>Proving you&rsquo;re good</strong> is moving to the sources an
        AI checks before it recommends anyone: reviews, listings and
        citations. In BrightLocal&rsquo;s study of nearly two million AI
        citations for local businesses, Google Business Profiles alone made up
        28.5% of them. Your website is one witness among many, and the AI
        hears from all of them before it says your name.
      </P>
      <P>
        None of these pieces is the website anymore. Every one of them is
        still your business.
      </P>

      <Section>The danger is drift</Section>
      <Note>The explosion isn&rsquo;t the risk. The drift is.</Note>
      <P>The explosion isn&rsquo;t the risk. The drift is.</P>
      <P>
        When everything lived on one site, it was all right or all wrong
        together. Once the pieces scatter, each one goes stale on its own
        schedule. Your hours say one thing on Google and another on Yelp. The
        AI quotes a price you stopped honoring in June. The booking platform
        thinks you&rsquo;re open Sundays. The feed still lists the item you
        sold last week.
      </P>
      <P>
        No customer sees all of that at once. The AI does. It reads every
        piece, notices they don&rsquo;t agree, and recommends whoever&rsquo;s
        information it can trust.
      </P>
      <P>
        So the real job now isn&rsquo;t redesigning the website. It&rsquo;s
        keeping one source of truth, written by you, and feeding every piece
        from it. One source of truth keeps every piece in sync. If you
        don&rsquo;t author it, the machines will assemble it from whatever
        they can find.
      </P>
      <Thesis label="The claim">
        One source of truth keeps every piece in sync. If you don&rsquo;t
        author it, the machines will assemble it from whatever they can find.
      </Thesis>

      <Section>What&rsquo;s left: a credibility stamp</Section>
      <P>So what happens to the website itself?</P>
      <P>
        I don&rsquo;t think it disappears. I think it gets a smaller job, and
        a more important one.
      </P>
      <Note>Not to read it. To check it.</Note>
      <P>
        Here&rsquo;s how I see people using the web now, and it&rsquo;s
        speeding up. Someone hears about a business, or their AI recommends
        one. They look it up. Not to read it. To check it. Is this a real
        company? Does it do what I need, where I need it? Does it look like
        someone&rsquo;s minding the store?
      </P>
      <P>
        Yep. Then they go back to their AI and say, &ldquo;Go find out more.
        Get me a quote. Book it.&rdquo;
      </P>
      <P>
        They don&rsquo;t scroll. They don&rsquo;t click through the services
        pages. Their agent does that part, or already did.
      </P>
      <Note>Five seconds, maybe less.</Note>
      <P>
        That&rsquo;s a credibility stamp. The front of your website has to
        pass the glance: who you are, where you are, proof you&rsquo;re real,
        how to reach a person. Five seconds, maybe less. The depth, every
        service, every area, every answer to every question, gets read by
        machines first. More and more, only by machines.
      </P>
      <P>
        A site built to be read cover to cover is answering a question fewer
        people are asking.
      </P>

      <Section>The first expense to recover</Section>
      <P>Here&rsquo;s where it gets practical, and where the money is.</P>
      <P>
        For years, the people reading your website mostly found you through
        Google. That&rsquo;s why the SEO bill made sense, and it&rsquo;s why
        most companies stopped looking at it. It became a cost of doing
        business, a line item that renews itself.
      </P>
      <P>
        Picture the pie of who reads your site. Not long ago, nearly all of it
        was people arriving from search, and SEO was how you competed for
        them. Today more than half the traffic on the internet is machines.
        The slice where AI reads your site on someone&rsquo;s behalf is
        already the bigger one, and I don&rsquo;t know anyone who thinks
        it&rsquo;s shrinking.
      </P>
      <P>
        I&rsquo;m not saying SEO is dead. I&rsquo;m saying the technical side
        of it changed. Google hands out the yardstick. Its PageSpeed Insights
        tool runs Chrome&rsquo;s Lighthouse audit, scores a site&rsquo;s
        search readiness from 0 to 100, and names exactly what&rsquo;s broken.
        Anyone can run it.
      </P>
      <Note>SEO score: 92. Monthly retainer required: zero.</Note>
      <P>
        This week we ran it for a client we work with. SEO score: 92. The
        audit named the one line of code holding it back, an image tag missing
        its description. We wrote the fix word for word, ready to hand to
        their website company. Total time: minutes. Monthly retainer required:
        zero.
      </P>
      <Note>You pay for the watch.</Note>
      <P>
        That&rsquo;s what SEO looks like now. Not a monthly line item you
        stopped reading years ago. A score you can check yourself, a list of
        what&rsquo;s broken, and a fix when something drops. When a site
        already scores at or near 100, there&rsquo;s no reason to pay every
        month to reach a score you already have. You pay for the watch.
      </P>
      <P>
        So as your website breaks apart, start with the line on your budget
        you haven&rsquo;t looked at in years. The SEO bill is the first place
        to recover money. Put it toward the bigger half of the pie: making
        sure the machines reading about you get the right answer.
      </P>

      <Section>Who keeps the pieces straight</Section>
      <P>
        Back to the picture. Six pieces flying off the website: being found,
        what you have, the booking, the order, the call, the proof. Each one
        landing somewhere you don&rsquo;t control.
      </P>
      <Note>Who&rsquo;s keeping all the pieces straight?</Note>
      <P>
        The question most owners are asking is, &ldquo;Should we redo our
        website?&rdquo; I think it&rsquo;s the wrong question right now. The
        right one is: who&rsquo;s keeping all the pieces straight?
      </P>
      <P>
        That starts with one page that tells AI exactly what your business is,
        in your own words, kept current. We call it the Back Cover. It&rsquo;s
        the first piece. The rest are coming, and I&rsquo;d rather our clients
        author them than chase them.
      </P>
      <P>
        See what AI reads about your business:{" "}
        <Link href="/back-cover" className="k-link k-focus text-[#2B5D96]">
          kerzie.ai/back-cover
        </Link>
      </P>

      <Colophon>
        Sources, each opened and checked on October 9, 2026: machine traffic,{" "}
        <a href="https://blog.cloudflare.com/agentic-internet-bot-report/" className={srcLink}>
          Cloudflare, July 2026
        </a>
        ; AI Mode users,{" "}
        <a href="https://blog.google/products-and-platforms/products/search/search-io-2026/" className={srcLink}>
          Google, May 2026
        </a>
        ; clicks drop about 38% when an AI summary appears, randomized study,{" "}
        <a href="https://www.searchenginejournal.com/ai-overviews-cut-organic-clicks-38-field-study-finds/573145/" className={srcLink}>
          Search Engine Journal on Agarwal and Sen, April 2026
        </a>
        ; number one result, 58% fewer clicks,{" "}
        <a href="https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/" className={srcLink}>
          Ahrefs, February 2026
        </a>
        ; clicks with an AI summary, 8% vs 15%,{" "}
        <a href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/" className={srcLink}>
          Pew Research Center, July 2025
        </a>
        ; paid and organic click rates with and without a summary,{" "}
        <a href="https://seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update" className={srcLink}>
          Seer Interactive, April 2026
        </a>
        ; more than two-thirds of searches end without a click,{" "}
        <a href="https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/" className={srcLink}>
          SparkToro, June 2026
        </a>
        ; AI for local recommendations, 45% up from 6%,{" "}
        <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" className={srcLink}>
          BrightLocal Local Consumer Review Survey, February 2026
        </a>
        ; llms.txt as &ldquo;an emerging convention,&rdquo;{" "}
        <a href="https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt" className={srcLink}>
          Chrome for Developers, Lighthouse llms.txt audit
        </a>
        ; restaurant reservations in ChatGPT,{" "}
        <a href="https://blog.yelp.com/news/yelp-chatgpt-integration/" className={srcLink}>
          Yelp, August 2026
        </a>{" "}
        and{" "}
        <a href="https://www.androidheadlines.com/2026/08/chatgpt-restaurant-reservations-yelp-opentable-resy.html" className={srcLink}>
          Android Headlines, August 2026
        </a>
        ; hotel booking in Google AI Mode,{" "}
        <a href="https://blog.google/products-and-platforms/products/search/book-travel-ai-mode/" className={srcLink}>
          Google, August 2026
        </a>
        ,{" "}
        <a href="https://support.google.com/travel/answer/17216079" className={srcLink}>
          Google Travel Help
        </a>{" "}
        and{" "}
        <a href="https://skift.com/2026/08/27/googles-agentic-hotel-booking-tool-comes-to-ai-mode/" className={srcLink}>
          Skift, August 2026
        </a>
        ; appointments in Google AI Mode,{" "}
        <a href="https://biz.booksy.com/blog/booksy-google-ai-mode-integration" className={srcLink}>
          Booksy
        </a>
        ; ordering in ChatGPT and Claude,{" "}
        <a href="https://squareup.com/us/en/press/claude-chatgpt-integrations" className={srcLink}>
          Square, July 2026
        </a>
        ; Google&rsquo;s AI calling businesses,{" "}
        <a href="https://blog.google/products-and-platforms/products/search/search-io-2026/" className={srcLink}>
          Google I/O 2026
        </a>
        ; Gemini Call for Me,{" "}
        <a href="https://www.androidheadlines.com/2026/09/googles-call-for-me-feature-goes-live-today-but-only-for-some.html" className={srcLink}>
          Android Headlines, September 2026
        </a>
        ; what AI cites for local businesses,{" "}
        <a href="https://www.brightlocal.com/resources/ai-directory-sources/" className={srcLink}>
          BrightLocal, August 2026
        </a>
        ; PageSpeed Insights and Lighthouse,{" "}
        <a href="https://developers.google.com/speed/docs/insights/v5/about" className={srcLink}>
          Google for Developers
        </a>
        . The SEO score of 92 and the one-line fix come from a PageSpeed
        Insights run the author&rsquo;s firm made this week for a client who
        is not named; the score receipts are on file. The inventory page that
        rebuilds every morning is a client of the author&rsquo;s firm, also
        not named. The carrier AI that screens the author&rsquo;s calls is the
        author&rsquo;s own experience on his own phone. &ldquo;The one most
        people I know close without reading&rdquo; is the author&rsquo;s
        observation, not a measurement.
      </Colophon>
    </EssaySheet>
  );
}
