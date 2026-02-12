const viewPasswordButton = document.querySelector("#view-password");
const inputPassword = document.querySelector("#password");

const onChangeViewPassword = () => {
    if (inputPassword.type === "password"){
        inputPassword.type = "text";
        viewPasswordButton.classList.replace("fa-eye-slash", "fa-eye");
    }
    else{
        inputPassword.type = "password";
        viewPasswordButton.classList.replace("fa-eye", "fa-eye-slash");
    }
};

viewPasswordButton.onclick = onChangeViewPassword;