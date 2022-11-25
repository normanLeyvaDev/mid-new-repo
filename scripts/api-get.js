const getExternalAPiInfo = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let externalApiInfo = "";

      // externalApiInfo += `
      //           <div class="card" style="width: 15rem">
      //             <div class="card-body">
      //                 <h5 class="card-title">${res[0].title}</h5>
      //                 <p class="card-text">
      //                     ${res[0].body}
      //                 </p>
      //             </div>
      //           </div>
      //           `;

      externalApiInfo += `
          <div class="project-card-title">${res[0].title}</div>
          <div class="project-card-subtitle">${res[0].body}</div>
          <a href="./simplify.html" target="_blank" class="project-link">Learn More</a>
      `;

      document.querySelector("#output1").innerHTML = externalApiInfo;

      externalApiInfo = "";

      externalApiInfo += `
      <div class="project-card-title">${res[1].title}</div>
      <div class="project-card-subtitle">${res[1].body}</div>
      <a href="./simplify.html" target="_blank" class="project-link">Learn More</a>
                  `;

      document.querySelector("#output2").innerHTML = externalApiInfo;

      externalApiInfo = "";

      externalApiInfo += `
      <div class="project-card-title">${res[2].title}</div>
      <div class="project-card-subtitle">${res[2].body}</div>
      <a href="./simplify.html" target="_blank" class="project-link">Learn More</a>
                  `;

      document.querySelector("#output3").innerHTML = externalApiInfo;
    })
    .catch((error) => console.log(error));
};
// document
//   .querySelector(".project-link")
//   .addEventListener("click", getExternalAPiInfo());

getExternalAPiInfo();
/* enviar codigo */

/*prevent.preventDefault();*/
