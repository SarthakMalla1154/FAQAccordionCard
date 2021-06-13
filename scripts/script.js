const q1 = document.querySelector('#q1');
const q2 = document.querySelector('#q2');
const q3 = document.querySelector('#q3');
const q4 = document.querySelector('#q4');
const q5 = document.querySelector('#q5');

q1.addEventListener('click', function(){
    document.getElementById('ans1').classList.toggle("answerstyle");
    document.querySelector('#p1').classList.toggle("paragraphstyle")
    document.querySelector('#arrow1').classList.toggle("arrowstyle")
})
q2.addEventListener('click', function(){
    document.getElementById('ans2').classList.toggle("answerstyle");
    document.querySelector('#p2').classList.toggle("paragraphstyle")
    document.querySelector('#arrow2').classList.toggle("arrowstyle")
})
q3.addEventListener('click', function(){
    document.getElementById('ans3').classList.toggle("answerstyle");
    document.querySelector('#p3').classList.toggle("paragraphstyle")
    document.querySelector('#arrow3').classList.toggle("arrowstyle")
})
q4.addEventListener('click', function(){
    document.getElementById('ans4').classList.toggle("answerstyle");
    document.querySelector('#p4').classList.toggle("paragraphstyle")
    document.querySelector('#arrow4').classList.toggle("arrowstyle")
})
q5.addEventListener('click', function(){
    document.getElementById('ans5').classList.toggle("answerstyle");
    document.querySelector('#p5').classList.toggle("paragraphstyle")
    document.querySelector('#arrow5').classList.toggle("arrowstyle")
})