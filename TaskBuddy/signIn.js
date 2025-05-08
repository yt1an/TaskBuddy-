let userEmail = document.getElementById("email")
let userPassword = document.getElementById("pword")
let signInButton = document.getElementById("submit")

let accounts = [
    {
    name: "Dela Torre, Kristian Elmer R.",
    email: "kristianelmer.delatorre@cvsu.edu.ph",
    password: "admin123"
    },
    {
    name: "name2",
    email: "account2@cvsu.edu.ph",
    password: "admin123"
    }
]

signInButton.onclick = function login(){

    event.preventDefault()

        for(let i = 0; i < accounts.length; i++){
            if(userEmail.value == accounts[i].email && userPassword.value == accounts[i].password){
                location.replace("profileDashboard.html")
                localStorage.setItem("loggedInUser", accounts[i].email)
                localStorage.setItem("name", accounts[i].name)
                return
            }
        }
    }