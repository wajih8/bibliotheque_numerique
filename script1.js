
document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("formRetour");

    // sécurité si la page n'a pas le formulaire
    if(!form) return;

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let idInput = document.getElementById("idEmprunt");
        let dateInput = document.getElementById("dateRetour");
        let etatInput = document.getElementById("etat");

        let errorId = document.getElementById("errorId");
        let errorDate = document.getElementById("errorDate");
        let errorEtat = document.getElementById("errorEtat");

        // valeurs
        let id = idInput.value.trim();
        let date = dateInput.value;
        let etat = etatInput.value;

        // reset erreurs
        errorId.textContent = "";
        errorDate.textContent = "";
        errorEtat.textContent = "";

        idInput.classList.remove("input-error");
        dateInput.classList.remove("input-error");
        etatInput.classList.remove("input-error");

        let valid = true;

        // 🔴 ID
        if(id === ""){
            errorId.textContent = "ID obligatoire";
            idInput.classList.add("input-error");
            valid = false;
        } 
        else if(isNaN(id) || Number(id) <= 0){
            errorId.textContent = "ID invalide";
            idInput.classList.add("input-error");
            valid = false;
        }

        // 🔴 DATE
        if(date === ""){
            errorDate.textContent = "Date obligatoire";
            dateInput.classList.add("input-error");
            valid = false;
        } 
        else {
            let today = new Date().toISOString().split("T")[0];

            if(date > today){
                errorDate.textContent = "Date invalide (pas future)";
                dateInput.classList.add("input-error");
                valid = false;
            }
        }

        // 🔴 ETAT
        if(etat === ""){
            errorEtat.textContent = "Choisir un état";
            etatInput.classList.add("input-error");
            valid = false;
        }

        // ✅ SI TOUT EST OK
        if(valid){

            if(typeof showNotification === "function"){
                showNotification("Retour validé !", "success");
            } else {
                alert("✅ Retour validé !");
            }

            

            // ici tu peux faire un fetch() pour envoyer les données au serveur ou reset le formulaire
            form.reset();
        }
    });
});