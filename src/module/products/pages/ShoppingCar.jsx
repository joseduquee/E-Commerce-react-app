import { useNavigate } from 'react-router-dom';
import {
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Icon,
  IconButton,
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
import { dataSeed } from "../../../data/dataSeed";

export const ShoppingCar = () => {
  
  let navigate = useNavigate();

  const miArray = dataSeed;

  const handleMakeAnOrder = () => {
    navigate('../purchasing')
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        className="text-title"
      >
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={9} md={8} sm={12} xs={12}>
          <TableContainer>
            <Table>
              <TableBody>
                {miArray.map((producto) => (
                  <TableRow key={producto.key}>
                    <TableCell>
                      <CardMedia
                        sx={{
                          backgroundColor: "#F2F2F2",
                          width: 80,
                          height: 70,
                        }}
                        image="https://images.pexels.com/photos/1776269/pexels-photo-1776269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=236.25&fit=crop&h=382.5"
                        title="image in car"
                      />
                    </TableCell>

                    <TableCell>
                      <Typography className="text-detail">
                        {producto.titulo}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography className="text-detail">{producto.precio}€</Typography>
                    </TableCell>
                    <TableCell>
                      <TextField select variant="outlined" size="small">
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </TextField>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Icon>delete</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper variant="outlined" square sx={{ p: '20px' }}>
            <Typography variant="h6" className="text-title">
              SUBTOTAL ({miArray.length}) Products
            </Typography>
            <Typography className="text-title">143.46€</Typography>
            <Divider sx={{ mb: 2 }} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={ handleMakeAnOrder }
            >
              Buy
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
