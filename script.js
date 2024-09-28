const coin = document.querySelector('#coin')
const scoreEl = document.querySelector('#score')
const BuyUpgradeBtn = document.querySelector('#BuyUpgrade')

let score = 0
let clickValue = 1
let upgradeCost = 100


coin.addEventListener('click', () => {

    score = score + clickValue
scoreEl.innerText = score

})

BuyUpgradeBtn.addEventListener('click', () => {
    if (score > upgradeCost) {
        score = score - upgradeCost
        clickValue = clickValue + 1
        upgradeCost = upgradeCost * 2
        BuyUpgradeBtn.innerText = `Купить улучшение ${upgradeCost}`
    }
}) 

