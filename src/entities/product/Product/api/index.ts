import {createInternalFx} from "../../../../shared/api";
import {ProductDetail, ProductList} from "../model";

export const fetchProductListFx =
  () => createInternalFx<void, ProductList, void>(() => ({
    url: "/image",
    method: "GET",
  }))

export const fetchProductDetailFx =
  () => createInternalFx<{id: string | number}, ProductDetail, void>(({id}) => ({
    url: `/image?id=${id}`,
    method: "GET",
  }))