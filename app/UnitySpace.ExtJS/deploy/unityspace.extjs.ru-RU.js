/*
 * UnitySpace.ExtJS license
 */
Ext.applyIf(Array.prototype,{includes:function(){for(var a=0;a<arguments.length;a++){if(this.indexOf(arguments[a])===-1){return false}}return true},contains:function(a,b){return(this.indexOf(a,b)!==-1)},insert:function(b,c){if(c>=this.length){throw"Index out of range"}var a=this.splice(c,this.length-c);this.concat(b,a)},insertBefore:function(a,b){var c=this.indexOf(b);if(c===-1){throw"Value not exist"}this.insert(a,c)},insertAfter:function(a,b){var c=this.indexOf(b);if(c===-1){throw"Value not exist"}if(c===this.length-1){this.push(a);return}c++;this.insert(a,c)}});