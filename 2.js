// dom function
function dom_fn() {
    "use strict";

    function _() { console.log.apply(null, arguments); }
    let elem = document.body;

    // window is the main object
    // open url - can be blocked as popup
    window.open('');

    // info about browser and OS
    _(window.navigator);

    // current url or redirect to url
    _(window.location);

    // document is object for DOM manipulating
    // document
    // document.documentElement - <html>
    // document.body - <body>
    // document.head - <head>
    _(elem.style.background);

    // elements, texts, comments (read only)
    _(elem.childNodes);
    _(elem.parentNode);
    _(elem.firstChild);
    _(elem.lastChild);
    _(elem.previousSibling);
    _(elem.nextSibling);

    // only element (without text nodes or comments) (read only)
    // may need js polyfills
    _(elem.children);
    _(elem.parentElement);
    _(elem.firstElementChild);
    _(elem.lastElementChild);
    _(elem.previousElementSibling);
    _(elem.nextElementSibling);

    // search elements functions
    document.getElementById('content');
    elem.getElementsByTagName('*'); // for all elements
    elem.getElementsByClassName('content');
    elem.querySelectorAll('ul > li:last-child');
    elem.querySelector('.content');
    elem.closest('li'); // search from current to up

    // elements properties
    // all elements have nodeType == 1, text nodes == 3
    _(elem instanceof HTMLBodyElement); // true
    _(elem instanceof HTMLElement); // true
    _(elem instanceof Element); // true
    _(elem instanceof Node); // true
    _(elem.nodeType); // 1
    _(elem.tagName); // BODY
    _(elem.childNodes[0].data); // get data for text elements
    _(elem.innerHTML); // get content of elements with repaint
    _(elem.textContent); // all text of all elements without tags and as is
    _(elem.hidden); // visibility of element on page. need polyfill

    // elements attributes
    // changing properties do not affect on attributes values
    // changing attributes affect on properties values
    elem.hasAttribute('some');
    elem.getAttribute('some');
    elem.setAttribute('some', 'value');
    elem.removeAttribute('some');

    // working with class properties
    _(elem.className);
    elem.classList.contains('class');
    elem.classList.add('class');
    elem.classList.remove('class');
    elem.classList.toggle('class');

    // our own's properties for arbitrary element by "data-".
    // <div id="test_elem" data-about="about this div"></div>
    // test_elem.getAttribute("data-about");

    // check for nesting or current
    _(elem.contains(elem));

    // how to create elements
    document.createElement('div');
    document.createTextNode('hello, world');

    {
        let div = document.createElement('div');
        div.className = 'alert alert-success';
        div.innerHTML = '<strong>Yra!!!</strong> hello world!';
        elem.appendChild(div);
    }

    // insert "elem" in child collection "parentElem" before "nextSibling"
    // parentElem.insertBefore(elem, nextSibling);
    // parentElem.insertBefore(elem, null); // work as appendChild

    // how to create a clone of an element
    elem.cloneNode(false); // false - without nested, true - with it.
    elem.replaceChild(elem.querySelector('div'), elem.querySelector('div'));
    elem.removeChild(elem.querySelector('div'));

    // optimize inserting elements with fragment
    let fragment = document.createDocumentFragment();
    fragment.appendChild(document.createElement('div'));
    elem.appendChild(fragment);

    // get final css
    let style = getComputedStyle(elem);
    _(style.marginTop);

    // metrics of elements
    _(elem.width); // width of element
    _(elem.height); // height of element
    _(elem.offsetLeft); // upper left corner left position
    _(elem.offsetTop); // upper left corener top position
    _(elem.offsetWidth); // full width of element (with borders etc)
    _(elem.offsetHeight); // full height of element (with borders etc)
    _(elem.clientWidth); // with padding, without scroll width and borders, visible area
    _(elem.clientHeight); // with padding, without scroll height and borders, visible area
    _(elem.scrollWidth); // clientWidth + invisible scroll area
    _(elem.scrollHeight); // clientheight + invisible scroll area
    _(elem.scrollTop); // height of invisible scroll area of element in the top
    _(elem.scrollLeft); // width of invisible scroll area of element in the left
    elem.style.height = elem.scrollHeight + 'px'; // unfold element through max height
    elem.scrollTop += 20; // you can scroll element

    // page metrics
    _(document.documentElement.clientWidth); // visible width of page
    _(document.documentElement.clientHeight); // visible height of page
    _(document.documentElement.scrollWidth); // total width of page
    _(document.documentElement.scrollHeight); // total height of page

    // but if scroll can be hide/show, metrics lie.
    // scrollHeight may be less than clientHeight.
    // so, max height with scroll would be:
    Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    // how to get current scroll
    _(window.pageYOffset || document.documentElement.scrollTop);
    _(window.pageXOffset || document.documentElement.scrollLeft);

    // crossbrowser method of scrolling
    window.scrollBy(0, 10); // on 10px down regard of current coordinates clientXY
    window.scrollTo(0, 10); // on 10px down regard of page coordinates pageXY

    // disable/enable scrolling
    elem.style.overflow = "hidden";
    elem.style.overflow = "";

    // how to get coordinates of rectangle of element in visible area
    // can be negative if element is not in visible area
    _(elem.getBoundingClientRect());

    // how to get element from coordinates
    _(document.elementFromPoint(9, 9));

    // crossbrowse element coordinates depending on entire page (no default in js)
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        let body = document.body;
        let doc = document.documentElement;
        let scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
        let scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;
        let clientTop = doc.clientTop || body.clientTop || 0;
        let clientLeft = doc.clientleft || body.clientTop || 0;
        let top = box.top + scrollTop - clientTop;
        let left = box.left + scrollLeft - clientLeft;

        return {
            top: top,
            left: left
        };
    }
    _(getCoords(elem));
} // function end

