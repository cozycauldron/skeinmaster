import { z } from "zod";
import { endpoint } from "../../../utils/endpoint";
import { prisma } from "../../../utils/prisma";
import { Fibers } from "../../../types/enums";

export default endpoint(
  z.object({
    name: z.string().min(1),
    millId: z.string().min(1),
    pricePerSkein: z.number().min(1),
    yards: z.number().min(50),
    grams: z.number().min(25).optional().default(100),
    ply: z.number().min(0).max(10),
    notes: z.string().optional(),
    fibers: z
      .object({
        type: z.nativeEnum(Fibers),
        percent: z.number().max(100),
      })
      .array()
      .min(1)
      .max(5),
  }),
  async ({ payload, res }) => {
    const base = await prisma.yarnBase.create({
      data: {
        name: payload.name,
        ply: payload.ply,
        yards: payload.yards,
        mill: { connect: { id: payload.millId } },
      },
    });

    return res.status(200).json({
      base,
    });
  }
);
