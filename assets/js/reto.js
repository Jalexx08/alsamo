// Pantalla
//* Pantallas

let letras = document.getElementById('letras');
let numeros = document.getElementById('numeros');

//* Botones

let a1 = document.getElementById('a1');
let b2 = document.getElementById('b2');
let c3 = document.getElementById('c3');
let d4 = document.getElementById('d4');
let e5 = document.getElementById('e5');
let f6 = document.getElementById('f6');
let g7 = document.getElementById('g7');
let h8 = document.getElementById('h8');
let i9 = document.getElementById('i9');
let j0 = document.getElementById('j0');

//* Banderas

let letraActive = true;
let numeroActive = false;

//* Acumuladores

let letrasAcum = '';
let numerosAcum = '';

//* Funciones

const btnA1 = () => {
	if (letraActive) {
		if (letrasAcum === '' || !letrasAcum.includes('A')) {
			letrasAcum += 'A';
			letras.innerText = letrasAcum;
		} else {
			alert('No debes incluir más de dos veces el mismo caracter');
		}
	}

	if (numeroActive) {
		if ((numerosAcum == '' || !numerosAcum.includes('1')) && numeroActive) {
			numerosAcum += '1';
			numeros.innerText = numerosAcum;
		} else {
			alert('No debes incluir más de dos veces el mismo caracter');
		}
	}
};

const btnB2 = () => {
	if (letraActive) {
		if (letrasAcum.includes('A', 0)) {
			if (!letrasAcum.includes('B')) {
				letrasAcum += 'B';
				letras.innerText = letrasAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
	if (numeroActive) {
		if (numerosAcum.includes('1', 0)) {
			if (!numerosAcum.includes('2')) {
				numerosAcum += '2';
				numeros.innerText = numerosAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
};

const btnC3 = () => {
	if (letraActive) {
		if (letrasAcum.includes('B', 1)) {
			if (!letrasAcum.includes('C')) {
				letrasAcum += 'C';
				letras.innerText = letrasAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}

	if (numeroActive) {
		if (numerosAcum.includes('2', 1)) {
			if (!numerosAcum.includes('3')) {
				numerosAcum += '3';
				numeros.innerText = numerosAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
};

const btnD4 = () => {
	if (letraActive) {
		if (letrasAcum.includes('C', 2)) {
			if (!letrasAcum.includes('D')) {
				letrasAcum += 'D';
				letras.innerText = letrasAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}

	if (numeroActive) {
		if (numerosAcum.includes('3', 2)) {
			if (!numerosAcum.includes('4')) {
				numerosAcum += '4';
				numeros.innerText = numerosAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
};

const btnE5 = () => {
	if (letraActive) {
		if (letrasAcum.includes('D', 3)) {
			if (!letrasAcum.includes('E')) {
				letrasAcum += 'E';
				letras.innerText = letrasAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}

	if (numeroActive) {
		if (numerosAcum.includes('4', 3)) {
			if (!numerosAcum.includes('5')) {
				numerosAcum += '5';
				numeros.innerText = numerosAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
};

const btnF6 = () => {
	if (letraActive) {
		if (letrasAcum.includes('E', 4)) {
			if (!letrasAcum.includes('F')) {
				letrasAcum += 'F';
				letras.innerText = letrasAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}

	if (numeroActive) {
		if (numerosAcum.includes('5', 4)) {
			if (!numerosAcum.includes('6')) {
				numerosAcum += '6';
				numeros.innerText = numerosAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
};

const btnG7 = () => {
	if (letraActive) {
		if (letrasAcum.includes('F', 5)) {
			if (!letrasAcum.includes('G')) {
				letrasAcum += 'G';
				letras.innerText = letrasAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}

	if (numeroActive) {
		if (numerosAcum.includes('6', 5)) {
			if (!numerosAcum.includes('7')) {
				numerosAcum += '7';
				numeros.innerText = numerosAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
};

const btnH8 = () => {
	if (letraActive) {
		if (letrasAcum.includes('G', 6)) {
			if (!letrasAcum.includes('H')) {
				letrasAcum += 'H';
				letras.innerText = letrasAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}

	if (numeroActive) {
		if (numerosAcum.includes('7', 6)) {
			if (!numerosAcum.includes('8')) {
				numerosAcum += '8';
				numeros.innerText = numerosAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
};

const btnI9 = () => {
	if (letraActive) {
		if (letrasAcum.includes('H', 7)) {
			if (!letrasAcum.includes('I')) {
				letrasAcum += 'I';
				letras.innerText = letrasAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}

	if (numeroActive) {
		if (numerosAcum.includes('8', 7)) {
			if (!numerosAcum.includes('9')) {
				numerosAcum += '9';
				numeros.innerText = numerosAcum;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}
};

const btnJ0 = () => {
	if (letraActive) {
		if (letrasAcum.includes('I', 8)) {
			if (!letrasAcum.includes('J')) {
				letrasAcum += 'J';
				letras.innerText = letrasAcum;
				letraActive = false;
				numeroActive = true;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			alert('Debe ser en orden');
		}
	}


	if (numeroActive && numerosAcum.length>0) {
		if (numerosAcum.includes('9', 8)) {
			if (!numerosAcum.includes('0')) {
				numerosAcum += '0';
				numeros.innerText = numerosAcum;
				numeroActive = false;
			} else {
				alert('No debes incluir más de dos veces el mismo caracter');
			}
		} else {
			 alert('Debe ser en orden');
		}
	}
};

//* Eventos

a1.onclick = () => {
	btnA1();
};
b2.onclick = () => {
	btnB2();
};
c3.onclick = () => {
	btnC3();
};
d4.onclick = () => {
	btnD4();
};
e5.onclick = () => {
	btnE5();
};
f6.onclick = () => {
	btnF6();
};
g7.onclick = () => {
	btnG7();
};
h8.onclick = () => {
	btnH8();
};
i9.onclick = () => {
	btnI9();
};
j0.onclick = () => {
	btnJ0();
};
