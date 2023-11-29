// 1. Создать кнопку и красный квадрат с размерами 200х200px.
// При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const new_button = document.createElement('button'); //Создание кнопки и переменной для её хранения.
// new_button.innerText = 'Change color';               // Размещение текста внутри кнопки.
// const new_div = document.createElement('div');       //Создание элемента div и переменной для него.

// new_button.style.width = '100px';                   //Задание размеров кнопки.
// new_button.style.height = '50px';

// new_div.style.width = '200px';                      //Задание размеров элемента div.
// new_div.style.height = '200px';
// new_div.style.backgroundColor = "red";              //Задание цвета для элемента div.

// document.body.appendChild(new_button);              //Добавление кнопки в body.
// document.body.appendChild(new_div);                 //Добавление new_div в body.

// new_button.addEventListener('click', function() {   //Щелчок на кнопке new_button вызывает запуск функции,...
//   new_div.style.backgroundColor = 'green';          //...что приводит к измнению цвета new_div...
//   new_div.style.width = '100px';                    //...и к изменению размера new_div.
//   new_div.style.height = '100px';
// })
//--------------------------------------------------------------------------------------------------------------------------



// 2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// const new_button = document.createElement('button');
// new_button.innerText = 'Change color';
// const new_div = document.createElement('div');
// new_button.style.width = '100px';
// new_button.style.height = '50px';
// new_div.style.width = '200px';
// new_div.style.height = '200px';
// new_div.style.backgroundColor = 'pink';

// document.body.appendChild(new_button);
// document.body.appendChild(new_div);

// new_button.addEventListener('click', function() {
//   new_div.style.backgroundColor = 'blue';
//   console.log(new_div.style.backgroundColor);
// })
//--------------------------------------------------------------------------------------------------------------------------



// 3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// const but_minus = document.createElement('button');
// but_minus.innerText = '-';
// const but_plus = document.createElement('button');
// but_plus.innerText = '+';

// const n_div = document.createElement('div');

// let x = 150;
// let y = 150;
// let inc_dec = 0;

// but_plus.style.width = '75px';
// but_plus.style.height = '40px';

// but_minus.style.width = '75px';
// but_minus.style.height = '40px';

// n_div.style.width = `${x}px`;
// n_div.style.height = `${y}px`;
// n_div.style.backgroundColor = 'red';

// document.body.appendChild (but_minus);
// document.body.appendChild (but_plus);
// document.body.appendChild (n_div);

// but_plus.addEventListener('click', function(){
//   inc_dec +=20;
//   n_div.style.backgroundColor = 'red';
//   n_div.style.width = `${x+inc_dec}px`;
//   n_div.style.height = `${y+inc_dec}px`;
// })

// but_minus.addEventListener('click', function(){
//   inc_dec -=20;
//   n_div.style.backgroundColor = 'green';
//   n_div.style.width = `${x+inc_dec}px`;
//   n_div.style.height = `${y+inc_dec}px`;
// })
//--------------------------------------------------------------------------------------------------------------------------



// 4. Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

// const but = document.createElement('button');
// but.style.width = "75px";
// but.style.height = "45px";
// but.style.backgroundColor = 'red';
// const n_div = document.createElement('div');
// n_div.classList.add("root")

// document.body.appendChild (but);
// document.body.appendChild (n_div);

// but.addEventListener('click', function(){
//  par = document.createElement('p');
//  par.style.width = '500px';
//  par.style.height = '25px';
//  par.style.backgroundColor = 'blue';
//  par.innerText = 'word';
//  n_div.appendChild (par);
// })
//-------------------------------------------------------------------------------------------------------------



//5. Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

// let p_color = 'green';                       //Создание и инициализация переменной для хранения цвета параграфа.
// let b_color = 'blue';                        //Создание и инициализация переменной для хранения цвета кнопки.
// const but = document.createElement('button');//Создание элемента "Кнопка" и переменной.
// but.style.width = '75px';                   //Определение размеров кнопки.
// but.style.height = '45px';
// but.style.backgroundColor = 'blue';         //Определение начального цвета кнопки.
// const n_div = document.createElement('div');//Создание элемента "Div".
// n_div.classList.add('root');                //Присваивание элементу класса "root".

// document.body.appendChild (but);            //Добавление кнопки к body.
// document.body.appendChild (n_div);          //Добавление элемента "Div" к body.

// but.addEventListener('click', function(){   //Создание функции внутри конструкции EventListener для определения события "Click"
//   if (b_color === 'green'){                 //Конструкция if... else... для инвертирования цветов кнопки и параграфов.
//     p_color = 'green';
//     b_color = 'blue';
//   }
//   else {
//     p_color = 'blue';
//     b_color = 'green';
//   }

//  par = document.createElement('p');         //Создание нового параграфа.
//  par.style.width = '500px';                 //Определение размеров параграфа.
//  par.style.height = '25px';
//  par.style.backgroundColor = p_color;       //Замена текущего цвета параграфа.
 
//  n_div.appendChild (par);                   //Добавление параграфа в Div.
//  but.style.backgroundColor = b_color;       //Замена текущего цвета кнопки.
 
// })