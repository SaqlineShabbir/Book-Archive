const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    // clear search field
    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText} `
    

    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.docs) )
}

const displaySearchResult = docs =>{
   // console.log(docs)

   const searchResult = document.getElementById('search-result');
   docs.forEach(doc => {
       console.log(doc)
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML = `
       <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${doc.title}</h5>
          <p class="card-text">This is a longer card   with supporting text below as a natural  lead-in to additional content. This content  is a little bit longer.</p>
          <h5>author name:${doc.author_name[0]}</h5>
        </div>
      </div>
       `;
       searchResult.appendChild(div);
   })
}