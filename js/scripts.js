// Задание 1. Выведите числа от 1 до 50 и от 35 до 8.
let i = 0;

do {
    i++;
    console.log(i)
} while (i < 50)

for(let n = 35; n >= 8; n--) {
    console.log(n)
}

// Задание 2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
let q = 89;
while(q >= 11) {
    document.write(q + '<br>');
    q--;
}

// Задание 3.С помощью цикла найдите сумму чисел от 0 до 100.
let w = 100;
let sum3 = 0;
for(let e = 0; e < w; e++) {
    sum3 += e;
}
console.log(sum3);

// Задание 4.Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
let r = 5;
let sum4 = 0;
for(let t = 1; t <= r; t++) {
    sum4 = 0;
    for(let o = 1; o <= t; o++) {
        sum4 += o;
    }
    console.log('Sum ' + t + ' = ' + sum4);
}

// Задание 5. Выведите чётные числа от 8 до 56. Решить задание через while и for.

for(let s = 8; s <= 56; s++) {
    if (s % 2 !== 0)continue;
    console.log(s);
}

// Задание 6. 

for (let d = 2; d <= 10; d++) {
    for (let j = 2; j < 10; j++) {
    document.write(j + '*' + d + "=" + (d * j) + "</td>");
    }
}


// Задание 7. 
let n = 1000,
    num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
} console.log(n, num);
// Задание 8. 
// Задание 9. 
// Задание 10. 
