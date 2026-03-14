import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const port = 5000;

app.use(express.json());

// Serve static files from client/public
app.use(express.static(path.join(process.cwd(), "client", "public")));

// Record user attempt
app.post("/api/record-attempt", (req, res) => {
  try {
    const data = req.body;
    data.timestamp = new Date().toISOString();

    const filePath = path.join(process.cwd(), "server", "records.json");
    let records = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      if (fileContent) {
        records = JSON.parse(fileContent);
      }
    }

    records.push(data);
    fs.writeFileSync(filePath, JSON.stringify(records, null, 2), "utf-8");

    res.status(200).json({ success: true, message: "Attempt recorded successfully." });
  } catch (error) {
    console.error("Error recording attempt:", error);
    res.status(500).json({ success: false, message: "Failed to record attempt." });
  }
});

// Express 5 requires a regex or different syntax for catch-all, but for this
// simple static site, we don't strictly need a SPA fallback.
// If we did, we'd use: app.get(/^(?!.*\/api).*$/, ...) or similar.

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
