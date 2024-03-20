function shoppingList(array) {

    let index = 0;
    let groceriesArray = array.shift().split("!");

    for (let element of array) {

        let curElement = element.split(' ');
        let [command, product, secondCommand] = curElement;

        switch (command) {
            case "Urgent":

                if (!groceriesArray.includes(product)) {
                    groceriesArray.unshift(product);
                }
                break;

            case "Unnecessary":
                index = groceriesArray.indexOf(product);

                if (groceriesArray.includes(product)) {
                    groceriesArray.splice(index, 1);
                }
                break;

            case "Correct":
                index = groceriesArray.indexOf(product);
                if (groceriesArray.includes(product)) {
                    groceriesArray.splice(index, 1, secondCommand);
                }
                break;

            case "Rearrange":
                index = groceriesArray.indexOf(product);
                if (groceriesArray.includes(product)) {
                    groceriesArray.splice(index, 1);
                    groceriesArray.push(product);
                }
                break;

            default:
                break;
        }
    }

    console.log(groceriesArray.join(", "));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion",

"Rearrange Grapes",

"Correct Tomatoes Potatoes",

"Go Shopping!"]);