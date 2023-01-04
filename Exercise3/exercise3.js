//Exercise 3: Users And Style

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Change The Navbar
 * Date : 03/01/2023
 */

//1 Add the code above, to your HTML file 
// Done see exercise1.html


/*  2 In the <div>, change the value of the 
id attribute from navBar to socialNetworkNavigation, using the setAttribute method. */

changeid=document.getElementById("navBar");

changeid.setAttribute("id","socialNetworkNavigation");

//3 We are going to add a new <li> to the <ul>

//3-1 First, create a new <li> tag (use the createElement method).

let newLi = document.createElement('li') 

//3-2 Create a new text node with “Logout” as its specified text.

let newTextNode = document.createTextNode('Logout')

//3-3 Append the text node to the newly created list node (<li>).
newLi.appendChild(newTextNode)

/* 3-4 Finally, append this updated list node to the unordered list 
(<ul>), using the appendChild method.*/

document.getElementsByTagName("ul")[0].appendChild(newLi)








