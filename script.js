document.addEventListener("DOMContentLoaded", function() {
  const bottone = document.getElementById("bottone");
  if (bottone) {
    bottone.addEventListener("click", function() {
      alert("Hai cliccato il bottone!");
    });
  }
});