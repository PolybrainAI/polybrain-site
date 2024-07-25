import { Blog } from "../../components/blog/blog";
import { pricingArt } from "../../api/cdn";

export default function Pricing(){
    return <Blog
        title="Pricing"
        readTime="3 min"
        publishDate="July 2024"
        backgroundImage={pricingArt}
    
    >

    <h1>Our Awful Business Model</h1>
    <p>
    Polybrain makes no effort to profit off of its users. Instead of handling 
    transactions to LLM models and taking a cut for profit (as many AI startups do), 
    Polybrain gives all users the best possible price by directly charging their 
    <a href="https://platform.openai.com" target="_blank" rel="noreferrer"> OpenAI</a> account.

    All transactions need to be completed in the OpenAI portal. This allows you 
    to set transaction limits, audit usage in real-time, and cut access at any 
    time. OpenAI is a reputable company; you may review their privacy protection 
    program <a href="https://openai.com/security-and-privacy/" target="_blank" rel="noreferrer">here</a>.
    </p>

    <h2>How Much Does it Cost?</h2>
    <p>
    The price-per-model varies a lot. There are a myriad of variables that 
    influence how many input and output GPT tokens will be used for any response. 
    However, generally, a single model rarely exceeds ~12¢. By registering for a 
    Polybrain account, you acknowledge the inherent variability in pricing and 
    assume responsibility for setting expenditure limits. Prior to account 
    creation, you must review and consent to the terms and conditions, which 
    provide detailed information on these matters.
    </p>

    <h2>Want to Help Polybrain?</h2>
    <p>
    Polybrain accepts small donations via 
    <a href="http://donate.kyletennison.com/" target="_blank" rel="noreferrer"> PayPal </a> 
    or 
    <a href="https://ko-fi.com/kyletennison" target="_blank" rel="noreferrer"> Kofi</a>; 
    these donations go straight to Kyle Tennison—the primary developer of 
    Polybrain. As the Polybrain grows into a collective project, all 
    contributors will receive a fair split of any donations.
    </p>



    </Blog>
}