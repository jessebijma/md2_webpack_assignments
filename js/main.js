/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
<<<<<<< HEAD

=======
 *
>>>>>>> upstream/master
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

var teacherName1 = "Berend";
var teacherName2 = "Theo";
var teacherName3 = "Hjalmar";
var teacherName4 = "Ed";
var teacherName5 = "Rosmerta";

var teacherAge1 = 31;
var teacherAge2 = 200;
var teacherAge3 = 38;
var teacherAge4 = 58;
var teacherAge5 = 55;


var isProgramming = true;
var isDrinking = false;
var isEating = true;
var isNotProgramming = false;
var bool5 = true;
/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */
var teacherNames = [teacherName1,teacherName2,teacherName3,teacherName4,teacherName5];
var teacherAges = [teacherAge1,teacherAge2,teacherAge3,teacherAge4,teacherAge5];
var bools = [isDrinking,isEating,isNotProgramming,isProgramming,bool5];
/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */
var emptyArray = [];
emptyArray.push("test");
/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
var names = ["name1","name2","name3","name4"];
names.splice(0,1);
names.splice(1,1);
/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */
var car = {type:"Fiat", model:"500", color:"White"};
var bike = {type:"Gazelle", model:"450", color:"grey", age:"2"};
var laptop = {type:"Dell", model:"Latitude 3550", color:"Black"};
var bag = {brand:"Patta", collection:"Running Team", color:"Black/Pink/Purple Camo"};
/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */
const myFunct = (a,b) => {
        a = 1;
        b = 2;
        return a * b;
};

console.log(myFunct());

const myFunct1 = (c,d) => {
    c = 3;
    d = 4;
    return c + d;
};

console.log(myFunct1());

const myFunct2 = (e,f) => {
    e = 5;
    f = 6;
    return e - f;
};

console.log(myFunct2());

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */
    const myFunct3 = (firstName, lastName) => {
    let object1 = {firstName : "test", lastName : "test"};
    return object1;
};

console.log(myFunct3());
/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

const student1 = {
    name: "bob",
    showName: () => {
        console.log(student1.name);
    }
};

student1.showName();
/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met
 * de naam 'showName'
 */

const student2 = {
    name: "mikwel",
    showName : () => {
        console.log(student2.name);
    }
};

student2.showName();
/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */
let students = ["a","b","c","d","e","f","g","h","i","j","k",];

for (let i = 0; i < 11; i++) {
    console.log(students);
}

/**
 * Opdracht 11: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */
    const firstName = "jesse";
    const lastName = "bijma";
    const fullName = firstName + " " +  lastName;
/**
 * Opdracht 12: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */
    var randNum1 = Math.random(0,5);
    var randNum2 = Math.random(1,10);
    var randNum3 = Math.random(30,40);
    var randNum4 = Math.random(-100,100);

    console.log(randNum1);
    console.log(randNum2);
    console.log(randNum3);
    console.log(randNum4);
/**
 * Opdracht 13: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
            { array : false, object : false, primitive : false });

/**
 * Opdracht 14: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

/**
 * Opdracht 15: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

/**
 * Opdracht 16: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */