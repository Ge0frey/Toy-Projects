document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form");
    form.addEventListener('submit', (event) => {
        let Valid = true;

        if (Valid) {
            event.preventDefault();
        }

        let name = document.getElementById("name").value;
        if (name === '') {
            document.getElementById("nameError").innerText = "Please fill this text box";
            Valid = false;
        }

        let email = document.getElementById("email").value;
        if (email === '') {
            document.getElementById("emailError").innerText = "Please add a valid email";
            Valid = false;
        }

        let password = document.getElementById("password").value;
        if (password === '') {
            document.getElementById("passwordError").innerText = "Please enter a password";
            Valid = false;
        } else
        if (password !== '' && password.length < 8) {
            document.getElementById("passwordError").innerText = "Password should be 8 characters long";
            Valid = false;
        }

        //confirm password
        let confirmPassword = document.getElementById("confirmpassword").value;
        if (confirmPassword === '') {
            document.getElementById("ConfirmError").innerText = "Please confirm password";
            Valid = false;
        } else
        if (confirmPassword !== password && confirmPassword.length !== 8) {
            document.getElementById("ConfirmError").innerText = "Please enter the same password as the one entered above";
            Valid = false;
        }

        let gender = document.getElementsByName("gender");
        let selectedGender = null;

        // Iterate through the NodeList to find the checked radio button
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                selectedGender = gender[i].value;
                break;
            }
        }

        // Check if no gender is selected
        if (!selectedGender) {
            document.getElementById("genderError").innerText = "Select a gender";
            Valid = false;
        }
        // return Valid;

        if (Valid) {
            const div = document.createElement('div');
            div.className = 'renderSection';
            div.innerHTML += `<p class="render" id="renderName"><span>Name:</span> ${name}</p>`
            div.innerHTML += `<p class="render" id="renderEmail"><span>Email:</span> ${email}</p>`
            div.innerHTML += `<p class="render" id="renderGender"><span>Gender:</span> ${selectedGender}</p>`
            document.body.appendChild(div)
        }
    })
})