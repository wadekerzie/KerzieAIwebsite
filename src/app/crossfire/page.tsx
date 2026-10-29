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
import { EssayFormats, EssayListen, EssayWatch } from "@/components/EssayMedia";

export const metadata: Metadata = {
  title: "The Crossfire | Kerzie AI",
  description:
    "When the people around you cross the AI line, the work between you gets done twice, then once, then by nobody. The people at risk aren't the ones who failed to learn AI. They're the ones standing where everyone around them already did.",
  openGraph: {
    title: "The Crossfire",
    description:
      "When the people around you cross the AI line, the work between you gets done twice, then once, then by nobody. The people at risk aren't the ones who failed to learn AI. They're the ones standing where everyone around them already did.",
    type: "article",
    publishedTime: "2026-10-29",
    authors: ["Wade Kerzie"],
    url: "https://kerzie.ai/crossfire",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Crossfire",
    description:
      "The risk isn't that you didn't learn AI. The risk is that the people around you did.",
  },
};

const afterMatter = (
  <>
    <p className="text-[#262B3D]/80 leading-relaxed max-w-xl">
      This essay follows five others.{" "}
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
      is how far the effect travels inside the building.{" "}
      <Link href="/shrapnel" className="k-link k-focus text-[#2B5D96]">
        The Shrapnel
      </Link>{" "}
      is what the same force does to the website. This one is about what
      happens where two people&rsquo;s circles cross.
    </p>
    <div className="mt-10">
      <SubscribeForm source="crossfire-essay" />
    </div>
  </>
);

