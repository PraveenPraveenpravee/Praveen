let Users = JSON.parse(localStorage.getItem("Users")) || [
  {
    Name: "hyper",
    Email: "hyper@gmail.com",
    Username: "hyper",
    Password: "hyper@143",
  },
  {
    Name: "don",
    Email: "don@gmail.com",
    Username: "king",
    Password: "king@143",
  },
];

function saveUsers() {
  localStorage.setItem("Users", JSON.stringify(Users));
}

let login = document.getElementById("Loginpageform");
if (login) {
  login.addEventListener("submit", function (event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    let userData = Object.fromEntries(formdata.entries());

    if (
      Users.find(
        (user) =>
          user.Username === userData.Username &&
          user.Password === userData.Password
      )
    ) {
      window.location.replace("homepage.html");
    } else {
      window.location.replace("registrationpage.html");
    }
  });
}

let register = document.getElementById("registerpageform");
if (register) {
  register.addEventListener("submit", function (event) {
    event.preventDefault();
    let registerform = new FormData(event.target);
    let registerData = Object.fromEntries(registerpageform.entries());
    console.log(registerData.Username);

    if (
      !Users.find(
        (user) =>
          user.Username === registerData.Username &&
          user.Password === registerData.Password
      )
    ) {
      let temp = {
        Username: registerData.Username,
        Password: registerData.Password,
      };
      Users.push(temp);
      localStorage.setItem("Users", JSON.stringify(Users));
      window.location.replace("Loginpage.html");
      console.log("True");
    } else {
      console.log("false");
    }
  });
}
