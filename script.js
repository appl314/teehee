function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    //button position 
    noButton.style.position = "absolute";

    // shoot 
    document.getElementsByClassName("image")[0].src = "kittyshoot.gif";

    // random coords
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // new button coords
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // response to no
    document.getElementById("question").textContent =
      "bro ur selling :/";
    document.getElementById("name").style.display = "none";
  }

  if (response === "Yes") {
    // remove buttons
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // change to dancing cat if yes
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "hooray!! see u on the 14th bbygworl😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "kittydance.gif";

    // remove yes button
    document.getElementById("yesButton").remove();
  }
}
