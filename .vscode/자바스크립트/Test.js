const savedData = localStorage.getItem('jsDiv');
let todoList = savedData ? JSON.parse(savedData) : [];

if (todoList.length > 0) {
    const jsDiv = document.querySelector('.todoConta');
    todoList.forEach(function(todo){
        jsDiv.innerHTML += `
        <div class="js-div">
            <span class="todo-text">${todo}</span>  
            <button class="comBtn">완료</button>
            <button class="editBtn">수정</button>
            <button class="delBtn">삭제</button>
        </div>`;
    })
}


function addition() {
    const addinput = document.querySelector(".js-input").value;
    
    if(addinput.trim() === ""){
        alert("내용을 입력해주세요.")
        return;
    }

    // todoList.push(addinput);

    const jsDiv = document.querySelector('.todoConta');
    jsDiv.innerHTML += `
    <div class="js-div">
        <span class="todo-text">${addinput}</span>  
        <button class="comBtn">완료</button>
        <button class="editBtn">수정</button>
        <button class="delBtn">삭제</button>
    </div>`;
    // document.querySelector('.js-div').innerHTML += addinput; 이 역할을 대신함
    document.querySelector(".js-input").value = "";

    const myToDo = JSON.stringify(todoList);
    localStorage.setItem('jsDiv', myToDo);
}
