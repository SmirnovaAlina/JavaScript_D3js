// from data.js
var tableData = data;

function buildTable(arr) {
    console.log(tableData.length)
    var tbody = d3.select("tbody");
    arr.forEach((ufo) => {
        var row = tbody.append("tr");
        // Object.entries(ufo).forEach(([key, value]) => {
        // var cell = row.append("td");
        // cell.text(value);
        dict_value = Object.values(ufo);
        dict_value.forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}

buildTable(tableData);

// function buildNewTable (filteredData) {
//     var tbody = d3.select("tbody");
//     var new_tbody = document.createElement('tbody');
//     populate_with_new_rows(new_tbody);
//     old_tbody.parentNode.replaceChild(new_tbody, old_tbody);


// }

function filterData() {
    d3.event.preventDefault();

    var input_field = d3.select("#datetime");
    var input_value = input_field.property("value");

    var filteredData = tableData.filter(ufo => ufo.datetime === input_value);
    console.log(filteredData);
    var tbody = d3.select("tbody");
    tbody.html("")

    buildTable(filteredData);


}

var button = d3.select("#filter-btn");
button.on("click", filterData);

