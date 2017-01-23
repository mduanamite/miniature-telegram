/*
FILE NAME: artistDiv.js
WRITTEN BY: Michelle Duan
WHEN: May, 2015
         
PURPOSE: Create an artist section that can be opened on the artist page 
when an artist name is clicked on.
artist information array with files organized under each artist name
artist description is also content created by Michelle Duan after research on the web 
about each artist
youtube links and iamges provided by hemanshu
*/

// array of objects of data
var artistByID = [
	{id: "dam",
	 name: "Steffen Dam",
	 description:"Dam, inspired by his grandparents’ insect cabinets and books with plates of plants and animals, makes imaginary glass specimen. In his words, his aim is to 'describe the world as he sees it'. Dam's awards include The Crafts Prize of 1879 awarded in 1995. The Ole Haslund Art Prize awarded in 1996, and The Hempel Glass Prize awarded in 2002.",
	 portrait: "Glass/SDam/damPortrait.png",
	 youtube: "https://www.youtube.com/v/EJiHoU1-160",
	 images:[	
	 {
         alt: "Fifth Season",
         urlSmall: "Glass/SDam/sdam_fifthSeason-small.jpg",
         urlLarge: "Glass/SDam/sdam_fifthSeason.jpg"
       },
       {
         alt: "Marine Group",
         urlSmall: "Glass/SDam/sdam_marine-small.jpg",
         urlLarge: "Glass/SDam/sdam_marine.jpg"
       }
	]	
	},
	{id: "fujita",
	 name: "Kyohei Fujita",
	 description: "Kyohei Fujita is best known for his glass boxes with complicated surface decorations. The name Kyohei Fujita became synonymous with “Liuli box” - they were the most ornate and magical Japanese boxes in the world. His work was included in the Metropolitan Museum of Art in NYC, and the Kyohei Fujita Museum of Glass in Japan houses 100 of his works.",
	 portrait: "Glass/Fujita/fujitaPortrait.png",
	 youtube: "",
	 images:[	
	   {
         alt: "Flower Storm",
         urlSmall: "Glass/Fujita/f_fs-small.jpg",
         urlLarge: "Glass/Fujita/f_fs.jpg"
       },
	   {
         alt: "Flower Storm",
         urlSmall: "Glass/Fujita/f_fs2-small.jpg",
         urlLarge: "Glass/Fujita/f_fs2.jpg"
       },       
	   {
         alt: "GreenBox/Kaguyahime",
         urlSmall: "Glass/Fujita/f_kag-small.jpg",
         urlLarge: "Glass/Fujita/f_kag.jpg"
       },     
       {
         alt: "GreenBox/Kaguyahime",
         urlSmall: "Glass/Fujita/f_kag2-small.jpg",
         urlLarge: "Glass/Fujita/f_kag2.jpg"
       },     
       {
         alt: "Blue Box",
         urlSmall: "Glass/Fujita/f_bb1-small.jpg",
         urlLarge: "Glass/Fujita/f_bb1.jpg"
       },  
       {
         alt: "Blue Box",
         urlSmall: "Glass/Fujita/f_bb2-small.jpg",
         urlLarge: "Glass/Fujita/f_bb2.jpg"
       }, 
       {
         alt: "Blue Box",
         urlSmall: "Glass/Fujita/f_bb3-small.jpg",
         urlLarge: "Glass/Fujita/f_bb3.jpg"
       },
       {
         alt: "Blue Box",
         urlSmall: "Glass/Fujita/f_bb4-small.jpg",
         urlLarge: "Glass/Fujita/f_bb4.jpg"
       },
       {
         alt: "Blue Box",
         urlSmall: "Glass/Fujita/f_bb5-small.jpg",
         urlLarge: "Glass/Fujita/f_bb5.jpg"
       },
       {
         alt: "Blue Box",
         urlSmall: "Glass/Fujita/f_bb6-small.jpg",
         urlLarge: "Glass/Fujita/f_bb6.jpg"
       },
       {
         alt: "Violet Casket",
         urlSmall: "Glass/Fujita/f_vc-small.jpg",
         urlLarge: "Glass/Fujita/f_vc.jpg"
       } 
       ]
    },
    {id: "wolff",
	 name: "Ann Wolff",
	 description:"Ann Wolff's contemporary glass work stands out because she uses the natural characteristics of glass to her advantage - contours, surfaces, light penetrating through layers, symmetry, etc. She investigates the relation between inside and outside not only in her glasswork, but also metaphorically as an exploration of self.",
	 portrait: "Glass/AWolff/awPortrait.jpg",
	 youtube: "",
	 images:[	
	 {
         alt: "Print",
         urlSmall: "Glass/AWolff/aw_print-small.jpg",
         urlLarge: "Glass/AWolff/aw_print.jpg"
       },
       {
         alt: "Double Head",
         urlSmall: "Glass/AWolff/aw_doubleHead-small.jpg",
         urlLarge: "Glass/AWolff/aw_doubleHead.jpg"
       },
       {
         alt: "Double Head and Print",
         urlSmall: "Glass/AWolff/aw_doubleHead_print-small.jpg",
         urlLarge: "Glass/AWolff/aw_doubleHead_print.jpg"
       }
	]	
	},
	{id: "myers",
	 name: "Joel Phillip Myers",
	 description:"Joel Phillip Myers is a self taught glass blower and a strong teacher with many successful students. His art is characterized by exquisite craftsmanship and a strong sense of formal design, and as both an artist and teacher, Joel Philip Meyers is a seminal figure in the studio glass movement.",
	 portrait: "Glass/JMyers/jplPortrait.jpg",
	 youtube: "https://www.youtube.com/v/1_KnW4_WAso",
	 images:[	
	   {
         alt: "Torpedo Vase",
         urlSmall: "Glass/JMyers/torpedoVase1-small.jpg",
         urlLarge: "Glass/JMyers/torpedoVase1.jpg"
       },
        {
         alt: "Torpedo Vase",
         urlSmall: "Glass/JMyers/torpedoVase3-small.jpg",
         urlLarge: "Glass/JMyers/torpedoVase3.jpg"
       },
        {
         alt: "1984 Vessel",
         urlSmall: "Glass/JMyers/untited1984Vessel-small.jpg",
         urlLarge: "Glass/JMyers/untited1984Vessel.jpg"
       },
       {
         alt: "Vessel",
         urlSmall: "Glass/JMyers/vessel1-small.jpg",
         urlLarge: "Glass/JMyers/vessel1.jpg"
       },
       {
         alt: "Vessel",
         urlSmall: "Glass/JMyers/vessel2-small.jpg",
         urlLarge: "Glass/JMyers/vessel2.jpg"
       },
       {
         alt: "Vessel",
         urlSmall: "Glass/JMyers/vessel3-small.jpg",
         urlLarge: "Glass/JMyers/vessel3.jpg"
       },
       {
         alt: "Vessel",
         urlSmall: "Glass/JMyers/vessel4-small.jpg",
         urlLarge: "Glass/JMyers/vessel4.jpg"
       },
       {
         alt: "Vessel",
         urlSmall: "Glass/JMyers/vessel1980-small.jpg",
         urlLarge: "Glass/JMyers/vessel1980.jpg"
       }
	]	
	},
	{id: "surgent",
	 name: "April Surgent",
	 description:"Ann Wolff's contemporary glass work stands out because she uses the natural characteristics of glass to her advantage - contours, surfaces, light penetrating through layers, symmetry, etc. She investigates the relation between inside and outside not only in her glasswork, but also metaphorically as an exploration of self.",
	 portrait: "Glass/ASurgent/asPortrait.png",
	 youtube: "",
	 images:[	
	   {
         alt: "Coming of Spring and We Can Wait Together",
         urlSmall: "Glass/ASurgent/comingOfSpringAndWeCanWaitTogether-small.jpg",
         urlLarge: "Glass/ASurgent/comingOfSpringAndWeCanWaitTogether.jpg"
       },
	   {
         alt: "Decadal Time Scale",
         urlSmall: "Glass/ASurgent/decadalTimeScale-small.jpg",
         urlLarge: "Glass/ASurgent/decadalTimeScale.jpg"
       },
       {
         alt: "High Latitude South",
         urlSmall: "Glass/ASurgent/highLatitudeSouth-small.jpg",
         urlLarge: "Glass/ASurgent/highLatitudeSouth.jpg"
       },
       {
         alt: "Industrial Society at Work",
         urlSmall: "Glass/ASurgent/industrialSocietyAtWork-small.jpg",
         urlLarge: "Glass/ASurgent/industrialSocietyAtWork.jpg"
       },
       {
         alt: "Like Night and Day",
         urlSmall: "Glass/ASurgent/likeNightAndDay-small.jpg",
         urlLarge: "Glass/ASurgent/likeNightAndDay.jpg"
       },  
       {
         alt: "On the Navigation of Neumayer Channel",
         urlSmall: "Glass/ASurgent/onTheNavigationOfNeumayerChannel-small.jpg",
         urlLarge: "Glass/ASurgent/onTheNavigationOfNeumayerChannel.jpg"
       }                    
	]	
	},
	{id: "libensky",
	 name: "Jaroslava Brychtova & <br> Stanislav Libensky",
	 description:"Stanislav Libenský, painter and glass artist, and Jaroslava Brychtová, sculptor, are contemporary czech artists. As a team, Libensky would paint and sketch the designs and Brychtova would make sculptures from the designs. Their work is characterized by simple block shapes and subtle colors.",
	 portrait: "Glass/libensky/JLPortrait.png",
	 youtube: "",
	 images:[	
	   {
         alt: "Arcus",
         urlSmall: "Glass/libensky/arcusPhoto1-small.jpg",
         urlLarge: "Glass/libensky/arcusPhoto1.jpg"
       },
	   {
         alt: "Arcus",
         urlSmall: "Glass/libensky/arcusPhoto2-small.jpg",
         urlLarge: "Glass/libensky/arcusPhoto2.jpg"
       },
       {
         alt: "Arcus",
         urlSmall: "Glass/libensky/arcusPhoto3-small.jpg",
         urlLarge: "Glass/libensky/arcusPhoto3.jpg"
       },
       {
         alt: "Free Through",
         urlSmall: "Glass/libensky/freeThrough1-small.jpg",
         urlLarge: "Glass/libensky/freeThrough1.jpg"
       },
       {
         alt: "Free Through",
         urlSmall: "Glass/libensky/freeThrough2-small.jpg",
         urlLarge: "Glass/libensky/freeThrough2.jpg"
       },
       {
         alt: "Free Through",
         urlSmall: "Glass/libensky/freeThrough3-small.jpg",
         urlLarge: "Glass/libensky/freeThrough3.jpg"
       },
       {
         alt: "The Kiss",
         urlSmall: "Glass/libensky/theKiss-small.jpg",
         urlLarge: "Glass/libensky/theKiss.jpg"
       },
       {
         alt: "The Kiss",
         urlSmall: "Glass/libensky/theKiss2-small.png",
         urlLarge: "Glass/libensky/theKiss2.png"
       }                
	]	
	},
	{id: "bachorik",
	 name: "Vladimir Bachorik",
	 description:"Vladimir Bachorik's work focuses on shapes, filtering light, and transparency. ",
	 portrait: "Glass/VBachorik/vbPortrait.jpg",
	 youtube: "",
	 images:[	
	  {
         alt:"Penetration",
         urlSmall: "Glass/VBachorik/vb_penetration-small.jpg",
         urlLarge: "Glass/VBachorik/vb_penetration.jpg"
       }
	]	
	},
	{id: "micheluzzi",
	 name: "Massimo Micheluzzi",
	 description:"Micheluzzi is a Muranese artist who uses traditional techniques to achieve  a uniquely modern aesthetic.",
	 portrait: "Glass/micheluzzi/mmPortrait.jpg",
	 youtube: "",
	 images:[	
	  {
         alt:"Blue",
         urlSmall: "Glass/micheluzzi/m_blue-small.jpg",
         urlLarge: "Glass/micheluzzi/m_blue.jpg"
       },
	  {
         alt:"Black and White",
         urlSmall: "Glass/micheluzzi/m_bw-small.jpg",
         urlLarge: "Glass/micheluzzi/m_bw.jpg"
       },     
       {
         alt:"Green",
         urlSmall: "Glass/micheluzzi/m_green-small.jpg",
         urlLarge: "Glass/micheluzzi/m_green.jpg"
       },   
       {
         alt:"Noble Effort",
         urlSmall: "Glass/micheluzzi/m_nobleEffort1-small.jpg",
         urlLarge: "Glass/micheluzzi/m_nobleEffort1.jpg"
       },  
       {
         alt:"",
         urlSmall: "Glass/micheluzzi/micheluzzi_19136t-small.jpg",
         urlLarge: "Glass/micheluzzi/micheluzzi_19136t.jpg"
       },  
	]	
	},
	{id: "sibony",
	 name: "Anne-Lise Riond Sibony",
	 description:"These pieces are part of a group of pieces called Cellula by Ann-Lise Riond Sibony, a glass artist based in Paris. The theme is cell, the smallest living unit. ",
	 portrait: "Glass/ALise/asPortrait.jpg",
	 youtube: "",
	 images:[	
	  {
         alt:"Checked Cell Pair",
         urlSmall: "Glass/ALise/as_checked-small.jpg",
         urlLarge: "Glass/ALise/as_checked.jpg"
       },
       {
         alt:"Checked Cell Pair",
         urlSmall: "Glass/ALise/as_checked2-small.jpg",
         urlLarge: "Glass/ALise/as_checked2.jpg"
       },
       {
         alt:"Checked Cell Turquoise",
         urlSmall: "Glass/ALise/as_turquoise-small.jpg",
         urlLarge: "Glass/ALise/as_turquoise.jpg"
       }
	]	
	},
	{id: "marquis",
	 name: "Richard Marquis",
	 description:"Richard Marquis is an American studio glass artist who was born September 17, 1945 in Bumble Bee, Arizona. He studied both ceramics and glass, and his modern glass creations tend towards the humorous, and often incorporate other materials.",
	 portrait: "Glass/rMarquis/rmPortrait.jpg",
	 youtube: "https://www.youtube.com/v/qXbYhhNnHlo",
	 images:[	
	  {
         alt:"",
         urlSmall: "Glass/rMarquis/rmaDetail-small.jpg",
         urlLarge: "Glass/rMarquis/rmaDetail.jpg"
       },
       {
         alt:"",
         urlSmall: "Glass/rMarquis/rmaDetail3-small.jpg",
         urlLarge: "Glass/rMarquis/rmaDetail3.jpg"
       },
       {
         alt:"",
         urlSmall: "Glass/rMarquis/rmaLumpy-small.jpg",
         urlLarge: "Glass/rMarquis/rmaLumpy.jpg"
       },
       {
         alt:"",
         urlSmall: "Glass/rMarquis/rmaSignature-small.jpg",
         urlLarge: "Glass/rMarquis/rmaSignature.jpg"
       }
	]	
	},
	{id: "clayman",
	 name: "Dan Clayman",
	 description:"Daniel started working with glass during the winter of 1978 at Southern Connecticut State College in New Haven, CT. He now has a studio in Porvidence, RI and his work is collected throughout the United States and abroad.",
	 portrait: "Glass/DClayman/dcPortrait.jpg",
	 youtube: "https://www.youtube.com/v/3UDMPSIz3pc",
	 images:[	
	  {
         alt:"1990",
         urlSmall: "Glass/DClayman/dc-small.jpg",
         urlLarge: "Glass/DClayman/dc.jpg"
       }
	]	
	},
	{id: "marioni",
	 name: "Dante Marioni",
	 description:"Daniel started working with glass during the winter of 1978 at Southern Connecticut State College in New Haven, CT. He now has a studio in Porvidence, RI and his work is collected throughout the United States and abroad.",
	 portrait: "Glass/DMarioni/dmPortrait.jpg",
	 youtube: "https://www.youtube.com/v/M57GxqCwLvQ",
	 images:[	
	  {
         alt:"1990",
         urlSmall: "Glass/DMarioni/dm_acorn-small.jpg",
         urlLarge: "Glass/DMarioni/dm_acorn.jpg"
       }
	]	
	},
	{id: "moje",
	 name: "Klaus Moje",
	 description:"Klaus Moje is a German born, Australian kilnformed glass artist and educator. Moje was the founding workshop head of the Australian National University School of Art Glass Workshop in Canberra, Australia. He is known for his use of the fused glass technique.",
	 portrait: "Glass/Moje/kmPortrait.jpg",
	 youtube: "",
	 images:[	
	  {
         alt:"",
         urlSmall: "Glass/Moje/evanston-small.jpg",
         urlLarge: "Glass/Moje/evanston.jpg"
       },
	  {
         alt:"Untitled 11",
         urlSmall: "Glass/Moje/plate2-small.jpg",
         urlLarge: "Glass/Moje/plate2.jpg.jpg"
       },
	  {
         alt:"Murrini Plate",
         urlSmall: "Glass/Moje/murriniPlate1-small.jpg",
         urlLarge: "Glass/Moje/murriniPlate1.jpg"
       },
	  {
         alt:"Murrini Plate",
         urlSmall: "Glass/Moje/murriniPlate2-small.jpg",
         urlLarge: "Glass/Moje/murriniPlate2.jpg"
       },
	  {
         alt:"Murrini Plate",
         urlSmall: "Glass/Moje/murriniPlate3-small.jpg",
         urlLarge: "Glass/Moje/murriniPlate3.jpg"
       },
 	  {
         alt:"Nijima",
         urlSmall: "Glass/Moje/nijima2-small.jpg",
         urlLarge: "Glass/Moje/nijima2.jpg"
       },      
	]	
	},
	{id: "tagliapietra",
	 name: "Lino Tagliapietra",
	 description:"Lino Tagliapietra  is an influential Italian glass artist and master glassmaker who is recognized for his skills and talents throughout the world. He has a very unique style and continues as both an artist and a teacher.",
	 portrait: "Glass/Tagliapietra/ltPortrait.jpg",
	 youtube: "",
	 images:[	
	  {
         alt:"Madras",
         urlSmall: "Glass/Tagliapietra/madras-small.jpg",
         urlLarge: "Glass/Tagliapietra/madras.jpg"
       },
	  {
         alt:"Tholtico",
         urlSmall: "Glass/Tagliapietra/tholtico-small.jpg",
         urlLarge: "Glass/Tagliapietra/tholtico.jpg"
       },
	  {
         alt:"Tholtico",
         urlSmall: "Glass/Tagliapietra/tholtico2-small.jpg",
         urlLarge: "Glass/Tagliapietra/tholtico2.jpg"
       }
	]	
	},
]



