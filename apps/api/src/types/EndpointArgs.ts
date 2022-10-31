import { NextApiRequest, NextApiResponse } from "next";

export type EndpointArgs = {
  req: NextApiRequest;
  res: NextApiResponse;
};
