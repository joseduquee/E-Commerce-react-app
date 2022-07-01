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
import { useForm } from "react-hook-form";
import { FormInputText } from "../../../helpers/FormInputText";
import ClipLoader from "react-spinners/ClipLoader";
import { useSingUpMutation } from "../../../api/apiSlice";

export const Register = () => {
  
  const [ signUp, { isLoading } ] = useSingUpMutation();

  // Manejor de formulario
  const validationShema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    lastname: Yup.string().required("Lastmame is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(validationShema),
  });

  const onSubmit = async(data) => {
    try {
      await signUp(data).unwrap();
    } catch (error) {
      console.error("Failed to login: " + JSON.stringify(error));
    }
  };
  // fin anejor de formulario


  const { gridmb: Gridmb } = useStyles();

  return (
    <Container sx={{ mt: 10 }}>
      <div className="spinner">
        <ClipLoader color="#0f7575" loading={isLoading} size={150} />
      </div>
      <Gridmb container justifyContent="center">
        <Gridmb item lg={6} md={8}>
          <Card style={{ padding: "30px" }} align="center">
            <Avatar
              style={{
                backgroundColor: "#0F4C75",
                width: "80px",
                height: "80px",
              }}
            >
              <Icon style={{ fontSize: "50px" }}>person_add</Icon>
            </Avatar>
            <Typography variant="h5" color="primary">
              User register
            </Typography>
            {/* Form */}
            <form style={{ marginTop: "40px", marginBottom: "10px" }}>
              <Grid container spacing={2}>
                <Gridmb item md={6} xs={12}>
                  <FormInputText name="name" control={control} label="Name" />
                </Gridmb>
                <Gridmb item md={6} xs={12}>
                  <FormInputText
                    name="lastname"
                    control={control}
                    label="Last name"
                  />
                </Gridmb>
                <Gridmb item md={12} xs={12}>
                  <FormInputText
                    name="username"
                    control={control}
                    label="Username"
                    type="text"
                  />
                </Gridmb>
                <Gridmb item md={12} xs={12}>
                  <FormInputText
                    name="email"
                    control={control}
                    label="Email"
                    type="email"
                  />
                </Gridmb>
                <Gridmb item md={12} xs={12}>
                  <FormInputText
                    name="password"
                    control={control}
                    label="Password"
                    type="password"
                  />
                </Gridmb>
                <Gridmb item md={12} xs={12}>
                  <Button
                    onClick={handleSubmit(onSubmit)}
                    variant="contained"
                    fullWidth
                    color="primary"
                  >
                    Register
                  </Button>
                </Gridmb>
              </Grid>
              <Link component={RouterLink} to="/auth/login" variant="body1">
                Already have an account? Log in
              </Link>
            </form>
          </Card>
        </Gridmb>
      </Gridmb>
    </Container>
  );
};
