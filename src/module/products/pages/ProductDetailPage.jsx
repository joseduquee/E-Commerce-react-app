import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Button,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
import { useGetProductByIdQuery } from "../../../api/apiSlice";

export const ProductDetailPage = () => {
  const { id } = useParams();

  const { data: product, isFetching, isSuccess } = useGetProductByIdQuery(id);

  let navigate = useNavigate();

  const handleAddToShoppingCar = () => {
    navigate("../car");
  };

  return (
    <Container sx={{ mt: 5 }}>
      <div className="spinner">
        <ClipLoader color="#0f7575" loading={ isFetching } size={150} />
      </div>
      <Typography sx={{ mb: 3 }} variant="h4">
        {isSuccess && product.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={8} md={8} xs={12}>
          <Paper sx={{ backgroundColor: "#f2f2f2" }} variant="outlined" square>
            <CardMedia
              sx={{ width: "380px", height: "380px", m: "auto" }}
              image="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400"
              title="My product"
            />
          </Paper>
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2">Price</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {product && product.price} €
                    </Typography>
                  </TableCell>
                </TableRow>

                {/* <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2">Quantity</Typography>
                  </TableCell>
                  <TableCell>
                    <TextField size="small" select variant="outlined">
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </TextField>
                  </TableCell>
                </TableRow> */}

                <TableRow>
                  <TableCell colSpan={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleAddToShoppingCar}
                    >
                      Add to cart
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item lg={8} md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography sx={{ fontWeight: "500", color: "#494949", mb: 1 }}>
                Price: 25,99€
              </Typography>
              <Typography sx={{ fontWeight: "500", color: "#494949", mb: 1 }}>
                Units: 15
              </Typography>
              <Typography sx={{ fontWeight: "500", color: "#494949", mb: 1 }}>
                Brand: Leax
              </Typography>
              <Typography sx={{ fontWeight: "500", color: "#494949", mb: 1 }}>
                Season: Summer
              </Typography>
            </Grid>

            <Grid item md={6}>
              <Typography sx={{ fontWeight: "500", color: "#494949", mb: 1 }}>
                Description:
              </Typography>
              <Typography sx={{ fontWeight: "500", color: "#494949", mb: 1 }}>
                {isSuccess &&
                  product.description
                }
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
