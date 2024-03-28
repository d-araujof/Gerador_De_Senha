const lengthInput = document.getElementById('length');
const includeUppercaseInput = document.getElementById('includeUppercase');
const includeLowercaseInput = document.getElementById('includeLowercase');
const includeNumbersInput = document.getElementById('includeNumbers');
const includeSpecialCharactersInput = document.getElementById('includeSpecialCharacters');
const generateButton = document.getElementById('generateButton');
const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('copyButton');

includeUppercaseInput.checked = false;
includeLowercaseInput.checked = false;
includeNumbersInput.checked = false;
includeSpecialCharactersInput.checked = false;

function generatePassword() {
    const length = Number(lengthInput.value);
    const includeUppercase = includeUppercaseInput.checked;
    const includeLowercase = includeLowercaseInput.checked;
    const includeNumbers = includeNumbersInput.checked;
    const includeSpecialCharacters = includeSpecialCharactersInput.checked;

    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialCharacters) charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    // Se nenhum conjunto de caracteres for selecionado, use apenas letras minúsculas
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialCharacters) {
        charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passwordInput.value = password;
}

function copyPassword() {
    const password = passwordInput.value;
    navigator.clipboard.writeText(password)
        .then(() => {
            alert('Senha copiada');
        })
        .catch(err => {
            console.error('Erro na cópia de senha: ', err);
        });
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);
