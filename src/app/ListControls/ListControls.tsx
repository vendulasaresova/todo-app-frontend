import { Box } from '@mui/material';
import React, { FC } from 'react';
import Dropdown from '../../components/Dropdown';
import Spacer from '../../components/Spacer';
import { filteringOptions } from '../../core/constants/filteringOptions';
import {
  sortingOptions,
  sortingTypes,
} from '../../core/constants/sortingOptions';

interface IListControlsProps {
  sortingValue: string;
  sortingType: string;
  filteringValue: string;
  handleSortingValueChange: (value: string) => void;
  handleSortingTypeChange: (value: string) => void;
  handleFilteringValueChange: (value: string) => void;
}

export const ListControls: FC<IListControlsProps> = ({
  sortingValue,
  sortingType,
  filteringValue,
  handleSortingValueChange,
  handleSortingTypeChange,
  handleFilteringValueChange,
}) => (
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="flex-end"
  >
    <Dropdown
      id="sortValue"
      label="Sort by ..."
      options={sortingOptions}
      value={sortingValue}
      handleChange={(event) => handleSortingValueChange(event.target.value)}
    />
    <Spacer size="sm" direction="horizontal" />
    <Dropdown
      id="sortType"
      label="Direction"
      options={sortingTypes}
      value={sortingType}
      handleChange={(event) => handleSortingTypeChange(event.target.value)}
    />
    <Spacer size="sm" direction="horizontal" />
    <Dropdown
      id="filter"
      label="Filter"
      options={filteringOptions}
      value={filteringValue}
      handleChange={(event) => handleFilteringValueChange(event.target.value)}
    />
  </Box>
);
