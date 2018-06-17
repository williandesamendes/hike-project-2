document.getElementById("calculate-button").onclick = function() {

// coletar números dentro das caixas de input

	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);
	let sum = val1 + val2;

	let choice = document.querySelector('input[name="operation"]:checked');

	let operation = choice.value;
	let operationResult = getResult(val1, val2, operation);

	console.log(val1);
	console.log(val2);
	console.log(sum);
	console.log(operation);

// mostrar resultado dentro de elemento com id "result"

	let resultElement = document.getElementById('result');

	resultElement.innerHTML = operationResult;

	function getResult(val1, val2, operation) {
		if(operation === '+') {
			return val1 + val2;
		} else if(operation === '-') {
			return val1 - val2;
		} else if(operation === '*') {
			return val1 * val2;
		} else if(operation === '/') {
			return val1 / val2;
		}
	}
}