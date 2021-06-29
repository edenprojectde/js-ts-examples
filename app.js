let message = {
    channel: {
        send(nachricht) {
            console.log(nachricht);
        }
    }
};
// Eine Funktion sieht normalerweise so aus: (exemplarisch geben wir die ersten zwei argumente als console.log aus)
function eineFunktion(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}
// diese kann dann so benutzt werden:
eineFunktion(message, [0, 1, 2, 3]);
// Eine Funktion kann aber auch als variable gespeichert werden
let einefunktion = function () { };
// wir k�nnen in dem [object message], das [object channel] ansprechen, dies beinhaltet die funktion send die wir selber definiert haben
message.channel.send("Hiho!");
// Ein String hat eigene funktionen und ist theoretisch auch ein object das funktionen beinhaltet so wie channel oben send beinhaltet
"";
// strings k�nnen durch ein plus concatiniert werden
"A" + "B";
// Die Strings die wir geschrieben haben, wurden zwar erstellt aber keinem Symbol zugeordner(�blicherweise variable genannt)
// Es gibt const, var und let  jeder dieser 3 unterscheidet sich prim�r bei seinem verf�gbaren scope
// Ein Scope ist das hier v
{ }
// Deklarieren wir etwas in einem Scope so sind Variablen normalerweise nur in ihm verf�gbar sowie in scopes die unter ihm sind
{
    var a = 12;
    {
        console.log(a);
    }
}
// Innerhalb einer Funktion verlieren wir jedoch den externen scope
// Dies kann vorallem sp�ter bei Klassenbasierten oder Objectbasierten strukturen zu problemen f�hren
{
    let a = 12;
    var test = function () {
        console.log(a);
    };
    test();
}
/* stopt die konsole zu schlie�en, ignorieren :shrug: */
setInterval(() => { console.log("OH"); }, 1000000000);
//# sourceMappingURL=app.js.map