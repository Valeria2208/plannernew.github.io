let schedule = {
mon: [],
tue: [],
wed: [],
thu: [],
fri: []
}

function addTask(){

const text = document.getElementById("taskInput").value
const day = document.getElementById("daySelect").value
const category = document.getElementById("categorySelect").value

if(text === "") return

schedule[day].push({
text: text,
category: category
})

document.getElementById("taskInput").value = ""

showDay(day)

}

function showDay(day){

const container = document.getElementById("scheduleContent")
container.innerHTML = ""

schedule[day].forEach((task,index)=>{

const div = document.createElement("div")
div.className = "task " + task.category

div.innerHTML = `
<span>${task.text}</span>
<button onclick="deleteTask('${day}', ${index})">Delete</button>
`

container.appendChild(div)

})

}

function deleteTask(day,index){

schedule[day].splice(index,1)

showDay(day)

}