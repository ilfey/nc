import {BaseLayout} from "../../../widgets/layout/BaseLayout";
import {ProductList} from "./ProductList.tsx";


export const ProductListPage = () => {
  return (
    <BaseLayout title="Product list">
      <ProductList/>
    </BaseLayout>
  )
}

