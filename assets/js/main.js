/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/

/*
Tools:
-array
-const
-while
-querySelector
-log
*/

let continueList = true;

while (continueList) {
    const shoppingList = [];
    let i = 0;

    while (i < 5) {
        const product = prompt('inserisci un prodotto da comprare!');
        console.log(product);

        shoppingList.push(product);

        i++;
    }

    const addMore = confirm('sei convinto della tua lista?')
    console.log(addMore);

    if (addMore) {
        console.log(shoppingList);
        document.querySelector('span').innerHTML = shoppingList;
        continueList = false;
    } else {
        continueList = true; 
    }
}