import { Suspense, lazy, FC } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { Spin } from "antd";
import CreateAppointment from "./pages/CreateAppointment";

type Props = {};

const Loader = (Component: FC) => (props: Props) =>
  (
    <Suspense fallback={<Spin size="large" />}>
      <Component {...props} />
    </Suspense>
  );

const AppointmentList = Loader(lazy(() => import("./pages/AppointmentList")));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/appointments" replace />,
  },
  {
    path: "/appointments",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/appointments/create" replace />,
      },
      {
        path: "/appointments/create",
        element: <CreateAppointment />,
      },
      {
        path: "/appointments/list",
        element: <AppointmentList />,
      },
    ],
  },
];

export default routes;
