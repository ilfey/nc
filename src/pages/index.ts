import {ProductListRouteView} from "./ProductListPage";
import {ProductDetailRouteView} from "./ProductDetailPage";
import {createRoutesView} from "atomic-router-react";


export const Pages = createRoutesView({
  routes: [
    ProductDetailRouteView,
    ProductListRouteView,
  ]
})