let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let phone_number = document.getElementById('phone_number');
let email = document.getElementById('email');
let button = document.getElementById('Creat');
let mood = 'creat';
let temp;
let array = [];
if(localStorage.getItem('data')){
    array = JSON.parse(localStorage.getItem('data'));
    showData();
}
let counter = 0;

button.onclick = function(){
    counter++;
    let objet = {
        nom : first_name.value,
        prénom : last_name.value,
        telephon : phone_number.value,
        email : email.value,
    }
    if(mood === 'creat'){
        array.unshift(objet);
        mood = 'creat';
    }else{
        array[temp] = objet;
    }
    localStorage.setItem('data' , JSON.stringify(array));
    showData();
    clearData();
}
function showData(){
    let table = '';
    for (let i = 0 ; i< array.length ; i++){
        table += `
         <tr>
            <td>${i + 1}</td>
            <td>${array[i].nom}</td>
            <td>${array[i].prénom}</td>
            <td>${array[i].telephon}</td>
            <td>${array[i].email}</td>
            <td onclick =UpdateDta(${i}) id="Update">Update</td>
            <td onclick =DeleteData(${i}) id="Delete">Delete</td>
        </tr>
        `;
    }
    document.getElementById('tbody').innerHTML = table;
}

function clearData(){
    first_name.value = '';
    last_name.value = '';
    phone_number.value = '';
    email.value = '';
}

function DeleteData(index){
    array.splice(index , 1);
    showData();
}

function UpdateDta(index){
    first_name.value = array[index].nom;
    last_name.value = array[index].prénom;
    phone_number.value = array[index].telephon;
    email.value = array[index].email;
    button.innerHTML = 'update';
    mood = 'update';
    temp = index;
}