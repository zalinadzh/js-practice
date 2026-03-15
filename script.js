let nApples = 22;
let cPerApple = 52;
let tCalories = nApples + cPerApple;
console.log(tCalories);


let nameRoll = "Philadelphy"
let porciaOne = 550;
let clientPorcia = 2;
let totalPrice = porciaOne * clientPorcia;
console.log("Заказ: " + nameRoll + ", итоговая сумма: " + totalPrice + " рублей");


let discount = 100;
totalPrice = totalPrice - discount;
console.log("Цена со скидкой: " + totalPrice + " руб");





let bill = 2000;
let tipPercent = 10;
let tipAmount = (bill * tipPercent) / 100;
console.log("Чаевые составят: " + tipAmount + " рублей");


let firstName = "Залина ";
let action = " изучает ";
let subject = "Java Script";
let fullSentence = firstName + action + subject;
console.log(fullSentence);


let finalOrderPrice = 1200;
let deliveryThreshold = 1500;
let isDeliveryFree = finalOrderPrice >= deliveryThreshold;
console.log("Бесплатная доставка активна? " + isDeliveryFree);


let sushilnStock = 8;
let sushiOrdered = 5;
let isStockEnough = sushilnStock >= sushiOrdered;
console.log("Сможем приготовить заказ? " + isStockEnough);


let isRegularCustomer = true;
let orderAmount = 2500;
let applySuperDiscount = isRegularCustomer && orderAmount > 2000;
console.log(applySuperDiscount);



let hasCash = false;
let hasCard = true;
let canPay = hasCash || hasCard;
console.log("Клиент может оплатить заказ? " + canPay);


let admin;
let name = "Dgoun";
admin = name;
console.log(admin);


let ourPlanetName = "Zemlya";
let currentUserName = "Zalina";


let apples = 15;
let oranges = 25;
console.log(apples + oranges);



let balance = 1000;
let spend = 450;
let result = balance - spend;
console.log(result);

let price = 100;
let count = 4;
console.log(price * count);

let total = 50;
let people = 3;
console.log(total / people);


let x = 2;
console.log(x ** 3);


let counter = 5;
counter++;
console.log(counter);

let score = 10;
score += 5;
console.log(score);


let d = 10;
let f = 20;
d = d + f;
f = d - f;
d = d - f;
console.log(d, f);



let side = 8;
let perimeter = side * 4;
console.log(perimeter);


let num1 = 10;
let num2 = 20;
let num3 = 30;
let average = (num1 + num2 + num3) / 3;
console.log(average);


let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);

const BIRTH_DAY = 1995;
let currentYear = 2026;
let age = currentYear - BIRTH_DAY;
console.log(age);


let countD = 0;
countD++;
countD++;
console.log(countD);

let number = 15;
let isEven = (number % 2);
console.log(isEven);



let myAge = 20;
let myName = "Zalina";


let name1 = "Maria";
let name2 = "Olga";
let bothName = name1 + name2;
console.log(bothName);


let item = "apple";
console.log(`Я купила одно ${item}`);



let text = "программист";
text = "ПРОГРАММИСТ";
console.log(text);




let isLearningJS = true;









let nameMy = 'Zalina';


let numberMyPractice = 30;

let isHappy = true;

let nothing = null;

let notDefined = "";


let city = "Moscow";
console.log(`I live in city ${city}`);

console.log(`Sum: ${5 + 5}`);



let nameA = "Ani";
let age1 = 20;
console.log(`${nameA} ${age1}`);





let hasKey = true;
let knowsPassword = false;
let energyLevel = 70;
if (hasKey && knowsPassword) {

    if (energyLevel > 50) {
        console.log("Добро пожаловать в систему, работаем!");
    } else {
        console.log("Вход разрешен, но сначала поздоровайся!");
    }
}
else {
    console.log("Доступ запрещен!");
}







let isTired = true;
let tasksDone = 5;
let isCoffeeFinished = true;

if (tasksDone > 3 && isCoffeeFinished) {
    console.log("Идем учить дальше!");
} else {
    console.log("Нужно заварить кофе или доделать задачи!");
}















let hasDiploma = true;
let entranceExamScore = 80;
let paymentStatus = "";
let isLate = false;


if (hasDiploma && !isLate) {
    if (entranceExamScore >= 50) {
        console.log("Экзамен сдан! Проверяем оплату...")
        if (paymentStatus) {
            console.log("Зачисление успешно!")
        } else {
            console.log("Нужно оплатить!")
        }

    } else {
        console.log("Баллов недостаточно!");
    }
} else {
    console.log("Документы не приняты!");
}









let isFamilyMember = true;
let hasPassCard = false;
let carNumber = "A123BC";
let isEmergency1 = false;

if (isFamilyMember || isEmergency1) {
    if (carNumber) {
        console.log("Номер считан. Проверяем пропуск...");
        if (hasPassCard) {
            console.log("Доступ разрешен!")
        } else {
            console.log("Нужен бумажный пропуск.")
        }

    } else {
        console.log("Ошибка: номер машины не читается!");
    }
} else {
    console.log("Ворота заблокированы!");
}







let isWardOpen = true;
let isFingerprintOK = true;
let isPinCorrect = false;
let attemptsLeft = 3;

if (isWardOpen) {
    console.log("Шкаф открыт! Проверяем отпечаток...");
    if (isFingerprintOK) {
        console.log("Отпечаток принят, введите код!");
        if (isPinCorrect) {
            console.log("Сейф открыт!");
        } else {
            if (attemptsLeft > 0) {
                console.log("Неверный код! Осталось попыток: " + attemptsLeft);
            } else {
                console.log("Сейф заблокирован!")
            }
        }
    }
    } else {
        console.log("Отпечаток не принят!")

}




