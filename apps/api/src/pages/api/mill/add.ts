import { z } from "zod";
import { endpoint } from "../../../utils/endpoint";
import { prisma } from "../../../utils/prisma";

export const add = endpoint(
  z.object({
    name: z.string().min(1),
    id: z.string().min(1),
    location: z.string().optional(),
    phone: z.string().optional(),
  }),
  async ({ payload, res }) => {
    const base = await prisma.mill.create({
      data: {
        name: payload.name,
        id: payload.id,
        location: payload.location,
        phone: payload.phone,
      },
    });

    return res.status(200).json({
      base,
    });
  }
);

export default add;
