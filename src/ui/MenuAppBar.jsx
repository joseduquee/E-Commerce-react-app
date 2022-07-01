import { Link } from "react-router-dom";
import {
  Toolbar,
  Container,
  AppBar,
  Icon,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
} from "@mui/material";
import { useState } from "react";
import "./navigation.css";
import { MenuClient } from "./desktop/MenuClient";
import { MenuAdmin } from "./desktop/MenuAdmin";
import { MenuMobile } from "./mobile/MenuMobile";
import { MenuMobilePublic } from "./mobile/MenuMobilePublic";
import { MenuPublic } from "./desktop/MenuPublic";

export const MenuAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeToggle = () => {
    setIsOpen(false);
}

  return (
    <div>
      <AppBar
        position="static"
        sx={{ paddingTop: "8px", paddingBottom: "8px" }}
      >
        <Container>
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton onClick={drawerToggle} color="inherit">
                <Icon fontSize="large">menu</Icon>
              </IconButton>
            </Box>
            <Drawer open={isOpen} onClose={drawerToggle}>
              <div className="list">
                <List>
                  <MenuMobile onCloseHandler={ closeToggle }/>
                  {/* <MenuMobilePublic onCloseHandler={ closeToggle }/> */}
                </List>
              </div>
            </Drawer>
            <Grid
              sx={{
                flexGrow: { xs: "0", md: "1" },
              }}
            >
              <Link
                to="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "inherit",
                  textDecoration: "none",
                }}
                color="inherit"
                underline="none"
              >
                <Icon style={{ marginRight: "5px" }} fontSize="large">
                  store
                </Icon>
                <Typography variant="h5">Leax Shop</Typography>
              </Link>
            </Grid>
            <Box sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
              {/* <MenuPublic /> */}
              <MenuClient />
              <MenuAdmin />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
