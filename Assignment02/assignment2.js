function abc() {
    var row = document.getElementById("row").value;
    var column = document.getElementById("column").value;
    for (var r = 1; r <= row; r++) {
        table += '<tr>';
        for (var c = 1; c <= column; c++) {
            table += '<td>' + c + '</td>';
        }
        table += '</tr>';
    }
    document.write('<table border=1>' + table + '</table>');
}
