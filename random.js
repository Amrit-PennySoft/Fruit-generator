 $().ready(function()
{
  $('div[name^=section]').hide();
  $('select[name=question]').on("change",function()
  {
    $('div[name^=section]').hide();
    var count = $(this).val();
    for(var i=1; i <= count; i++)    
      $('div[name^=section' + i + ']').show();
  });
});

var fruitsArray = [
  { name: 'Banana', image: './assets/banana.jpg' }, 
  { name: 'Apple', image: './assets/apple.jpg' }, 
  { name: 'Orange', image: './assets/orange.jpg' },
  { name: 'Kiwi', image: './assets/kiwi.jpg' },
  { name: 'Melon', image: './assets/melon.jpg' },
  { name: 'avacado', image: './assets/avocado.jpg' },
  { name: 'Strawberries', image: '.assets/strawberry.jpg' },
  { name: 'Grapes', image: './assets/grape.jpg' },
  { name: 'Blueberries', image: './assets/bluberry.jpg' }

];
    
    function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
    

function changeText(){
    var e = document.getElementById('selectbox');
    var strUser = e.options[e.selectedIndex].value;
    var boldStuffs = document.getElementsByClassName('boldStuff');
  for (var i = 0; i < boldStuffs.length; i += 1) {
    var fruit = getRandomItem(fruitsArray);
    boldStuffs[i].innerHTML = fruit.name + '<img src="'+fruit.image+'">';
  }

}

