//src=""  key:value
//text-align:center; key:value
var aepfel1 = 10;  // Global verfügbar
let aepfel2 = 10;  // Nicht Global, Wieder-beschreibbar   
const aepfel3 = 10; // Nicht Global, Konstante, nicht überschreibbar
//console.log(aepfel1) // Direkter Variablennamen Zugriff
// 3 Möglichkeiten: var, let, const
// Wie greifen wir auf die Variablen zu und wo sind diese verfügar
// Wir greifen auf den Variablennamen zu und bekommen immer den Wert
// Datenstruktur ist Number, Wert ist 10, Key = Value, Name der Variablen

// Datenstrukturen
// Number = Zahlenwert, Wert ohne Besonderheit (Integer, Float, BigInt)
    let zahl1 = 10;
    let totalPassangerOfCar = 5;  
// String = Zeichenkette, Wert mit "" '' ´´ `` Doppelt Einfach Fronttick Backtick
// Zugriff auf Tastatur für einfache Strukturen mit SHIFT
// Zugriff auf Tastatur für erweiterte Strukturen mit ALTGR
    let string = "Hello World";
    let carName = "Mercedes";
    let specialCharacter = '$%&§$@.?=';
    let somethingSpecialHere = ' ';
// Boolean = True und false , Wert ohne Besonderheiten
    let boolean = false;
    let isPersonAdmin = true; //Zustand
    // Booleansche Algebra: 
    // false + false = false
    // false + true || true + false = false
    // true + true = true
// Object = Key:Value, Besonderheit von Curly Bracket {}
    let object = {key1:"value", key2:true, key3:23};
    // Zugriff mit Punktnotation = object.key2
    let user = {
        firstName:"Florian",
        lastName:"Hahn", 
        age: 26, 
        isMentor:true
    };
    let userTimon = {} // Leeres Object
    //console.log(user)
// Symbol
// Array = Anordnung von Datenstrukturen, Besonderheit von []
    let array = ["string","florian",false,23];
    // Zugriff über Index = array[1] , Index beginnt bei 0
    let einkaufsliste = ["orange","bananen","milch"];
    let todoList = [ //Datenstruktur von todoList ist Array
        { //Object im Array mit dem Index 0
            aufgabe:"wischen",
            doneUntil: "15:30",
            person: "Sasa",
        },
        { //Object im Array mit dem Index 1
            aufgabe:"sauber machen",
            doneUntil: "17:00",
            person: "Sören",
        }
    ];
    // Zugriff auf Sören: todoList[1].person
    
// @Todo 
// Null =
// Undefined = 
// ES5 und ES6 Funktionen und if Bedingungen
// Schleifen