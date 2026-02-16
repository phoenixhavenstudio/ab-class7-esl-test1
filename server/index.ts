import express from "express";
import path from "path";

const app = express();
const port = 5000;

// Serve static files from client/public
app.use(express.static(path.join(process.cwd(), "client", "public")));

// Express 5 requires a regex or different syntax for catch-all, but for this
// simple static site, we don't strictly need a SPA fallback.
// If we did, we'd use: app.get(/^(?!.*\/api).*$/, ...) or similar.

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
