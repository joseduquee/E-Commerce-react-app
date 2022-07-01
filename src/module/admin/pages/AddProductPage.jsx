import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import useStyles from "../../../theme/useStyles";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../../helpers/FormInputText";

export const AddProductPage = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      productName: "",
      price: "",
      brand: "",
      stock: "",
      description: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  const { gridmb: Gridmb } = useStyles();

  return (
    <Container sx={{ mt: 3 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" className="text-title">
            ADD PRODUCT
          </Typography>
          <form style={{ marginTop: "40px", marginBottom: "10px" }}>
            <Gridmb item>
              <FormInputText
                name="productName"
                control={control}
                label="Product name"
              />
            </Gridmb>
            <Gridmb item>
              <FormInputText name="price" control={control} label="Price" />
            </Gridmb>
            <Gridmb item>
              <FormInputText name="brand" control={control} label="Brand" />
            </Gridmb>
            <Gridmb item>
              <FormInputText name="stock" control={control} label="Stock" />
            </Gridmb>
            <Gridmb item>
              <FormInputText
                name="description"
                control={control}
                label="Description"
                rows={4}
                multiline={true}
              />
            </Gridmb>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <Avatar
                  variant="square"
                  sx={{
                    width: "175px",
                    height: "175px",
                    backgroundColor: "#f2f2f2",
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Avatar
                  variant="square"
                  sx={{
                    width: "175px",
                    height: "175px",
                    backgroundColor: "#f2f2f2",
                  }}
                />
              </Grid>
            </Grid>
            <Button sx={{ mt: 2}} variant="contained">ADD</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