// opens artist div when artist p is clicked on
 $("#artistNames p").click(function(){
 	var artist = $(this).attr("id");
 	$("#openOnClick").show();
 	for (var i=0;i<artistByID.length; i++) {
 		if (artistByID[i].id==artist) {
 			if( $('#photos2 img').attr('src')!=artistByID[i].images[0].urlSmall) {
 				$("#gallery").empty();
 				}
 				
 			//count number of images that are supposed to be in the gallery
 			var limitCount = artistByID[i].images.length;
 			
 			//count number of images that are currently in gallery
 			var nowCount =  $("#gallery img").length;
 			
 			//if nowCount is less than limitCount, append images... otherwise, dont do anything
 			if (nowCount < limitCount || nowCount != limitCount){
 			formatItems(artistByID[i].images);
 			}
 		 	
			if (artistByID[i].description != "") { 
				$("#description").text(artistByID[i].description);
			}
			if (artistByID[i].name != "") {
				$("#name").html(artistByID[i].name);
				}
			if (artistByID[i].portrait != ""){
				$("#openOnClick .artistPortrait").attr('src', artistByID[i].portrait);
			}
			if (artistByID[i].youtube != ""){
				$("#iframe").show();
				$("#iframe").attr('src', artistByID[i].youtube);
			}
			else if (artistByID[i].youtube == ""){
				$("#iframe").hide();
 			}
 	}
  	}
 });
 


