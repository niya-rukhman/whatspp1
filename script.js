let handleSuccess = function(response){
    console.log("hello");
    console.log(response);
    for(let i = 0; i < response.data.length; i++){
        let messages = response.data[i];
        document.querySelector("ul").innerHTML += `<li class="messages">;
        <h3>${messages.name}</h3>
        <p>${messages.gender}</p>
        <p>${messages.firstLine}</p>
        <p>${messages.number}</p>
        <img src=${messages.profilePic}>
        </li>`
    }
}

axios.get('https://tk-whatsapp.herokuapp.com/messages')

.then(handleSuccess)
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function (finishUp) {
    // always executed
  });