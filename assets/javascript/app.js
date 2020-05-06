$(document).ready(function() {

    let searchResults = ['Kevin Parker', 'Ross MacDonald', 'Mac DeMarco']

    let apiKey = '&api_key=J8OYNkQOJSuZ9QnbjoWVnOHzl9tGj6Wl'

    console.log(searchResults)

    // displays example search results with array
    $.each(searchResults, function(index, value) {
        $('#gifButtons').attr('data-name')
        $('#gifButtons').append('<button class="btn btn-light m-1">' + value + '</button>')
    })


    $('#gifButtons').on('click', function() {
        let musician = $(this).attr('data-name')
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + musician + apiKey + "&limit=10";

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


    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        // takes value in search box and push it to existing array and appends that value as a new button.
        let q = $('#searchBox').val().trim();
        searchResults.push(q)
        $('#gifButtons').append('<button class="btn btn-light m-1">' + q + '</button>')
        $('#gifButtons').attr('data-name', q)
    })

})