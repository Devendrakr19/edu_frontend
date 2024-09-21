import React, { useState } from "react";
import "./Businessform.scss";
import Select from "react-select";

function Businessform() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const options = [
    { value: "UNITED STATE", label: "United States" },
    { value: "INDIA", label: "India" },
    { value: "BRAZIL", label: "Brazil" },
    { value: "UNITED KINGDOM", label: "United Kingdom" },
    { value: "GERMANY", label: "Germany" },
    { value: "AFGHANISTAN", label: "Afghanistan" },
    { value: "ALAND ISLANDS", label: "Aland Islands" },
    { value: "ALBANIA", label: "Albania" },
    { value: "ALGERIA", label: "Algeria" },
    { value: "ANDORRA", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Anguilla", label: "Anguilla" },
    { value: "Antarctica", label: "Antarctica" },
    { value: "Antigua and Barbuds", label: "Antigua and Barbuds" },
    { value: "Argentina", label: "Argentina" },
    { value: "Aruba", label: "Aruba" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bonaire", label: "Bonaire" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Bouvet Island", label: "Bouvet Island" },
    {
      value: "Beitish Indian Ocean Territory",
      label: "Beitish Indian Ocean Territory",
    },
    { value: "Brunei Darussalam", label: "Brunei Darussalam" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Cape Verde", label: "Cape Verde" },
    { value: "Cayman Islands", label: "Cayman Islands" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chand", label: "Chand" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
  ];

  const sizes = [
    {
      value: "I'm a contractor/ freelancer",
      label: "I'm a contractor/ freelancer",
    },
    { value: "1-199", label: "1-199" },
    { value: "200-999", label: "200-999" },
    { value: "1,000-5,000", label: "1,000-5,000" },
    { value: "5,001+", label: "5,001+" },
  ];

  const numbers = [
    { value: "2,001+", label: "2,001+" },
    { value: "201-2,000", label: "201-2,000" },
    { value: "21-200", label: "21-200" },
    { value: "11-20", label: "11-20" },
    { value: "2-10", label: "2-10" },
    { value: "Just Myself", label: "Just Myself" },
  ];

  const jobs = [
    { value: "C-Level", label: "C-level" },
    { value: "VP", label: "VP" },
    { value: "Director/Sir", label: "Director/Sir" },
    { value: "Manager", label: "Manager" },
    { value: "Individual Contributor", label: "Individual Contributor" },
  ];

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handleSizeChange = (selectedOption) => {
    setSelectedSize(selectedOption);
  };

  const handleNumberChange = (selectedOption) => {
    setSelectedNumber(selectedOption);
  };

  const handleJobChange = (selectedOption) => {
    setSelectedJob(selectedOption);
  };
  return (
    <div className="formclas">
      <form>
        <div className="contanier-main">
          <div className="container">
            <input type="text" placeholder="First Name*" id="firstName" />
            <input type="text" placeholder="Last Name*" id="lastName" />
          </div>
          <div className="email">
            <input type="email" placeholder="Work Email*" id="email" />
          </div>
          <div className="email">
            <input type="tel" placeholder="Phone Number*" id="phoneNumber" />
          </div>
          <div className="email">
            <Select
              value={selectedLocation}
              onChange={handleLocationChange}
              options={options}
              placeholder="Where are you located*"
              isSearchable
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                }),
              }}
            />
          </div>
          <div className="email">
            <input type="text" placeholder="Company Name*" id="companyName" />
          </div>
          <div className="container">
            <Select
              value={selectedSize}
              onChange={handleSizeChange}
              options={sizes}
              placeholder="Company Size*"
              isSearchable
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  height: 50,

                  display: "flex",
                  alignItems: "center",
                }),
              }}
            />
            <Select
              value={selectedNumber}
              onChange={handleNumberChange}
              options={numbers}
              placeholder="Number of Learners"
              isSearchable
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  height: 50,

                  display: "flex",
                  alignItems: "center",
                }),
              }}
            />
          </div>
          <div className="container">
            <input type="text" placeholder="Job Title*" id="jobTitle" />
            <Select
              value={selectedJob}
              onChange={handleJobChange}
              options={jobs}
              placeholder="Job Level*"
              isSearchable
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  height: 50,

                  display: "flex",
                  alignItems: "center",
                }),
              }}
            />
          </div>
          <div className="email">
            <input
              type="text"
              placeholder="What are your organization’s training needs? (Optional)"
              id="trainingNeeds"
            />
          </div>
          <button type="submit" className="business_btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Businessform;
