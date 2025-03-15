import React from 'react';
import {router} from "../../shared/routing.ts";
import {Pages} from "../../pages";
import {RouterProvider} from "atomic-router-react";
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import {theme} from "../../shared/app/theme.ts";


export const App = () => {
  return (
    <RouterProvider router={router}>
      <MantineProvider theme={theme}>
        <Pages/>
      </MantineProvider>
    </RouterProvider>
  );
};
