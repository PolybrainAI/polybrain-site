import { Blog } from "../../components/blog/blog";

import { termsArt } from "../../api/cdn";

export default function Terms(){
    return <Blog
        title="Terms of Use"
        readTime="15 min"
        publishDate="June 2024"
        backgroundImage={termsArt}
    >
    <h1>Terms of Use Agreement</h1>
    <hr/>
    <p>Last Updated: July 3, 2024</p>
    <p>Welcome to Polybrain ("Company", "we", "our", "us")! These Terms of Use ("Terms") govern your use of our website, services, and products, including any applications, content, and functionality provided through Polybrain (collectively, "Service"). By accessing or using our Service, you agree to be bound by these Terms.</p>

    <h2>Acceptance of Terms</h2>
    <p>By using or accessing the Service, you agree to comply with and be bound by these Terms and any modifications thereto. If you do not agree to these Terms, please do not use the Service.</p>

    <h2>Changes to Terms</h2>
    <p>We may modify these Terms at any time, in our sole discretion. The updated Terms will be posted on this page, and your continued use of the Service signifies your acceptance of any updated Terms. It is your responsibility to review these Terms periodically for changes.</p>
    
    <h2>Privacy Policy</h2>
    <p>Your use of our Service is also governed by our Privacy Policy, which is incorporated by reference into these Terms. By using the Service, you consent to the data practices described in the Privacy Policy.</p>

    <h2>Use of Our Service</h2>
    <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes.</p>

    <h2>Account Creation and Responsibility</h2>
    <p>To access certain features of the Service, you must create an account ("Account"). You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your Account credentials and for any activities or actions under your Account. Polybrain will not be liable for any loss or damage arising from your failure to comply with this security obligation.</p>

    <h2>User Responsibilities</h2>
    <p>By creating an Account with Polybrain, you acknowledge and agree that it is your responsibility to:
    <ul>
        <li>Control access to and manage the security of your OnShape and OpenAI API credentials.</li>
        <li>Ensure that your use of the Service complies with all applicable laws and regulations.</li>
        <li>Promptly notify us of any unauthorized use of your Account or any other breach of security.</li>
    </ul>
    </p>
    
    <h2>Limitation of Liability</h2>
    <p>Polybrain shall not be held liable for any accidental credential leak across any of the integrated services, including but not limited to OnShape and OpenAI. Users are fully responsible for securing and restricting access within their respective portals. Additionally, Polybrain is not responsible for:
    <ul>
        <li>Excessive charges incurred while using the Service.</li>
        <li>Corruptions or data loss within OnShape or any associated platforms.</li>
        <li>Any other misfortunes or issues arising from the use of our Service.</li>
    </ul>
    </p>
    
    <h2>Dynamically Priced Software</h2>
    <p>Polybrain uses OpenAI tools, which are dynamically priced. By creating an Account, you acknowledge and accept the inherent security risks and fluctuating costs associated with such software. You agree that Polybrain is not responsible for financial implications or security breaches resulting from these inherent risks.</p>
    
    <h2>Intellectual Property</h2>
    <p>All content, trademarks, service marks, trade names, logos, and icons used in connection with the Service are the property of Polybrain or its licensors. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without our express written permission.</p>

    <h2>Prohibited Activities and Legal Enforcement</h2>
    <p>Any attempt to exploit, abuse, or illicitly manipulate Polybrain's Service that results in harm to the user, the Service, or any third parties is strictly prohibited. Such actions are subject to prosecution to the full extent of the law. Polybrain reserves the right to seek all available legal remedies, including but not limited to injunctive relief, damages, and attorney’s fees, against individuals or entities responsible for such prohibited activities.</p>

    <h2>Termination</h2>
    <p>We may terminate or suspend your access to the Service at any time, with or without cause, and with or without notice. Upon termination, your right to use the Service will immediately cease, and all provisions of these Terms that, by their nature, should survive termination shall survive, including but not limited to intellectual property rights, indemnity, disclaimers, and limitations of liability.</p>

    <h2>Governing Law</h2>
    <p>These Terms and any disputes relating thereto shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles.</p>

    <h2>Indemnification</h2>
    <p>You agree to indemnify, defend, and hold harmless Polybrain, its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorney's fees and costs, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another.</p>

    <h2>Force Majeure</h2>
    <p>Polybrain shall not be liable for any failure to perform its obligations under these Terms if such failure results from conditions beyond its reasonable control, including but not limited to natural disasters, war, acts of terrorism, labor conditions, governmental actions, and Internet disturbances.</p>

    <h2>Severability</h2>
    <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.</p>

    <h2>Entire Agreement</h2>
    <p>These Terms, together with our Privacy Policy and any other agreements or terms expressly incorporated by reference, constitute the entire agreement between you and Polybrain with respect to the use of the Service. Any modifications or amendments to these Terms must be in writing and signed by both parties.</p>

    <h2>Contact Information</h2>
    <p>If you have any questions about these Terms, please contact Kyle Tennison at: <a href="mailto:kyletennison05@gmail.com">kyletennison05@gmail.com</a></p>

    <p>By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>

    <br/><br/><br/>




    <h1>Polybrain Privacy Policy</h1>
    <hr />
    <p>Last Updated: July 3, 2024</p>
    <p>Your privacy is important to us at Polybrain ("Company", "we", "our", "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including but not limited to our website, applications, and associated features (collectively, the "Service"). By using the Service, you consent to the practices described in this Privacy Policy.</p>
    
    <h2>Collection of Information</h2>
    <p>We may collect several types of information from and about users of our Service, including:</p>
    <ul>
        <li>Personal information such as name, email address, and contact details.</li>
        <li>Account information, including user credentials and API keys.</li>
        <li>Usage data, including interactions, logs, and metadata related to your use of the Service.</li>
    </ul>

    <h2>Responsibility for Security Audits</h2>
    <p>It is the user's responsibility to audit the <code>polybrain-server</code> to resolve any security concerns. <code>polybrain-server</code> has not been reviewed for security by any third parties; by using Polybrain, you accept the risk of using a potentially exploitable service. We encourage users to read the <code>polybrain-server</code> repository for more information on security.</p>

    <h2>Liability for Security Breaches</h2>
    <p>Polybrain shall not be held liable for any security breach, including but not limited to those that expose confidential information linked to the user's account. Users are fully responsible for the protection of their account and any information therein, especially at the time API keys are passed to Polybrain.</p>

    <h2>Protection of Account Information</h2>
    <p>Users are entirely responsible for protecting their accounts, particularly when sharing API keys and other sensitive credentials with Polybrain. This includes ensuring that only authorized individuals have access to login details and taking necessary precautions to prevent unauthorized access. Both OnShape and OpenAI provide tools to limit the access to the user's respective accounts at the time of API key generation. By providing these API keys to Polybrain, you grant Polybrain the access to use the provided API keys for any action the key was enabled to perform. Users are responsible for setting privilege limits on all API keys provided to Polybrain.</p>

    <h2>Use of Conversations</h2>
    <p>By using the Service, you agree that Polybrain may view, alter, publish, and study the conversations you have with our platform. There is no expectation of confidentiality with Polybrain regarding any interactions or data exchanges via the Service. We may use this information for improving services, conducting research, and other purposes as deemed necessary.</p>

    <h2>Data Usage and Sharing</h2>
    <p>We may use the information collected for various purposes, including but not limited to:
    <ul>
        <li>Providing and maintaining the Service.</li>
        <li>Personalizing and improving user experience.</li>
        <li>Analyzing usage patterns and metrics.</li>
        <li>Communicating with users and providing necessary support.</li>
    </ul>
    </p>
    <p>We may share your information with third parties in the following circumstances:
    <ul>
        <li>With service providers who perform services on our behalf.</li>
        <li>In response to legal requirements, such as a court order or subpoena.</li>
        <li>To protect the rights, property, or safety of Polybrain, our users, or others.</li>
        <li>In connection with a business transaction, such as a merger or sale of assets.</li>
    </ul>
    </p>

    <h2>Data Security</h2>
    <p>We implement reasonable measures to protect the security and integrity of your personal information. However, no security system is completely infallible, and we cannot guarantee the absolute security of your information. Users are advised to take their own security measures, including regularly updating passwords and monitoring account activity. All security implementations are displayed open-source within the <code>polybrain-server</code> repository. </p>

    <h2>Cookies and Tracking Technologies</h2>
    <p>We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can control the use of cookies through your browser settings. However, if you choose to disable cookies, some parts of the Service may not function properly.</p>

    <h2>Children's Privacy</h2>
    <p>Our Service is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
    
    <h2>International Data Transfers</h2>
    <p>Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using the Service, you consent to such transfers.</p>

    <h2>Your Rights</h2>
    <p>You have certain rights regarding your personal information, including the right to access, correct, or delete your information. To exercise these rights, please contact us using the information provided below. We may need to verify your identity before fulfilling your request.</p>

    <h2>Changes to this Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. The updated policy will be posted on this page, and the date of the latest revision will be indicated above. Your continued use of the Service after any changes signifies your acceptance of the updated Privacy Policy. It is your responsibility to review this Privacy Policy periodically for updates.</p>

    <h2>Contact Information</h2>
    <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact Kyle Tennison at: <a href="mailto:kyletennison05@gmail.com">kyletennison05@gmail.com</a></p>

    <p>By using our Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</p>

    </Blog>
}