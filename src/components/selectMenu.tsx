import React, { BaseSyntheticEvent, FC } from 'react';

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
    <>
      <label htmlFor={id}>
        {label}
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
      </label>
    </>
  );
};

export default SelectMenu;
