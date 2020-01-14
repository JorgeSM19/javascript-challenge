// Get a reference to the table body
var tbody = d3.select("tbody");

// weather report values (weekday, date, high, low)
function fillTable(data) {
    data.forEach(ufoReport => {
        console.log(ufoReport);
        let row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}


// Select objects
function filterDates() {
    let inputText = d3.select("#datetime").node().value;
    let tables = d3.select(".ufos-table");
    let subData = data.filter(d => d.datetime === inputText)
    console.log(subData)
    tbody.html("")
    fillTable(subData);
    // return d3.select(".ufos-table").filter(data.datetime == data.datetime).update(".ufos-tables")
}

d3.select("#filter-btn").on("click", filterDates);

fillTable(data);

/*
button.on("click", () => {
    d3.select("#datetime").filter(function(d) {
        return !('data' in d) || data.datetime == data.datetime;
    });
    update(".ufos-table");
});

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
*/