let user_object={}
const step1_num=document.getElementById("step1");
const step2_num=document.getElementById("step2");
const step3_num=document.getElementById("step3");
// ------------------------------third step---------------------
const third_step=document.getElementById('third_step');


function third_step_function(){
  third_step.classList.remove('subscription-page-step-info-display');
  second_step.classList.add('subscription-page-step-info-display');
  step2_num.classList.add('subscription-page-navbar-number');
  step2_num.classList.remove('subscription-page-navbar-highlted-number');
  step3_num.classList.remove('subscription-page-navbar-number');
  step3_num.classList.add('subscription-page-navbar-highlted-number');
  if(months_year==='year'){
    document.getElementById('online_price').textContent='+$10/yr';
    document.getElementById('larger_price').textContent='+$20/yr';
    document.getElementById('cusomized_price').textContent='+$20/yr';
  }else{
    document.getElementById('online_price').textContent='+$1/mo';
    document.getElementById('larger_price').textContent='+$2/mo';
    document.getElementById('cusomized_price').textContent='+$2/mo';
  }
}
function online_service_click_function(){                                        //arcade plan selection
  const online_service=document.getElementById('online_service');
  online_service.classList.toggle('selected_service_container');
}
function larger_storage_click_function(){                                        //arcade plan selection
  const larger_storage=document.getElementById('larger_storage');
  larger_storage.classList.toggle('selected_service_container');
}
function customized_profile_click_function(){                                        //arcade plan selection
  const customized_profile=document.getElementById('customized_profile');
  customized_profile.classList.toggle('selected_service_container');
}
function thirdstep_goback_function(){
  third_step.classList.add('subscription-page-step-info-display');
  second_step.classList.remove('subscription-page-step-info-display');
}
function thirdstep_nextstep_function(){
  console.log(user_object)
}
// -----------------second_step-----------------------
const arcade=document.getElementById('arcade');
const Advanced=document.getElementById('Advanced');
const pro=document.getElementById('pro');
const second_step=document.getElementById('second_step');
const first_step=document.getElementById('first_step');
let selected_subscrption_plan;
let months_year='month';

function arcade_click(){                                        //arcade plan selection
  arcade.classList.toggle('subscription-plan-highlated');
  Advanced.classList.remove('subscription-plan-highlated');
  pro.classList.remove('subscription-plan-highlated');
  selected_subscrption_plan='arcade';
}
function advanced_click(){                                      //advanced plan selection
  Advanced.classList.toggle('subscription-plan-highlated');
  pro.classList.remove('subscription-plan-highlated');
  arcade.classList.remove('subscription-plan-highlated');
  selected_subscrption_plan='advanced';
}
function pro_click(){                                          //pro plan selection
  pro.classList.toggle('subscription-plan-highlated');
  arcade.classList.remove('subscription-plan-highlated');
  Advanced.classList.remove('subscription-plan-highlated');
  selected_subscrption_plan='pro';
}
function subscription_plan_year_month(){                  // toggle switch selection
  const arcade_months_free=document.getElementById('arcade_months_free');
  const advanced_months_free=document.getElementById('advanced_months_free');
  const pro_months_free=document.getElementById('pro_months_free');
  
  const toggle_check=document.getElementById('toggle_check');
  if(toggle_check.checked){
    document.getElementById('arcade_plan_price').textContent='$90/yr';
    arcade_months_free.textContent='2 months free';
    document.getElementById('advanced_plan_price').textContent='$120/yr';
    advanced_months_free.textContent='2 months free';
    document.getElementById('pro_plan_price').textContent='$150/yr';
    pro_months_free.textContent='2 months free';
    months_year='year';
  }else{
    document.getElementById('arcade_plan_price').textContent='$9/mo';
    document.getElementById('advanced_plan_price').textContent='$12/yr';
    document.getElementById('pro_plan_price').textContent='$15/yr';
    arcade_months_free.textContent='';
    advanced_months_free.textContent='';
    pro_months_free.textContent='';
    months_year='month';
  }
}
function second_step_function(){                                         //second step function
  first_step.classList.add('subscription-page-step-info-display');
  second_step.classList.remove('subscription-page-step-info-display');
  step1_num.classList.add('subscription-page-navbar-number');
  step1_num.classList.remove('subscription-page-navbar-highlted-number');
  step2_num.classList.remove('subscription-page-navbar-number');
  step2_num.classList.add('subscription-page-navbar-highlted-number');
 }

