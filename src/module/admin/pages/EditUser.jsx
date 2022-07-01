import {
  Container,
  Grid,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { FormInputText } from "../../../helpers/FormInputText";
import useStyles from "../../../theme/useStyles";

export const EditUser = () => {
  const { gridmb: Gridmb } = useStyles();

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
    <Container sx={{ mt: 3 }}>
      <Grid container justifyItems="center">
        <Grid item lg={6} sm={12}>
          <Typography variant="h4" className="text-title">
            Edit User
          </Typography>

          <form xs={{ marginTop: 40, marginBottom: 10 }}>
            <Gridmb item md={6} xs={12}>
              <FormInputText
                name="name"
                control={control}
                label="Name"
                variant="filled"
                disabled={true}
              />
            </Gridmb>
            <Gridmb item md={6} xs={12}>
              <FormInputText
                name="Email"
                control={control}
                label="Email"
                variant="filled"
                type="email"
                disabled={true}
              />
            </Gridmb>
            <Grid sx={{ display: "block", p: 0, mt: 1, mb: 1 }}>
              <Controller
                placeholder="Admin"
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Checkbox {...field} />}
              />
              <Typography sx={{ display: 'inline', fontWeight: 500 }} >Admin</Typography>
            </Grid>
            {/* <FormControl sx={{ display: "block", p: 0, mt: 1, mb: 1 }}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Admin"
              />
            </FormControl> */}
            <Button variant="contained" color="primary">
              UPDATE
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
