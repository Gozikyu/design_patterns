type PaymentStrategy = (amount: number) => void;

const creditCardStrategy: PaymentStrategy = (amount) => {
  console.log(`Paying $${amount} with a credit card.`);
  // クレジットカードの支払い処理
};

const paypalStrategy: PaymentStrategy = (amount) => {
  console.log(`Paying $${amount} with PayPal.`);
  // PayPalの支払い処理
};

const cashStrategy: PaymentStrategy = (amount) => {
  console.log(`Paying $${amount} in cash.`);
  // 現金支払いの処理
};

function processPayment(strategy: PaymentStrategy, amount: number): void {
  strategy(amount);
}

const paymentAmount = 100;

processPayment(creditCardStrategy, paymentAmount);
// Output: Paying $100 with a credit card.

processPayment(paypalStrategy, paymentAmount);
// Output: Paying $100 with PayPal.

processPayment(cashStrategy, paymentAmount);
// Output: Paying $100 in cash.
