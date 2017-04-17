/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Emily Huang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "185××××××××",
        "email": "emily092793@gmail.com",
        "github": "huangaijing",
        "twitter": "No Twitter",
        "location": "Los Angeles, CA, United States"
    },
    "welcomeMessage": "Welcome to My World",
    "skills": ["HTML5", "CSS3", "Javascript", "Save The Earth!"],
    "bioPic": "images/fry.jpg",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var NameAndRole = formattedName + formattedRole;
        $("#header").prepend(NameAndRole);

        var fullContacts = "";
        var formattedContactItem = "";
        for (var key in this.contacts) {
            if (this.contacts.hasOwnProperty(key)) {
                formattedContactItem = HTMLcontactGeneric.replace("%contact%", key);
                formattedContactItem = formattedContactItem.replace("%data%", this.contacts[key]);
                fullContacts += formattedContactItem;
            }
        }
        $("#topContacts").append(fullContacts);
        $("#footerContacts").append(fullContacts);
        var fullBioEtc = "";
        var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
        var formattedBioMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        fullBioEtc = formattedBioPic + formattedBioMsg;
        $("#header").append(fullBioEtc);

        var formattedSkills = "";
        $("#header").append(HTMLskillsStart);
        this.skills.forEach(function (skill) {
            formattedSkills += HTMLskills.replace("%data%", skill);
        });
        $("#skills").append(formattedSkills);
    }
};

var education = {
    "schools": [{
        "name": "University Name 1",
        "location": "Los Angeles, CA, United States",
        "degree": "2013",
        "majors": ["Software Engineering", "Software Engineering2"],
        "dates": "2009-2013"
    }, {
        "name": "Univeristy Name 2",
        "location": "San Francisco, CA, United States",
        "degree": "2015",
        "url": "#",
        "majors": ["Software Engineering"],
        "dates": "2013-2015"
    }],
    "onlineCourses": [{
        "title": "Udactiy Front-end Nanodegree",
        "school": "Udacity",
        "dates": "2017.4",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Udactiy Nanodegree2",
        "school": "Udacity",
        "dates": "2017.4",
        "url": "https://www.udacity.com/"
    }],
    display: function () {
        this.schools.forEach(function (school) {
            var formattedSchools = "";
            $("#education").append(HTMLschoolStart);
            formattedSchools += HTMLschoolName.replace("%data%", school.name);
            formattedSchools += HTMLschoolDegree.replace("%data%", school.degree);
            formattedSchools += HTMLschoolDates.replace("%data%", school.dates);
            formattedSchools += HTMLschoolLocation.replace("%data%", school.location);
            school.majors.forEach(function (major) {
                formattedSchools += HTMLschoolMajor.replace("%data%", major);
            });
            $(".education-entry:last").append(formattedSchools);
        });
        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            this.onlineCourses.forEach(function (onlineCourse) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineCourses = "";
                formattedOnlineCourses += HTMLonlineTitle.replace("%data%", onlineCourse.title);
                formattedOnlineCourses += HTMLonlineSchool.replace("%data%", onlineCourse.school);
                formattedOnlineCourses += HTMLonlineDates.replace("%data%", onlineCourse.dates);
                formattedOnlineCourses += HTMLonlineURL.replace("%data%", onlineCourse.url);
                $(".education-entry:last").append(formattedOnlineCourses);
            });
        }

    }
};

var work = {
    "jobs": [{
        "employer": "Employer1",
        "title": "QA",
        "location": "San Francisco, CA, United States",
        "dates": "2013.7- 2014.6",
        "description": "In composition, description is a rhetorical strategy using sensory details to portray a person, place, or thing. Description is used in many different types of nonfiction, including essays, biographies, memoirs, nature writing, profiles, sports writing, and travel writing."
    }, {
        "employer": "Employer2",
        "title": "Developer",
        "location": "Mountain View, CA, United States",
        "dates": "Feb 2016 - Current",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }],
    display: function () {
        this.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var projects = {
    "projects": [{
        "title": "Project1",
        "dates": "2016.1-2016.5",
        "description": "My First Project, please try this out.My First Project, please try this out.My First Project, please try this out.My First Project, please try this out.My First Project, please try this out.My First Project, please try this out.My First Project, please try this out.My First Project, please try this out.",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }, {
        "title": "Project2",
        "dates": "2017.1-2017.5",
        "description": "My Second Project, please try this out.My Second Project, please try this out.My Second Project, please try this out.My Second Project, please try this out.My Second Project, please try this out.My Second Project, please try thiDatess out.My Second Project, please try this out.My Second Project, please try this out.",
        "images": ["http://placehold.it/300x200", "http://placehold.it/300x200", "http://placehold.it/300x200"]
    }],
    display: function () {
        this.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedProjectImages = "";
            project.images.forEach(function (img) {
                formattedProjectImages += HTMLprojectImage.replace("%data%", img);
            });
            var fullProjectEntry = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages;
            $(".project-entry:last").append(fullProjectEntry);
        });
    }
};

var displayGoogleMap = function () {
    $("#mapDiv").append(googleMap);
}

bio.display();
work.display();
projects.display();
education.display();
displayGoogleMap();