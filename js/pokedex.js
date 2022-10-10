function cambiar() {
    [...document.getElementsByTagName("div")].forEach(function(item) {
        item.addEventListener('click', function() {
            obj[this.id]();
        })
    })

    var obj = {
        Bulbasaur: function() {
            document.getElementById("img1").src = "imagenes/Bulbasaur.png";
            document.getElementById("nombre").innerHTML = "Bulbasaur";
            document.getElementById("ataque").innerHTML = 49;
            document.getElementById("defensa").innerHTML = 49;
            document.getElementById("velocidad").innerHTML = 45;
        },
        Ivysaur: function() {
            document.getElementById("img1").src = "imagenes/Ivysaur.png";
            document.getElementById("nombre").innerHTML = "Ivysaur";
            document.getElementById("ataque").innerHTML = 62;
            document.getElementById("defensa").innerHTML = 63;
            document.getElementById("velocidad").innerHTML = 60;
        },
        Venusaur: function() {
            document.getElementById("img1").src = "imagenes/Venusaur.png";
            document.getElementById("nombre").innerHTML = "Venusaur";
            document.getElementById("ataque").innerHTML = 82;
            document.getElementById("defensa").innerHTML = 83;
            document.getElementById("velocidad").innerHTML = 80;
        },
        Charmander: function() {
            document.getElementById("img1").src = "imagenes/Charmander.png";
            document.getElementById("nombre").innerHTML = "Charmander";
            document.getElementById("ataque").innerHTML = 52;
            document.getElementById("defensa").innerHTML = 43;
            document.getElementById("velocidad").innerHTML = 65;
        },
        Charmeleon: function() {
            document.getElementById("img1").src = "imagenes/Charmeleon.png";
            document.getElementById("nombre").innerHTML = "Charmeleon";
            document.getElementById("ataque").innerHTML = 68;
            document.getElementById("defensa").innerHTML = 54;
            document.getElementById("velocidad").innerHTML = 80;
        },
        Charizard: function() {
            document.getElementById("img1").src = "imagenes/Charizard.png";
            document.getElementById("nombre").innerHTML = "Charizard";
            document.getElementById("ataque").innerHTML = 84;
            document.getElementById("defensa").innerHTML = 78;
            document.getElementById("velocidad").innerHTML = 100;
        },
        Squirtle: function() {
            document.getElementById("img1").src = "imagenes/Squirtle.png";
            document.getElementById("nombre").innerHTML = "Squirtle";
            document.getElementById("ataque").innerHTML = 48;
            document.getElementById("defensa").innerHTML = 65;
            document.getElementById("velocidad").innerHTML = 43;
        },
        Wartortle: function() {
            document.getElementById("img1").src = "imagenes/Wartortle.png";
            document.getElementById("nombre").innerHTML = "Wartortle";
            document.getElementById("ataque").innerHTML = 63;
            document.getElementById("defensa").innerHTML = 80;
            document.getElementById("velocidad").innerHTML = 58;
        },
        Blastoise: function() {
            document.getElementById("img1").src = "imagenes/Blastoise.png";
            document.getElementById("nombre").innerHTML = "Blastoise";
            document.getElementById("ataque").innerHTML = 83;
            document.getElementById("defensa").innerHTML = 100;
            document.getElementById("velocidad").innerHTML = 78;
        }
    }
}