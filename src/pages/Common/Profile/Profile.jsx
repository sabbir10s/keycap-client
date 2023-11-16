import { signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import InputField from "../../../shared/InputField/InputField";
import { useAuthContext } from "../../../context/AuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const email = user?.email;

  const {
    isLoading,
    data: userData,
    refetch,
  } = useQuery(["user", email], () =>
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("access-token");
        navigate("/");
      }
      return res.json();
    })
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    streetAddress: "",
    city: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfile = (event) => {
    event.preventDefault();
    const userInfo = {
      email: formData.email,
      name: formData.name,
      mobile: formData.mobile,
      streetAddress: formData.streetAddress,
      city: formData.city,
      zip: formData.zip,
    };

    console.log(userInfo);

    const url = `http://localhost:5000/user/${user.email}`;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.acknowledged) {
          toast.success("Profile Update");
          refetch();
        } else {
          toast.secondary("Failed to update");
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  const { name, mobile, streetAddress, city, zip } = userData;

  return (
    <div className="bg-white border-[1px] border-gray-200/80">
      <form onSubmit={handleProfile}>
        <div className="flex items-center justify-between p-4">
          <h2 className=" font-semibold"> Menage Your Profile</h2>

          <input
            className="bg-primary-600 border border-primary-600 text-gray-100 px-4 py-1 rounded cursor-pointer"
            type="submit"
            value="Save Change"
          />
        </div>
        <div className="border-b"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-white rounded-xl p-5">
            <h3 className="text-xl mb-5 font-semibold">
              1. Contact Information
            </h3>
            <div className=" space-y-4">
              <InputField
                onChange={handleInputChange}
                label="Name"
                type="text"
                placeholder="Name"
                name="name"
                required={true}
                value={name}
                defaultValue={name}
              />
              <InputField
                onChange={handleInputChange}
                label="Mobile"
                type="number"
                placeholder="Mobile"
                name="mobile"
                required={true}
                value={mobile}
                defaultValue={mobile}
              />
              <InputField
                onChange={handleInputChange}
                label="Email"
                type="email"
                placeholder="Email"
                name="email"
                required={true}
                defaultValue={user.email}
                value={user.email}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl p-5">
            <h3 className="text-xl mb-5 font-semibold">2. Shipping Address</h3>
            <div className=" space-y-4">
              <InputField
                onChange={handleInputChange}
                label="Street Address"
                type="text"
                placeholder="Street Address"
                name="streetAddress"
                required={true}
                defaultValue={streetAddress}
                value={streetAddress}
              />

              <InputField
                onChange={handleInputChange}
                label="City"
                type="text"
                placeholder="City"
                name="city"
                required={true}
                defaultValue={city}
                value={city}
              />
              <InputField
                onChange={handleInputChange}
                label="Zip Code"
                type="number"
                placeholder="Zip Code"
                name="zip"
                required={true}
                defaultValue={zip}
                value={zip}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
