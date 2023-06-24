// 手数料計算をする関数の型
type FeeStrategy = (amount: number) => number;

// クレジットカード決済の手数料計算ロジック
const creditCardStrategy: FeeStrategy = (amount) => {
  return amount * 0.01;
};

// paypalの手数料計算ロジック
const paypalStrategy: FeeStrategy = (amount) => {
  return amount * 0.01 + 50;
};

// 現金決済の手数料計算ロジック
const cashStrategy: FeeStrategy = (_amount) => {
  return 100;
};

/**
 * 合計金額を計算する
 * @param feeStrategy 手数料計算用のコールバック関数
 * @param amount 金額
 * @param discountRate 割引率
 * @returns 合計金額
 */
const paymentProcess = (
  feeStrategy: FeeStrategy,
  amount: number,
  discountRate: number
): number => {
  return (amount + feeStrategy(amount)) * (1 - discountRate);
};

console.log(paymentProcess(creditCardStrategy, 100, 0.1));
console.log(paymentProcess(paypalStrategy, 100, 0.1));
console.log(paymentProcess(cashStrategy, 100, 0.1));

/**
 * 合計金額を計算する（カリー化ver.）
 * @param feeStrategy 手数料計算用のコールバック関数
 * @param amount 金額
 * @returns 割引率を受け取って合計金額を返す関数
 */
const paymentProcessCurrying =
  (feeStrategy: FeeStrategy, amount: number) => (discountRate: number) =>
    (amount + feeStrategy(amount)) * (1 - discountRate);

const creditCardPayment = paymentProcessCurrying(creditCardStrategy, 100);
console.log(creditCardPayment(0.1)); // 割引率10%の場合
console.log(creditCardPayment(0)); // 割引なしの場合
