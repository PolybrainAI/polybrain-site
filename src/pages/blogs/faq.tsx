import { Blog } from "../../components/blog/blog";

import { faqArt } from "../../api/cdn";

export default function Faq() {
  return (
    <Blog
      title="FAQ"
      readTime="3 min"
      publishDate="July 2024"
      backgroundImage={faqArt}
    >
      <h1>Frequently Asked Questions</h1>
      <p>
        If your question isn't below, we encourage you to ask your question in
        our{" "}
        <a
          href="https://github.com/orgs/PolybrainAI/discussions"
          target="_blank"
          rel="noreferrer"
        >
          discussion board
        </a>
        .
      </p>

      <h3>
        How does Polybrain translate LLM responses into OnShape API calls?
      </h3>
      <p>
        Polybrain runs Python code that interacts with <code>OnPy</code>, a
        high-level, unofficial API abstraction between the OnShape API. LLMs
        tend to be good with writing Python, so this method of modeling plays
        closely to their strengths.
      </p>

      <h3>Does Polybrain use OnShape Featurescript?</h3>
      <p>
        Yes and no. Featurescript is used to evaluate OnShape geometer queries
        for transient IDs, which are used in the API calls. It is possible to
        substitute <code>OnPy</code> for pure Featurescript, but there are a few
        drawbacks.
        <ul>
          <li>The syntax is much more convoluted than Python</li>
          <li>
            Out of the box LLMs have little to no training in Featurescript
          </li>
          <li>
            An entire model constructed in a single Featurestudio would lack
            parametric relationships, effectively making it a direct modeler.
          </li>
        </ul>
        The sweet spot is a mixture of featurescript (for evaluation) and API
        calls (for defining features/sketch entities)
      </p>

      <h2>Still have a question?</h2>
      <p>
        Check out our{" "}
        <a
          href="https://github.com/orgs/PolybrainAI/discussions"
          target="_blank"
          rel="noreferrer"
        >
          discussion board{" "}
        </a>
        if you still have questions!
      </p>
    </Blog>
  );
}
