import { Link } from "react-router-dom";
import {
  Collapse,
  Grid,
  Icon,
  ListItem,
  ListItemText,
  Avatar,
  List,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { useState } from "react";

export const MenuMobile = ({ onCloseHandler }) => {
  const [openClient, setOpenClient] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);

  const handleClickClient = () => {
    setOpenClient((prevOpen) => !prevOpen);
  };

  const handleClickAdmin = () => {
    setOpenAdmin((prevOpen) => !prevOpen);
  };

  return (
    <>
      <ListItem button onClick={handleClickClient} sx={{ p: 0 }}>
        <Grid
          sx={{
            display: "inline-flex",
            alignItems: "center",
            width: "100%",
            padding: "8px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Avatar
            alt="my image"
            sx={{ marginRight: 2, backgroundColor: "#F2F2F2" }}
            src="https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
          <ListItemText>Alexander Duque</ListItemText>
          <Icon>keyboard_arrow_down</Icon>
        </Grid>
      </ListItem>
      <Collapse component="li" in={openClient} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            onClick={onCloseHandler}
            button
            sx={{ padding: "0 0 0 30px" }}
          >
            <Link
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "100%",
                padding: "8px 16px",
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
          </ListItem>

          <ListItem
            onClick={onCloseHandler}
            button
            sx={{ padding: "0 0 0 30px" }}
          >
            <Link
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "100%",
                padding: "8px 16px",
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
          </ListItem>

          <Divider />
        </List>
      </Collapse>

      {/* Admin */}
      <ListItem button onClick={handleClickAdmin} sx={{ p: 0 }}>
        <Grid
          sx={{
            display: "inline-flex",
            alignItems: "center",
            width: "100%",
            padding: "8px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <ListItemIcon sx={{ minWidth: 35 }}>
            <Icon>admin_panel_settings</Icon>
          </ListItemIcon>
          <ListItemText>Admin</ListItemText>
          <Icon>keyboard_arrow_down</Icon>
        </Grid>
      </ListItem>
      <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            onClick={onCloseHandler}
            button
            sx={{ padding: "0 0 0 30px" }}
          >
            <Link
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "100%",
                padding: "8px 16px",
                color: "inherit",
                textDecoration: "none",
              }}
              to="admin/users"
            >
              <ListItemIcon sx={{ minWidth: 35 }}>
                <Icon>group</Icon>
              </ListItemIcon>
              <ListItemText>Users</ListItemText>
            </Link>
          </ListItem>

          <ListItem
            onClick={onCloseHandler}
            button
            sx={{ padding: "0 0 0 30px" }}
          >
            <Link
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "100%",
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
          </ListItem>

          <ListItem
            onClick={onCloseHandler}
            button
            sx={{ padding: "0 0 0 30px" }}
          >
            <Link
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "100%",
                padding: "8px 16px",
                color: "inherit",
                textDecoration: "none",
              }}
              to="products"
            >
              <ListItemIcon sx={{ minWidth: 35 }}>
                <Icon>shopping_cart</Icon>
              </ListItemIcon>
              <ListItemText>Orders</ListItemText>
            </Link>
          </ListItem>

          <Divider />
        </List>
      </Collapse>
      {/* Fin Admin */}

      <ListItem onClick={onCloseHandler} button sx={{ p: 0 }}>
        <Link
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "100%",
            padding: "8px 16px",
            color: "inherit",
            textDecoration: "none",
          }}
          to="/admin/orderslist"
        >
          <ListItemIcon sx={{ minWidth: 35 }}>
            <Icon>shopping_cart</Icon>
          </ListItemIcon>
          <ListItemText>My Orders</ListItemText>
        </Link>
      </ListItem>
    </>
  );
};
