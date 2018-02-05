/*
This is empty on purpose! Your code to build the resume will go here.
 */
 (function(){
 	let bio = {
		name : 'Chris McKinnon',
        role : 'High School Science Teacher',
        contacts : {
              mobile: '916-670-9368',
              email: 'mckkcm001@gmail.com',
              github: 'github.com/mckkcm001',
              twitter: '@mckkcm001',
              location: 'Sacramento, CA'
         },
        welcomeMessage: `Greetings! I am currently between jobs, as they say, and
        				looking for work as a science teacher or a software developer.
        				`,
        skills: ['chemistry','physics','python','javascript'],
        biopic: 'images/chris3.jpg',
        display: function() {
        	let headerName = HTMLheaderName.replace('%data%',bio.name);
        	$("#header").prepend(headerName);
        	let headerRole = HTMLheaderRole.replace('%data%',bio.role);
        	$("#name").after(headerRole);
        	let mobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
        	$("#topContacts").append(mobile);
        	let email = HTMLemail.replace('%data%',bio.contacts.email);
        	$("#topContacts").append(email);
        	let twitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
        	$("#topContacts").append(twitter);
        	let github = HTMLgithub.replace('%data%',bio.contacts.github);
        	$("#topContacts").append(github);
        	let location = HTMLlocation.replace('%data%',bio.contacts.location);
        	$("#topContacts").append(location);
        	let biopic = HTMLbioPic.replace('%data%',bio.biopic);
        	$("#header").append(biopic);
        	let welcomeMessage = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
        	$("#header").append(welcomeMessage);

        	$("#header").append(HTMLskillsStart);
        	bio.skills.forEach(function(skill) {
        		let skills = HTMLskills.replace('%data%',skill);
        		$("#skills").append(skills);
        	});
/*
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
*/
		}
 	};

 	let education = {
        schools: [
        	{
        		name: 'Caltech',
                location: 'Pasadena, CA',
                degree: 'BS',
                majors: ['Chemical Engineering'],
                dates: 'Sept 1979-June 1983',
                url: 'http://www.caltech.edu/'
            },
            {
        		name: 'U. Montana',
                location: 'Missoula, MT',
                degree: 'MS',
                majors: ['Chemistry'],
                dates: 'Sept 1984-June 1991',
                url: 'http://www.umt.edu/'
            }
        ],

        onlineCourses: [
        	{
                title: 'Front End Design',
                school: 'Udacity',
                dates: 'Jan 2018',
                url: 'www.udacity.com'
            }
        ],

        display: function() {
        	education.schools.forEach(function(school){
        		$("#education").append(HTMLschoolStart);
        		let name = HTMLschoolName.replace('%data%',school.name);
        		let degree = HTMLschoolDegree.replace('%data%',school.degree);
        		$(".education-entry:last").append(name + degree);
        		let dates = HTMLschoolDates.replace('%data%',school.dates);
        		$(".education-entry:last").append(dates);
        		let location = HTMLschoolLocation.replace('%data%',school.location);
        		$(".education-entry:last").append(location);
        		let majors = '';
        		let i=0;
        		for(; i<school.majors.length-1; i++){
        			majors += `${school.majors[i]}, `;
        		}
        		majors += `${school.majors[i]}`;
        		let major = HTMLschoolMajor.replace('%data%',majors);
        		$(".education-entry:last").append(major);
        	});

        	let onlineClasses = HTMLonlineClasses.replace('<h3>','<h3 id="online">');
        	$("#education").append(onlineClasses);
        	education.onlineCourses.forEach(function(course){
        		$("#education").append(HTMLschoolStart);
        		let title = HTMLonlineTitle.replace('%data%',course.title);
        		let school = HTMLonlineSchool.replace('%data%',course.school);
        		$(".education-entry:last").append(title + school);
        		let dates = HTMLonlineDates.replace('%data%',course.dates);
        		$(".education-entry:last").append(dates);
        		let url = HTMLonlineURL.replace('%data%',course.url).replace("#",course.url);
        		$(".education-entry:last").append(url);
        	});
        }
 	};

 	let work = {
        jobs: [
        	{
                employer: 'Grant High School',
                title: 'Science Teacher',
                location: 'Sacramento, CA',
                dates: 'Aug 2007-Jun 2017',
                description: `Taught Chemistry, Physics, AP Chemistry, AP Physics, AP Computer Science.
                			  Maintained a LAN of 36 Linux laptops.
                			  Developed chemistry and physics websites for student use.
                			  Developed a python program to scrape student rosters and generate individual assignments and keys.
                			  Coached Men's and Women's Swimming, Men's and Women's Golf.
                			  Advised Chess Club, League of Legends Club, Mountain Bike Racing Club.`
            }
        ],

        display: function() {
        	work.jobs.forEach(function(job) {
        		$("#workExperience").append(HTMLworkStart);
        		let workEmployer = HTMLworkEmployer.replace("%data%",job.employer);
        		let workTitle = HTMLworkTitle.replace("%data%",job.title);
        		$(".work-entry:last").append(workEmployer + workTitle);
        		let workDates = HTMLworkDates.replace("%data%",job.dates);
        		$(".work-entry:last").append(workDates);
        		let workLocation = HTMLworkLocation.replace("%data%",job.location);
        		$(".work-entry:last").append(workLocation);
        		let workDescription = HTMLworkDescription.replace("%data%",job.description);
        		$(".work-entry:last").append(workDescription);
			});
        }
    };

    let projects = {
        projects: [
        	{
        		title: 'Team Tomato',
                dates: 'Mar 2015-Apr 2015',
                description: `An "automatic" tomato grower featuring an Edison controller that manages
                			  lighting and watering while monitoring temperature, soil moisture, and
                			  light level. It also takes periodic pictures and strings them together
                			  into a time lapse video. All coding is in python.`,

                images: ['images/tomatoGrower1small.jpg',
                		 'images/tomatoGrower2small.jpg',
                		 'images/tomatoGrower3small.jpg',
                		 'images/tomatoGrower4small.jpg'
                ]
        	}
        ],

        display: function() {
        	projects.projects.forEach(function(project){
        		$("#projects").append(HTMLprojectStart);
        		let title = HTMLprojectTitle.replace("%data%",project.title);
        		$(".project-entry:last").append(title);
        		let dates = HTMLprojectDates.replace("%data%",project.dates);
        		$(".project-entry:last").append(dates);
        		let description = HTMLprojectDescription.replace("%data%",project.description);
        		$(".project-entry:last").append(description);
        		project.images.forEach(function(image){
        			let images = HTMLprojectImage.replace("%data%",image);
        			$(".project-entry:last").append(images);
        		});
        	});
        }
    };

    bio.display();
    education.display();
    work.display();
    projects.display();

	$("#mapDiv").append(googleMap);
	initializeMap();
 })();