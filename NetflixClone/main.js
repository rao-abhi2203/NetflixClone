//JavaScript Code for fetching data from Api
// api key fro TMDB
const api = "api_key=3496cd8b5ece5443b464b9519934aa45";
//base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const image_url = "https://image.tmdb.org/t/p/w300";

//requests for movies data
const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_network=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentMovies: `${base_url}/discover/movie?${api}&with_genres=99`
};
//used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}
//banner
fetch(requests.fetchNetflixOriginals)
    .then(response => response.json())

    .then(data => {
        // console.log(data.results);

        //every refresh the movie will be change 

        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage = `url("${banner_url + setMovie.backdrop_path}")`;
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    });

//movies row
fetch(requests.fetchNetflixOriginals)
    .then((response) => response.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("netflixrow")
        headrow.appendChild(row);
        const title = document.createElement('h2');
        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s = movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = image_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//trending
fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("popularrow");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Top Rated";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            // console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = image_url + movie.poster_path;
            row_posters.appendChild(poster);

        });
    });

//action
fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        // row.classList.add("popularrow");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Action Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            // console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//horror
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Horror Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = image_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//romANce
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Romance Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = image_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//Documentary
fetch(requests.fetchDocumentMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Documentary Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = image_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


