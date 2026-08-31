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
  title: "The Blast Door | Kerzie AI",
  description:
    "The era when a person plus a nearly-free intelligence can build something of their own is real, it is short, and it is closing from every direction at once. What to do while the deck still feels level.",
  openGraph: {
    title: "The Blast Door",
    description:
      "Not a window sliding shut. A door closing from every direction at once, and the last part goes fast.",
    type: "article",
    publishedTime: "2026-07-31",
    authors: ["Wade Kerzie"],
    url: "https://kerzie.ai/blast-door",
  },
  twitter: {
    card: "summary",
    title: "The Blast Door",
    description:
      "Not a window sliding shut. A door closing from every direction at once, and the last part goes fast.",
  },
};

const afterMatter = (
  <>
    <p className="text-[#262B3D]/80 leading-relaxed max-w-xl">
      This essay completes a set.{" "}
      <Link href="/kerzie-effect" className="k-link k-focus text-[#2B5D96]">
        The Kerzie Effect
      </Link>{" "}
      is the firm-level argument: what happens to sellers of judgment when the
      buyer can run the playbook.{" "}
      <Link href="/consequence-clock" className="k-link k-focus text-[#2B5D96]">
        The Consequence Clock
      </Link>{" "}
      is the person-level one: you work at the speed you are checked. This one
      is about the time limit on both.
    </p>
    <div className="mt-10">
      <SubscribeForm source="blast-door-essay" />
    </div>
  </>
);

