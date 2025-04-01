import { AppStyled, Footer } from "App.styled";
import Header from "features/Header";
import { Suspense } from "react";
import { PublicRoutes } from "routes/PublicRoutes";

export const App = () => {
  return (
    <>
      <AppStyled/>
      <Header/>
      <Suspense fallback="Loading...">
        <PublicRoutes/>
      </Suspense>
      <Footer>
        MW - MARKETPLACE
      </Footer>
    </>
  );
};
