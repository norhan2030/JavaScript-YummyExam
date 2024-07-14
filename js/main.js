let shooter=document.querySelector('#shooter')
let sailing=document.querySelector("#sailing")
let btnSHOOTER=document.querySelector("#nav-SHOOTER-tab")
let btnSAILING=document.querySelector("#nav-SAILING-tab")
let btnPERMADEATH=document.querySelector("#nav-PERMADEATH-tab")
let permadeath=document.querySelector("#permadeath")
let mealNameInput=document.querySelector('#mealName')
let searchResultDive=document.querySelector('.searchResult')
let firstLetterInput=document.querySelector('#firstLetter')
let defualtRowShow=document.querySelector('#defualt')
let contactBtn=document.querySelector('#nav-SUPERHERO-tab')
let searchBtn=document.querySelector('#nav-MMORPG-tab')
searchBtn.addEventListener('click',function(){
  document.querySelector('.firstLoad').classList.remove('active')
  document.querySelector('.firstLoad').classList.remove('show')
})
contactBtn.addEventListener('click',function(){
  document.querySelector('.firstLoad').classList.remove('active')
  document.querySelector('.firstLoad').classList.remove('show')
})

async function defualtPage(){
  let carton=""
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
  let result = await response.json();
  console.log(result)
  for (let i = 0; i < result.meals?.length; i++) {
    carton +=`
            <div class="col-md-3 mt-4">
            <button onclick="idd(${result.meals[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="d-flex flex-row  justify-content-center align-items-center bgg-none">

                <div class="in down">
                            <img src="${result.meals[i].strMealThumb}" alt="meal" />
                            <div class="caption pt-4">
                                <h4 class="meal-name text-start ps-2">${result.meals[i].strMeal}</h4>
                              </div>
                          </div>
                 </button>
             </div>
    `
  }
  defualtRowShow.innerHTML=carton
}
defualtPage()


async function display(){
  let carton=""
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  let result = await response.json();
  console.log(result.categories[0])

  for (let i = 0; i < result.categories.length; i++) {
    carton +=`
                  <div class="col-md-3">
                  <button onclick="filterCategories(this)" idd="${result.categories[i].strCategory}" class="d-flex flex-row  justify-content-center align-items-center bgg-none">
                        <div class="in down">
                            <img src="${result.categories[i].strCategoryThumb}" alt="meal" />
                            <div class="caption">
                                <h4 class="meal-name">${result.categories[i].strCategory}</h4>
                                <p class="p-1">${result.categories[i].strCategoryDescription}</p>
                              </div>
                          </div>
                          </button>
                    </div>
    `
    
  }
  shooter.innerHTML=carton
}

async function displayArea(){
  let carton=""
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  let result = await response.json();
  for (let i = 0; i < result.meals.length; i++) {
    carton +=`
          <button  onclick="areaCat(this)" idd="${result.meals[i].strArea}" class="d-flex flex-row w-25 justify-content-center align-items-center bgg-none" >
            <div class="col-md-3">
                <div class="text-center">
                    <i class="fa-solid fa-house-laptop fa-4x fs-1 text-white"></i>
                    <div class="textt"><h6 class="text-white ">${result.meals[i].strArea}</h6></div>
                </div>
            </div>
          </button>      
    `
  }
  sailing.innerHTML=carton
}
async function areaCat(act){
  let cat=act.getAttribute('idd')
  let carton=""
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cat}`);
  let result = await response.json();
  
console.log(result)
  for (let i = 0; i < result.meals.length; i++) {
    carton +=`
            <div class="col-md-3">
            <button onclick="idd(${result.meals[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="d-flex flex-row  justify-content-center align-items-center bgg-none">
                <div class="in down">
                            <img src="${result.meals[i].strMealThumb}" alt="meal" />
                            <div class="caption pt-4">
                                <h2 class="meal-name">${result.meals[i].strMeal}</h2>
                              </div>
                          </div>
                          </button>
            </div>
    `
    
  }
  sailing.innerHTML=carton
}

btnSHOOTER.addEventListener("click",function(){
  document.querySelector('.firstLoad').classList.remove('active')
  document.querySelector('.firstLoad').classList.remove('show')

    display()
})
btnSAILING.addEventListener("click",function(){
  document.querySelector('.firstLoad').classList.remove('active')
  document.querySelector('.firstLoad').classList.remove('show')
  displayArea()
})


async function displayIngredients(){
  let carton=""
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  let result = await response.json();
  for (let i = 0; i < result.meals.length; i++) {
    carton +=`
            <div class="col-md-3">
               <button  onclick="displayIngredientsChooces(this)" idd="${result.meals[i].strIngredient}" class="d-flex flex-row  justify-content-center align-items-center bgg-none" >

                <div class="text-center">
                    <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
                    <div class="textt"><h3 class="text-white ">${result.meals[i].strIngredient}</h3></div>
                    <p class="text-white p-0 w-100 overflow-hidden fixedhigth" >${result.meals[i].strDescription}</p>
                </div>
                </button> 
            </div>
               
    `
  }
  permadeath.innerHTML=carton
}


btnPERMADEATH.addEventListener("click",function(){
  document.querySelector('.firstLoad').classList.remove('active')
  document.querySelector('.firstLoad').classList.remove('show')
  displayIngredients()
})

// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
async function displayIngredientsChooces(act){
  let cat=act.getAttribute('idd')
  let carton=""
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cat}`);
  let result = await response.json();
  
