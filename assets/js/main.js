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

const shoppingList = ['carne', 'pesce', 'frutta', 'acqua', 'carta'];
console.log(shoppingList);

let i = 0;

while (i < shoppingList.length) {
    const element = shoppingList[i];

    const ulEl = document.querySelector('ul');
    const liEl = document.createElement('li');
    liEl.append(element);
    ulEl.append(liEl);
    console.log(shoppingList[i]);

    i++
}