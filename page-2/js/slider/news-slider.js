"use strict"

let position1 = 0;

const sliderToShow1 = 1;
const sliderToScroll1 = 1;
const container1 = document.getElementsByClassName('news__slider')[0];
const track1 = document.getElementsByClassName('news__slider-inner')[0];
const item1 = document.getElementsByClassName('news__slider-item');
const countBtn1 = item1.length;
const btnprev1 = document.getElementsByClassName('news__slider-prev-btn')[0];
const btnnext1 = document.getElementsByClassName('news__slider-next-btn')[0];
const itemWidth1 = parseInt(window.getComputedStyle(container1).width) / sliderToShow1; 
const movePosition1 = sliderToScroll1 * itemWidth1;

for (let i = 0; i < countBtn1; i++){
	item1[i].style.minWidth = itemWidth1 + 'px';
}

btnprev1.onclick = function(){
	const itemLeft1 = Math.abs(position1) / itemWidth1;

	position1 += itemLeft1 >= sliderToScroll1 ? movePosition1 : itemLeft1 * itemWidth1;
	setPosition1();
	checkBtn1();
}

btnnext1.onclick = function(){
	const itemLeft1 = countBtn1 - (Math.abs(position1) + sliderToShow1 * itemWidth1) / itemWidth1;

	position1 -= itemLeft1 >= sliderToScroll1 ? movePosition1 : itemLeft1 * itemWidth1;
	setPosition1();
	checkBtn1();
}

const setPosition1 = () => {
	track1.style.transform = `translateX(${position1}px)`;
};

const checkBtn1 = () =>{
	if(position1 == 0){
		btnprev1.disabled = true;
		btnprev1.style.backgroundColor = "transparent";
		btnprev1.style.borderColor = "#dadada";
		btnprev1.style.color = "#dadada";
	}
	else {
		btnprev1.disabled = false;
		btnprev1.style.borderColor = "#fff";
		btnprev1.style.backgroundColor = "#ffc222";
		btnprev1.style.color = "#fff";
	}
	if (position1 <= -(countBtn1 - sliderToShow1) * itemWidth1) {
		btnnext1.disabled = true;
		btnnext1.style.borderColor = "#dadada";
		btnnext1.style.backgroundColor = "transparent";
		btnnext1.style.color = "#dadada";
	}
	else {
		btnnext1.disabled = false;
		btnnext1.style.borderColor = "#fff";
		btnnext1.style.backgroundColor = "#ffc222";
		btnnext1.style.color = "#fff";
	}

}
checkBtn1();