// populates gallery with thumbnails from each artist data aray/object
function formatItems(album) {
	for (var i=0; i < album.length; i++ ) {
	pgal = album[i];
	var cloned = $("#template").clone(true).appendTo("#gallery");
	cloned.find('#photos2 img').attr('src', pgal.urlSmall);
	cloned.find('#photos2 img').attr('alt', pgal.alt);
	cloned.find('#photos2 img').attr("data-index",i);
	cloned.show();
	}
}

//takes two arguments, shows infobix and overlay and changes image src/alt
function displayInfoBox(index, URL) {
	/*shows/un-hides the #infobox*/
	$("#infobox").show();
	$("#overlay").show();
	
  	var alt = $('#photos2 img').attr('alt');

 		 	$("#titleInBox").text(index);

	$("#infobox img").attr("src", URL);
} 

$(function(){
	/*attach this function to all the thumbnails*/
	$("img").click(function(){
	/*get the src attribute from the thumbnails that was clicked on, 
	and invoke the displayInfoBox function using largeURL as argument*/
// 	var index = $(this).attr("data-index");
	var smallURL = $(this).attr('src');
	var largeURL = smallURL.replace('-small',"");
	
	//index variable is actually just alt
	var index = $(this).attr('alt');
	// 

	displayInfoBox(index, largeURL);
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