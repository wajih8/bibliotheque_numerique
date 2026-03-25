
function showNotification(message, type) {
  let notif = document.createElement("div");
  notif.className = "notif " + type;
  notif.innerText = message;

  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

// exemples
showNotification("Retour du livre '1984' demain", "info");
showNotification("Livre en retard !", "error");
showNotification("Emprunt réussi !", "success");