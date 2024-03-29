var names = ['Kur0','jericjan','fcantil']


for (var name of names) {	
	var parentDiv = $("<div></div>")
	parentDiv.attr("class",`textParent`)

	for (var letter of name) {
		var letterElement = $("<h1></h1>").text(letter);  
		letterElement.css("display", "none")
		
		letterElement.css("opacity", "0")	
		parentDiv.append(letterElement)
		$("#nameDiv").append(parentDiv)
	}
}





/* function wavyText(index) {
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
wavyText(1) */

var namesCount = names.length

var nameTimeline = anime.timeline({
	loop: false,
	complete: function(anim) {
		console.log("other end")  
		nameTimeline.restart()
		nameTimeline.pause()
		nameTimeline.seek(400)
		nameTimeline.play()	
	}
});

var duration = 2000;
//var timestamps = [0, duration, duration*2, duration*3]
var timestamps = [0,1500,3000,5400]

timestamps.forEach(function(startAt, idx) {
	var staggerDelay = 100;
	var duration = 2000;
	if (idx == 3) {
		nameTimeline.add({
		duration:0,
		complete: function(anim) {
			console.log("THE END")
			nameTimeline.restart()
			nameTimeline.pause()
			nameTimeline.seek(400)
			nameTimeline.play()
		}
		}, startAt)
	} else {
		nameTimeline.add({
			targets:`#nameDiv > div:nth-child(${idx+1}) > h1`,
			translateY:[0,-20,20,0],
			opacity:[0,1,1,0],
			duration:2000,
			delay: anime.stagger(staggerDelay),
			easing:"easeInOutCubic",
			begin: function(anim) {
				console.log("starting")
				anim.animatables.forEach(function(letter) {
					$(letter.target).css("display","inline")
				})
			},			
		}, startAt)	
		console.log("duration is now: ",nameTimeline.duration)
	}
})

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
		scaleY:[1,10,1,10,1,10,1],
		opacity:[0,1,1,1,1,1,0],
		easing:"easeInOutCubic"
	  })

});


function animateTriangle() {
	anime({
		targets:'.triangle',
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
		duration:function() {
			return anime.random(250,1000)
		},
		delay: function() {
			return anime.random(0,250)
		},
		easing:'easeInOutElastic',
		complete: function(anim) {
			animateTriangle()
		}
		
	})
}

animateTriangle()


var wave1 = "M0,160L6.2,181.3C12.3,203,25,245,37,272C49.2,299,62,309,74,272C86.2,235,98,149,111,117.3C123.1,85,135,107,148,149.3C160,192,172,256,185,261.3C196.9,267,209,213,222,197.3C233.8,181,246,203,258,224C270.8,245,283,267,295,234.7C307.7,203,320,117,332,106.7C344.6,96,357,160,369,170.7C381.5,181,394,139,406,138.7C418.5,139,431,181,443,213.3C455.4,245,468,267,480,256C492.3,245,505,203,517,160C529.2,117,542,75,554,96C566.2,117,578,203,591,208C603.1,213,615,139,628,138.7C640,139,652,213,665,240C676.9,267,689,245,702,245.3C713.8,245,726,267,738,261.3C750.8,256,763,224,775,213.3C787.7,203,800,213,812,197.3C824.6,181,837,139,849,133.3C861.5,128,874,160,886,197.3C898.5,235,911,277,923,288C935.4,299,948,277,960,272C972.3,267,985,277,997,282.7C1009.2,288,1022,288,1034,272C1046.2,256,1058,224,1071,213.3C1083.1,203,1095,213,1108,202.7C1120,192,1132,160,1145,176C1156.9,192,1169,256,1182,277.3C1193.8,299,1206,277,1218,261.3C1230.8,245,1243,235,1255,192C1267.7,149,1280,75,1292,80C1304.6,85,1317,171,1329,197.3C1341.5,224,1354,192,1366,202.7C1378.5,213,1391,267,1403,256C1415.4,245,1428,171,1434,133.3L1440,96L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"

var wave2 = "M0,128L6.2,112C12.3,96,25,64,37,80C49.2,96,62,160,74,197.3C86.2,235,98,245,111,224C123.1,203,135,149,148,149.3C160,149,172,203,185,229.3C196.9,256,209,256,222,229.3C233.8,203,246,149,258,149.3C270.8,149,283,203,295,192C307.7,181,320,107,332,74.7C344.6,43,357,53,369,53.3C381.5,53,394,43,406,53.3C418.5,64,431,96,443,138.7C455.4,181,468,235,480,261.3C492.3,288,505,288,517,277.3C529.2,267,542,245,554,240C566.2,235,578,245,591,208C603.1,171,615,85,628,90.7C640,96,652,192,665,245.3C676.9,299,689,309,702,266.7C713.8,224,726,128,738,122.7C750.8,117,763,203,775,202.7C787.7,203,800,117,812,80C824.6,43,837,53,849,69.3C861.5,85,874,107,886,122.7C898.5,139,911,149,923,138.7C935.4,128,948,96,960,69.3C972.3,43,985,21,997,32C1009.2,43,1022,85,1034,117.3C1046.2,149,1058,171,1071,192C1083.1,213,1095,235,1108,250.7C1120,267,1132,277,1145,272C1156.9,267,1169,245,1182,250.7C1193.8,256,1206,288,1218,293.3C1230.8,299,1243,277,1255,256C1267.7,235,1280,213,1292,218.7C1304.6,224,1317,256,1329,272C1341.5,288,1354,288,1366,277.3C1378.5,267,1391,245,1403,208C1415.4,171,1428,117,1434,90.7L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"

