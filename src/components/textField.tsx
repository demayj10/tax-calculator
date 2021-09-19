import React, { BaseSyntheticEvent, FC } from 'react';

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
    <>
      <label htmlFor={id}>
        {label}
        <input
          name={id}
          id={id}
          data-testid={testId}
          value={value}
          onChange={(e: BaseSyntheticEvent) => handleInputChange(e)}
        />
      </label>
    </>
  );
};

export default TextField;
