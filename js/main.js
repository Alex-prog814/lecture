// =============основные тезисы=============
// 1. Что такое функция? +
// 2. Синтаксис +
// 3. Параметры(дефолтные и простые) +
// 4. Аргументс и передача сколько угодно многи аргументов +
// 5. Хойстинг +
// 6. Ретерн +
// 7. Области видимости +
// 8. Примеры

//! ----------------Функции. Области видимости. function declaration, expression. Hoisting-----------------
//?  Нередко случается, что какая-то часть программы (блок кода) неоднократно повторяется. Чтобы устранить подобного рода избыточность программного кода, используют понятие функции. Функция — это именованный блок кода, который вызывается в нужных местах программы по имени.

//! ----------------------------------------Function declaration--------------------------------------------
// Также, как и с переменными, при присвоении функции имени, мы говорим что "объявляем" функцию. Такие функции называются function declaration. Синтаксис function declaration выглядит данным образом:

// funсtion имя_функции(список_парамeтров) {
//     блок кода
// }
// function funcName() {
//   console.log("Привет Айдана. Happy Birthday!!!");
// }
// funcName(); // вызов функции
// funcName(); // вызов функции
// funcName(); // вызов функции

// Так, мы вызвали нашу функцию три раза.

// Внутри функции можно использовать любые инструменты предоставляемые языком JS, а также писать другие функции. К примеру, напишем функцию с циклом:
// function countUntil() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`Счетчик ${i}`);
//   }
// }
// countUntil();
// Но что если мы хотим считать не только до 10, а до определенного числа, которое мы можем сами задавать,
// для этого фукнция может примнимать входные данные, которые называются параметрами.

// function countUntilFix(number) {
//   for (let i = 1; i < number; i++) {
//     console.log(`Счетчик ${i}`);
//   }
// }
//   Здесь, мы указали переменную number - параметр, куда мы ожидаем получить какое-либо число.
// При вызове функции, уже передаем само число, которое будет попадать в переменную number:

// countUntilFix(10); // передача аргумента для функции
// countUntilFix(5);
// countUntilFix(20);

// Функция может примимать многочислленные параметры. К примеру напишем функцию, которая будет выводить в консоль поздравление человека по имени и фамилии:
// function congratulate(firstName, lastName) {
//   console.log(
//     `Поздравляю, ${firstName} ${lastName}, с успешным прохождением теста`
//   );
// }
// congratulate("John", "Snow");
// congratulate("Lebron", "James");
// congratulate("Franklin", "Roosevelt");

// дефолтные параметры функций
// иногда мы не знаем передаст ли пользователь какие-либо данные или же нет, можем обезопасить себя добавив дефолтные значения для параметров функций
// пример
// создать функцию, которая будет преветствовать пользователя по имени

// function helloFunc(firstName='User') {
//   console.log(`Hello, ${firstName}!`);
// };

// helloFunc();
// helloFunc('Tom');

//!--------------------- Return---------------------------
// Функция может также отдавать какой-либо конечный результат, о таком поведении функции говорят что она "возвращает" результат. Для того, чтобы вернуть что-то из функции используется ключевое слово return:
// К примеру, напишем функцию, которая вычисляет площаль треугольника, для этого передадим ей основание треугольника и высоту:

// function calcTriangleSquare(base, height) {
//   return (1 / 2) * base * height;
// }

// console.log(calcTriangleSquare(20, 6));

// let square = calcTriangleSquare(5, 10);
// console.log(square);

// Еще пример:
// const person = {
//   name: "alex",
//   salary: 30000,
// };
// person.premium = 400;  hardcoding (manual)
// function givePremium(salary, percent) {
//   return (salary * percent) / 100;
// }
// person.premium = givePremium(person.salary, 5);
// console.log(person);

// Ключнвое слово return может находиться в любом месте тела функции. Как только выполнение доходит до этого места, функция останавливается.
// Вызовов return может быть несколько, например:
// function checkAge(age) {
//   if (age > 18) {
//     return сonsole.log("Вход разрешен");
//   } else {
//     return console.log("Вход запрещен");
//   }
// }
// checkAge(15);
// userAge = prompt("Введите свой возраст");
// checkAge(userAge);

// Возможно использовать return и без значения. Это приведёт к немедленному выходу из функции.
// Здесь, если нам передали объект со значением False(0, None и.т.д) наша функция будет прекращать работу, т.к мы указали ключевое слово return:
// function checkType(elem) {
//   if (!elem) return;
//   console.log(`Это объект типа ${typeof elem}`);
// }

// checkType(0); //не отработает
// checkType("makers"); //Это объект типа string

// Функция которая возвращает return без значения, или вообще ничего не возвращает(т.е return не указан в теле функции), будет иметь конечный результат undefined - неопределеное значение:
// function get_cube(num) {
//   return num * num;
// }
// console.log(get_cube(2)); //4

// function get_cube(num) {
//   console.log(num * num); //4
// }
// console.log(get_cube(2)); //undefined

// TODO Задачи:
// TODO 1. Напишите программу на JavaScript для вычисления суммы двух заданных целых чисел. Если два значения одинаковы, то возвращается тройная их сумма.
// Pешение:
// function sumTriple(x, y) {
//   if (x == y) {
//     return 3 * (x + y);
//   } else {
//     return x + y;
//   }
// }
// console.log(sumTriple(10, 20));
// console.log(sumTriple(10, 10));

// TODO 2. Напишите функцию pow(x,n) которая возвращает x в степени n. Другими словами умножьте x на себя n раз
// Решение
// function pow(x, n) {
//   let result = x;
//   if (n < 1) {
//     alert(`Пожалуйста введите положительное число`);
//   } else {
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
//   }
//   return result;
// }

// function powUpdated(x, n) {
//   return x**n
// };
// console.log(pow(4, 6));
// console.log(powUpdated(4, 6));

// !-----------------------------------------Область видимости--------------------------------------------
// Область видимости это концепция в программировании определяющая доступность переменных. Так как функции это блок кода со своей внутренней логикой, для того чтобы в коде был порядок, создаются различные области видимости. У каждой функции есть своя область видимости, помимо них существует общая, глобальная область видимости.
// function showMessage() {
//   let message = "Привет, я JavaScript!"; //? локальная переменная
//   console.log(message);
// }
// showMessage(); // Привет, я JavaScript!
// console.log(message); // <-- будет ошибка, т.к. переменная видна только внутри функции

// У функции есть также доступ к внешним переменным, которые находятся в глобальной области видимости
// Переменные, объявленные снаружи всех функций, такие как внешняя переменная userName в вышеприведённом коде – называются глобальными.
// Желательно сводить использование глобальных переменных к минимуму. В современном коде обычно мало или совсем нет глобальных переменных. Хотя они иногда полезны для хранения важнейших «общепроектовых» данных.

// let userName = "Вася"; //? глобальная переменная

// function showMessage() {
//   let message = "Привет, " + userName;
//   console.log(message);
// }
// showMessage(); // Привет, Вася

// Глобальные переменные видимы для любой функции (если только их не перекрывают одноимённые локальные переменные).
// Функция обладает полным доступом к внешним переменным и может изменять их значение.
// Например:
// let userName = "Вася";

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной
//   let message = "Привет, " + userName;
//   console.log(message);
// }

// console.log(userName); // Вася перед вызовом функции
// showMessage();
// console.log(userName); // Петя, значение внешней переменной было изменено функцией

// Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю.
// Например, в коде ниже функция использует локальную переменную userName.
// Внешняя будет проигнорирована:
// let userName = "Вася";

// function showMessage() {
//   let userName = "Петя"; // объявляем локальную переменную
//   let message = "Привет, " + userName; // Петя
//   alert(message);
// }
// функция создаст и будет использовать свою собственную локальную переменную userName
// showMessage();
// alert(userName); // Вася, не изменилась, функция не трогала внешнюю переменную

//! Объект arguments
// Объект arguments, это массивоподобный объект доступный только внутри функций(имеет свойство length и индексацию с 0, но не имеет доступа к методам массива). Через переменную arguments можно ссылаться на аргументы функции внутри неё:
// function foo(a, b, c, d, e) {
//   console.log([...arguments]); //   (5)[(10, 20, 30, 40, 50)];
//   console.log(...arguments); //    10 20 30 40 50
//   console.log(arguments); //Arguments(5) [10, 20, 30, 40, 50, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   console.log(arguments[0]); //10
//   console.log(arguments.length); //5
// }
// foo(10, 20, 30, 40, 50);

