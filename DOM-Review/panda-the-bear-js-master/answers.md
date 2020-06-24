1.  let my_image = document.querySelector('.profile-image');
    my_image.src = "https://catcareclinic.net/wp-content/uploads/2018/08/fig-03-08-2018_01-11-27-400x400.jpg";

2.  let my_image2 = document.querySelector('.photography');
    my_image2.src = "https://i.redd.it/6t9y8vmk4fgx.jpg";

3.  let my_title = document.querySelector('title');
    my_title.innerText = "Outer Space Kitty";

4.  let employment = document.querySelector('#employment');
    employment.querySelector('h3').innerText = "Kitty Hobbies";

7.  let body = document.querySelector('body');
    body.style.color = "blue";

8.  let highlight = document.querySelectorAll('.highlight');
    highlight.forEach(element => element.style.color = "red");

9.  let h1 = document.querySelector('h1');
    h1.style.fontFamily = 'monospace';

10. let icon = document.querySelectorAll('.action-icon-bg');
    icon.forEach(element => element.style.backgroundColor = "blue");

11. let contactName = document.querySelector(#name);
    contactName.placeholder = "Identify yourself";

12. let contactMessage = document.querySelector('#message');
    contactMessage.placeholder = "State your business";

13. contactName.value = "your nemesis";

14. let contactEmail = document.querySelector('#email');
    contactEmail.value = "koalathebear@gmail.com";

15. let contactSubmit = document.querySelector('#submit');
    contactSubmit.value = "En garde!";

16. contactSubmit.disabled = true;

17. let personalInfo = document.querySelectorAll('.bio-info-value');
    personalInfo.forEach(element => element.hidden = true);