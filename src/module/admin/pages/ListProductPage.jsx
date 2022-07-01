import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  Grid,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { dataSeed } from "../../../data/dataSeed";

export const ListProductPage = () => {
  
    let navigate = useNavigate();
    const products = dataSeed;

    const addProduct = () => {
        navigate("/admin/addproduct")
    }

    const editProduct = (id) => {
      navigate(`/admin/editproduct/${id}`)
    }
  
    return (
    <Container sx={{ mt: 3 }}>
      <Grid container>
        <Grid item lg={6} sm={6} xs={12}>
          <Typography variant="h4" className="text-title">
            PRODUCTS
          </Typography>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          <Button onClick={ addProduct } sx={{ float: "right" }} variant="contained" color="inherit">
            <Icon>add</Icon>
            Add Product
          </Button>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell>BRAND</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.key}>
                <TableCell>{ product.key }</TableCell>
                <TableCell>{ product.titulo }</TableCell>
                <TableCell>{ product.precio }</TableCell>
                <TableCell>{ product.marca }</TableCell>
                <TableCell>
                    <Button onClick={() => editProduct(product.key) } variant="contained" sx={{ mx: 1}}>
                        <Icon>edit</Icon>
                    </Button>
                    <Button variant="contained" color="secondary">
                        <Icon>delete</Icon>
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
