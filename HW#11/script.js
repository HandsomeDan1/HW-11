'use strict';

// 1) Если переменная a равна '10' (обратите внимание что это строка), то выведите 'Верно', иначе выведите 'Неверно'.
// const a = +prompt('Enter number','10');
// if (a === 10){
//     console.log('Correct')
// } else{
//     console.log('Incorrect')
// }

// 2) Если переменная b не равна 10 , то выведите 'Верно', иначе выведите 'Неверно'.
// const b = +prompt('Enter number','11');
// if (b !== 10){
//     console.log('Correct')
// } else{
//     console.log('Incorrect')
// }

// 3) Если юзер ввел Ваше имя, то в консоли вывести "Приветствую, <Ваше имя>!".
// Если юзер ввел имя Кенан, в консоли вывести "Приветствую, Кенан!". Иначе,
// вывести в консоли "Я Вас не знаю :(".
// const name = prompt('Enter your name:');
// if ((name === 'Кенан') || (name ==='Данияр') || (name === 'Айдай')){
//     alert(`Приветствую, ${name}!`)
// } else alert('Я вас не знаю :(');

// 4) Создайте массив из элементов дней недели. Выведите на консоль 'Среду' и 'Субботу'
// const week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// for (let i = 0; i < week.length; i++){
//     if (week[i]==='Wednesday' || week[i]==='Saturday'){
//         console.log(week[i])
//     }
// }

// 5) Спросите у юзера:
// какой любимый фильм? Ответ запишите в переменную movie;
// какой любимый жанр музыки? Ответ запишите в переменную music;
// какое любимое хобби? Ответ запишите в переменную hobby;
// Запишите все ответы в обьект userInfo и выведите на консоль.
// const favMovie = prompt('Ваш любимый фильм:'),
//       favMusicGenre = prompt('Ваш любимый жанр музыки:'),
//       hobby = prompt('Ваше хобби:');
// const userInfo = {
//     movie:favMovie,
//     music:favMusicGenre,
//     hobby:hobby
// };
// for (let key in userInfo){
//     console.log(`${key} = ${userInfo[key]}`)
// }
