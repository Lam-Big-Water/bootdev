import {z, ZodError} from "zod";

export const JelloIssueSchema = z.object({
    id: z.string(), // Ensure 'id' is a string
    title: z.string().min(1, {message: "Title must not be empty"}), // Ensure 'title' is a non-empty string
})

// Example usage
try {
    const validatedData = JelloIssueSchema.parse({
      id: "42",
      title: "Answer to the Ultimate Question",
    });
    console.log("Validated Data:", validatedData);
  } catch (error) {
    if (error instanceof ZodError)
    console.error("Validation Error:", error);
  }