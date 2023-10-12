//CREARE IL TABELLONE CON I NUMERI

const createTab = function (tab) {
    
    const boardTab = document.getElementById("board"); 
    const numbersToCheck = 90

    for (let i = 0; i < numbersToCheck; i++) {
      
      const numberCellDiv = document.createElement("div"); 
      numberCellDiv.classList.add("numberContainer"); 
  
      const numberCellContent = document.createElement("h3"); 
      numberCellContent.innerText = i + 1; 
  
      numberCellDiv.appendChild(numberCellContent)
      boardTab.appendChild(numberCellDiv)
    }
}
createTab()

//CREARE UN BOTTONE PER L'ESTRAZIONE DEI NUMERI
function randomExtraction() {
    const randomNum = Math.floor(Math.random() * 90);
    document.getElementById("extNumber").value = randomNum;

    const numberCellContent = document.getElementsByTagName("h3")
    const numberCellDiv = document.getElementsByClassName("numberContainer")

    if(randomNum == numberCellContent) {
        numberCellDiv.classList.add("checked") 
    }
}

//EVIDENZIARE LA CELLA CON IL NUMERO ESTRATTO E FARE IN MODO CHE RIMANGA EVIDENZIATA