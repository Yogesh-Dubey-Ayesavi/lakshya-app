// PaymentPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseClient, lakshya } from "../../utils/supabase_helper";
import useCart from "../../hooks/useCart";
import ValidatePayment from "../../components/ValidatePayment/ValidatePayment";

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
      const userId = await (await supabaseClient.auth.getUser()).data.user.id;

      const paymentEndpoint = `${
        import.meta.env.VITE_PAYMENT_URL
      }?user_id=${userId}`;
      const eventIds = cart.map((event) => event.id);
      console.log(paymentEndpoint);
      console.log(eventIds);

      try {
        // Send payment request
        const paymentRes = await lakshya.requestPayment(
          eventIds,
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
          />
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
