import React from 'react';
import {ProductListItem} from "../model";
import {ActionIcon, Card, Group, Image, rem, Stack, Text} from "@mantine/core";
import {Heart} from "../../../../shared/ui/heart.tsx";
import {Link} from "atomic-router-react";
import {routes} from "../../../../shared/routing.ts";

interface Props {
  data: ProductListItem,
  selected?: boolean,
  onToggle: (data: ProductListItem) => void,
  style?: React.CSSProperties,
}

export const ProductHorizontalCard = ({data, selected, onToggle, style}: Props) => {
  return (
    <Card p={rem(12)} style={style}>
      <Group gap={rem(16)} wrap="nowrap">
        <Link
          to={routes.product.detail}
          params={{id: data.id.toString()}}
          style={{
            flex: "0 0 auto",
          }}
        >
          <Image
            maw={rem(80)}
            mah={rem(80)}
            src={"https://testbackend.nc-one.com" + data.src}
            alt={data.name}/>
        </Link>

        <Stack gap={rem(10)} justify="space-between" flex={`1 0 ${rem(200)}`}>
          <Text fz="md">
            {data.name}
          </Text>

          <Group justify="space-between">
            <Text fz="xl" lh={rem(32)}>$ {data.price}</Text>
            <ActionIcon h={rem(32)} w={rem(32)} bd={0} bg={selected ? "dark" : "white"} onClick={() => onToggle(data)}>
              <Heart/>
            </ActionIcon>
          </Group>
        </Stack>

      </Group>
    </Card>
  );
};
