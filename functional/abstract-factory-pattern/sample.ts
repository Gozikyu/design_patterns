// 製品インターフェース
type Egg = {
  name: string;
  price: number;
  size: "small" | "medium" | "large";
};

type Beef = {
  name: string;
  price: number;
};

// 抽象ファクトリインターフェース
type AbstractFactory = {
  createEgg: () => Egg;
  createBeef: () => Beef;
};

// 具体的な製品
const normalEgg: Egg = {
  name: "normal egg",
  price: 100,
  size: "medium",
};

const largeEgg: Egg = {
  name: "large egg",
  price: 150,
  size: "large",
};

const normalBeef: Beef = {
  name: "normal egg",
  price: 1000,
};

const specialBeef: Beef = {
  name: "special egg",
  price: 1500,
};

// 具体的なファクトリ
const concreteFactory1: AbstractFactory = {
  createEgg: () => normalEgg,
  createBeef: () => normalBeef,
};

const concreteFactory2: AbstractFactory = {
  createEgg: () => largeEgg,
  createBeef: () => specialBeef,
};

// クライアントコード
const client = (factory: AbstractFactory) => {
  const egg = factory.createEgg();
  const beef = factory.createBeef();

  console.log(egg.name);
  console.log(beef.name);
};

client(concreteFactory1);
client(concreteFactory2);
