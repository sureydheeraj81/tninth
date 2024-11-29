import React, { useState } from "react";
import "../admin/styles/profile.css";
import Sidebar from "./layout/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {

  const location = useLocation();
  const [formData, setFormData] = useState(location.state);
  const navigate = useNavigate();
  const handleEdit = () =>{
    navigate("/admin/update-profile",{state: formData})
  }
console.log(formData)
  return (
    <>
      <Sidebar>
        <div className="clear">
          <div className="section_heading">
            <h2 className="title_heading">Admin Profile</h2>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              style={{
                border:'1px solid #e1e1e1',
                padding: "20px 30px",
                borderRadius: "10px",
              }}
            >
              <div className="d-flex justify-content-center">
                <div className="admin-img-div text-center mb-3 position-relative">
                  <img src={`/${formData.profilePic}`} alt="Admin" className="admin-img" />
                </div>
              </div>
              <form  className="plan-form">
                {/* Name */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Name:</label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      readOnly
                      value={formData.full_name}
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
                      name="mobile"
                      maxLength="10"
                      value={formData.mobile}
                      readOnly
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
                      readOnly
                    />
                  </div>
                </div>

                {/* Designation */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">
                    Designation:
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="designation"
                      value={formData.designation}
                      readOnly
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="form-group row mt-2">
                  <label className="col-md-2 col-form-label">Gender:</label>
                  <div className="col-md-10">
                  <input
                      className="form-control"
                      type="text"
                      name="gender"
                      value={formData.gender}
                      readOnly
                    />
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
                  <button onClick={handleEdit} className="btn btn-primary">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Profile;
