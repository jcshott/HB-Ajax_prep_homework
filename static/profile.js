
function submitProfile(evt) {
    evt.preventDefault();
    
    $.post("/profile",
        $('#profile-form').serialize(),
        function (result) {
            $('#profile').append("<p>" + "Name: " + result.fullname + "</p>");
            $('#profile').append("<p>" + "Age: " + result.age + "</p>");
            $('#profile').append("<p>" + "Occupation: " + result.occupation + "</p>");
            $('#profile').append("<p>" + "Salary: " + result.salary + "</p>");
            $('#profile').append("<p>" + "Education: " + result.education + "</p>");
            $('#profile').append("<p>" + "State: " + result.state + "</p>");
            $('#profile').append("<p>" + "City Type: " + result.city + "</p>");
            $('#profile').append("<p>" + "Gardener: " + result.garden + "</p>");
            $('#profile').append("<p>" + "How much TV watched: " + result.tv + "</p>")

        }
    );
}

$("#profile-form").on('submit', submitProfile);
