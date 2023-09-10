import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';

const CarForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    transmission: 'manual',
    fuel: 'petrol',
    seats: '4',
    ratings: '0.00 (0)',
    kms: '',
    address: '',
    discount_price: '',
    original_price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   // Convert the image to a base64-encoded string
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setFormData({
  //       ...formData,
  //       image: reader.result,
  //     });
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleTransmissionChange = (value) => {
    setFormData({
      ...formData,
      transmission: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update formData
      formData.discount_price = (formData.original_price * 90) / 100;
      formData.seats = formData.seats + ' seats';
      formData.kms = formData.kms + 'k kms driven';

      // Send formData to your backend API, including the image as a base64-encoded string
      await axios.post('http://localhost:3003/newcar', formData);
      // Reset the form
      setFormData({
        name: '',
        transmission: 'manual',
        fuel: 'petrol',
        seats: '4',
        ratings: 0,
        kms: '',
        address: '',
        discount_price: '',
        original_price: '',
        image: null,
      });
      // Handle success or redirect the user
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <Box
      width="30%"
      border="1px solid #fff"
      borderRadius="8px"
      boxShadow="0 0 5px rgba(0, 0, 0, 0.2)"
      p="30px"
      margin="50px auto"
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Car Model</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="transmission" isRequired>
          <FormLabel>Car Type</FormLabel>
          <RadioGroup
            name="transmission"
            value={formData.transmission}
            onChange={handleTransmissionChange}
            flexDirection="column" // Align radio buttons vertically
            spacing={2} // Add spacing between radio buttons
          >
            <Radio value="Manual">Manual</Radio>
            {" "}
            <Radio value="Auto">Auto</Radio>
          </RadioGroup>
        </FormControl>

        <FormControl id="fuel" isRequired>
          <FormLabel>Fuel Type</FormLabel>
          <Select
            name="fuel"
            value={formData.fuel}
            onChange={handleChange}
          >
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="EV">EV</option>
            <option value="CNG">CNG</option>
          </Select>
        </FormControl>

        <FormControl id="seats" isRequired>
          <FormLabel>Number of Seats</FormLabel>
          <Select
            name="seats"
            value={formData.seats}
            onChange={handleChange}
          >
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="7">7</option>
          </Select>
        </FormControl>

        <FormControl id="kms" isRequired>
          <FormLabel>Kms Driven</FormLabel>
          <Input
            type="number"
            name="kms"
            value={formData.kms}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="address" isRequired>
          <FormLabel>Pickup Address</FormLabel>
          <Textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="original_price" isRequired>
          <FormLabel>Per Day Charge</FormLabel>
          <Input
            type="number"
            name="original_price"
            value={formData.original_price}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="image" isRequired>
          <FormLabel>Picture of Your Car</FormLabel>
          <Input
            type="file"
            name="image"
            accept="image/*"
            // onChange={handleImageUpload}
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" mt={6} bgColor="#52d168" color="white">
          Host Car
        </Button>
      </form>
    </Box>
  );
};

export default CarForm;
