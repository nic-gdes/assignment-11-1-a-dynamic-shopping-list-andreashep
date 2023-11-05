
document.addEventListener("DOMContentLoaded", function () {
        const shoppingList = document.getElementById("shoppingList");
    var input = document.getElementById("item");
    const addBtn = document.getElementById("addBtn");

    addBtn.addEventListener("click", function() {
        additemToList();
    });

    input.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            additemToList();
        }
    });
     
  function additemToList() {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", function(e) {
      shoppingList.removeChild(li);
    });
    li.appendChild(button);
    const textNode = document.createTextNode(input.value);
    li.appendChild(textNode);
    shoppingList.appendChild(li);
    input.value = "";
    input.focus();
  } 
       
    });
