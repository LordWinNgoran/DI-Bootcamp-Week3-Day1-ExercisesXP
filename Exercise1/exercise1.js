//Exercise 1: Users

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Users
 * Date : 03/01/2023
 */



//1 Add the code above, to your HTML file 
// Done see exercise1.html

//2 Using Javascript:

// 2-1 Retrieve the div and console.log it
let div=document.getElementById("container");

console.log(div);

//2-2 Change the name “Pete” to “Richard”.

document.getElementsByTagName('li')[1].textContent = "Richard";

//2-3 Change each first name of the two <ul>'s to your name.
let all= document.querySelectorAll("li:first-child")
console.log(all)
for(person in all){
    all[person].textContent="Lordwin"
}


//2-4 Delete the <li> that contains the text node “Sarah”.
document.getElementsByTagName('li')[3].remove()
//3 Bonus - Using Javascript:
//3-1 Add a class called student_list to both of the <ul>'s.
document.getElementsByTagName("ul")[0].classList.add("student_list");
document.getElementsByTagName("ul")[1].classList.add("student_list");

//3-2 Add the classes university and attendance to the first <ul>.
document.getElementsByTagName("ul")[0].classList.add("university", "attendance");