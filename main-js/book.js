const searchBtn = document.getElementById('button-Search');


searchBtn.addEventListener('click', () => {
    // console.log('Search Button Is Clicked');
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    document.getElementById('search-field').value ='';
    // console.log(searchText);
    const url = `https://openlibrary.org/search.json?q='${searchText}'`;
    

    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.docs));
})


const searchResult = docs => {
    const searchResult = document.getElementById('search-result');
    // console.log(docs.length)

    const rowCount  = (docs.length)
    document.getElementById('count').innerHTML = rowCount; 
    
    searchResult.textContent='';
    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        
        <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h5> ${book.author_name}</h5>
                    <p class="card-text">${book.text}</p>
                </div>
                <div class="card-footer">
                    <small class="">${book.first_publish_year}</small>
                </div>
            </div>
        `;
        searchResult.appendChild(div);


    });
}

