import { EndpointInput } from "./EndpointInput";
import { HandlerResponse } from "./HandlerResponse";

export type EndpointFunction<R extends Record<string, unknown>, T> = (
  input: EndpointInput<T>
) => Promise<HandlerResponse<R>>;
