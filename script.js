function fibonacci() {
  count = parseInt(document.getElementById("inCount").value);
    a = 0, b = 1, sum = 0;
    i = 0;
    output = "<h2>Pierwszych " + count + " elementów ciągu Fibonacciego:</h2> ";
    var refreshFibonacci = setInterval(function() {
	    if (i < count) {
		output += a + "<br>";
		sum = a + b;
		a = b;
		b = sum;
		document.getElementById("pSeries").innerHTML = output;
	    }
    	i++
    }, 3000);
}
