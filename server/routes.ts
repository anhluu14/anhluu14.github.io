import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWhaleSignalSchema, insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get recent whale signals for the live ticker
  app.get("/api/whale-signals", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const signals = await storage.getRecentSignals(limit);
      res.json(signals);
    } catch (error) {
      console.error("Error fetching whale signals:", error);
      res.status(500).json({ error: "Failed to fetch whale signals" });
    }
  });

  // Get all active whale wallets
  app.get("/api/whale-wallets", async (req, res) => {
    try {
      const wallets = await storage.getWhaleWallets();
      res.json(wallets);
    } catch (error) {
      console.error("Error fetching whale wallets:", error);
      res.status(500).json({ error: "Failed to fetch whale wallets" });
    }
  });

  // Create a new whale signal (for testing/demo purposes)
  app.post("/api/whale-signals", async (req, res) => {
    try {
      const validation = insertWhaleSignalSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: fromZodError(validation.error).toString() 
        });
      }
      
      const signal = await storage.createWhaleSignal(validation.data);
      res.status(201).json(signal);
    } catch (error) {
      console.error("Error creating whale signal:", error);
      res.status(500).json({ error: "Failed to create whale signal" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validation = insertContactSubmissionSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: fromZodError(validation.error).toString() 
        });
      }
      
      const submission = await storage.createContactSubmission(validation.data);
      res.status(201).json({ 
        success: true, 
        message: "Thank you for contacting us! We'll get back to you within 24 hours." 
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
