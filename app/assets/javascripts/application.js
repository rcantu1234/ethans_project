// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

  function Slider( element ) {
  this.el = document.querySelector( element );
  this.init();
}

Slider.prototype = {
  init: function() {
    this.links = this.el.querySelectorAll( "#slider-nav a" );
    this.wrapper = this.el.querySelector( "#slider-wrapper" );
    this.navigate();
  },
  navigate: function() {

    for( var i = 0; i < this.links.length; ++i ) {
      var link = this.links[i];
      this.slide( link );
    }
  },

  animate: function( slide ) {
    var parent = slide.parentNode;
    var caption = slide.querySelector( ".caption" );
    var captions = parent.querySelectorAll( ".caption" );
    for( var k = 0; k < captions.length; ++k ) {
      var cap = captions[k];
      if( cap !== caption ) {
        cap.classList.remove( "visible" );
      }
    }
    caption.classList.add( "visible" );
  },

  slide: function( element ) {
    var self = this;
    element.addEventListener( "click", function( e ) {
      e.preventDefault();
      var a = this;
      self.setCurrentLink( a );
      var index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
      var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );

      self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
      self.animate( currentSlide );

    }, false);
  },
  setCurrentLink: function( link ) {
    var parent = link.parentNode;
    var a = parent.querySelectorAll( "a" );

    link.className = "current";

    for( var j = 0; j < a.length; ++j ) {
      var cur = a[j];
      if( cur !== link ) {
        cur.className = "";
      }
    }
  }
};

document.addEventListener( "DOMContentLoaded", function() {
  var aSlider = new Slider( "#slider" );

});

//1. set ul width
//2. image when click prev/next button
var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;


function init(){
  ul = document.getElementById('image_slider');
  li_items = ul.children;
  imageNumber = li_items.length;
  imageWidth = li_items[0].children[0].clientWidth;
  ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
  prev = document.getElementById("prev");
  next = document.getElementById("next");
  //.onclike = slide(-1) will be fired when onload;
  /*
  prev.onclick = function(){slide(-1);};
  next.onclick = function(){slide(1);};*/
  prev.onclick = function(){ onClickPrev();};
  next.onclick = function(){ onClickNext();};
}

// function init(){
//   ul = document.getElementById('image_slider');
//   li_items = ul.children;
//   imageNumber = li_items.length;
//   imageWidth = li_items[0].children[0].clientWidth;
//   ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
//   prev2 = document.getElementById("prev2");
//   next2 = document.getElementById("next2");
//   //.onclike = slide(-1) will be fired when onload;
//   /*
//   prev.onclick = function(){slide(-1);};
//   next.onclick = function(){slide(1);};*/
//   prev2.onclick = function(){ onClickPrev();};
//   next2.onclick = function(){ onClickNext();};
// }

function animate(opts){
  var start = new Date;
  var id = setInterval(function(){
    var timePassed = new Date - start;
    var progress = timePassed / opts.duration;
    if (progress > 1){
      progress = 1;
    }
    var delta = opts.delta(progress);
    opts.step(delta);
    if (progress == 1){
      clearInterval(id);
      opts.callback();
    }
  }, opts.delay || 17);
  //return id;
}

function slideTo(imageToGo){
  var direction;
  var numOfImageToGo = Math.abs(imageToGo - currentImage);
  // slide toward left

  direction = currentImage > imageToGo ? 1 : -1;
  currentPostion = -1 * currentImage * imageWidth;
  var opts = {
    duration:1000,
    delta:function(p){return p;},
    step:function(delta){
      ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
    },
    callback:function(){currentImage = imageToGo;}
  };
  animate(opts);
}

function onClickPrev(){
  if (currentImage == 0){
    slideTo(imageNumber - 1);
  }
  else{
    slideTo(currentImage - 1);
  }
}

function onClickNext(){
  if (currentImage == imageNumber - 1){
    slideTo(0);
  }
  else{
    slideTo(currentImage + 1);
  }
}

window.onload = init;