function goback_function(){                                                   //go back button function
  first_step.classList.remove('subscription-page-personalinfo-display');
  second_step.classList.add('subscription-plan-main-container-display');
}

function secondstep_nextstep_function(){                                      //next-step button function
  console.log(selected_subscrption_plan);
  if(selected_subscrption_plan===undefined){
    alert('Please Select Subscription Plan!!!');
  }else{
    user_object['plan']=selected_subscrption_plan;
    user_object['months_year']=months_year;
    console.log(user_object)
    first_step.classList.add('subscription-page-personalinfo-display');
    second_step.classList.add('subscription-plan-main-container-display');  
    third_step_function()
  }
}

//  ---------------------first_step--------------------------
const personal_form=document.getElementById('form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone_no=document.getElementById("phone_no");
const name_err=document.getElementById('name_err');
const email_err=document.getElementById('email_err'); 
const phone_no_err=document.getElementById('phone_no_err');
const personal_heading=document.getElementById('personal-heading');
const personal_para=document.getElementById('personal-para');

let name_er;
let email_er;
let phone_no_er;
const letters=/^[A-Za-z]+$/;
const email_valid=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit',function(e){
  e.preventDefault();
  
  if(name.value===""){                                  //name error validation
    name_err.textContent='*Please fill the Name field'; //adding error msg to name field
    name_err.classList.add("error-msg"); 
    document.getElementById('name-check').classList.remove('check-success'); 
    name.classList.add("subscription-page-personalinfo-input-err-box");    
    name.classList.remove("subscription-page-personalinfo-input-success-box"); 
    name_er=false;
  }else if(!name.value.match(letters)){
    name_err.textContent='*Name field must contains only alphabets'; //adding error msg to name field do not contains alphabets 
    name_err.classList.add("error-msg"); 
    document.getElementById('name-check').classList.remove('check-success'); 
    name.classList.add("subscription-page-personalinfo-input-err-box");
    name.classList.remove("subscription-page-personalinfo-input-success-box"); 
    name_er=false;
  }else{  
    document.getElementById('name-check').classList.add('check-success'); 
    name_err.textContent='';                           //removing error msg to name field
    name_err.classList.remove("error-msg");
    name.classList.remove("subscription-page-personalinfo-input-err-box");
    name.classList.add("subscription-page-personalinfo-input-success-box"); 
    name_er=true;
    }

  if(email.value===''){                                 //email error validation
    email_err.textContent='*Please fill the email field';//adding error msg to email field
    email_err.classList.add("error-msg");
    document.getElementById('email-check').classList.remove('check-success'); 
    email.classList.add("subscription-page-personalinfo-input-err-box");
    email.classList.remove("subscription-page-personalinfo-input-success-box");
    email_er=false;

  }else if(!(email.value.match(email_valid))){
    email_err.textContent='*Enter valid email Id';//adding valid email error msg to email field
    email_err.classList.add("error-msg");
    document.getElementById('email-check').classList.remove('check-success'); 
    email.classList.add("subscription-page-personalinfo-input-err-box");
    email.classList.remove("subscription-page-personalinfo-input-success-box");
    email_er=false;
  }
  else{
    document.getElementById('email-check').classList.add('check-success'); 
    email_err.textContent='';                             //removing error msg to email field
    email_err.classList.remove("error-msg");
    email.classList.remove("subscription-page-personalinfo-input-err-box");
    email.classList.add("subscription-page-personalinfo-input-success-box"); 
    email_er=true;
  }

  if (phone_no.value===''){                                         //phone number error validation
    document.getElementById('phone-check').classList.remove('check-success'); 
    phone_no_err.textContent='*Please fill the phone number field'; //adding error msg to phone number field
    phone_no_err.classList.add("error-msg");
    phone_no.classList.add("subscription-page-personalinfo-input-err-box");
    phone_no.classList.remove("subscription-page-personalinfo-input-success-box"); 
    phone_no_er=false;
  }else if(phone_no.value.length!==10){
    document.getElementById('phone-check').classList.remove('check-success'); 
    phone_no_err.textContent='*Phone Number should be 10 digits'; //adding error msg to phone number field
    phone_no_err.classList.add("error-msg");
    phone_no.classList.add("subscription-page-personalinfo-input-err-box");
    phone_no.classList.remove("subscription-page-personalinfo-input-success-box"); 
    phone_no_er=false;
  }
  else{
    document.getElementById('phone-check').classList.add('check-success'); 
    phone_no_err.textContent='';                                     //adding error msg to phone number field
    phone_no_err.classList.remove("error-msg");
    phone_no.classList.remove("subscription-page-personalinfo-input-err-box");
    phone_no.classList.add("subscription-page-personalinfo-input-success-box"); 
    phone_no_er=true;
  }
  
  if(name_er&&email_er&&phone_no_er){
    
    let form=document.querySelector('form');
      form.addEventListener('submit',(e)=>{
          e.preventDefault();
          let data=new FormData(form);
          fetch('https://script.google.com/macros/s/AKfycby2zApkw4pVKDZ884OvUl8sIxSEYBmWQbmxfvl-hjxQVh8edWRHrSdTVvOA7XPd0WZb/exec',{
              method:"POST",
              body:data
          })
          .then(res=>res.text())
          .then(data=> console.log(data));
          alert("Your Data Saved Successfully"); 
          second_step_function();       
      })

    document.getElementById('name-check').classList.remove('check-success'); 
    document.getElementById('email-check').classList.remove('check-success'); 
    document.getElementById('phone-check').classList.remove('check-success'); 
    personal_heading.textContent='Thank you!!!';
    personal_heading.style.textAlign='center';
    personal_para.textContent="We are reviewing your request and we'll get in touch as soon as possible.";
    personal_para.style.textAlign='center';
    name.classList.add("subscription-page-personalinfo-input-border");
    name.classList.remove("subscription-page-personalinfo-input-success-box"); 
    email.classList.add("subscription-page-personalinfo-input-border");
    email.classList.remove("subscription-page-personalinfo-input-success-box");
    phone_no.classList.add("subscription-page-personalinfo-input-border");
    phone_no.classList.remove("subscription-page-personalinfo-input-success-box");
    const btn=document.getElementById('nextstepbutton');
    btn.textContent='Confirm';
    btn.style.backgroundColor='green';
  }  
})


