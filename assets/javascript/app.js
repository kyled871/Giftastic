$(document).ready(function() {

let apiKey = '&api_key=J8OYNkQOJSuZ9QnbjoWVnOHzl9tGj6Wl'


$('#submitButton').on('click', function() {

    let musician = $(this).attr("data-musician")
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + musician + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        let results = response.data;
        console.log(results)


    })



})













})