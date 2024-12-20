import { createHashRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import CounterPage from "./pages/counter/counter-page";
import CounterRPage from "./pages/counter-r/counter-r-page";
import KingGamePage from "./pages/king-game/king-game.page";
import CounterZPage from "./pages/counter-z/counter-z-page";
import BindingsPage from "./pages/bindings/bindings-page";

export const appRouter = createHashRouter([{
  element: <AppLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/counter',
      element: <CounterPage />
    },
    {
      path: '/counter-r',
      element: <CounterRPage />
    },
    {
      path: '/counter-z',
      element: <CounterZPage />
    },
    {
      path: '/king-game',
      element: <KingGamePage />
    },
    {
      path: '/bindings',
      element: <BindingsPage />
    }
  ]
}])
