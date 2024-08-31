import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
const url='http://localhost:8080/api/v1';
  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/products`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Create new item
  const handleCreate = async () => {
    try {
      await axios.post(`${url}/product`, formData);
      setFormData(
        { name: '', email: '' }
      )
      fetchData();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  // Update existing item
  const handleUpdate = async (id) => {
    try {
      await axios.put(`${url}/products/${id}`, formData);
      fetchData();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // Delete an item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/products/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Operations with Local JSON</h1>

      <form>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleCreate}>
          Create
        </button>
      </form>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;