var wave3 = "M0,192L6.2,208C12.3,224,25,256,37,261.3C49.2,267,62,245,74,218.7C86.2,192,98,160,111,144C123.1,128,135,128,148,133.3C160,139,172,149,185,149.3C196.9,149,209,139,222,112C233.8,85,246,43,258,58.7C270.8,75,283,149,295,186.7C307.7,224,320,224,332,240C344.6,256,357,288,369,272C381.5,256,394,192,406,165.3C418.5,139,431,149,443,160C455.4,171,468,181,480,176C492.3,171,505,149,517,160C529.2,171,542,213,554,208C566.2,203,578,149,591,160C603.1,171,615,245,628,282.7C640,320,652,320,665,288C676.9,256,689,192,702,176C713.8,160,726,192,738,197.3C750.8,203,763,181,775,160C787.7,139,800,117,812,133.3C824.6,149,837,203,849,197.3C861.5,192,874,128,886,138.7C898.5,149,911,235,923,277.3C935.4,320,948,320,960,293.3C972.3,267,985,213,997,202.7C1009.2,192,1022,224,1034,229.3C1046.2,235,1058,213,1071,170.7C1083.1,128,1095,64,1108,58.7C1120,53,1132,107,1145,117.3C1156.9,128,1169,96,1182,90.7C1193.8,85,1206,107,1218,128C1230.8,149,1243,171,1255,197.3C1267.7,224,1280,256,1292,229.3C1304.6,203,1317,117,1329,106.7C1341.5,96,1354,160,1366,170.7C1378.5,181,1391,139,1403,128C1415.4,117,1428,139,1434,149.3L1440,160L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"

var wave4 = "M0,32L6.2,42.7C12.3,53,25,75,37,90.7C49.2,107,62,117,74,112C86.2,107,98,85,111,90.7C123.1,96,135,128,148,144C160,160,172,160,185,165.3C196.9,171,209,181,222,176C233.8,171,246,149,258,133.3C270.8,117,283,107,295,122.7C307.7,139,320,181,332,192C344.6,203,357,181,369,176C381.5,171,394,181,406,192C418.5,203,431,213,443,224C455.4,235,468,245,480,256C492.3,267,505,277,517,261.3C529.2,245,542,203,554,154.7C566.2,107,578,53,591,64C603.1,75,615,149,628,176C640,203,652,181,665,192C676.9,203,689,245,702,240C713.8,235,726,181,738,181.3C750.8,181,763,235,775,261.3C787.7,288,800,288,812,266.7C824.6,245,837,203,849,186.7C861.5,171,874,181,886,197.3C898.5,213,911,235,923,218.7C935.4,203,948,149,960,117.3C972.3,85,985,75,997,85.3C1009.2,96,1022,128,1034,170.7C1046.2,213,1058,267,1071,282.7C1083.1,299,1095,277,1108,256C1120,235,1132,213,1145,181.3C1156.9,149,1169,107,1182,96C1193.8,85,1206,107,1218,133.3C1230.8,160,1243,192,1255,197.3C1267.7,203,1280,181,1292,154.7C1304.6,128,1317,96,1329,106.7C1341.5,117,1354,171,1366,176C1378.5,181,1391,139,1403,112C1415.4,85,1428,75,1434,69.3L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"

anime({
  targets: '#wave > svg > path',
  easing: 'easeInOutCirc',
  duration: 7500,
  loop: true,
  d: [
    { value: [wave1, wave2] },
    { value: wave3 },
    { value: wave4 },
    { value: wave1 },
  ],
});



const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = true;

const toggle = () => {
  toggled = !toggled;
  
  //document.getElementById("tiles").toggle("toggled");
}

const handleOnClick = index => {
  toggle();
  
  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index
    })
  });
}

