//this example is for extend module
var Tutor=require('./Tutorial.js');
Tutor.NodeTutorial=function()
{
console.log("Node Tutorial")
// function pTutor()
// {
// var PTutor=Tutor
// PTutor.tutorial();
// }
}

module.exports = Tutor;
// console.log(Tutor.NodeTutorial());
// console.log(Tutor.tutorial());