// dom events function
function dom_events_fn() {
    "use strict";

    function _() { console.log.apply(null, arguments); }

    // using dom property of an object (but only 1 handler for this method)
    // you can access to element by this keyword
    btn.onclick = function() { _(this.value); };

    // how to setup several handlers for one event
    // for remove you should specify the same function reference!
    let fn = function() { _(this.value); };
    btn.addEventListener('click', fn);
    btn.removeEventListener('click', fn);
    // btn.attachEvent('onclick', fn); // for IE
    // btn.detachEvent('onclick', fn); // for IE

    // events performed one for one in event queue synchronously
    // if event handler called in other event handler, first handler is waiting
    btn.onfocus = function() { _('btn onfocus'); };
    btn.onclick = function() {
        _('btn onclick1');
        btn.focus();
        _('btn onclick2');
    };

    // if you want second called handler will be executed later after first one
    btn.onclick = function() {
        _('btn onclick1');
        setTimeout(function() { btn.focus(); }, 0);
        _('btn onclick2');
    };

    // in event handler passed event param with useful information in it
    btn.onclick = function(event) {
        _('onclick handler with event argument');
        _(event.type); // onclick
        _(event.currentTarget); // object
        _(event.clientX); // cursor x on screen
        _(event.clientY); // cursor y on screen
        _(event.pageX); // cursor x on page
        _(event.pageY); // cursor y on page
        _(event.target); // new element mouse hover
        _(event.relatedTarget); // previous element mouse hover
    };

    // mouseover, mouseout - are pop events. if you'll assign event handler on parent
    // all mouse moves will be triggered on parent and nested children
    // they can be used for delegate (pattern) performing children event handlers
    // to the parent node (in one place)
    // and do not need to assign handler for each child

    // mouseenter, mouseleave - are not pop events.
    // They triggered only on element which have event handler
}

document.addEventListener("DOMContentLoaded", dom_fn);
document.addEventListener("DOMContentLoaded", dom_events_fn);
