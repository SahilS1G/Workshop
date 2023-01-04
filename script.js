const rsc1Kn = "Get a chance to develop a range of skills, which support a wide technical knowledge across different engineering disciplines."

const rsc2Kn = "Get to know about cobot and innovative technology in industrial robotics, and experience the intelligent functioning of Mitsubishi Robot!"

const sweKn = "Enhance your technical writing skills and learn how to present your discoveries."

const IOT = `<h1 class= "info-title"> Day 1 </h1>
                    <p class="info"> Get Nvidia Certified in a day by hand-on training of AI model on NVidia remote GPU </p>
                    </br>
                    <hr>
                    </br>
                    <h1 class= "info-title"> Day 2 </h1>
                    <p class="info"> 
                    1.Build your own AI project end-to-end .
                    </p>
                    <p class="info"> 
                    2.Build your own IoT project and deploy on BrainyPi
                    </p>
                    </br>
                    <hr>
                    </br>
                    <h1 class= "info-title">Speakers</h1>
                    
                    <div class="speakers">
                    <p class= "info">
                    Sneha Bhapkar
                    </p>
                    <p class= "info">
                    Sneha Bhapkar
                    </p>
                    </div>                    

`


const autodeskKn = `<h1 class= "info-title"> Know More </h1>
                    <p class="info">
                    Create, design and simulate mobile robotics. Learn ROS, Python, C++ for robotics programming and a lot more. Download the following image for the entire schedule.
                    </p> 
                    </br>
                    </br>
                    <p class="info "> 
                    <a href="./images/ROBO WORKSHOP-02-02.jpg" class="dwdrob" download> 
                    ROBOTICS WORKSHOP
                    </a>
                    </p>
   
 `

const ethicalKn =  `
`

const sparrowKn = `An Intelligent ubiquitous communication platform for medical and psychological well-being during disasters `

const cards = document.querySelectorAll(".great")


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: 0.5
})

cards.forEach(card => {
  observer.observe(card)
})

// const firstCard = document.querySelectorAll(".first");
// const fObserver = new IntersectionObserver(entries => {
//   if (entries[0].isIntersecting) {
//     fObserver.unobserve(firstCard[0]);
//     blinker[0].style.opacity = "0";
//   }
// }, {
//   threshold: 1
// })

// fObserver.observe(firstCard[0]);

const font_awesome = document.getElementById("font_awesome");
const blinker = document.querySelectorAll(".blinker");

const mainTitle = document.querySelector("h1")

if (window.matchMedia("(max-width: 750px)").matches) {
  // for(let i = 0; i < blinker.length; i++) {
  //   blinker[i].innerText = "click to know more";
  // }
  // document.body.addEventListener("touchstart",function(event) {
  //   for (i = 0; i < cards.length; i++) {
  //     if (event.target==cards[i]) {
  //       console.log("great");
  //       for (j = 0; j < blinker.length; j++) {
  //         blinker[j].innerText = "";
  //       }
  //   } 
  //   else if (event.target != cards[i]) {
  //     console.log("not great");
  //     for (k = 0; k < blinker.length; k++) {
  //       blinker[k].innerText = "";
  //     }
  //   }
  //   }
  //  })

  font_awesome.innerHTML = `<i class=" fa fa-2x fa-arrow-left" aria-hidden="true" ></i>`

  mainTitle.classList.remove("main-title");
}


for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover",function() {
    for(let j = 0; j < blinker.length; j++) {
      blinker[j].innerText = "";
    }
  })
}

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseout",function() {
    for(let j = 0; j < blinker.length; j++) {
      blinker[j].innerText = "hover to know more";
    }
  })
}





const augmented1 = document.getElementById("augmented1");
const augmented2 = document.getElementById("augmented2");
// const augmented3 = document.getElementById("augmented3");
// const augmented4 = document.getElementById("augmented4");
// const augmented5 = document.getElementById("augmented5");
// const augmented6 = document.getElementById("augmented6");
// const augmented7 = document.getElementById("augmented7");


const auginnerhtml1 = augmented1.innerHTML;
const auginnerhtml2 = augmented2.innerHTML;
// const auginnerhtml3 = augmented3.innerHTML;
// const auginnerhtml4 = augmented4.innerHTML;
// const auginnerhtml5 = augmented5.innerHTML;
// const auginnerhtml6 = augmented6.innerHTML;
// const auginnerhtml7 = augmented7.innerHTML;



const earth = document.getElementById("earth");

window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  earth.style.transform = `translateY(${distance *
    (-0.5)}px)`
})



function multiplyNode(node, count, deep) {
  for (var i = 0, copy; i < count - 1; i++) {
    copy = node.cloneNode(deep);
    node.parentNode.insertBefore(copy, node);
  }
}

function removeClass(great) {
  great.classList.remove("great");
}

function addClass(great) {
  great.classList.add("great");
  for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover",function() {
      for(let j = 0; j < blinker.length; j++) {
        blinker[j].innerText = "";
      }
    })
  }
  
  for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseout",function() {
      for(let j = 0; j < blinker.length; j++) {
        blinker[j].innerText = "hover to know more";
      }
    })
  }
}

function know(augmented,auginnerhtml,infoFull,cross) {
     
    augmented.innerHTML = `
        <div class="cross" id="${cross}">
        X
        </div>
          <div class="card"  >
          <div class="border bg"></div>
          <div class="background bg"></div>
          <div class="lines bg">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="cubes bg">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
        <div class="content">
      
          <div class="reveal">
            ${infoFull}
          </div>
        </div>
      </div>
          `
          
          removeClass(augmented)
         
          $(document).ready(function(){
          $(`#${cross}`).on('touchstart click', function(){
            augmented.innerHTML = auginnerhtml;
            addClass(augmented)
          })
        })
}


$(document).ready(function(){
  $(document).on('touchstart click',"#know1" ,function(){
    console.log("clicked")
    know(augmented1,auginnerhtml1,IOT,"cross1","line1","cube1");
     
  })
})

$(document).ready(function(){
  $(document).on('touchstart click',"#know2" ,function(){
    know(augmented2,auginnerhtml2,autodeskKn,"cross2");
  })
})

// $(document).ready(function(){
//   $(document).on('touchstart click',"#know3" ,function(){
//     know(augmented3,auginnerhtml3,ethicalKn,"cross3");
//   })
// })

// $(document).ready(function(){
//   $(document).on('touchstart click',"#know4" ,function(){
//     know(augmented4,auginnerhtml4,rsc1Kn,"cross4");
//   })
// })

// $(document).ready(function(){
//   $(document).on('touchstart click',"#know5" ,function(){
//     know(augmented5,auginnerhtml5,rsc2Kn,"cross5");
//   })
// })

// $(document).ready(function(){
//   $(document).on('touchstart click',"#know6" ,function(){
//     know(augmented6,auginnerhtml6,sparrowKn,"cross6");
//   })
// })

// $(document).ready(function(){
//   $(document).on('touchstart click',"#know7" ,function(){
//     know(augmented7,auginnerhtml7,sweKn,"cross7");
//   })
// })

