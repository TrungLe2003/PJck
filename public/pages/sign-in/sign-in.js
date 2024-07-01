const login = document.getElementById("login");
login.addEventListener("click", (e) => {
  e.preventDefault();
  let listUser = JSON.parse(localStorage.getItem("users") || "[]");
  if (!Array.isArray(listUser)) {
    listUser = [];
  }
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  if (!username.value || username.value.length < 6) {
    console.log("username err");
    return;
  }
  if (!password.value) {
    console.log("password err");
    return;
  }
  const findUser = listUser.find(
    (item) =>
      item.username === username.value && item.password === password.value
  );
  if (!findUser) {
    console.log("tài khoản không đúng");
    alert("tài khoản hoặc mật khẩu không chính xác");
    return;
  }
  localStorage.setItem("currentLogin", `${findUser.userID}`);
  window.location.href = "../homepage/homepage.html";
});
