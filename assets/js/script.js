//Variables
let table = document.querySelector('#tbody');

//Events
generateTable();

//Functions
function generateTable() {
    //função para gerar tabela
    html = '';
    //importar items do array
    tableItems.forEach((rowElement, rowIndex) => {
        html += "<tr>";
        html += `<td>${rowElement.nome}</td>`;
        html += `<td>${rowElement.categoria}</td>`;
        html += `<td>${rowElement.descricao}</td>`;
        html += `<td>${rowElement.site}</td>`;
        html += `<td><a href="${rowElement.site}" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a></td>`;
        html += "</tr>";
    });

    table.innerHTML = html;
}