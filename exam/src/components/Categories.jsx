import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { categories } from '../data';
function Categories() {
    const initialCategory = {
        id: null,
        name: "",
    };

    const [selectedCategory, setSelectedCategory, setCategories] = useState(initialCategory);

    const columns = [
        { field: "name", headerName: "Name", flex: 1 },
    ];

    const handleRowClick = (params) => {
        const selectedCategory = categories.find(
            (category) => category.id === params.id
        );
        setSelectedCategory(selectedCategory);
    };

    const handleAddCategory = () => {
        const newCategory = { ...selectedCategory, id: Date.now() };
        setCategories([...categories, newCategory]);
        setSelectedCategory(initialCategory);
    };

    const handleUpdateCategory = () => {
        if (selectedCategory) {
            const updatedCategories = categories.map((category) =>
                category.id === selectedCategory.id ? selectedCategory : category
            );
            setCategories(updatedCategories);
            setSelectedCategory(null);
        }
    };

    const handleDeleteCategory = () => {
        if (selectedCategory) {
            const updatedCategories = categories.filter(
                (category) => category.id !== selectedCategory.id
            );
            setCategories(updatedCategories);
            setSelectedCategory(null);
        }
    };


  return (
      <React.Fragment>

          <h3> Categories page </h3>
         
          <div>
              <div style={{ marginBottom: "16px" }}>
                  <TextField
                      label="Name"
                      value={selectedCategory.name}
                      onChange={(e) =>
                          setSelectedCategory({ ...selectedCategory, name: e.target.value })
                      }
                      fullWidth
                      color="primary"
                      focused
                      InputProps={{
                          style: { color: 'white' }
                      }}
                  />
              </div>
              <div>
                  <Button variant="contained" onClick={handleAddCategory}>
                      Add Category
                  </Button>
                  <Button variant="contained" onClick={handleUpdateCategory}>
                      Update Category
                  </Button>
                  <Button variant="contained" onClick={handleDeleteCategory}>
                      Delete Category
                  </Button>
              </div>
              <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                      rows={categories}
                      columns={columns}
                      pageSize={5}
                      onRowClick={handleRowClick}
                      sx={{ color: 'white' } }
                  />
              </div>
          </div>

      </React.Fragment>
  );
}

export default Categories;