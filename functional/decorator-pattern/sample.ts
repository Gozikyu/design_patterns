type Beverage = () => string;

// ベースのコーヒー
function baseCoffee(description: string, cost: number): Beverage {
  return () => `${description} - $${cost.toFixed(2)}`;
}

// コーヒーにミルクを追加するデコレーター
function addMilk(beverage: Beverage): Beverage {
  return () => `${beverage()} + Milk`;
}

// コーヒーにモカを追加するデコレーター
function addMocha(beverage: Beverage): Beverage {
  return () => `${beverage()} + Mocha`;
}

// コーヒーに豆乳を追加するデコレーター
function addSoy(beverage: Beverage): Beverage {
  return () => `${beverage()} + Soy`;
}

// コーヒーにホイップを追加するデコレーター
function addWhip(beverage: Beverage): Beverage {
  return () => `${beverage()} + Whip`;
}

const darkRoast = baseCoffee("Dark Roast Coffee", 2.99);
const darkRoastWithMilkAndMocha = addMocha(addMilk(darkRoast));
console.log(darkRoast()); // 出力結果: Dark Roast Coffee - $2.99
console.log(darkRoastWithMilkAndMocha()); // 出力結果: Dark Roast Coffee - $2.99 + Milk + Mocha

const espresso = baseCoffee("Espresso", 1.99);
const espressoWithDoubleMochaAndWhip = addWhip(addMocha(addMocha(espresso)));
console.log(espressoWithDoubleMochaAndWhip()); // 出力結果: Espresso - $1.99 + Mocha + Mocha + Whip

/**
 * メモ
 * - 関数をオブジェクト（一種のデータ）として捉えている
 * - 高階関数を使用
 * - ベースの関数とデコレーターの関数の戻り値の型が同じなので、デコレーターを何重にもラップできる
 */
