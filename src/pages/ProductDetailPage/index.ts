import {routes} from "../../shared/routing.ts";
import {ProductDetailPage} from "./ui/ProductDetailPage.tsx";
import "./model"


export const ProductDetailRouteView = {
  route: routes.product.detail,
  view: ProductDetailPage,
}