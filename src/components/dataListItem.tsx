import React, { FC } from "react";
import './dataListItem.css';

interface DataListItemProps {
    title: string,
    value: string
}

const DataListItem: FC<DataListItemProps> = (dataListItemProps: DataListItemProps) => {
    const { title, value } = dataListItemProps;

    return(
      <li className={"dataItem"}>
          <p className={"dataItemTitle"}>{title}:</p>
          <p className={"dataItemValue"}>{value}</p>
      </li>
    );
}

export default DataListItem;
