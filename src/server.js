import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable parsing JSON bodies
app.use(express.json());

// Get the file path of url from the current module
const __filename = fileURLToPath(import.meta.url);
// Get directory name from file path
const __dirname = dirname(__filename);

// Debug route to test server response
app.get("/test", (req, res) => {
  res.send("Server is working!");
});

// Serve the index.html file from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Serve index.html for root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Basic auth routes to satisfy frontend requests
app.post("/auth/login", (req, res) => {
  res.json({ token: "test-token-123" });
});

app.post("/auth/register", (req, res) => {
  res.json({ token: "test-token-123" });
});

// Basic todo routes
app.get("/todos", (req, res) => {
  res.json([]);
});

// Start the server on a different port to avoid conflicts
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
