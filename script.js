function calculateAge() {

    let dob = document.getElementById("dob").value;
    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.innerHTML = "";
    result.innerHTML = "";

    if (dob === "") {
        error.innerHTML = "Please select your Date of Birth.";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML =
        "Years: " + years +
        "<br>Months: " + months +
        "<br>Days: " + days;
}