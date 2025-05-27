let sueldo = parseInt(prompt("cuanto te pagan?", 0))

p = document.getElementById("resultado");

switch (true) {
  case sueldo <=500:
    p.textContent = "Trabajas medio tiempo";
    break;
  case sueldo >= 1000 && sueldo <= 1699:
    p.textContent = "Tienes el salario minimo";
    break;
  case sueldo >= 1700 &&  sueldo <=1999:
    p.textContent = "Buen salario";
    break;
  case sueldo >= 2000:
    p.textContent = "Salario de doctor";
    break;
  default:
    p.textContent="nada que ver";
    break;
}
