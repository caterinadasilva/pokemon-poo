
function Pokemon(nombre, color, ataque, vida) {
	this.nombre = nombre;
	this.color = color;
	this.nivelAmistad = 70;
	this.vida = vida;
	this.ataque = ataque;
	this.imagen = new Image();
	this.imagen.src = "img/" + this.nombre + ".png";

	this.mostrarPokemon = function() {
		return('Hola, soy ' + this.nombre + ' y soy de color ' + this.color);
	}
	this.aumentarAmistad = function(valor) {
		this.nivelAmistad = this.nivelAmistad + valor;
	}
	this.atacar = function(pokemon) {
		pokemon.vida = pokemon.vida - this.ataque;
		console.log(pokemon.vida);
	}
	this.mostrar = function() {
		var pokedex = document.getElementById('pokedex');
		pokedex.innerHTML += "<li class='pokeCaja'><img src='" + this.imagen.src + "' title='" + this.nombre +"'><h3>" + this.nombre + "</h3><p><span>Vida:</span> " + this.vida + "</p><p><span>Ataque:</span> " + this.ataque + "</p></li>";
  }
}

function opcion(el){
	var select = document.getElementsByClassName("select-choice");
	select[0].innerHTML += '<option value="' + equipo.indexOf(el) + '">' + el.nombre + '</option>';
	select[1].innerHTML += '<option value="' + equipo.indexOf(el) + '">' + el.nombre + '</option>';
}

var vs = [];

function toggle(obj) {
    var contrincante = obj.value;
    console.log(contrincante);
	vs.push(contrincante);
}

function fight(vs) {
	console.log(vs);
	if (vs[0] == null || vs[1] == null) {
		alert("Debes elegir dos pokémon");
	} else {
		if (vs[0] === vs[1]) {
		alert("Este pokémon no puede atacarse a sí mismo!")
		vs.splice(1,vs.length);
	} else {
		equipo[vs[0]].atacar(equipo[vs[1]]);
		var arena = document.getElementById("arena");
		arena.innerHTML += "<p><span>" + equipo[vs[0]].nombre + "</span> ha atacado a <span>" + equipo[vs[1]].nombre + "</span></p>";
		if (equipo[vs[1]].vida <= 0) {
			arena.innerHTML += "<p><span>" + equipo[vs[1]].nombre + "</span> se ha desmayado.</p>";
			arena.innerHTML += "<h3>¡<span>" + equipo[vs[0]].nombre + "</span> ha ganado la batalla!</h3>";
		} else {
			arena.innerHTML += "<p><span>" + equipo[vs[1]].nombre + "</span> tiene <b>" + equipo[vs[1]].vida + "</b> de vida restante</p>";
		}
		vs.splice(0,vs.length);
	}
	console.log(vs);
	}
}


const Bulbasaur = new Pokemon ('Bulbasaur', 'verde', 49, 45);
const Pikachu = new Pokemon ('Pikachu','amarillo', 55, 35);
const Charmander = new Pokemon ('Charmander','rojo', 52, 39);
const Squirtle = new Pokemon ('Squirtle', 'celeste', 48, 44);
const Pidgeotto = new Pokemon ('Pidgeotto', 'café claro', 60, 63);
const Butterfree = new Pokemon ('Butterfree', 'violeta', 45, 60);

var equipo = [Bulbasaur, Pikachu, Charmander, Squirtle, Pidgeotto, Butterfree];

equipo.forEach(function(el){el.mostrar();opcion(el)});




