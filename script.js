
let name1 = prompt('Введите свое имя')
let birthyear = prompt('Год рождение')
let nowyear = prompt('Введите нынешный год')


function sum(nowyear, birthyear) {
  let res = nowyear - birthyear
  return res; 
}

console.log( name1 + ' Ваш возрасть ' + sum(nowyear, birthyear) + ' лет' );


  
