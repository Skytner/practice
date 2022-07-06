function callAlertGames(){
    let result = prompt('RPG(1),RPG souls-like(2),Шутер(3)')
    switch(result){
        case '1':
        alert(games.firstGame);
        break;
        case '2':
        alert(games.secondGame);
        break;
        case '3':
        alert(games.thirdGame);
        break;
        default:
            alert('Ошибка')
    }
}
function callAlertRename(elem){
    let result = prompt('Переименуйте название игры')
    nameGame.innerHTML = result
}
function deleteLetters(){
    for(let i = 0; i<sectionHeading.length; i++){
        let newSectionHeading = sectionHeading[i].innerHTML.replace(/[аиоуе]/gi , '')
        sectionHeading[i].innerHTML = newSectionHeading
    }
    for(let i = 0; i<sectionSubheading.length; i++){
        let newSectionSubheading = sectionSubheading[i].innerHTML.replace(/[аиоуе]/gi , '')
        sectionSubheading[i].innerHTML = newSectionSubheading
    }
    for(let i = 0; i<sectionListElem.length; i++){
        let newSectionListElem= sectionListElem[i].innerHTML.replace(/[аиоуе]/gi , '')
        sectionListElem[i].innerHTML = newSectionListElem
    }
    for(let i = 0; i<sectionText.length; i++){
        let newSectionText = sectionText[i].innerHTML.replace(/[аиоуе]/gi , '')
        sectionText[i].innerHTML = newSectionText
    }

    
 
}
function callAlert(){
    let result = prompt('Введите 1')
    result == 1 ? arrfunc() : alert('Вы не ввели 1')
}
let firstDev = () => {
    gameDeveloper.innerHTML = 'Battlefield'
    gameDeveloper.setAttribute('disabled', true)
    setTimeout(funcReset, 2000)
}
let secondDev = () => {
    gameDeveloper.innerHTML = 'Elden Ring'
    gameDeveloper.setAttribute('disabled', true)
    setTimeout(funcReset, 2000)
}
let thirdDev = () => {
    gameDeveloper.innerHTML = "Assasin's Creed"
    gameDeveloper.setAttribute('disabled', true)
    setTimeout(funcReset, 2000)
}
let arrfunc = () => {alert('Сработала стрелочная функция!') 
}
let funcReset = () => {
    gameDeveloper.removeAttribute('disabled', false)
    gameDeveloper.innerHTML = 'Выберите один из нескольких жанров'
}
function callAlertGameDeveloper(){
    let result = prompt('DICE(1),Bandai Namco(2),Ubisoft(3)')
    result == 1 ? firstDev():
    result == 2 ? secondDev(): 
    result == 3 ? thirdDev():
        alert('Ничего из перечисленного не выбрано')
}