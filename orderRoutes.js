import express from "express";
import prisma from "./prismaClient.js";
import { verifyToken } from "./middleware/authMiddleware.js";

const router = express.Router();

// Create a new monogram order (must be logged in)
router.post("/", verifyToken, async (req, res) => {
  try {
    const { designType, fabricType, notes, deadline } = req.body;

    if (!designType || !fabricType) {
      return res
        .status(400)
        .json({ error: "Design type and fabric type are required." });
    }

    const order = await prisma.order.create({
      data: {
        designType,
        fabricType,
        notes,
        deadline: deadline ? new Date(deadline) : null,
        userId: req.userId,
      },
    });

    res.status(201).json({ message: "Order created successfully.", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

// Get all of MY orders (must be logged in)
router.get("/mine", verifyToken, async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: "desc" },
    });

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

// Get ALL orders (admin only)
router.get("/", verifyToken, async (req, res) => {
  try {
    if (!req.isAdmin) {
      return res.status(403).json({ error: "Admin access only." });
    }

    const orders = await prisma.order.findMany({
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: "desc" },
    });

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

export default router;
