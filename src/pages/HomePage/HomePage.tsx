import { Helmet } from "react-helmet";
import { TestHome } from "./styled";
import { PageWrapper } from "App.styled";

const HomePage: React.FC = () => {
  return (
    <div>
      {/*HELMET позволяет помещать данные в недоступный тег head*/}
      <Helmet>
        <title>Main title</title>
      </Helmet>
      <PageWrapper>
        <h1>MARKETPLACE</h1>      
      </PageWrapper>
    </div>
  );
};
export default HomePage