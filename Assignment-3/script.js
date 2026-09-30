// Array to store all student records
var students = [];

function addResult() {
    // Get input values
    var name = document.getElementById('studentName').value.trim();
    var roll = document.getElementById('rollNumber').value.trim();
    var s1 = document.getElementById('subject1').value;
    var s2 = document.getElementById('subject2').value;
    var s3 = document.getElementById('subject3').value;
    var errorMsg = document.getElementById('errorMsg');

    // --- Validation ---

    if (name === '' || roll === '' || s1 === '' || s2 === '' || s3 === '') {
        errorMsg.textContent = 'Please fill in all fields.';
        return;
    }

    // Convert marks to numbers
    s1 = Number(s1);
    s2 = Number(s2);
    s3 = Number(s3);

    if (s1 < 0 || s1 > 100 || s2 < 0 || s2 > 100 || s3 < 0 || s3 > 100) {
        errorMsg.textContent = 'Marks must be between 0 and 100.';
        return;
    }

    // Clear any previous error
    errorMsg.textContent = '';

    // --- Calculate total and percentage ---
    var total = s1 + s2 + s3;
    var percentage = total / 3; // out of 100 since 3 subjects each out of 100

    // Create a student object and push to array
    var student = {
        name: name,
        roll: roll,
        s1: s1,
        s2: s2,
        s3: s3,
        total: total,
        percentage: percentage
    };

    students.push(student);

    // Add row to the table
    addRowToTable(student);

    // Update topper
    updateTopper();

    // Clear the form inputs
    clearForm();
}

function addRowToTable(student) {
    var tableBody = document.getElementById('tableBody');
    var noData = document.getElementById('noData');

    // Hide the "no data" message once we have a student
    noData.style.display = 'none';

    // Create a new table row
    var row = document.createElement('tr');

    row.innerHTML =
        '<td>' + student.roll + '</td>' +
        '<td>' + student.name + '</td>' +
        '<td>' + student.s1 + '</td>' +
        '<td>' + student.s2 + '</td>' +
        '<td>' + student.s3 + '</td>' +
        '<td>' + student.total + '</td>' +
        '<td>' + student.percentage.toFixed(2) + '%</td>';

    tableBody.appendChild(row);
}

function updateTopper() {
    // Find student with highest percentage
    var topper = students[0];

    for (var i = 1; i < students.length; i++) {
        if (students[i].percentage > topper.percentage) {
            topper = students[i];
        }
    }

    // Show the topper section
    document.getElementById('topperSection').style.display = 'block';
    document.getElementById('topperName').textContent = topper.name;
    document.getElementById('topperPercent').textContent = topper.percentage.toFixed(2);
}

function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('rollNumber').value = '';
    document.getElementById('subject1').value = '';
    document.getElementById('subject2').value = '';
    document.getElementById('subject3').value = '';
}
