const donut = document.getElementById("donutChart").getContext("2d")
const bar = document.getElementById("barChart").getContext("2d")

let progressMode="deadlines"


function updateLegend(data){

document.getElementById("studyText").textContent="Study "+data[0]+"%"
document.getElementById("examText").textContent="Exam "+data[1]+"%"
document.getElementById("projectText").textContent="Project "+data[2]+"%"
document.getElementById("personalText").textContent="Personal "+data[3]+"%"

}



function drawDonut(data){

donut.clearRect(0,0,220,220)

let colors=[
"#2F80ED",
"#EB5757",
"#27AE60",
"#F2C94C"
]

let start=0

data.forEach((value,i)=>{

let angle=value/100*2*Math.PI

donut.beginPath()
donut.moveTo(110,110)
donut.arc(110,110,100,start,start+angle)
donut.fillStyle=colors[i]
donut.fill()

start+=angle

})

donut.globalCompositeOperation="destination-out"

donut.beginPath()
donut.arc(110,110,50,0,2*Math.PI)
donut.fill()

donut.globalCompositeOperation="source-over"

updateLegend(data)

}



function drawBars(data){

bar.clearRect(0,0,500,220)

data.forEach((value,i)=>{

bar.fillStyle="#7a5524"

let x=i*90+40
let height=value*30
let y=200-height

bar.fillRect(x,y,50,height)

})

}



function updateCharts(){

if(progressMode==="deadlines"){

drawDonut([60,20,10,10])
drawBars([3,5,4,6,5])

}

if(progressMode==="focus"){

drawDonut([40,30,20,10])
drawBars([5,4,6,5,3])

}

}



document.querySelectorAll("input[name='progress']").forEach(radio=>{

radio.addEventListener("change",e=>{

progressMode=e.target.value
updateCharts()

})

})

updateCharts()