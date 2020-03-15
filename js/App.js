
let ulElem = document.querySelector('.gallery__list');
const YOUR_ACCESS_KEY = MY_ACCESS_KEY;
const url = 'https://api.unsplash.com/search/photos?page=1&query=london&client_id='+YOUR_ACCESS_KEY;

function loopData(results){
   results.forEach(element => {
         let resultsItemImg = document.createElement('li');
         resultsItemImg.innerHTML ='<figure><img src="'+ element.urls.full +'" alt="london"> <figcaption> <h3>'
         + element.likes +' <span>❤</span></h3></figcaption>' 
                 + '</figure></li>';
        ulElem.append(resultsItemImg );
     });
}

function getImages() {
    fetch(url, 
        {method: 'GET'}
        ).then(response => {
        return response.json();
    }).then(data => {
        //console.log(data.results);
        let results = data.results;
        loopData(results);
    }).catch(error => {
        console.error('ERROR IN FETCH: ', error);
    })
}
setTimeout(()=>{ getImages(); },2000);
