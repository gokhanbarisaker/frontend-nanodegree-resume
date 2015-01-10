var resume = {
  "bio":{
    "name":"Gokhan Baris Aker",
    "role":"Software Developer",
    "contacts":{
      "mobile":"+971 (52) 7345720",
      "email":"gokhanbarisaker@gmail.com",
      "github":"https://github.com/gokhanbarisaker",
      "twitter":"https://twitter.com/gokhanbarisaker",
      "location":"Dubai"
    },
    "welcomeMessage":"Hello, World!",
    "skills":[
      "Android",
      "iOS",
      "Java",
      "Objective-C",
      "Python",
      "PHP",
      "HTML",
      "CSS",
      "Javascript",
      "Go"
    ],
    "biopic":"./images/fry.jpg",
  },
  "education":{
    "schools":[
      {
        "name":"Isik University",
        "location":"Istanbul",
        "degree":"Bachelor\"s",
        "majors":["Computer Engineering"],
        "dates":"2012",
        "url":"http://www.isikun.edu.tr/"
      },
      {
        "name":"Tarsus American College",
        "location":"Mersin",
        "degree":"High School",
        "majors":["Math & Science"],
        "dates":"2005",
        "url":"http://www.tac.k12.tr/"
      }
    ],
    "onlineCourses":[
      {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/nd001"
      },
      {
        "title": "Web Development",
        "school": "Udacity",
        "date": 2014,
        "url": "https://www.udacity.com/course/cs253"
      },
      {
        "title": "HTML5 Game Development",
        "school": "Udacity",
        "date": 2013,
        "url": "https://www.udacity.com/course/cs255"
      }
    ]
  },
  "work":{
    "jobs":[
      {
        "employer":"MarkaVIP",
        "title":"Android Developer",
        "location":"Dubai",
        "dates":"2014 - Current",
        "description":""
      },
      {
        "employer":"Mobilike",
        "title":"Senior Software Developer",
        "location":"Istanbul",
        "dates":"2013 - 2014",
        "description":"As a Senior Developer at Mobilike, I was responsible for the Android and iOS mobile development. Some of my notable works include PushAd project, Mobilike push notification advertisement SDK, that enables advertise anytime and anywhere without waiting for user to navigate ad containing UI, Woodo project, Woodo.tv Vast 3.0 compatible video advertising SDK, that enables super dynamic advertisement creativity, and some mobile application develop, fix, polish, enhance..."
      },
      {
        "employer":"Nomad Commerce",
        "title":"Senior Software Developer",
        "location":"Istanbul",
        "dates":"2013 - 2014",
        "description":"As a Senior Software Developer at Nomad Commerce, I was responsible for the Android and iOS mobile (UI, UX and code) development and consultancy for 3rd party companies."
      },
      {
        "employer":"Dmobil",
        "title":"Senior Software Developer",
        "location":"Istanbul",
        "dates":"2012 - 2013",
        "description":"Management;\r\n\r\nSocial Call. Project supported by Tübitak. So amazing that lifts the barrier of mobile number madness and makes a revolutionary move. Basically, starting from Facebook any social network user is one click away for a cell phone call. I am also the mobile (iOS & Android), web and server-side developer of this project. (Project is an early prototype and at its alpha state.)\r\nDevelopment;\r\n\r\niOS application\r\nAndroid application\r\nFront-end web application (HTML & Dart)\r\nBack-end web services (PHP & Dart)\r\nXMPP Chat client (For Facebook Chat, Android & iOS)\r\nSIP VoIP Client (For web, Android & iOS)\r\nFacebook application\r\nConsultancy;\r\n\r\nMobile application\r\nUser-experience\r\n@Deprecated Graphic design;\r\n\r\nBanner & icon design for mobile applications\r\nUser interface for mobile applications\r\nOther;\r\n\r\nCoffee brewer (Self-taught Barista)\r\n..."
      },
      {
        "employer":"Done Labs",
        "title":"Software Developer",
        "location":"Istanbul",
        "dates":"2011 - 2012",
        "description":"Software Development and Application Consultant. Developed a mobile diagnostic tool project on Android OS. for TTNET, a leading ISP of Turkey. Android client completely developed by myself with assistance of Done Labs. team for graphical content. Also, I did consulting for several algorithms on iOS platform."
      },
      {
        "employer":"Argela",
        "title":"Software Developer",
        "location":"Istanbul",
        "dates":"2010 - 2010",
        "description":"As a trainee, worked on Session Initiation Protocol (SIP) under supervision of Murat Parlakışık. Covered general knowledge about SIP, then analyzed the SIPp application source codes. Finally, developed scenario generator application for SIPp application."
      },
      {
        "employer":"Datamarket",
        "title":"Software Developer",
        "location":"Istanbul",
        "dates":"2009 - 2009",
        "description":"As a trainee i developed a software for warehouse, that inputs barcode codes of the goods into Microsoft CRM in .NET platform."
      }
    ]
  },
  "projects":[
  ]
};


