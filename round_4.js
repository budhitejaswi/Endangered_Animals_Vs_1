score = localStorage.getItem("score");

function opt_1_click(){
    score = parseInt(score) + 1;
    localStorage.setItem("score", score);
    window.alert("Correct Answer!")
    document.getElementById("btn_opt_1").disabled=true;
    document.getElementById("btn_opt_2").disabled=true;
    document.getElementById("btn_opt_3").disabled=true;
    setTimeout(function nextpage(){
        window.location = "end.html";
    },1000);
}

function opt_2_click(){
    localStorage.setItem("score", score);
    window.alert("Answer is Wrong! Correct answer is Gorilla (option 2)")
    document.getElementById("btn_opt_1").disabled=true;
    document.getElementById("btn_opt_2").disabled=true;
    document.getElementById("btn_opt_3").disabled=true;
    setTimeout(function nextpage(){
        window.location = "end.html";
    },1000);
}

function opt_3_click(){
    localStorage.setItem("score", score);
    window.alert("Answer is Wrong! Correct answer is Gorilla (option 2)")
    document.getElementById("btn_opt_1").disabled=true;
    document.getElementById("btn_opt_2").disabled=true;
    document.getElementById("btn_opt_3").disabled=true;
    setTimeout(function nextpage(){
        window.location = "end.html";
    },1000);
}