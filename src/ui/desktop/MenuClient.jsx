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

export const MenuClient = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button color="inherit" sx={{ fontSize: 14, padding: 0 }}>
        <Link
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
          to="/car"
        >
          <Icon sx={{ mx: 2 }}>shopping_cart</Icon>
          MY ORDERS
        </Link>
      </Button>
      <div>
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
            <Avatar
              alt="mi imagen"
              sx={{ marginRight: 2, backgroundColor: "#F2F2F2" }}
              src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
            Alexander Duque
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
                width: "110%",
                padding: "8px 20px",
                color: "inherit",
                textDecoration: "none",
              }}
              to="auth/profile"
            >
              <ListItemIcon sx={{ minWidth: 35 }}>
                <Icon>person</Icon>
              </ListItemIcon>
              <ListItemText>My Profile</ListItemText>
            </Link>
          </MenuItem>

          <MenuItem sx={{ p: 0 }} onClick={handleClose}>
            <Link
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "110%",
                padding: "8px 20px",
                color: "inherit",
                textDecoration: "none",
              }}
              to="products"
            >
              <ListItemIcon sx={{ minWidth: 35 }}>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText>Sign out</ListItemText>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};
