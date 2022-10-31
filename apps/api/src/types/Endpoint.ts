import { EndpointArgs } from "./EndpointArgs";

export type Endpoint<R extends Record<string, any>> = (
  args: EndpointArgs & { payload: R }
) => Promise<void>;
