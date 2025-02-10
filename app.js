// Q1変数
let nickname = "ちーちゃん";
let age = "21";
let greet =
  "私のニックネームは" + nickname + "です。" + "年齢は" + age + "歳です。";
console.log(greet);

// Q2配列
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
// console.log('languages[0] =>', languages[0]);
// console.log('language[3] =>', languages[3]);
let templateText = `私の好きな言語${languages[0]}です。
${languages[3]} を勉強してみたいです。`;
console.log(templateText);

// Q3オブジェクト
let user = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card",
};
console.log(user.age);

// Q4配列×オブジェクト
let playerList = [
  {
    name: "John",
    age: 26,
    favorites: ["Card Game", "Basket Ball", "Programming"],
  },
  {
    name: "Bob",
    age: 33,
    favorites: ["Tinder", "The Legend of Zelda"],
  },
  {
    name: "Michael",
    age: 22,
    favorites: ["Football", "Smash Bros."],
  },
];
console.log(playerList[1].favorites[1]);

// Q5四則演算
let averages = [playerList[0].age + playerList[1].age + playerList[2].age];
console.log(averages / 3);

// Q6関数
function sayHALLO() {
  console.log("HELLO");
}
sayHALLO();
let sayWorld = "World";
console.log(sayWorld);

// Q7メソッド
user.birthday = "2000-09-27";
console.log(user.birthday);
user.sayHello = "Hello!";
console.log(user.sayHello);

// Q8引数
let calc = {};

calc.add = function (x, y) {
  return x + y;
};
console.log(calc.add(3, 4));
calc.subtract = function (x, y) {
  return x - y;
};
console.log(calc.subtract(15, 5));
calc.multiply = function (x, y) {
  return x * y;
};
console.log(calc.multiply(7, 7));
calc.divide = function (x, y) {
  return x / y;
};
console.log(calc.divide(25, 5));

// Q9返り値
let bigNum = 5;
let smallNum = 3;

console.log("5を3で割った余りは" + (bigNum % smallNum) + "です。");

// Q10スコープ

// 関数がスコープになっていて「function foo」の関数に参照されていない。