console.log(result)
  for (let i = 0; i < result.meals.length; i++) {
    carton +=`
            <div class="col-md-3">
            <button onclick="idd(${result.meals[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="d-flex flex-row  justify-content-center align-items-center bgg-none">

                <div class="in down">
                            <img src="${result.meals[i].strMealThumb}" alt="meal" />
                            <div class="caption pt-4">
                                <h2 class="meal-name">${result.meals[i].strMeal}</h2>
                              </div>
                          </div>
              </button>
            </div>
    `
    
  }
  permadeath.innerHTML=carton
}




mealNameInput.addEventListener('input',async function(e){
let carton=""
let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`);
let result = await response.json();
console.log(result)
for (let i = 0; i < result.meals?.length; i++) {
  carton +=`
          <div class="col-md-3">
          <button onclick="idd(${result.meals[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="d-flex flex-row  justify-content-center align-items-center bgg-none">

              <div class="in down">
                          <img src="${result.meals[i].strMealThumb}" alt="meal" />
                          <div class="caption pt-4">
                              <h4 class="meal-name">${result.meals[i].strMeal}</h4>
                            </div>
                        </div>
              </button>
          </div>
  `
}
searchResultDive.innerHTML=carton
})



firstLetterInput.addEventListener('input',async function(e){
  if(e.target.value!=''){
    e.target.value=e.target.value.replace(/^([a-zA-Z])[a-zA-Z]+/g, '$1')
  let carton=""
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`);
  let result = await response.json();
  for (let i = 0; i < result.meals?.length; i++) {
    carton +=`
            <div class="col-md-3">
            <button onclick="idd(${result.meals[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="d-flex flex-row  justify-content-center align-items-center bgg-none">

                <div class="in down">
                            <img src="${result.meals[i].strMealThumb}" alt="meal" />
                            <div class="caption pt-4">
                                <h4 class="meal-name">${result.meals[i].strMeal}</h4>
                              </div>
                          </div>
                 </button>
             </div>
    `
  }
  searchResultDive.innerHTML=carton
  }
  })
  
  // www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  async function idd(id){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let result = await response.json();
    console.log(result)
    let tages=[]
    if(result.meals[0].strTags){
      tages=result.meals[0].strTags?.split(',')
    }
    let carton=`
          <div class="col-md-4">
              <img src="${result.meals[0].strMealThumb}" class="w-100 rounded-2" alt="">
              <div class="mt-3"><h5>${result.meals[0].strMeal}</h5></div>
          </div>
          <div class="col-md-8">
          <h2>Instructions</h2>
              <p>${result.meals[0].strInstructions}</p>
              <h3>Area : ${result.meals[0].strArea}</h3>
              <h3>Category : ${result.meals[0].strCategory}</h3>
              <h3>Recipes  : </h3>
                <span class="m-2 p-2 alert ${result.meals[0].strIngredient1?'d-inline-block ':' d-none'}">${result.meals[0].strIngredient1}</span><span class="m-2 p-2 alert ${result.meals[0].strIngredient2?'d-inline-block ':' d-none'}">${result.meals[0].strIngredient2}</span><span class="m-2 p-2 alert d-inline-block">${result.meals[0].strIngredient3}</span>
                <span class="m-2 p-2 alert ${result.meals[0].strIngredient4?'d-inline-block ':' d-none'}">${result.meals[0].strIngredient4}</span>
                <span class="m-2 p-2 alert ${result.meals[0].strIngredient5?'d-inline-block ':' d-none'}">${result.meals[0].strIngredient5}</span>
                <span class="m-2 p-2 alert ${result.meals[0].strIngredient6?'d-inline-block ':' d-none'}">${result.meals[0].strIngredient6}</span>
                <span class="m-2 p-2 alert ${result.meals[0].strIngredient7?'d-inline-block ':' d-none'}">${result.meals[0].strIngredient7}</span>
                <span class="m-2 p-2 alert ${result.meals[0].strIngredient8?'d-inline-block ':' d-none'}">${result.meals[0].strIngredient8}</span>
              <span class="m-2 p-2 ${result.meals[0].strIngredient9?'d-inline-block ':' d-none'} alert ">${result.meals[0].strIngredient9}</span>
              <span class="m-2 p-2 alert ${result.meals[0].strIngredient10?'d-inline-block ':' d-none'}">${result.meals[0]?.strIngredient10}</span>
              <span class="m-2 p-2 alert ${result.meals[0].strIngredient11?'d-inline-block ':' d-none'}">${result.meals[0]?.strIngredient11}</span>
              <span class="m-2 p-2 alert ${result.meals[0].strIngredient12?'d-inline-block ':' d-none'}">${result.meals[0]?.strIngredient12}</span>
                            <span class="m-2 p-2 alert ${result.meals[0].strIngredient13?'d-inline-block ':' d-none'}">${result.meals[0]?.strIngredient13}</span>
               <span class="m-2 p-2 alert ${result.meals[0].strIngredient14?'d-inline-block ':' d-none'}">${result.meals[0]?.strIngredient14}</span>
               <span class="m-2 p-2 alert ${result.meals[0].strIngredient15?'d-inline-block ':' d-none'}">${result.meals[0]?.strIngredient15}</span>
               <span class="m-2 p-2 alert ${result.meals[0].strIngredient16?'d-inline-block ':' d-none'}">${result.meals[0]?.strIngredient16}</span>
              <h3 class="mb-2">Tages  : </h3>
                     <span class=" p-2 rounded-3 tagg my-3 ${tages[0]?' d-inline-block ':' d-none'}">${tages[0]}</span>
              <span class=" p-2 rounded-3 tagg my-3 ${tages[1]?' d-inline-block ':' d-none'}">${tages[1]}</span>
              <span class=" p-2 rounded-3 tagg my-3 ${tages[2]?' d-inline-block ':' d-none'}">${tages[2]}</span>
              <span class=" p-2 rounded-3 tagg my-3 ${tages[3]?' d-inline-block ':' d-none'}">${tages[3]}</span>
              <span class=" p-2 rounded-3 tagg my-3 ${tages[4]?' d-inline-block ':' d-none'}">${tages[4]}</span>
              <span class=" p-2 rounded-3 tagg my-3 ${tages[5]?' d-inline-block ':' d-none'}">${tages[5]}</span>
              <span class=" p-2 rounded-3 tagg my-3 ${tages[6]?' d-inline-block ':' d-none'}">${tages[6]}</span>
              <span class=" p-2 rounded-3 tagg my-3 ${tages[7]?' d-inline-block ':' d-none'}">${tages[7]}</span>
              <span class=" p-2 rounded-3 tagg my-3 ${tages[8]?' d-inline-block ':' d-none'}">${tages[8]}</span>


               <div class="my-2 pt-2"> <a href="${result.meals[0].strSource}" target="_blank"><button class="btn btn-success" >Source</button></a>
              <a href="${result.meals[0].strYoutube}" target="_blank"><button class="btn btn-danger" >Youtub</button></a>
              </div>
    
              
          </div>
    
    
    `
      document.querySelector('.carton_detailes').innerHTML=carton
    
    }

  
