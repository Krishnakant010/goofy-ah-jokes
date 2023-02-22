const jokeEL = document.getElementById("joke");
const btn = document.getElementById("jokebtn");

btn.addEventListener("click", jokeGenerator);

jokeGenerator();

// function jokeGenerator() {
//   const config = {
//     headers: {
//       accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config).then((response) =>
//     response.json().then((data) => {
//       jokeEL.innerHTML = data.joke;
//     })
//   );
// }

async function jokeGenerator() {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();
  jokeEL.innerHTML = data.joke;
}
