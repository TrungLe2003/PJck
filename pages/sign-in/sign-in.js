const signIn = document.getElementById("sign-in")
const usernameErr = document.getElementById("username-err");
signIn.addEventListener("submit", (e) => {
    e.preventDefault();
    const listUser = JSON.parse(localStorage.getItem("users") || "[]")
    const { username, password } = signIn
    if (!username.value || username.value.length < 6) {
        return
    }
    if (!password.value) {
        return
    }
    const findUser = listUser.find((item) => item.username === username.value && item.password === password.value)
    if (!findUser) {
        usernameErr.innerHTML = "<i>Tài khoản không đúng</i>"
        return
    }
    const signInUser = {
        userId: findUser.userId,
        username: findUser.username,
    }
    localStorage.setItem('currentSignIn', JSON.stringify(signInUser))
    window.location.href = "../homepage/homepage.html"
})