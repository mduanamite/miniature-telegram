/* 
Filename: photoData.js
Author: Michelle Duan
Purpose: Contains an ARRAY of OBJECTS for shahglasscollection.
Item info and images are provided by Hemanshu Shah

code for display infobox and formatItems were also written by Michelle Duan 
but was inspired by hw7 pset js code which she wrote earlier
*/

// IMPORTANT: Long text in the field description should not contain a return 
// (enter) character, because it breaks the Javascript code.

var photos = [
      {
         alt: "with paul stankard at ken saunders gallery 2012",
         urlSmall: "Photographs/2kenSaunders2012-small.jpg",
         urlLarge: "Photographs/2kenSaunders2012.jpg"
       },
       {
         alt: "with paul stankard at ken saunders gallery 2012",
         urlSmall: "Photographs/kenSaunders2012-small.jpg",
         urlLarge: "Photographs/kenSaunders2012.jpg"
       },
       {
         alt: "April Surgent studio visit 2013",
         urlSmall: "Photographs/surgentStudio2013-small.jpg",
         urlLarge: "Photographs/surgentStudio2013.jpg"
       },
       {
          alt: "Chihuly studio visit 2013",
          urlSmall: "Photographs/chihuly2013-small.jpg",
          urlLarge: "Photographs/chihuly2013.jpg"
       },
       {
    	  alt: "Dale Chihuly, Pilchuck, 2013",
    	  urlSmall:"Photographs/Chihuly_Pilchuck2013-small.jpg",
    	  urlLarge: "Photographs/Chihuly_Pilchuck2013.jpg"
       },
       {
       	  alt: "with Jeffrey Sarmiento at Kend Saunders Gallery 2013",
       	  urlSmall: "Photographs/JSarmiento_Saunders2013-small.jpg",
       	  urlLarge: "Photographs/JSarmiento_Saunders2013.jpg"
       },
       {
       	  alt: "John Kiley studio visit 2013",
       	  urlSmall: "Photographs/JKiley2013-small.jpg",
       	  urlLarge: "Photographs/JKiley2013.jpg"
       },
       {
       	  alt: "Jessica Laughlin Pilchuck 2013",
       	  urlSmall: "Photographs/JLaughlin2013-small.jpg",
       	  urlLarge: "Photographs/JLaughlin2013.jpg"
       },
       {
          alt: "",
          urlSmall: "Photographs/unknown1-small.jpg",
          urlLarge: "Photographs/unknown1.jpg"
       },
       {
          alt: "with Detlef Gotzens, August 2010",
          urlSmall: "Photographs/DGotzens_2010-small.jpg",
          urlLarge: "Photographs/DGotzens_2010.jpg"
       },
       {
         alt: "Nancy Callan studio visit 2013",
         urlSmall: "Photographs/NCallan2013-small.jpg",
         urlLarge: "Photographs/NCallan2013.jpg"
       },
       {
          alt: "",
          urlSmall: "Photographs/unknown2-small.jpg",
          urlLarge: "Photographs/unknown2.jpg"
       },
       {
          alt: "",
          urlSmall: "Photographs/unknown3-small.jpg",
          urlLarge: "Photographs/unknown3.jpg"
       },
       {
          alt: "",
          urlSmall: "Photographs/unknown4-small.jpg",
          urlLarge: "Photographs/unknown4.jpg"
       },
       {
          alt: "with Detlef Gotzens #3",
          urlSmall: "Photographs/DGotzens-small.jpg",
          urlLarge: "Photographs/DGotzens.jpg"
       },
       {
          alt: "with Joel Philip Myers 2013",
          urlSmall: "Photographs/JPMyers2013-small.jpg",
          urlLarge: "Photographs/JPMyers2013.jpg"
       }
];

/*populates page/desired section with photos from an array */
function formatItems(album) {
	for (var i = 0; i < photos.length; i++ ) {
	pgal = album[i];
	var cloned = $("#template").clone(true).appendTo("#gallery");
	cloned.find('img').attr('src', pgal.urlSmall);
	cloned.find('img').attr('alt', pgal.alt);
	cloned.find('img').attr("data-index",i);
	cloned.show();
	}
}

//invokes formatItems
formatItems(photos);

//shows large version of the thumbnail when img is clicked
function displayInfoBox(index) {
	/*shows/un-hides the #infobox*/
	$("#infobox").show();
	$("#overlay").show();
	
	/*find the object by indexing into the array of merchItems, 
	reading the data from the object and copying the data into
	the appropriate HTML elements of the #infobox.*/
	pgal = photos[index];
	
	/*copy the item's index into the hidden input of that id in the infobox, 
	so that it will be there for function hideUpdateInfoCart().*/
	$("#titleInBox").text(pgal.alt);
	$("#itemIndex").val(index);
	$("#infobox img").attr("src", pgal.urlLarge);
} 

//invokes infobox
$(function(){
	/*attach this function to all the .buyIcon elements.*/
	$("img").click(function(){
	/*get the data-index attribute from the buy button that was clicked on, 
	and invoke the displayInfoBox function using value of data-index as argument*/
	var index = $(this).attr("data-index");
	displayInfoBox(index);
	});

});

/*hide the infobox by attaching the function to the close element on the infobox
so that infobox will be hidden once clicked with mouse*/
$(function() {
	$("#close").click(function(){
		$("#infobox").hide();
		$("#overlay").hide();
	});
});