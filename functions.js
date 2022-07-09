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
        <td>${arr[i].title}</td>
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


function updateBook() {
    container.innerHTML = `
    <h1>Update This Book</h1>
    <div class="updateBookWrapper">
        <div>
            <label for="">Title</label>
            <input type="text" class="titleInputUpdate">
        </div>
        <div>
            <label for="">Author</label>
            <input type="text" class="authorInputUpdate">
        </div>
        <div>
            <label for="">Genre</label>
            <input type="text" class="genreInputUpdate">
        </div>
        <div>
            <label for="">Year</label>
            <input type="text" class="yearInputUpdate">
        </div>
            <label for=""> </label>
            <div>
                <button class="button__primary updateNewBookCard">Create New Book</button>
                <button class="button__primary cancelButton">Cancel</button>
            </div>
    </div>

    
    `
}