import { z } from "zod";
import { endpoint } from "../../../utils/endpoint";
import { prisma } from "../../../utils/prisma";

export default endpoint(
  z.object({
    id: z.string().min(1),
  }),
  async ({ payload, req, res }) => {
    const base = await prisma.yarnBase.findFirst({
      where: {
        id: payload.id,
      },
    });

    return res.status(200).json({
      base,
    });
  }
);
