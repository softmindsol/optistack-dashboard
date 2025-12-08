import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import PATHS from "./path";
import { Preloader } from "../components";

const Login = lazy(() => import("../pages/Auth/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const UserManagement = lazy(() => import("../pages/Users/UserManagement"));
const Subscription = lazy(() =>
  import("../pages/SubscriptionDetail/Subscription")
);
const SupplementExplorer = lazy(() =>
  import("../pages/SupplementExplorer/SupplementExplorer")
);
const Setting = lazy(() => import("../pages/Setting/Setting"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const routes = [
  { path: PATHS.login, element: <Login /> },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: PATHS.dashboard, element: <Dashboard /> },
      { path: PATHS.users, element: <UserManagement /> },
      { path: PATHS.subscriptions, element: <Subscription /> },
      { path: PATHS.supplementInsights, element: <SupplementExplorer /> },
      { path: PATHS.settings, element: <Setting /> },
      { path: PATHS.about, element: <About /> },
      { path: PATHS.contact, element: <Contact /> },
      { path: PATHS.notFound, element: <NotFound /> },
    ],
  },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Preloader />}>{routing}</Suspense>;
};

export default Routes;
