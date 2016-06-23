$(document).ready(init);

function init() {
  $('#new').click(newgame);
  $('#rando').click(randomNum);
}

function newgame(){
  const name = $('#name').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function(rsp){
      $('#person').text(rsp.name);
      $('#id').text(rsp._id);
      $('#heads').text(rsp.heads);
      $('#tails').text(rsp.tails);
      console.log('rsp', rsp);
     }
  });
};

function startNumStuff() {
  $('#rando').click(randomNum);
  console.log("STUFF HAPPENING");
}

// below is not right, see his github for code
function randomNum(){
  const rando = Math.floor(Math.random() * 10);
  $.ajax({
    url: '/games/num',
    method: 'post',
    dataType: 'json',
    data: { rando },
    success: function(rsp){
      $('#id').text(rsp._id);
      console.log('rsp', rsp);
     }
  });
};
