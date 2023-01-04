//Exercice 4 : Ma Liste De Livres


/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: My Book List
 * Date : 03/01/2023
 */

//1 Add the code above, to your HTML file 
// Done see exercise1.html

//2 In the js file, create an array called allBooks

let allBooks = []


/* 3 Initiate the array with 2 books of your choice (ie. Add manually 2 
    books objects in the array */

    allBooks = [
    {
        "title": "A.N.G.E",
        "author": "minivan lil Jay",
        "image ": "https://anne-robillard.com/imagecache/medias/book/image/Genesis_site--w380-x2_1663947181.jpg",
        "alreadyRead": true
    },
    {
        "title": "Anne Robillard",
        "author": "Travis scott",
        "image ": "https://anne-robillard.com/imagecache/medias/book/image/OT3_site--w485-x2_1650402924.jpg",
        "alreadyRead": false
    }
    
    
]

// 4 Requirements : 

/*4-1 Using the DOM, render the books inside an HTML
 table (the HTML table must be added to the <div> created in part 1). */

 //We create a element table
 let newTable = document.createElement('table') 
 // we append our great div with the table ceated
 document.querySelector(".listBooks").appendChild(newTable)

 //we great the first tr
 let tr=document.createElement('tr')
 // we use a loop for create each th 
for (let index = 0; index < 3; index++) {
//we append the first tr with table
        document.getElementsByTagName('table')[0].appendChild(tr)
        for (let index1 = 0; index1 < 1; index1++) {
            let th=document.createElement('th')
            document.getElementsByTagName('tr')[0].appendChild(th)
        }
}
//we generate the thead of table
document.getElementsByTagName('th')[0].textContent="book’s title"
document.getElementsByTagName('th')[1].textContent="book’s author"
document.getElementsByTagName('th')[2].textContent="book’s image"
newTable.setAttribute("border","1px;")
// set a background color

document.getElementsByTagName('tr')[0].setAttribute("style","background-color:blue;color:white;font-weight:bold;")
//for each books we take information and create a td
allBooks.forEach((element,index)=> {
    let tr1=document.createElement('tr')
    newTable.appendChild(tr1)
    let td1=document.createElement('td')
    tr1.appendChild(td1)
    let td2=document.createElement('td')
    tr1.appendChild(td2)
    let td3=document.createElement('td')
    tr1.appendChild(td3)
    let img=document.createElement('img')
    td3.appendChild(img)
    td1.textContent=element.title
    td2.textContent=element.author
    img.setAttribute('src',element["image "]);
    //set a dimension for image
    img.setAttribute("style","width:100px;height:100px;")
    //control if the book is read 
    if(element.alreadyRead){
        td1.setAttribute("style","color:red;")
    }
});
