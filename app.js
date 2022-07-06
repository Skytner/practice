let nameGame = document.getElementById('nameOfGame')
let sectionBlock = document.querySelectorAll('.section')
let sectionHeading = document.querySelectorAll('.section__heading')
let sectionListElem = document.getElementsByTagName('li')
let sectionSubheading = document.querySelectorAll('.section__subheading')
let sectionText = document.querySelectorAll('.section__text') 
let arrayText = document.getElementById('arrayThirdText')
let gameDeveloper = document.getElementById('gameDeveloper')
let games = {
    firstGame: 'The Witcher 3',
    secondGame: 'Dark Souls 3',
    thirdGame: 'TLOU'
}
let multiArray = [['A','B','C'],[1,2,3]]



document.getElementById('arrayText').innerHTML = multiArray
document.getElementById('arrayFirstText').innerHTML = multiArray[0]
document.getElementById('arraySecondText').innerHTML = multiArray[1]

for(let i = 0; i<2; i++)
    arrayText.innerHTML += multiArray[0][i]
    for(let i = 0; i<2; i++)
        arrayText.innerHTML += multiArray[1][i]
