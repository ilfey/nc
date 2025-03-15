import React from 'react';
import {ProductListItem} from "../model";
import {ActionIcon, Card, Group, Image, rem, Stack, Text} from "@mantine/core";
import {Heart} from "../../../../shared/ui/heart.tsx";
import {Link} from "atomic-router-react";
import {routes} from "../../../../shared/routing.ts";

interface Props {
  data: ProductListItem
  selected?: boolean,
  onToggle: (data: ProductListItem) => void,
  style?: React.CSSProperties,
}

export const ProductVerticalCard = ({data, selected, onToggle, style}: Props) => {
  return (
    <Card p={rem(12)} style={style} radius="md">
      <Stack h="100%" gap={0} justify="space-between">

        <Stack gap={rem(16)}>
          <Link to={routes.product.detail} params={{id: data.id.toString()}}>
            <Image
              maw={rem(140)}
              mah={rem(140)}
              src={"https://testbackend.nc-one.com" + data.src}
              alt={data.name}/>
          </Link>


          <Text fz="md">{data.name}</Text>
        </Stack>


        <Group justify="space-between">
          <Text fz="xl" lh={rem(32)}>$ {data.price}</Text>
          <ActionIcon h={rem(32)} w={rem(32)} bd={0} bg={selected ? "dark" : "white"} onClick={() => onToggle(data)}>
            <Heart/>
          </ActionIcon>
        </Group>
      </Stack>
    </Card>
  );
};