export default function CrossfirePage() {
  return (
    <EssaySheet after={afterMatter}>
      <EssayMasthead
        kicker="Essay"
        author="Wade Kerzie"
        date="October 29, 2026"
        title={
          <>
            The Crossfire<span className="dot">.</span>
          </>
        }
        deck={
          <>
            The risk isn&rsquo;t that you didn&rsquo;t learn AI. The risk is
            that the people around you did.
          </>
        }
      />
      <EssayFormats slug="crossfire" />

      <Abstract>
        When the people around you cross the AI line, the work between you
        gets done twice, then once, then by nobody. The people at risk
        aren&rsquo;t the ones who failed to learn AI. They&rsquo;re the ones
        standing where everyone around them already did.
      </Abstract>

      <P open>
        A sales leader I know called me a couple of weeks ago, and the first
        thing he said wasn&rsquo;t about a deal.
      </P>
      <Note>&ldquo;It&rsquo;s all because of AI.&rdquo;</Note>
      <P>
        He said his batteries are recharged. Twenty-plus years in, and
        he&rsquo;s excited to sell again. Then he said the part that stuck with
        me: &ldquo;It&rsquo;s all because of AI. If it hadn&rsquo;t been for
        this, I&rsquo;d be dreading it every day.&rdquo;
      </P>
      <P>
        He didn&rsquo;t get a new territory. He didn&rsquo;t get a new comp
        plan. He built his own operating system for his job, on the AI his
        company already pays for, and it took the weight off.
      </P>
      <P>
        I want to talk about what that weight actually is, because I think
        most companies have it backwards. And then I want to talk about what
        happens to the people standing next to him.
      </P>

      <Section>What actually burns people out</Section>
      <P>
        I&rsquo;ve led sales teams for thirty years. Here&rsquo;s what
        I&rsquo;ve seen, and it&rsquo;s my read, not a study.
      </P>
      <P>
        Burnout in sales doesn&rsquo;t come from selling. It doesn&rsquo;t come
        from the meeting where you help a customer think through a hard
        problem, or the day you close the deal you&rsquo;ve worked for six
        months. That part fills the tank.
      </P>
      <Note>Five platforms, five minutes, every day, forever.</Note>
      <P>
        The tank drains somewhere else. The CRM that has to be updated. The
        forecast call that needs a deck. The QBR that takes a week to build.
        The upline report that restates what you already said in the last
        upline report. The five platforms that each want five minutes, every
        day, forever.
      </P>
      <P>
        None of that is the job. All of it is the job&rsquo;s paperwork. And
        for most of my career, there was no way around it. You just carried
        it.
      </P>
      <Note>He talks, it drafts, he reviews, he sends.</Note>
      <P>
        That&rsquo;s what my friend put down. His operating system carries it
        now. He talks, it drafts, he reviews, he sends. The selling came back
        because the paperwork left.
      </P>
      <Callout>
        Burnout doesn&rsquo;t come from the work. It comes from the work
        around the work.
      </Callout>

      <Section>Two circles</Section>
      <P>
        In{" "}
        <Link href="/blast-radius" className="k-link k-focus text-[#2B5D96]">
          The Blast Radius
        </Link>
        , I wrote about how far AI&rsquo;s effect travels from where you sit.
        Ask it questions and the blast goes straight down to your own desk.
        Instruct it, connect it, and it moves sideways to your peers, across
        the building, down the org chart, and eventually up.
      </P>
      <P>
        That essay was about one person&rsquo;s radius. This one is about what
        happens when two of them overlap.
      </P>
      <Note>A sales manager and a finance analyst.</Note>
      <P>
        Picture two people in different parts of the same company. Say a sales
        manager and a finance analyst. Both have crossed the line. Both have
        built their own operating system around their own job. And both,
        every month, have been producing the same thing: a forecast of
        what&rsquo;s going to close this quarter.
      </P>
      <P>
        The sales manager builds it from the pipeline. The analyst builds it
        from the pipeline, the bookings history and the billing system. Two
        desks, two versions, one meeting where somebody reconciles them by
        hand.
      </P>
      <P>
        Now both of them are doing it with AI. Each one hands the task to
        their own system, and each one gets a finished forecast back, without
        asking anyone for anything.
      </P>
      <Note>Two desks, two versions, one meeting.</Note>
      <P>
        That&rsquo;s the overlap. Draw their two circles and the space where
        they cross is the crossfire.
      </P>

      <Section>What the overlap proves</Section>
      <P>
        Here&rsquo;s what most people miss about that overlap. It isn&rsquo;t a
        turf fight. It&rsquo;s a finding.
      </P>
      <Note>Not in theory. In practice, twice.</Note>
      <P>
        When two people on two different desks each get the same task done end
        to end, without handing it to anyone, they&rsquo;ve proven something
        together: that task doesn&rsquo;t need a human handoff anymore. Not in
        theory. In practice, twice.
      </P>
      <P>
        So the first time, the work gets done twice. The company notices, and
        it gets done once. And eventually somebody asks the obvious question:
        if two people&rsquo;s systems can each do this without help, does it
        need a person at all?
      </P>
      <P>
        That&rsquo;s the question every company is about to ask, function by
        function, and the overlaps are where it gets asked first. If I ran a
        company today, I&rsquo;d go looking for them on purpose. Map the
        circles. Find where they cross. Each crossing is a task you&rsquo;ve
        already proven can run without a handoff.
      </P>
      <Thesis label="The claim">
        The first time, the work gets done twice. Then once. Then somebody
        asks if it needs a person at all.
      </Thesis>

      <Section>Standing in the crossfire</Section>
      <P>Now the hard part. Who&rsquo;s standing in the overlap?</P>
      <P>
        Not the sales manager. Not the analyst. They&rsquo;re the ones doing
        the work, and their circles just got bigger.
      </P>
      <Note>The one whose whole day was the handoff.</Note>
      <P>
        The person in the crossfire is the one who used to do the work in
        between. The one who took the two forecasts and reconciled them. The
        one who built the deck from both. The one whose whole day was the
        handoff.
      </P>
      <P>
        And here&rsquo;s what makes it dangerous: their blast radius is zero.
        Not because they&rsquo;re bad at their job. Because they haven&rsquo;t
        crossed over. They&rsquo;re standing in the space between two people
        who did, and they may not know it yet.
      </P>
      <Note>Think of a Venn diagram.</Note>
      <P>
        Here&rsquo;s the test. If the task you do can now be done by more than
        one other person in the company, without needing you, you&rsquo;re in
        the overlap. Think of a Venn diagram. Two circles cross, and
        you&rsquo;re sitting in the middle while two other people do your job
        without asking you for anything.
      </P>
      <P>
        That&rsquo;s the shift I want people to hear. The risk isn&rsquo;t that
        you didn&rsquo;t learn AI. The risk is that the people around you did.
        If you haven&rsquo;t drawn your own circle, the one that shows what
        you&rsquo;re worth, someone else will draw theirs right over you.
      </P>
      <P>
        I&rsquo;m not cheering for that. I&rsquo;m describing it. If
        someone&rsquo;s entire job is a task that two other people&rsquo;s
        systems now finish on their own, that job is at risk, and we&rsquo;re
        lying to ourselves if we say it any other way.
      </P>

      <Section>Some tasks leave desks</Section>
      <P>
        Let me be precise, because this is where people get scared, and fear
        makes for bad decisions.
      </P>
      <P>
        Most jobs are a bundle of tasks. Some of those tasks are about to leave
        your desk. That&rsquo;s not the same as your job leaving. My friend
        didn&rsquo;t lose his job when the paperwork left. He got his job
        back.
      </P>
      <P>
        The difference is whether you&rsquo;re the one handing the task to the
        system, or the task that gets handed.
      </P>
      <Note>It stops at the send button.</Note>
      <P>
        And handing it over doesn&rsquo;t mean letting go of the wheel. The
        rule in my own operating system is the same one I wrote about last
        time: the AI does everything up to the point where a human has to be
        accountable. It stops at the send button. It stops at the pay button.
        Nobody ever finds out after the fact that the AI sent something on
        their behalf. The judgment stays with the person. The work
        doesn&rsquo;t.
      </P>
      <P>
        That&rsquo;s not a limit on what the system can do. It&rsquo;s the
        reason you can trust it with everything before that line.
      </P>
      <Callout>
        It stops at the send button. The judgment stays with the person. The
        work doesn&rsquo;t.
      </Callout>

      <Section>Your circle is a force field</Section>
      <P>
        There&rsquo;s another side to the blast radius, and it&rsquo;s the one
        that keeps you employed.
      </P>
      <P>
        Your circle isn&rsquo;t only how far your work reaches. It&rsquo;s a
        protective bubble. Call it a force field. Once you&rsquo;ve built your
        own system, you don&rsquo;t just do your job. You make a whole bunch
        of other people&rsquo;s jobs easier, sideways, down and up.
        You&rsquo;re better at what you do, you reach further into the
        company, and the people inside your circle need you to keep doing it.
      </P>
      <Note>Not a title. Not tenure.</Note>
      <P>
        That&rsquo;s the protection. Not a title. Not tenure. The fact that
        removing you would make other people&rsquo;s work slower.
      </P>
      <P>
        And if you&rsquo;re the one standing in the middle today, there&rsquo;s
        a version of this where you win. Cross over, and your circle can reach
        both sides of the overlap at once. The person who can work the left
        and the right beats the people who can only work one.
      </P>
      <Callout>
        Your circle is your force field. Take you out, and everyone inside it
        gets slower.
      </Callout>

      <Section>Sitting still isn&rsquo;t an option</Section>
      <P>
        So what do you do if you&rsquo;re reading this and wondering where your
        own circle is?
      </P>
      <P>I see two roads, and both of them have some pain.</P>
      <P>
        The first: your job changes. You cross the line, you build your own
        system, some of your tasks leave your desk, and you spend the time on
        the part of the work that only you can do. That&rsquo;s uncomfortable
        for a few weeks. My friend would tell you it was worth it.
      </P>
      <Note>Slow. Then overloaded. Then the handoff nobody needs.</Note>
      <P>
        The second: you wait. And the company&rsquo;s clock speeds up around
        you. The people next to you start delivering in an afternoon what used
        to take a week, and you&rsquo;re still doing it the old way. You
        don&rsquo;t get fired for that, at first. You just start to look slow.
        Then overloaded. Then like the handoff nobody needs.
      </P>
      <P>
        There isn&rsquo;t a third road where nothing changes. Sitting still
        isn&rsquo;t an option anymore.
      </P>
      <P>
        A lot of people think they&rsquo;re already there because they get
        great answers from AI. That&rsquo;s still ask-and-answer. The blast
        goes straight down to your own desk and stops.
      </P>
      <P>
        Here&rsquo;s the good news, and I mean it. You don&rsquo;t have to
        learn AI. You don&rsquo;t have to learn how the models work, or which
        app does what, or how to stitch five tools together. You have to learn
        to run your job with it. That&rsquo;s a different thing, and it&rsquo;s
        a much smaller thing than people think.
      </P>

      <Section>Find your circle</Section>
      <Note>What&rsquo;s the paperwork in your week?</Note>
      <P>
        Start with one question: what&rsquo;s the paperwork in your week? Not
        the work. The work around the work. Write it down. That list is where
        your circle starts.
      </P>
      <P>
        Then look at the people next to you. Where would your circles cross?
        That&rsquo;s where the crossfire is going to be. Better to be one of
        the people drawing the circles than the one standing between them.
      </P>
      <P>
        That&rsquo;s what One Window is: your job, run from one place, with the
        AI doing the work around the work and you keeping the send button. The
        software is free.
      </P>
      <P>
        If you&rsquo;re drawing your own circle, start there:{" "}
        <Link href="/one-window" className="k-link k-focus text-[#2B5D96]">
          kerzie.ai/one-window
        </Link>
      </P>
      <P>
        If you lead a sales team and want every circle on it drawn at once, we
        build that with you:{" "}
        <Link
          href="/services/sales-teams"
          className="k-link k-focus text-[#2B5D96]"
        >
          kerzie.ai/services/sales-teams
        </Link>
      </P>

      <EssayListen slug="crossfire" title="The Crossfire" />
      <EssayWatch slug="crossfire" title="The Crossfire" />

      <Colophon>
        This essay cites no outside sources. The sales leader in the opening is
        a person the author knows, who is not named; the two quoted lines
        (&ldquo;It&rsquo;s all because of AI&rdquo; and the sentence that
        follows it) are his words from a phone call with the author in October
        2026, with his company, his team and the details of his setup left
        out. What burns people out in sales is the author&rsquo;s own read
        from thirty years running sales teams, and the essay says so; it is
        not a study and no number is attached to it. The sales manager and the
        finance analyst are a hypothetical, introduced with
        &ldquo;Picture,&rdquo; and do not describe any real company. The
        send-button rule is the author&rsquo;s own working rule, first written
        down in The Blast Radius.
      </Colophon>
    </EssaySheet>
  );
}
