import React, { useEffect, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { storage } from './firebase'; // Import the Firebase storage instance

export default function Form() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    rating: '',
    runtime: '',
    director: '',
    imgUrl: ''
  });
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState('');
  const url = 'https://db-50022068137.development.catalystappsail.in/api/v1';

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

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      handleUpload(e.target.files[0]); // Automatically call handleUpload with the selected file
    }
  };

  const handleUpload = (image) => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress function to show upload progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error('Error uploading file:', error);
      },
      () => {
        // Handle successful uploads and get download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setDownloadUrl(downloadURL);
          setFormData((prevData) => ({ ...prevData, imgUrl: downloadURL })); // Set the download URL in formData
        });
      }
    );
  };

  // Create new item
  const handleCreate = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Check if any field in formData is empty
    if (Object.values(formData).some(value => value === '')) {
      alert('Please fill in all fields before submitting.');
      return;
    }
  
    try {
      await axios.post(`${url}/product`, formData);
      setFormData({
        title: '',
        year: '',
        rating: '',
        runtime: '',
        director: '',
        imgUrl: ''
      });
      setProgress(0); // Reset progress
      setDownloadUrl(''); // Reset image URL
      setImage(null); // Reset image selection
      fetchData();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };
  

  return (
    <>
      <h1 className='text-light text-center'>Add a Data</h1>
      <form className='text-light px-5' onSubmit={handleCreate}>
        <div className="form-group mb-3">
          <label>Title:</label>
          <input
            name='title'
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group mb-3">
          <label>Year:</label>
          <input
            name='year'
            type="number"
            value={formData.year}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter Year"
          />
        </div>
        <div className="form-group mb-3">
          <label>Rating:</label>
          <input
            name='rating'
            type="number"
            value={formData.rating}
            onChange={handleInputChange}
            step="0.1"
            className="form-control"
            placeholder="Enter Rating"
          />
        </div>
        <div className="form-group mb-3">
          <label>Runtime (minutes):</label>
          <input
            name='runtime'
            type="number"
            value={formData.runtime}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter Runtime (minutes)"
          />
        </div>
        <div className="form-group mb-3">
          <label>Director:</label>
          <input
            name='director'
            type="text"
            value={formData.director}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter Director"
          />
        </div>

        <div className="form-group mb-3">
          <label>Image Upload: </label>
          <input
            className='form-control'
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <div>
            <progress value={progress} max="100" />
            {progress > 0 && <span>{progress.toFixed(2)}% done</span>}
          </div>
          {downloadUrl && (
            <div>
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                View Uploaded Image
              </a>
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
