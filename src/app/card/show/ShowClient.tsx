"use client";

import QrPanel from "../QrPanel";

// /card/show is nothing but the panel, always open. All the behaviour that
// matters - the portal out of .k-page-enter, the screen wake lock, the safe
// area padding - lives in QrPanel and is shared with /card's overlay.
export default function ShowClient() {
  return <QrPanel />;
}
