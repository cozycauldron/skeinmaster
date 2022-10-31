export type EndpointResponse<R extends Record<string, any>> = {
  statusCode: number;
  body: R;
};
