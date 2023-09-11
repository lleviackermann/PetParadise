const ann = document.getElementById('announcementSubmit');

let announcement = document.getElementById('announcement-message');

ann.addEventListener('click', (event) =>{
    event.preventDefault();
    let mess = announcement.value;
    const messages = {
        message: mess,
    }
    announcement.value = "";
    const xhr = new XMLHttpRequest();

    xhr.open('POST' ,'/others/announcement',true);
    xhr.setRequestHeader('Content-type', 'application/json');
    
    xhr.onload = function () {
        if(this.status === 200){
    
            console.log("No error")
        }
        else{
            console.log("Some error occured")
        }
      }



    xhr.send(JSON.stringify(messages));
})