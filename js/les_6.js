import {existy, truthy} from './utils/conditions.utils';
import {truncateString} from './utils/test.utils';
import {student} from './entities/student';
import {classroom} from './classroom';

/**
 * Opdracht 1: imports
 * Importeer conditions.utils.js
 *
 * Maak een object aan en check via existy() of hij bestaat
 * Maak een variabele aan maar geef hem nog geen vulling. Console.log() wat existy() teruggeeft
 */

var object = {

};

console.log(existy(object));

var testVar;

console.log(existy(testVar));
/**
 * Opdracht 2: exports
 *
 * Maak een eigen util bestand aan met een functie die je handig lijkt om te hebben
 * Je kan aan iets simpels denken als je multiply functie
 * Maar mis
 * schien weet je iets anders te bedenken. Bijvoorbeeld een functie die je helpt
 * met random getallen. getRandom(from, to)
 * importeer je bestand hier en voer je functie uit
 */

let teststring= "teststring";

console.log(truncateString(teststring));

/**
 * Opdracht 3: Analyseer de Student Class
 *
 * Importeer de Class en maak 3 studenten aan
 * Beantwoord de volgende vragen
 */

var student1 = {
    firstName : 'student1',
    lastName : 'student1',
    age : '20'
};

var student2 = {
    firstName : 'student2',
    lastName : 'student2',
    age : '20'
};

var student3 = {
    firstName : 'student3',
    lastName : 'student3',
    age : '20'
};


console.log('Wat is de prototype chain van een student?',
            '');

console.log('Kan je na het aanmaken van een student nog bij zijn leeftijd?',
            'Ja');

/**
 * Opdracht 4: Student Class
 *
 * Console.log() de fullNames van je 3 aangemaakte studenten
 */
console.log(student1.lastName, student2.lastName, student3.lastName);

/**
 * Opdracht 5: Custom class
 *
 * Roep mij erbij als je langer dan 5 a 10 minuten over deze opdracht na moet denken
 * Dan help ik even
 *
 * Maak een eigen Classroom class met de volgende functionaliteiten:
 * addStudent() sla de student op in een array
 * getStudent() studenten kunnen ophalen
 * getAllStudents(). Deze functies geeft alle toegevoegde studenten terug
 * Mocht je meer methods weten: voeg deze zeker toe
 * maak een aantal classrooms aan
 */

var studentArray = [];
student1.addStudent(studentArray);
console.log(studentArray);

/**
 *
 * Opdracht 6: Custom class
 *
 * Maak een eigen School class met de volgende functionaliteiten:
 * addClassRoom()
 */