import React from "react";
import Stripe from "./Stripe";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const UserId = localStorage.getItem("userID");

  const location = useLocation();
  const course = location.state;
  console.log(course);
  const navigate = useNavigate();
  const handleSuccess = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/stripe/success`, {
        params: {
          courseId: course._id,
          userId: UserId,
        },
      });
      console.log(response);
    } catch (error) {
      console.error("Failed to process payment success:", error);
    }
  };

  return (
    <div>
      <Stripe course={course} onSuccess={handleSuccess} />
    </div>
  );
}

export default Checkout;
