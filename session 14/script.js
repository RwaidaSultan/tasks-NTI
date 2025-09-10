function changeImg(){
    var img = document.querySelector('#img')
    console.log(img.src)
if (img.src.includes("/image/image3.jpg")) {
        img.src = "/image/image.jpg";
    } else {
        img.src = "/image/image3.jpg";
    }
}

//============================================================
var userName = document.getElementById('userName')
userName.addEventListener('input', (e) => {
    e.target.nextElementSibling.innerText = e.target.value
})

var userForm = document.getElementById('userForm')
var users = []
var editIndex = null
var submitBtn = document.querySelector('#userForm button')

userForm.addEventListener("submit", (e) => {
    e.preventDefault()

    var user = {
        name: e.target.elements.userName.value,
        email: e.target.elements.userEmail.value
    }

    if (editIndex !== null) {
        users[editIndex] = user
        editIndex = null
        submitBtn.innerText = "Add User"
    } else {
        users.push(user)
    }

    e.target.reset()
    showUser()
})

var showUser = () => {
    var tBody = document.getElementById('tableBody')
    tBody.innerText = ""

    users.forEach((item , i ) => {
        var tr = document.createElement("tr")

        var td = document.createElement('td')
        td.innerText = item.name

        var td2 = document.createElement('td')
        td2.innerText = item.email

        var td3 = document.createElement('td')

        var editBtn = document.createElement('button')
        editBtn.innerText = "Edit user"
        editBtn.classList.add('btn' , 'btn-success' , 'btn-sm')
        editBtn.addEventListener('click' , () => {
            document.getElementById('userName').value = item.name
            document.getElementById('userEmail').value = item.email
            editIndex = i
            submitBtn.innerText = "Update User"
        })

        var deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Remove user"
        deleteBtn.classList.add('btn' , 'btn-danger' , 'btn-sm' , "ms-2")
        deleteBtn.addEventListener('click', () => {
            users.splice(i, 1)
            showUser()
        })

        td3.append(editBtn, deleteBtn)

        tr.append(td, td2, td3)
        tBody.append(tr)
    })
}
