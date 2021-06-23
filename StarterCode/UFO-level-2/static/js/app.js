// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);

//  Update each cell's text with
//  table values 
// Append a cell to the row for each value
// in the object
tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers and complete function
button.on("click", function() {


    tbody.html("");

  // Prevent the page from refreshing
    d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#category");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);

    console.log(filteredData);

//  Update each cell's text with
//  table values 
// Append a cell to the row for each value
// in the object
    filteredData.forEach((selections) => {
      var row = tbody.append("tr");
      Object.entries(selections).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
});
})

