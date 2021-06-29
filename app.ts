let message = {
        channel: {
            send(nachricht) {
                    console.log(nachricht)
                }
        }
    }

// Eine Funktion sieht normalerweise so aus: (exemplarisch geben wir die ersten zwei argumente als console.log aus)
function eineFunktion(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}

// diese kann dann so benutzt werden:
eineFunktion( message
    , [0, 1, 2, 3])


// Eine Funktion kann aber auch als variable gespeichert werden
let einefunktion = function () { }

// wir können in dem [object message], das [object channel] ansprechen, dies beinhaltet die funktion send die wir selber definiert haben
message.channel.send("Hiho!");

// Ein String hat eigene funktionen und ist theoretisch auch ein object das funktionen beinhaltet so wie channel oben send beinhaltet
"";

// strings können durch ein plus concatiniert werden
"A" + "B";

// Die Strings die wir geschrieben haben, wurden zwar erstellt aber keinem Symbol zugeordner(üblicherweise variable genannt)
// Es gibt const, var und let  jeder dieser 3 unterscheidet sich primär bei seinem verfügbaren scope und seine modifizierbarkeit

// Ein Scope ist das hier v
{ }

// Deklarieren wir etwas in einem Scope so sind Variablen normalerweise nur in ihm verfügbar sowie in scopes die unter ihm sind
{
    var a = 12;
    {
        console.log(a)
    }
}

// Vorallem später bei Klassenbasierten oder Objectbasierten strukturen wird jedoch auffallen das wir den scope in funktionen nicht behalten
// Dafür gibt es jedoch die Möglichkeit ()=>{} zu benutzen

var meineF = () => { /* HIER */}

// HIER kann man nun trotzdem noch auf das eigene object oder die eigene klasse mit "this" zugreifen.


// ARRAYS

// Ein wichtiger Datentyp ist der Array, in Javascript können wir in ihm jeden Datentyp reinspeichern den wir wollen, sogar weitere Arrays und Objekte
var myArray = []

var myObjArray = [
    { name: "Johny", nachname: "Goodman" },
    { name: "Shankles", nachname: "Grand" },
    { name: "Maria", nachname: "Beet" },
    //...
]

var myArrArray = [
    ["Johny", "Goodman"],
    ["Shankles", "Grand"],
    ["Maria","Beet"]
    //...
]

// Zum Zugreifen:
console.log(myObjArray[0].name) //<- "Johny"
console.log(myArrArray[0][0]) //<- "Johny"

// Man kann diese arrays mit unterschiedlichen methoden manipulieren.
// pop push shift und unshift <- zum hinzufügen oder entfernen von elementen an den start oder ende des arrays
// filter reduce map <- zum filtern, SUMMEN oder [mapieren(<- bedeutet wenn wir z.b. myObjArray hätten und wir wollen einen Array haben der "Johny Goodman" bildet dann ist map dafür perfekt)]

// Zum hinzufügen an das ENDE des Arrays bspw:
myObjArray.push({ name: "Severe", nachname: "Retard" });

console.log(myObjArray[3]) //<- severe ist nun hier

// Looping von Arrays: Zum loopen benutzen wir entweder eine for, oder forEach, beides erlaubt uns unkompliziert den array zu loggen oder nach bestimmten sachen zu suchen
// Beachten sollte man auch die funktionen
// some  (prüfen ob einer oder mehr als ein wert eine bedingung erfüllt)
// first (gibt das erste element wieder bei welcher eine bedingung erfüllt wird) (ES6 experimental könnte evtl noch nicht "überall" verfügbar sein)
// 

myArrArray.forEach((value) => {
    console.log(value[0]); // <- console.log'd alle ersten werte in den subarrays
})

myObjArray.forEach((value) => {
    console.log(value.name); // <- console.log'd alle 'name' werte in den subarrays
})

for (let i = 0; i < myObjArray.length; i++) {
    let element = myObjArray[i];

    console.log(element.nachname)                       // <- console.log'd alle nachnamen
}
// ^ das kann auch so geschrieben werden: v
for (let i = 0; i < myObjArray.length; i++) 
    console.log(myObjArray[i])                          // <- console.log'd alle nachnamen


/* stopt die konsole zu schließen, ignorieren :shrug: */
setInterval(() => { console.log("OH");},1000000000)