
function sort (){
    let x = document.querySelectorAll(".card");
      console.log(x);
       let cardsarray = Array.from(x);
     //  console.log(cardsarray);
      cardsarray.sort((card1,card2) => {
          const score1 = parseInt(card1.children[2].innerText);
          const score2 = parseInt(card2.children[2].innerText);
           if(score1 > score2){
            return -1;
           } 
           if(score1 < score2){
            return 1;
           } 
           else {
            return 0;
           }
        }   
       );
        
       cardsarray.forEach((cards) => {
        menu.append(cards);
       });
      
        }

let aps = document.getElementById("ap");
aps.addEventListener("click", func);


let menu = document.getElementById("main");
function func(){
    let names = document.getElementById("name1").value;
    let lastnames = document.getElementById("lastname1").value; 
    let contrys = document.getElementById("contry1").value; 
    let scores = document.getElementById("score1").value;
    
 if(names == "" || lastnames == "" || contrys == "" || scores
 == ""){
    document.getElementById("p").style.display = "block";
    return;
 }
 document.getElementById("p").style.display = "none";
      
 /* <section id="main">
     <section class="card">
        <div>
            <!-- <div> -->
                <h1 id="name">SAURABH SHRIKHANDE</h1>
                <!-- <h1 id="lastname"></h1> -->
            <!-- </div> -->
            
            <p id="date">JAN 2023: 09:24:44</p>
        </div>
        <div>
            <h1 id="contry">CONTRY</h1>
        </div>
        <div>
            <h1 id="score">score</h1>
        </div>
        <div class="pm" >
            <h1 id="delete">🗑</h1>
             <h1 id="plus">+5</h1>
             <h1 id="minus">+5</h1>    
        </div> 
</section>
</section> */

    let cards = document.createElement("section");
    cards.classList.add("card")
       let divs = document.createElement("div");
       let h1s = document.createElement("h1");
       h1s.innerHTML = names + " " + lastnames;
      let ps = document.createElement("p");
      ps.innerHTML = genDate();
      divs.append(h1s);
      divs.append(ps);
      cards.append(divs);

      let h12  = document.createElement("h1");
      h12.innerText = contrys;
       cards.append(h12);
    
       let h13 = document.createElement("h1");
       h13.innerHTML = scores;
       cards.append(h13);


      let div3 = document.createElement("div");
      div3.classList.add("pm");
      let h141 = document.createElement("h1");
      h141.id = "delete";
      h141.innerHTML = "🗑";
      let h142 = document.createElement("h1");
      h142.id = "plus"; 
      h142.innerHTML = "+5";
      let h143 = document.createElement("h1");
      h143.id = "minus"
      h143.innerHTML = "-5";
      div3.append(h141);
      div3.append(h142);
      div3.append(h143);
      cards.append(div3);

      menu.append(cards);


// let pmb = document.getElementsByClassName("pm")[0];
 cards.children[3].addEventListener("click", (e) => {
  let temp = e.target.innerText;
  if(temp === "🗑"){
     e.target.parentElement.parentElement.remove();
  }
  else if(temp == "+5"){
  e.target.parentElement.parentElement.children[2].innerText =
  parseInt(e.target.parentElement.parentElement.children[2].innerText) +5;
  }
  else{
    e.target.parentElement.parentElement.children[2].innerText =
  parseInt(e.target.parentElement.parentElement.children[2].innerText) - 5;
  }
     sort();
});

      sort();

     document.getElementById("name1").value = "";
      document.getElementById("lastname1").value = ""; 
      document.getElementById("contry1").value = ""; 
       document.getElementById("score1").value = "";
}


function genDate(){
    let dateObject = new Date();
    // console.log(dateObject);
    let month = dateObject.toLocaleString("default", {month:"long"})
    // console.log(month);
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    time = dateObject.toLocaleTimeString().slice(0,8);
    // console.log(time);

    let generateResult = `${month} ${day}: ${year} ${time}`

    return generateResult;
}


  