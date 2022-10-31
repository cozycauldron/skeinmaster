import { z } from "zod";
import { endpoint } from "../../../utils/endpoint";
import { prisma } from "../../../utils/prisma";

export default endpoint(
  z.object({
    // TODO: Add Advanced filtering
    name: z.string().optional(),
  }),
  async ({ payload, res }) => {
    const mills = await prisma.mill.findMany({
      where: {
        name: payload.name ? { contains: payload.name } : undefined,
      },
    });

    return res.status(200).json({
      mills,
    });
  }
);
