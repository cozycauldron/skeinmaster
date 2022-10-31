import { z } from "zod";
import { endpoint } from "../../../utils/endpoint";
import { prisma } from "../../../utils/prisma";
import { Fibers } from "../../../types/enums";

export default endpoint(
  z.object({
    // TODO: Add Advanced filtering
    name: z.string().optional(),
    millId: z.string().optional(),
  }),
  async ({ payload, res }) => {
    const base = await prisma.yarnBase.findMany({
      where: {
        name: payload.name ? { contains: payload.name } : undefined,
        millId: payload.millId ? { equals: payload.millId } : undefined,
      },
    });

    return res.status(200).json({
      base,
    });
  }
);
