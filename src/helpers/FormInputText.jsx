import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const FormInputText = ({ name, control, label, type, variant, disabled, rows, multiline, valor }) => {

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          type={ type }
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={valor}
          fullWidth
          label={label}
          variant={ variant }
          disabled={ disabled }
          rows={ rows }
          multiline={ multiline }
        />
      )}
    />
  );
};

FormInputText.defaultProps= {
  variant: 'outlined',
  disabled: false,
  multiline: false
}