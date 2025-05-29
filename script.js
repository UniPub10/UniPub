document.getElementById("submissionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  this.classList.add("hidden");
  document.getElementById("confirmation").classList.remove("hidden");
});
