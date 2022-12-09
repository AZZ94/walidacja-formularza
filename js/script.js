console.log("Warsztat - walidacja formularza zapisu do newslettera");

let newsletterform = document.getElementById("newsletter-form");
let allagreecheck = document.getElementById("allagree");

const validate = (event) => {

    let txtname = document.getElementById("name");
    let mailtext = document.getElementById("email");
    let check1 = document.getElementById("agree1");

    let errors = document.getElementById("errors");

    errors.innerHTML = "";
    // error doesn't show more than once

    if (txtname.value.trim() === "") {
        let errorlist = document.createElement("li");
        errorlist.innerText = "Podaj imię i nazwisko!"

        errors.appendChild(errorlist);
    }

    if (mailtext.value.trim() === "") {
        let errorlist = document.createElement("li");
        errorlist.innerText = "Podaj adres e-mail!";

        errors.appendChild(errorlist);
    }

// ! na poczatku - zaprzeczenie
    if (!mailtext.value.includes("@")) {
        let errorlist = document.createElement("li");
        errorlist.innerText = "Podaj prawidłowy adres e-mail!";

        errors.appendChild(errorlist);
    }

    if (!check1.checked) {
        let errorlist = document.createElement("li");
        errorlist.innerText = "Nie wyrażono zgody 1";

        errors.appendChild(errorlist);
    }
// blokuje tylko jezeli formularz ma bledy, nie blokuje jezeli lista errorow ma za duzo elementow
// lista tak jak tablica ma wlasciwosc lenght

    if (errors.children.length > 0) {
        event.preventDefault();
    }
    
    console.log("validate()");
}


const allagree = (event) => {
    let agr1 = document.getElementById("agree1");
    let agr2 = document.getElementById("agree2");

    agr1.checked = event.target.checked;
    agr2.checked = event.target.checked;

    agr1.disabled = event.target.checked;
    agr2.disabled = event.target.checked;
}


newsletterform.addEventListener("submit", validate);
allagreecheck.addEventListener("change", allagree);




console.log(newsletterform);