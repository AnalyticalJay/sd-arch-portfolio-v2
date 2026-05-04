import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { storageGet } from "./storage";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Storage URL retrieval
  storage: router({
    getUrl: publicProcedure
      .input(z.object({ key: z.string() }))
      .query(async ({ input }) => {
        try {
          const { url } = await storageGet(input.key);
          return { url, success: true };
        } catch (error) {
          console.error("[Storage] Error getting URL:", error);
          return { url: "", success: false };
        }
      }),
  }),

  // Contact form submission
  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name must be at least 2 characters"),
          email: z.string().email("Invalid email address"),
          phone: z.string().optional(),
          subject: z.string().min(5, "Subject must be at least 5 characters"),
          message: z.string().min(10, "Message must be at least 10 characters"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Notify the owner about the new contact form submission
          const emailContent = `New Contact Form Submission from SD Arch Studio Website\n\nName: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone || "Not provided"}\nSubject: ${input.subject}\n\nMessage:\n${input.message}\n\n---\nPlease reply to: ${input.email}`.trim();

          await notifyOwner({
            title: `New Contact Form Submission: ${input.subject}`,
            content: emailContent,
          });

          return {
            success: true,
            message: "Thank you for your inquiry. We will get back to you soon.",
          };
        } catch (error) {
          console.error("[Contact Form] Error submitting form:", error);
          return {
            success: false,
            message: "Failed to submit form. Please try again later.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
