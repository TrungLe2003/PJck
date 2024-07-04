const signUp = document.getElementById('sign-up')
const usernameErr = document.getElementById("username-err");
const passwordErr = document.getElementById("password-err");
const confirmErr = document.getElementById("confirm-err");
const submit = document.getElementById("submit");
signUp.addEventListener("submit", (e) => {
    e.preventDefault();
    const listUser = JSON.parse(localStorage.getItem("users") || "[]");
    const { username, password, confirm } = signUp
    if (!username.value) {
        usernameErr.innerHTML = "<i>Tên người dùng không được để trống</i>"
        return
    } else if (username.value.length < 6) {
        usernameErr.innerHTML = "<i>Tên người dùng tối thiểu phải 6 kí tự</i>"
        return
    } else {
        usernameErr.innerHTML = ""
    }
    if (!password.value) {
        passwordErr.innerHTML = "<i>Mật khẩu không được để trống</i>"
        return
    } else if (password.value.length < 6) {
        passwordErr.innerHTML = "<i>Mật khẩu tối thiểu phải 6 kí tự</i>"
        return
    } else {
        passwordErr.innerHTML = ""
    }
    if (password.value !== confirm.value) {
        confirmErr.innerHTML = '<i>Mật khẩu nhập lại không đúng</i>'
        return
    } else {
        confirmErr.innerHTML = ""
    }
    const findUser = listUser.find((item) => item.username === username.value);
    if (findUser) {
        usernameErr.innerHTML = "<i>Tên người dùng đã tồn tại</i>"
        return
    }
    const data = {
        userId: listUser.length + 1,
        username: username.value,
        password: password.value,
    }
    listUser.push(data);
    localStorage.setItem("users", JSON.stringify(listUser));
    username.value = "";
    password.value = "";
    confirm.value = "";
    window.location.href = "../sign-in/sign-in.html";
})