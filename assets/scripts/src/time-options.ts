import format from "date-fns/format";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import locale from "date-fns/locale/pt-BR";

const page = document.querySelector("#time-options");

const agendarHora = document.querySelector(".options") as HTMLInputElement;

if (page) {
  const hoje = new Date();
  let inicioMes = startOfMonth(hoje);
  const fimMes = endOfMonth(hoje);

  const titulo = page.querySelector("h3") as HTMLHeadingElement;

  titulo.innerText = format(hoje, "EEEE, d 'de' MMMM 'de' yyyy", {
    locale,
  });
}

agendarHora.addEventListener("click", (ev: MouseEvent) => {
  console.log("Agendado!");
});
