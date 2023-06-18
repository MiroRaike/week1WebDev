if (document.readyState !== "loading") {
  HelloWorld();
  list();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    HelloWorld();
    list();
  });
}

function HelloWorld() {
  const mybutton = document.getElementById("my-button");

  mybutton.addEventListener("click", function () {
    console.log("Document is ready after waiting!");
    const head = document.getElementById("Header1");
    head.innerText = "My notebook";
  });
}

function list() {
  const listButton = document.getElementById("add-data");

  listButton.addEventListener("click", function () {
    const listInput = document.getElementById("listInput").value;
    let theUl = document.getElementById("ul");
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(listInput));
    theUl.appendChild(item);
  });
}
