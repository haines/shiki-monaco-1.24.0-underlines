import { shikiToMonaco } from "@shikijs/monaco";
import * as monaco from "monaco-editor-core";
import { createHighlighter } from "shiki";

const highlighter = await createHighlighter({
  themes: ["dracula-soft"],
  langs: ["yaml"],
});

monaco.languages.register({ id: "yaml" });

shikiToMonaco(highlighter, monaco);

monaco.editor.create(document.getElementById("app")!, {
  value: "foo:\n  bar:\n    - baz",
  language: "yaml",
  theme: "dracula-soft",
});
