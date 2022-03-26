var mySwiper = new Swiper('.slider-touch', {
	autoplay: true,//可选选项，自动滑动
	pagination: {
    	el: '.swiper-pagination',//分页器
  	},
  	loop : true,//无缝
  	autoplay: {
  		delay: 3000,
    	disableOnInteraction: false,
  	},
  	speed:1000,//切换速度
  	initialSlide :0,//初始开是第0张
});
var mySwiper1 = new Swiper('.advert-pro1', {
	autoplay: true,//可选选项，自动滑动
	pagination: {
    	el: '.swiper-pagination1',//分页器
  	},
  	loop : true,//无缝
  	autoplay: {
  		delay: 3000,
    	disableOnInteraction: false,
  	},
  	speed:1000,//切换速度
  	initialSlide :0,//初始开是第0张
});
var mySwiper2 = new Swiper('.advert-pro2', {
	autoplay: true,//可选选项，自动滑动
	pagination: {
    	el: '.swiper-pagination2',//分页器
  	},
  	loop : true,//无缝
  	autoplay: {
  		delay: 3000,
    	disableOnInteraction: false,
  	},
  	speed:1000,//切换速度
  	initialSlide :0,//初始开是第0张
});
var mySwiper3 = new Swiper('.advert-pro3', {
	autoplay: true,//可选选项，自动滑动
	pagination: {
    	el: '.swiper-pagination3',//分页器
  	},
  	loop : true,//无缝
  	autoplay: {
  		delay: 3000,
    	disableOnInteraction: false,
  	},
  	speed:1000,//切换速度
  	initialSlide :0,//初始开是第0张
});
var mySwiper4 = new Swiper('.secskill-con', {
	freeMode : true,
	slidesPerView :3.5,
	freeModeMomentumRatio : .3,//设置动量
	freeModeMomentumVelocityRatio : .3,//惯性
});
/*导航与返回顶部*/
var seaBg = document.getElementById('sea-bg');
var backTop = document.getElementById('backTop')
window.onscroll = function(){
	var wh =0;
	if(document.body.scrollTop){
		wh = document.body.scrollTop;
	}else{
		wh = document.documentElement.scrollTop
	}
	
	if(wh>0){
		if(wh>300){
			seaBg.style.opacity = .9;
		}else{
			seaBg.style.opacity = wh/350;
		}
	}else{
		seaBg.style.opacity = 0;
	}
	wh>500?backTop.style.display = 'block':backTop.style.display = 'none';
	
	backTop.onclick = function(){
		if(document.body.scrollTop){
			document.body.scrollTop = 0;
		}else{
			document.documentElement.scrollTop = 0;
		}
	}
};
//掌上秒杀倒计时
//设置结束时间
var endTime = new Date();
endTime.setFullYear(2018);
endTime.setMonth(3);
endTime.setDate(14);
endTime.setHours(12);
endTime.setMinutes(0);
endTime.setSeconds(0);
var endT = endTime.getTime();//获取结束时间

var skHour = document.getElementById('skHour'); 
var skMin = document.getElementById('skMin'); 
var skSec = document.getElementById('skSec'); 

function changeTime(time,obj1,obj2,obj3){
	var nowTime = new Date();
	var sec = ( time - nowTime.getTime())/1000;//把差值时间换算成秒;
	
	var iHour = Math.floor(sec/3600);//还剩几小时
	var iMin = Math.floor(sec%3600/60);//还剩几分种
	var iSec = Math.floor(sec%60);//还剩几秒种
	if(sec>0){
		obj1.innerHTML = toTwo(iHour);
		obj2.innerHTML = toTwo(iMin);
		obj3.innerHTML = toTwo(iSec);
	}else{
		clearInterval(timer);
	}
}
changeTime(endT,skHour,skMin,skSec);
var timer = setInterval(function(){
	changeTime(endT,skHour,skMin,skSec);
},1000);
//补零
function toTwo(n){
	return n<10?'0'+n:''+n;
}
/*补零第二种
function(time,n){
var str = ''+time;
	while(str.length<n){
		str = '0'+time
	}
	return str;
}
*/
