function submitForm() {
    // Get values from the form
    var name = $("#name").val();
    var age = $("#age").val();
    var weight = $("#weight").val();
    var type = $("#type").val();
    var likes = $("#likes").val();

    // Create a Pet object
    var petObject = {
        name: name,
        age: age,
        weight: weight,
        type: type,
        likes: likes
    };

    // Log the object and equivalent JSON
    console.log("Pet Object:", petObject);

    var petJSON = JSON.stringify(petObject);
    console.log("Equivalent JSON:", petJSON);

}
