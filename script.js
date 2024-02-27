

cards = document.getElementsByClassName('ui_basic_card');
window.onload = arrange_cards;
window.onresize = arrange_cards;

function arrange_cards(event)
{

var gap = 10;

var extra_space = 0;

var _top = gap;
var _left = gap;

var el_width = 200;
var el_height = 200;



for(var i=0;i<cards.length;i++)
{


if((_left+gap+el_width) > window.innerWidth)
{
    
    extra_space = window.innerWidth - _left;
    console.log(extra_space);

    _top+=(el_height+gap);
    _left=gap;

    
}

cards[i].style.top = _top+"px";
cards[i].style.left = _left+"px";

_left+=(el_width+gap);




}



}

