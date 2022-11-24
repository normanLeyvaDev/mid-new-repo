const getExternalAPiInfo = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let externalApiInfo = "";

      externalApiInfo += `
                <div class="card" style="width: 15rem">
                  <div class="card-body">
                      <h5 class="card-title">${res[0].title}</h5>
                      <p class="card-text">
                          ${res[0].body}
                      </p>
                  </div>
                </div>
                `;

      document.querySelector("#output1").innerHTML = externalApiInfo;

      externalApiInfo = "";

      externalApiInfo += `
                  <div class="card" style="width: 15rem">
                    <div class="card-body">
                        <h5 class="card-title">${res[1].title}</h5>
                        <p class="card-text">
                            ${res[1].body}
                        </p>
                    </div>
                  </div>
                  `;

      document.querySelector("#output2").innerHTML = externalApiInfo;

      externalApiInfo = "";

      externalApiInfo += `
                  <div class="card" style="width: 15rem">
                    <div class="card-body">
                        <h5 class="card-title">${res[2].title}</h5>
                        <p class="card-text">
                            ${res[2].body}
                        </p>
                    </div>
                  </div>
                  `;

      document.querySelector("#output3").innerHTML = externalApiInfo;
    })
    .catch((error) => console.log(error));
};
document
  .querySelector(".project-link")
  .addEventListener("click", getExternalAPiInfo());

/* enviar codigo */

prevent.preventDefault();
