score = 0;

function opt_1_click(){
    score = 0;
    localStorage.setItem("score", score);
    window.alert("Answer is Wrong! Correct answer is Crane (option 3)")
    document.getElementById("btn_opt_1").disabled=true;
    document.getElementById("btn_opt_2").disabled=true;
    document.getElementById("btn_opt_3").disabled=true;
    setTimeout(function nextpage(){
        window.location = "round_2.html";
    },1000);
}

function opt_2_click(){
    score = 0;
    localStorage.setItem("score", score);
    window.alert("Answer is Wrong! Correct answer is Crane (option 3)")
    document.getElementById("btn_opt_1").disabled=true;
    document.getElementById("btn_opt_2").disabled=true;
    document.getElementById("btn_opt_3").disabled=true;
    setTimeout(function nextpage(){
        window.location = "round_2.html";
    },1000);
}

function opt_3_click(){
    score = 1;
    localStorage.setItem("score", score);
    window.alert("Correct Answer!")
    document.getElementById("btn_opt_1").disabled=true;
    document.getElementById("btn_opt_2").disabled=true;
    document.getElementById("btn_opt_3").disabled=true;
    setTimeout(function nextpage(){
        window.location = "round_2.html";
    },1000);
}