import { useNavigate } from "react-router-dom";

import {
  Table,
  Container,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Icon,
  Button,
} from "@mui/material";

export const UsersPage = () => {
  let navigate = useNavigate();

  const editUser = () => {
    const id = "34543543-457657-2343-345";
    navigate(`/admin/user/${id}`, {
      replace: false,
    });
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" className="text-title">
        Users
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>USER</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>ADMIN</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>2344-4567687-5456</TableCell>
              <TableCell>Alexander Duque</TableCell>
              <TableCell>alex@gmail.com</TableCell>
              <TableCell>
                <Icon sx={{ color: "green", fontWeight: 900 }}>check</Icon>
              </TableCell>
              <TableCell>
                <Button onClick={ editUser } variant="contained" color="primary">
                  <Icon>edit</Icon>
                </Button>
                <Button variant="contained" color="secondary">
                  <Icon>delete</Icon>
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2454344-34543-5456</TableCell>
              <TableCell>Antonio Duque</TableCell>
              <TableCell>antonio@gmail.com</TableCell>
              <TableCell>
                <Icon sx={{ color: "red", fontWeight: 900 }}>clear</Icon>
              </TableCell>
              <TableCell>
                <Button onClick={ editUser } variant="contained" color="primary">
                  <Icon>edit</Icon>
                </Button>
                <Button variant="contained" color="secondary">
                  <Icon>delete</Icon>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
