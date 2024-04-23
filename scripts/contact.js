// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
function messageSent() {
    let mainContent = document.getElementById("contact-page");
    mainContent.innerHTML = "<p>Thank you for your message!";
    mainContent.style.fontSize = "24px";
    mainContent.style.textAlign = "center";
}
let form = document.querySelector('main.contact form');
form.addEventListener("submit", messageSent);
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

