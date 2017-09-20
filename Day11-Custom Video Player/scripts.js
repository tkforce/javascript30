
/* Get Our Elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreenButton = player.querySelector('.full_screen_button');
const ranges = player.querySelectorAll('.player__slider');

fetch("https://api.github.com/users/tkforce").then((result)=>{
	console.log(result);
})

/* Build out functions */

function togglePlay(){

	if(video.paused){
		video.play();
	}else{
		video.pause();
	}

}

function updateButton(){

	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;

}

function skip(){

	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){

	video[this.name] = this.value;
}

function handleProgress(){
	const percentage = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percentage}%`;
}
function handleFullScreen(){
	
	video.webkitRequestFullscreen();
	
}


function scrub(e){
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}


/* Hook up the event listners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('expend', handleFullScreen);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach( button => button.addEventListener('click', skip));
fullScreenButton.addEventListener('click', handleFullScreen);



ranges.forEach(range => {range.addEventListener('change', handleRangeUpdate);})
ranges.forEach(range => {range.addEventListener('mousemove', handleRangeUpdate);})

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=> mouseDown && scrub(e) );
progress.addEventListener('mousedown', ()=>{mouseDown = true});
progress.addEventListener('mouseup', ()=>{mouseDown = false});


