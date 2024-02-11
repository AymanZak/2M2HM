
/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 // TIPI DI DATI 
 * Tipo numerico , il tipo di dati numerico serve per i numeri  ex. 1 o 0.5 per esempio let numerico = 5 ;
 * Tipo stringa ,  serve per le lettere e la sequenza di caratteri ex . "ciao , Simo " per esempio  let stringa = "ciao Simone";
 * Tipo boleano , possano avere solo due valori : vero e falso ex . true 
 
 * Tipo undefined , variabile non dichiarata 
 * tipo null , da un valore vuoto alla variabile (annulla il vaolre )
 * 
 * Tipo oggetti , si tratta di coppie chiave -valore { nome: "Ayman", cognome "Zaki", corso "full stuck dev"};
 * Tipo array , non memmoriza un solo valore ma un elenco di valori tipo let color ={"white", "red", "balck"};
 * 
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numberA = 12
let numberB = 18

console.log(numberA + numberB)


/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Ayman";
let lastName = " Zaki Ghali";
let fullName = name + " " + lastName;
console.log(fullName)


// let name = 'Lidia Kovac'
// let name = `Lidia Kovac`

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let ex6result = 4 - x

/* ESERCIZIO 6
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())
