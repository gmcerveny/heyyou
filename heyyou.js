// phone number: (123) 456-7890
var match = /\(\d{3}\) \d{3}\-\d{4}/g;
var link = "<a href='#' onClick='alert(" + '"Hey You"' + ");return false;'>$&</a>";
document.body.innerHTML = document.body.innerHTML.replace(match, link);