// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);      // сначала "а" увеличивается на 1, получаем а = 2. Потом присваиваем "с", полуаем с = 2
d = b++; alert(d);      // сначала "b" = 1 присваивается "d", потом "b" увеливичается на 1. Получаем b = 2, d = 1
c = (2+ ++a); alert(c); // поскольку "а" уже = 2 она увечивается на 1 (а = 3) и к ней прибавляется 2, получем с = 5, а = 3. Переменная "с" также была перезаписана
d = (2+ b++); alert(d); // также как и на прошлой строке только "b" увеличивается на 1 после записание значения в "d". Получаем d = 4, b = 3
alert(a);               //
alert(b)                //

// Задание 2
a = 2;
var x = 1 + (a *= 2);
// x = 5, a = 4

// Задание 3
a = +prompt("Введите целочисленное значение А");
b = +prompt("Введите целочисленное значение B");
if (a >= 0 && b >= 0) {
    c = a - b; alert(c);
} else if (a < 0 && b < 0) {
    c = a * b; alert(c);
} else {
    c = a + b; alert(c);
}

// Задание 4
a = +prompt("Введите число от 0 до 15 включительно");
while (a < 0 || a >  15) {
    a = +prompt("Неправильное значение. Введите число от 0 до 15 включительно")
}
switch (a) {
    case 0:
        alert("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 1:
        alert("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 2:
        alert("2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 3:
        alert("3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 4:
        alert("4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 5:
        alert("5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 6:
        alert("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 7:
        alert("7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 8:
        alert("8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 9:
        alert("9, 10, 11, 12, 13, 14, 15");
        break;
    case 10:
        alert("10, 11, 12, 13, 14, 15");
        break;
    case 11:
        alert("11, 12, 13, 14, 15");
        break;
    case 12:
        alert("12, 13, 14, 15");
        break;
    case 13:
        alert("13, 14, 15");
        break;
    case 14:
        alert("14, 15");
        break;
    case 15:
        alert("15");
        break;
}


// Задание 5
var result;
function sum(arg1, arg2) {
    result = arg1 + arg2;
    return result;
}
function diff(arg1, arg2) {
    result = arg1 - arg2;
    return result;
}
function increase(arg1, arg2) {
    result = arg1 * arg2;
    return result;
}
function division(arg1, arg2) {
    result = arg1 / arg2;
    return result;
}

// Задание 6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            alert(sum(arg1, arg2));
            break;
        case diff:
            alert(diff(arg1, arg2));
            break;
        case increase:
            alert(increase(arg1, arg2));
            break;
        case division:
            alert(division(arg1, arg2));
            break;
    }
}
mathOperation(55, 5, sum);