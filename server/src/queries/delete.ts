import { eq } from "drizzle-orm";
import { db } from "../config/db.js";
import { url, user } from "../drizzle/schema.js";


export const deleteUserById = (userId: number) => {
  return db
    .delete(user)
    .where(eq(user.id, userId))
    .returning();
};

// Delete URL by ID
export const deleteUrlById = (urlId: number) => {
  return db
    .delete(url)
    .where(eq(url.id, urlId))
    .returning();
};

// Delete URL by short code
export const deleteUrlByShortCode = (shortCode: string) => {
  return db
    .delete(url)
    .where(eq(url.short_code, shortCode))
    .returning();
};

// Delete all URLs for a user
export const deleteUrlsByUserId = (userId: number) => {
  return db
    .delete(url)
    .where(eq(url.userId, userId))
    .returning();
};