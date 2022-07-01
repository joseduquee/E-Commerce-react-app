import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Table,
  Typography,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  CardMedia,
  Button,
  Box,
  Paper,
} from "@mui/material";

export const PurchasingOrder = () => {
  const { id } = useParams();

  const shipmentMessage = "Undelivered";
  const paymentMessage = "Payed on 03/03/2022";

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5" className="text-title">
        PURCHASING ORDER: {id}
      </Typography>
      <Grid container spacing={2} sx={{ p: 5 }}>
        <Grid item md={8} xs={12}>
          <Typography variant="h6" className="text-title">
            Shipment
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: "3" }}>
            Name: Alexander Duque
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: "3" }}>
            Email: alexander@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: "3" }}>
            Address: Calle Villajoyosa 79
          </Typography>

          <Box
            sx={{
              padding: "25px 15px 5px 15px",
              backgroundColor: "#ffcccc",
            }}
          >
            <Typography variant="body2" className="text-title">
              {shipmentMessage}
            </Typography>
          </Box>

          <Divider sx={{ mt: 2, mb: 2 }} />

          <Typography variant="h6" className="text-title">
            Payment method
          </Typography>
          <Typography>Method: Paypal</Typography>

          <Box
            sx={{
              mt: 1,
              padding: "25px 15px 5px 15px",
              backgroundColor: "#d6f5d6",
            }}
          >
            <Typography variant="body2" className="text-title">
              {paymentMessage}
            </Typography>
          </Box>

          <Divider sx={{ mt: 2, mb: 2 }} />

          <Typography variant="h6" className="text-title">
            Products
          </Typography>
          <TableContainer sx={{ mb: 2 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <CardMedia
                      sx={{
                        backgroundColor: "#F2F2F2",
                        width: 50,
                        height: 40,
                      }}
                      image="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=400"
                      title="image in process"
                    />
                  </TableCell>

                  <TableCell sx={{ m: 10 }}>
                    <Typography className="text-detail">Coat leax</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className="text-detail">
                      2 x 25,00€ = 50,00€
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item md={4} xs={12}>
          <TableContainer component={Paper} square>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="h6" className="text-title">
                      Order summary
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography className="text-title">Products</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className="text-title">50,00€</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography className="text-title">Shipment</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className="text-title">5,00€</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography className="text-title">IVA</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className="text-title">9,00€</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography className="text-title">Total</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className="text-title">69,00€</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={ 2 }>
                    
                    {/* Users Buttons */}
                    
                    {/* <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ mb: 2 }}
                    >
                      Paypal
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      fullWidth
                    >
                      Credit or Debit Card
                    </Button> */}

                    {/* Admin Buttons */}
                    <Button variant="contained" size="large" fullWidth>
                      Check Delivered
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
