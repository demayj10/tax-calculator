import React, { BaseSyntheticEvent, FC } from 'react';
import { Typography } from '@mui/material';

export interface TextFieldProps {
    label: string,
    id: string,
    handleInputChange(e: BaseSyntheticEvent): void,
    testId: string,
    value: string
}

const TextField: FC<TextFieldProps> = (props: TextFieldProps) => {
  const {
    label, id, handleInputChange, testId, value,
  } = props;

  return (
    <div className="input-row">
      <Typography variant="h6">
        {label}
      </Typography>
      <div className="input-value-item">
        <input
          name={id}
          id={id}
          data-testid={testId}
          value={value}
          onChange={(e: BaseSyntheticEvent) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};

export default TextField;
