import React from "react";
import BasicTable from "./components/table";
import SearchAppBar from "./components/searchbarblue";
import DataTable from "./components/tabledata";
import EnhancedTable from "./components/tablesort";
import CollapsibleTable from "./components/tablecollapse";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { color } from "@mui/system";

function App() {
  const [value, setValue] = useState("basic");

  function handleChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function RadioButtonsGroup() {
    return (
      <div
        style={{
          border: 5,
          borderColor: "primary.main",
          backgroundColor: "#c4c4c4",
          maxWidth: "15.5em",
        }}
      >
        <FormControl component="fieldset" onChange={handleChange}>
          <FormLabel component="legend">
            <span
              style={{
                backgroundColor: "#7a7a7a",
                color: "#fff",
                padding: "0.85em",
                fontWeight: "700",
              }}
            >
              CUSTOMIZE TABLE STYLES
            </span>
          </FormLabel>
          <RadioGroup
            aria-label="Table Types"
            defaultValue="basic"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="basic"
              control={<Radio />}
              label="Basic Table"
            />
            <FormControlLabel
              value="data"
              control={<Radio />}
              label="Data Table"
            />
            <FormControlLabel
              value="collapsible"
              control={<Radio />}
              label="Collapsible Table"
            />
            <FormControlLabel
              value="sorting"
              control={<Radio />}
              label="Sorting Table"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div>{RadioButtonsGroup()}</div>
      <Typography variant="h4" component="div" padding="90" margin="90">
        TABLE NAME
      </Typography>
      <div>{SearchAppBar()}</div>
      <div style={{ padding: 10 }}>
        {value === "basic" && BasicTable()}
        {value === "data" && DataTable()}
        {value === "sorting" && EnhancedTable()}
        {value === "collapsible" && CollapsibleTable()}
      </div>
    </React.Fragment>
  );
}

export default App;
