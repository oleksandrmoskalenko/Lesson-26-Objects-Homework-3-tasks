"use strict"

//TASK 1
let $task1Field = document.querySelector('.task1 input')
let $task11Btn = document.querySelector('.task11')
let $task12Btn = document.querySelector('.task12')
let $task11Result = document.querySelector('.result11')
let $task12Result = document.querySelector('.result12')

let carProfile = {
    manufacturer: 'Porsche AG',
    model: 'Panamera Turbo S E-Hybrid Executive',
    "year of issue": '2020',
    "average speed (in km/h)": 70
}

console.log(carProfile)

let showInfo = (maker, model, year, avgSpeed) => {
    $task11Result.innerText = `manufacturer: ${carProfile.manufacturer} 
    model: ${carProfile.model}
    year of issue: ${carProfile["year of issue"]}
    average speed (in km/h): ${carProfile["average speed (in km/h)"]}`
}

let calcHours = (distance) => {
    let hours = (distance / carProfile["average speed (in km/h)"]) + Math.floor(distance / (4 * carProfile["average speed (in km/h)"]))
    if (distance % (4 * carProfile["average speed (in km/h)"]) == 0) hours--
    if (distance == '') hours = 0
    $task12Result.innerText = `Time to cover the distance is: ${hours}`
    $task1Field.value = ''
}

$task11Btn.addEventListener('click', () => showInfo())
$task12Btn.addEventListener('click', () => calcHours($task1Field.value))

//TASK 2
let fraction1 = { numerator: '', denominator: '' }
let fraction2 = { numerator: '', denominator: '' }

let $task2Field1 = document.getElementById('input21')
let $task2Field2 = document.getElementById('input22')
let $task2Field3 = document.getElementById('input23')
let $task2Field4 = document.getElementById('input24')

let $task20Btn = document.querySelector('.task20')
let $task21Btn = document.querySelector('.task21')
let $task22Btn = document.querySelector('.task22')
let $task23Btn = document.querySelector('.task23')
let $task24Btn = document.querySelector('.task24')

let $task21Result = document.querySelector('.result21')
let $task22Result = document.querySelector('.result22')
let $task23Result = document.querySelector('.result23')
let $task24Result = document.querySelector('.result24')

let fracAddition = (num1, den1, num2, den2) => {
    let num = fracReduction(num1 * den2 + num2 * den1, den1 * den2)
    let den = fracReduction(den1 * den2, num1 * den2 + num2 * den1)
    if (den == 1)
        $task21Result.innerText = `The sum is ${num}`
    else
        $task21Result.innerText = `The sum is ${num}/${den}`
}

let fracSubtraction = (num1, den1, num2, den2) => {
    let num = fracReduction(num1 * den2 - num2 * den1, den1 * den2)
    let den = fracReduction(den1 * den2, num1 * den2 - num2 * den1)
    if (den < 0) {
        num = -num
        den = -den
    }
    if (den == 1)
        $task22Result.innerText = `The difference is ${num}`
    else
        $task22Result.innerText = `The difference is ${num}/${den}`
}

let fracMultiplication = (num1, den1, num2, den2) => {
    let num = fracReduction(num1 * num2, den1 * den2)
    let den = fracReduction(den1 * den2, num1 * num2)
    if (den == 1)
        $task23Result.innerText = `The sum is ${num}`
    else
        $task23Result.innerText = `The sum is ${num}/${den}`
}

let fracDivision = (num1, den1, num2, den2) => {
    let num = fracReduction(num1 * den2, den1 * num2)
    let den = fracReduction(den1 * num2, num1 * den2)
    if (den == 1)
        $task24Result.innerText = `The sum is ${num}`
    else
        $task24Result.innerText = `The sum is ${num}/${den}`
}

$task20Btn.addEventListener('click', () => {
    fraction1.numerator = $task2Field1.value
    fraction1.denominator = $task2Field2.value
    fraction2.numerator = $task2Field3.value
    fraction2.denominator = $task2Field4.value
    $task2Field1.value = ''
    $task2Field2.value = ''
    $task2Field3.value = ''
    $task2Field4.value = ''
    console.log(fraction1)
    console.log(fraction2)
})

$task21Btn.addEventListener('click', () => fracAddition(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator))
$task22Btn.addEventListener('click', () => fracSubtraction(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator))
$task23Btn.addEventListener('click', () => fracMultiplication(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator))
$task24Btn.addEventListener('click', () => fracDivision(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator))

function fracReduction(num0, den0) {
    return num0 / gcd(num0, den0)
}

function gcd(m, n) {
    while (n !== 0) n = m % (m = n);
    return m;
}

//TASK 3

let someTime = {
    hours: 20,
    minutes: 30,
    seconds: 45
}
console.log(someTime)


let $task3Field1 = document.getElementById('input31')
let $task3Field2 = document.getElementById('input32')
let $task3Field3 = document.getElementById('input33')

let $task30Btn = document.querySelector('.task30')
let $task31Btn = document.querySelector('.task31')
let $task32Btn = document.querySelector('.task32')
let $task33Btn = document.querySelector('.task33')

let $task30Result = document.querySelector('.result30')
let $task31Result = document.querySelector('.result31')
let $task32Result = document.querySelector('.result32')
let $task33Result = document.querySelector('.result33')

let showTime = (h, m, s) => {
    if (h < 10) h = "0" + h
    if (m < 10) m = "0" + m
    if (s < 10) s = "0" + s
    $task30Result.innerText = `The time is ${h} : ${m} : ${s}`
}

$task30Btn.addEventListener('click', () => showTime(someTime.hours, someTime.minutes, someTime.seconds))

$task31Btn.addEventListener('click', () => fromSeconds(addSeconds(Number($task3Field1.value))))
$task32Btn.addEventListener('click', () => fromSeconds(addMinutes(Number($task3Field2.value))))
$task33Btn.addEventListener('click', () => fromSeconds(addHours(Number($task3Field3.value))))




function addSeconds(s) {
    return toSeconds(someTime.hours, someTime.minutes, someTime.seconds) + s
}

function addMinutes(m) {
    return toSeconds(someTime.hours, someTime.minutes, someTime.seconds) + 60 * m
}
function addHours(h) {
    return toSeconds(someTime.hours, someTime.minutes, someTime.seconds) + 3600 * h
}

function toSeconds(h, m, s) {
    return h * 3600 + m * 60 + s * 1
}

function fromSeconds(s) {
    let h = (s - s % 3600) / 3600,
        m = s - h * 3600
    m = (m - m % 60) / 60
    s = s - h * 3600 - m * 60
    if (h > 23) h %= 24
    showTime(h, m, s)
}