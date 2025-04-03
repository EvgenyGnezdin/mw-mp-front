import { Helmet } from "react-helmet";
import { PageWrapper } from "App.styled";
import { ProductGroup, ProductGroupContainer } from "./styled";
import { dummyProducts } from "pages/dummyProducts";
import ProductCard from "blocks/ProductCard/ProductCard";

const HomePage: React.FC = () => {
  return (
    <div>
      {/*HELMET позволяет помещать данные в недоступный тег head*/}
      <Helmet>
        <title>Main title</title>
      </Helmet>
      <PageWrapper>
        <ProductGroup>
          <h2>Рекомендуемые товары.</h2>
          <ProductGroupContainer>
            {dummyProducts.map((p) => (
              <ProductCard {...p} key={p.id}/>
            ))}
          </ProductGroupContainer>
        </ProductGroup>
              
      </PageWrapper>
    </div>
  );
};
export default HomePage