

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
            title.style.cssText = "color:#888"

            temp.style.cssText = "display:flex;"
                                +"justify-content:center;"
                                +"align-items:center;"
                                +"width:30%;"
                                +"height:11vh;"
                                +"flex-direction:column;"
                                +"background-color:#fff;"
                                +"margin: 10px 0";
                
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
                                    +"list-style:none";
        
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