name.addEventListener("keydown",nameErr);
function nameErr(e){
  if(!(e.key.match(letters))){
    name_err.textContent='*Name field must contains only alphabets'; //adding error msg to name field do not contains alphabets 
    name_err.classList.add("error-msg"); 
    name.classList.add("subscription-page-personalinfo-input-err-box");
    name.classList.remove("subscription-page-personalinfo-input-success-box"); 
    document.getElementById('name-check').classList.remove('check-success'); 
  }else{
    document.getElementById('name-check').classList.add('check-success'); 
    name_err.textContent='';                           //removing error msg to name field
    name_err.classList.remove("error-msg");
    name.classList.remove("subscription-page-personalinfo-input-err-box");
    name.classList.add("subscription-page-personalinfo-input-success-box"); 
  }
}

email.addEventListener("keydown",emailErr);
function emailErr(e){
  if (e.key==='.com'){
    if(!(email.value.match(email_valid))){
      email_err.textContent='*Enter valid email Id';//adding valid email error msg to email field
      email_err.classList.add("error-msg");
      email.classList.add("subscription-page-personalinfo-input-err-box");
      email.classList.remove("subscription-page-personalinfo-input-success-box");
    }else{
      email_err.textContent='';                             //removing error msg to email field
      email_err.classList.remove("error-msg");
      email.classList.remove("subscription-page-personalinfo-input-err-box");
      email.classList.add("subscription-page-personalinfo-input-success-box"); 
    }
  }  
}



