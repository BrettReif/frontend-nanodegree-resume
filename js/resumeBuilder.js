/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Brett Reifers"
 var role = "Technical Product Manager"
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 var skills = ["HTML", "CSS", "SQL", "JavaScript"];
 var picture = "images/me.jpg"

 var bio = {
	"name" : name,
	"role" : role,
	"email" : "breifers@gmail.com",
 	"phone" : "206-788-5705",
 	"picture" : picture,
	"message" : "Here's a bit about me.",
	"skills" : skills.join(", ")
};
  
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(bio.email);
 $("#header").append(bio.phone);
 $("#header").append(bio.picture);
 $("#header").append(bio.message);
 $("#header").append(bio.skills);