import React, { useCallback, useState } from "react";
import { BtnCart, BtnFavorites, BtnNotifications, BtnOrders, Burger, LeftSide, Logo, RightSide, SearchWrapper, Wrapper } from "./styled";
import { Link } from "react-router-dom";
import { paths } from "routes/helpers";
import Button from "components/Button";
import logo from "../../img/logo.png"
import Input from "components/Input";
const Header:React.FC = () => {

  // const isLogged = useAppSelector(selectIsLogged)

  const [searchInput, setSearchInput] = useState<string>('')

  const changeSearchInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  },[])
  return (
    <Wrapper>
      <LeftSide>
        <Link to={paths.home}>
          <Logo src={logo}/>
        </Link>
        <Button>
          <Burger>
              <div/> <div/> <div/>
          </Burger>
          <span>Каталог</span>
        </Button>
      </LeftSide>
      <SearchWrapper>
        <Input
          value={searchInput}
          onChange={changeSearchInput}
          isGhost
          placeholder='Поиск товаров'
        />
      </SearchWrapper>
      <RightSide>
        {true ? <>
          <BtnOrders/>
          <BtnFavorites/>
          <BtnNotifications/>
          <BtnCart/>
        </> : 
          <Link to={paths.login}>
            &nbsp;&nbsp;&nbsp;
            Войти
          </Link>
        }
      </RightSide>
    </Wrapper>
  );
};

export default Header;