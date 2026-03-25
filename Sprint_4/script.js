
document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("formEmprunt");

    if(!form) return;

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let user = document.getElementById("user").value.trim();
        let item = document.getElementById("item").value;
        let dateE = document.getElementById("dateE").value;
        let dateR = document.getElementById("dateR").value;

        // éléments erreurs
        let errorUser = document.getElementById("errorUser");
        let errorItem = document.getElementById("errorItem");
        let errorDateE = document.getElementById("errorDateE");
        let errorDateR = document.getElementById("errorDateR");

        // reset erreurs
        errorUser.innerText = "";
        errorItem.innerText = "";
        errorDateE.innerText = "";
        errorDateR.innerText = "";

        // reset style
        document.getElementById("user").classList.remove("input-error");
        document.getElementById("item").classList.remove("input-error");
        document.getElementById("dateE").classList.remove("input-error");
        document.getElementById("dateR").classList.remove("input-error");

        let valid = true;

        // 🔹 fonction validation nom (avec accents)
        function estValide(nom){
            return /^[A-Za-zÀ-ÿ\s]+$/.test(nom);
        }

        // 🔴 USER
        if(user === ""){
            errorUser.innerText = "Nom obligatoire";
            document.getElementById("user").classList.add("input-error");
            valid = false;
        }
        else if(!estValide(user)){
            errorUser.innerText = "Seulement lettres et espaces";
            document.getElementById("user").classList.add("input-error");
            valid = false;
        }

        // 🔴 ITEM
        if(item === ""){
            errorItem.innerText = "Choisir un objet";
            document.getElementById("item").classList.add("input-error");
            valid = false;
        }

        // 🔴 DATE EMPRUNT
        if(dateE === ""){
            errorDateE.innerText = "Date obligatoire";
            document.getElementById("dateE").classList.add("input-error");
            valid = false;
        }

        // 🔴 DATE RETOUR
        if(dateR === ""){
            errorDateR.innerText = "Date obligatoire";
            document.getElementById("dateR").classList.add("input-error");
            valid = false;
        }

        // 🔴 LOGIQUE DATES
        if(dateE && dateR && dateR <= dateE){
            errorDateR.innerText = "Doit être après la date d'emprunt";
            document.getElementById("dateR").classList.add("input-error");
            valid = false;
        }

        // ✅ VALIDATION OK
        if(valid){
            alert("✅ Emprunt validé !");
            
            // 👉 ici tu peux envoyer vers serveur ou reset
            form.reset();
        }

    });

});
