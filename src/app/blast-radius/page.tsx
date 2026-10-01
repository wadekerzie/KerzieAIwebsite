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
  Ai,
  AiLine,
  Colophon,
} from "@/components/Essay";

export const metadata: Metadata = {
  title: "The Blast Radius | Kerzie AI",
  description:
    "How far AI reaches from your desk depends on three things: whether you ask it or instruct it, what it is connected to, and where you sit. Most people are using it in the one mode that keeps the blast straight down.",
  openGraph: {
    title: "The Blast Radius",
    description:
      "Not how well AI works for you. How far its effect travels from where you sit: down to your desk, sideways to your peers, across the building, down the pyramid, and up.",
    type: "article",
    publishedTime: "2026-10-01",
    authors: ["Wade Kerzie"],
    url: "https://kerzie.ai/blast-radius",
  },
  twitter: {
    card: "summary",
    title: "The Blast Radius",
    description:
      "Not how well AI works for you. How far its effect travels from where you sit.",
  },
};

const afterMatter = (
  <>
    <p className="text-[#262B3D]/80 leading-relaxed max-w-xl">
      This essay follows three others.{" "}
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
      is the time limit on both. This one is about how far the effect travels
      inside the building.
    </p>
    <div className="mt-10">
      <SubscribeForm source="blast-radius-essay" />
    </div>
  </>
);

