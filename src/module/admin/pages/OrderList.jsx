import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const OrderList = () => {
  
    let navigate = useNavigate();


  const watchDetail = () => {
    const id = "476751c9-3891-4a02-b8da-ac4e69b16df8";
    navigate(`/products/order/${id}`);
  }
  
    return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" className="text-title">
        ORDERS
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>USER</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>TOTAL</TableCell>
              <TableCell>PAYED</TableCell>
              <TableCell>DELIVERED</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>476751c9-3891-4a02-b8da-ac4e69b16df8</TableCell>
              <TableCell>Nestor Arcila</TableCell>
              <TableCell>2020-12-22</TableCell>
              <TableCell>60,00€</TableCell>
              <TableCell>12-12-2023</TableCell>
              <TableCell>
                <Icon sx={{ color: "green", fontWeight: 900 }}>check</Icon>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={watchDetail}
                >
                  DETAILS
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>55e210f5-f068-4100-abe7-139331a4d6de</TableCell>
              <TableCell>Ricardo Mendez</TableCell>
              <TableCell>2020-12-20</TableCell>
              <TableCell>150,00€</TableCell>
              <TableCell>01-12-2020</TableCell>
              <TableCell>
                <Icon sx={{ color: "red", fontWeight: 900 }}>clear</Icon>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={watchDetail}
                >
                  DETAILS
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
