class login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit()
    }


    validateonSubmit(){
        let self = this;

        this.form.addEventListener("submit",(e) => {
            e.preventDefault();
            self.fields.forEach((fields) => {
                const input = document.querySelector(`#${fields}`);
                console.log (input.value);
                
            });  
        });
    }
}

const form = document.querySelector(".LoginForm")
if (form){
    const fields = ["brukernavn", "passord"];
    const validator = new login (form, fields);
}







// class Login {
//     constructor(form, fields) {
//         this.form = form;
//         this.fields = fields;
//         this.validateOnSubmit();
//     }

//     validateOnSubmit() {
//         let self = this;

//         // Lytter etter innsending av skjema
//         this.form.addEventListener("submit", (e) => {
//             e.preventDefault(); // Hindrer siden i å reloade eller legge til spørsmålstegn i URL-en
            
//             let allFieldsValid = true;

//             // Valider hvert felt
//             self.fields.forEach((field) => {
//                 const input = document.querySelector(`#${field}`);
//                 console.log(`${field}: ${input.value}`); // Logger verdien i konsollen

//                 // Enkel validering for å sjekke om feltet er tomt
//                 if (!input.value) {
//                     allFieldsValid = false;
//                     console.error(`${field} er påkrevd!`);
//                 }
//             });

//             if (allFieldsValid) {
//                 console.log("Alle feltene er gyldige!");
//                 // Her kan du utføre videre handlinger, som å logge brukeren inn
//             }
//         });
//     }
// }

// // Hent skjemaelementet basert på id
// const form = document.getElementById("LoginForm");
// if (form) {
//     const fields = ["brukernavn", "passord"];
//     const validator = new Login(form, fields);
// }

