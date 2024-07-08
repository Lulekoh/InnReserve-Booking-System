import React from 'react';

function PaymentForm() {
  const handlePayment = () => {
    // Integrate with payment gateway
  };

  return (
    <form onSubmit={handlePayment}>
      <input type="text" placeholder="Card Number" required />
      <button type="submit">Pay Now</button>
    </form>
  );
}

export default PaymentForm;
