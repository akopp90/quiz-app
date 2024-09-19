// questions.js
const questions = [
  {
    id: 1,
    question: "Which CSS property is used to change the text color?",
    answer: "color",
    description: "The color property sets the color of the text.",
    code_language: "CSS",
    code: ["p {", "color: blue;", "}"],
    tags: ["css", "color", "text"],
  },
  {
    id: 2,
    question: "Which HTML element is used to define a hyperlink?",
    answer: "a",
    description: "The &lt;a&gt; tag defines a hyperlink in HTML.",
    code_language: "HTML",
    code: [
      "&lt;a href='https://example.com'&gt;",
      "Visit Example",
      "&lt;/a&gt;",
    ],
    tags: ["html", "hyperlink", "link"],
  },
  // ... (rest of the questions)
];

export default questions;
