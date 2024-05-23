document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("check-button").addEventListener("click", function() {
        let id = document.getElementById("id-input").value;
        let resultElement = document.getElementById("result");

        // Check if ID is 13 characters long and consists of numbers
        if (id.length !== 13 || isNaN(id)) {
            resultElement.innerText = "Invalid ID number. Please enter a valid 13-digit number.";
            return;
        }

        let year = id.substr(0, 2);
        let month = id.substr(2, 2);
        let day = id.substr(4, 2);
        let genderDigit = id.substr(6, 1);

        // Gender
        let gender = (genderDigit >= 5) ? "Male" : "Female";

        let birthDate = day + "/" + month + "/" + year;

        // Display result
        resultElement.innerText = "Date of Birth: " + birthDate + "\nGender: " + gender;
    });
});