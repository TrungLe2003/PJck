const submit = document.getElementById("submit");
const usernameErr = document.getElementById("username-err");
const passwordErr = document.getElementById("password-err");
const confirmErr = document.getElementById("confirm-err");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let listUser = JSON.parse(localStorage.getItem("users") || "[]");
  if (!Array.isArray(listUser)) {
    listUser = [];
  }
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");
  if (!username.value) {
    usernameErr.innerHTML = "<i>Tên đăng nhập không được để trống</i>";
    console.log("username error");
    return;
  } else if (username.value.strength < 6) {
    usernameErr.innerHTML = "<i>Tên đăng nhập phải lớn hơn 6 kí tự</i>";
    return;
  }
  if (!password.value) {
    passwordErr.innerHTML = "<i>Yêu cầu mật khẩu</i>";
    return;
  } else if (password.value !== confirm.value) {
    passwordErr.innerHTML = "<i>Mật khẩu không trùng nhau</i>";
    console.log("password error");
    return;
  }
  const findUser = listUser.find((item) => item.username === username.value);
  if (findUser) {
    usernameErr.innerHTML = "<i>Tên đã tồn tại</i>";
    console.log("username exist");
    return;
  }
  const data = {
    userId: listUser.length + 1,
    username: username.value,
    password: password.value,
  };
  console.log(data);
  listUser.push(data);
  localStorage.setItem("users", JSON.stringify(listUser));
  username.value = "";
  password.value = "";
  confirm.value = "";
  window.location.href = "../sign-in/sign-in.htm";
});
