let project = document.getElementsByClassName("project")
let slideIndex = 1;

showProject(slideIndex)

function showProject(num){
    // go to first project, after clicking forward from last button
    if(num > project.length){
        slideIndex = 1;
    }
    // go to last, after clicking back from first
    if(num < 1){
        slideIndex = project.length;
    }
    // for loop to hide all the projects
    for(let i = 0; i < project.length; ++i){
        project[i].style.display = "none";
    }
    project[slideIndex-1].style.display = "flex";
}

function navigateProject(num){
    // Change the slide index based on back or forward arrow
    showProject((slideIndex += num));
}