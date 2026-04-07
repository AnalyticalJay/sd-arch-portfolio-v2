import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("contact.submit", () => {
  it("successfully submits a valid contact form", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      subject: "Project Inquiry",
      message: "I would like to discuss a new project with your team.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Thank you");
  });

  it("successfully submits a contact form with optional phone", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1-555-0123",
      subject: "Design Consultation",
      message: "We need help with our residential design project.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Thank you");
  });

  it("rejects form with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: "John Doe",
        email: "invalid-email",
        subject: "Project Inquiry",
        message: "I would like to discuss a new project with your team.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid email");
    }
  });

  it("rejects form with name too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: "J",
        email: "john@example.com",
        subject: "Project Inquiry",
        message: "I would like to discuss a new project with your team.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("at least 2 characters");
    }
  });

  it("rejects form with subject too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: "John Doe",
        email: "john@example.com",
        subject: "Hi",
        message: "I would like to discuss a new project with your team.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("at least 5 characters");
    }
  });

  it("rejects form with message too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: "John Doe",
        email: "john@example.com",
        subject: "Project Inquiry",
        message: "Short msg",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("at least 10 characters");
    }
  });
});
