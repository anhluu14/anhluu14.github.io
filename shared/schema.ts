import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Whale Wallets being tracked
export const whaleWallets = pgTable("whale_wallets", {
  id: serial("id").primaryKey(),
  address: text("address").notNull().unique(),
  name: text("name"),
  winRate: decimal("win_rate", { precision: 5, scale: 2 }),
  totalProfitLoss: decimal("total_profit_loss", { precision: 20, scale: 2 }),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertWhaleWalletSchema = createInsertSchema(whaleWallets).omit({
  id: true,
  createdAt: true,
});

export type InsertWhaleWallet = z.infer<typeof insertWhaleWalletSchema>;
export type WhaleWallet = typeof whaleWallets.$inferSelect;

// Whale Transactions/Signals
export const whaleSignals = pgTable("whale_signals", {
  id: serial("id").primaryKey(),
  walletAddress: text("wallet_address").notNull(),
  type: text("type").notNull(),
  token: text("token").notNull(),
  amount: text("amount").notNull(),
  amountUsd: decimal("amount_usd", { precision: 20, scale: 2 }),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertWhaleSignalSchema = createInsertSchema(whaleSignals).omit({
  id: true,
  timestamp: true,
});

export type InsertWhaleSignal = z.infer<typeof insertWhaleSignalSchema>;
export type WhaleSignal = typeof whaleSignals.$inferSelect;

// Contact Form Submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
