//scrivere un ciclo for che scriva a console i numeri da 10 a 50 

// for (let i = 10; i < 51; i++) {
//     console.log(i);
// } 

//scrivere un ciclo for che scriva a console i numeri pari da 8 a 128 

// for (let i = 8; i < 129; i++) { 
//     const isDisvisiblePerDue = i % 2 === 0; 
//     if (isDisvisiblePerDue) {
//         console.log(i);
//     }  
// }

//scrivere un ciclo for che scriva a console i numeri da 100 a 0 

// for (let i = 100; i > -1; i--) {
//     console.log(i);   
// }

//scrivere un ciclo for che sommi i numeri da 0 a 100 

// let sum = 0; 
// for (let i = 0; i < 101; i++) { 
//     sum = sum + i;
// } 

// alert(sum);

//ripetere gli stessi esercizi con il ciclo while e do...while  

// While 1

// let i = 10;

// while (i < 51) {
//     console.log(i);
//     i = i + 1;
// } 

// While 2 

// let i = 8;

// while (i < 129) { 
//     const isDisvisiblePerDue = i % 2 === 0; 
//     if (isDisvisiblePerDue) {
//         console.log(i);
//     }  
//     i = i + 1;
// } 

// While 3 

// let i = 101;

// while (i > 0) { 
//     i = i - 1;
//     console.log(i);
// } 

// While 4 

let i = 0; 
let sum = 0;

while (i < 101) { 
    sum = sum + i; 
    i ++  
} 

alert(sum);

//scivere un ciclo while che si interrompa quando l'utente scrive 'esci'
//nella finestra di dialogo 

// const exit = 'esci';

// while (true) {
//     const userInput = prompt("Insert input");

//     const userInputExit = userInput === exit;

//     if (userInputExit) {
//         alert("Heading out...");
//         break;
//     } 
// }

