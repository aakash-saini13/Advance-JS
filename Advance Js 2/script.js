const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');

const tasks = document.querySelectorAll('.task');

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');


let dragedElement = null

tasks.forEach(task => {
    task.addEventListener('drag', (e) => {
        // console.log('dragging',e)
        dragedElement = task
    })
})

// progress.addEventListener('dragenter', (e => {
//     // console.log()
//     progress.classList.add('hover-over');
// }))
// progress.addEventListener('dragleave', (e => {
//     progress.classList.remove('hover-over')
// }))

function addDrageEventsOnColummn(column) {
    column.addEventListener('dragenter', (e => {
        e.preventDefault()
        column.classList.add('hover-over')
    }))
    column.addEventListener('dragleave', (e => {
    e.preventDefault()
    column.classList.remove('hover-over')
    }))

    column.addEventListener('dragover', (e) => {
        e.preventDefault()

    })

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        // console.log(dragedElement,column)
        column.appendChild(dragedElement);
        column.classList.remove('hover-over')
    })
}

addDrageEventsOnColummn(todo)

addDrageEventsOnColummn(progress)

addDrageEventsOnColummn(done)


// open
function openModal(){
  modal.classList.add('active');
}

// close
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});