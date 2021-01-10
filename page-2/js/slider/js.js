"use strict"

let position = 0;

const sliderToShow = 1;
const sliderToScroll = 1;
const container = document.getElementsByClassName('slider__container')[0];
const track = document.getElementsByClassName('slider__track')[0];
const item = document.getElementsByClassName('slider__item');
const countBtn = item.length;
const btnprev = document.getElementsByClassName('slider__prev-btn')[0];
const btnnext = document.getElementsByClassName('slider__next-btn')[0];
const itemWidth = parseInt(window.getComputedStyle(container).width) / sliderToShow; 
const movePosition = sliderToScroll * itemWidth;

for (let i = 0; i < countBtn; i++){
	item[i].style.minWidth = itemWidth + 'px';
}

btnprev.onclick = function(){
	const itemLeft = Math.abs(position) / itemWidth;

	position += itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;
	setPosition();
	checkBtn();
}

btnnext.onclick = function(){
	const itemLeft = countBtn - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;

	position -= itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;
	setPosition();
	checkBtn();
}

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
};

const checkBtn = () =>{
	if(position == 0){
		btnprev.disabled = true;
		btnprev.style.backgroundColor = "transparent";
	}
	else {
		btnprev.disabled = false;
		btnprev.style.backgroundColor = "#ffc222";
	}
	if (position <= -(countBtn - sliderToShow) * itemWidth) {
		btnnext.disabled = true;
		btnnext.style.backgroundColor = "transparent";
	}
	else {
		btnnext.disabled = false;
		btnnext.style.backgroundColor = "#ffc222";
	}

}
checkBtn();