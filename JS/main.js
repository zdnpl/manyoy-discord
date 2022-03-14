const invBtn = document.querySelector(".inv-btn");

invBtn.addEventListener("click", inviteBot);

function inviteBot() {
  window.open("https://discord.com/api/oauth2/authorize?client_id=952382469959741450&permissions=8&scope=bot", "_blank", "location=yes,height=800,width=520,scrollbars=yes,status=yes");
}
