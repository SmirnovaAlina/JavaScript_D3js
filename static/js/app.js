// from data.js
var tableData = data;

function buildTable(arr) {
    console.log(tableData.length)
    var tbody = d3.select("tbody");
    arr.forEach((ufo) => {
        var row = tbody.append("tr");
        dict_value = Object.values(ufo);
        dict_value.forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}

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

buildTable(tableData);
var button = d3.select("#filter-btn");
button.on("click", filterData);

