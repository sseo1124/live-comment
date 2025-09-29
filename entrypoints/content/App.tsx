import React, { useState } from "react";
import type { BaseEditor, Descendant } from "slate";
import { createEditor } from "slate";
import type { ReactEditor } from "slate-react";
import { Slate, Editable, withReact } from "slate-react";
import type { HistoryEditor } from "slate-history";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string; bold?: true };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

export default function App() {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div className="fixed left-1/2 bottom-12 z-[2147483646] -translate-x-1/2 px-4">
      <div className="rounded-full border border-white/15 bg-blue-400 p-1 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45)] backdrop-blur">
        <p>나온다</p>
        <Slate editor={editor} initialValue={initialValue}>
          <Editable />
        </Slate>
      </div>
    </div>
  );
}
