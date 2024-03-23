// client/src/components/Stripe.js
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51OuhiZGH9FVApQWYWWiE9L8vS9UqF9pO1ZdjAzZpQM4tZzuOg4fAilPJgnT8dhwfQXJC5RoRwmEoyFDcTs6ppLsl001TffZ3VT"
);

const UserId = localStorage.getItem("userID");

function Stripe({ course, onSuccess }) {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const paymentData = {
    courseId: course._id,
    userId: UserId,
    courseName: course.title,
    price: course.price,
  };

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/stripe/create-payment-intent",
          paymentData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data.clientSecret);
        if (response && response.data && response.data.clientSecret) {
          setClientSecret(response.data.clientSecret);
        } else {
          console.error("Client secret not found in server response");
        }
      } catch (error) {
        console.error("Error fetching payment intent:", error);
      }
    };

    fetchPayment();
  }, []);

  const handlePaymentSuccess = () => {
    setPaymentStatus("success");
    onSuccess();
  };

  const handlePaymentFailure = (errorMessage) => {
    setPaymentStatus("failure");
    console.error("Payment failed:", errorMessage);
  };

  return (
    <div className="stripe">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          clientSecret={clientSecret}
          onSuccess={handlePaymentSuccess}
          onFailure={handlePaymentFailure}
        />
      </Elements>
      {paymentStatus === "success" && <p>Payment successful!</p>}
      {paymentStatus === "failure" && <p>Payment failed. Please try again.</p>}
    </div>
  );
}

export default Stripe;
