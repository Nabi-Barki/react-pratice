import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';
import {
  ColourOption,
  colourOptions,
  FlavourOption,
  GroupedOption,
  groupedOptions,
} from '../data';

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>

);

const suggestions = [
  { label: "Apple" },
  { label: "Banana" },
  { label: "Cherry" },
  { label: "Durian" },
  { label: "Elderberry" },
  { label: "Fig" },
  { label: "Grape" },
  { label: "Honeydew" },
  { label: "Iceberg lettuce" },
  { label: "Jackfruit" },
];

const SearchTextField = () => {
  const [inputValue, setInputValue] = useState("");
  //datePacker state
  const [startDate, setStartDate] = useState(new Date());

  const handleInputChange = (event, value) => {
    setInputValue(value);
  };

  const filteredOptions = suggestions.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div>
        <Autocomplete
          options={filteredOptions}
          getOptionLabel={(option) => option.label}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          renderInput={(params) => (
            <TextField {...params} label="Enter text" variant="standard" />
          )}
          open={inputValue.length >= 2}
        />
      </div>
      <div className="mt-5">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
      <div>
        <Select<ColourOption | FlavourOption, false, GroupedOption>
        defaultValue={colourOptions[1]}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
  />
      </div>


    </>
  );
};

export default SearchTextField;
