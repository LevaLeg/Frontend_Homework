
// Домашнее задание 6. (после 14 урока) (Домашняя работа по JS - 2)--------------------------------------------------

// Решить следующие задачи:

//1. Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

// for (i = 0; i <= 10; i+=2){
//     console.log (i);
// }


//2. Напишите цикл for, который выводит в консоль  все числа от 55 до 20

// for (i = 55; i >= 20; i--){
//     console.log (i);
// }


// 3. Дан массив numbers.
// 3.1. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];

// for (i = 0; i < numbers.length; i++){
//     console.log (numbers[i])
// }

// 3.2. Сформировать новый массив numbers_squared и передать в него все
// элементы из массива numbers, возведенные в квадрат.

// const numbers = [3, 5, 11, 2, 8, 1, 6];

// let numbers_squared = []; //declaring a new array

// for (i = 0; i < numbers.length; i++){
//     numbers_squared.push (Math.pow(numbers[i], 2)); //squaring the elements of the first array and pushing them into a new array
// }

// for (i = 0; i < numbers_squared.length; i++){
//     console.log (numbers_squared[i]);// output of elements of a new array to the console (not included in the task)
// }


// 3.3. Создать переменную last_elem и передать в нее последний элемент из
// сформированного массива numbers_squared (обратиться к элементу массива по индексу)

// const numbers = [3, 5, 11, 2, 8, 1, 6];

// let numbers_squared = []; //declaring a new array

// for (i = 0; i < numbers.length; i++){
//     numbers_squared.push (Math.pow(numbers[i], 2)); //squaring the elements of the first array and pushing them into a new array
// }

// let last_elem = numbers_squared [numbers_squared.length-1];
// console.log(last_elem);// output the variable last_elem to the console (not included in the task)


//4. Дан объект user.
//Используя данные из объекта, сформировать строку в формате:
//‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

// const user = {
//     first_name: 'Ivan', 
//     last_name: 'Ivanov', 
//     age: 20, 
//     salary: 500
//     }

// let user_date = `User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`;    
    
// console.log(user_date);
