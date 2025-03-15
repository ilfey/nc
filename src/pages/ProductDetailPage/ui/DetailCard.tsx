import {useUnit} from "effector-react";
import {productDetailQuery} from "../api";
import {baseLayoutModel} from "../../../widgets/layout/BaseLayout/model";
import {ActionIcon, Card, Group, rem, Stack, Text} from "@mantine/core";
import ReactImageMagnify from 'react-image-magnify';
import {Heart} from "../../../shared/ui/heart.tsx";
import {Magnify} from "../../../shared/ui/magnify.tsx";


export const DetailCard = () => {
  const {
    data,
    favorites,
    productToggled
  } = useUnit({
    data: productDetailQuery.$data,
    favorites: baseLayoutModel.$favorites,
    productToggled: baseLayoutModel.productToggled,
  })

  if (!data) {
    return <>Loading...</>
  }

  const isSelected = favorites.has(data.id)

  return (
    <Card p={rem(32)} radius="md" h="100%" display="flex" style={{
      justifyContent: "center",
    }}>
      <Group gap={rem(16)} align="center" wrap="nowrap">

        <ReactImageMagnify style={{
          flex: "0 0 500px"
        }} {...{
          isHintEnabled: true,
          hintComponent: () => <Magnify style={{
            position: "absolute",
            inset: 0,
            left: "50%",
            translate: "-50%",
            top: "initial",
          }}/>,
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            src: "https://testbackend.nc-one.com" + data.src,
            isFluidWidth: false,
            width: 500,
            height: 500,
          },
          largeImage: {
            src: "https://testbackend.nc-one.com" + data.src,
            width: 1000,
            height: 1000,
          }
        }} />

        <Stack gap={rem(48)} justify="space-between" mr={rem(64)} flex={`1 0 ${rem(200)}`}>
          <Text fz={rem(80)} lh={rem(120)}>
            {data.name}
          </Text>

          <Group justify="space-between">
            <Text fz={rem(40)} lh={rem(32)}>$ {data.price}</Text>

            <ActionIcon
              radius="lg"
              h={rem(96)}
              w={rem(96)}
              bd={0}
              bg={isSelected ? "dark" : "white"}
              onClick={() => productToggled(data)}
            >
              <Heart width="100%" height="100%"/>
            </ActionIcon>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};