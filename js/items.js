// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);


function addItemCard(item){
    const itemHTML = '<div class="col-md-3 my-4">\n' +  
        '    <div class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<br>'
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;

}



function loadCardsListFromItemsController(){
    console.log('start');
    for(var i = 0, size = itemsController.Books.length; i < size ; i++){
        const item = itemsController.Books[i];
        addItemCard(item);
    }
}

//loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();
