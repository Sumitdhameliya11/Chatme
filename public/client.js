
//Importing The Required Fields
const socket  =  io();
let username;
const textarea = document.querySelector('#textarea');
const messagearea = document.querySelector('.message_area');
//Get UserName As Dyanamic
do {
    username = prompt('Please Enter your UserName :');
} while (!username);

textarea.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        sendmessage(e.target.value);
    }

});

const sendmessage = (msg)=>{
    textarea.value = "";
    //sending the message
    let usermsg = {
        user:username,
        message:msg.trim()
    }
    //Append
    appendmessage(usermsg,'outgoing');
    //send message  to server
    socket.emit('message',usermsg);
    
}

const  appendmessage = (usermsg,type)=>{
    //create elemant name div
    let  maindiv = document.createElement('div');
    let classname =  type;
    //add classs name 
    maindiv.classList.add(classname,'message')
    //create sub element
    let element =  `
        <h4>${usermsg.user}</h4>
        <p>${usermsg.message}</p>
    `
    maindiv.innerHTML = element;

    messagearea.appendChild(maindiv);
    scrolltobottom();
}


//Recieve the message 

socket.on('message',(msg)=>{
    console.log(msg);
    //send all broswer which is  send that cannot recevice the message
    appendmessage(msg,'incomeing');
    scrolltobottom();
});

const scrolltobottom = ()=>{
    messagearea.scrollTop = messagearea.scrollHeight   
}