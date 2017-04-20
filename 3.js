if (!$)
    var $ = function() {};
if (!document)
    var document = {};

// // user defined function would called after dom loaded
$(document).ready(function() {});
$(function() {

"use strict";

// create new elements
$('<p></p>').text('some text');

// one or multiple events handlers
$('p').dblclick(function() {});
$('p').mouseenter(function() {});
$('p').mouseleave(function() {});
$('p').mousedown(function() {});
$('p').mouseup(function() {});
$('p').hover(function() {}, function() {});
$('p').focus(function() {});
$('p').blur(function() {}); // lost focus
$('p').on({
    mouseenter: function() {
        $(this).css('background-color', 'lightgrey');
    },
    mouseleave: function() {
        $(this).css('background-color', 'lightblue');
    },
    click: function() {
        $(this).css('background-color', 'yellow');
    }
});

// effects, many of they have /*speed, callback*/
$('p').hide();
$('p').show();
$('p').toggle();
$('p').fadeIn();
$('p').fadeOut();
$('p').fadeToggle();
$('p').fadeTo(/*"slow", opacity*/);
$('p').slideDown();
$('p').slideUp();
$('p').slideToggle();

// custom animations
// position must be: relative, fixed or absolute
// values can be show, hide or toggle.
// by default animation calls will be queued
$('div').animate({left: '250px', opacity: '+=0.5'});
$('div').animate({height: '100px'});

// can stop one, all animations and goto animation end
$('div').stop(/*stopAll, gotoEnd*/);

// dom
$('p').text();
$('p').text('some text');
$('p').html();
$('p').html('<b>some bold text</b>');
$('p').val(); // form fields - input
$('p').val('123');
$('a').attr('href');

// add elements, can take infinite number of new elements
$('p').append('text AT THE END of selected html elements');
$('p').perepend('text AT THE BEGINNING of selected elements');
$('p').after('text AFTER selected elements');
$('p').before('text BEFORE selected elements');

// remove elements
$('p').remove();
$('p').remove('.test, .demo');
$('p').empty();

// classes
$('p').addClass('blue important');
$('p').removeClass('blue');
$('p').toggleClass('blue');

$('p').css('background-color'); // get css poperty
$('p').css('backgorund-color', 'yellow');
$('p').css({
    'backgorund-color': 'yellow',
    'color': 'red'
});

// dimensions
$('p').width(); // element width
$('p').innerWidth(); // + padding
$('p').outerWidth(); // + padding + border
$('p').outerWidth(true); // + padding + border + margin

$('p').height(); // element height
$('p').innerHeight(); // + padding
$('p').outerHeight(); // + padding + border
$('p').outerHeight(true); // + padding + border + margin

// traversing
$('p').parent();
$('p').parents(); // all parents
$('p').parents('ul'); // with filter parents
$('p').children(); // direct children
$('p').children('ul'); // with filter of direct children
$('p').find('ul'); // find in all child elements
$('p').find('*'); // returns all descendants
$('p').siblings();
$('p').siblings('ul');
$('p').next();
$('p').nextAll();
$('p').nextUntil();
$('p').prev();
$('p').prevAll();
$('p').prevUntil();
$('p').first(); // return first element of selected elements
$('p').last();
$('p').eq(1); // return specific element
$('p').filter('.test');
$('p').not('.text');

});
