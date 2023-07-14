const inputForm = document.querySelector("#input-form")
const submitBtn = document.querySelector(".btn")
const dismissBtn = document.querySelector("#dismiss")
const modal = document.querySelector(".modal")


const emailSubmission = (e) => {
    e.preventDefault() 

    let inputFormValue = inputForm.value
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const isValidEmail = emailRegex.test(inputFormValue);

    if(isValidEmail === false){
        inputForm.classList.add("error")
        document.querySelector(".error-message").classList.remove("hidden")
    } else {
        inputForm.classList.remove('error')
        toggleModal()
        console.log("Modal open")
    }

    inputFormValue = inputForm['type = placeholder']
    console.log(isValidEmail)
}

// toggle modal

const toggleModal = () => {
    document.querySelector(".container").classList.toggle("hidden")
    modal.classList.toggle("hidden")
}

// Event Listeners 

submitBtn.addEventListener("click", emailSubmission)
dismissBtn.addEventListener("click", toggleModal)
console.log(inputForm)

const regex = "/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm"