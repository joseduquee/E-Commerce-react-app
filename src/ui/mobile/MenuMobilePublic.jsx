import { Link } from "react-router-dom";
import { Icon, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const MenuMobilePublic = ({ onCloseHandler }) => {
  return (
    <>
      <ListItem onClick={onCloseHandler} className="list-item" button>
        <Link
          to="/auth/login"
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "100%",
            padding: "8px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <ListItemIcon sX={{  minWidth : 35 }}>
            <Icon>person</Icon>
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </Link>
      </ListItem>
      <ListItem onClick={onCloseHandler} className="list-item" button>
        <Link
          to="/product/car"
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "100%",
            padding: "8px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <ListItemIcon className="list-item-icon">
            <Icon>shopping_cart</Icon>
          </ListItemIcon>
          <ListItemText>My Orders</ListItemText>
        </Link>
      </ListItem>
    </>
  );
};
