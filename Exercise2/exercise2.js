//Exercise 2: Users And Style

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Users And Style
 * Date : 03/01/2023
 */

//1 Add the code above, to your HTML file 
// Done see exercise1.html

//2 Add a “light blue” background color and some padding to the <div>.

let changeColor =document.getElementsByTagName("div")[0]
changeColor.setAttribute("style","background-color:#add8e6;padding:5px;")

//3 Do not display the <li> that contains the text node “John”.

document.getElementsByTagName("li")[0].remove()

//4 Add a border to the <li> that contains the text node “Pete”.

document.getElementsByTagName("li")[0].setAttribute("style","border:2px solid black;")

//5 Change the font size of the whole body

document.body.setAttribute("style","font-size:25px;")












