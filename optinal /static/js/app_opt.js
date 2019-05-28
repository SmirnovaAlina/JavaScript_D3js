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
    console.log(typeof(input_value));

    var filteredData = tableData.filter(ufo => ufo.datetime === input_value);
    // var filteredData = tableData.filter(ufo => Object.keys(ufo).some(k => ufo[k].toLowerCase().includes(input_value.toLowerCase()))) not working;
   // var filteredData = tableData.filter(ufo => Object.values(ufo).some(v => v.toLowerCase()=== input_value.toLowerCase())));
   // var filteredData = tableData.filter(ufo => Object.values(ufo).some(v => v.toLowerCase().includes(input_value.toLowerCase())));
    console.log(filteredData);
    var tbody = d3.select("tbody");
    tbody.html("");

    buildTable(filteredData);


}

buildTable(tableData);


function getData(filter) {
    switch (filter) {
    case "byDate":
        document.getElementById("labelfilter").innerHTML = "Enter a Date";
        document.getElementById("datetime").placeholder = "1/11/2011";
      break;
    case "byCity":      
        document.getElementById("labelfilter").innerHTML = "Enter City";
        document.getElementById("datetime").placeholder = "bonita";
      break;
    case "byState":
        document.getElementById("labelfilter").innerHTML = "Enter State";
        document.getElementById("datetime").placeholder = "ca";     
      break;
    case "byCountry":
        document.getElementById("labelfilter").innerHTML = "Enter Country"; 
        document.getElementById("datetime").placeholder = "us";
      break;
    case "byShape":
        document.getElementById("labelfilter").innerHTML = "Enter Shape";   
        document.getElementById("datetime").placeholder = "triangle";
      break;
    default:        
        document.getElementById("labelfilter").innerHTML = "Enter a Date";   
        document.getElementById("datetime").placeholder = "1/11/2011";
    }
    // updatePlotly(data);
  }

var button = d3.select("#filter-btn");
button.on("click", filterData);

