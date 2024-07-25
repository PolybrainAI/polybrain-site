
import { Blog } from "../../components/blog/blog"
import { contributeArt } from "../../api/cdn"

export default function Contribute() {

    return <Blog
        title="Contribute"
        readTime="5 min"
        publishDate="July 3rd, 2024"
        backgroundImage={contributeArt}>


        <h1>Interested in Contributing?</h1>
        <p>
            Polybrain is an independent initiative aimed at demonstrating the
            capabilities of AI-driven CAD. Although currently in beta, Polybrain
            carries the potential to evolve into a viable product, with sufficient
            supporters. If you are interested in partnering with Polybrain, contact
            us here. Otherwise, reference this page when making open-source changes
            to Polybrain.
            <br />
            <br />
            A <a href="/technical">technical description</a> of Polybrain is provided here; it's recommended
            that you review this to get a high-level idea of how Polybrain works.
        </p>

        <h1>Project Structure</h1>
        <p>
            Polybrain is split into five repositories:
            <ul>
                <li><a href="https://github.com/PolybrainAI/polybrain-site" target="_blank" rel="noreferrer"><code>polybrain-site</code></a>, the React code for the polybrain.xyz site</li>
                <li><a href="https://github.com/PolybrainAI/polybrain-server" target="_blank" rel="noreferrer"><code>polybrain-server</code></a>, the server architecture for polybrain.xyz along with other API endpoints.</li>
                <li><a href="https://github.com/PolybrainAI/polybrain-plugin" target="_blank" rel="noreferrer"><code>polybrain-plugin</code></a>, the chrome plugin that is added to OnShape</li>
                <li><a href="https://github.com/PolybrainAI/polybrain-core" target="_blank" rel="noreferrer"><code>polybrain-core</code></a>, the core LLM chain for Polybrain</li>
                <li><a href="https://github.com/kyle-tennison/onpy" target="_blank" rel="noreferrer"><code>onpy</code></a>, a Python client to OnShape</li>
            </ul>
            The site and server host pages like this, along with the user portal
            where users enter their API keys for their accounts.
            <br />
            The server is built with <a href="https://rocket.rs" target="_blank" rel="noreferrer">rocket.rs</a> and interfaces 
            with <a href="https://Auth0.com" target="_blank" rel="noreferrer">Auth0</a>.
            While minimal development is needed here, we welcome any security
            suggestions.
            <br />
            Further development focuses on the Chrome plugin and core. The Chrome
            plugin acts as a WebSocket client to the core server, which is built in
            Rust. Each new connection spawns a tokio task that interacts with a
            sequence of different LLMs. 
            <div className="note">
                For more details on the chain of LLMs, refer
                to the <a href="/technical">technical description</a> of Polybrain.

            </div>
            These LLM agents interface with OnPy, an unofficial Python client for OnShape.
        </p>

        <h1>Development Areas</h1>
        <p>
            OnPy is the primary bottleneck to OnPy; it currently limits models to a few
            primitive features (i.e., extrusions, lofts, offset-planes, etc.).
            <br />
            OnPy needs to grow to encapsulate:
            <ul>
                <li>3D Fillets</li>
                <li>Shells</li>
                <li>Boolean Operations</li>
                <li>Revolute</li>
                <li>Sweeps</li>
                <li>Chamfers</li>
                <li>3D Patterning</li>
            </ul>

            Additionally, the execution of LLM code needs to be modularized into
            blocks. LLM agents should support interactive Python writing with
            real-time console output, akin to a Jupyter Notebook. This sequential
            execution is crucial as it prevents Polybrain from wasting LLM tokens
            and execution time on code that might fail at the outset.

            Image validation is another critical area requiring development.
            Leveraging a multi-modal model's intelligence, Polybrain aims to
            validate that the generated CAD meets user expectations. If discrepancies
            arise, the code-writing LLM should autonomously rectify its response.
        </p>

        <h1>Contributing Guidelines</h1>
        <p>
            Each of the five repositories is unique in many respects. For details on
            repository-specific contributing guidelines, view the <code>CONTRIBUTING.md</code> file 
            at the root of each repository.
        </p>


    </Blog>
}