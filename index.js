/////////////// 1 - masala ///////////////

// function MyObject(name) {
//   this.name = name;
// }
// MyObject.prototype.arr = [1, 2, 3];
// let obj = new MyObject();
// console.log(obj.arr);

/////////////// 2 - masala ///////////////

// String.prototype.myReverse = function () {
//   let arr = str.split("");
//   let result = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result += arr[i];
//   }
//   return result;
// };
// let str = "salom";
// console.log(str.myReverse());

/////////////// 3 - masala ///////////////

// function Student(name, university) {
//   this.name = name;
//   this.university = university;
// }
// Student.prototype.greet = function () {
//   console.log(`Mening ismim ${this.name} va ${this.university} talabasiman!`);
// };
// let student1 = new Student("Munisbek", "UrDU");
// student1.greet();

/////////////// 4 - masala ///////////////

// function Football(name, age, club) {
//   (this.name = name), (this.age = age), (this.club = club);
// }

// Football.prototype.add = function () {
//   console.log(
//     `${this.name} ${this.age} yoshda va hozirda ${this.club} clubida o'ynaydi!`
//   );
// };

// let obj1 = new Football("Ronaldo", 39, "Al-Nasr");
// obj1.add();
// let obj2 = new Football("Valverde", 26, "Real Madrid");
// obj2.add();
// let obj3 = new Football("De Bruyne", 33, "Manchester City");
// obj3.add();

/////////////// 5 - masala ///////////////

// Array.prototype.MyConcat = function (arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     this.push(arr2[i]);
//   }
//   return this;
// };
// let arr = [1, 2, 3, 4];
// console.log(arr.MyConcat([5, 6]));

/////////////// 6 - masala ///////////////

// Object.prototype.myObjKeys = function () {
//   let arr = [];
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       arr.push(key);
//     }
//   }
//   return arr;
// };
// let obj = { num: 12, str: "abc" };
// console.log(obj.myObjKeys());

/////////////// 7 - masala ///////////////

// function Student(name, university) {
//   this.name = name;
//   this.university = university;
// }
// Student.prototype.greet = function () {
//   console.log(`Mening ismim ${this.name} va ${this.university} talabasiman!`);
// };
// delete Student.prototype.greet();
// let student1 = new Student("Munisbek", "UrDU");

/////////////// 8 - masala ///////////////

// String.prototype.myIndexOf = function (n) {
//   let index = -1;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === n) {
//       index = i;
//     }
//   }
//   return index;
// };
// let str = "salom";
// console.log(str.myIndexOf("s"));

/////////////// 9 - masala ///////////////

// Array.prototype.myToString = function () {
//   let result = "";
//   for (let i = 0; i < this.length; i++) {
//     if (i !== this.length - 1) {
//       result += `${this[i]},`;
//     } else {
//       result += this[i];
//     }
//   }
//   return result;
// };
// let arr = [1, 2, 3, 4];
// console.log(arr.myToString());

/////////////// 10- masala ///////////////

// Object.prototype.myValue = function () {
//   let arr = [];
//   for (const key in this) {
//     if (this.hasOwnProperty(key)) {
//       arr.push(this[key]);
//     }
//   }
//   return arr;
// };
// let obj = { str: "hello", num: 20 };
// console.log(obj.myValue());

///////////////Qo'shimcha masalalar///////////////

/////////////// 1 - masala ///////////////

// Array.prototype.myPush = function (elements) {
//   let arrayLength = this.length;
//   for (let i = 0; i < 1; i++) {
//     this[arrayLength + i] = elements;
//   }
//   return arr;
// };
// let arr = [1, 2, 3];
// console.log(arr.myPush(4));

/////////////// 2 - masala ///////////////

// Array.prototype.MySlice = function (a, b) {
//   let newArr = [];
//   if (b === undefined || b > this.length) {
//     for (let i = a; i < this.length; i++) {
//       newArr.push(this[i]);
//     }
//   } else {
//     for (let i = a; i < b; i++) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.MySlice(2));

/////////////// 3 - masala ///////////////

// Object.prototype.MyEntries = function () {
//   let arr1 = [];
//   let arr2 = [];
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       arr1.push(key);
//       arr2.push(this[key]);
//     }
//   }
//   return { keys: arr1, values: arr2 };
// };
// let obj = { a: 1, b: 2, c: 3 };
// console.log(obj.MyEntries());

/////////////// 4 - masala ///////////////

// String.prototype.MyRepeat = function (n) {
//   let result = "";
//   if (n > 0) {
//     for (let i = 0; i < n; i++) {
//       result += this;
//     }
//   } else if (n == 0) {
//     result += this;
//   }
//   return result;
// };
// let str = "hello";
// console.log(str.MyRepeat(2));

/////////////// 5 - masala ///////////////

// Array.prototype.MyIndexOf = function (num) {
//   let index = -1;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] == num) {
//       index = i;
//     }
//   }
//   return index;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.MyIndexOf(7));

/////////////// 6 - masala ///////////////

// Array.prototype.MyPop = function () {
//   let newArr = [];
//   for (let i = 0; i < this.length - 1; i++) {
//     newArr.push(this[i]);
//   }
//   return newArr;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.MyPop());

/////////////// 7 - masala ///////////////

// String.prototype.MySplit = function (a) {
//   let arr = [];
//   let res = "";
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === a) {
//       arr.push(res);
//       res = "";
//     } else if (a === "") {
//       arr.push(this[i]);
//     } else {
//       res += this[i];
//     }
//   }
//   arr.push(res);
//   return arr;
// };
// let str = "a,b,c,d";
// console.log(str.MySplit(","));

/////////////// 8 - masala ///////////////

// Array.prototype.myShift = function () {
//   let newArr = [];
//   for (let i = 1; i < this.length; i++) {
//     newArr.push(this[i]);
//   }
//   return newArr;
// };
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.myShift());

/////////////// 9 - masala ///////////////

// String.prototype.myIncludes = function (n) {
//   let result = false;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === n) {
//       result = true;
//     }
//   }
//   return result;
// };
// let str = "Muxrotbek";
// console.log(str.myIncludes("b"));

/////////////// 10- masala ///////////////

// String.prototype.MyCharAt = function (n) {
//   let result = "";
//   for (let i = 0; i < this.length; i++) {
//     if (i == n) {
//       result = this[i];
//     }
//   }
//   return result;
// };
// let str = "hello";
// console.log(str.MyCharAt(4));