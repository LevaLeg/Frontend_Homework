// Домашнее задание 8 (после урока 19).
// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.


// let new_div = document.createElement('div.numbers'); //Создание элемента div
// document.body.append(new_div);  //Добавление элемента div в body
// for (let i = 100; i >= 50; i -= 10) { //Создание цикла
//     let p_elem = document.createElement('p'); //Создание параграфов
//     p_elem.innerText = i; //Помещение внутрь параграфов текста
//     new_div.append(p_elem); //Помещение каждого параграфа в элемент div
// }
//----------------------------------------------------------------------------------------------------


// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

//  arr = ['English', 'Esperanto', 'French', 'German', 'Russian', 'Italian'];  //Создание массива

//  let new_div = document.createElement('div.strings_container'); //Создание элемента div
//  document.body.append(new_div); //Добавление элемента div в body

//  for (let i = 0; i < arr.length; i++){  //Создание цикла для перебора элементов массива, создания параграфов и внесения элементов массива в эти параграфы
//     let p_elem = document.createElement('p');   //Создание параграфов
//     p_elem.innerText = arr[i];  //Внесение в параграфы строк из массива
//     new_div.append(p_elem); //Размещение параграфов в элементе div
// }
//---------------------------------------------------------------------------------------------------


// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

// let users_data = [
//     {first_name: 'Anna',        last_name: 'Krasotka',      age: 27},
//     {first_name: 'Mila',        last_name: 'Podruga',       age: 17},
//     {first_name: 'Janna',       last_name: 'Vozdushnaya',   age: 30},
//     {first_name: 'Ivanna',      last_name: 'Skromnaya',     age: 16},
//     {first_name: 'Veronika',    last_name: 'Shortscirt',    age: 25},
// ];

// let u = document.querySelector('.users_container');
   

// for (let i = 0; i < users_data.length; i++) {
//   if (users_data[i].age >= 18) { 
//     let elem_1 = document.createElement('p');
//     let elem_2 = document.createElement('p');
//     let elem_3 = document.createElement('p');

//     elem_1.innerText = users_data[i].first_name; 
//     elem_2.innerText = users_data[i].last_name; 
//     elem_3.innerText = users_data[i].age;

//     let br = document.createElement('br');
//     u.append(elem_1, elem_2, elem_3, br);
// }
// }