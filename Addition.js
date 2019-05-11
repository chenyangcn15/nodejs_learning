//define a module
//exports is keyword to ensure the functionality defined in this file can be accessed by other files
var add = module.exports={}; 
//creating a function in our module
add.AddNumber = function(a,b)
{
    return a+b;
};
