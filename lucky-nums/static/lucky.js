/** processForm: get data from form and make AJAX call to our API. */
function processForm(evt) {
    evt.preventDefault(); // Prevent the default form submission behavior

    // Gather form data
    const name = $("#name").val();
    const email = $("#email").val();
    const year = $("#year").val();
    const color = $("#color").val();

    // Clear any previous error messages
    $("#name-err").text("");
    $("#email-err").text("");
    $("#year-err").text("");
    $("#color-err").text("");
    $("#lucky-results").text(""); // Clear previous result message

    // Convert form data to JSON format
    const formData = {
        name: name,
        email: email,
        year: year,
        color: color
    };

    // Make AJAX call to the backend
    axios.post('/api/get-lucky-num', formData)
        .then(response => handleResponse(response.data))
        .catch(error => {
            console.error("Error occurred:", error);
            $("#lucky-results").text("An error occurred while processing your request. Please try again.");
        });
}

/** handleResponse: deal with response from our lucky-num API. */
function handleResponse(resp) {
    // Check if there are errors
    if (resp.errors) {
        // Display the error messages in the corresponding <b> elements
        if (resp.errors.name) {
            $("#name-err").text(resp.errors.name.join(", "));
        }
        if (resp.errors.email) {
            $("#email-err").text(resp.errors.email.join(", "));
        }
        if (resp.errors.year) {
            $("#year-err").text(resp.errors.year.join(", "));
        }
        if (resp.errors.color) {
            $("#color-err").text(resp.errors.color.join(", "));
        }
    } else {
        // No errors, display the lucky number and year facts
        const resultMessage = `Your lucky number is ${resp.num.num}. (${resp.num.fact}) \nYour birth year fact is ${resp.year.fact}`;
        $("#lucky-results").text(resultMessage);
    }
}

// Attach the processForm function to form submission
$("#lucky-form").on("submit", processForm);
