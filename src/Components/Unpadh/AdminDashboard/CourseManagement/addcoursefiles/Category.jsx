import React, { useState } from "react";
import Select from "react-select";
import "../addcoursefiles/category.css";

function Category() {
  const [course, setCourse] = useState("");
  const [admin, setAdmin] = useState("");

  const options = [
    { value: "Business", label: "Business" },
    { value: "Finance & Accounting", label: "Finance & Accounting" },
    { value: "IT & Software", label: "IT & Software" },
    { value: "Office Productivity", label: "Office Productivity" },
    { value: "Personal Development", label: "Personal Development" },
    { value: "Marketing", label: "Marketing" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Photography & Video", label: "Photography & Video" },
    { value: "Health & Fitness", label: "Health & Fitness" },
    { value: "Music", label: "Music" },
    { value: "Teaching & Academics", label: "Teaching & Academics" },
  ];

  const tags = [
    { value: "Men's Clothing", label: "Men's Clothing" },
    { value: "Woman's Clothing", label: "Woman's Clothing" },
    { value: "Business", label: "Business" },
  ];

  const handleChange = (selectedOption) => {
    setCourse(selectedOption);
  };

  const adminChange = (selectedOption) => {
    setAdmin(selectedOption);
  };

  return (
    <div className="cat-main">
      <div className="nize">
        <h2>Organize</h2>
      </div>

      <div className="web">
        <h3>
          Category <span>Add new category</span>
        </h3>
      </div>

      <div style={{ margin: 20, width: 400 }}>
        <Select
          value={course}
          onChange={handleChange}
          options={options}
          placeholder="Select your course"
          styles={{
            placeholder: (baseStyle, state) => ({
              ...baseStyle,
              borderColor: "grey",
            }),
          }}
        />
      </div>

      <div className="web2">
        <h3>
          Tags <span>View all tags</span>
        </h3>
      </div>

      <div style={{ margin: 20, width: 400 }}>
        <Select
          value={admin}
          onChange={adminChange}
          options={tags}
          placeholder="Select your course"
          styles={{
            placeholder: (baseStyle, state) => ({
              ...baseStyle,
              borderColor: "grey",
            }),
          }}
        />
      </div>
    </div>
  );
}

export default Category;