export default function BlastDoorPage() {
  return (
    <EssaySheet after={afterMatter}>
      <EssayMasthead
        kicker="Essay"
        author="Wade Kerzie"
        date="July 31, 2026"
        title={
          <>
            The Blast Door<span className="dot">.</span>
          </>
        }
        deck={
          <>
            The era when a person plus a nearly-free intelligence can build
            something of their own is real, it is short, and it is closing from
            every direction at once.
          </>
        }
      />

      <Abstract>
        Right now a person with judgment and an AI can spot a problem, build
        the solution, and get paid for it. That combination has a shelf life,
        because the labs are building toward systems that spot the problems
        too, and when that arrives a solution costs roughly the electricity it
        took to think of it. The opportunity is not a window sliding shut on
        one schedule. It is a blast door closing from every direction at once,
        and the last part goes fast. This essay is about the time before it
        closes: what to build, what to ignore, and why the urgency will only
        look obvious in the rearview.
      </Abstract>

      <P open>
        In Star Wars, the doors don&rsquo;t close the way our doors close. On
        the Millennium Falcon, on the Death Star, on every ship in that
        universe, a blast door doesn&rsquo;t slide down like a window, where
        you can watch the gap shrink and judge your time by it. A blast door
        closes from every direction at once. The opening is a circle, the
        circle gets smaller, and the thing about a shrinking circle is that
        the last part goes fast. One second there&rsquo;s a hole you could
        step through. Half a second later there&rsquo;s nothing, and
        it&rsquo;s sealed like it was never open at all.
      </P>
      <P>
        That&rsquo;s the shape of the opportunity I want to tell you about.
        Not a window. A door, closing from all sides.
      </P>

      <Section>The chainsaw and the hacksaw</Section>
      <P>
        I jumped in early in 2023, back when all of this was chatbots and none
        of it could act on its own yet, and I made a bet that turned out to be
        half right. I saw immediately that this was an upskill everyone was
        going to need. So I built AI training and braced for the rush, because
        surely people would look at what was coming and say: I&rsquo;d better
        learn this. I&rsquo;d better be first. I&rsquo;d better get really
        good at it.
      </P>
      <Note>The chainsaw was free. The hacksaw won anyway.</Note>
      <P>
        The complete opposite happened. People rebelled. They&rsquo;d heard AI
        makes mistakes. They&rsquo;d heard AI was evil, that the robots were
        going to take over the world. I felt like I was handing people a
        chainsaw and watching them nod politely, walk back to the limb pile,
        and pick up their hacksaw. Why people don&rsquo;t gravitate toward the
        power of a technology, regardless of the application, confused me
        then. It still does.
      </P>

      <Section>The argument, stated plainly</Section>
      <Thesis label="The claim">
        Right now, a person with judgment and an AI can spot a problem, build
        the solution, and get paid for it. That combination has a shelf life,
        and I believe the shelf life is short.
      </Thesis>
      <Note>Held loosely: the number. Held firmly: the direction.</Note>
      <P>
        Maybe less than three years. That number is my belief, not a
        measurement, and I&rsquo;ll hold it loosely. The direction is what
        I&rsquo;m sure of.
      </P>
      <P>
        Walk it backward from where this is going. Today, AI is a tool that
        solves problems a human brings to it. The human supplies the problem,
        the context, the taste, the decision to act. That&rsquo;s the
        partnership, and it&rsquo;s the whole basis of my consulting practice
        and every business I run. But the labs aren&rsquo;t building toward
        better tools. They&rsquo;re building toward systems that spot the
        problems too. When that arrives, whatever we end up calling it, the
        economics are brutal and simple: a problem gets identified, solved,
        and deployed for roughly the cost of the electricity it took to think
        about it.
      </P>
      <Note>Not out-competed. Out-existed. Nobody has to beat you.</Note>
      <P>
        Now put yourself on the wrong side of that. Say you had an idea. A
        garage project, a side hustle, a small business built on solving one
        real problem for real customers. The day AI can originate and solve
        that problem for the cost of energy, your business doesn&rsquo;t get
        out-competed. It gets out-existed. Nobody beat you. The problem you
        were paid to solve simply stopped being worth money.
      </P>
      <P>
        That could eventually happen to almost any business, and what happens
        after that day is a different essay, one I&rsquo;m not writing today.
        This essay is about the time before it. Because between now and then,
        there is a stretch of time when the partnership still wins. When
        intelligence is nearly free but direction is still scarce. When a
        human who knows where it hurts, plus a machine that can build, can
        create things that neither could alone.
      </P>
      <Callout>
        That stretch is the opening in the blast door, and it is closing from
        every direction at once.
      </Callout>

      <Section>Bets placed inside the opening</Section>
      <P>
        I&rsquo;m not writing this from the sidelines. I run four businesses
        by myself from a home office in McKinney, Texas, and every one of them
        is a bet placed inside that opening. A home-repair-by-text service,
        because homes won&rsquo;t stop breaking and people will always want
        the easiest trusted way to get them fixed. An AI hiring engine,
        because companies will always need to know who they&rsquo;re actually
        hiring. A lead-response system for small businesses, because a missed
        call will always be a missed customer. And the consulting practice,
        which exists to pull other operators through the same door I went
        through.
      </P>
      <Note>Homes break. Calls get missed. Hires go wrong. Build there.</Note>
      <P>
        Notice the pattern in those bets: each one sits on something about
        human behavior that does not change. That&rsquo;s deliberate, and
        it&rsquo;s the filter I&rsquo;d hand any builder:{" "}
        <strong>
          build on what people will still need and still do, no matter what
          the machines learn.
        </strong>{" "}
        It&rsquo;s also the honest hedge, because a business built on durable
        human behavior has the best odds of mattering on both sides of the
        door.
      </P>
      <Note>Two, maybe three years of fevered pace. Thirty years of watching it pay.</Note>
      <P>
        Here&rsquo;s what I&rsquo;m actually racing for. My family needs me as
        a provider, and they&rsquo;re going to need providing for whether
        I&rsquo;m here or not. If I build something that outlasts me and gives
        them stability, that&rsquo;s the race. Money matters, but Ray Dalio
        draws a distinction I think about a lot: wealth is one thing, money is
        another. You cannot spend wealth. You have to sell it to get money,
        because you can only spend money. Recurring income is the engine that
        makes money keep arriving. That&rsquo;s what I&rsquo;m building, and
        I&rsquo;ve taken on real personal risk to build it, because the math
        of the closing door changes the shape of the work. This doesn&rsquo;t
        need my fevered pace for the next ten years. It needs it for the next
        two, maybe three. Then the benefits play out over the next ten,
        fifteen, twenty, and I plan to be around for thirty more to watch.
        Work the burst, then automate myself out of my own businesses. And the
        beauty of the model is that you don&rsquo;t set it and forget it. You
        set it and monitor it. It&rsquo;s a maintenance program. The hard work
        is up front.
      </P>

      <Section>Get your board in the water</Section>
      <P>
        So what should a person actually do with this? I keep coming back to
        something Eric Weinstein told Steven Bartlett on Diary of a CEO in the
        summer of 2025. Asked what he&rsquo;d say to the average person about
        what&rsquo;s coming, he said: &ldquo;Get your board in the water and
        prepare to paddle. Like all get out. The tsunami of a lifetime is
        coming.&rdquo; And on what to become, his advice kept landing on the
        same two words: &ldquo;Get flexible, get good. Get good on a bunch of
        different stuff.&rdquo;
      </P>
      <P>
        That&rsquo;s not a throwaway line. It&rsquo;s the correct strategy for
        a closing door, and here&rsquo;s why. You cannot know in advance
        exactly where the opening will be narrowest or longest. What you can
        control is whether you&rsquo;re in the water when the set comes.
        Getting good, at AI, at your own domain, at the unglamorous mechanics
        of shipping something real, is the paddling. Waiting to see how it all
        shakes out is standing on the beach.
      </P>
      <P>
        And if you already have a job, I&rsquo;ve written about your version
        of this. The consequence clock says you work at the speed you are
        checked, not the speed you are capable of. If you&rsquo;ve crossed the
        competency line with AI and your company still measures you monthly,
        you are a second-hand person in an hour-hand building, and your
        finished work is sitting scheduled for delivery while you do what,
        exactly?{" "}
        <strong>
          That freed time is the most valuable asset you will ever hold, and
          the blast door is the deadline on it.
        </strong>{" "}
        Use it to build something you own. Not a hobby. An income source with
        your name on the deed, however small it starts.
      </P>

      <Section>The part that will cost me some friends in the feed</Section>
      <P>
        There&rsquo;s a story going around, and I&rsquo;ve heard it told on
        television by people I otherwise respect, that the money side of this
        is easy now. That the AI labs and the funds around them are so hungry
        for ideas that a person can more or less walk in the door with a plan
        and walk out with a check. I&rsquo;ve heard it put almost exactly that
        way on the podcast circuit, what I&rsquo;ve started calling the tour
        of talkers: the same guests rotating through the same shows, agreeing
        with each other that opportunity has never been more available to the
        little guy.
      </P>
      <P>I call bullshit, and I&rsquo;m allowed to, because I tested it.</P>
      <Note>Receipt: real plans, real submissions, real silence.</Note>
      <P>
        I have real businesses with real receipts. Working products, live
        customers, revenue that arrived this week, business plans built to be
        read by exactly these people. I&rsquo;ve started submitting to the
        doors that actually have addresses, the angel networks and the funds,
        and I&rsquo;ll keep submitting. You know what earning the investment
        community&rsquo;s attention has gotten me so far? Silence. Not
        rejection. Rejection would at least mean somebody read it.
      </P>
      <P>
        I&rsquo;m not above asking. That&rsquo;s why I keep walking into those
        rooms, and my own operating system is what finds the doors worth
        knocking on. But let me be precise about what a check would even mean,
        because this is where the circuit gets it backwards. If a fund wrote
        one tomorrow for my home-repair business, I wouldn&rsquo;t call that
        success. I&rsquo;d call it a rounding error against what that business
        is actually building toward. Here&rsquo;s my real benchmark, and
        I&rsquo;ll put it in print: if you live in one of our markets, within
        two years it will be inconceivable to handle a home repair any other
        way. A local contractor, on your schedule, arranged entirely by text,
        paid from your phone. The friction is gone. It is simply too easy.
        That is the valuation. A check is just fuel.
      </P>
      <P>
        I&rsquo;m not bitter about the silence. I&rsquo;m reporting it,
        because somebody has to say the quiet part to the people at home:{" "}
        <strong>
          if your plan requires a stranger&rsquo;s check to start, your plan
          is behind the door already.
        </strong>{" "}
        The money finds you after you no longer need it. That was true in
        every era, and no amount of AI hype has repealed it.
      </P>

      <Section>Two tells, from a guy who has seen this movie</Section>
      <P>
        First tell: the suffix. In 1998 a company was worth whatever its
        profits said it was worth. In 1999 the same company added dot-com to
        its name and was suddenly worth fifty times that, with no new profit,
        no new margin, no new anything. We know how that ended. The same
        suffix magic is happening right now with dot-AI, and yes, I&rsquo;m
        poking myself, because my own shingle hangs at kerzie dot AI. The
        difference I&rsquo;d offer is that I&rsquo;m not asking you to value
        the name. I&rsquo;m showing receipts. That&rsquo;s the line that
        separates a business from a costume: revenue you can point at versus a
        suffix you rented.
      </P>
      <Note>A month can be manufactured. A year has to be earned.</Note>
      <P>
        Second tell: monthly income. When someone tells you they make $500,000
        a month, ask yourself why they didn&rsquo;t say $6 million a year. A
        year is more impressive. A year is also harder to fake, because a year
        means you survived twelve months of reality. I learned this pattern in
        the early 1990s in Amway, and I&rsquo;m not ragging on Amway, I
        learned real things there about distribution and hustle. But the
        income was always quoted monthly, because a good month can be
        manufactured and a good year has to be earned. Thirty years later the
        manufactured month is back, wearing an AI t-shirt, screenshotted in
        your feed between the four-prompts-to-riches posts. Same play. Same
        tell.
      </P>
      <P>
        None of that circus changes the real argument. It just means you
        should run your race without waiting for their permission or their
        check.
      </P>

      <Section>Two hours and forty minutes</Section>
      <P>
        Let me tell you about the Titanic, because I can&rsquo;t stop thinking
        about the timeline.
      </P>
      <Note>The ship told them what was happening two hours before the water did.</Note>
      <P>
        From the moment it struck the iceberg to the moment it went under was
        roughly two hours and forty minutes. For most of the first two hours,
        the ship was calm. The band played. Drinks were poured. The first
        lifeboats were lowered half empty, seats rowing away unfilled, because
        standing on a warm, lit deck, the urgency wasn&rsquo;t believable yet.
        The mathematics of the situation had already been decided, the ship
        was already sinking, but the experience of the situation said
        otherwise. Then came the last thirty minutes, when the deck tilted
        enough that everyone believed at once, and suddenly there were not
        enough boats, not enough seats, not enough time. The people who
        perished didn&rsquo;t lack information. The ship told them what was
        happening two hours before the water did. What they lacked was the
        willingness to act while acting was still cheap.
      </P>
      <Callout>The door doesn&rsquo;t announce the last half second. It just closes.</Callout>

      <Section>While the deck still feels level</Section>
      <P>
        That&rsquo;s the whole essay, really. Not that the world ends. It
        doesn&rsquo;t. Something comes after, and thinking clearly about that
        is work I&rsquo;ll do in another piece. This one exists to say the
        simpler, harder thing: the era when an ordinary person plus a
        nearly-free intelligence can build their own lifeboat is running right
        now, it is the best innovation opportunity any of us will ever see,
        and it is closing from every direction at once, at a speed that will
        look obvious only in the rearview.
      </P>
      <P>
        Get across the competency line. Get good, at more than one thing. Get
        your board in the water. Build something you own, however small, on
        top of something people will always need. Do it while your work is
        scheduled for Friday and your evenings are quiet and the deck still
        feels level.
      </P>
      <Note>Lifeboats get built on warm, level decks or not at all.</Note>
      <P>
        And here&rsquo;s where I plan to be standing when the door closes. The
        measure of success I actually want is not a number. It&rsquo;s a
        community. People who read these essays, took me up on the setup or
        the session or the full build, and got through the door while it was
        open. People who someday say thank you. Thank you for pointing it out.
        Thank you for making it simple. Thank you for taking the scary out of
        it. Thank you that the old projects got dusted off, the business grew,
        and the family is better for it.
      </P>
      <P>
        I want a community of winners. That&rsquo;s what I want. The door is
        still open. Get your board in the water.
      </P>

      <Colophon>
        Sources, each verified against the original before publication: Eric
        Weinstein on The Diary of a CEO with Steven Bartlett (July 2025),
        quoted verbatim from the published transcript; Ray Dalio&rsquo;s
        wealth-versus-money distinction, from his Bloomberg interview remarks
        (&ldquo;You cannot spend wealth. You have to sell the wealth in order
        to get money because you can only spend money&rdquo;); the Titanic
        timeline per Encyclopaedia Britannica&rsquo;s &ldquo;Timeline of the
        Titanic&rsquo;s Final Hours&rdquo; (struck 11:40 PM April 14, 1912,
        sank 2:20 AM April 15; twenty boats with 1,178 seats for more than
        2,200 aboard, early boats launched under capacity). The three-year
        estimate is the author&rsquo;s stated belief, not a measurement. The
        televised easy-money characterization is a paraphrase of a recurring
        claim on the podcast circuit; no individual is named because the
        argument is with the claim.
      </Colophon>
    </EssaySheet>
  );
}
