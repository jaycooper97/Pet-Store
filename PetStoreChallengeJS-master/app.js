var shop = [
    {
      title: 'Tigers',
      image: './img/Dog Food.jpeg',
      price: '$7,500-15,000',
      description
    },

    {
      title: 'Tigers',
      image: './img/Dog Food.jpeg',
      price: '$7,500-15,000',
      description
    },

    {
      title: 'Tigers',
      image: './img/Dog Food.jpeg',
      price: '$7,500-15,000',
      description
    },

    ]

    var postHTML = " "




















    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card ' + '" style="width: 18rem;"><span> <div class="card-body"<h5 class="card-title">' + shop[i].title + '</h5>'
        var image = '<img class="card-img-top" src="' + shop[i].image + '">'
        var price = '<p class="card-text"> $' + shop[i].price + '<p class="card-text">'
        var description = '<div class="des"><p>' + shop[i].description + '</p></div></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
