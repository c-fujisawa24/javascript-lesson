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
function sayHello() {
  console.log("HELLO");
}
sayHello();
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


// Q1標準組み込みオブジェクト
let round = Math.round(7.85);
console.log('round => ', round);

// Q2コールバック関数
var alertmsg = function(){
  alert("Hello Word!")
}
setTimeout(alertmsg,3000);
    // setTimeout(関数,ミリ秒);

// Q3if
let num = '10';

if(num > 0){
  console.log('num is greater than 0');
}else if(num < 0){
  console.log('num is less than 0');
}else if(num === 0){
  console.log('num is 0');
}

// Q4for
let numbers = [];

for(let i = 0;i < 101;i++){
  numbers.push(i);
  console.log(i);
}

// Q5for×if
let mixed = [4, '2', 5, '8', '9', 0, 1];
// 文字列string('')か数値numberか

for(let i=0;i<7;i++){
  if(typeof mixed[i] !== 'number'){
    console.log('not number');
  }else if(mixed[i] % 2 === 0){
  console.log('even');
}else if(mixed[i] % 2 === 1){
  console.log('odd');
}
}
// 文字列や数値などの複数の種類を判別するときは「typeof」で条件を付ける。