import {routes} from "../../../shared/routing.ts";
import {atom} from "../../../shared/lib/factory.ts";
import {productDetailQuery} from "../api";
import {sample} from "effector";

export const productDetailModel = atom(() => {
  const currentRoute = routes.product.detail

  sample({
    clock: currentRoute.opened,
    source: currentRoute.$params,
    target: productDetailQuery.refresh,
  })

  return {}
})