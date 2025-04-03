import { PersonPinCircleOutlined } from "@mui/icons-material";
import { Menu } from "react-admin";

export const CustomMenu = () => (
  <Menu>
    <Menu.ResourceItems/>
    <Menu.Item to="/myprofile" primaryText="My profile" leftIcon={<PersonPinCircleOutlined />}/>
  </Menu>
);