import { useRef, useEffect, useState } from "react";

function Paypal() {
  const paypal = useRef();
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  useEffect(() => {
    const loadPaypalScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AXUeVfe0x9vkUHMY0QS7XET9O54R_qDIEPetZHPf0mY9Eb2xXHs4YiPXRHQSZEZn4-JpVw7SQ-yuZRs5&currency=CAD";
      script.addEventListener("load", () => setPaypalLoaded(true));
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      loadPaypalScript();
    } else {
      setPaypalLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (paypalLoaded) {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "React Course",
                  amount: {
                    currency_code: "CAD",
                    value: 600.0,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }
  }, [paypalLoaded]);

  return (
    <div>
      {paypalLoaded ? (
        <div ref={paypal}></div>
      ) : (
        <div>Loading PayPal button...</div>
      )}
    </div>
  );
}

export default Paypal;
