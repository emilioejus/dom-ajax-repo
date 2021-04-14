// Write code here to communicate with Github

let myGithub = document.querySelector("#my-github > .nav-link");
let lista = document.querySelector("#repos-list");
let numRepos = document.querySelector("#repos-count");
myGithub.onclick = event => {
  event.preventDefault();
  console.log(document.querySelectorAll("#repos-list li:not(.sub-title)"));
  document.querySelectorAll("#repos-list li:not(.sub-title)").forEach(li => {
    li.remove();
  });
  async function dfetch() {
    const API = "https://api.github.com/users/emilioejus/repos";
    resolve = await fetch(API);
    data = await resolve.json();
    numRepos.innerText = data.length;
    data.forEach(rep => {
      let li = document.createElement("li");
      li.classList.add("list-group-item-warning");
      let a = document.createElement("a");
      a.innerText = rep.name;
      a.href = rep.html_url;
      li.append(a);
      lista.append(li);
    });
  }
  dfetch();
};

//console.log(dfetch());
