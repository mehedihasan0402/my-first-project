import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    const area = event.target.area.value;
    const rent = event.target.rent.value;
    navigate("/AllProperty", {
      state: { data: { city: city, area: area, rent: rent } },
    });
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="hero-title">
        <p>Rent a Property Easily</p>
        <span>Rent your desired property from us</span>
      </div>
      <div className="hero-property">
        <div className="search-property">
          <div className="form">
            <Form
              onSubmit={handleSearch}
              className="d-flex row justify-content-between align-items-center"
            >
              <Form.Group className="col-md-4 col-12 col-lg-4 search-category">
                <Form.Label className="float-start filter-label">
                  City
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="city"
                  required
                >
                  <option value="">Choose City</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Mymensingh">Mymensingh</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-md-3 col-6 col-lg-3 search-category">
                <Form.Label className="float-start filter-label">
                  Area
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="area"
                  required
                >
                  <option value="">Choose Area</option>
                  <option value="Dhanmondi">Dhanmondi</option>
                  <option value="Mohammadpur">Mohammadpur</option>
                  <option value="Mirpur">Mirpur</option>
                  <option value="Uttara">Uttara</option>
                  <option value="Bashundhara">Bashundhara</option>
                  <option value="Badda">Badda</option>
                  <option value="Khilkhet">Khilkhet</option>
                  <option value="Farmgate">Farmgate</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-md-3 col-6 col-lg-3 search-category">
                <Form.Label className="float-start filter-label">
                  Category
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="rent"
                  required
                >
                  <option value="">Choose</option>
                  <option value="Commercial Space">Commercial Space</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Apartment Building">Apartment Building</option>
                  <option value="Flat Rent">Flat Rent</option>
                  <option value="Hostel Rent">Hostel Rent</option>
                  <option value="Only For Boys">Only For Boys</option>
                  <option value="Only For Girls">Only For Girls</option>
                  <option value="For Family">For Family</option>
                  <option value="Community Center">Community Center</option>
                  <option value="Shop & Restaurant Space">
                    Shop & Restaurant Space
                  </option>
                </Form.Select>
              </Form.Group>
              <div className="col-md-2 col-12 col-lg-2 search-category mt-3 mt-md-0 mt-lg-0">
                <button type="submit" className="browse-property">
                  Browse Properties
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
