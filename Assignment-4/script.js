function validateForm() {
    var isValid = true;

    // Clear all previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('deptError').textContent = '';
    document.getElementById('successMsg').textContent = '';

    // Get field values
    var name = document.getElementById('empName').value.trim();
    var email = document.getElementById('empEmail').value.trim();
    var password = document.getElementById('empPassword').value;
    var phone = document.getElementById('empPhone').value.trim();
    var dept = document.getElementById('empDept').value;

    // --- Name validation ---
    // Must not be empty and can only contain letters and spaces
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Name can only contain letters and spaces.';
        isValid = false;
    }

    // --- Email validation ---
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // --- Password validation ---
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    // --- Phone validation ---
    // Must be exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be exactly 10 digits.';
        isValid = false;
    }

    // --- Department validation ---
    if (dept === '') {
        document.getElementById('deptError').textContent = 'Please select a department.';
        isValid = false;
    }

    // Show success message if everything passes
    if (isValid) {
        document.getElementById('successMsg').textContent = 'Employee Registered Successfully!';
        document.getElementById('registrationForm').reset();
    }

    // Returning false prevents the default form submission
    return false;
}
