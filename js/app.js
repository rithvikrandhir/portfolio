
let moveAmount = '-300%';
let controller = new ScrollMagic.Controller();
let introAnimation = new TimelineMax()	
	.to(".section-slides", 6, {x: "-65%", ease: Linear.easeNone}, 0)
	// .pause(1)
	.to(".side-panel-2", 1, {width: "20%", ease: Circ.easeOut}, 2)
	.fromTo(".para-group", 0.5, {opacity: 0.2}, {opacity: 1}, 2.5)
	.to(".side-panel-3", 1, {width: "20%", ease: Circ.easeOut}, 4.5)
	.fromTo(".para2-group", 0.5, {opacity: 0.2}, {opacity: 1}, 5)
	//.to(".section-slides", 1, {x: "-64%", ease: Expo.easeOut});

window.addEventListener('load', ()=> {
	if (window.innerWidth < 800){
		moveAmount = '-500%';
		console.log("fired");
	}
	else{
		moveAmount = '-300%';
	}
	
})

let workAnimation = new TimelineMax()
	.to(".project1", 0.05, {x: moveAmount}, 0)
	.to(".project1 .project-image", 0.01, {y: '60%'}, 0)
	.from(".project1 .project-name", 0.01, {opacity:1}, 0)
	.from(".project1 h1:first-child", 0.01, {opacity:1, color: '#fff'}, 0)
	.from(".project1 .content", 0.01, {opacity:1}, 0)

	.to(".project2", 0.05, {x: moveAmount}, 0)
	.to(".project2 .project-image", 0.01, {y: '0%'}, 0)
	.to(".project2 .project-name", 0.01, {opacity:1}, 0)
	.to(".project2 h1:first-child", 0.01, {opacity:1, color: '#fff'}, 0)
	.to(".project2 .project-image", 0.01, {y: '60%'}, 0.01)
	.to(".project2 .content", 0.01, {opacity:1}, 0)
	.to(".project2 .project-name", 0.01, {opacity:0}, 0.01)
	.to(".project2 .content", 0.01, {opacity:0}, 0.01)
	.to(".project2 h1:first-child", 0.01, {opacity:0.1, color: '#fff'}, 0.01)
	
	.to(".project3", 0.05, {x: moveAmount}, 0)
	.to(".project3 .project-image", 0.01, {y: '0%'}, 0.01)
	.to(".project3 .project-name", 0.01, {opacity:1}, 0.01)
	.to(".project3 h1:first-child", 0.01, {opacity:1, color: '#fff'}, 0.01)
	.to(".project3 .project-image", 0.02, {y: '60%'}, 0.02)
	.to(".project3 .content", 0.01, {opacity:1}, 0.01)
	.to(".project3 .project-name", 0.01, {opacity:0}, 0.02)
	.to(".project3 .content", 0.01, {opacity:0}, 0.02)
	.to(".project3 h1:first-child", 0.01, {opacity:0.1, color: '#fff'}, 0.02)

	.to(".project4", 0.05, {x: moveAmount }, 0)
	.to(".project4 .project-image", 0.01, {y: '0%'}, 0.02)
	.to(".project4 .project-name", 0.02, {opacity:1}, 0.02)
	.to(".project4 .content", 0.01, {opacity:1}, 0.02)
	.to(".project4 h1:first-child", 0.01, {opacity:1, color: '#fff'}, 0.02)
	.to(".project4 .project-image", 0.02, {y: '60%'}, 0.04)
	.to(".project4 .project-name", 0.01, {opacity:0}, 0.04)
	.to(".project4 .content", 0.01, {opacity:0}, 0.04)
	.to(".project4 h1:first-child", 0.01, {opacity:0.1, color: '#fff'}, 0.04)

	.to(".project5", 0.05, {x: moveAmount}, 0)
	.to(".project5 .project-image", 0.01, {y: '0%'}, 0.03)
	.to(".project5 .project-name", 0.02, {opacity:1}, 0.04)
	.to(".project5 .content", 0.01, {opacity:1}, 0.04)
	.to(".project5 h1:first-child", 0.01, {opacity:1, color: '#fff'}, 0.04);
	

new ScrollMagic.Scene({
				triggerElement: ".main-section",
				triggerHook: "onEnter",
				triggerHook: 0,
				duration: "600%"
			})
			.setPin("#slideContainer2")
			.setTween(introAnimation)
			 //.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

new ScrollMagic.Scene({
				triggerElement: ".work-section",
				triggerHook: "onEnter",
				triggerHook: 0,
				duration: "600%"
			})
			.setPin(".work-section")
			.setTween(workAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);

window.addEventListener("mousemove", onMouseMove);

function mapHueX(x){
	const percentageX = x / window.innerWidth;
	return percentageX * 360;
}
function mapHueY(y){
	const percentageY = y / window.innerWidth;
	return percentageY * 360;
}

function onMouseMove(event){
	const hueX = mapHueX(event.clientX);
	const hueY = mapHueY(event.clientY);

	TweenMax.to(
		".layer2, .highlight-word-1", 
		1,
		{
			color: `hsl(${hueX}, 100%, 50%)`,
			
		}
	);
	TweenMax.to(
		".layer3, .highlight-word-2", 
		1,
		{
			 color: `hsl(${hueY}, 100%, 50%)`
		}
	);

}
