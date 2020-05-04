$(document).ready(function() {

let apiKey = '&api_key=J8OYNkQOJSuZ9QnbjoWVnOHzl9tGj6Wl'


$('#submitButton').on('click', function() {

    
    let q = $('#searchBox').val();

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q + apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        let results = response.data;

        for (let i = 0; i < results.length; i++) {

            let gifDiv = $('#gifDisplay');
            let rating = results[i].rating;
            let p = $('p').text("Rating: " + rating)
            let gifImage = $("<img>")

            gifImage.attr('src', results[i].images.fixed_height.url)

            gifDiv.prepend(p)
            gifDiv.prepend(gifImage)

            $("#gifDisplay").prepend(gifDiv);
        }
    })
})













})