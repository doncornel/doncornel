var data = "%data%";
var bio = {
    name: "Cornel Doncea",
    role: "Front-end Developer",
    contacts: {
        mobile: "+66 061 8825377",
        email: "doncea.cornel@gmail.com",
        github: '<a href="https://github.com/doncornel" target="blank" class="a-contact">doncornel</a>',
        behance: '<a href="https://www.behance.net/cdon" target="blank" class="a-contact">cdon</a>',
        location: "Bangkok"
    },
    welcomeMessage: "I have built a diverse skill set spanning general management, graphic design, branding, product development.",
    skills: ['<i class="devicon-illustrator-line colored skill-icons"></i>', '<i class="devicon-photoshop-line colored skill-icons"></i>', '<i class="devicon-html5-plain colored skill-icons"></i>', '<i class="devicon-css3-plain colored skill-icons"></i>', '<i class="devicon-javascript-plain skill-icons colored"></i>'],
    biopic: "images/colina.jpg",
    display: function() {
      var formattedRole = HTMLheaderRole.replace(data, bio.role);
      $("#header").prepend(formattedRole);

      var formattedName = HTMLheaderName.replace(data, bio.name);
      $("#header").prepend(formattedName);

      var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
      $("#header").append(formattedBioPic);

      var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
      $("#header").append(formattedWelcomeMsg);

      var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
      var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
      var formattedBehance = HTMLbehance.replace(data, bio.contacts.behance);
      var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
      var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedBehance + formattedLocation;

      $("#topContacts, #footerContacts").append(allContacts);

      if (bio.skills.length > 0) {
          $("#header").append(HTMLskillsStart);
          for (i = 0; i < bio.skills.length; i++) {
              formattedSkills = HTMLskills.replace(data, bio.skills[i]);
              $("#skills").append(formattedSkills);
          }
      }
    }
};

bio.display();

var education = {
    schools: [{
        name: "Universitatea Bucuresti",
        degree: "Bachelor",
        majors: ["Sociology"],
        dates: "2005-2008",
        location: "Romania",
        city: "Bucharest, RO",
        url: "http://www.unibuc.ro"
    }],
    onlineCourses: [{
        title: "Front-End Web Developer Nanodegree",
        school: "Udacity",
        dates: "2016",
        url: '<a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" target="blank">FEND</a>'
    }],
    display: function() {
      if (education.schools.length > 0) {
          $("#education").append(HTMLschoolStart);
          education.schools.forEach(function(school) {
              var formattedSchoolName = HTMLschoolName.replace(data, school.name);
              $(".education-entry:last").append(formattedSchoolName);
              var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
              $(".education-entry:last").append(formattedSchoolDates);
              var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.city);
              $(".education-entry:last").append(formattedSchoolLocation);
              var formattedSchoolMajor = HTMLschoolMajor.replace(data, school.majors);
              $(".education-entry:last").append(formattedSchoolMajor);
              var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
              $(".education-entry:last").append(formattedSchoolDegree);
          });
      }

      if (education.onlineCourses.length > 0) {
          $("#education").append(HTMLonlineClasses);
          education.onlineCourses.forEach(function(course) {
              var formattedonlineTitle = HTMLonlineTitle.replace(data, course.title);
              $("#courses:last").append(formattedonlineTitle);
              var formattedonlineSchool = HTMLonlineSchool.replace(data, course.school);
              $("#courses:last").append(formattedonlineSchool);
              var formattedonlineDates = HTMLonlineDates.replace(data, course.dates);
              $("#courses:last").append(formattedonlineDates);
              var formattedonlineURL = HTMLonlineURL.replace(data, course.url);
              $("#courses:last").append(formattedonlineURL);
          });
      }
    }
};

education.display();

var work = {
    jobs: [{
            employer: "IMAS",
            title: "Coding and data entry operator",
            dates: "2008 - 2009",
            description: "Adding and analysing data into an internal program for a marketing company.",
            location: "Romania"
        },
        {
            employer: "KOvideo",
            title: "Co-founder",
            dates: "2004 - 2012",
            description: "Owned a site that reached 180k daily uniques and won a Webstock award. Worked on design, UX and various aspects, including managing a team of content writers.",
            location: "Romania"
        },
        {
            employer: "CMFB.ro",
            title: "Co-founder",
            dates: "2008 -",
            description: "Started an amateur football league that currently has over 1000 active participants. I am involved in all managing aspects, including website development.",
            location: "Romania"
        }
    ],
    display: function() {
      $("#workExperience").append(HTMLworkStart);
      work.jobs.forEach(function(job) {
          var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
          var formattedTitle = HTMLworkTitle.replace(data, job.title);
          var formattedEmployerTitle = formattedEmployer + formattedTitle;
          $(".work-entry:last").append(formattedEmployerTitle);
          var formattedDates = HTMLworkDates.replace(data, job.dates);
          $(".work-entry:last").append(formattedDates);
          var formattedDescription = HTMLworkDescription.replace(data, job.description);
          $(".work-entry:last").append(formattedDescription);
      });
    }
};

work.display();

var projects = {
    projects: [{
        title: '<a href="https://itunes.apple.com/us/app/coin-watcher/id891238529?mt=8" target="blank">Coin Watcher</a>',
        dates: "2014",
        description: "Designed app/icon for a bitcoin monitoring software.",
        images: ["images/bitcoin/icon.png", "images/bitcoin/graph.jpg"]
      },
    {
        title: '<a href="http://psychicsonline.co.uk" target="blank">Psychics Online</a>',
        dates: "2015",
        description: "Designed different elements like logo and icons for an online IM platform.",
        images: ["images/psychics/psychics.jpg", "images/psychics/box-po.jpg"]
      },
    {
        title: "ChatOn",
        dates: "2016",
        description: "Designed the logo for an instant messaging app.",
        images: ["images/chaton/icon.png"]
      }
  ],
    display: function() {
      $("#projects").append(HTMLprojectStart);
      projects.projects.forEach(function(project) {
          var formattedTitle = HTMLprojectTitle.replace(data, project.title);
          $(".project-entry:last").append(formattedTitle);

          var formattedDates = HTMLprojectDates.replace(data, project.dates);
          $(".project-entry:last").append(formattedDates);

          var formattedDescription = HTMLprojectDescription.replace(data, project.description);
          $(".project-entry:last").append(formattedDescription);

          if (project.images.length > 0) {
              project.images.forEach(function(image) {
                  var formattedImage = HTMLprojectImage.replace(data, image);
                  $(".project-entry:last").append(formattedImage);
              });
          }
      });
    }
};

projects.display();



$(document).ready(function() {
    $('span.orange-text').click(function() {
            $(this).siblings().show();
            $(this).parent().siblings().each(function(index,element){
            $(element).find(".contact-text:visible").hide();
          });
      }
 );
});
