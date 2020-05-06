$(document).ready(function() {

    let searchResults = ['Kevin Parker', 'Ross MacDonald', 'Mac DeMarco']

    let apiKey = '&api_key=J8OYNkQOJSuZ9QnbjoWVnOHzl9tGj6Wl'


    function renderButtons() {
    
        $("#gifButtons").empty();

        // loops searchResults array and creates a button in each array
        for (let i = 0 ; i < searchResults.length; i++) {
            let a = $("<button>");
            a.addClass("btn btn-light m-1 gifBtn");
            a.attr("data-name", searchResults[i]);
            a.text(searchResults[i]);
            $("#gifButtons").append(a);
        }
    }
    renderButtons()



    $('.gifBtn').on('click', function() {

        console.log(this)

        $("#gifDisplay").empty();

        let musician = $(this).attr('data-name')
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + musician + apiKey + "&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
    
    
        .then(function(response) {

            let results = response.data;
    
            for (let i = 0; i < results.length; i++) {
                
                let gifDiv = $('<div>');
                let rating = results[i].rating;
                let p = $('<p>').text("Rating: " + rating)
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

        renderButtons()

    })



})