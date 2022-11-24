const addPost = (prevent) => {
  prevent.preventDefault();
  console.log("funcionando");
  // nos traemos los values de los inputs
  let fname = document.querySelector("#fname").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#subject").value;

  // vamos a usar fetch() para poder enviar info al endPoint!
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    //metadatos que enviamos al servidor sobre los tipos de contenido que estamos enviando para que clientes y servideores puedan hablar entre si, que el servidor entienda que está pasando.
    headers: {
      "Content-type": "application/json",
      Accept: "text/plain, application/json",
    },
    // la info que verdaderamente vamos a pasar
    body: JSON.stringify({
      fname: fname,
      email: email,
      phone: phone,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((formData) => console.log(formData))
    .catch((error) => console.log(error));
};
document.querySelector("#addPost").addEventListener("click", addPost);
