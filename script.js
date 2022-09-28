function calculateTip(event) {
    event.preventDefault();
    let totalCont = document.getElementById('totalCont').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;

    if (totalCont == "" | serviceQuality == 0) {
        alert('Por favor, preencha os valores')
        return;
    }

    if (numOfPeople == "" | numOfPeople <=1 ) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    let total = (totalCont * serviceQuality) / numOfPeople;
    total = total.toFixed(2); //para duas casas decimais, apenas
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);