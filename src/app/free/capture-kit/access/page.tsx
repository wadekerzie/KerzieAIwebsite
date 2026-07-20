import Link from "next/link";
import type { Metadata } from "next";
import { CAPTURE_KIT_MD } from "@/content/captureKit";

export const metadata: Metadata = {
  title: "Your Capture Kit | Kerzie AI",
  robots: { index: false, follow: false },
};

// Minimal trusted-markdown renderer for our own kit content only.
function renderKit(md: string) {
  const blocks: React.ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let key = 0;

  const flushList = () => {
    if (!list) return;
    const items = list.items.map((t, i) => (
      <li key={i} className="text-[#AABBCC] text-lg leading-relaxed">
        {renderInline(t)}
      </li>
    ));
    blocks.push(
      list.ordered ? (
        <ol key={key++} className="list-decimal list-outside ml-6 space-y-2 my-4">
          {items}
        </ol>
      ) : (
        <ul key={key++} className="list-disc list-outside ml-6 space-y-2 my-4">
          {items}
        </ul>
      )
    );
    list = null;
  };

  function renderInline(text: string): React.ReactNode[] {
    // **bold** and `code` only.
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={i} className="k-mono text-sm bg-[#1E2035] px-1.5 py-0.5 text-[#6B9FD4]">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  }

  const lines = md.split("\n");
  let para: string[] = [];
  let codeBlock: string[] | null = null;

  const flushPara = () => {
    if (!para.length) return;
    blocks.push(
      <p key={key++} className="text-[#AABBCC] text-lg leading-relaxed my-4">
        {renderInline(para.join(" "))}
      </p>
    );
    para = [];
  };

  for (const raw of lines) {
    const line = raw;
    if (codeBlock !== null) {
      if (line.startsWith("    ") || line.trim() === "") {
        codeBlock.push(line.slice(4));
        continue;
      }
      blocks.push(
        <pre
          key={key++}
          className="k-mono text-sm bg-[#1E2035] border border-[rgba(170,187,204,0.13)] p-5 my-4 whitespace-pre-wrap text-[#AABBCC] overflow-x-auto"
        >
          {codeBlock.join("\n").trimEnd()}
        </pre>
      );
      codeBlock = null;
    }
    if (line.startsWith("    ") && para.length === 0 && !list) {
      codeBlock = [line.slice(4)];
      continue;
    }
    if (line.startsWith("## ")) {
      flushPara();
      flushList();
      blocks.push(
        <h2 key={key++} className="k-label mt-12 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      flushPara();
      flushList();
      // Title rendered separately in the hero; skip.
    } else if (/^\d+\. /.test(line.trim())) {
      flushPara();
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(line.trim().replace(/^\d+\. /, ""));
    } else if (/^- /.test(line.trim())) {
      flushPara();
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(line.trim().slice(2));
    } else if (line.trim().startsWith("- ") === false && /^\s+- /.test(line)) {
      // nested bullet: append to last item
      if (list && list.items.length) {
        list.items[list.items.length - 1] += " " + line.trim().slice(2);
      }
    } else if (line.trim() === "" || line.trim() === "---") {
      flushPara();
      flushList();
    } else if (/^\s+/.test(line) && list && list.items.length) {
      // continuation of a list item
      list.items[list.items.length - 1] += " " + line.trim();
    } else {
      flushList();
      para.push(line.trim());
    }
  }
  flushPara();
  flushList();
  return blocks;
}

export default function CaptureKitAccessPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <p className="k-label mb-6">Here Is Your Capture Kit</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
          Ten minutes of setup, one habit
          <span className="text-[#E8896A]">.</span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a href="/downloads/capture-kit.md" download className="k-btn-solid k-focus inline-block">
            Download the kit <span className="k-arrow">&rarr;</span>
          </a>
          <p className="text-sm text-[#6d7585]">
            Or just follow it right here. Bookmark this page; it is yours.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">
        <div className="max-w-2xl border-t border-[rgba(170,187,204,0.13)] pt-4">
          {renderKit(CAPTURE_KIT_MD)}
        </div>
      </section>
    </div>
  );
}
