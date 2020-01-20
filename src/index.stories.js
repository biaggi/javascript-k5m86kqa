import "./index.js";
import { html } from "lit-html";

export const story1 = () => html`
  <custom-element name="you"> </custom-element>

  <button
    @click=${() => {
      console.log("test");
      document
        .getElementsByTagName("custom-element")[0]
        .setAttribute("name", "me");
    }}
  >
    test
  </button>
`;
