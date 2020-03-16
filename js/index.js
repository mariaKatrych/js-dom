const link = document.querySelector('a');

link.textContent = 'My profile';
link.href = 'https://www.facebook.com/mariaKatrych';

/*const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

for (let i = 1; i<= 1000; i++ ) {
    const para = document.createElement('p');   
    para.textContent = i +' We hope you enjoyed the ride.';
    sect.appendChild(para);
}*/

const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = new Date().toLocaleTimeString();
setInterval(showClock,  1000);