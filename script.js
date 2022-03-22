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
  document.getElementById('yes').addEventListener('click', function() {
    answer = 'FDR';
    end();
  });
  document.getElementById('no').addEventListener('click', q8);
}
function q5() {
  document.getElementById('yes').removeEventListener('click', q4);
  document.getElementById('no').removeEventListener('click', q5);
  document.getElementById('span').innerHTML = 'want to be a politician?';
  document.getElementById('yes').addEventListener('click', q9);
  document.getElementById('no').addEventListener('click', function() {
    answer = 'J. Edgar Hoover';
    end();
  });
}
function q6() {
  document.getElementById('yes').removeEventListener('click', q6);
  document.getElementById('no').removeEventListener('click', q7);
  document.getElementById('span').innerHTML = 'rather self-teach as opposed to being taught by a teacher?';
  document.getElementById('yes').addEventListener('click', function() {
    answer = 'Louis Armstronk';
    end();
  });
  document.getElementById('no').addEventListener('click', function() {
    answer = 'Duke Ellington';
    end();
  });
}
function q7() {
  document.getElementById('yes').removeEventListener('click', q6);
  document.getElementById('no').removeEventListener('click', q7);
  document.getElementById('span').innerHTML = 'want to be a civil rights activist?';
  document.getElementById('yes').addEventListener('click', q10);
  document.getElementById('no').addEventListener('click', function() {
    answer = 'Henry Ford';
    end();
  });
}
function q8() {
  document.getElementById('yes').removeEventListener('click', function() {
    answer = 'FDR';
    end();
  });
  document.getElementById('no').removeEventListener('click', q8);
  document.getElementById('span').innerHTML = 'want to serve more one term?';
  document.getElementById('yes').addEventListener('click', function() {
    answer = 'Calvin Coolidge';
    end();
  });
  document.getElementById('no').addEventListener('click', function() {
    answer = 'Warren G. Harding';
    end();
  });
}
function q9() {
  document.getElementById('yes').removeEventListener('click', q9);
  document.getElementById('no').removeEventListener('click', function() {
    answer = 'J. Edgar Hoover';
    end();
  });
  document.getElementById('span').innerHTML = 'want to be in the House of Representatives?';
  document.getElementById('yes').addEventListener('click', function() {
    answer = 'A. Mitchel Palmer';
    end();
  });
  document.getElementById('no').addEventListener('click', function() {
    answer = 'C. Evan Hughes';
    end();
  });
}
function q10() {
  document.getElementById('yes').removeEventListener('click', q10);
  document.getElementById('no').removeEventListener('click', function() {
    answer = 'Henry Ford';
    end();
  });
  document.getElementById('span').innerHTML = 'organize a labor union?';
  document.getElementById('yes').addEventListener('click', function() {
    answer = 'Phillip Randolf';
    end();
  });
  document.getElementById('no').addEventListener('click', function() {
    answer = 'Garvey';
    end();
  });
}
function end() {
  document.getElementById('h2').style.display = 'none';
  document.getElementById('options').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = answer;
}