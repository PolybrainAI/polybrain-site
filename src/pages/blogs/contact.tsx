import { Blog } from "../../components/blog/blog";
import { contactArt } from "../../api/cdn";

export default function Faq(){
    return <Blog
        title="Contact"
        readTime="1 min"
        publishDate="July 2024"
        backgroundImage={contactArt}
    
    >

    <h1>Contact</h1>

    <p>If you are interested in partnering with Polybrain, or if you have any
        general questions, do not hesitate to reach out to <strong>Kyle Tennison</strong>,
        who is the maintainer of this project.
    </p>

    <h3>Primary Address</h3>
    <p>
        Please reach out to: <a href="mailto:kyletennison05@gmail.com">kyletennison05@gmail.com</a>
    </p>

    </Blog>
}