import { formData } from "./forms";

console.log("Hello World!!");
console.log("Hello Again!!!");

const form = document.querySelector("form")!;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});
