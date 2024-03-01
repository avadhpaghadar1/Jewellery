import React, { useState } from "react";
// import Button from "@mui/material/Button";
import "./Add_data.css";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

// import axios from "axios";

const AddData = () => {
  const [addItem, setAddItem] = useState({
    designno: "",
    designname: "",
    goldweight: "",
    diamondweight: "",
    keret: "",
    diamond: 0,
    category: "",
  });
  const handleChange = (e) => {
    setAddItem({
      ...addItem,
      [e.target.name]: e.target.value,
    });
  };
  var handleSubmit = (e) => {
    e.preventDefault();
    console.log(addItem);
    setAddItem({
      designno: "",
      designname: "",
      goldweight: "",
      diamondweight: "",
      keret: "",
      diamond: 0,
      category: "",
    });
  };
  return (
    <>
      <div className="add_item_main">
        <form className="add_item_form" onSubmit={handleSubmit}>
          <table className="add_item_table">
            <h2>Add Items</h2>
            <tr>
              <td>
                <TextField
                  name="designno"
                  value={addItem.designno}
                  label="Design No."
                  type="text"
                  onChange={handleChange}
                />
              </td>
              <td>
                <TextField
                  name="designname"
                  value={addItem.designname}
                  label="Design Name."
                  type="text"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  name="goldweight"
                  value={addItem.goldweight}
                  label="Gold Weight"
                  type="text"
                  onChange={handleChange}
                />
              </td>
              <td>
                <TextField
                  name="diamondweight"
                  value={addItem.diamondweight}
                  label="Diamond Weight"
                  type="text"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  name="keret"
                  value={addItem.keret}
                  label="Keret"
                  type="text"
                  onChange={handleChange}
                />
              </td>
              <td>
                <TextField
                  name="diamond"
                  value={addItem.diamond}
                  label="Diamond"
                  type="number"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
                    value={addItem.category}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Manufacturer"}>Manufacturer</MenuItem>
                    <MenuItem value={"Customer"}>Customer</MenuItem>
                    <MenuItem value={"Wholeseller"}>Wholeseller</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>
            <tr>
              <td>
                <Input id="my-input" type="file" />
              </td>
            </tr>
            <Button type="submit">Submit</Button>
          </table>
        </form>
      </div>
    </>
  );
};
export default AddData;
