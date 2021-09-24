import React, { BaseSyntheticEvent, FC } from 'react';
import { Typography } from '@mui/material';

export interface SelectMenuProps {
    label: string,
    id: string,
    optionList: (number[] | string[]),
    handleInputChange(e: BaseSyntheticEvent): void,
    testId: string,
    value: number | string
}

const SelectMenu: FC<SelectMenuProps> = (props: SelectMenuProps) => {
  const {
    label, id, optionList, handleInputChange, testId, value,
  } = props;

  return (
    <div className="input-row">
      <Typography variant="h6">
        {label}
      </Typography>
      <div className="input-value-item">
        <select
          name={id}
          data-testid={testId}
          id={id}
          value={value}
          onChange={(e: BaseSyntheticEvent) => handleInputChange(e)}
        >
          <option value="" label="Select" disabled />
          {optionList.map((item: number | string) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default SelectMenu;
