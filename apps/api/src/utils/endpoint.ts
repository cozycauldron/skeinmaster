import z from "zod";
import { Endpoint } from "../types/Endpoint";
import { EndpointArgs } from "../types/EndpointArgs";
import { EndpointInput } from "../types/EndpointInput";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Decorator method of sorts to simplify the standard function
 * structure for our API endpoints. This will enforce a consistent
 * response structure, a safety net for error handling as well
 * as give us some nice utility types by providing our validation
 * schema, etc.
 */
export const endpoint = <
  R extends Record<string, any>,
  S extends z.ZodObject<R> = z.ZodObject<R>,
  P extends z.infer<S> = z.infer<S>,
  F extends Endpoint<P> = Endpoint<P>
>(
  schema: S,
  fn: F
) => {
  const method = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const connectionString = process.env.DATABASE_URL;
      if (!connectionString) {
        throw new Error(
          `Environment variable "DATABASE_URL" not configured properly.`
        );
      }

      // TODO: IAM Check
      // const eventBody = req.method === "GET" ? req.query : req.body;
      const eventBody = { ...req.query, ...req.body };

      const validPayload = await schema.parseAsync(eventBody);

      return await fn({
        req,
        res,
        payload: validPayload as any,
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        return res
          .status(422)
          .json({ error: "Validation Error.", details: e.issues });
      }

      // TODO: Better error handling, IAM errors, validation errors, etc.
      return res.status(500).json({
        error: "Internal Server Error.",
        details: {
          message: (e as any)?.message,
          // TODO: Restrict to dev mode
          // stack: (e as any)?.stack,
        },
      });
    }
  };

  return method;
};
