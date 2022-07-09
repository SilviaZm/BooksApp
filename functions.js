let container=document.querySelector(".container");


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

    for(let i = 0; i < arr.length; i++) {
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



function setHome(){
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


    btnAdd.addEventListener("click",()=>{




        setNewBook();
    })


}



function setNewBook(){


    container.innerHTML=`
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
                <button class="button__primary createNewBook">Create New Book</button>
                <button class="button__primary cancelButton">Cancel</button>
            </div>
    </div>

    
    `

    let cancel=document.querySelector(".cancelButton");


    cancel.addEventListener("click",()=>{


        setHome();
    })

}