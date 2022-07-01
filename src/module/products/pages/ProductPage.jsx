import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetPaginatedProductsQuery } from "../../../api/apiSlice";
import ClipLoader from "react-spinners/ClipLoader";

export const ProductPage = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPaginatedProductsQuery();

  let navigate = useNavigate();

  const watchProduct = (id) => {
    navigate(`../details/${id}`);
  };

  return (
    <>
      <Container sx={{ mt: 5 }}>
      <div className="spinner">
        <ClipLoader color="#0f7575" loading={isLoading} size={150} />
      </div>
      {isError && <h1>{JSON.stringify(error)}</h1>}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: "#494949",
            mb: 2,
          }}
        >
          Products
        </Typography>
        <Grid container spacing={4}>
          {isSuccess &&
            products.items.map((product) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
                <Card>
                  <CardMedia
                    image="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400"
                    title="My product"
                    sx={{
                      height: "250px",
                      backgroundColor: "#f2f2f2",
                      mt: 2,
                      ml: 2,
                      mb: 0,
                      mx: 2,
                    }}
                  >
                    <Avatar
                      variant="square"
                      sx={{
                        float: "right",
                        px: 4,
                        pl: 4,
                        backgroundColor: "primary.main",
                      }}
                    >
                      {product.price}€
                    </Avatar>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#656565", mb: 1 }}
                    >
                      {product.name}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => watchProduct(product.id)}
                    >
                      More details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};
