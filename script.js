//If-Else  ve swich case suallari

// 1)Ədədin müsbət, mənfi və ya sıfır olmasını müəyyən edən
// if-else if-else konstruksiyasını yaradın.

let num1 = 10;
let num2 = 7;

if (num1 > 0 && num2 > 0) {
    console.log("reqemler musbetdir");
} else {
    console.log("reqemler menfidir");
}

//2) Müəyyən bir istifadəçi roluna
// (admin, istifadəçi, qonaq) əsaslanan müxtəlif mesajları
// qaytaran keçid-case strukturunu yazın.

let vezife = prompt("vezifenizi yazin");

switch (vezife) {
    case "admin":
        console.log("admin xos geldin");
        break;
    case "istifadəçi":
        console.log("istifadəçi xos geldin");
        break;
    case "qonaq":
        console.log("qonaq xos geldin");
        break;

    default:
        console.log("sizin burda vezifeniz yoxdur");
}

//3) Ədədin cüt və ya tək olduğunu müəyyən edən if-else 
// konstruksiyasını yazın.

let eded = 11;

if (eded % 2 == 0) {
    console.log("eded cutdu");
} else {
    console.log("eded tekdi");
}

//4)Ədədin müsbət və ya mənfi olmasını təyin edən ternary 
// operatordan istifadə edərək ifadə yazın.

let eded1 = 77;
eded1 > 0 ? console.log("eded musbetdir") : console.log("eded menfidir");


// 5) == və === operatorları arasındakı fərqi göstərən numune 
// yazın.


1 == '1' // true
true == 1 // true
false == 0 // true
null == undefined // true

1 === '1' // false
true === 1 // false
false === 0 // false
null === undefined // false


//6)!== operatorundan istifadə edərək ədədin 10-a bərabər olmadığını 
// yoxlayan ifadə yaradın.


let eded3 = 33;

if (eded3 !== 10) {
    console.log("eded 10 deyil");
} else {
    console.log("eded 10 dur");
}

// 7)Ədədin 5-dən böyük və 10-dan kiçik olmasını yoxlayan ifadə yazın.

let eded4 = 8;

if (eded3 > 5 && eded3 < 10) {
    console.log("eded 5 ve 10 araligindadir");
} else {
    console.log("eded ya 5den balaca ya da 10 dan boyukdur");
}

//8)Əgər varsa istifadəçi adı dəyişənini, əks halda
//isə "Anonim"i qaytaran nullish coalescing  operatorundan 
//istifadə edin.


let ad = null;

ad ?? console.log("nulldir");

//9)Boolean dəyərinin tərsini qaytaran ifadə yazın.

let bool = true;


let bool1 = !bool;

console.log(bool1);

// 10)Hər iki şərtin doğru olub olmadığını yoxlayan && ifadəsi yaradın.

let eded6 = 8;
let eded5 = -8;

if (eded6 > 0 && eded5 < 0) {
    console.log("her ikisi dogrudur");
} else {
    console.log("ikisinden biri yanlisdir");
}

//11)İki şərtdən ən azı birinin doğru olub olmadığını yoxlayan 
// ||. ifadə yaratmaq.


let eded7 = 11;


if (eded7 > 10 || eded7 < 10) {
    console.log("ikisinden biri dogrudur");
} else {
    console.log("her ikisi yanlisdir");
}

//12) Ədədin həm müsbət, həm də cüt olmasını yoxlayan ifadə yazın.

let eded8 = 20;

if (eded8 > 0 && eded8 % 2 == 0) {
    console.log("Ədədin həm müsbət, həm də cüt");
} else {
    console.log("yanlis");
}

// 13)İstifadəçi adı və parolun hər ikisinin etibarlı olub olmadığını yoxlayan if-else strukturunu yazın.



let username = "ad";
let password = "parol";


if (username && password) {
    console.log("ad ve parol var");
} else {
    console.log("ad ve ya parol bosdur");
}

//14)Ədədin mənfi və ya sıfır olduğunu yoxlayan və müvafiq olaraq mesajı qaytaran switch-case konstruksiyasını yazın.



let eded9 = -10;

switch (true) {
    case eded9 < 0:
        console.log("eded menfidir");
        break;
    case eded9 == 0:
        console.log("eded sifirdir");
        break;
    default: console.log("eded musbetdir");
}