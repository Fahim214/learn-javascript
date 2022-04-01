const txtInput = document.querySelector(".inputs input")
checkBtn = document.querySelector(".inputs button")
infoTxt = document.querySelector(".info-txt")
let filterInput

checkBtn.addEventListener("click", () => {
    // Spliting user input character, reversing them
    // and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block"
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <spa>'${txtInput.value}'</span> isnt a palindrom`
    }
    infoTxt.innerHTML = `Yes, <spa>'${txtInput.value}'</span> is a palindrom`
});

txtInput.addEventListener("keyup", () => {
    // removing spaces & all special character from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "")
    if(filterInput) {
        return checkBtn.classList.add("active")
    }
    checkBtn.classList.remove("active")
})