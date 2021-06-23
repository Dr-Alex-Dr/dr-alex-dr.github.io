"use strict";

const result = confirm("Are you here?");
console.log(result);

const answer = +prompt("Вам есть 18", "18");
console.log(typeof(answer));
// ....

const options = {
    name: 'test', 
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойтсво ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойтсво ${key} имеет значение ${options[key]}`);
    }
}

// ...

// ....

console.log(Object.keys(options).length);


arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// ....
const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передает ссылку 

copy.a = 10;

console.log(copy);
console.log(obj);


function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 8;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));
// 

// оператор разворота

// оператор разворота

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['worpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; 
console.log(internet);
      
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7, 8];
const newNum = [...num];

const ik = {
    d: 1,
    g: 8
};

const u = {...ik};

      
// .....
// прототипы

const soldier = {
    health: 400,
    arm: 100
}

const John = {
    health: 100
}


// const john = Object.create(soldier);

// John.__proto__ = soldier;

Object.setPrototypeOf(John, soldier);
console.log(John.arm);








"use strict";

const d = 26 + "px";

console.log(d);

// numbers

console.log(typeof(+'5'));
console.log(typeof(Number('5')));
console.log(typeof(parseInt("15px", 10)));

// bolean

let switcher = null;

if (switcher) {
    console.log("working");
}

switcher = 1;

if (switcher) {
    console.log("working");
}

console.log(5)

// Какое будет выведено значение: let x = 5; alert( x++ ); ?

// Чему равно такое выражение: [ ] + false - null + true ?

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// Чему равна сумма [ ] + 1 + 2?

// Что выведет этот код: alert( "1"[0] )?

// Чему равно 2 && 1 && null && 0 && undefined ?

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// Что выведет этот код: alert( +"Infinity" ); ?

// Верно ли сравнение: "Ёжик" > "яблоко"?

// Чему равно 0 || "" || 2 || undefined || true || falsе ?

function typeOf(number) {
    console.log(typeof(number));
}


// 1) 

// 2)
// console.log(typeof([] + false - null + true)); // nan
// //3
// let y = 1; 
// let x = y = 2; 
// alert(x); // 2

// //3
// console.log([] + 1 + 2); // 12

// //4
// alert( "1"[0] ); // 1

//6
// console.log(typeof(2 && 1 && null && 0 && undefined)); // null запинается на false

// и запинаетмя на лжи
// или запинается на правде

                //3
// alert( null || 2 && 3 || 4 );

// let a = [1, 2, 3]; 
// let b = [1, 2, 3];

// alert( +"Infinity" );

// console.log("яблоко" > "Ёжик");

console.log(0 || "" || 2 || undefined || true || falsе);


// "use strict";



// let personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//         }
//     },
//     remember: function() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Один из последних просмотренных фильмов?", "");
//             let b = +prompt("На сколько оцените его?", "");
    
//             if (a != 0 && b != 0 && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//             } else {
//                 a = prompt("Один из последних просмотренных фильмов?", "");
//                 b = +prompt("На сколько оцените его?", "");
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count > 10) {
//             console.log("Вы киноман");
//         }
//     },
//     showMyDB: function(hidden){
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
//             if (genre == '' || genre == null) {
//                 console.log("error");
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
            
//             console.log(`Любимый жанр ${i++} - это ${item}`);
//         });
//     }
// };