async function filterCategories(act){
  let cat=act.getAttribute('idd')
  let carton=""
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
  let result = await response.json();
  
console.log(result)
  for (let i = 0; i < result.meals.length; i++) {
    carton +=`
            <div class="col-md-3">
            <button onclick="idd(${result.meals[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="d-flex flex-row  justify-content-center align-items-center bgg-none">
                <div class="in down">
                            <img src="${result.meals[i].strMealThumb}" alt="meal" />
                            <div class="caption pt-4">
                                <h2 class="meal-name">${result.meals[i].strMeal}</h2>
                              </div>
                          </div>
                          </button>
            </div>
    `
    
  }
  shooter.innerHTML=carton
  // 
}

let emailRGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let nameregx=/^[a-zA-Z\s]+$/
let ageregx=/^[1-9][0-9]{0,2}$/
let passwordrgex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let phoneregx=/^(002|\+2)?01[0125][0-9]{8}$/
let emaillnpout=document.querySelector('#emaill')
let phoneenpout=document.querySelector('#phonee')
let ageenpout=document.querySelector('#agee')
let passworddnpout=document.querySelector('#passwordd')
let repasswordInpout=document.querySelector('#repassword')
let nameInpout=document.querySelector('#namee')
let Pemail=document.querySelector('.email')
let Pphone=document.querySelector('.phone')
let Page=document.querySelector('.age')
let Ppassword=document.querySelector('.password')
let Prepassord=document.querySelector('.repassord')
let Pname=document.querySelector('.name')
let submit_btn=document.querySelector('.submit_btn')
// Enter valid password *Minimum eight characters, at least one letter and one number:*
// Special characters and numbers not allowed
// Pname.innerHTML="Email not valid *exemple@yyy.zzz"

