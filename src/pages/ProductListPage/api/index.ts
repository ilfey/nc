import {createQuery} from "@farfetched/core";
import {fetchProductListFx} from "../../../entities/product/Product/api";

export const productListQuery = createQuery({
  effect: fetchProductListFx()
})