import {routes} from "../../../shared/routing.ts";
import {atom} from "../../../shared/lib/factory.ts";
import {productListQuery} from "../api";
import {sample} from "effector";


export const productListModel = atom(() => {
  const currentRoute = routes.product.list

  sample({
    clock: currentRoute.opened,
    target: productListQuery.refresh
  })

  return {}
})