var header = $("#header");
var name = HTMLheaderName.replace("%data%", resume.bio.name);
var role = HTMLheaderRole.replace("%data%", resume.bio.role);

header.prepend(role).prepend(name);



var topContacts = $('#topContacts');
var footerContacts = $('#footerContacts')
$.each(resume.bio.contacts, function(key, value) {
  var contact = HTMLcontactGeneric.replace('%contact%', key)
                                  .replace('%data%', value);

  topContacts.append(contact);
  footerContacts.append(contact);
});



var bioPic = HTMLbioPic.replace('%data%', resume.bio.biopic);
header.append(bioPic);



var welcomeMessage = HTMLWelcomeMsg.replace('%data%', resume.bio.welcomeMessage);
header.append(welcomeMessage);



var skillsStart = $(HTMLskillsStart);
$.each(resume.bio.skills, function(index, value) {
  var skills = HTMLskills.replace('%data%', value);
  skillsStart.append(skills);
});

header.append(skillsStart);



var workStart = $(HTMLworkStart);
$.each(resume.work.jobs, function(index, value) {
  var workEmployer = HTMLworkEmployer.replace('%data%', value.employer);
  var workTitle = HTMLworkTitle.replace('%data%', value.title);
  var workDates = HTMLworkDates.replace('%data%', value.dates);
  var workLocation = HTMLworkLocation.replace('%data%', value.location);
  var workDescription = HTMLworkDescription.replace('%data%', value.description).replace(/\n/g,"<br>");

  workStart.append(workEmployer).append(workTitle).append(workDates).append(workLocation).append(workDescription);
});

$('#workExperience').append(workStart);



var projectStart = $(HTMLprojectStart);
$.each(resume.projects, function(index, value) {
  var projectTitle = HTMLprojectTitle.replace('%data%', value.title);
  var projectDates = HTMLprojectDates.replace('%data%', value.dates);
  var projectDescription = HTMLprojectDescription.replace('%data%', value.description);

  projectStart.append(projectTitle).append(projectDates).append(projectDescription);

  $.each(value.images, function(index, value) {
    var projectImage = HTMLprojectImage.replace('%data%', value);
    projectStart.append(projectImage);
  });
});

$("#projects").append(projectStart);



var education = $('#education');
var schoolStart = $(HTMLschoolStart);
$.each(resume.education.schools, function(index, value) {
  var schoolName = HTMLschoolName.replace('%data%', value.name);
  var schoolDegree = HTMLschoolDegree.replace('%data%', value.degree);
  var schoolDates = HTMLschoolDates.replace('%data%', value.dates);
  var schoolLocation = HTMLschoolLocation.replace('%data%', value.location);

  schoolStart.append(schoolName).append(schoolDegree).append(schoolDates).append(schoolLocation);

  $.each(value.majors, function(index, value) {

    var schoolMajor = HTMLschoolMajor.replace('%data%', value);
    schoolStart.append(schoolMajor);
  });
});

education.append(schoolStart);
education.append(HTMLonlineClasses);
var onlineEducationStart = $(HTMLschoolStart);
$.each(resume.education.onlineCourses, function(index, value) {
  var onlineTitle = HTMLonlineTitle.replace('%data%', value.title);
  var onlineSchool = HTMLonlineSchool.replace('%data%', value.school);
  var onlineDates = HTMLonlineDates.replace('%data%', value.date);
  var onlineURL = HTMLonlineURL.replace('%data%', value.url);

  onlineEducationStart.append(onlineTitle).append(onlineSchool).append(onlineDates).append(onlineURL);
});

education.append(onlineEducationStart);


$('#mapDiv').append(googleMap);
