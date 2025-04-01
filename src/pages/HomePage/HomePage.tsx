import { Helmet } from "react-helmet";
import { TestHome } from "./styled";

const HomePage: React.FC = () => {
  return (
    <div>
      {/*HELMET позволяет помещать данные в недоступный тег head*/}
      <Helmet>
        <title>Main title</title>
      </Helmet>
      <h1>MARKETPLACE</h1>
      <TestHome/>
    </div>
  );
};
export default HomePage