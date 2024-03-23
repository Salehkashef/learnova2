// client/src/components/CheckoutForm.jsx
import React, { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import style from "./Checkoutbox.module.css";

export default function CheckoutForm({ clientSecret, onSuccess, onFailure }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        onFailure(error.message);
      } else {
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

        if (result.error) {
          onFailure(result.error.message);
        } else {
          onSuccess(); 
        }
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
      onFailure(
        "An error occurred while processing your payment. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className={`card ${style.card} w-50 m-auto p-6 mt-4 `}>
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className={`form-group ${style.formGroup}`}>
            <label htmlFor="Name" className="form-label">
              Name on Card
            </label>
            <input type="text" className="form-control" id="Name" />
          </div>
          <div className={`form-group ${style.formGroup}`}>
            <label htmlFor="number" className="form-label">
              Card Number
            </label>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <div className="row">
            <div className="col-sm-6  mb-3 mb-sm-0 ">
              <div className="col-sm-6  mb-3 mb-sm-0 ">
                {/* <div className={`form-group ${style.formGroup}`}>
                  <label htmlFor="expiry" className="form-label">
                    Expiration Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiry"
                    placeholder="MM/YY"
                  />
                </div> */}
              </div>
            </div>
            <div className="col-sm-4  mb-3 mb-sm-0">
              {/* <div className={`form-group ${style.formGroup}`}>
                <label htmlFor="cvc" className="form-label">
                  CVC
                </label>
                <input type="text" className="form-control" id="cvc" />
              </div> */}
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-check-input mx-3"
              type="checkbox"
              id="check"
            />
            <label htmlFor="check">
              Save my information for faster checkout
            </label>
          </div>

          <button
            className={`mt-4 mb-4 ${style.btn}`}
            type="submit"
            disabled={!stripe || isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Confirm Payment"}
          </button>
        </form>
      </div>
    </div>
  );
}
