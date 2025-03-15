import {createHistoryRouter, createRoute, createRouterControls} from "atomic-router";
import {appStarted} from "./config/app-started.ts";
import {createBrowserHistory} from "history";
import {sample} from "effector";

export const routes = {
  product: {
    list: createRoute(),
    detail: createRoute<{ id: string }>(),
  }
}

export const router = createHistoryRouter({
  routes: [
    {path: "/detail/:id", route: routes.product.detail},
    {path: "/", route: routes.product.list},
  ],
  controls: createRouterControls()
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory
})