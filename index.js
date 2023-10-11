let user_object={}
const step1_num=document.getElementById("step1");
const step2_num=document.getElementById("step2");
const step3_num=document.getElementById("step3");
const step4_num=document.getElementById("step4");
const amount_container=document.getElementById('amount_container');
const seleted_plan=document.getElementById('plan');
const plan_month_or_year=document.getElementById('plan_month_or_year');
const plan_price=document.getElementById('price');
let plan_total_amt=0;
const total_price=document.getElementById('total_price');
const total_monthly_or_not=document.getElementById('selected_month_year');

// ------------------------fourth step--------------------------
const fourth_step=document.getElementById('fourth_step');
function  fourth_step_function(){
  third_step.classList.add('subscription-page-step-info-display');
  fourth_step.classList.remove('subscription-page-step-info-display');
  step3_num.classList.add('subscription-page-navbar-number');
  step3_num.classList.remove('subscription-page-navbar-highlted-number');
  step4_num.classList.remove('subscription-page-navbar-number');
  step4_num.classList.add('subscription-page-navbar-highlted-number');
  seleted_plan.textContent=selected_subscrption_plan;
  if((selected_subscrption_plan==="Arcade") && (months_year==='Month')){
    plan_price.textContent='$9/mo';
    plan_total_amt+=9;    
  }else if((selected_subscrption_plan==="Arcade") && (months_year==='Year')){
    plan_price.textContent='$90/yr';
    plan_total_amt+=90;    
  }else if(selected_subscrption_plan==="Advanced" && months_year==='Year'){
    plan_price.textContent='$120/yr';
    plan_total_amt+=120;
  }else if(selected_subscrption_plan==="Advanced" && months_year==='Month'){
    plan_price.textContent='$12/mo';
    plan_total_amt+=12;
  }else if(selected_subscrption_plan==="Pro" && months_year==='Month'){
    plan_price.textContent='$15/mo';
    plan_total_amt+=15;
  }else if(selected_subscrption_plan==="Pro" && months_year==='Year'){
    plan_price.textContent='$150/mo';
    plan_total_amt+=150;
  }
  if(months_year==='Year'){
    plan_month_or_year.textContent='(yearly)'; 
    total_monthly_or_not.textContent='(per year)'; 
    total_price.textContent=`$${plan_total_amt}/yr`;
  }else{
    total_price.textContent=`$${plan_total_amt}/mo`;
  }
};  

function create_amount_billing(service,amt){
  const div=document.createElement('div');
    const p1=document.createElement('p');
    const p2=document.createElement('p');
    p1.textContent=service;
    p1.classList.add('service_head');
    div.appendChild(p1);
    p2.textContent=amt;
    p2.classList.add('service_amount');
    div.appendChild(p2);
    div.classList.add('plan_container');
    amount_container.appendChild(div); 
} 
function fourth_step_goback_function(){
  console.log("goback")
  third_step.classList.remove('subscription-page-step-info-display');
  fourth_step.classList.add('subscription-page-step-info-display');
}
function confirm_function(){
  const thank_you=document.getElementById('thank_you');
  fourth_step.classList.add('subscription-page-step-info-display');
  thank_you.classList.remove('subscription-page-step-info-display');

}

// ------------------------------third step---------------------
const third_step=document.getElementById('third_step');

function third_step_function(){
  third_step.classList.remove('subscription-page-step-info-display');
  second_step.classList.add('subscription-page-step-info-display');
  step2_num.classList.add('subscription-page-navbar-number');
  step2_num.classList.remove('subscription-page-navbar-highlted-number');
  step3_num.classList.remove('subscription-page-navbar-number');
  step3_num.classList.add('subscription-page-navbar-highlted-number');
  if(months_year==='Year'){
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
  const online_service_check=document.getElementById('online_service_check');
  const larger_storage_check=document.getElementById('larger_storage_check');
  const custom_profile=document.getElementById('custom_profile');
  let service_amt;
  let large_storage;
  let cus_profile;
  let service;
  if(online_service_check.checked){
    service='Online service';
    if(months_year==="Month"){
      plan_total_amt+=1;
      service_amt='+$1/mo';
    }else{
      plan_total_amt+=10;
      service_amt='+$10/yr';
    }
    create_amount_billing(service,service_amt);
   }
  if(larger_storage_check.checked){
    service='Larger storage';
    if(months_year==="Month"){
      plan_total_amt+=2;
      large_storage='+$2/mo';
    }else{
      plan_total_amt+=20;
      large_storage='+$20/yr';
    }
    create_amount_billing(service,large_storage);
  }
  if(custom_profile.checked){
    service='Customizable profile';
    if(months_year==="Month"){
      plan_total_amt+=2;
      cus_profile='+$2/mo';
    }else{
      plan_total_amt+=20;
      cus_profile='+$20/yr';
    }
    create_amount_billing(service,cus_profile);
  }
  fourth_step_function();  
}
// -----------------second_step-----------------------
const arcade=document.getElementById('arcade');
const Advanced=document.getElementById('Advanced');
const pro=document.getElementById('pro');
const second_step=document.getElementById('second_step');
const first_step=document.getElementById('first_step');
let selected_subscrption_plan;
let months_year='Month';

function arcade_click(){                                        //arcade plan selection
  arcade.classList.toggle('subscription-plan-highlated');
  Advanced.classList.remove('subscription-plan-highlated');
  pro.classList.remove('subscription-plan-highlated');
  selected_subscrption_plan='Arcade';
}
function advanced_click(){                                      //advanced plan selection
  Advanced.classList.toggle('subscription-plan-highlated');
  pro.classList.remove('subscription-plan-highlated');
  arcade.classList.remove('subscription-plan-highlated');
  selected_subscrption_plan='Advanced';
}
function pro_click(){                                          //pro plan selection
  pro.classList.toggle('subscription-plan-highlated');
  arcade.classList.remove('subscription-plan-highlated');
  Advanced.classList.remove('subscription-plan-highlated');
  selected_subscrption_plan='Pro';
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
    months_year='Year';
  }else{
    document.getElementById('arcade_plan_price').textContent='$9/mo';
    document.getElementById('advanced_plan_price').textContent='$12/yr';
    document.getElementById('pro_plan_price').textContent='$15/yr';
    arcade_months_free.textContent='';
    advanced_months_free.textContent='';
    pro_months_free.textContent='';
    months_year='Month';
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
    console.log(user_object);
    console.log(seleted_plan);
    console.log(selected_subscrption_plan)
    console.log(typeof(months_year));
    console.log(months_year==='Year')
    
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



