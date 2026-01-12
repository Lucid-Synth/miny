CREATE TABLE "url" (
	"id" serial PRIMARY KEY NOT NULL,
	"short_code" varchar(255) NOT NULL,
	"original_url" varchar(255) NOT NULL,
	"created at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "url_short_code_unique" UNIQUE("short_code")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(50) NOT NULL,
	"created at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
