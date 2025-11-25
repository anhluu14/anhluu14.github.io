import { 
  type User, 
  type InsertUser,
  type WhaleWallet,
  type InsertWhaleWallet,
  type WhaleSignal,
  type InsertWhaleSignal,
  type ContactSubmission,
  type InsertContactSubmission,
  users,
  whaleWallets,
  whaleSignals,
  contactSubmissions
} from "@shared/schema";
import { db } from "../db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Whale Wallets
  getWhaleWallets(): Promise<WhaleWallet[]>;
  getWhaleWallet(address: string): Promise<WhaleWallet | undefined>;
  createWhaleWallet(wallet: InsertWhaleWallet): Promise<WhaleWallet>;
  
  // Whale Signals
  getRecentSignals(limit?: number): Promise<WhaleSignal[]>;
  createWhaleSignal(signal: InsertWhaleSignal): Promise<WhaleSignal>;
  
  // Contact Submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Whale Wallets
  async getWhaleWallets(): Promise<WhaleWallet[]> {
    return await db.select().from(whaleWallets).where(eq(whaleWallets.isActive, true));
  }

  async getWhaleWallet(address: string): Promise<WhaleWallet | undefined> {
    const result = await db.select().from(whaleWallets).where(eq(whaleWallets.address, address)).limit(1);
    return result[0];
  }

  async createWhaleWallet(wallet: InsertWhaleWallet): Promise<WhaleWallet> {
    const result = await db.insert(whaleWallets).values(wallet).returning();
    return result[0];
  }

  // Whale Signals
  async getRecentSignals(limit: number = 20): Promise<WhaleSignal[]> {
    return await db.select().from(whaleSignals).orderBy(desc(whaleSignals.timestamp)).limit(limit);
  }

  async createWhaleSignal(signal: InsertWhaleSignal): Promise<WhaleSignal> {
    const result = await db.insert(whaleSignals).values(signal).returning();
    return result[0];
  }

  // Contact Submissions
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
