import { Blog } from "../../components/blog/blog";

import { technicalArt } from "../../api/cdn";

export default function Technical() {
  return (
    <Blog
      title="Technical Description"
      readTime="5 min"
      publishDate="July 2024"
      backgroundImage={technicalArt}
    >
      <h1>Technical Overview</h1>

      <p>
        Polybrain is an AI-powered tool for creating CAD models in OnShape. We
        use multiple large language models (LLMs), provided by OpenAI, to create
        a cooperative workflow, shown below. These LLMs output Python code that
        interfaces with the{" "}
        <a
          href="https://github.com/kyle-tennison/onpy"
          target="_blank"
          rel="noreferrer"
        >
          OnPy
        </a>{" "}
        library to speak to OnShape.
        <br />
        <img
          src="https://polybrain.b-cdn.net/polybrain-chain.png"
          alt="flowchart showing the relationship between Polybrain agents"
        />
        <br />
        <h2>LLM Chains</h2>
        <p>
          As shown above, Polybrain is composed of multiple{" "}
          <strong>Agents</strong>. An Agent is an LLM that talks to itself; they
          feature a few advantages over single-prompt models. Firstly, Agents
          can document their <strong>chain of thought</strong>, bringing some
          introspection into the picture. Due to the nature of LLMs, this extra
          verbosity can greatly benefit the final output. Secondly, Agents can
          interact with tools; for instance, instead of "guessing" the solution
          to a formula, they could use a calculator tool. In the image above the
          "Mathematician" interacts with a{" "}
          <a
            href="https://www.wolfram.com/language/"
            target="_blank"
            rel="noreferrer"
          >
            Wolfram Alpha
          </a>{" "}
          tool to perform unit conversions and other calculations. In former
          versions of Polybrain, a single agent performed all actions—from user
          questioning to math conversion to model creation. We found that this
          method was prone to <strong>context pollution</strong>, which ended up
          "distracting" the LLM, diminishing its output quality. By splitting up
          the workflow into multiple Agents, each Agent chain can be focused on
          one task. Not only does this improve the output, but it also saves{" "}
          <strong>input tokens</strong>, which, in turn, saves money. One extra
          benefit of task-specific Agents is the ability to parallelize tasks;
          for instance, the "Preliminary Reporter" Agent can run alongside the
          "OnPy Agent." If there is no reason for two processes to run
          sequentially, they shouldn't. Let's examine each agent in depth.
          <br />
          <br />
        </p>
        <h2>The Pessimist</h2>
        <p>
          Polybrain is extremely limited. LLM GPTs first made their public debut
          in November 2022 with Chat GPT. Since then, many improvements have
          been made, but LLMs are still a limited technology. Because of the
          complexity of 3D modeling, many tasks are beyond the capabilities of
          these LLMs. Coupled with the limits of{" "}
          <a
            href="https://github.com/kyle-tennison/onpy"
            target="_blank"
            rel="noreferrer"
          >
            OnPy
          </a>
          , the unofficial OnShape API that's used behind the scenes, Polybrain
          needs to know its limits. The Pessimist, as the name suggests, is
          pessimistic about what Polybrain is capable of; its job is to
          negotiate with the client until they provide a model that is simple
          enough for Polybrain to attempt. For example, if we ask Polybrain to
          model the Saturn V, we'd like to know that it can't meet our request
          before wasting tokens trying and failing.
          <br />
          <br />
          Once the client finally complies and responds with a reasonable
          request, the Pessimist will paraphrase the client's request and pass
          it down the chain to the Mathematician.
          <br />
          <br />
        </p>
        <h2>The Mathematician</h2>
        <p>
          <em>
            The mathematician is not currently implemented in the current
            version of Polybrain.
          </em>
          <br />
          <br />
          The mathematician works behind the scenes, using WolframAlpha to
          convert units and perform necessary calculations. It writes a short
          report summarizing its results (if any), and attaches it to the
          Pessimist's summary. The new document is again passed down the chain
          to the Executive Planner.
          <br />
          <br />
        </p>
        <h2>Executive Planner</h2>
        <p>
          The Executive Planner is the brains of the operation. They are given
          the prompt, refined by the Pessimist and Mathematician, and are tasked
          with creating an "executive report," which details each step that
          should happen to build the model.
          <br />
          <br />
          Before writing the report, the planner outlines its thoughts. If it
          finds that a piece of information is missing—say, a critical
          dimension—it will question the user for more information.
          <br />
          <br />
          After documenting its thoughts, the planner will enumerate each
          feature that should be added, along with its dimensions and
          relationships. The Planner must be aware of the limitations of{" "}
          <a
            href="https://github.com/kyle-tennison/onpy"
            target="_blank"
            rel="noreferrer"
          >
            OnPy
          </a>{" "}
          to prevent listing instructions that can never be fulfilled.
          <br />
          <br />
        </p>
        <h2>Preliminary Reporter</h2>
        <p>
          After the executive report is written, the preliminary reporter will
          quickly summarize the enumerated steps and send a message to the user.
          It is a nice reassurance to the client to hear that some steps are
          being taken—as opposed to waiting in silence.
        </p>
        <h2>OnPy Agent</h2>
        <p>
          The OnPy agent also references the executive report. Its job is to
          translate the steps enumerated by the Executive Agent into Python code
          that interacts with the OnPy API.
          <br />
          <br />
          This is no easy task. LLMs love to "hallucinate" things that don't
          actually exist; in the context of OnPy, the Agent often writes code
          that interacts with a function or method that does not actually exist.
          It also tends to add extra parameters to functions that don't expect
          them. Code validation and error reconciliation are exceedingly
          important and one of the most stressed parts of Polybrain. Many model
          failures are caused by the LLM incorrectly interpreting the OnPy API.
          <br />
          <br />
          To address this issue, Polybrain leverages incremental Python
          interpretation; that is, executing code in small blocks and observing
          the console log and any errors that arise. This is very similar to how
          humans interact with a Jupyter Notebook. By allowing sequential code
          execution, we catch errors earlier, avoid context pollution from code
          that doesn't actually run, and save money on LLM tokens.
          <br />
          <br />
        </p>
        <h2>Validation</h2>
        <p>
          The first part of validation is performed by the OnPy agent, as
          discussed. Errors that arise from bad parameters and non-existent
          objects are the easiest to fix and can be addressed directly by the
          OnPy agent. However, it's nearly impossible to create a
          more-than-trivial model entirely through code without looking at it.
          <br />
          <br />
          By leveraging multi-modal LLMs, the OnPy agent can visually verify the
          model it generates and make amendments if something looks unexpected.
          This validation step is integral to Polybrain but has not been
          implemented yet in the beta. Lacking visual validation is undoubtedly
          the source of most model failures.
          <br />
          <br />
        </p>
        <h2>Going Forward</h2>
        <p>
          Polybrain is still in early beta. With help from more contributors,
          the following areas, which are currently weak or not implemented, can
          be developed:
          <ul>
            <li>
              Prompt engineering for the Executive Planner and the OnPy Agent.
            </li>
            <li>Incremental code interpretation.</li>
            <li>Image validation.</li>
            <li>Real-time Code Reporting.</li>
          </ul>
          All help is welcome and gratefully appreciated.{" "}
          <a href="contact">Contact Polybrain</a> for business inquiries or
          general questions.
        </p>
      </p>
    </Blog>
  );
}
