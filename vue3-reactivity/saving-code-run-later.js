let product = { price: 5, quantity: 2 };
let total = 0;
let dep = new Set();

// 一旦保存
function track() {
  dep.add(effect);
}

// 処理実行
function trigger() {
  dep.forEach((effect) => effect());
}

// ロジック
let effect = () => {
  total = product.price * product.quantity;
};

track();
effect();

product.price = 20;
console.log(total);

trigger();
console.log(total);
