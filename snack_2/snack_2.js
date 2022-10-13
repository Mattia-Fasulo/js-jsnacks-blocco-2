const invitedNames = ['Mattia', 'Vittorio', 'Chiara', 'Susanna', 'Antonio', 'Vincenzo', 'Eugenia', 'Matilde'];
const invitedSurname = ['Stark', 'Lannister', 'Targaryen', 'Baratheon', 'Tyrell', 'Greyjoy', 'Arryn', 'Martell'];
const buttonGenera = document.getElementById('button-genera');

let container = document.getElementById('my-container');

// const generateTable = function () {
//     container.innerHTML = "";
//     const tbl = document.createElement("table");
//     const tblBody = document.createElement("tbody");

//     for (let i = 0; i < 8; i++) {
        
//         const row = document.createElement("tr");
      
//         for (let j = 0; j < 1; j++) {
//             const cell = document.createElement("td");
//             const cellText = document.createTextNode(invitedNames[Math.floor(Math.random() * 7)]);
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//         }
//         for (let x = 0; x < 1; x++) {
//             const cell = document.createElement("td");
//             const cellText = document.createTextNode(invitedSurname[Math.floor(Math.random() * 7)]);
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//         }
//         tblBody.appendChild(row);
//     }

//     tbl.appendChild(tblBody);
//     container.appendChild(tbl);




// }

const generateTable = function () {
    container.innerHTML = "";
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let i = 0
    while ( i < 8) {
        
        const row = document.createElement("tr");
        let j = 0;
        while (j < 1) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(invitedNames[Math.floor(Math.random() * 7)]);
            cell.appendChild(cellText);
            row.appendChild(cell);
            j++;
        }

        let x = 0
        while (x < 1) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(invitedSurname[Math.floor(Math.random() * 7)]);
            cell.appendChild(cellText);
            row.appendChild(cell);
            x++;
        }
        tblBody.appendChild(row);
        i++;
    }

    tbl.appendChild(tblBody);
    container.appendChild(tbl);




}



buttonGenera.addEventListener('click', generateTable);




