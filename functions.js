let container = document.querySelector(".container");


let booksObj = [

    {
        title: 'Antic Hay',
        author: 'Gavin Kessler',
        genre: 'Mistery',
        year: 1992
    },
    {
        title: 'Great Work of Time',
        author: 'Yanira Rohan',
        genre: 'Mythopoeia',
        year: 1992
    },
    {
        title: "Blood's a Rover",
        author: 'Miss Delta Murray',
        genre: 'Mistery',
        year: 1992
    },
    {
        title: 'The Road Less Traveled',
        author: 'Daryl Barton',
        genre: 'Reference book',
        year: 1992
    },
    {
        title: 'The Yellow Meads of Asphodel',
        author: 'Carter Ledner V',
        genre: 'Fable',
        year: 1992
    },
    {
        title: 'Dying of the Light',
        author: 'Francisca Osinski III',
        genre: 'Science fiction	',
        year: 1992
    },
    {
        title: 'Down to a Sunless Sea',
        author: 'Yvette Lehner',
        genre: 'Western',
        year: 1992
    },

]


function populateTable(arr) {

    let tableBody = document.querySelector('.tableBody');
    let text = '';

    for (let i = 0; i < arr.length; i++) {
        text += `
        <tr>
        <td class="title">${arr[i].title}</td>
        <td>${arr[i].author}</td>
        <td>${arr[i].genre}</td>
        <td>${arr[i].year}</td>
        </tr>
        `
    }

    tableBody.innerHTML = text;
}



function setHome() {
    container.innerHTML = `
    <h1>Books</h1>
    <button class="button__primary btnCreate">Create New Book</button>
    <div class="search__wrapper">
        <label>Search by author</label>
        <input class="searchInput">
    </div> 

   <table>
       <thead>
           <tr>
               <th>Title</th>
               <th>Author</th>
               <th>Genre</th>
               <th>Year</th>
           </tr>
       </thead>
       <tbody class="tableBody">
       </tbody>
   </table>
    `

    populateTable(booksObj);


    let btnAdd = document.querySelector(".btnCreate");
    let tableBody = document.querySelector('.tableBody');
    let searchInput = document.querySelector('.searchInput');

    tableBody.addEventListener("click",(e)=>{

        let obj = e.target;
        if(obj.classList.contains("title")){

            let title=obj.textContent;
             setUpdateBook(returnBookByTitle(title,booksObj))
        }
    })


    btnAdd.addEventListener("click", () => {

        setNewBook();
    })





}


function setNewBook() {

    container.innerHTML = `
    <h1>New Book</h1>
    <div class="newBookWrapper">
        <div>
            <label for="">Title</label>
            <input type="text" class="titleInput">
        </div>
        <div>
            <label for="">Author</label>
            <input type="text" class="authorInput">
        </div>
        <div>
            <label for="">Genre</label>
            <input type="text" class="genreInput">
        </div>
        <div>
            <label for="">Year</label>
            <input type="text" class="yearInput">
        </div>
            <label for=""> </label>
            <div>
                <button class="button__primary createNewBookCard">Create New Book</button>
                <button class="button__primary cancelButton">Cancel</button>
            </div>
    </div>

    
    `
    let newBookWrapper = document.querySelector(".newBookWrapper");
    let cancel = document.querySelector(".cancelButton");
    let btnCreateBookCard = document.querySelector(".createNewBookCard");
    let titleInput = document.querySelector(".titleInput");
    let authorInput = document.querySelector(".authorInput");
    let genreInput = document.querySelector(".genreInput");
    let yearInput = document.querySelector(".yearInput");

    let errori = [];

    cancel.addEventListener("click", () => {


        setHome();
    })

    newBookWrapper.addEventListener("input", e => {
      
        check();
    })



    function check(){
        errori = [];
        if (titleInput.value == "") {
            errori.push(" title ");
        };

        if (authorInput.value == "") {
            errori.push(" author ");
        };

        if (genreInput.value == "") {
            errori.push(" genre ");
        };

        if (yearInput.value == "") {
            errori.push(" year");
        };

    }

    btnCreateBookCard.addEventListener('click', () => {
         check();

        let newBook = {

            title: titleInput.value,
            author: authorInput.value,
            genre: genreInput.value,
            year: yearInput.value
        };


        if (errori.length > 0) {

            alert("Please enter a" + errori +"");

        } else {
            booksObj.push(newBook);

            setHome();

            console.log(newBook)


        }
        // alert(errori);



    })
}


function setUpdateBook(book) {
    container.innerHTML = `
    <h1>Update This Book</h1>
    <div class="updateBookWrapper">
        <div>
            <label for="">Title</label>
            <input type="text" class="titleInputUpdate" value="${book.title} " disabled>
        </div>
        <div>
            <label for="">Author</label>
            <input type="text" class="authorInputUpdate" value="${book.author}">
        </div>
        <div>
            <label for="">Genre</label>
            <input type="text" class="genreInputUpdate" value="${book.genre}">
        </div>
        <div>
            <label for="">Year</label>
            <input type="text" class="yearInputUpdate" value="${book.year}">
        </div>
            <label for=""> </label>
            <div>
                <button class="button__primary updateButton">Update This Book</button>
                <button class="button__primary cancelButton">Cancel</button>
                <button class="button__primary deleteButton">Delete</button>
            </div>
    </div>
    `

   
    let updateButton = document.querySelector('.updateButton');
    let deleteButton = document.querySelector('.deleteButton');
    let updateTitleInput = document.querySelector('.titleInputUpdate');
    let updateAuthorInput = document.querySelector('.authorInputUpdate');
    let updateGenreInput = document.querySelector('.genreInputUpdate');
    let updateYearInput = document.querySelector('.yearInputUpdate');



    updateButton.addEventListener('click', () => {

      
        
        let upBook = {
            title: updateTitleInput.value,
            author: updateAuthorInput.value,
            genre: updateGenreInput.value,
            year: updateYearInput.value
        }
        console.log(upBook);
        updateBook(upBook);
        console.log(booksObj);
        setHome();
    })

    deleteButton.addEventListener('click', () => {

      

        booksObj=booksObj.filter((e)=>!updateTitleInput.value.includes(e.title));

      
        setHome();

    })


}



//todo functie ce primeste ca parametru aun array si un titlu si returneaza obiectul cu titlul respectiv

function returnBookByTitle(title, arr) {

    for(let i=0; i<arr.length; i++) {

        if(arr[i].title == title) {
            return arr[i];
        }
    }

    return -1;
}


//todo functie ce primeste ca parametru o carte si updateaza in vectorul de carti valorile noi


function updateBook(newBook) {
    
    for(let i=0; i<booksObj.length; i++) {

        // console.log(booksObj[i].title);
        console.log(newBook.title);
        if(newBook.title.includes(booksObj[i].title)) {

            console.log("aici");
            booksObj[i].author = newBook.author;
            booksObj[i].genre = newBook.genre;
            booksObj[i].year = newBook.year;
            
        }  
               
    }

}

function deleteBook(arr, book) {

    let booksObjDeleted = []

    for(let i=0; i<arr.length; i++) {

        if(book.title.includes(booksObj[i].title) == false ) {

            booksObjDeleted.push(arr[i]);

        }
    }


    console.log(booksObjDeleted);

    return booksObjDeleted;
}


function filterByAuthor(author, arr) {

    let newArr = [];

    for(let i=0; i<arr.length; i++) {

        if(author == arr[i].author) {

            newArr.push(arr[i]);
        }
    }

    return newArr;
}