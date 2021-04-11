// Write code here to communicate with Github

let lista = document.querySelector("#repos-list");
async function fetch() {
  const API = "https://api.github.com/users/emilioejus/repos";
  resolve = await fetch(API);
  data = await resolve.json();
  data.forEach(rep => {
    let li = document.createElement("li");
    li.innerText = rep.name;
    lista.append(li);
  });
}
fetch();
console.log(lista);
