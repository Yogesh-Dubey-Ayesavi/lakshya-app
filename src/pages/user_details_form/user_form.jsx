import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../../utils/supabase_helper";
import useAuth from "../../hooks/useAuth";
import "./user_form.css"; // Import the CSS file

const MyForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    semester: "",
    email: "",
  });

  useEffect(() => {
    setFormData({
      name: user.user_metadata.full_name,
      email: user.user_metadata.email,
      semester: user.user_metadata?.sem ?? "",
      phoneNumber: user.user_metadata?.phone_number ?? "",
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await supabaseClient.auth.updateUser({
      data: {
        phone_number: formData.phoneNumber,
        sem: formData.semester,
      },
    });

    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit} className="my-form">
        <div id="form-body">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Semester:
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Semester
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
