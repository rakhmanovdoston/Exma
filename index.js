import { checkToken , redirect} from "./utils";


const form =document.forms[0];
const emailInput =document.getElementById("email");
const passwordinput =document.getElementById("password");

window.addEventListener("DOMContentLoaded" , function () {
    const hasToken = checkToken();
    if(hasToken) {
        redirect("/adminPage.html")
    }
})

const values = {
    email: emailInput.value,
    password: passwordinput.value,
};

emailInput.oninput =function (event) {
    values.email = event.target.value;
};

passwordinput.oninput =function(event) {
    values.password = event.target.value;
};

form.onsubmit =function(event) {
    event.preventDefault();
    login
};

async function login() {
    const api_url = "https://api.escuelajs.co/api/v1/auth/login";
    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      const data = await response.json();
      const { access_token, refresh_token } = data; // {}
  
      sessionStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
  
      const hasToken = checkToken();
      if (hasToken) {
        redirect("/adminPage.html");
      }
    } catch (error) {
      console.error;
    }
  }