const createTile = index => {
  const tile = document.createElement("div");
  
  tile.classList.add("tile");
  
  tile.style.opacity = toggled ? 0 : 1;
  
  tile.onclick = e => handleOnClick(index);
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

const createGrid = () => {
  wrapper.innerHTML = "";
  
  const size = document.body.clientWidth > 800 ? 50 : 25;
  
  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.querySelector("#tiles").clientHeight / size);
  
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();



function addGridItems(parentSelector, sitesList) {
	sitesList.forEach(function(site) {
		let title = site[0]
		let img = site[1]
		let url = site[2]
		let templateHTML = $($("#itemTemplate").html())
		let template = $(parentSelector).append(templateHTML)	
		let imgElem = templateHTML.children("div").children('a').children('img')
		imgElem.attr('src',`img/${img}`)
		templateHTML.children("p").html(title)
		imgElem.css('cursor','pointer')
		templateHTML.children("div").children('a').attr("href",url)				
	})
}

addGridItems("#sitesGrid", [
	['Unus Annus Age Counter','ageCounter.png','https://jericjan.github.io/unus-annus-age-counter'],
	['YT to MP3 w/ croppable album art','yt2Mp3.png','https://yt-to-mp3-with-croppable-album-art.netlify.app/'],
	['Pomodoro but Better','pomo.png','https://pomodoro-but-better.netlify.app/'],
	['Bad Apple But Browser Windows','bapple.webp','https://bad-apple-but-browser-windows.netlify.app/'],
	['Fubuki Stereo Test','foob.png','https://fubuki-stereo-test.netlify.app/'],
	['Tic Tac Shion!','shion.png','https://tic-tac-shion.netlify.app/']
])

addGridItems("#extensionsGrid", [
	['Kur0\'s Tab Purger','tabPurger.png','https://github.com/jericjan/tab-purger ']
])

addGridItems("#BetterCordGrid", [
	['Beeping DMs','beepingDMs.png','https://github.com/jericjan/BeepingDMs'],
	['Copy Discord Reactions','copyReactions.png','https://github.com/jericjan/CopyDiscordReactions']
])

addGridItems("#dBotGrid", [
	['Kur0 sus bot','susBot.png','https://github.com/jericjan/Kur0bot']
])

addGridItems("#appsGrid", [
	['Honkai CG Extractor','CGExtractor.png','https://github.com/jericjan/honkai-cg-extractor'],
	['File Sorter','fileSorter.png','https://github.com/jericjan/FileSorter'],
	['After DL Shutdown','afterDL.png','https://github.com/jericjan/after-dl-shutdown']
])

addGridItems("#userscriptsGrid", [
	['ismyinternetworking.com (EVA edition)','EVA.png','https://greasyfork.org/en/scripts/431863-ismyinternetworking-com-eva-edition'],
	['Honkai Anti-Entropy VN Scroll Fix','honkai_AE_VN.jpg','https://greasyfork.org/en/scripts/443106-anti-entropy-vn-scroll-fix']
])


fetch('https://api.github.com/repos/jericjan/jericjan.github.io/commits').then(a => a.json())
.then(a => {
	let date = new Date(a[0]['commit']['author']['date'])
	options = {month: 'short', day: 'numeric', year:"numeric" };
    $("#lastUpdated").html(date.toLocaleString("en-US", options))
})

var socialIconsSelector = "#socialsGrid > .item"
$(socialIconsSelector).hover(function() {
	let index = $(socialIconsSelector).index(this)
	anime({
		targets:socialIconsSelector,
		translateY:[0,-20,0],
		duration:600,
		delay:anime.stagger(100, {
			from: index	
		}),
		easing:"easeInOutCubic"
		
	})
}, function() {})


anime({
    targets:"#twitter",
    skewX:20,
    direction:"alternate",
    duration:500,
    easing:'easeInElastic(1, .5)',
	loop:true
})

function animGithub() {
	anime({
		targets:'#github',
		rotate:function() {
			return `+=${anime.random(10,360)}`
		},
		complete: function(anim) {
			animGithub()
		}
	})
}
animGithub()

function animDiscord() {
	anime({
		targets:'#discord',
		scaleY: function() {
			return anime.random(5,15)/10
		},
		complete: function(anim) {
			animDiscord()
		}
	})	
}
animDiscord()

function animYoutube() {
	anime({
		targets:'#youtube',
		scaleX: function() {
			return anime.random(-15,15)/10
		},
		complete: function(anim) {
			animYoutube()
		},
		easing:'easeOutElastic(1, .5)'
	})	
}
animYoutube()

var itemWithBorder = '.item.border'
$('.item.border > div > a').hover(function() {		
	var parent = $(this).parent().parent()
		anime({
			targets: parent[0],
			boxShadow:'0px 0px 0px #ffffffff',
			duration:1000,
			//direction:'alternate',
			begin: function() {
				parent.css("box-shadow","")
			},
			complete: function() {
				parent.css("box-shadow","")
			}
		})

}, function() {
	// console.log("AAAAAAAAA")	
	// anime({
		// targets: $(this).parent().parent()[0],
		// boxShadow:['white 0px 0px 20px','transparent -50px -50x 0px'],
		// duration:1000,
		// easing:"easeOutExpo"
	// })
})


