

document.body.style.cssText= "margin:0;padding:0;"
                            +"font-family:Tahoma,Arial;"
                            +"background-color: #eee;"
                            +"position:relative;"
                            +"height:100vh";

let myNav = document.createElement("nav");
myNav.id='nav-bar'

let myH1 = document.createElement("H1");
myH1.textContent = 'Elzero';

let navUL = document.createElement("ul");
navUL.id = 'nav-ul'

let items = ["Home","About","Service","Contact"];
let navUlItems = [];

for(let i=0;i<items.length;i++){
    
    let temp  = document.createElement("li");
    temp.textContent = items[i];
    
    navUlItems.push(temp);
    navUL.appendChild(temp);
}

let prdContainer = document.createElement("div");
prdContainer.id = 'container';
prdContainer.style.cssText = "display:flex;flex-wrap:wrap;justify-content:space-evenly;"
                            +"width:100%;"
                            +"height:fit-content;"
                            +"padding:10px 0;"
                            +"box-sizing:border-box;";

for(let i=0;i<15;i++){
    let temp = document.createElement("div");

        let numberOfProduct = document.createElement("p");
            numberOfProduct.textContent = `${i+1}`;
            numberOfProduct.style.cssText = "margin:0 0 3px 0;font-size:28px";
        let title = document.createElement("span");
            title.textContent = "product";
            title.style.cssText = "color:#333"

            temp.style.cssText = "display:flex;"
                                +"justify-content:center;"
                                +"align-items:center;"
                                +"width:30%;"
                                +"height:11vh;"
                                +"flex-direction:column;"
                                +"background-color:#fff;"
                                +"margin: 10px 0;"
                                +"border:1px solid transparent";
            
            temp.addEventListener("mouseenter",_ =>{
                setTimeout(() => {
                    temp.style.borderBottomColor = "#11684c";
                }, 0);
                setTimeout(() => {
                    temp.style.borderRightColor = "#11684c";
                }, 300);
                setTimeout(() => {
                    temp.style.borderTopColor = "#11684c";
                }, 600);
                setTimeout(() => {
                    temp.style.borderLeftColor = "#11684c";
                    temp.style.backgroundColor = "#11684cee";
                    temp.children[1].style.color = "#fff";
                }, 900);
            })
            
            temp.addEventListener("mouseleave",_ =>{
                setTimeout(() => {
                    temp.style.borderLeftColor = "transparent";
                }, 0);
                setTimeout(() => {
                    temp.style.borderTopColor = "transparent";
                }, 300);
                setTimeout(() => {
                    temp.style.borderRightColor = "transparent";
                }, 600);
                setTimeout(() => {
                    temp.style.borderBottomColor = "transparent";
                    temp.style.backgroundColor = "#fff";
                    temp.children[1].style.color = "#333";
                }, 900);
            })
            temp.appendChild(numberOfProduct);
            temp.appendChild(title);

    prdContainer.appendChild(temp);
}



//styling : 
    //nav:
    myNav.style.cssText = "display:flex;"
                        +"justify-content: space-between;"
                        +"align-items:center;"
                        +"background-color:#fefefe;"
                        +"padding:2px 30px;"
                        +"border-bottom:2px solid #11684c;"
                        +"box-sizing:border-box;";
    //myH1
    myH1.style.cssText = "color:#11684c";
    //ul :
    navUL.style.cssText = "display:flex;"
                        +"justify-content:flex-start;"
                        +"align-items:center;"
                        +"padding: 0;"
    //li's:
    let listItems  = navUL.children;
    for(let i=0;i<listItems.length;i++){
        listItems[i].style.cssText = "display:flex;"
                                    +"justify-content: center;"
                                    +"align-items:center;"
                                    +"padding:5px 10px;"
                                    +"list-style:none;";
                                    +"height : 70%;"
                                    +"font-weight:bold;"
                                    +`font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`;
    }

let myFooter = document.createElement("footer");
myFooter.style.cssText ="width:100%;"
                        +"margin:0;"
                        +"display:flex;"
                        +"justify-content:center;"
                        +"align-items:center;"
                        +"background-color:#11684c;"
                        +"height:15vh;"
                        +"position:absolute;"
                        +"bottom:0;";

let copyright = document.createElement("p");
copyright.textContent = "Copyright Osama Elzero 2024.©";
copyright.style.cssText = "color:#fff;font-size:22px";

myFooter.appendChild(copyright);

// ==================
myNav.appendChild(myH1);
myNav.appendChild(navUL);

document.body.prepend(myNav);
myNav.after(prdContainer);
prdContainer.after(myFooter);


    for (let i = 0; i < items.length; i++) {
        listItems[i].addEventListener("mouseenter", _ => {
            listItems[i].style.paddingBottom = "5px";
            listItems[i].style.borderBottom = "1px solid #11684c";
        });
        listItems[i].addEventListener("mouseleave", _ => {
            listItems[i].style.borderBottom = "1px solid transparent";
        });
    
        listItems[i].addEventListener("click", ()=> {
            listItems[i].style.color = "#11684c";
            for(let k=0;k<listItems.length;k++){
                if(k!==i){
                    listItems[k].style.color = "#000";
                }
            }
        });
    }

listItems[0].click();



let lis = document.getElementsByTagName("li");

for(let i=0;i<lis.length;i++){
    lis[i].style.listStyle = 'none';
}
