import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Icon,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useStyles from "../../../theme/useStyles";
import { useLoginMutation } from "../../../api/apiSlice";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../../helpers/FormInputText";
import ClipLoader from "react-spinners/ClipLoader";

export const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const { gridmb: Gridmb } = useStyles();

  // Manejor de formulario
  const validationShema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(validationShema),
  });
  const onSubmit = async (data) => {
    try {
      await login(data).unwrap();
    } catch (error) {
      console.error("Failed to login: " + error);
    }
  };
  // fin anejor de formulario

  return (
    <Container style={{ marginTop: "30px" }}>
      <div className="spinner">
        <ClipLoader color="#0f7575" loading={isLoading} size={150} />
      </div>
      <Grid container justifyContent="center">
        <Grid item lg={5} md={6}>
          <Card style={{ padding: "30px" }} align="center">
            <Avatar
              style={{
                backgroundColor: "#0F4C75",
                width: "80px",
                height: "80px",
              }}
            >
              <Icon style={{ fontSize: "60px" }}>person</Icon>
            </Avatar>
            <Typography variant="h5" color="primary">
              Log in to Vshop
            </Typography>
            <form style={{ marginTop: "40px", marginBottom: "10px" }}>
              <Grid container spacing={2}>
                <Gridmb item xs={12}>
                  <FormInputText
                    name="email"
                    control={control}
                    label="Email"
                    type="email"
                  />
                </Gridmb>
                <Gridmb item xs={12}>
                  <FormInputText
                    name="password"
                    control={control}
                    label="Password"
                    type="password"
                  />
                </Gridmb>
                <Gridmb item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Log in
                  </Button>
                </Gridmb>
              </Grid>
              <Link component={RouterLink} to="/auth/register" variant="body1">
                Not a member yet? Sign up
              </Link>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
