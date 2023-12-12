// 1. Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.

//submit - событие отправки данных на сервер.

//const formElemeWithName = document.forms.main_form - еще один способ обращения к форме.
//console.log(formElementWithName)


//1.
// const formElem = document.querySelector("form");
// const nameInputElem = document.querySelector(".date");
// const familyInputElem = document.querySelector(".date2");
// const ageInputElem = document.querySelector(".date3");
// formElem.addEventListener("submit", function(event){
//     event.preventDefault(); //отмена перезагрузки страницы
//     console.log("submitted");
//     console.log(nameInputElem.value) //вывод в коносль того, что ввел пользователь
//     console.log(familyInputElem.value) //вывод в коносль того, что ввел пользователь
//     console.log(ageInputElem.value) //вывод в коносль того, что ввел пользователь
// form_element.reset();//очистка полей ввода
// })

//-----------------------------------------------------------------
// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// let users = []; //Создание пустого массива.
// const form_element = document.querySelector("form");
// const name_input = document.querySelector(".date");
// const family_input = document.querySelector(".date2");
// const age_input = document.querySelector(".date3");
// form_element.addEventListener("submit", function(event){
//     event.preventDefault(); //отмена перезагрузки страницы
    
//     let users_object = {
//         name_object: name_input.value, 
//         family_object: family_input.value, 
//         age_object: +age_input.value, 
//     }
    
//     users.push(users_object);
//     console.log(users);
//     form_element.reset();//очистка полей ввода
// })

//------------------------------------------------------------------
// В данном случае, preventDefault() отменит действие по умолчанию - открытие ссылки.
// document.querySelector('a').addEventListener("click", function(e){
//    e.preventDefault()
//})
//------------------------------------------------------------------

//Про формы и rerender
//2:18 - Прикольная стилизация
//https://skilldesk.starta.university/lesson?filters436934284=id__eq__recEefZtRBQ65momG&filters469453959=id__eq__recEefZtRBQ65momG

//https://skilldesk.starta.university/lesson?filters436934284=id__eq__recaFHe7njRCzvtG8&filters469453959=id__eq__recaFHe7njRCzvtG8


//------------------------------------------------------------------------------
// 3. Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
let users = []; //Создание пустого массива.
const form_element = document.querySelector("form"); //Выбор формы
const name_input = document.querySelector(".date"); //Поле ввода имени
const family_input = document.querySelector(".date2"); //Поле ввода фамилии
const age_input = document.querySelector(".date3"); //Поле ввода возраста
form_element.addEventListener("submit", function(event){ //Слушатель событий для события "Submit".
   event.preventDefault(); //отмена перезагрузки страницы
    
    let users_object = { //Создание объектов для хранения данных пользователей
        name_object: name_input.value, 
        family_object: family_input.value, 
        age_object: +age_input.value, 
    }
    
    users.push(users_object); //Добавление объектов в массив
    console.log(users);
    form_element.reset();//Очистка полей ввода
    rerender(); //Вызов функции rerender
    
})

// Первый вариант
// function create_prod_card(name_object, family_object, age_object){

// }

// create_prod_card(users_object.name_object, users_object.family_object, users_object.age_object)

// Вариант с деструктуризацией. 2:30.
function create_card({name_object, family_object, age_object}){
let p_name = document.createElement('p')
p_name.innerText = name_object

let p_family = document.createElement('p')
p_family.innerText = family_object

let p_age = document.createElement('p')
p_age.innerText = age_object

let card = document.createElement('div')
card.classList.add("users_cards")

card.append(p_name, p_family, p_age)
return card

}

// create_card({ // вызов функции
//     name_object: "Ivan",
//     p_family: "Ivanov",
//     age: 25
// })
// let {name_object, family_object, age_object} = users_object//?

// create_prod_card(users_object)


let users_list_div = document.querySelector(".container")
function rerender(){
    for (let i = 0; i < users.length; i++){
        // users[i]
        // console.log()
        let users_elem = create_card(users[i]) //Вызов функции create_card с массивом в качестве аргумента.
        users_list_div.append(users_elem)
    
    users_elem.addEventListener("click", function(){
    // users_list_div.dbclick = function(){
        users.splice(i, 1)
        console.log("Click detected")
        rerender()
    })}
}


// users_list_div.onclick = function(){
//     // users_list_div.dbclick = function(){
//         users.splice(i, 1)
//         console.log("Double click detected")
//         rerender()
//     }




//2:48 - Пошагово...


// 4. Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.
