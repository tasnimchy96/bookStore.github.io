//button
const list = document.getElementById("list");
const addNew = document.getElementById("add-new");
const contact = document.getElementById("contact");

//div
const listInfo = document.getElementById("list-info");
const addNewInfo = document.getElementById("add-new-info");
const contactInfo = document.getElementById("contact-info");

function showList() {
  console.log("list");
  listInfo.style.display = "flex";
  addNewInfo.style.display = "none";
  contactInfo.style.display = "none";
}
function showAddNew() {
  console.log("addnew");

  listInfo.style.display = "none";
  addNewInfo.style.display = "flex";
  contactInfo.style.display = "none";
}
function showContact() {
  console.log("conatct");

  listInfo.style.display = "none";
  addNewInfo.style.display = "none";
  contactInfo.style.display = "flex";
}

list.addEventListener("click", showList);

addNew.addEventListener("click", showAddNew);

contact.addEventListener("click", showContact);