// function test (x, y, z) {
  // console.log(...arguments);
  // console.log(x, y, z);
// };

// test(1, 2, 3, 4, 5);

//! -------------------------------------------Hoisting - поднятие-----------------------------------------
// Поднятие или hoisting — это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.

// Как следствие, это означает то, что совершенно неважно где были объявлены функция или переменные, все они передвигаются вверх своей области видимости, вне зависимости от того локальная она или же глобальная.

// Hoisting передвигает только объявления функции или переменной, присвоения значений остаются на своих местах.
//? Важно - обратить внимание, что присваивание значений переменным не поднимается вместе с их объявлением. Поднимаются только объявления переменных. В случае с функциями, поднимается вся функция целиком

// Hoisting'у подвержены переменные объявленные ключевым словом var, а также функции, кроме function expression.
// console.log(name); //не сработает
// console.log(info); //не сработает
// console.log(city); //undefined
// const name = "James";
// let info = {
//   age: 21,
//   country: "KG",
// };
// var city = "Bishkek";

// console.log(sum(20, 3)); //23 сработает из за хойстинга
// function sum(x, y) {
//   return x + y;
// }


// показать возможность передачи аргументов без явного указания параметров
// function funcWithParams(a, b, c) {
//   let data = [...arguments];
//   console.log(data);
// };

// funcWithParams(10, 'hello', null);

// function funcWithoutParams() {
//   console.log([...arguments]);
// };

// funcWithoutParams('Tom', 10, 15, null, true, {'price': 1000});


// задача 1
// создать функцию-калькулятор, на входе принимает 3 аргумента число А число В и знак (+, -, *, /) использовать switch-case конструкцию

// решение
// function calcFunc (num1, num2, operation) {
//   switch (operation) {
//     case '+': return num1 + num2;
//     case '-': return num1 - num2;
//     case '*': return num1 * num2;
//     case '/': return num1 / num2;
//     default: return 'Invalid operation'
//   };
// };

// console.log(calcFunc(10, 20, '+')); //30
// console.log(calcFunc(100, 35, '-')); //65
// console.log(calcFunc(5, 45, '*')); //225
// console.log(calcFunc(200, 10, '/')); //20
// console.log(calcFunc(10, 20, ')')); //'Invalid operation'


// задача 2
// создать программу, которая будет добавлять заголовок первого уровня на страницу, у пользователя необходимо запросить цвет, размер и контент, затем добавить на страницу заголовок, использовать функцию

// решение
// function addTitle () {
//   let content = prompt('Enter content of title');
//   let color = prompt('Enter color of title');
//   let size = prompt('Enter size(px) of title');

//   let titleElem = document.createElement('h1');
//   titleElem.innerText = content;
//   titleElem.style.color = color;
//   titleElem.style.fontSize = `${size}px`;
//   document.body.appendChild(titleElem);

//   alert('SUCCESSFULLY ADDED!');
// };

// addTitle();


// задача 3
// создать имитацию бд(полный CRUD(C-create, R-read, U-update, D-delete)), в качестве бд использовать массив, для каждого действия создать свою функцию, также необходима функция менеджер, которая в зависимости от выбора пользователя будет вызывать нужную функцию

// решение
// const db = [90, true, 'Hello', 1, 54, false];

// function create () {
//   let elem = prompt('Enter data');
//   db.push(elem);
//   alert('SUCCESSFULLY ADDED!');
//   manager();
// };

// function read () {
//   alert(`Data: ${db}!`);
//   manager();
// };

// function update () {
//   let elemNum = +prompt(`Enter number of elem from \n ${db}`);
//   let data = prompt('Enter new data');
//   db.splice(elemNum - 1, 1, data);
//   alert('SUCCESSFULLY UPDATED!');
//   manager();
// };

// function _delete () {
//   let elemNum = +prompt(`Enter number of elem from \n ${db}`);
//   db.splice(elemNum - 1, 1);
//   alert('SUCCESSFULLY DELETED!');
//   manager();
// };

// function manager () {
//   let decide = prompt('Create(c), read(r), update(u), delete(d), exit(e)?').toLowerCase();

//   switch (decide) {
//     case 'c': create(); break;
//     case 'r': read(); break;
//     case 'u': update(); break;
//     case 'd': _delete(); break;
//     case 'e': return;
//     default: alert('Invalid operation'); return;
//   };
// };

// manager();

