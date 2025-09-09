var users = [];
var p = prompt("Number of users");
function addUser() {
    var name = prompt("Enter name");
    var id = prompt("Enter ID");
    var balance = prompt("Enter balance");
    var user = {
        name: name,
        id: id,
        balance: balance
    }
    users.push(user); 
}
for (var i = 0; i < p; i++) {
    addUser();
}
console.log(users);

function editUserBalanceById(){
    var searchById = prompt("Enter ID");
    var newBalance = prompt("Enter  new balance");
     var ind = users.findIndex(ele => ele.id === searchById);
     if (ind !== -1) {
        console.log(users[ind]);
        users[ind].balance = newBalance;
        console.log( "after edit",users[ind]);
    }
}
function deleteUserById(){
    var deleteId = prompt("Enter ID ");
    var ind = users.findIndex(ele => ele.id === deleteId);
    if (ind !== -1) {
         console.log( users[ind]);
        users.splice(ind, 1); 
        console.log( "after delete",users);
    }
}

