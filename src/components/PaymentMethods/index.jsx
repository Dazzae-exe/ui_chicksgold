import React from 'react';
import '../../styles/PaymentMethods/index.css';
import PAYMENT_METHODS from '../../utils/payment-methods';

function PaymentMethods() {
  return (
    <div className="payment-methods">
      <div className="gradient-line"></div>
      {PAYMENT_METHODS.map((method) => (
        <img key={method.id} src={method.image} alt={method.name} />
      ))}
      <span className="more-methods">and 50+ more</span>
    </div>
  );
}

export default PaymentMethods;