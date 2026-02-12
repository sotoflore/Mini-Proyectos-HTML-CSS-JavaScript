const checkbox = document.getElementById("checkbox");
const planBasico = document.getElementById("plan-basico");
const planEstandar = document.getElementById("plan-estandar");
const planPremium = document.getElementById("plan-premium");

checkbox.addEventListener("click", () => {
  planBasico.textContent = planBasico.textContent === "$119.90" ? "$9.90" : "$119.90";
  planEstandar.textContent = planEstandar.textContent === "$167.90" ? "$13.90" : "$167.90";
  planPremium.textContent = planPremium.textContent === "$215.90" ? "$17.90" : "$215.90";
})