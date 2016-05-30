var size=16;
$(document).ready(function() {
    
    setGrid();
    loadColor();
	
});
   
function setGrid(){
	  	$('.grid').append('<table> </table>');
  
	for(var i=0; i<size;i++)
	{
		$('table').append('<tr > </tr>');
		for(var j=0; j<size; j++)
		{
			$('tr:last').append('<td class="box"> </td>');
		}
	}
	if(size!=16)
	{
		$('.grid').css('width', 760/size);
		loadColor();
	}
	
	
};

		
function loadColor() {
	$(".box").hover(function() {
		$(this).css('background-color', 'green');
	});
};

function newGrid() {
$('table').remove();
 size= prompt("Enter the number of squares per side");
setGrid();

};

