function handleSubmit() {
    
    event.preventDefault();
    
 
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
   
    if (firstName === '') {
        alert('First name must not be empty');
        return;
    }
    
    
    if (lastName === '') {
        alert('Last name must not be empty');
        return;
    }
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email is badly formatted');
        return;
    }
    
    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least a letter and a number');
        return;
    }
    
    
    console.log('Form submitted successfully');
    
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', handleSubmit);
});
