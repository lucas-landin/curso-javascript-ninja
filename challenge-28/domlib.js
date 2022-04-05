(function(win,document){
'use strict'

function DOM(element){
    this.element = document.querySelectorAll(element)
  }

  DOM.prototype.on = function on(eventType,callBack){
    Array.prototype.forEach.call(this.element,function(element){
      return element.addEventListener(eventType,callBack,false)
    })
  };

  DOM.prototype.off = function off(eventType,callBack){
    Array.prototype.forEach.call(this.element,function(element){
      return element.removeEventListener(eventType,callBack,false)
    })
  };
  DOM.prototype.get = function get(){
    return this.element
  };

  DOM.prototype.forEach = function forEach(){
  return Array.prototype.forEach.apply(this.element, arguments)
  };

  DOM.prototype.map = function map (){
    return Array.prototype.map.apply(this.element, arguments)
    };

  DOM.prototype.filter = function filter (){
  return Array.prototype.filter.apply(this.element, arguments)
  };

  DOM.prototype.reduce = function reduce (){
  return Array.prototype.reduce.apply(this.element, arguments)
  };

  DOM.prototype.reduceRight = function reduceRight (){
  return Array.prototype.reduceRight.apply(this.element, arguments)
  };

  DOM.prototype.every = function every (){
  return Array.prototype.every.apply(this.element, arguments)
  };

  DOM.prototype.some = function some (){
  return Array.prototype.some.apply(this.element, arguments)
  };

  var dom = new DOM()

   DOM.isArray = function isArray (param){
  return Object.prototype.toString.call(param)  === '[object Array]'
  };

  dom.isObject = function isObject (param){
  return Object.prototype.toString.call(param)  === '[object Object]'
  };

  DOM.isFunction = function isFunction (param){
  return Object.prototype.toString.call(param)  === '[object Function]'
  };

  DOM.isNumber = function isNumber (param){
  return Object.prototype.toString.call(param)  === '[object Number]'
  };

  DOM.isString = function isString (param){
    return Object.prototype.toString.call(param)  === '[object String]'
  };

  DOM.isBoolean = function isBoolean (param){
    return Object.prototype.toString.call(param)  === '[object Boolean]'
  };

  DOM.isNull = function isNull (param){
    return Object.prototype.toString.call(param)  === '[object Null]'
    || Object.prototype.toString.call(param)  === '[object Undefined]'
  };
  win.DOM = DOM
})(window,document)
