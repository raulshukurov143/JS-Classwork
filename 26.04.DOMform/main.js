let form = document.createElement("form");
let startBtn = document.createElement("button");
let time = 15;
let content = document.createElement("p");
let Name = document.createElement("Name");
let nameInput = document.createElement("input");
let surname = document.createElement("surname");
let surnameInput = document.createElement("input");
let checkboxInput = document.createElement("input");
let radioInput1 = document.createElement("input");
let radioInput2 = document.createElement("input");
let submitBtn = document.createElement("button");
let nextBtn = document.createElement("button");

document.body.append(startBtn);
document.body.append(content);
document.body.append(form);
document.body.append(nextBtn);
form.append(Name);
form.append(nameInput);
form.append(surname);
form.append(surnameInput);
form.append(checkboxInput);
form.append(radioInput1);
form.append(radioInput2);
form.append(submitBtn);

content.innerHTML = `00: ${time}`;
Name.innerHTML = "<strong>Name</strong>";
surname.innerHTML = "<strong>Surname</strong>";
startBtn.innerHTML = "<strong>Let's start...</strong>";
submitBtn.innerHTML = "<strong>Submit</strong>";
nextBtn.innerHTML = "<strong>Next Page ></strong>";

checkboxInput.type = "checkbox";
radioInput1.type = "radio";
radioInput2.type = "radio";

radioInput1.name = "radio";
radioInput2.name = "radio";

form.style.height = "80vh";
form.style.border = "2px dashed black";
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.gap = "10px";
content.style.border = "2px solid black";
content.style.width = "15vw";
checkboxInput.style.accentColor="red"
radioInput1.style.accentColor="red"
radioInput2.style.accentColor="red"


submitBtn.setAttribute("disabled", "");
nextBtn.setAttribute("disabled", "");
nameInput.setAttribute("required", "");
surnameInput.setAttribute("required", "");
checkboxInput.setAttribute("required", "");
radioInput1.setAttribute("required", "");
radioInput2.setAttribute("required", "");




let interval;
startBtn.addEventListener("click", function () {
    interval = setInterval(() => {
        time--;
        content.innerHTML = `00: ${time}`;
        if(time==0){
            clearInterval(interval)
            content.innerHTML="<strong>You missed ):</strong>"
            
        }
        if(time==9){
            content.style.color = "red";
            content.style.border = "2px solid red";
        }
    }, 1000);
    startBtn.setAttribute("disabled", "");
    submitBtn.removeAttribute("disabled", "");
    content.style.border = "2px solid blue";
    content.style.color = "blue";
 
    
   
});

submitBtn.addEventListener("click", function () {
    nextBtn.removeAttribute("disabled", "");
  
    clearInterval(interval)
});

nextBtn.addEventListener("click",function(){
    alert("finished")
})