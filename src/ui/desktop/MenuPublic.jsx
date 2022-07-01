import { Link } from "react-router-dom";
import {
  Icon,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const MenuPublic = () => {
  return (
    <>
      <Button style={{ fontSize: "14px", padding: "0" }} color="inherit">
        <Link
          to="/product/car"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon style={{ marginRight: "5px" }}>shopping_cart</Icon>
          My Orders
        </Link>
      </Button>
      <Button style={{ fontSize: "14px", padding: "0" }} color="inherit">
        <Link
          to="/auth/login"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon style={{ marginRight: "5px" }}>person</Icon>
          Log in
        </Link>
      </Button>
    </>
  );
};
