import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable parsing JSON bodies (only once)
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

// Auth routes
app.use("/auth", authRoutes);

// Basic todo routes
app.get("/todos", (req, res) => {
  res.json([]);
});

app.post("/todos", (req, res) => {
  res.json({ id: 1, task: req.body.task, completed: false });
});

app.put("/todos/:id", (req, res) => {
  res.json({
    id: Number(req.params.id),
    task: req.body.task,
    completed: req.body.completed,
  });
});

app.delete("/todos/:id", (req, res) => {
  res.json({ success: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
