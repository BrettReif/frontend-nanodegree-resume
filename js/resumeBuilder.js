/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Brett Reifers"
 var role = "Technical Product Manager"
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 var contact = {
 	"email" : "breifers@gmail.com",
 	"phone" : "206-788-5705"
  };
 var picture = [];
 var skills = ["HTML", "CSS", "SQL", "JavaScript"];

 var bio = {
	"name" : name,
	"role" : role,
	"contact info" : contact,
	"picture URL" : picture,
	"welcome message" : "Here's a bit about me.",
	"skills" : skills
};
  
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(bio);