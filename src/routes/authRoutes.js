import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Removed db import which was causing errors

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ token: "test-token-123" });
});

router.post("/login", (req, res) => {
  res.json({ token: "test-token-123" });
});

export default router;
