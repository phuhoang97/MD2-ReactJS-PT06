// 1. let, const
// Phân biệt 3 từ khóa var, let và const

// var a = 10;
// a = 20;
// console.log(a);

// let b = 30;
// b = 50;
// console.log(b);

// const c = 60;
// c = 90;
// console.log(c);

// debugger;
// function f() {
//   const a = 10;
// }
// f();
// console.log(a);

// debugger;
// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10

// 2. Template string
// "" '' ``
// const a = 10;
// console.log(`${a}
// Hello 1
// Hello 2
// Hello 3`);

// 3. các hàm có sẵn trong js
// map, forEach, filter, find, ...
// const numbers = [1, 2, 3, 4, 5];
// 3.1. map
// Map thực hiện 1 hàm callback (()=>) duyệt qua từng phần tử có trong mảng và tạo ra mảng mới

// Khi sử dụng dấu {} sau => thì cần từ khóa return
// Sau => mà không sử dụng {} thì sẽ không cần từ khóa return

// Ví dụ:
// const numbers = [1, 2, 3, 4, 5];
// let mapArrNumber = numbers.map((value, index) => {
//   console.log(index);
//   return value * 2;
// });
// console.log(mapArrNumber);

// 3.2. forEach
// forEach thực hiện 1 hàm callback (()=>) duyệt qua từng phần tử có trong mảng
// nhưng không tạo ra mảng mới
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((value, index) => {
//   console.log(value * 2);
// });

// 3.3. filter
// Duyệt qua các phần tử có trong mảng, trả về tất cả phần tử thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5];
// let newNumber = numbers.filter((value, index) => value % 2 === 0);
// console.log(newNumber); // [2, 4]

// 3.4. Find
// Duyệt qua các phần tử có trong mảng,
// nếu thỏa mãn điều kiện sẽ trả về phần tử đầu tiên có trong mảng
// const numbers = [1, 2, 3, 4, 5];
// let newNumber = numbers.find((value, index) => value % 2 === 0);
// console.log(newNumber); // 2

// sort, reduce, findIndex, indexOf, ...

// 4. Arrow function
//  function f() {}

// const f = () => {} => Khi sử dụng arrow function sẽ loại bỏ được từ khóa this trong class

// 5. Destructuring
// Sử dụng để phân rã (trích xuất) các giá trị từ mảng (array) hoặc đối tượng (object)

// ví dụ:
// Destructuring array:
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[1]);
// console.log(numbers[3]);

// const [a, , , , e] = numbers;
// console.log(a, e);

// // Destructuring object
// let people = {
//   name: "Tiến",
//   age: 20,
//   address: "Hà Nội",
// };

// let { name, age, address, age2 } = people;

// 6. Enhanced object literals
// let address = "Hồ Chí Minh";
// let name = "Dương";
// let course = "course";

// let people = {
//   name: name,
//   address,
//   // Thêm key cho đối tượng
//   [course]: "ReactJS",
// };
// console.log(people);

// 7. Spread operator (...)
// Spread với array

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// Spread với object

// let people = {
//   name: "Long",
//   age: 25,
// };

// // Thêm đối tượng mới
// let newPeople = { ...people, address: "Đà Nẵng" };

// // Cập nhật đối tượng có trong object nếu key trùng nhau
// let updatePeople = { ...newPeople, age: 34 };
// console.log(updatePeople);

// 8. Rest Parameters (...)

// function numbers(a, ...number) {
//   console.log(a); // 10
//   console.log(number); // [20, 30, 40, 50]
// }

// numbers(10, 20, 30, 40, 50);

// 9. Module
// Export

// Named Export
export const sum = (a, b) => a + b;
export const number = 20;
export const minus = (a, b) => a - b;

// Export Default
const pi = 3.14;
export default pi;
