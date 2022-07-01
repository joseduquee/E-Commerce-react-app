import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Button,
  CardMedia,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../../helpers/FormInputText";

export const PurchasingProcess = () => {
  
    let navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(1);

  const nextPurchasingProcess = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const backPurchasingProcess = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleMakeOrder = () => {
    const orderId = "2";
    navigate(`../order/${orderId}`)
  }

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Container sx={{ mt: 5 }}>
      {/* Componente para pasos enumerados */}
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Sign up</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipment</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment method</StepLabel>
        </Step>
        <Step>
          <StepLabel>Make order</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 1 ? (
        <Grid
          container
          item={true}
          xs={10}
          md={6}
          sx={{
            margin: "auto",
            marginTop: "40px",
          }}
        >
          <Typography variant="h6" className="text-title">
            Product Shipment
          </Typography>

          <form
            onSubmit={(e) => e.preventDefault()}
            sx={{
              mt: 40,
              mb: 10,
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <FormInputText
                  name="address"
                  control={control}
                  label="Address"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <FormInputText
                  name="city"
                  control={control}
                  label="City"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <FormInputText
                  name="country"
                  control={control}
                  label="Country"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={nextPurchasingProcess}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      ) : activeStep === 2 ? (
        <Grid
          container
          item={true}
          md={3}
          xs={10}
          sx={{ margin: "auto", marginTop: "40px" }}
        >
          <Typography variant="h6" className="text-title">
            Payment method
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={10}>
              <FormControl sx={{ m: 2 }}>
                <FormLabel>Select a method</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Paypal"
                    control={<Radio color="primary" />}
                    label="Paypal or Card"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={10}>
              <Button
                variant="contained"
                color="primary"
                onClick={backPurchasingProcess}
                sx={{
                  mx: 1,
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={nextPurchasingProcess}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : activeStep === 3 ? (
        <Grid container item={true} sx={{ margin: "auto", marginTop: "40px" }}>
          <Grid item md={8} xs={12} sx={{ pl: 2, pb: 1, px: 2 }}>
            <Typography variant="h6" className="text-title">
              Shipment
            </Typography>
            <Typography>Address: Calle Villajoyosa 79</Typography>

            <Divider sx={{ mt: 2, mb: 2 }} />

            <Typography variant="h6" className="text-title">
              Payment method
            </Typography>
            <Typography>Method: Paypal</Typography>

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

            <Button
              variant="contained"
              color="primary"
              onClick={backPurchasingProcess}
            >
              Back
            </Button>
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
                    <TableCell>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        onClick={ handleMakeOrder }
                    >
                        Make the order
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      ) : null}
    </Container>
  );
};
