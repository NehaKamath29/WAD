let names=[
    "Taj Lake Palace, Udaipur",
    "The leela Palace, Udaipur",
    "Taj Aravali Resort and Spa",
    "The Oberoi, New Delhi",
    "Raddison Blu",
    "Marriott Suites, Pune",
    "Nattika Beach Resort",
    "The Taj Hotel, Mumbai",
    "Oterra",
    "Blanket Hotel and Spa",
    "La Marvella, Banglore",
];
let sortedNames=names.sort();
/*console.log(sortedNames);*/

//reference
let input=document.getElementById("input");

//execute function on keyup

input.addEventListener("keyup",(e)=>{

    //loop through above array
    //initially remove all elements(so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for(let i of sortedNames)
    {
        //convert input to lowercase and compare with each string

        

        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value!="")
        {
            //create li element
            let listItem=document.createElement("li");

            //one common class name
            listItem.classList.add("list-items");
            listItem.style.cursor="pointer";
            listItem.setAttribute("onclick","displayNames('" + i + "')");

            //display matched part in bold
            let word= "<b>" + i.substr(0,input.value.length)+ "<br>";
            word+=i.substr(input.value.length);
            /*console.log(word);*/

            //display the value in array
            listItem.innerHTML=word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});
function displayNames(value)
{
    input.value=value;
    removeElements();
}
function removeElements()
{
    //clear all the items 
    let itemss=document.querySelectorAll(".list-items");
    itemss.forEach((item)=> {
        item.remove();
    });
}
