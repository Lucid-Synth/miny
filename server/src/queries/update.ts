import { eq } from "drizzle-orm";
import { db } from "../config/db.js";
import { url, user } from "../drizzle/schema.js";


// Update user name
export const updateUserName = (userId: number, name: string) => {
  return db
    .update(user)
    .set({ name })
    .where(eq(user.id, userId))
    .returning();
};

// Update user password
export const updateUserPassword = (userId: number, password: string) => {
  return db
    .update(user)
    .set({ password })
    .where(eq(user.id, userId))
    .returning();
};

// Update user email
export const updateUserEmail = (userId: number, email: string) => {
  return db
    .update(user)
    .set({ email })
    .where(eq(user.id, userId))
    .returning();
};


// Update original URL
export const updateOriginalUrl = (
  urlId: number,
  originalUrl: string
) => {
  return db
    .update(url)
    .set({ original_url: originalUrl })
    .where(eq(url.id, urlId))
    .returning();
};

// Update short code
export const updateShortCode = (
  urlId: number,
  shortCode: string
) => {
  return db
    .update(url)
    .set({ short_code: shortCode })
    .where(eq(url.id, urlId))
    .returning();
};