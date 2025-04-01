import { Helmet } from "react-helmet";
import { TestHome } from "./styled";

const AccountSettingsPage: React.FC = () => {
  return (
    <div>
      {/*HELMET позволяет помещать данные в недоступный тег head*/}
      <Helmet>
        <title>AccoutSettingsPage</title>
      </Helmet>
      <h1>AccoutSettingsPage</h1>
      <TestHome/>
    </div>
  );
};
export default AccountSettingsPage