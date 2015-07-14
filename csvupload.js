var app;
$(function() {
    // The event listener for the file upload
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);	
 });
    // Method that reads and processes the selected file
    function upload(evt) {
	    file = evt.target.files[0];
	    console.log("yikes!!!", file);
	    var reader = new FileReader();
	    reader.readAsText(file);
	 	reader.onload = loaded;
	}

	function loaded(evt) {
    alert("File Loaded Successfully");
    var data = evt.target.result;
	  console.log("what is this", parseInt(data));
    console.log("this is the data", data);
    render(data);
	}

//D3 Code Here
	function render(data) {
		var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);
    d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });	
	}



$('#button2').click(function() {
	console.log("Hellloooo", csvData);
});

//D3 Code here
