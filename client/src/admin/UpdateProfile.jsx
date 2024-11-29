import { useState, useEffect } from 'react';
import Sidebar from './layout/Sidebar';
import { useLocation } from 'react-router-dom';

const UpdateProfile = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    sno: 0,
    name: "",
    mobile_no: "",
    email: "",
    designation: "",
    gender: "male",
    username: "",
    usertype: "",
  });

  useEffect(() => {
    if (location.state) {
      setFormData({
        sno: location.state.sno,
        name: location.state.name || "",
        mobile_no: location.state.mobile_no || "",
        email: location.state.email || "",
        designation: location.state.designation || "",
        gender: location.state.gender || "male", 
        username: location.state.username || "",
        usertype: location.state.usertype || "",
      });
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., sending the updated data to the server)
    console.log('Profile updated:', formData);
  };

  return (
    <>
      <Sidebar>
        <div className="clear">
          <div className="section_heading">
            <h2 className="title_heading">Update Profile</h2>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              style={{
                border: '1px solid #e1e1e1',
                padding: "20px 30px",
                borderRadius: "10px",
              }}
            >
              <div className="d-flex justify-content-center">
                <div className="admin-img-div text-center mb-3 position-relative">
                  <img src={profileImage} alt="Admin" className="admin-img" />
                  <label htmlFor="image-upload" className="image-upload-label">
                    <i className="fa-solid fa-camera camera-icon"></i>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="image-upload-input"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="plan-form">
                {/* Name */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Name:</label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Mobile:</label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="mobile_no"
                      placeholder="Enter Mobile No for OTP"
                      maxLength="10"
                      value={formData.mobile_no}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Email:</label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Designation */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Designation:</label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Gender:</label>
                  <div className="col-md-10">
                    <select
                      name="gender"
                      className="form-control"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Username (Readonly) */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Username:</label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={formData.username}
                      readOnly
                    />
                  </div>
                </div>

                {/* Usertype (Readonly) */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Usertype:</label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="usertype"
                      value={formData.usertype}
                      readOnly
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="mt-4 text-center">
                  <button type="submit" className="btn btn-success">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              {/* Add additional content here if necessary */}
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default UpdateProfile;
