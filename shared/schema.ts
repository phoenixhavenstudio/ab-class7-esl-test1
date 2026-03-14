import { pgTable, text, serial, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const testAttempts = pgTable("test_attempts", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  completed: boolean("completed").default(false).notNull(),
  score: serial("score").notNull(),
  totalQuestions: serial("total_questions").notNull(),
  wrongAnswers: jsonb("wrong_answers").$type<{ questionId: number, userAnswer: string, correctAnswer: string }[]>(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertTestAttemptSchema = createInsertSchema(testAttempts);

export type InsertTestAttempt = z.infer<typeof insertTestAttemptSchema>;
export type TestAttempt = typeof testAttempts.$inferSelect;
