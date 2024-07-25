
const CDN_BASE = "https://polybrain.b-cdn.net/"

function cdn(path: string): string {
    return `${CDN_BASE}${path}`
}


export const contactArt = cdn("contact-art.png")
export const faqArt = cdn("faq-art.png")
export const pricingArt = cdn("pricing-art.jpg")
export const technicalArt = cdn("technical-art.png")
export const termsArt = cdn("terms-art.png")
export const contributeArt = cdn("contribute-art.png")
export const landingCarbonArt = cdn("carbon-landing-art-new.png")
export const landingNumbersArt = cdn("landing-numbers-art.svg")
export const landingStepsArt = cdn("landing-steps-art.png")
export const landingArt = cdn("landing-art.png")
export const logoCircle = cdn("logo-circle.svg")
export const kofiLogo = cdn("kofi-logo.svg")
export const paypalLogo = cdn("paypal-logo.svg")