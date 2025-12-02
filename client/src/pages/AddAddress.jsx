import React, { useState } from "react";
import { assets } from "../assets/assets";

//  Correct Input Field Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-3 py-2.5 border border-gray-400 rounded outline-none text-gray-700 
               focus:border-[#4fbf8b] transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  //  Correct handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //  Submit Handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Address Submitted: ", address);
  };

  return (
    <div className="mt-16 pb-16 px-4">
      <p className="text-3xl text-gray-700 font-semibold">
        Add Shipping{" "}
        <span className="text-[#4fbf8b]">Address</span>
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        {/* LEFT SIDE FORM */}
        <div className="flex-1 max-w-lg">
          <form
            className="space-y-4 text-sm mt-6"
            onSubmit={onSubmitHandler}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>

            {/* Email */}
            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Email"
            />

            {/* Street Address */}
            <InputField
              handleChange={handleChange}
              address={address}
              name="street"
              type="text"
              placeholder="Street Address"
            />

            {/* City + State */}
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>

            {/* Zip + Country */}
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipcode"
                type="text"
                placeholder="Zip Code"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>

            {/* Phone */}
            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="tel"
              placeholder="Phone Number"
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-[#4fbf8b] w-full text-white py-2.5 rounded-lg hover:bg-[#3fae7b] transition"
            >
              Save Address
            </button>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <img
          src={assets.add_address_iamge}
          alt="Add Address"
          className="w-80 md:mr-16 mb-10 md:mb-0"
        />
      </div>
    </div>
  );
};

export default AddAddress;
