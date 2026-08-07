const apicache = require("./apicache");

apicache.options({
    headerBlacklist: ["cache-control"],
    headers: {
        // Disable client side cache, only server side cache.
        // no-store: Cloudflare must not edge-cache dynamic status APIs (no-cache was still cached).
        "cache-control": "no-store, private, must-revalidate",
        "cdn-cache-control": "no-store",
    },
});

module.exports = apicache;
