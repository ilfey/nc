import {createQuery} from "@farfetched/core";
import {fetchProductDetailFx} from "../../../entities/product/Product/api";

export const productDetailQuery = createQuery({
  effect: fetchProductDetailFx()
})