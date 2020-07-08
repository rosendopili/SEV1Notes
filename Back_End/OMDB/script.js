const container = document.querySelector('.container'); 
const body = document.querySelector('body'); 
// const title = document.querySelector('h1'); 
// const poster = document.querySelector('.poster'); 
// const rating = document.querySelector('.rating'); 
// const error = document.querySelector('.error'); 

    fetch('https://www.omdbapi.com/?s=harry-potter&apikey=c0b965ad')
        .then(response =>{
            return response.json(); 
        })
        .then(response => {
            console.log(response); 
            console.log(response.Search);
            let movies = response.Search 

            for (let i = 0; i < movies.length; i++){
                const title = document.createElement('h1'); 
                container.appendChild(title); 
                title.innerHTML = movies[i].Title;
                const poster = document.createElement('img'); 
                container.appendChild(poster); 
                poster.setAttribute('src', movies[i].Poster);
            }
            
        })
        .catch(err => {
            console.log(err.Error);
            error.innerHTML = err.Error; 
        })


