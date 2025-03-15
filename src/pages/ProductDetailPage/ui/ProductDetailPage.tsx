import {productDetailQuery} from "../api";
import {useUnit} from "effector-react";

export const ProductDetailPage = () => {
  const {
    data,
  } = useUnit({
    data: productDetailQuery.$data,
  })

  return (
    <div className="">
      ProductDetailPage
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}