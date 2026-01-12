import { eq,desc } from "drizzle-orm";
import { db } from "../config/db.js"
import { url, user } from "../drizzle/schema.js"


//Function to get all the users
export const getAllUsers = () => {
    return db.select().from(user);
};

//Function to get user by id
export const getUserById = (id:number) => {
    return db
    .select()
    .from(user)
    .where(eq(user.id,id))
}

//Fuction to get user by email
export const getUserByEmail = (email: string) => {
    return db
    .select()
    .from(user)
    .where(eq(user.email,email))
}

//Function to get all urls
export const getAllUrls = () => {
    return db
    .select()
    .from(url)
}

//Function to get url by short code
export const getUrlbyShortcode = (shortCode:string) => {
    return db
    .select()
    .from(url)
    .where(eq(url.short_code,shortCode))
}


//Function to get url by user id
export const getUrlsByUserId = (userId: number) => {
  return db
    .select()
    .from(url)
    .where(eq(url.userId, userId));
};

// Function to get latest url
export const getLatestUrls = (limit = 10) => {
  return db
    .select()
    .from(url)
    .orderBy(desc(url.createdAt))
    .limit(limit);
};


//Function to get URLs with user info
export const getUrlsWithUsers = () => {
  return db
    .select({
      urlId: url.id,
      shortCode: url.short_code,
      originalUrl: url.original_url,
      createdAt: url.createdAt,
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
    })
    .from(url)
    .innerJoin(user, eq(url.userId, user.id));
};

//Functio to get users with their URLs
export const getUsersWithUrls = () => {
  return db
    .select({
      userId: user.id,
      name: user.name,
      email: user.email,
      shortCode: url.short_code,
      originalUrl: url.original_url,
    })
    .from(user)
    .leftJoin(url, eq(user.id, url.userId));
};