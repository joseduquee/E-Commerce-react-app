import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Icon,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

export const MenuAdmin = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        color="inherit"
        sx={{ fontSize: 14, padding: 0 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon sx={{ mx: 2 }}>admin_panel_settings</Icon>
          ADMIN
          <Icon>keyboard_arrow_down</Icon>
        </div>
      </Button>
      <Menu
        elevation={2}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem sx={{ p: 0 }} onClick={handleClose}>
          <Link
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "100%",
              padding: "8px 16px",
              color: "inherit",
              textDecoration: "none",
            }}
            to="/admin/users"
          >
            <ListItemIcon sx={{ minWidth: 35 }}>
              <Icon>group</Icon>
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
          </Link>
        </MenuItem>

        <MenuItem sx={{ p: 0 }} onClick={handleClose}>
          <Link
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "200%",
              padding: "8px 16px",
              color: "inherit",
              textDecoration: "none",
            }}
            to="admin/productslist"
          >
            <ListItemIcon sx={{ minWidth: 35 }}>
              <Icon>storefront</Icon>
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
          </Link>
        </MenuItem>

        <MenuItem sx={{ p: 0 }} onClick={handleClose}>
          <Link
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "200%",
              padding: "8px 16px",
              color: "inherit",
              textDecoration: "none",
            }}
            to="/admin/orderslist"
          >
            <ListItemIcon sx={{ minWidth: 35 }}>
              <Icon>shopping_cart</Icon>
            </ListItemIcon>
            <ListItemText>Orders</ListItemText>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};
