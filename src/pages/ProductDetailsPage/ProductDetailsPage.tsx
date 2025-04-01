import { PageWrapper } from "App.styled";
import React from "react";
import { Helmet } from "react-helmet";



const ProductDetailsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Страница продукта.</title>
      </Helmet>
      <PageWrapper>
        <h1>Страница продукта</h1>
      </PageWrapper>
    </>
  );
};

export default ProductDetailsPage
