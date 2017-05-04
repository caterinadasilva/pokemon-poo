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
    document.body.appendChild(this.imagen);
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
  }
}

const Bulbasaur = new Pokemon ('Bulbasaur', 'verde', 49, 45);
const Pikachu = new Pokemon ('Pikachu','amarillo', 100, 100);
const Charmander = new Pokemon ('Charmander','rojo', 70, 150);
const Squirtle = new Pokemon ('Squirtle', 'celeste', 48, 44);
const Pidgeot = new Pokemon ('Pidgeot', 'café claro', 60, 100);
const Butterfree = new Pokemon ('Butterfree', 'violeta', 50, 120);

Squirtle.mostrar();