import { varchar, pgTable, timestamp, serial } from "drizzle-orm/pg-core";

export const user = pgTable("user",{
    id: serial('id').primaryKey(),
    name: varchar({length:255}).notNull(),
    email: varchar({length:255}).notNull().unique(),
    password: varchar({length:50}).notNull(),
    createdAt: timestamp('created at',{mode: 'date'}).notNull().defaultNow()
})

export const url = pgTable("url",{
    id: serial('id').primaryKey(),
    short_code: varchar({length:255}).notNull().unique(),
    original_url: varchar({length:255}).notNull(),
    userId: serial('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }), 
    createdAt: timestamp('created at',{mode: 'date'}).notNull().defaultNow()
})

export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;

export type InsertUrl = typeof url.$inferInsert;
export type SelectUrl = typeof url.$inferSelect;