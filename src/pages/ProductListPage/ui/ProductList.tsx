import {useUnit} from "effector-react";
import {productListQuery} from "../api";
import AutoSizer from "react-virtualized-auto-sizer";
import {FixedSizeGrid} from "react-window";
import {baseLayoutModel} from "../../../widgets/layout/BaseLayout/model";
import {ProductVerticalCard} from "../../../entities/product/Product/ui";
import {ProductList as ProductListDTO} from "../../../entities/product/Product/model";


// Размеры элемента
const ITEM_WIDTH = 164;
const ITEM_HEIGHT = 260;

// Внутренний отступ сетки
const GRID_PADDING = 24;

// Количество колонок
const COLUMN_COUNT = 7;

interface CellProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
  data: ProductListDTO
}

const Cell = ({columnIndex, rowIndex, style, data}: CellProps) => {
  const {
    productToggled,
    favorites,
  } = useUnit({
    productToggled: baseLayoutModel.productToggled,
    favorites: baseLayoutModel.$favorites,
  })

  const item = data[rowIndex * 7 + columnIndex]

  if (!item) {
    return <div style={style}></div>
  }

  return (
    <div style={{
      ...style,
      padding: `${GRID_PADDING / 2}px`, // Внутренний отступ ячейки
      boxSizing: 'border-box', // Учитываем padding в размерах
    }}>
      <ProductVerticalCard
        data={item}
        selected={favorites.has(item.id)}
        onToggle={productToggled}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
};

export const ProductList = () => {
  const {
    data,
  } = useUnit({
    data: productListQuery.$data,
  })

  if (!data) {
    return
  }

  return (
    <AutoSizer>
      {({height, width}) => {
        // Ширина сетки с учетом отступов
        const gridWidth = width - GRID_PADDING * 2;

        // Количество строк
        const rowCount = Math.ceil(data.length / COLUMN_COUNT);

        return (
          <div style={{
            width: '100%',
            height: '100%',
            padding: `0 ${GRID_PADDING}px`, // Отступы вокруг сетки
            boxSizing: 'border-box', // Учитываем padding в размерах
          }}>
            <FixedSizeGrid
              columnCount={COLUMN_COUNT}
              columnWidth={ITEM_WIDTH + GRID_PADDING}
              height={height}
              rowCount={rowCount}
              rowHeight={ITEM_HEIGHT + GRID_PADDING}
              width={gridWidth}
              itemData={data}
              innerElementType={({style, ...rest}: { style: React.CSSProperties }) => (
                <div
                  style={{
                    ...style,
                    position: "relative",
                    margin: "0 auto"
                  }}
                  {...rest}
                />
              )}
            >
              {Cell}
            </FixedSizeGrid>
          </div>
        )
      }}
    </AutoSizer>
  )
}