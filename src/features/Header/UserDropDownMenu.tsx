
import DropdownPanel from "components/DropdownPanel"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { paths } from "routes/helpers"
import { UserProfileDropdown } from "./styled"
import { useSelector } from "react-redux"
import UserAvatar from "./UserAvatar"
import { selectUserData } from "features/UserData/selector"




const UserDropDownMenu: React.FC = () => {
  const navigate = useNavigate()
  const { nameFirst, nameLast, displayName } = useSelector(selectUserData)

  const handlerLogout = useCallback(() => navigate(paths.logout), [navigate])
  return (
    <DropdownPanel toggler={(props: any) => <UserAvatar onClick={props.onClick}/>} toLeft>
      <UserProfileDropdown>
        <div>
          <strong>
            {displayName || (nameFirst + ' ' + nameLast)}
          </strong>
        </div>

        <hr />

        <div>Заказ</div>
        <div>Возвраты</div>
        <div>Избранное</div>
        <div>Справка</div>
        <div>Поддержка</div>
        <div>Найстройки</div>

        <hr />

      </UserProfileDropdown>
    </DropdownPanel>
  )
}