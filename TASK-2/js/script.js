document.addEventListener("DOMContentLoaded", () => {
    
    let list = document.querySelector("#list")
    let todoList = localStorage.getItem("todolist")
    const toasts = document.querySelectorAll("#liveToast")
    const btnadd = document.querySelector("#liveToastBtn")
    
    // local storage yi alır
    if(todoList) {
        list.innerHTML = JSON.parse(todoList);
    }
    
    // liste oluşturma
    function newElement() {   
        const li = document.createElement("li");
        let task = document.querySelector("#task").value.trim()
        // liste boş ise
        if(!task) {
            $(toasts[1]).toast('show')
            return;
        }
        // inputu temizle
        document.querySelector("#task").value='';
        // inputa girilen değeri li ye at
        li.textContent = task;
        
        // li üstüne tıklayınca
        li.addEventListener("click" , () => {    
            if (li.classList.contains("checked"))
                li.classList.remove("checked");
            else
                li.classList.add("checked");
            localStorage.setItem("todolist",JSON.stringify(list.innerHTML));
        });
        
        // li etiketini silme
        const deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "&times;";
        deleteSpan.classList.add("close");
        deleteSpan.addEventListener("click",() => {
            removeElement(li);
        });
        
        li.appendChild(deleteSpan);
        list.appendChild(li);
        // toasts
        $(toasts[0]).toast('show')
        // localStorage güncelle
        localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
    };

    document.querySelectorAll("#list li").forEach((item) => { 
        item.addEventListener("click" , () => {
            if(item.classList.contains("checked"))
                item.classList.remove("checked");
            else
                item.classList.add("checked");
            localStorage.setItem("todolist",JSON.stringify(list.innerHTML));
        })
    })

    document.querySelectorAll("#list span").forEach((item) => { 
        let li = item.parentNode;
        item.addEventListener("click",() => {
            removeElement(li);
        })
    })
        
    btnadd.addEventListener("click", newElement);

    // localStorage güncelle
    function removeElement(li) {
        li.remove();
        localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
    }
});