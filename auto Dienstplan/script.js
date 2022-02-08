function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // create a <table> element and a <tbody> element
    var table = document.createElement("table");
    table.setAttribute("id", "table1");
    var tableBody = document.createElement("tbody");

    // create cells
    for (var i = 0; i < 2; i++) {
        // create a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
            // Make a cell (td) and cellText (TextNode). append the cellText (TextNode)
            // to the cell (td). append the cell to the row (tr)
            var cell = document.createElement("td");
            var cellText = document.createTextNode("row " + i + " column " + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // append the row to the tableBody (tbody)
        tableBody.appendChild(row);
    }

    // append tableBody in the table
    table.appendChild(tableBody);
    // append <table> into <body>
    body.appendChild(table);
    // // sets the border attribute of table to 2;
    // table.setAttribute("border", "1");
}

generate_table();

let employees = ["Markus Grönemann", "Laura Lunka", "Sabrina Löscher"];
let month = "february"


for (i = 0; i < table1.rows.length; i++) {
    table1.rows[0] = "sfa"
    item.replaceChild(textnode, item.childNodes[0]);

}

print(employees)