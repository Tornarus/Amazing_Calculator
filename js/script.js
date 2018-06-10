document.getElementById("calculate-button").onclick = function() {
	
	let val1 = parseInt(document.getElementById('elem-1').value);
    let val2 = parseInt(document.getElementById('elem-2').value);

	if (isNaN(val1)) {
        alert('Digite valores nas caixas!');
        document.getElementById('elem-1').focus();
    } else if(isNaN(val2)) {
        alert('Digite valores nas caixas!');
        document.getElementById('elem-2').focus();
    } else {
        let choice = document.querySelector('input[name="operation"]:checked');
        let operation = choice.value;

        let result = getResult(val1, val2, operation);
        document.getElementById('result').innerHTML = result;
    }
}

function getResult(val1, val2, operation) {
	if (operation === '+') {
		return val1 + val2;
	} else if (operation === '-') {
		return val1 - val2;
	} else if (operation === '*') {
		return val1 * val2;
	} else if (operation === '/') {
		return val1 / val2;
	}
}
