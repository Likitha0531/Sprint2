// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.Books = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description, imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl,
        };

        // Push the item to the items property
        this.Books.push(item);

        //"12345"  %^ - 2
        //Save items to local storage
        localStorage.setItem("Books", JSON.stringify(this.Books));
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("Books")
        if (storageItems) {
            const Books = JSON.parse(storageItems)
            for (var i = 0, size = Books.length; i < size; i++) {
                const item = Books[i];
                this.Books.push(item);
            }
        }
    }
}