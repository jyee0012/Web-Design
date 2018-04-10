/*jslint indent: 2*/
/*jslint sloppy: true */
/*global document, window, console*/

JS = {
  unit: function (i) {
    return i + 'px';
  },

  addClass: function (obj, classname) {
    obj.className += ' ' + classname;
  },

  removeClass: function (obj, classname) {
    obj.className = obj.className.replace(classname, '');
  },

  getStyle: function (obj, rule) {
    var value = parseInt(window.getComputedStyle(obj)[rule], 10);
    return isNaN(value) ? 0 : value;
  },

  attachEvent: function (obj, event, callback) {
    if (typeof callback === 'function' && obj.addEventListener) {
      obj.addEventListener(event, callback);
    }
  }
};


function Shrink(params) {
  var els,
    parent,
    overflowEl,
    el,
    forceOneLine,
    minFontSize,
    waitForDOM,
    padding = {
      left: 0,
      right: 0
    },
    classes = {
      elReady: 'shrink-ready',
      bodyReady: 'shrink-ready',
      trackSpacing: 'data-shrink-original-spacing',
      trackSize: 'data-shrink-original-size'
    };

  function getWidths(removeTrailingSpace) {
    var parentPaddingLeft = JS.getStyle(parent, 'paddingLeft'),
      parentPaddingRight = JS.getStyle(parent, 'paddingRight'),
      elWidth = el.scrollWidth,
      parentWidth = parent.offsetWidth - parentPaddingLeft - parentPaddingRight - padding.left - padding.right;

    if (removeTrailingSpace) {
      elWidth -= JS.getStyle(el, 'letterSpacing');
    }

    return {parentEl: parentWidth, el: elWidth};
  }

  function overflow(removeTrailingSpace) {
    var width = getWidths(removeTrailingSpace);

    /*
      Use a +/-3 px threshold -- TODO: IMRPOVE
    */

    if (Math.abs(width.el - width.parentEl) <= 3) {
      width.el = width.parentEl = Math.min(width.el, width.parentEl);
    }

    return width.el > width.parentEl;
  }

  function testZeroSpacing() {
    el.style.letterSpacing = JS.unit(0);

    if (!overflow()) {
      el.style.letterSpacing = JS.unit(el.attributes[classes.trackSpacing].value);
    }
  }

  function adjust(removeTrailingSpace) {
    var width = getWidths(),
      letterSpacing,
      fontSize;

    if (overflow(removeTrailingSpace)) {
      letterSpacing = JS.getStyle(el, 'letterSpacing');

      if (!isNaN(letterSpacing) && letterSpacing > 0) {
        el.style.letterSpacing = JS.unit(letterSpacing - 1);
        adjust(true);
      } else {
        fontSize = JS.getStyle(el, 'fontSize');
        fontSize = (width.parentEl / width.el) * fontSize;
        setFontSize(el, fontSize);
      }
    }

    return true;
  }

  function resetDimensions() {
    el.style.width = '';
    el.style.paddingLeft = '';
    el.style.paddingRight = '';
  }

  function setFontSize(el, size) {
    var wrap = '';

    if (minFontSize && size < minFontSize) {
      size = minFontSize;
    }

    el.style.fontSize = JS.unit(size);
  }

  function processEl() {

    if (el) {

      if (overflowEl) {
        parent = document.querySelector(overflowEl);
      } else {
        parent = el.parentElement;
      }
    }

    if (parent && overflow()) {
      JS.removeClass(el, classes.elReady);
      el.style.width = JS.unit(el.offsetWidth - padding.left - padding.right);
      el.style.paddingLeft = JS.unit(0);
      el.style.paddingRight = JS.unit(0);

      testZeroSpacing();
      adjust();

      resetDimensions();
      JS.addClass(el, classes.elReady);
    }
  }

  function ready(status) {
    if (status === true) {
      JS.addClass(document.body, classes.bodyReady);
    } else {
      JS.removeClass(document.body, classes.bodyReady);
    }
  }

  function shrink() {
    var i;

    ready(false);
    els = document.querySelectorAll(el);

    for (i = 0; i < els.length; i += 1) {
      el = els[i];

      if (forceOneLine) {
        el.style.whiteSpace = 'nowrap';
      }

      el.setAttribute(classes.trackSpacing, JS.getStyle(el, 'letterSpacing'));
      el.setAttribute(classes.trackSize, JS.getStyle(el, 'fontSize'));

      padding.left = JS.getStyle(el, 'paddingLeft');
      padding.right = JS.getStyle(el, 'paddingRight');
      processEl();
    }

    ready(true);
  }

  function onResize() {
    var i;

    ready(false);

    for (i = 0; i < els.length; i += 1) {
      el = els[i];
      resetDimensions();
      
      // TODO: improve the following check
      if (el.style.letterSpacing) {
        el.style.letterSpacing = JS.unit(el.attributes[classes.trackSpacing].value);
      }

      if (el.style.fontSize) {
        setFontSize(el, el.attributes[classes.trackSize].value);
      }

      processEl();
    }

    ready(true);
  }

  function init(params) {
    if (params) {
      overflowEl = params.overflow !== undefined ? params.overflow : null;
      el = params.target !== undefined ? params.target : null;
      waitForDOM = params.waitForDOM !== undefined ? params.waitForDOM : true;
      forceOneLine = params.forceOneLine || false;
      minFontSize = params.minFontSize !== undefined ? params.minFontSize : null;

      try {

        if (waitForDOM) {
          JS.attachEvent(document, 'DOMContentLoaded', shrink);
        } else {
          shrink();
        }

        JS.attachEvent(window, 'resize', onResize);

      } catch (error) {
        console.log(error);
      }
    }
  }

  this.tweakChange = function() {
    var i;

    ready(false);

    for (i = 0; i < els.length; i += 1) {
      el = els[i];
      resetDimensions();
      
      // Update Values
      el.setAttribute(classes.trackSpacing, JS.getStyle(el, 'letterSpacing'));
      el.setAttribute(classes.trackSize, JS.getStyle(el, 'fontSize'));

      el.style.letterSpacing = '';
      el.style.fontSize = '';

      processEl();
    }

    ready(true);
  }

  init(params);
}
