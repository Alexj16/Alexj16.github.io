function displayaboutme(){
    var home = document.getElementById("home");
    var about_me = document.getElementById("aboutme");
    var studies = document.getElementById("studies");
    var exp = document.getElementById("exp");
    var skills = document.getElementById("skills");
    if (about_me.style.display === "none") {
        home.style.display = "none";
        about_me.style.display = "inline";
        studies.style.display = "none";
        exp.style.display = "none";
        skills.style.display = "none";} 
    else if (about_me.style.display === "inline") {;}
    else {home.style.display = "none";
        about_me.style.display = "inline";
        studies.style.display = "none";
        exp.style.display = "none";
        skills.style.display = "none";}
}
function displaystudies(){
    var home = document.getElementById("home");
    var about_me = document.getElementById("aboutme");
    var studies = document.getElementById("studies");
    var exp = document.getElementById("exp");
    var skills = document.getElementById("skills");
    if (studies.style.display === "none") {
        home.style.display = "none";
        about_me.style.display = "none";
        studies.style.display = "inline";
        exp.style.display = "none";
        skills.style.display = "none";}
    else if (studies.style.display === "inline") {;}
    else {home.style.display = "none";
        about_me.style.display = "none";
        studies.style.display = "inline";
        exp.style.display = "none";
        skills.style.display = "none";}
}
function displayexp(){
    var home = document.getElementById("home");
    var about_me = document.getElementById("aboutme");
    var studies = document.getElementById("studies");
    var exp = document.getElementById("exp");
    var skills = document.getElementById("skills");
    if (exp.style.display === "none") {
        home.style.display = "none";
        about_me.style.display = "none";
        studies.style.display = "none";
        exp.style.display = "inline";
        skills.style.display = "none";}
    else if (exp.style.display === "inline") {;}
    else {home.style.display = "none";
        about_me.style.display = "none";
        studies.style.display = "none";
        exp.style.display = "inline";
        skills.style.display = "none";}
}
function displayskill(){
    var home = document.getElementById("home");
    var about_me = document.getElementById("aboutme");
    var studies = document.getElementById("studies");
    var exp = document.getElementById("exp");
    var skills = document.getElementById("skills");
    if (skills.style.display === "none") {
        home.style.display = "none";
        about_me.style.display = "none";
        studies.style.display = "none";
        exp.style.display = "none";
        skills.style.display = "inline";}
    else if (skills.style.display === "inline") {;}
    else {home.style.display = "none";
        about_me.style.display = "none";
        studies.style.display = "none";
        exp.style.display = "none";
        skills.style.display = "inline";}
}
