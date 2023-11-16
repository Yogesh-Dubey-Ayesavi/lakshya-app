// PaymentPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ValidatePayment from "../../components/ValidatePayment/ValidatePayment";
import useCart from "../../hooks/useCart";
import { lakshya, supabaseClient } from "../../utils/supabase_helper";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [paymentResponse, setPaymentResponse] = useState();

  useEffect(() => {
    const handlePayment = async () => {
      if (cart.length === 0) {
        console.error("Cart is empty. Redirecting to home page.");
        navigate("/");
        return;
      }
      const userId =  (await supabaseClient.auth.getUser()).data.user.id;

      const paymentEndpoint = `${
        import.meta.env.VITE_PAYMENT_URL
      }?user_id=${userId}`;

      try {
        // Send payment request
        const paymentRes = await lakshya.requestPayment(
          cart,
          {},
          paymentEndpoint
        );
        console.log("Payment Response: ", paymentRes);
        setPaymentResponse(paymentRes);
          // console.log(URL.createObjectURL(paymentRes.qr_codes[0]))

        // Clear the cart after successful payment
        // clearCart();
      } catch (error) {
        console.log("Payment Error:");
        // Handle payment error (e.g., show an error message to the user)
      } finally {
        setLoading(false);
      }
    };

    // Trigger the payment request when the component mounts
    handlePayment();
  }, [cart, clearCart, navigate]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ValidatePayment
            img={paymentResponse.qr_codes[0]}
            link={paymentResponse.payment_links[0]}
            amt={paymentResponse.amount}
            cart={cart}
            requestId = {paymentResponse.request_id}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
