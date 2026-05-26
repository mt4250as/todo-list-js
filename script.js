
const savedData = localStorage.getItem('save');
let saveData = savedData ? JSON.parse(savedData) : [];

window.onload = function() {
    render();
}
//추가 버튼
function addition() {
    const addinput = document.querySelector(".js-input").value;
    
    if(addinput.trim() === ""){
        alert("내용을 입력해주세요.")
        return;
    }
    document.querySelector(".js-input").value = "";

    saveData.push({
        text : addinput,
        isComplete : false
    })
    const save = JSON.stringify(saveData);
    localStorage.setItem('save', save)

    render();
}
//완료 버튼
function complete(index) {
    saveData[index].isComplete = !saveData[index].isComplete;
    const save = JSON.stringify(saveData);
    localStorage.setItem('save', save);
    render();
}
//수정 버튼
function edit(index) {
    const originalText = saveData[index].text;
    const newText = prompt("수정할 내용을 입력하세요.", originalText);
    if (newText !== null && newText.trim() !== ""){
        saveData[index].text = newText;
        const save = JSON.stringify(saveData);
        localStorage.setItem('save', save);
        render();
    }
}
function delete_(index) {
    saveData.splice(index,1);
    const save = JSON.stringify(saveData);
    localStorage.setItem('save',save);
    render();
}
//화면 새로 랜더링
function render() {
    const jsDiv = document.querySelector('.todoConta');
    jsDiv.innerHTML = ""
    saveData.forEach(function(todo, index){
        if (todo.isComplete === true){
            // 완료 상태 태크
            jsDiv.innerHTML += `
            <div class="js-div">
                <span class="todo-text" style="text-decoration: line-through; opacity: 0.5;">${todo.text}</span>  
                <button class="comBtn" onclick="complete(${index})">완료</button>
                <button class="editBtn" onclick="edit(${index})">수정</button>
                <button class="delBtn" onclick="delete_(${index})">삭제</button>
            </div>`;
        }else {
            // 가본 상태 태크
            jsDiv.innerHTML += `
            <div class="js-div">
                <span class="todo-text">${todo.text}</span>  
                <button class="comBtn" onclick="complete(${index})">완료</button>
                <button class="editBtn" onclick="edit(${index})">수정</button>
                <button class="delBtn" onclick="delete_(${index})">삭제</button>
            </div>`;
        }
    })
}