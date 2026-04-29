console.log("current DOM:", document.body.innerHTML);
const ContactUsForm = document.getElementById("ContactUsForm");
console.log(ContactUsForm);

const messageArea = document.getElementById("message-area");
ContactUsForm.addEventListener("submit",function (event){
    event.preventDefault();//prevent page from reloading
    

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === ""){
        messageArea.textContent ="please enter name";
        messageArea.style.color = "green";
    }else if(email === ""){
        messageArea.textContent ="please enter email";
        messageArea.style.color = "green";
    }else{
        messageArea.textContent ="thank you for signing up," + name +"!";
        messageArea.style.color = "blue";
    }
})