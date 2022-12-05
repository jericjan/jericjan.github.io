var names = ['Kur0','jericjan','fcantil']


for (var name of names) {	
	var parentDiv = $("<div></div>")
	parentDiv.attr("class",`textParent`)

	for (var letter of name) {
		console.log(letter)
		var letterElement = $("<h1></h1>").text(letter);  
		letterElement.css("display", "none")
		
		letterElement.css("opacity", "0")	
		parentDiv.append(letterElement)
		$("#nameDiv").append(parentDiv)
	}
}



var namesCount = names.length

var delay = 100
var duration = 2000

function wavyText(index) {
var letterCount = names[index-1].length	
// var animDuration = duration+(delay*(letterCount-2))
anime({
  targets:`#nameDiv > div:nth-child(${index}) > h1`,
  translateY:[0,-20,20,0],
  opacity:[0,1,1,0],
  duration:duration,
  delay: anime.stagger(delay),
  easing:"easeInOutCubic",
  begin: function(anim) {
	  console.log("starting")
	  anim.animatables.forEach(function(letter) {
		$(letter.target).css("display","inline")
	  })
  },
  complete: function(anim) {
   console.log('completed : ' + anim.completed)
	  anim.animatables.forEach(function(letter) {
	$(letter.target).css("display","none")
	  })
	  // if (index == namesCount){
		// wavyText(1)
	  // }else{
		// wavyText(index+1)
	  // }
  }  
})
setTimeout(function() {
	if (index == namesCount){
		wavyText(1)
	}else{
		wavyText(index+1)
	}
}, duration)


}
wavyText(1)

var epicDivisorCount = 50
for (var i=1;i<=epicDivisorCount; i++) {
$("#epicDivisorParent").append($("<div class='epicDivisor'></div>"))
$("#map").append($("<div class='epicMap'></div>"))
}

// $('.epicMap').click(function(){
	// alert("CLICKL")
// })

$('.epicMap').click(function(){
    var index = $('.epicMap').index(this)
	anime({
		targets: ".epicDivisor",
		delay: anime.stagger(20, {
		  grid: [epicDivisorCount, 0],
		  from: index
		}),
		//translateY:[0,20,-20,0],
		scaleY:[1,30,1],
		opacity:[0,1,0],
		easing:"easeInOutCubic"
	  })

});


function animateSvg() {
	anime({
		targets:'svg',
		translateX:function(){
			return anime.random(-100,100)
		},
		translateY:function() {
			return anime.random(-100,100)
		},
		rotate:function() {
			return anime.random(0,360)
		},
		scale:function() {
		  return anime.random(25, 100)/100;
		},
		duration:1000,
		//delay: 1000,
		easing:'easeInOutElastic',
		complete: function(anim) {
			animateSvg()
		}
		
	})
}

animateSvg()
// [1,2,3].forEach(function(num) {
	// wavyText(num)
// })