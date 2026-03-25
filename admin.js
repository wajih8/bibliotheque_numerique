
function updateStats(){

    // simulation (tu peux remplacer par vraie base plus tard)
    let encours = Math.floor(Math.random() * 10);
    let retards = Math.floor(Math.random() * 5);
    let dispo = Math.floor(Math.random() * 20);

    document.getElementById("encours").innerText = encours;
    document.getElementById("retards").innerText = retards;
    document.getElementById("dispo").innerText = dispo;
}

// lancer une fois au chargement
updateStats();

// mise à jour automatique
setInterval(updateStats, 3000);