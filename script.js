document.getElementById('marks-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var subject1 = document.getElementById('subject1').value;
    var subject2 = document.getElementById('subject2').value;
    var subject3 = document.getElementById('subject3').value;

    var marks1 = parseFloat(document.getElementById('marks1').value);
    var marks2 = parseFloat(document.getElementById('marks2').value);
    var marks3 = parseFloat(document.getElementById('marks3').value);

    var totalMarksPerSubject = 100;
    var totalSubjects = 3;

   
    var totalObtainedMarks = marks1 + marks2 + marks3;
    var totalMarks = totalSubjects * totalMarksPerSubject;
    var percentage = (totalObtainedMarks / totalMarks) * 100;

    var resultHTML = `
        <h2>Results</h2>
        <table>
            <tr>
                <th>Subject</th>
                <th>Obtained Marks</th>
            </tr>
            <tr>
                <td>${subject1}</td>
                <td>${marks1}</td>
            </tr>
            <tr>
                <td>${subject2}</td>
                <td>${marks2}</td>
            </tr>
            <tr>
                <td>${subject3}</td>
                <td>${marks3}</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalObtainedMarks}</strong></td>
            </tr>
            <tr>
                <td><strong>Percentage</strong></td>
                <td><strong>${percentage.toFixed(2)}%</strong></td>
            </tr>
        </table>
    `;

    document.getElementById('result').innerHTML = resultHTML;
});
