import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { FormInputText } from "../../../helpers/FormInputText";
import useStyles from "../../../theme/useStyles";

export const Profile = () => {

  let navigate = useNavigate();

  const [images, setImages] = useState([]);

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  const { gridmb: Gridmb } = useStyles();

  const handleSeeDetail = () => {
    const id = "2343-4356547-345"
    navigate(`/products/order/${ id }`, {
      replace: false
    })
  }

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" className="text-title">
            USER PROFILE
          </Typography>
          <form onSubmit={(e) => e.preventDefault()}>
            <ImageUploading mode="multiple" onChange={onChange}>
              {({ imageList, onImageUpload, onImageRemoveAll }) => (
                <>
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "10px",
                      marginBotton: "20px",
                    }}
                  >
                    <Grid
                      item
                      sx={{
                        width: 140,
                        height: 140,
                        mx: "auto",
                        mb: 5,
                        backgroundColor: "grey",
                      }}
                    >
                      <Avatar
                        alt="my profile"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-8d30ZfiErMoju0V8B63qrXqkt6JYSUlFg&usqp=CAU"
                        sx={{
                          width: 140,
                          height: 140,
                          backgroundColor: "primary.main",
                        }}
                      ></Avatar>
                      <Button sx={{ borderRadius: "50%" }}>
                        <Icon>add_a_photo</Icon>
                      </Button>
                    </Grid>
                  </div>
                </>
              )}
            </ImageUploading>
            <Gridmb item>
              <FormInputText name="name" control={control} label="Name" />
            </Gridmb>
            <Gridmb item>
              <FormInputText
                name="lastname"
                control={control}
                label="Last name"
              />
            </Gridmb>
            <Gridmb item>
              <FormInputText name="email" control={control} label="Email" />
            </Gridmb>
            <Divider sx={{ mb: 2 }} />
            <Gridmb item>
              <FormInputText
                name="password"
                control={control}
                label="Password"
              />
            </Gridmb>
            <Gridmb item>
              <FormInputText
                name="password"
                control={control}
                label="Confirm password"
              />
            </Gridmb>
            <Button variant="contained" color="primary">
              UPDATE
            </Button>
          </form>
        </Grid>

        <Grid item md={9} xs={12}>
          <Typography variant="h5" className="text-title">
            MY ORDERS
          </Typography>
          <TableContainer xs={{ mt: 5, mb: 2 }}>
            <Table sx={{ border: "1px solid #e0e0e0" }}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>DATE</TableCell>
                  <TableCell>TOTAL</TableCell>
                  <TableCell>PAYED</TableCell>
                  <TableCell>DELIVERED</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>bc6ea036-0522-493f-b4b6-97eb87c8f7b4</TableCell>
                  <TableCell>2020-12-15</TableCell>
                  <TableCell>60.00</TableCell>
                  <TableCell>2020-12-12</TableCell>
                  <TableCell>
                    {/* <Icon sx={{ color: "green", fontWeight: 900 }}>clear</Icon> */}
                    <Icon sx={{ color: "green", fontWeight: 900 }}>check</Icon>
                  </TableCell>
                  <TableCell>
                    <Button onClick={ handleSeeDetail } variant="contained">details</Button>
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
