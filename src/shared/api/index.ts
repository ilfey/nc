import {createEffect} from "effector";

type CreateRequestParams = RequestInit & {
  baseUrl?: string;
  url: string;
};

type CreateRequestInstanceParams<P> = CreateRequestParams & {
  payload: Payload<P>;
};

type Payload<P> = CreateRequestParams | ((params: P) => CreateRequestParams);

function getConfig<P>(payload: Payload<P>, params: P): CreateRequestParams {
  return typeof payload === "function" ? payload(params) : payload;
}

const createRequestInstance = <P = RequestInit, R = void, E = void>({
  baseUrl,
  headers,
  payload,
}: CreateRequestInstanceParams<P>) =>
  createEffect<P, R, E>(async (params) => {
    const {url, ...fetchOptions} = getConfig(payload, params)

    const newHeaders = new Headers(headers);

    const resp = await fetch(new URL(url, baseUrl), {
      ...fetchOptions,
      headers: newHeaders,
    })

    return await resp.json() as R
  })

type CreateRequestFxParams = Omit<
  CreateRequestInstanceParams<CreateRequestParams>,
  "payload" | "url"
>

export const createRequestFx = (params: CreateRequestFxParams) =>
  <P = CreateRequestParams, R = void, E = void>(payload: Payload<P>) =>
    createRequestInstance<P, R, E>({
      ...(params as CreateRequestParams),
      payload,
    })


export const createInternalFx = createRequestFx({
  baseUrl: "https://testbackend.nc-one.com"
})