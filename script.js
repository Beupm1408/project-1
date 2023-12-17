let data = JSON.parse(localStorage.getItem('data')) || [];
let form = document.getElementById('myForm');
let table = document.getElementById('myTable');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let question = document.getElementById('question').value;
        let answer = document.getElementById('answer').value;
        data.push({question: question, answer: answer});
        localStorage.setItem('data', JSON.stringify(data));
    });
}

if (table) {
    function renderTable() {
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }
        data.forEach((item, index) => {
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            cell1.innerHTML = index + 1;
            cell2.innerHTML = item.question;
            cell3.innerHTML = item.answer;
            cell4.innerHTML = '<button onclick="deleteRow(' + index + ')">Xóa</button>';
        });
    }

    function deleteRow(index) {
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        renderTable();
    }

    renderTable();
}