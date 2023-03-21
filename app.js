const billInput = document.querySelector("#billTotalInput");
const tipInput = document.querySelector("#tipInput");
const numberOfPeopleDiv = document.querySelector("#numberOfPeople");
const perPersonTotalDiv = document.querySelector("#perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

//
const calculateBill = () => {
    const bill = Number(billInput.value);
    const tipPercent = Number(tipInput.value) / 100;
    const tipAmount = bill * tipPercent;
    const total = bill + tipAmount

    const perPersonTotal = total / numberOfPeople;
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

}

const increasePeople = () => {
    numberOfPeople += 1;
    numberOfPeopleDiv.innerText= numberOfPeople;
    
    calculateBill()
}

const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        return
    } else{
        numberOfPeople -= 1;
        numberOfPeopleDiv.innerText = numberOfPeople;
        calculateBill()
    }
}