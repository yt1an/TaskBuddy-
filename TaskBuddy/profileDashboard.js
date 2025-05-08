//PROFILE
let user = localStorage.getItem("loggedInUser")
let userName = localStorage.getItem("name")
let profile = document.getElementById("userName")
profile.innerText = userName

//SIDEBAR

let sidebarButton = document.getElementById("sidebarButton")
let sidebar = document.getElementById("sidebar")

sidebarButton.onclick = function sidebarMenu(){
    if(sidebar.style.visibility == "visible"){
        sidebar.style.visibility = "hidden"
    } else {
        sidebar.style.visibility = "visible"
    }
}

//CREATE
let createButton = document.getElementById("create")
let userTaskName = document.getElementById("taskName")
let setPriority = document.getElementById("setPriority")

let createPopUp = document.getElementById("createPopUp")

let confirmCreate = document.getElementById("confirmCreate")
let cancelCreate = document.getElementById("cancelCreate")

let i = 0

//Popup Screen
createButton.onclick = function createOptions(){
    createPopUp.style.visibility = "visible"
}

//Confirms Create Task
confirmCreate.onclick = function create(){
    createPopUp.style.visibility = "hidden"

    task = document.createElement("div")
    task.id = "taskID#" + i
    task.className = "task"
    document.getElementById(setPriority.value).appendChild(task)

    taskName = document.createElement("h1")
    taskName.innerText = userTaskName.value
    document.getElementById("taskID#" + i).appendChild(taskName)
    i++
}

//Cancel Create Task
cancelCreate.onclick = function cancel(){
    createPopUp.style.visibility = "hidden"
}

//DELETE

//LOGOUT
let logOut = document.getElementById("logOut")

logOut.onclick = function logOutButton(){
    localStorage.removeItem("loggedInUser")
    location.replace("signInPage.html")
}