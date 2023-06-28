class NumericInput {
  constructor(inputElement) {
    this.inputElement = inputElement;
  }

  getValue() {
    return this.inputElement.value;
  }

  setValue(value) {
    this.inputElement.value = value;
  }

  validate() {
    const value = parseFloat(this.inputElement.value);
    if (isNaN(value) || value < 0) {
      this.inputElement.value = '';
      alert('Zadejte platné číslo větší nebo rovno nule.');
      return false;
    }
    return true;
  }
}

const create_button = document.getElementById('create');
const ageInput = new NumericInput(document.getElementById('age'));
const mobileNumberInput = new NumericInput(document.getElementById('mobileNumber'));


let clientArray = [];

function readFormData () {
  // nacti data z formulare
  let firstName = document.getElementById("firstName").value;
  let surname = document.getElementById("surname").value;
  let age = document.getElementById("age").value;
  let mobileNumber = document.getElementById("mobileNumber").value;

  let newClient = firstName + "_" + surname;
  // vytvor novy objekt klienta
  newClient = new Client(firstName, surname, age, mobileNumber);

  clientArray.push(newClient);
}


function dataToTable (clientArray) {
  // vytvor tabulku 
  const insuranceTable = document.getElementById("insertTable");
  insuranceTable.innerHTML = "";

  clientArray.forEach((client) => {
    let row = document.createElement("tr");

    Object.values(client).forEach((value) => {
      let cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    insuranceTable.appendChild(row);
  });
}


create_button.addEventListener('click', () => {
  if (ageInput.validate() && mobileNumberInput.validate()) {
    readFormData();
    dataToTable(clientArray);
    ageInput.setValue('');
    mobileNumberInput.setValue('');
    document.getElementById("insuranceFormInsert").reset();
  }
});