function multiply(num1, num2) {
    let sum = num1 * num2;
    return sum;
}
let myResult = multiply(30, 4)
console.log(myResult);






function getTax(price) {
    return price * 0.1;
}
let myResult1 = getTax(100);

const getTaxExpression = function (price) {
    return price * 0.1;
}
let myresult2 = getTaxExpression(500);


const getTaxArrow = price => price * 0.1;
let myResult3 = getTaxArrow(1000);

console.log(myResult1);
console.log(myresult2);
console.log(myResult3);



function convertToRub(curs) {
    let rate = 90;
    return curs * 90;
}
let cursDollar = convertToRub(1);
console.log("Итоговая сумма: " + cursDollar + " рублей");





let hasNotes = true;
let cleanPractice = true;

if (hasNotes && cleanPractice) {
    console.log("Допуск разрешен");
} else {
    console.log("Допуск запрещен");
}



const todoList = ['записать тему', 'прочитать', 'сделать задание']
for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i]);
}


const users = ['Залина', 'Анна', 'Марат', 'Незнакомец', 'Иван', 'Взломщик'];
const safeUsers = users.filter(who => {
      return who !== 'Взломщик'  && who !== 'Незнакомец';
});
console,log(safeUsers);





function рассчитатьБюджет(суммаДенег, продуктХлеб, продуктМясо, продуктОвощи) {
    let итоговаяСумма = продуктХлеб + продуктМясо + продуктОвощи;
    if (суммаДенег >= итоговаяСумма) {
        return "Оплатить";
    } else {
        return "Недостаточно средств";
    }
}
console.log(рассчитатьБюджет);


function проверитьАктивность(количествоШагов) {
    if (количествоШагов < 1000) {
        return "Активность слабая";
    } else if (количествоШагов >= 1000 && количествоШагов <= 5000) {
            return "Неплохая активность";
    } else {
         return "Активность высокая";   
    }
}




function  рассчитатьСдачу(бюджет, цена) {
    if (бюджет >=  цена) {
        return бюджет - цена;
    } else {
        return "Денег недостаточно";
    }
}


function проверитьТемпературу(градусы) {
    if (градусы > 40) {
        return "слишком горячо!";
    } else {
        return "температура в норме"
    }
}


function getchange(budget, price) {
    if (budget >= price) {
        return budget - price;
    } else {
        return "Not enough money";
    }
}



function checkTemp(degrees) {
    if (degrees > 40) {
        return "Too hot!"
    } else {
        return "Temperature is ok!"
    }
}



function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd!";
    }
}



 function getGreeting(hour) {
    if (hour < 12) {
        return "Good morning!";
    } else {
        return "Goog day!"
    }
 }




 const ulProduct = ['Сахар', 'Мука', 'Яйца', 'Шоколад'];
 ulProduct[2];
 ulProduct.length

 ulProduct[3] = "Сливки";




 const цена1 = [10, 25, 40, 15];
 let sum = 0;
 for (let i = 0; i < цена1.length; i++) {
     sum = sum + цена1[i];
}
console.log(цена1[sum]);



const deshovayaCena = цена1.filter(num => num > 20);

const novayaCena = цена1.map(num => num * 2);


const cenaTorta = цена1.filter(num => num >15);

const skidka = cenaTorta.map(num => num * 0.5);



const cities = ["Paris", "Tokio", "Moscow", "London"];
console.log(cities.length);


const numbers = [10, 20, 30,];
numbers.pop();
console.log(numbers.length);





const fruits = ["apple", "orange", "banana"];
console.log(fruits.length);


const colors = ["red", "green", "blue"];
let favouriteColor = colors[0];



let tools = ["hammer", "screwdriver"];
tools[1] = "drill";


let todolist = ["buy milk", "clean room"];
todolist.push("studyJS");


let person = {
    name: "Alia",
    age: 25
};

let user = { id: 101, status: "active" };
console.log(user.status);


const favCities = ["Shandhai", "Istambul", "Magas"];
console.log(favCities[1]);


favCities.push("Dubai");

favCities.shift();


console.log(favCities.length);


const tags = ["js", "html", "css"];
const tagsString = tags.join();

const user1 = {
    name: "Zalina"
    
};


console.log(user1.name);

user.age = 26;

user.isStudent = true;

delete user.age;


for (let i = 1; i <= 10; i++) {
    console.log(i + " coffee portion");
}

for (let i = 5; i > 0; i--) {
    console.log(i);
    if (i === 1) {
        console.log("coffee is ready!");
    }
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even number: " + i);
    }
}

function calculateRem(value) {
    let result = value/16;
    return result + "rem";
}
console.log(calculateRem);


const todoList1 = [
    {title: "Espresso", price: 150, isAvailable: true },
    {title: "Cappuccino", price: 250, isAvailable: true },
    {title: "Latte", price: 300, isAvailable: false }
];
console.log("Total drinks in menuL " + todoList1.length);


function calculateDiscount(price, discountPercent) {
    let discountAmount = (price * discountPercent) / 100;
    let finalPrice = price - discountAmount;
    return "Final price is: " + finalPrice;
}
console.log(calculateDiscount(1000, 20));




function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(10, 20));

function convertToCelsius(fahrenheit) {
return (fahrenheit - 32) * 5 / 9;
}
console.log(convertToCelsius(100));
