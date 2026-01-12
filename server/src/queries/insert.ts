import { db } from "../config/db.js";
import { url, user, type InsertUrl, type InsertUser } from "../drizzle/schema.js";


export async function createUser(data: InsertUser){
    await db.insert(user).values(data);
}

export async function createUrl(data: InsertUrl){
    await db.insert(url).values(data);
}