$(document).ready(function(){
 //progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9' , 
        strokewidth:8,
        stroke: 8,
        duration: 1400,
        from:{color:'#AAA'},
        to: {color:'#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke',state.color);

            let value = Math.round(circle.value()*60);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9' , 
        strokewidth:8,
        stroke: 8,
        duration: 1600,
        from:{color:'#AAA'},
        to: {color:'#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke',state.color);

            let value = Math.round(circle.value()*254);

            circle.setText(value);
        }
    });


    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9' , 
        strokewidth:8,
        stroke: 8,
        duration: 1800,
        from:{color:'#AAA'},
        to: {color:'#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke',state.color);

            let value = Math.round(circle.value()*100);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9' , 
        strokewidth:8,
        stroke: 8,
        duration: 2000,
        from:{color:'#AAA'},
        to: {color:'#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke',state.color);

            let value = Math.round(circle.value()*5000);

            circle.setText(value);
        }
    });

    //iniciando o loader quando o usuario chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop ==0){
         
            
    circleA.animate(1.0);

    circleB.animate(1.0);

    circleC.animate(1.0);

    circleD.animate(1.0);

    stop = 1;
    
    }


    });


//Parallax

setTimeout(function(){

    $('#data-area').parallax({imageSrc:'img/cidadeparallax.png'});
    $('#apply-area').parallax({imageSrc:'img/pattern.png'});
},250);

});

//Scroll
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}