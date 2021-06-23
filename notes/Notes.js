showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (ele) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    // console.log(notesObj);
    showNotes();

})//function to show notes
function showNotes() {

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = '';
    notesObj.forEach(function (ele, index) {
        html += `
        <div class="notecard my-2 my-x card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">Note${index + 1}</h5>
              <p class="card-text">${ele}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            </div>`
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! "Add a note" section above to add notes.`
    }

}
//function to delete notes
function deleteNote(index) {
    // console.log(`I am deleting`, index)

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");  
search.addEventListener('input', function () {

    let inputValue = search.value.toLowerCase();
    // console.log('Input event fired', inputValue)

    let noteCard = document.getElementsByClassName('notecard');
    Array.from(noteCard).forEach(function (ele) {
        let cardTxt = ele.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputValue)) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none'
        }
        // console.log(cardTxt)
    })

})