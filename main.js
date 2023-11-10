console.log("Test");
let wrongMsg = false;
const mailInput = document.querySelector("#mailInput")
const myForm = document.querySelector("form");
function checkForm(e) {
    // e.preventDefault();
    console.log("Page not reloaded!");
    const userMail = document.querySelector("#mailInput").value
    console.log(userMail);
    const hasDotCom = userMail.endsWith(".com");
    const hasDotOrg = userMail.endsWith(".org");
    const hasDotNet = userMail.endsWith(".net");
    const hasDotEdu = userMail.endsWith(".edu");
    const hasDotIn = userMail.endsWith(".in");

    const hasAt = userMail.includes("@");
    const emptyField = userMail.trim().length > 0; // Trim leading/trailing spaces and check if not empty
    const validCharacters = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Regular expression for email validation

    if ((hasDotCom || hasDotOrg || hasDotNet || hasDotEdu || hasDotIn) && hasAt && emptyField && validCharacters.test(userMail)) {
        mailSuccess();
    } else {
        printWrongAddress();
    }
}

// function mailSuccess() {
//     wrongMsg = false;
//     mailInput.classList.remove("errorState")
//     // alert("Thank you for subscribing! We will notify you soon.")
//     // location.reload()
// }

// function printWrongAddress() {
//     if (wrongMsg == false) {
//         const form = document.querySelector('form');
//         const errorMessage = document.createElement('p');
//         errorMessage.id = "errorMessage";
//         errorMessage.textContent = 'Please provide a valid email address';
//         form.insertAdjacentElement('beforeend', errorMessage);
//         mailInput.classList.add("errorState")
//         wrongMsg = true;
//     } else {
//         return
//     }

// }

// myForm.addEventListener("submit", checkForm)




// const form = document.querySelector('form');


// form.addEventListener('submit', (e) => {
//  e.preventDefault();
//  const formData = new FormData(form);

//  const res= Object.fromEntries(formData);
//  const payload = JSON.stringify(res);
//  console.log(payload)


//  for(item of formData){
//     console.log(item[0], item[1]);
//  };

//  fetch('https://httpbin.org/post', {
//     method: "POST",
//     body: payload,
//     headers: {
//         "Content-Type" : application/json,
//     }
//  })

//  .then(res=> res.json())
//  .then(res => console.log(res));
// })
