const container=document.querySelector('.container');
const serverurl="https://jsonplaceholder.typicode.com/users";
fetch(serverurl).then((data)=>{
    return data.text();
}).then((result)=>{
    // console.log(result);
    const array=JSON.parse(result);
    // console.log(array);
    array.forEach((element)=>{
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`   <div class="name">Name</div>
        <div class="name-content">${element.name}</div>
        <div class="email">Email</div>
        <div class="email-content">${element.email}</div>`;
        container.appendChild(card);
    });
})