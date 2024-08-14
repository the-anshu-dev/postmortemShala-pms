// .
// .
// Default Own Selector
function $(selector) {
  let NodeList = document.querySelectorAll(selector);
  if (NodeList == 0) {
    console.error("Element not found");
    return null;
  } else if (NodeList == 1) {
    return NodeList[0];
  } else return NodeList;
}

function submitForm(event) {

    event.preventDefault();
  let fullname = getUsername();
  console.log(fullname);
  let email = getEmail();
  console.log(email);
  let phone = getPhone();
  console.log(phone);
}

function getUsername() {
  let fname = $("#fname").value;
  let mname = $("#mname").value;
  let lname = $("#lname").value;

  let username = `${fname} ${mname} ${lname}`;

  if (username.trim()) {
    return username;
  }
  return false;
}

function getEmail() {
  let email = $("#email");
  if (email.trim()) {
    return email;
  } else return false;
}

function getPhone() {
  let phone = $("#phone");
  if (phone.trim()) {
    return phone;
  } else return false;
}
