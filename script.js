//target shoppingList//
document.addEventListener("DOMContentLoaded", function (e) {
  const shoppingList = document.querySelector("#shoppingList");
  //target #form input//
 const input = document.querySelector("#item");
  const addBtn = document.querySelector("#addBtn");
  //add button with click event//
  addBtn.addEventListener("click", function (e) {
    additemToList();
  });
  //add button with enter keypress event//
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      additemToList();
    }
  });
  //when adding item to list: add button, span, and li//
  function additemToList(e) {
    const li = document.createElement("li");
    //delete button//
    const button = document.createElement("button");
    //button text//
    button.textContent = "Delete";
    //delete button with click event//
    button.addEventListener("click", function (e) {
      shoppingList.removeChild(li);
    });
    li.appendChild(button);
   

    //textNode instead of span//
    const span = document.createElement("span");
    span.textContent = input.value;
    li.appendChild(span);
    shoppingList.appendChild(li);
    input.value = "";
    input.focus();
  }
});
