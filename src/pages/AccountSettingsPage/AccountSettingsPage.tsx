import { Helmet } from "react-helmet";
import { PageWrapper } from "App.styled";

const AccountSettingsPage: React.FC = () => {
  return (
    <div>
      {/*HELMET позволяет помещать данные в недоступный тег head*/}
      <Helmet>
        <title>AccoutSettingsPage</title>
      </Helmet>
      <PageWrapper>
        <h1>AccoutSettingsPage</h1>
      </PageWrapper>
      
    </div>
  );
};
export default AccountSettingsPage