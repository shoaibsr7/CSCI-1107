/*
 * CSCI 1170: Introduction to Web Design and Development
 * Winter 2021 (Online edition)
 * Author: Ahmed Rajgoli Shoaib Shakeel (B00878695)
 *
 * This file contains the main JS file for the timetable page on this website.
 * 
 */
let DataFromJson = JSON.parse(jsonDataUni);

let contentString="";
contentString += "<table>"

for (i = 0; i < DataFromJson.length; i++){
    contentString += "<tr>"
    contentString += "<th id=courseCode>"+DataFromJson[i].courseCode+" -- "+DataFromJson[i].courseName+"</th>"

    contentString += "<tr id=tableContent>"

    contentString += "<td id=courseInstructor> Course Instructor: "+"<span id=courseInstructorBold> "+DataFromJson[i].instructor+"</span>"+"</td>"

    contentString +="<td id=location> Location: "+DataFromJson[i].location+"</td>"

    contentString +="<td id=schedule> Schedule: "+DataFromJson[i].scheduleDays+" ("+DataFromJson[i].scheduleTime+")"+"</td>"

    contentString +="<td id=max> Enrollment (max): "+"<span id=EnrollmentMax>"+DataFromJson[i].enrollmentMax+"</span>"+"</td>"

    contentString +="<td id=currentEnrollment> Enrollment (current): "+"<span id=EnrollmentCurrent>"+DataFromJson[i].enrollmentCurrent+"</span>"+"</td>"

    contentString +="<td id=available> Enrollment (availability): "+"<span id=EnrollmentAvailability>"+DataFromJson[i].enrollmentAvailability+"</span>"+"</td>"

}
contentString += "</table>"

let mainContainer = document.getElementById("timetable-data-container");
mainContainer.innerHTML = contentString;