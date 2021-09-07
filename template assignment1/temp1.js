 
var indexValue = 0;
var indexValue1 = 0;
var clr,clr1;
function slideShow1(){
    	
	const img = document.getElementsByClassName("mySlide");
	for(var x = 0; x < img.length; x++)
		img[x].style.display = "none";
        
	indexValue1++;
	if(indexValue1 > img.length)
		indexValue1 = 1;
	
	img[indexValue1-1].style.display = "block";
	}
     
function slideShow(){
    
	const img = document.getElementsByClassName("mySlides");
	for(var x = 0; x < img.length; x++)
		img[x].style.display = "none";
        
	indexValue++;
	if(indexValue > img.length)
		indexValue = 1;
	
	img[indexValue-1].style.display = "block";
	
}
 

function slideShows(n){
        
	const img = document.getElementsByClassName("mySlides");
	for(var x = 0; x < img.length; x++)
		img[x].style.display = "none";
        
	indexValue +=n;
	if(indexValue < 1)
		indexValue = img.length;
	if(indexValue > img.length)
		indexValue = 1;
	
	img[indexValue-1].style.display = "block";
	
}

function plusSlides(n){
	clearInterval(clr);
	clearInterval(clr1);		
	slideShows(n);
	clr1 = setInterval(slideShow1, 3000);

	clr =  setInterval(slideShow, 4000);
	
}
	   
	clr =  setInterval(slideShow, 4000);


	clr1 = setInterval(slideShow1, 3000);


	

     
     

     

	


