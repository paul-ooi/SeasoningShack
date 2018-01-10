// CAREERS JAVASCRIPT CODE BY CZARINA GAHUNIA

window.onload = pageReady;

function pageReady() {
  
  var btnLocImg = document.getElementsByClassName("store-front");
  var annexBtn = document.getElementById("annex-img");
  var kenBtn = document.getElementById("kensington-img");
  var jobListAll = document.getElementById("job-container");
  var annexJob = document.getElementById("annex-job");
  var kenJob = document.getElementById("kensington-job");
  var crewMem = document.getElementById("restaurant-banner");

  annexBtn.onclick = showAnnex;
  
  // DISPLAY ANNEX JOB POSTING
  function showAnnex() {
    crewMem.style.display = "none";
    jobListAll.style.display = "block";
    annexJob.style.display = "block";
    kenJob.style.display = "none";
    appliForm.style.display = "none";
    
    resetGCForm();
  }
  
  kenBtn.onclick = showKen;
  
  // DISPLAY KENSINGTON JOB POSTING
  function showKen() {
    crewMem.style.display = "none";
    jobListAll.style.display = "block";
    kenJob.style.display = "block";
    annexJob.style.display = "none";
    appliForm.style.display = "none";
    
    resetGCForm();
  }

  // SHOW PANEL CONTENT
  var acc = document.getElementsByClassName("title-accordion");
  var i;
  var d;
  var s;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panelAcc = this.nextElementSibling;
      if (panelAcc.style.maxHeight){
        panelAcc.style.maxHeight = null;
        appliForm.style.display = "none";
      } else {
        panelAcc.style.maxHeight = panelAcc.scrollHeight + "px";
      } 
    });
  }

  // JOB OBJECT
  var jobPost1 = {
    name: "Host/Hostess",
    duties: [
    "Greeting guests in a timely manner and seating them according to the sections and rotations of the restaurants", 
    "Accommodating guests to receive the best guest experience", 
    "Answering phone calls and providing information about events, reservations, deliveries and takeout", 
    "Maintain orderly queues; Monitor and measure waiting times", 
    "Assisting service staff with restocking supplies and running food when needed"],
    skills: [
    "Excellent customer service skills", 
    "Strong communication and interpersonal skills, both written and oral",
    "A positive, team-oriented attitude", 
    "Ability to multi-task in a fast-paced environment", 
    "Must be able to work with minimal to no supervision", 
    "Can work a flexible schedule including opening, closing, weekends, and holidays", 
    "Smart serve certification is an asset, but not required", 
    "Must be eligible to work in Canada"]
  };
  var jobPost2 = {
    name: "Foods and Beverage Server",
    duties: [
    "Greeting patrons, making recommendations, and answering questions regarding food and beverages", 
    "Maintain product knowledge of all food and beverage items served", 
    "Taking food orders and relaying to kitchen and bar staff", 
    "Preparing and serving specialty food and beverages to guests on a timely manner", 
    "Present bill to patrons and accept payment", 
    "Cleaning and maintaining food service supplies"],
    skills: [
    "Excellent customer service skills", 
    "Strong communication and interpersonal skills", 
    "Ability to multi-task in a fast-paced environment", 
    "Ability to work with minimal supervision and have strong initiative", 
    "Must have a smart serve certification", 
    "Must be eligible to work in Canada", 
    "Can work a flexible schedule including opening, closing, weekends, and holidays"]
  };
  
  // JOB TITLE ARRAY
  var jobVacancy = {
    name:[jobPost1, jobPost2]
  };

  // DISPLAY LISTS
  var classDuties = document.getElementsByClassName("list-container");
  var classDuties2 = document.getElementsByClassName("list2-container");
  var jobName = document.getElementsByClassName("job-name");
  var jobList = jobVacancy.name;

  for (i = 0; i < jobList.length; i++) {
    jobName[i].innerHTML = "<h3>" + jobList[i].name + "</h3>";
  }

  for (i = 0; i < jobList.length; i++) {
    for (d = 0; d < jobList[i].duties.length; d++) {
      classDuties[i].innerHTML += "<li>" + jobVacancy.name[i].duties[d] + "</li>";
    }
    for (s = 0; s < jobList[i].skills.length; s++) {
      classDuties2[i].innerHTML += "<li>" + jobVacancy.name[i].skills[s] + "</li>";
    }
  }
  
  // DISPLAYING FORMS
  var applyBtn = document.getElementById("apply-btn");
  var applyBtn2 = document.getElementById("apply2-btn");
  var appliForm = document.getElementById("form-container");

  function showAppliForm() {
    appliForm.style.display = "block";
  }
  
  applyBtn.onclick = showAppliForm;
  applyBtn2.onclick = showAppliForm;
  
  var subForm = document.forms.job_fm_name;
  var formSubmit = document.getElementById("confirmation");

  subForm.onsubmit = subApplication;
  
  // SUBMITTING THE FORM
  function subApplication() {
  
    var userApplicant = {
      fName: "",
      lName: "",
      eMail: "",
      resumeDoc: ""
    };
    
    var isValid = true;
    
    userApplicant.fName = subForm.f_Name.value;
    userApplicant.lName = subForm.l_Name.value;
    userApplicant.eMail = subForm.e_Mail.value;
    userApplicant.resumeDoc = subForm.user_Resume.value;
    
    var fNameErr = document.getElementById("first-name-err");
    var lNameErr = document.getElementById("last-name-err");
    var emailErr = document.getElementById("email-err");
    var resumeErr = document.getElementById("resume-err");
    
    var emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    
    var allowedFiles = [".doc", ".docx"];
    
    var resumeRegEx = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
    
    // FORM VALIDATION
    // First Name Validation
    if (!userApplicant.fName) {
      fNameErr.innerHTML = "*Please enter your first name";
      isValid = false;
    } else {
      fNameErr.innerHTML = "";
    }
    
    // Last Name Validation
    if (!userApplicant.lName) {
      lNameErr.innerHTML = "*Please enter your last name";
      isValid = false;
    } else {
      lNameErr.innerHTML = "";
    }
    
    // Email Validation
    if (!emailPattern.test(userApplicant.eMail)) {
      emailErr.innerHTML = "*Please enter a valid email address";
      isValid = false;
    } else {
      emailErr.innerHTML = "";
    }
    
    // Resume Validation
    if (!resumeRegEx.test(userApplicant.resumeDoc.toLowerCase())) {
      resumeErr.innerHTML = "*Please upload " + allowedFiles.join(', ') + " only";
      isValid = false;
    } else {
      resumeErr.innerHTML = "";
    }
    
    if (!isValid) {
			return false;
		}
    
    scrollTo(document.body, 0);
    formSubmit.style.display = "block";
    crewMem.style.display = "none";
    appliForm.style.display = "none";
    jobListAll.style.display = "none";
    
    setTimeout(function(){window.location.href='index.html'},5000);
    return false;
  }
  
  // RESETING THE FORM
  subForm.onreset = resetGCForm;
  
  function resetGCForm() {
    
    var fNameErr = document.getElementById("first-name-err");
    var lNameErr = document.getElementById("last-name-err");
    var emailErr = document.getElementById("email-err");
    var resumeErr = document.getElementById("resume-err");

    fNameErr.innerHTML = "";
    lNameErr.innerHTML = "";
    emailErr.innerHTML = "";
    resumeErr.innerHTML = "";
    
    document.getElementById("job-form-id").reset();
  }
} //END OF pageReady FUNCTION