document.querySelector("#popback").addEventListener("click",popback);

    document.querySelector(".logout").addEventListener("click",popup);
    var a=document.querySelector(".popup");
    function popup(){
        a.classList.add("popback");
    }
    function popback(){
        a.classList.remove("popback");
    }