nameInpout.addEventListener("input",function(){
  if(nameInpout.value=''){
    console.log("kjscfiasc")
    Pname.innerHTML="is required"
  }else if(nameregx.test(nameInpout.value)){
    Pname.innerHTML=""
  }else{
    Pname.innerHTML="please enter vali name Special characters and numbers not allowed"
  }
})
phoneenpout.addEventListener("input",function(){
  if(phoneenpout.value=''){
    Pphone.innerHTML="is required"
  }else if(phoneregx.test(phoneenpout.value)){
    Pphone.innerHTML=""
  }else{
    Pphone.innerHTML="please enter vali number"
  }
})
ageenpout.addEventListener("input",function(){
  if(ageenpout.value=''){
    Page.innerHTML="is required"
  }else if(ageregx.test(ageenpout.value)){
    Page.innerHTML=""
  }else{
    Page.innerHTML="please enter vali age"
  }
})
emaillnpout.addEventListener("change",function(){
  if(emaillnpout.value=''){
    Pemail.innerHTML="is required"
  }else if(emailRGX.test(emaillnpout.value)){
    Pemail.innerHTML=""
  }else{
    Pemail.innerHTML="Email not valid *exemple@yyy.zzz"
  }
})

// Enter valid password *Minimum eight characters, at least one letter and one number:*

passworddnpout.addEventListener("input",function(){
  if(passworddnpout.value=''){
    Ppassword.innerHTML="is required"
  }else if(passwordrgex.test(passworddnpout.value)){
    Ppassword.innerHTML=""
  }else{
    Ppassword.innerHTML="Enter valid password *Minimum eight characters, at least one letter and one number:*"
  }
})
repasswordInpout.addEventListener("input",function(){
  if(repasswordInpout.value=''){
    Prepassord.innerHTML="is required"
  }else if(passwordrgex.test(repasswordInpout.value)){
    Prepassord.innerHTML=""
  }else{
    Prepassord.innerHTML="Enter valid password *Minimum eight characters, at least one letter and one number:*"
  }
})
submit_btn.addEventListener('click',function(){
  if(Pname.innerHTML!=''){
    alert('inter correct data')
  }else if(Pphone.innerHTML!=''){
    alert('inter correct data')
  }else if(Ppassword.innerHTML!=''){
    alert('inter correct data')
  }else if(Prepassord.innerHTML!=''){
    alert('inter correct data')
  }else if(Pemail.innerHTML!=''){
    alert('inter correct data')
  }else if(Page.innerHTML!=''){
    alert('inter correct data')
  }
})
// //loader


$(function(){
  $(".loader").fadeOut(1000,function(){
    $('#loading').fadeOut(500)
    $('body').css({"overflow":"auto"})
  })
})


let widthOfNav=$('.close').width()
 $('.navbar').animate({left: -widthOfNav},0)
let flag=false
$('.fa-bars').click(function(){
  $(".change").toggleClass("collapsed");
  if(flag){
    let widthOfNav=$('.close').width()
    $('.navbar').animate({left: -widthOfNav},500)

    flag=true
    
  }else{

    $('.navbar').animate({left: 0},500)
    $('.fa-bars').addClass('d-none')
    $('.fa-xmark').removeClass("d-none")

    flag=false
  
    
  }
  new WOW().init();
  
 
});
$('.fa-xmark').click(function(){
  let widthOfNav=$('.close').width()
  $('.navbar').animate({left: -widthOfNav},500)
  $('.fa-bars').removeClass('d-none')
  $('.fa-xmark').addClass("d-none")
})
$('.linkClose').click(function(){
  let widthOfNav=$('.close').width()
  $('.navbar').animate({left: -widthOfNav},500)
  $('.fa-bars').removeClass('d-none')
  $('.fa-xmark').addClass("d-none")
})

