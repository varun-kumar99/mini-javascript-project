const form = document.querySelector("form");
const list = document.querySelector("#list");
const inp = document.querySelector('#inp');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const inptext = inp.value;
    inp.value="";

    getMovie(inptext);
} );

function getMovie (movie) { 	
    const URL = `https://api.tvmaze.com/search/shows?q=${movie}`
    list.innerText = "";		 	 				// Create a new text node element and append it to the list container.
    axios.get(URL)
    .then((res)=>{
       const data = res.data; 		
       data.forEach(element => {
        const image = document.createElement('img');	 	    image.setAttribute('src', element.show.image.medium);
        image.style.margin = '10px';
        list.appendChild(image)
       });
    })
    .catch((error)=>{ console.log("error") })
}