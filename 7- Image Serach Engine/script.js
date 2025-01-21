let searchForm = document.getElementById('search-form')
let searchBox = document.getElementById('search-box')
let searchReasult = document.getElementById('search-result')
let showMoreBtn = document.getElementById('show-more-btn')
const accsesKey = 'kOLGGrXE1kfKJeeDyz2S7M3jNFy1FsdKyPm628j_aQc'

let keyword = '';
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?${page}=1&query=${keyword}&client_id=${accsesKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    console.log(results);
    
    results.map((results)=>{
        const image = document.createElement('img');
        image.src = results.urls.small;

        const imageLink = document.createElement('a');
        // imageLink.href = results.links.html;
        imageLink.href = results.links.download;

        imageLink.target = '_blank';

        imageLink.appendChild(image);
        searchReasult.appendChild(imageLink);
    })
    
    showMoreBtn.style.display = 'block'
}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    page=1;
    searchImage();
} )























showMoreBtn.addEventListener('click', ()=>{
    page++;
    searchImage();
})
