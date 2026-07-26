import React, { FC } from "react";

interface AppRouteProps {
  component: React.ComponentType<any>;
  layout?: React.ComponentType<any>;
}

const AppRoute: FC<AppRouteProps> = ({
  component: Component,
  layout: Layout,
}) => {
  Layout = Layout === undefined ? (props) => <>{props.children}</> : Layout;
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default AppRoute;
