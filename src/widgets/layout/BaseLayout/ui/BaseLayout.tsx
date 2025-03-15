import React from "react";
import {AppShell, Group, rem, Text} from "@mantine/core";
import {Logo} from "../../../../shared/ui/logo.tsx";
import {baseLayoutModel} from "../model";
import {useGate} from "effector-react";
import {Favorites} from "./Favorites.tsx";

interface Props {
  children: React.ReactNode,
  title?: string
}

export const BaseLayout = ({children, title}: Props) => {

  useGate(baseLayoutModel.Gate)

  return (
    <AppShell
      header={{
        height: rem(100)
      }}
      navbar={{
        width: rem(384),
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header bg="#F6F7F9">
        <Group h="100%" p={rem(24)} justify="space-between" align="center">
          <Logo/>
          <Text component="h1" size="xl">{title}</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p={rem(0)} bg="#F6F7F9">
        <Favorites/>
      </AppShell.Navbar>

      <AppShell.Main bg="#F6F7F9">
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

