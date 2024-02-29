



var sections = document.getElementById('ui_container').children;
var cards = [];

for(var i=0;i<sections.length;i++)
{

cards[i] = sections[i].children;
console.log(cards);

}





window.onload = arrange_cards;
window.onresize = arrange_cards;

function arrange_cards(event)
{

var gap = 10;

var extra_space = 0;

var _top = 0;
var _left = 0;


var el_width = 200;
var el_height = 200;

var max_height = 200;

var sec_start = 0;


for(var k=0;k<sections.length;k++)
{


sections[k].style.top = _top+"px";


sec_start = _top;

_top+=gap;
_left+=gap;

for(var i=0;i<cards[k].length;i++)
{

    if((_left+el_width+gap) > window.innerWidth)
    {
        
        extra_space = window.innerWidth - _left;

        console.log(extra_space);
    
        _top+=(el_height+gap);
        
        _left=gap;
    
    
    }


cards[k][i].style.top = (_top-sec_start)+"px";
cards[k][i].style.left = _left+"px";

_left+=(el_width+gap);




}

_top+=el_height+gap;

_left = 0;

sections[k].style.height = (_top-sec_start)+"px";



}



}

function get_props(el)
{

}

function set_props(el)
{
    
}




