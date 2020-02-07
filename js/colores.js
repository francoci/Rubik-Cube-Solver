$(document).ready(function() {

	// This takes 4-5 seconds on a modern computer
	console.log(Cube.initSolver());

	$("#translate").addClass('hide');

	//La variable color va a guardar el codigo rgb del color
	//La variable colorText va a guardar el id del color
	//1 -> Amarillo (U), 2 -> Naranja (L), 3 -> Azul (F), 4 -> Rojo (R), 
	//5 -> Verde (B), 6 -> Blanco (D)

	let color = "";
	let colorText = "";

	//Valores HEX de los colores

	let blue = "#5c63e6";
	let yellow = "#e8eb36";
	let red = "#e84220";
	let green = "#4bbf39";
	let orange = "#e8a438";
	let white = "#f0f0f0";

	//Variable que voy a usar para marcar la posicion dentro del array
	//Que le corresponde a cada cubie que vamos clickeando
	let posicion = 0;

	//Variables para controlar la cantidad de cubies de cada color
	let cubiesRed = 1;
	let cubiesBlue = 1;
	let cubiesGreen = 1;
	let cubiesWhite = 1;
	let cubiesYellow = 1;
	let cubiesOrange = 1;

	//Array donde voy a guardar los colores de cada cubie
	let rubikCube = [];
	let length = 54;

	//Inicializo el array que va a contener los valores de los cubies
	for (var i = 0; i < length; i++) {
	  rubikCube.push("_");
	}

	//Marco los cubies fijos (Los centrales)
	rubikCube[4] = "U";
	rubikCube[13] = "R";
	rubikCube[22] = "F";
	rubikCube[31] = "D";
	rubikCube[40] = "L";
	rubikCube[49] = "B";
	
	// console.log(rubikCube);

	let cubeString = "";

	function armarString() {
	  	
	  	cubeString = "";

	  	for (var i = 0; i < length; i++) {
			
			cubeString = cubeString + rubikCube[i];

		}
	}

	function calcularCubies() {

		let result = 0;

		let cubiesR = 0;
		let cubiesB = 0;
		let cubiesG = 0;
		let cubiesW = 0;
		let cubiesY = 0;
		let cubiesO = 0;

		//Con el switch voy calculando la cantidad de cubies de cada color en el Array.
		for (var i = 0; i < length; i++) {
			
			switch(rubikCube[i]) {
				case "U":
					cubiesY++;
					break;

				case "R":
					cubiesR++;
					break;

			   	case "F":
				    cubiesB++;
				    break;

			    case "D":
				    cubiesW++;
				    break;

			    case "L":
				    cubiesO++;
				    break;

			    case "B":
				    cubiesG++;
				    break;

				case "_":
					result = 2;
					break;

			}

		}

		//Si el resultado es 2, una posicion en el array contenía "_" por lo que estaba vacia.
		if(result != 2) {

			//Todas las posiciones del array tenían un color, verifico que haya 9 de cada cubie.
			if(cubiesR == 9 && cubiesG == 9 && cubiesB == 9 && cubiesY == 9 && cubiesW == 9 && cubiesO == 9) {
				
				result = 1;
				return result;

			}
			else 
			{
				//Algun color supero los 9 cubies
				result = 0;
				return result;
			}
		}
		else
		{
			return result;
		}

	}


	function traducirSolucion() {

		//El string que contiene la solucion, proveniente de cube.js
		let solucionString = $("#solucion").text();

		//Variable auxiliar.
		let substr = "";

		//En esta variable se almacenará la solución traducida.
		let solucionTraducida = "";

		//Separo los movimientos de la solucion y los voy analizando
		for (var i = 0; i < solucionString.length; i++) {
		  
		  	//Tomo una subcadena de la solución
		  	substr = solucionString.substring(i, i+1);

		  	//Si la subcadena es distinta de espacio, apostrofe o 2, la analizo.
		  	if(substr != " " && substr != "2" && substr != "'") {

		  		//Me fijo si el caracter siguiente es un 2
		  		if(solucionString.substring(i+1, i+2) == "2") {

		  			//En ese caso, a traves del switch concateno a la respuesta.
		  			switch(substr) {
						case "F":
							solucionTraducida = solucionTraducida + "Giro doble, cara frontal<br>";
							break;

						case "R":
							solucionTraducida = solucionTraducida + "Giro doble, cara derecha<br>";
							break;

						case "L":
							solucionTraducida = solucionTraducida + "Giro doble, cara izquierda<br>";
							break;

						case "U":
							solucionTraducida = solucionTraducida + "Giro doble, cara superior<br>";
							break;

						case "D":
							solucionTraducida = solucionTraducida + "Giro doble, cara inferior<br>";
							break;

						case "B":
							solucionTraducida = solucionTraducida + "Giro doble, cara trasera<br>";
							break;

					}
		  		}
		  		else {

		  			//No era un 2, me fijo si el caracter siguiente es un apostrofe
		  			if(solucionString.substring(i+1, i+2) == "'") {

		  				//En ese caso, a traves del switch concateno a la respuesta.
		  				switch(substr) {
							case "F":
								solucionTraducida = solucionTraducida + "Giro simple, anti-horario, cara frontal<br>";
								break;

							case "R":
								solucionTraducida = solucionTraducida + "Giro simple, anti-horario, cara derecha<br>";
								break;

							case "L":
								solucionTraducida = solucionTraducida + "Giro simple, anti-horario, cara izquierda<br>";
								break;

							case "U":
								solucionTraducida = solucionTraducida + "Giro simple, anti-horario, cara superior<br>";
								break;

							case "D":
								solucionTraducida = solucionTraducida + "Giro simple, anti-horario, cara inferior<br>";
								break;

							case "B":
								solucionTraducida = solucionTraducida + "Giro simple, anti-horario, cara trasera<br>";
								break;

						}
		  			}
		  			else {

		  				//Cuando llega a este else, el caracter siguiente no es ni un 2
		  				//ni un apostrofe, por lo que debe ser un espacio. Entonces, a través
		  				//del switch concateno a la respuesta.
						switch(substr) {
							case "F":
								solucionTraducida = solucionTraducida + "Giro simple, cara frontal<br>";
								break;

							case "R":
								solucionTraducida = solucionTraducida + "Giro simple, cara derecha<br>";
								break;

							case "L":
								solucionTraducida = solucionTraducida + "Giro simple, cara izquierda<br>";
								break;

							case "U":
								solucionTraducida = solucionTraducida + "Giro simple, cara superior<br>";
								break;

							case "D":
								solucionTraducida = solucionTraducida + "Giro simple, cara inferior<br>";
								break;

							case "B":
								solucionTraducida = solucionTraducida + "Giro simple, cara trasera<br>";
								break;

						}
					}
		  		}
		  	}
		}

		$("#solucionTraducida").html(solucionTraducida);
	}


	$(".color").click(function(event){

		color = $(this).css("background-color");
		colorText = $(this).data('value');

		switch(colorText) {
			case 1:
				$("#colorSelect").text("Amarillo");
				$("#colorSelect").css("color", color);
				break;

			case 2:
				$("#colorSelect").text("Naranja");
				$("#colorSelect").css("color", color);
				break;

		   	case 3:
			    $("#colorSelect").text("Azul");
			    $("#colorSelect").css("color", color);
			    break;

		    case 4:
			    $("#colorSelect").text("Rojo");
			    $("#colorSelect").css("color", color);
			    break;

		    case 5:
			    $("#colorSelect").text("Verde");
			    $("#colorSelect").css("color", color);
			    break;

		    case 6:
			    $("#colorSelect").text("Blanco");
			    $("#colorSelect").css("color", color);
			    break;

		}

	});

	$(".cubie").click(function(event){

		if(color != "") {

			posicion = $(this).attr('id') - 1;

			if(rubikCube[posicion] == "_") {

				//Modifico el array, sumo uno a la cantidad de 
				//cubies del color correspondietne
				switch(colorText) {
					case 1:
						rubikCube[posicion] = "U";
						cubiesYellow++;
						console.log("Amarillo: "+cubiesYellow);
						break;

					case 2:
						rubikCube[posicion] = "L";
						cubiesOrange++;
						console.log("Naranja: "+cubiesOrange);
						break;

				   	case 3:
					    rubikCube[posicion] = "F";
					    cubiesBlue++;
					    console.log("Azul: "+cubiesBlue);
					    break;

				    case 4:
					    rubikCube[posicion] = "R";
					    cubiesRed++;
					    console.log("Rojo: "+cubiesRed);
					    break;

				    case 5:
					    rubikCube[posicion] = "B";
					    cubiesGreen++;
					    console.log("Verde: "+cubiesGreen);
					    break;

				    case 6:
					    rubikCube[posicion] = "D";
					    cubiesWhite++;
					    console.log("Blanco: "+cubiesWhite);
					    break;
				}
			}
			else {

				//Resto uno a la cantidad de cubies de cada 
				//color, segun corresponda
				switch(rubikCube[posicion]) {

					case "U":
						cubiesYellow--;
						console.log("Amarillo: "+cubiesYellow);
						break;

					case "R":
						cubiesRed--;
						console.log("Rojo: "+cubiesRed);
						break;

				   	case "F":
					    cubiesBlue--;
					    console.log("Azul: "+cubiesBlue);
					    break;

				    case "D":
					    cubiesWhite--;
					    console.log("Blanco: "+cubiesWhite);
					    break;

				    case "L":
					    cubiesOrange--;
					    console.log("Naranja: "+cubiesOrange);
					    break;

				    case "B":
					    cubiesGreen--;
					    console.log("Verde: "+cubiesGreen);
					    break;

				}


				//Modifico el array, sumo uno a la cantidad de 
				//cubies del color correspondietne
				switch(colorText) {
					case 1:
						rubikCube[posicion] = "U";
						cubiesYellow++;
						console.log("Amarillo: "+cubiesYellow);
						break;

					case 2:
						rubikCube[posicion] = "L";
						cubiesOrange++;
						console.log("Naranja: "+cubiesOrange);
						break;

				   	case 3:
					    rubikCube[posicion] = "F";
					    cubiesBlue++;
					    console.log("Azul: "+cubiesBlue);
					    break;

				    case 4:
					    rubikCube[posicion] = "R";
					    cubiesRed++;
					    console.log("Rojo: "+cubiesRed);
					    break;

				    case 5:
					    rubikCube[posicion] = "B";
					    cubiesGreen++;
					    console.log("Verde: "+cubiesGreen);
					    break;

				    case 6:
					    rubikCube[posicion] = "D";
					    cubiesWhite++;
					    console.log("Blanco: "+cubiesWhite);
					    break;
				}

			}

			
			
			$(this).css("background-color",color);

			// console.log(rubikCube);

		}
		else
		{
			alert("Seleccione un color.")
		}
	});


	$("#reset").click(function(event){

		$(".cubie").css("background-color", "#8d8d99");

		$("#solucionTitulo").text("");
		$("#solucion").text("");

		$("#translate").addClass('hide');

		cubiesRed = 1;
		cubiesBlue = 1;
		cubiesGreen = 1;
		cubiesWhite = 1;
		cubiesYellow = 1;
		cubiesOrange = 1;
		
	});


	$("#solve").click(function(event){

		let resultCalcCubies = calcularCubies();

		if(resultCalcCubies == 1) {

			armarString();

			console.log(cubeString);

			const cube = new Cube(Cube.fromString(cubeString));

			if(cube.isSolved()) {
				alert("Cubo ya resuelto!");
			}
			else
			{
				let solucion = cube.solve();

				console.log(solucion);

				$("#solucionTitulo").text("Solución");
				$("#solucion").text(solucion);

				traducirSolucion();

				$("#translate").removeClass('hide');
			}
		}
		else 
		{	
			if(resultCalcCubies == 0) {
				alert("Se excedió en la cantidad de cubies de cada color.");
			}
			else {
				alert("Debe pintar todos los cubies.");
			}	
		}

	});

	$("#random").click(function(event){

		const randomCube = Cube.random();

		cubeString = randomCube.asString();

		let colorCubie = "";
		let cubieNumber = "";

		for (var i = 0; i < length; i++) {

		  	rubikCube[i] = cubeString.substring(i,i+1);

		  	cubieNumber = i+1;

		  	switch(rubikCube[i]) {

				case "U":
					$("#"+cubieNumber).css("background-color", yellow);
					break;

				case "R":
					$("#"+cubieNumber).css("background-color", red);
					break;

			   	case "F":
				    $("#"+cubieNumber).css("background-color", blue);
				    break;

			    case "D":
				    $("#"+cubieNumber).css("background-color", white);
				    break;

			    case "L":
				    $("#"+cubieNumber).css("background-color", orange);
				    break;

			    case "B":
				    $("#"+cubieNumber).css("background-color", green);
				    break;

			}

		}

		cubiesRed = 9;
		cubiesBlue = 9;
		cubiesGreen = 9;
		cubiesWhite = 9;
		cubiesYellow = 9;
		cubiesOrange = 9;

	});

});
