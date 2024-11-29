//An object with all the different counties that get a random number between 2 and 4.
let fylkerObject={
    Akershus: getRandomInt(2, 5),
    Oslo: getRandomInt(2, 5),
    Vestland: getRandomInt(2, 5),
    Rogaland: getRandomInt(2, 5),
    Trøndelag: getRandomInt(2, 5),
    Innlandet: getRandomInt(2, 5),
    Agder: getRandomInt(2, 5),
    Østfold: getRandomInt(2, 5),
    MøreogRomsdal: getRandomInt(2, 5),
    Buskerud: getRandomInt(2, 5),
    Vestfold: getRandomInt(2, 5),
    Nordland: getRandomInt(2, 5),
    Telemark: getRandomInt(2, 5),
    Troms: getRandomInt(2, 5),
    Finnmark: getRandomInt(2, 5)
}

//class for client
class Client {
    constructor(name, age, income, county, taxrate, netto) {
        this.name = name;
        this.age = age;
        this.income = income;
        this.county = county;
        this.taxrate = (parseFloat(taxrate)*100) + "%";
        this.netto = netto;
    }
}

//Create the client, by taking the input from the form and adding it into the class Client,
//then using the addClient functio to add to the table
function createClient() {
    let clientName = document.getElementById('clientNameInput').value;
    let clientAge = document.getElementById('clientAgeInput').value;
    let clientIncome = document.getElementById('clientIncomeInput').value;
    let clientCounty = document.getElementById('clientCountyInput').value
    let taxrate = taxRate(clientAge, clientCounty);
    let netto = nettoIncome(clientIncome, taxrate);
    console.log(taxrate);
    console.log(netto);
    let client = new Client(clientName, clientAge, clientIncome, clientCounty, taxrate, netto);
    console.log(client)
    addClient(client.name, client.age, client.income, client.taxrate, client.netto);
}

//Calculates the taxrate
function taxRate(age, fylke){

    let fylkeValue = fylkeSelect(fylke);

    if(age>17 && age<26){
        let taxRate = 0.05 + (parseFloat(fylkeValue)/100)
        console.log("This is tax rate" + taxRate);
        return taxRate
    } else if(age>25 && age<51){
        let taxRate = 0.3 + (parseFloat(fylkeValue)/100)
        return taxRate
    }else {
        let taxRate = 0.15 + (parseFloat(fylkeValue)/100)
        return taxRate
    }
}

//Calculates the netto income
function nettoIncome(income, taxrate){
    let tax = parseFloat(income)* parseFloat(taxrate)
    let netto = parseFloat(income) - parseFloat(tax)
    return netto
}
/*
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
*/

//Creates a random integer between 2 and 4
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }


//Function to add client to the table in HTML
function addClient(name, age, income, tax, netto){
    "use strict";

    var tableBody = document.getElementById("table-body");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");    
    var row = document.createElement("tr");

    td1.innerHTML = name;
    td2.innerHTML  = age;
    td3.innerHTML  = income;
    td4.innerHTML  = tax;
    td5.innerHTML  = netto;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    tableBody.appendChild(row);
}


//A function to get the value of the county from the fylkerObject based on the selected county
function fylkeSelect(fylke){
    if(fylke == "Akershus"){
        let fylkeValue = fylkerObject.Akershus;
        return fylkeValue;
    } else if(fylke == "Oslo"){
        let fylkeValue = fylkerObject.Oslo;
        return fylkeValue;
    } else if(fylke == "Vestland"){
        let fylkeValue = fylkerObject.Vestland;
        return fylkeValue;
    } else if(fylke == "Rogaland"){
        let fylkeValue = fylkerObject.Rogaland;
        return fylkeValue;
    } else if(fylke == "Trøndelag"){
        let fylkeValue = fylkerObject.Trøndelag;
        return fylkeValue;
    } else if(fylke == "Innlandet"){
        let fylkeValue = fylkerObject.Innlandet;
        return fylkeValue;
    } else if(fylke == "Agder"){
        let fylkeValue = fylkerObject.Agder;
        return fylkeValue;
    } else if(fylke == "Østfold"){
        let fylkeValue = fylkerObject.Østfold;
        return fylkeValue;
    } else if(fylke == "Møre og Romsdal"){
        let fylkeValue = fylkerObject.MøreogRomsdal;
        return fylkeValue;
    } else if(fylke == "Buskerud"){
        let fylkeValue = fylkerObject.Buskerud;
        return fylkeValue;
    } else if(fylke == "Vestfold"){
        let fylkeValue = fylkerObject.Vestfold;
        return fylkeValue;
    } else if(fylke == "Nordland"){
        let fylkeValue = fylkerObject.Nordland;
        return fylkeValue;
    } else if(fylke == "Telemark"){
        let fylkeValue = fylkerObject.Telemark;
        return fylkeValue;
    } else if(fylke == "Troms"){
        let fylkeValue = fylkerObject.Troms;
        return fylkeValue;
    } else if(fylke == "Finnmark"){
        let fylkeValue = fylkerObject.Finnmark;
        return fylkeValue;
    } else {
        alert("Choose a county")
    }
}