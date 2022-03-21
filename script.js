var answer = '';
q1()
function q1() {
  document.getElementById('span').innerHTML = 'want to work in the government?';
  document.getElementById('yes').addEventListener('click', q2);
  document.getElementById('no').addEventListener('click', q3);
}
function q2() {
  document.getElementById('yes').removeEventListener('click', q2);
  document.getElementById('no').removeEventListener('click', q3);
  document.getElementById('span').innerHTML = 'want to be president?';
  document.getElementById('yes').addEventListener('click', q4);
  document.getElementById('no').addEventListener('click', q5);
}
function q3() {
  document.getElementById('yes').removeEventListener('click', q2);
  document.getElementById('no').removeEventListener('click', q3);
  document.getElementById('span').innerHTML = 'enjoy being a musician?';
  document.getElementById('yes').addEventListener('click', q6);
  document.getElementById('no').addEventListener('click', q7);
}
function q4() {
  document.getElementById('yes').removeEventListener('click', q4);
  document.getElementById('no').removeEventListener('click', q5);
  document.getElementById('span').innerHTML = 'want to serve four terms in office?';
  document.getElementById('yes').addEventListener('click', end);
  document.getElementById('no').addEventListener('click', q8);
}
function q5() {
  document.getElementById('yes').removeEventListener('click', q4);
  document.getElementById('no').removeEventListener('click', q5);
  document.getElementById('span').innerHTML = 'want to be a politician?';
  document.getElementById('yes').addEventListener('click', q9);
  document.getElementById('no').addEventListener('click', end);
}
function q6() {
  document.getElementById('yes').removeEventListener('click', q6);
  document.getElementById('no').removeEventListener('click', q7);
  document.getElementById('span').innerHTML = 'rather self-teach as opposed to being taught by a teacher?';
  document.getElementById('yes').addEventListener('click', end);
  document.getElementById('no').addEventListener('click', end);
}
function q7() {
  document.getElementById('yes').removeEventListener('click', q6);
  document.getElementById('no').removeEventListener('click', q7);
  document.getElementById('span').innerHTML = 'want to be a civil rights activist?';
  document.getElementById('yes').addEventListener('click', q10);
  document.getElementById('no').addEventListener('click', end);
}
function q8() {
  document.getElementById('yes').removeEventListener('click', end);
  document.getElementById('no').removeEventListener('click', q8);
  document.getElementById('span').innerHTML = 'want to serve more one term?';
  document.getElementById('yes').addEventListener('click', end);
  document.getElementById('no').addEventListener('click', end);
}
function q9() {
  document.getElementById('yes').removeEventListener('click', q9);
  document.getElementById('no').removeEventListener('click', end);
  document.getElementById('span').innerHTML = 'want to be in the House of Representatives?';
  document.getElementById('yes').addEventListener('click', end);
  document.getElementById('no').addEventListener('click', end);
}
function q10() {
  document.getElementById('yes').removeEventListener('click', q10);
  document.getElementById('no').removeEventListener('click', end);
  document.getElementById('span').innerHTML = 'organize a labor union?';
  document.getElementById('yes').addEventListener('click', end);
  document.getElementById('no').addEventListener('click', end);
}
function end() {
  console.log('ur done')
  document.getElementById('h2').style.display = 'none';
  document.getElementById('options').style.display = 'none';
}