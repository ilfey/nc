import {useUnit} from "effector-react/compat";
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {ProductList} from "../../../../entities/product/Product/model";
import {ProductHorizontalCard} from "../../../../entities/product/Product/ui";
import {Box, rem, Stack, Text} from "@mantine/core";
import React from "react";
import {baseLayoutModel} from "../model";

const ITEM_WIDTH = 320;
const ITEM_HEIGHT = 104;

const LIST_PADDING = 12;

interface RowProps {
  index: number;
  style: React.CSSProperties;
  data: ProductList
}

const Row = ({index, style, data}: RowProps) => {
  const {
    productToggled,
    favorites,
  } = useUnit({
    productToggled: baseLayoutModel.productToggled,
    favorites: baseLayoutModel.$favorites,
  })

  const item = data[index]

  if (!item) {
    return <div style={style}></div>
  }

  return (
    <div style={{
      ...style,
      padding: `${rem(LIST_PADDING / 2)} 0`,
      boxSizing: 'border-box',
    }}>
      <ProductHorizontalCard
        data={item}
        selected={favorites.has(item.id)}
        onToggle={productToggled}
        style={{
          marginLeft: rem(32),
          marginRight: "auto",
          marginBottom: rem(LIST_PADDING / 2),
          marginTop: rem(LIST_PADDING / 2),
          width: rem(ITEM_WIDTH),
          height: '100%',
        }}
      />
    </div>
  )
};

const FavoritesList = () => {
  const {
    data,
  } = useUnit({
    data: baseLayoutModel.$data,
  })

  if (!data) {
    return <>loading...</>
  }

  return (
    <Box flex="1 0 auto">
      <AutoSizer>
        {({height, width}) => (
          <FixedSizeList
            height={height}
            itemCount={data.length}
            width={width}
            itemData={data}
            itemSize={ITEM_HEIGHT}>
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </Box>
  )
}

export const Favorites = () => {

  return (
    <Stack
      w="100%"
      h="100%"
    >
      <Text
        mt={rem(32)}
        ml={rem(32)}
        mr={rem(32)}
        fz="xl"
      >
        Favorites
      </Text>

      <FavoritesList/>

    </Stack>
  )
}