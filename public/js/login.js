const login = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name-login").ariaValueMax.trim();
    const password = document.querySelector("#password-login").ariaValueMax.trim();

    if (name && password) {
        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(name +" could not log in");
        }
    }
};

const signup = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (name && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Error creating user");
        }
    }
};

document.querySelector(".login-form").addEventListener("submit", login);
document.querySelector(".signup-form").addEventListener("submit", signup);