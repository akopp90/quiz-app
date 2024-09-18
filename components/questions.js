// Questions object
const questions = [
  {
    question: "Which CSS property is used to change the text color?",
    answer: "color",
    description: "The color property sets the color of the text.",
    code_language: "CSS",
    code: ["p {", "color: blue;", "}"],
    tags: ["css", "color", "text"],
  },
  {
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
  {
    question:
      "Which CSS property is used to set the background image of an element?",
    answer: "background-image",
    description: "The background-image property sets a background image.",
    code_language: "CSS",
    code: ["div {", "background-image: url('image.jpg');", "}"],
    tags: ["css", "background", "image"],
  },
  {
    question: "Which HTML element represents a table row?",
    answer: "tr",
    description: "The &lt;tr&gt; tag defines a row in an HTML table.",
    code_language: "HTML",
    code: [
      "&lt;table&gt;",
      "&lt;tr&gt;",
      "&lt;td&gt;Data&lt;/td&gt;",
      "&lt;/tr&gt;",
      "&lt;/table&gt;",
    ],
    tags: ["html", "table", "row"],
  },
  {
    question:
      "Which CSS property controls the space between an element's border and content?",
    answer: "padding",
    description: "Padding defines the space inside an element's border.",
    code_language: "CSS",
    code: ["div {", "padding: 20px;", "}"],
    tags: ["css", "padding", "spacing"],
  },
  {
    question:
      "Which HTML element is used for embedding multimedia elements like videos?",
    answer: "video",
    description: "The &lt;video&gt; tag is used for embedding video content.",
    code_language: "HTML",
    code: [
      "&lt;video controls&gt;",
      "&lt;source src='video.mp4' type='video/mp4'&gt;",
      "&lt;/video&gt;",
    ],
    tags: ["html", "multimedia", "video"],
  },
];

export default questions;
