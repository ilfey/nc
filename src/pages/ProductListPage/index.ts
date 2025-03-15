import {routes} from "../../shared/routing.ts";
import {ProductListPage} from "./ui/ProductListPage.tsx";
import "./model"

export const ProductListRouteView = {
  route: routes.product.list,
  view: ProductListPage,
}