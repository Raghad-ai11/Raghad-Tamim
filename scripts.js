document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const court = document.getElementById('court').value;
    
    const confirmationDetails = `
    Name:${name}
    Email:${email}
    Date:${date}
    Time:${time}
    Court:${court}`;
    
    localStorage.setItem('confirmationDetails', confirmationDetails);
    
    window.location.href = 'confirmation.html';
});

if (window.location.pathname.includes('confirmation.html')) {
    document.getElementById('confirmationDetails').innerHTML = localStorage.getItem('confirmationDetails');
}
