
    const resultFound = document.getElementById('result-found')
//error field
const error = document.getElementById('errors');


 const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
   

    // clear search field
    searchField.value = '';
    
 
   
    const url = `https://openlibrary.org/search.json?q=${searchText} `
    

    fetch(url)
    .then(response => response.json())
    .then(data => {displaySearchResult(data.docs)
       console.log(data.numFound)

      if(data.numFound === 0){
        error.innerText = 'No Result Found';
      }
      else{
       
        error.innerText = '';
      }
       
    } )

    
}

const displaySearchResult = docs =>{
    console.log(docs.length)
  
    const resultFound = document.getElementById('result-found')
    resultFound.innerText = `Result Found ${docs.length}`


   const searchResult = document.getElementById('search-result');
   searchResult.textContent = '';
   
  
 
   docs?.forEach(doc => {
       console.log(doc)
       error.innerText = '';
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML = `
       <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          
          <h5 class="card-title"> Name: ${doc.title}</h5>
          
          <h5>Author Name: ${doc.author_name[0]}</h5>
          <h5>Publisher: ${doc.publisher[0]}</h5>
          <h5>First Publish Date:${doc.first_publish_year}</h5>
          
          <button type="button" class="btn btn-secondary btn-lg">Learn More</button>
    
        </div>
      </div>
       `;
       searchResult.appendChild(div);
       
      
   })

  

}
