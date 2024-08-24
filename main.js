let name = prompt ("Введите свое имя")
let ageOld = +prompt ("Введите свой год рождения")
let ageNow = prompt ("Введите нынешний год")
let secret
let solve = ageNow - ageOld 

function info (name, ageOld, ageNow, secret = "|| " + name + ", Ваш возраст = " + solve + " ||") {
    
    let messageName = ("1: " + name + "-(Имя), ")
    let messageOld = ("2: " + ageOld + "-(Год рождения), ")
    let messageNow = ("3: " + ageNow + "-(Нынешний год) " + secret)
    return  messageName + messageOld + messageNow
    
}

console.log(info(name, ageOld, ageNow, secret));