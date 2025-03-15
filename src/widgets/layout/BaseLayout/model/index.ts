import {ProductList, ProductListItem} from "../../../../entities/product/Product/model";
import {createEvent, createStore, sample} from "effector";
import {atom} from "../../../../shared/lib/factory.ts";
import {createGate} from "effector-react";
import {productListQuery} from "../api";

export const baseLayoutModel = atom(() => {
  const Gate = createGate()

  const productToggled = createEvent<ProductListItem>()

  const $favorites = createStore<Set<number>>(new Set([1,2,3,5]))

  const $data = createStore<ProductList>([])

  sample({
    clock: productToggled,
    source: $favorites,
    fn: (source, clock) => {
      const newSet = new Set(source)

      if (!source.has(clock.id)) {
        newSet.add(clock.id)
      } else {
        newSet.delete(clock.id)
      }

      return newSet
    },
    target: $favorites,
  })

  sample({
    clock: Gate.open,
    target: productListQuery.refresh,
  })

  sample({
    source: {
      data: productListQuery.$data,
      favorites: $favorites,
    },
    filter: (source) => !!source.data,
    fn: ({data, favorites}) => {
      return data!.filter(val => favorites.has(val.id))
    },
    target: $data,
  })

  return {
    Gate,

    productToggled,
    $favorites,

    $data,
  }
})