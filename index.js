var username = prompt("Enter your name")
alert("Hi " + username)

var Number = prompt("Enter your roll number")
alert("Find your result")

function calculateResults() {
    
    var subject1 = parseFloat(document.getElementById("subject1").value);
    var subject2 = parseFloat(document.getElementById("subject2").value);
    var subject3 = parseFloat(document.getElementById("subject3").value);
    var subject4 = parseFloat(document.getElementById("subject4").value);
    var subject5 = parseFloat(document.getElementById("subject5").value);

    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    var percentage = (totalMarks / 500) * 100;

    var grade;
    if (percentage >= 80) {
        grade = "A+";
    } else if (percentage >= 70) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else if (percentage >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert("Marks Sheet:\n" +
                  "----------------\n" +
                  "Total Marks: " + totalMarks + " / 500\n" +
                  "Percentage: " + percentage.toFixed(2) + "%\n" +
                  "Grade: " + grade);
        
        }