export default function BlastRadiusPage() {
  return (
    <EssaySheet after={afterMatter}>
      <EssayMasthead
        kicker="Essay"
        author="Wade Kerzie"
        date="October 1, 2026"
        title={
          <>
            The Blast Radius<span className="dot">.</span>
          </>
        }
        deck={
          <>
            Not how well AI works for you. How far its effect travels from
            where you sit.
          </>
        }
      />

      <Abstract>
        How far AI reaches from your desk depends on three things: whether you
        ask it or instruct it, what it&rsquo;s connected to, and where you sit.
        Most people are using it in the one mode that keeps the blast straight
        down.
      </Abstract>

      <P open>
        Most people using AI at work today are getting better at it. I&rsquo;m
        not discounting that. They write better prompts, they get better
        answers, they finish some things faster. But almost all of that impact
        lands in one place: their own desk. It helps them. It doesn&rsquo;t
        reach anyone else.
      </P>
      <Note>Not whether it works. How far it reaches.</Note>
      <P>
        That&rsquo;s what I mean by the blast radius. Not whether AI works for
        you, but how far its effect travels from where you sit. And the size
        of that radius isn&rsquo;t set by how smart the model is. It&rsquo;s
        set by three things you control, or your company controls for you:
        whether you ask AI questions or instruct it to do work, what it&rsquo;s
        connected to, and where you sit in the organization.
      </P>
      <P>
        Get those three right and the radius stops going straight down. It
        goes sideways to your peers, across to other departments, down to the
        people who report to you, and, this is the part nobody is ready for,
        up.
      </P>
      <Thesis label="The definition">
        Not how well AI works for you. How far its effect travels from where
        you sit.
      </Thesis>

      <Section>Straight down to your desk</Section>
      <P>
        Picture someone in a company of any size with a free or basic account
        on ChatGPT, Claude, Gemini or Perplexity. They use it the way most
        people do: ask and answer. They ask a question, get an answer, maybe
        have it do some research, and then take that information and do
        something with it themselves, by hand.
      </P>
      <Note>Ask and answer: the blast lands on one desk.</Note>
      <P>
        That&rsquo;s useful. It might save them hours. It might make their
        work better or more timely. But the blast goes straight down. It
        impacts them, their productivity, their hours. It doesn&rsquo;t go in
        any other direction. Nobody else in the building feels it.
      </P>

      <Section>Sideways to your peers</Section>
      <P>
        The radius changes when someone crosses to the other side: from asking
        to instructing. On the ChatGPT side that&rsquo;s Codex. On the Claude
        side it&rsquo;s Claude Code, which I wish they&rsquo;d named something
        else, because &ldquo;code&rdquo; makes people think it&rsquo;s only
        for people who write software. It isn&rsquo;t. It&rsquo;s the side of
        the equation where you hand AI a complete task and it does the work.
      </P>
      <Note>The AI stops at the send button and the pay button.</Note>
      <P>
        I run my own company this way, and the rule in my operating system is
        simple: the AI does everything up to the point where a human has to be
        accountable. We stop at the send button. We stop at the pay button.
        The email gets drafted, I read it, I change a few words, and I hand it
        back with &ldquo;this is how I write,&rdquo; so next time there are
        fewer edits. The judgment is still mine. The work isn&rsquo;t.
      </P>
      <P>
        Once you&rsquo;re there, the blast radius widens. It goes horizontal.
        Your peers start seeing finished work arrive from your desk: the
        documentation, the summaries, the meeting recaps, the thing they
        needed before they asked for it. Your impact on the people next to you
        changes, and you didn&rsquo;t add an hour to your day to do it.
      </P>
      <Callout>
        We stop at the send button. We stop at the pay button. The judgment is
        still mine. The work isn&rsquo;t.
      </Callout>

      <Section>Across the building</Section>
      <P>
        Now add connectors. In companies where someone has done the work of
        giving AI access, through APIs and MCP connections, to the
        company&rsquo;s other systems, the radius gets wider again.
      </P>
      <Note>Two people, three departments, one desk.</Note>
      <P>
        Here&rsquo;s a real one. Someone I know inside a large company needed
        an NDA for a customer. In the old world that&rsquo;s a request to
        legal, a process owned by two individuals who handle NDAs, a wait, a
        back-and-forth. But his company had connected its internal systems.
        His own AI operating system already held the context on the account
        and the customer. The connectors gave it the company&rsquo;s documented
        NDA process, plus the policies and guardrails that legal, accounting
        and policy live by. It generated the NDA exactly the way the company
        does it today with people, a hundred percent accurate to the process.
      </P>
      <P>
        The capability of two people and three departments collapsed into one
        person&rsquo;s ability to deliver an end-to-end result. That&rsquo;s
        not a productivity gain on his desk. That&rsquo;s his work reaching
        across the whole building.
      </P>

      <Section>Down the pyramid</Section>
      <P>
        Here&rsquo;s where it starts to matter to the org chart. The higher up
        the person using this sits, the bigger the radius, because now they
        can direct work that used to belong to their direct reports.
      </P>
      <P>
        Take an accounting manager. Today she reviews work coming up the line
        from people doing it by hand. When she can direct that work herself,
        through her own AI with all of the company&rsquo;s constraints and
        connectors built in, the work below her doesn&rsquo;t necessarily need
        a person anymore. And she has a better view than anyone of what the
        output should be and when it&rsquo;s due.
      </P>
      <Note>Know-how moves up the pyramid. The headcount under it thins.</Note>
      <P>
        Think of the reporting structure as a pyramid. The higher that
        know-how moves, the more people sit underneath it, and the more of
        their work gets orchestrated, directed and judged from above. That
        means fewer people performing the function.
      </P>
      <P>
        I want to be careful here. This is not me lobbying for job
        displacement. It&rsquo;s me describing how it&rsquo;s going to happen,
        whether we like it or not.
      </P>

      <Section>And then up</Section>
      <P>This is the direction nobody is ready for.</P>
      <P>
        For about a hundred years, since the industrial revolution, we&rsquo;ve
        run companies on an assumption: the people higher up have more
        information, better information, and in many cases, warranted or not,
        they&rsquo;re smarter.
      </P>
      <P>That assumption is collapsing.</P>
      <Note>It was never access. It was time.</Note>
      <P>
        Most of the information was never actually secret. If you work at a
        public company, you can pull every quarterly report and every annual
        report. Even at private companies, a lot of it goes out in all-hands
        meetings and the decks sent around afterward. What stopped an
        individual contributor from using it was never access. It was time.
        Their day job didn&rsquo;t leave room to go dig through all of it and
        figure out where management was right and where it had blind spots.
      </P>
      <P>
        AI removes the time cost of being informed. An individual contributor
        with their own operating system, one that knows their job and their
        context, can say: pull our last four quarterly earnings reports. Show
        me where the business is declining, where it&rsquo;s expanding, and
        what&rsquo;s underused. Now that person walks into the town hall with
        evidence, with receipts. Senior management is on notice.
      </P>
      <P>
        Or take the next open requisition on their team. An employee who can
        see the numbers might say: we don&rsquo;t need that hire. This part of
        the function can be automated, or this segment is declining and
        projections say we won&rsquo;t need it in three quarters. That
        headcount is wasted.
      </P>
      <P>
        That&rsquo;s the blast radius going up. And at that point it goes in
        every direction, at the discretion of the person at the keyboard.
        You&rsquo;ve taken the smarts, if you will, and collapsed them to
        everyone&rsquo;s desk.
      </P>
      <Callout>
        It was never access. It was time. AI removes the time cost of being
        informed.
      </Callout>

      <Section>&ldquo;What would you say you do here?&rdquo;</Section>
      <P>Managers are going to resist this, and I understand why.</P>
      <Note>Everybody has worked with that layer. A lot of us have been it.</Note>
      <P>
        There&rsquo;s a scene in Office Space where two consultants interview
        a man about his job, and it turns out his whole job is carrying the
        specifications from the customers down to the engineers. He&rsquo;s
        the layer in between. That scene is funny because everybody has worked
        with that layer. A lot of us have been that layer.
      </P>
      <P>
        I ran sales teams for thirty years. Here&rsquo;s one example of how a
        sales manager&rsquo;s week can break down: about 10% in front of
        customers, about 40% coaching the team, and the other 50% correlating,
        synthesizing, updating and refining information to send to upper
        management. In some cases that last part is 60% or more. The exact
        split isn&rsquo;t the point. That last bucket is the part that
        collapses.
      </P>
      <Note>
        Claudeforce, August 26: &ldquo;giving every seller an AI CRO.&rdquo;
      </Note>
      <P>
        It&rsquo;s already on the market. On August 26, Salesforce and
        Anthropic announced Claudeforce, and Salesforce describes it as
        &ldquo;giving every seller an AI CRO.&rdquo; Think about what that
        means for everyone between the chief revenue officer and the rep. The
        rep is the one in the customer&rsquo;s meeting room with the real
        feedback. Now the rep also has everything needed for reporting upline
        and generating reports downline, under their own control. Every rep
        can run a deal health review and a pipeline analysis on the big deals
        for next quarter. What does the manager whose job was assembling that
        do on Monday?
      </P>
      <Callout>
        &ldquo;Giving every seller an AI CRO.&rdquo; Now ask what happens to
        everyone in between.
      </Callout>

      <Section>What the humans are for</Section>
      <P>So what are the people for?</P>
      <P>
        Here&rsquo;s something I&rsquo;ve been saying for some time, mostly to
        make a point: even if we had exactly the same number of jobs three
        years from now, the job titles we have today would disappear. Titles
        that don&rsquo;t exist yet would replace them.
      </P>
      <Note>Cathie Wood&rsquo;s exercise, from Moonshots episode 296.</Note>
      <P>
        This week I heard an exercise on Moonshots that I had to try. Cathie
        Wood said she asks the AI to consult with futurists, scientists,
        engineers, science fiction writers, economists and strategists, and
        tell her what the new jobs will be. Her point was that in the early
        90s nobody could have pictured influencers or Airbnb or Uber, and
        there are jobs coming that we can&rsquo;t picture now.
      </P>
      <P>
        So I ran it for my world. I asked Claude what the new jobs inside a
        B2B sales organization will be by 2029, once agents do most of the
        prospecting, research, reporting, forecasting and follow-up, and
        buyers send their own AI agents to evaluate vendors.
      </P>
      <P>
        It came back with eight titles. Buyer Agent Relations Manager.
        Evidence Librarian. Revenue Agent Supervisor. Forecast Arbiter. Terms
        Architect. Buying Committee Navigator. Relationship Principal. Agent
        Conduct Auditor. Good names, each with a tidy description of what the
        person does all day.
      </P>
      <P>I didn&rsquo;t buy it.</P>
      <P>
        I could point at every one of them and say an agent could do most of
        that today, with the models we already have. Watching what buyer
        agents ask about your company and fixing the gaps? That&rsquo;s agent
        work. Keeping the proof current? Agent work. Reviewing what your
        agents told prospects? An agent can review every conversation. A
        person can review a sample.
      </P>
      <Note>I asked for jobs, so it gave me jobs. I never asked if each one needed a person.</Note>
      <P>
        And I noticed something. I asked the AI for new jobs, so it gave me
        jobs. I never asked whether each one needed a person.
      </P>
      <Note>Round two: same model, fresh session, told to be honest.</Note>
      <P>
        So I asked. Same model, fresh session. I gave it the eight titles and
        told it I was skeptical. For each one: what can an agent do today,
        what&rsquo;s left for a person, and is that left because the AI
        can&rsquo;t do it yet, or because someone has to answer for the
        result?
      </P>
      <P>
        It agreed with me. On the first title it said &ldquo;nothing is
        left.&rdquo; Three of the eight, it said, are duties, not jobs, and
        they fold into marketing, operations and legal. Three more are jobs
        that already exist under new names: the rev ops lead, the head of
        sales and the deal desk. What survived were two kinds of people. The
        account owner, who sits across the table from the buyer&rsquo;s
        committee and gets held to the promise. And the revenue leader, who
        sets the rules for the agents, signs the forecast and approves the
        deals that break the rules.
      </P>
      <Note>10 to 15 of 50: the model&rsquo;s own judgment, not data.</Note>
      <P>
        Then I asked how many people a 50-person sales team today would need
        for all of it. Its answer was about 10 to 15, and it labeled that its
        own judgment, not data. On deals under about $25,000, it said close to
        zero.
      </P>
      <P>
        I&rsquo;m not handing you that number as a forecast. I&rsquo;m telling
        you about it because the machine stopped being reassuring the moment I
        asked it to be honest.
      </P>
      <P>
        Here&rsquo;s the part that stopped me. I asked for the one-line rule
        for which sales work stays human. It said:
      </P>
      <Ai label="AI output, verbatim">
        <AiLine>
          &ldquo;Sales work stays human when a buyer needs a person across the
          table to trust, or when someone on your side has to sign for the
          outcome and lose their job if it&rsquo;s wrong. Everything else goes
          to the agents.&rdquo;
        </AiLine>
      </Ai>
      <Note>I got there by running a company. The AI got there when I pushed it.</Note>
      <P>
        That&rsquo;s the send button. It&rsquo;s the rule I built my own
        operating system on: the AI does everything up to the point where a
        human has to be accountable. I got there by running a company. The AI
        got there when I pushed it.
      </P>
      <P>
        So let me be plain about where I land. The titles will change.
        I&rsquo;m sure of that. But I only used the &ldquo;same number of
        jobs&rdquo; line to make a point, and I don&rsquo;t believe that part.
        Too many jobs today are task management, and task management is going
        to be agent work. From where I sit today, I can&rsquo;t see a world
        with the same number of jobs, even with new titles coming. The humans
        aren&rsquo;t for the work. They&rsquo;re for the trust and the
        accountability. That&rsquo;s a real job. It&rsquo;s just not eight of
        them.
      </P>
      <Thesis label="Where I land">
        The humans aren&rsquo;t for the work. They&rsquo;re for the trust and
        the accountability.
      </Thesis>

      <Section>Who gets there first</Section>
      <Note>It spreads from the inside out, one desk at a time.</Note>
      <P>
        I&rsquo;m working with someone this week who is about to put his own
        operating system on his company laptop, wired into his company&rsquo;s
        systems, and restructure how he works. He&rsquo;s excited. He&rsquo;s
        also rare. The people who make that leap are already following AI,
        already watching Moonshots and Nate B. Jones, already doing it in
        their own lives.
      </P>
      <P>
        Which tells me how this spreads. Not from a corporate directive. Not
        from the rare CEO willing to start over on a blank whiteboard. It
        spreads from the inside out, one person at a time, in companies that
        give their people real access: enterprise licenses and connectors.
        Each person who crosses from asking to instructing widens the radius a
        little more.
      </P>

      <Section>What to do on Monday</Section>
      <P>
        <strong>If you&rsquo;re an individual contributor:</strong> stop
        asking and start instructing. Pick one piece of recurring work, hand
        AI the whole task, and keep only the send button for yourself. Then
        ask what your company has connected and what you can reach.
      </P>
      <Note>Find your 50%.</Note>
      <P>
        <strong>If you&rsquo;re a manager:</strong> find your 50%. The time
        you spend gathering and polishing information for the people above you
        is going away. Move toward the parts that don&rsquo;t: coaching,
        judgment, and the customer.
      </P>
      <P>
        <strong>If you&rsquo;re an executive:</strong> your connectors decide
        how wide your people&rsquo;s blast radius can get. Give them real
        access with real guardrails, and expect questions at the next town
        hall. That&rsquo;s the point.
      </P>
      <P>
        Over the next twelve months, we&rsquo;ll start to see the blast radius
        show up, with impacts ranging from minor to major. The radius is
        already widening at the desks of the people who crossed over. The only
        real question is whether yours is still pointing straight down.
      </P>

      <Colophon>
        Sources, each checked against the original before publication:
        Salesforce and Anthropic&rsquo;s Claudeforce announcement of August
        26, 2026, with the phrase &ldquo;giving every seller an AI CRO&rdquo;
        quoted from Salesforce&rsquo;s own description; Cathie Wood&rsquo;s
        new-jobs exercise as described on Moonshots episode 296; the Office
        Space scene (1999) described from the film, with no line quoted beyond
        the section heading. The eight titles and the two quoted lines
        (&ldquo;nothing is left&rdquo; and the one-line rule) come from two
        sessions the author ran on the same Claude model, the second in a fresh
        session with the eight titles pasted in. The 10 to 15 figure is that
        model&rsquo;s own stated judgment, not data, and the essay presents it
        that way. The 10/40/50 split is one example from the author&rsquo;s
        own experience running sales teams, not a measurement. The NDA account
        is a first-hand report from a person the author knows, who is not
        named.
      </Colophon>
    </EssaySheet>
  );
}
