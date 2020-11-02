
//SLIDER TIME SELECTOR CODE
let slider = document.getElementById('sliderBar');
let output = document.getElementById('timeValue');
output.innerHTML = slider.value * 5;

slider.oninput = function() {
  output.innerHTML = (this.value * 5);
}

//SLIDER SUGAR SELECTOR CODE
let sliderSugar = document.getElementById('sugarSliderBar');
let outputSugar = document.getElementById('sugarValue');
outputSugar.innerHTML = sliderSugar.value;

sliderSugar.oninput = function() {
  outputSugar.innerHTML = this.value;
}

//SLIDER FAT SELECTOR CODE
let sliderFat = document.getElementById('fatSliderBar');
let outputFat = document.getElementById('fatValue');
outputFat.innerHTML = sliderFat.value;

sliderFat.oninput = function() {
  outputFat.innerHTML = this.value;
}

// FILTER BAR OPEN 

function arrowDown() {
    let image = document.getElementById('arrowDownId')
    let filterExpander = document.getElementById('expanderId')

    if( image.style.transform =='rotate(90deg)')
    {
        image.style.transform ='rotate(-90deg)';
        filterExpander.style.height ='30px';
        image.style.marginBottom ='4px';
    }

    else{
        image.style.transform ='rotate(90deg)';
        filterExpander.style.height ='auto';
        image.style.marginBottom ='-7px';
    }
};



// FILTER SELECTOR BUTTON BOX 
function changeTab(evt, tabName) {
    let i;
    let tabcontent;
    let tabBtn;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabBtn = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtn.length; i++) {
      tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
  }



// MENU PAGE SELECTOR
  function changeMenu(evt, menuName) {
    let i;
    let menucontent;
    let menuBtn;

    menucontent = document.getElementsByClassName("menucontent");
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].style.display = "none";
    }

    menuBtn = document.getElementsByClassName("menuBtn");
    for (i = 0; i < menuBtn.length; i++) {
        menuBtn[i].className = menuBtn[i].className.replace(" active", "");
    }
    
    document.getElementById(menuName).style.display = "flex";
    document.getElementById(menuName + 'Title').style.display = "flex";
    document.getElementById('arrowDisable').style.display = "flex";
    document.getElementById('menuPageTitle').style.display = "none";
    document.getElementById('loginIcon').style.display = "none";
    evt.currentTarget.className += " active";

    
  }



  function arrowBack() {

    let menucontent;
    menucontent = document.getElementsByClassName("menucontent");
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].style.display = "none";}
    
    

    document.getElementById('menuPage').style.display = "flex";
    document.getElementById('menuPageTitle').style.display = "flex";
    document.getElementById('loginIcon').style.display = "flex";
    
    document.getElementById('shoppingCardTitle').style.display = "none";
    document.getElementById('shoppingListTitle').style.display = "none";
    document.getElementById('recipesPageTitle').style.display = "none";
    document.getElementById('shoppingGuideTitle').style.display = "none";
    document.getElementById('arrowDisable').style.display = "none";

};

function closeRecipe(dishName){
    
    document.getElementById(dishName).style.display = "none";

}

function openRecipe(dishName){
    
    document.getElementById(dishName).style.display = "flex";

}

function loginWindow(evt){
    
    document.getElementById('loginPopup').style.display = "flex";

}

function NOPE() {
     alert("NOPE")
}

function NOPE2() {
    alert("Something Went wrong")
}

function NOPE3() {
    alert("Please click on login")
}

function validate()
{
    if(   document.getElementById("userName").value == ""
       && document.getElementById("passWord").value == "" )
    {
        alert( "Need a username & password" ); 
    }
    else
    {
        document.getElementById('loginPopup').style.display = "none";
        document.getElementById('addItem').style.display = "none";
        document.getElementById('addItemActive').style.display = "flex";
    }
} 



let shopplist = [];   

function addItemToList(){

    let listitem = document.getElementById('listElement').value;
    let ul = document.getElementById('listBox');
    let li = document.createElement('li');
    let removeBtn = '<img src="assets/images/exit-delete1.png">'

    shopplist.push(listitem);
    
    for (let i = 0; i < shopplist.length; i++) {
        li.innerHTML = shopplist[i] + removeBtn;
        ul.appendChild(li);
        ul.lastChild.lastChild.addEventListener('click', removeListItem);
    }
         
    document.getElementById('listElement').value = '';
    console.log(shopplist);

}

function removeListItem(){
    
    document.getElementById('listBox').removeChild(this.parentNode);
    
} 


    let filterArray =[];

function addFilter(evt,filterName){

    let filterValue = document.getElementById(filterName).textContent;
    let ul = document.getElementById('filterDir');
    let li = document.createElement('li');
    let removeBtn = '<img src="assets/images/exit-delete1.png">'

    filterArray.push(filterValue);

    for (let i = 0; i < filterArray.length; i++) {
        li.innerHTML = filterArray[i] + removeBtn;
        ul.appendChild(li);
        ul.lastChild.lastChild.addEventListener('click', removeFilterItem);
    }


    let removeItem = document.getElementById(filterName);
    removeItem.parentNode.removeChild(removeItem);
    


}

function removeFilterItem(){

        document.getElementById('filterDir').removeChild(this.parentNode);
}
