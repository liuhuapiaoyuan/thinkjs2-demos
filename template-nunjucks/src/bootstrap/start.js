/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */

let nunjucks = think.npm('nunjucks');

let env = nunjucks.configure();
env.addFilter('thinkjs2', () => {
  return 111;
});