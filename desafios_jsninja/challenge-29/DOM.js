(function(win, document){

function DOM(elements){
    this.element = document.querySelectorAll(elements);
};



DOM.prototype.on = function on(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(eventType, callback, false);
    });
};
  
DOM.prototype.off = function off(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(eventType, callback, false);
    });
};

DOM.prototype.get = function get(){
    return this.element;
}

DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply( this.element, arguments )
}

DOM.prototype.map = function map(){
    return Array.prototype.map.apply( this.element, arguments )
}


DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply( this.element, arguments )
}

DOM.prototype.isArray = function isArray( param ){
    return Object.prototype.toString.call(param) === '[object Array]';
};

win.DOM = DOM;
})(window, document);