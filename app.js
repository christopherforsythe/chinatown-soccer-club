const navSlide = ()=> {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
//toggle nav
 burger.addEventListener("click", ()=> {
        //toggle nav
    nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle("toggle");
    });
}

navSlide();


const carouselSlide = document.querySelector('.image-carousel');
const carouselImages = document.querySelectorAll('.image-carousel img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


//button listeners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});



.about-main-container {
    margin-top: 0px;
    display: grid;
    grid-template-columns: 45% 55%;
    grid-auto-rows: minmax(175px, auto);
    column-gap: 10px;
    overflow: hidden;
}


.about-image-box {
    overflow: hidden;
    height: 85%;
}

.badge-box {
    align-items: center;
    justify-content: center;
}

#badge {
    height: 175px;
    width: 175px;
}

.about-box1 {
    width: 55%;
    align-items: center;
    margin: auto;
}

.about-box2 {
    width: 60%;
    position: relative;
    left: 30%;
}


.video-box {
    margin: auto;
    background-color: cadetblue;


}

.video1 {
    margin: 0 auto;
    align-self: center;
    width: 80%;
}

.about-main-container {
    margin-top: 0px;
    display: grid;
    grid-template-columns: 45% 55%;
    column-gap: 10px;
    overflow: hidden;
}


.about-image-box {
    overflow: hidden;
    height: 85%;
}



#badge {
    height: 175px;
    width: 175px;
}

.about-box1 {
    width: 55%;
    align-items: center;
    margin: auto;
}

.about-box2 {
    width: 60%;
    position: relative;
    left: 30%;
}


.video-box {
    margin: auto;
    background-color: cadetblue;


}

.video1 {
    margin: 0 auto;
    align-self: center;
    width: 80%;
}

.image-carousel-container {
    position: relative;
    border: 1.5px solid black;
    overflow: hidden;
    position: relative;
    background-color: chartreuse;
}

.image-carousel {
    display: flex;
    width: 100%;
    height: 430px;
}

.image-carousel img {
    width: 100%;
}

#prevBtn {
    position: absolute;
    top: 50%;
    z-index: 10;
    left: 5%;
    font-size: 30px;
    color: white;
    opacity: 0.9;
    cursor: pointer;
}

#nextBtn {
    position: absolute;
    top: 50%;
    z-index: 10;
    right: 5%;
    font-size: 30px;
    color: white;
    opacity: 0.9;
    cursor: pointer;
}

#h2-about {
    padding-bottom: 25px;
}

#p-about {
    letter-spacing: 0.7px;
    padding-bottom: 18px;
    font-size: 14px;
}

#p-about1 {
    letter-spacing: 0.7px;
    font-size: 14px;
}


<div class="box video-box">
    <iframe class="about-video" src="https://player.vimeo.com/video/180634920" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>

 <div class="box about-box2">
    <p>the Chinatown Soccer Club is one of the most inspirational soccer clubs around. It was founded in 2002, when adidas invited crews from New York's creative industry to take part in the Fanatic Tournament.</p>
 </div>