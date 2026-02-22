// Boedirep Client Configuration
const OBXSERVER_CONFIG = {
  client: {
    name: "Boedirep",
    tagline: "Wellness Coaching",
    logo_initial: "B",
    primary_color: "#4A7C59",
    accent_color: "#C4942A"
  },
  frappe: {
    site_url: "https://PASTE-THEIR-FRAPPE-SITE-URL-HERE",
    api_key: "PASTE-API-KEY-HERE",
    api_secret: "PASTE-API-SECRET-HERE"
  },
  currency: {
    primary: "NGN",
    secondary: "USD",
    ngn_symbol: "₦",
    usd_rate: 1500
  },
  modules: {
    programs: true,
    sessions: true,
    finance: true,
    hr: true,
    helpdesk: true,
    crm: true,
    inventory: false,
    healthcare: false
  }
}
