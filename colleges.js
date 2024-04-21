const colleges = [
  {
    name: "American University In The Emirates",
    location: "Dubai",
    website: "https://aue.ae/",
    img: "images/AUEcampus.jpg",
    logo: "images/AUElogo.png",
    publicPrivate: "private",
    more: "description/AUE.html",
  },
  {
    name: "American University of Sharjah",
    location: "Sharjah",
    website: "https://www.aus.edu/",
    logo: "images/AUSlogo.png",
    img: "images/AUScampus.jfif",
    publicPrivate: "private",
    more: "description/AUS.html",
  },
  {
    name: "Rochester Institute of Technology of Dubai",
    location: "Dubai",
    website: "https://www.rit.edu/dubai/",
    logo: "images/RITlogo.png",
    img: "images/RITcampus.jpg",
    publicPrivate: "private",
    more: "description/RIT.html",
  },
  {
    name: "ALDAR",
    location: "Dubai",
    publicPrivate: "public",
    website: "https://www.aldar.com/en",
    logo: "images/aldar-logo.png",
    img: "images/aldarcampus.png",
    more: "description/ALDAR.html",
  },
  {
    name: "jumaira",
    location: "Dubai",
    website: "https://www.gemsjc.com/",
    logo: "images/jumaira-logo.png",
    img: "images/jojo.png",
    publicPrivate: "private",
    more: "description/JUMAIRA.html",
  },
  {
    name: "American University in Dubai",
    location: "Dubai",
    website: "https://www.aud.edu/",
    logo: "images/AUDlogo.png",
    img: "images/AUDcampus.jfif",
    publicPrivate: "private",
    more: "description/AUD.html",
  },
  {
    name: "United Arab Emirates University",
    location: "Abu Dhabi",
    publicPrivate: "public",
    website: "https://www.uaeu.ac.ae/en/",
    logo: "images/UAEUlogo.png",
    img: "images/UAEUcampus.jpg",
    more: "description/UAEU.html",
  },
  {
    name: "Khalifa University",
    location: "Abu Dhabi",
    website: "https://www.ku.ac.ae/",
    logo: "images/Khalifa-logo.jfif",
    img: "images/khalifacampus.jpg",
    publicPrivate: "public",
    more: "description/KHALIFA.html",
  },
  {
    name: "University of sharjah",
    location: "Sharjah",
    website: "https://www.sharjah.ac.ae/en/Pages/default.aspx",
    logo: "images/sharjah-uni-logo.png",
    img: "images/sharjahcampus.jpg",
    publicPrivate: "private",
    more: "description/SHARJAH.html",
  },
  {
    name: "British University in Dubai",
    location: "Dubai",
    website: "https://www.buid.ac.ae/",
    logo: "images/BUiDlogo.png",
    img: "images/BUiDcampus.jpg",
    publicPrivate: "private",
    more: "description/BUID.html",
  },
  {
    name: "zayed university",
    location: "Dubai",
    publicPrivate: "public",
    website: "https://www.zu.ac.ae/main/en/index",
    logo: "images/zayedunilogo.jfif",
    img: "images/zayedcampus.jpg",
    more: "description/ZAYED.html",
  },
  {
    name: "Gulf Medical University",
    location: "Ajman",
    website: "https://gmu.ac.ae/",
    logo: "images/gulf-med-uni-logo.jfif",
    img: "images/gmucampus.jpg",
    publicPrivate: "private",
    more: "description/GMU.html",
  },
  {
    name: "Higher Colleges of Technology",
    location: "Abu Dhabi",
    publicPrivate: "public",
    website: "https://hct.ac.ae/en/",
    logo: "images/Higher_Colleges_of_Technology_logo.png",
    img: "images/HCTcampus.jpg",
    more: "description/HCT.html",
  },
  {
    name: "Abu Dhabi University",
    location: "Abu Dhabi",
    website: "https://www.adu.ac.ae/en/home",
    logo: "images/Abu_Dhabi_Universityl-ogo.png",
    img: "images/AbuDhabicampus.jpg",
    publicPrivate: "private",
    more: "description/ABUDHABI.html",
  },
  {
    name: "American University of Ras al Khaimah",
    location: "RasAlKhaima",
    website:
      "https://join.aurak.ac.ae/?utm_source=adwords&utm_medium=cpc&utm_campaign=UAE&utm_content=%7C2%7C512140942933%7C_2%7C%7C3%7C%7C_3%7C&utm_term=%7C4%7Ckwd-301310586949%7C_4%7Caurak512140942933%7C_2%7C%7C3%7C%7C_3%7C&utm&gclid=Cj0KCQiA1sucBhDgARIsAFoytUv-_NCOVFXmc8GzXgKvPGJ4jVZZCHh0NiKH1h9-jOO9wGbUsouINUUaAtspEALw_wcB",
    logo: "images/AURAKlogo.png",
    img: "images/AURAKcampus.png",
    publicPrivate: "private",
    more: "description/RASALKHAIMAH.html",
  },
  {
    name: "Abu Dhabi Polytechnic",
    location: "Abu Dhabi",
    website: "https://adpoly.ac.ae/",
    img: "images/34B.jpg",
    logo: "images/34A.png",
    publicPrivate: "private",
    more: "description/POLYTECHNIC.html",
  },
  {
    name: "Ajman University",
    location: "Ajman",
    website: "https://www.ajman.ac.ae/en/",
    img: "images/17B.jpg",
    logo: "images/17A.jpg",
    publicPrivate: "private",
    more: "description/AJMAN.html",
  },
  {
    name: "Al Ain University",
    location: "Al Ain",
    website: "https://www.aau.ac.ae/en/",
    img: "images/18B.jpg",
    logo: "images/18A.png",
    publicPrivate: "private",
    more: "description/ALAIN.html",
  },

  {
    name: "Al Falah University",
    location: "Dubai",
    website: "https://alfalahuniversity.edu.in/",
    img: "images/19B.jpg",
    logo: "images/19A.png",
    publicPrivate: "private",
    more: "description/ALFALAH.html",
  },
  {
    name: "Al Qasimia University",
    location: "Sharjah",
    website: "https://www.alqasimia.ac.ae/en/Pages/default.aspx",
    img: "images/20B.jpg",
    logo: "images/20A.jpg",
    publicPrivate: "private",
    more: "description/ALQASIMIA.html",
  },
  {
    name: "Al Wasl University",
    location: "Dubai",
    website: "https://alwasl.ac.ae/",
    img: "images/21B.jpg",
    logo: "images/21A.jpg",
    publicPrivate: "private",
    more: "description/ALWASl.html",
  },
  {
    name: "Amity University Dubai",
    location: "Dubai",
    website:
      "https://amityuniversity.ae/intake-2024/?source=Google&campaign=20743358547&adgroup=158363840587&keyword=amity%20university%20dubai&gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppNptzZ87vy9cuP2Is2aRvwa7CWhqHax9pAIzA19GJ0tmbpyUt4GeChoCTSYQAvD_BwE",
    img: "images/22B.jpg",
    logo: "images/22A.png",
    publicPrivate: "private",
    more: "description/AMITY.html",
  },
  {
    name: "Canadian University of Dubai",
    location: "Dubai",
    website: "https://www.cud.ac.ae/",
    img: "images/23B.jpg",
    logo: "images/23A.jpg",
    publicPrivate: "private",
    more: "description/CUD.html",
  },
  {
    name: "City University College of Ajman",
    location: "Ajman",
    website: "https://www.cu.ac.ae/",
    img: "images/24B.jpg",
    logo: "images/24A.png",
    publicPrivate: "private",
    more: "description/CUCA.html",
  },
  {
    name: "Dubai Medical College for Girls",
    location: "Dubai",
    website: "https://www.dmcg.edu/",
    img: "images/25B.jpg",
    logo: "images/25A.jpg",
    publicPrivate: "private",
    more: "description/DMC.html",
  },
  {
    name: "Dubai Pharmacy College",
    location: "Dubai",
    website: "https://dpc.edu/research.php",
    img: "images/26B.jpg",
    logo: "images/26A.jpg",
    publicPrivate: "private",
    more: "description/DPC.html",
  },
  {
    name: "Emirates Aviation University",
    location: "Dubai",
    website: "https://www.eau.ac.ae/en",
    img: "images/27B.jpg",
    logo: "images/27A.png",
    publicPrivate: "private",
    more: "description/EAU.html",
  },
  {
    name: "Emirates College for Advanced Education",
    location: "Abu Dhabi",
    website: "https://www.ecae.ac.ae/en/",
    img: "images/28B.jpg",
    logo: "images/28A.jpg",
    publicPrivate: "private",
    more: "description/ECAE.html",
  },
  {
    name: "Fatima College of Health Sciences",
    location: "Abu Dhabi",
    website: "https://www.fchs.ac.ae/",
    img: "images/31B.jpg",
    logo: "images/31A.png",
    publicPrivate: "private",
    more: "description/FATIMA.html",
  },
  {
    name: "Imam Malik College for Islamic Sharia and Law",
    location: "Dubai",
    website: "https://www.imc.gov.ae/en",
    img: "images/32B.jpg",
    logo: "images/32A.jpg",
    publicPrivate: "private",
    more: "description/IMAMMALIK.html",
  },
  {
    name: "Institute of Management Technology Dubai",
    location: "Dubai",
    website: "https://www.imt.ac.ae/",
    img: "images/33B.jpeg",
    logo: "images/33A.png",
    publicPrivate: "private",
    more: "description/IMTD.html",
  },
  {
    name: "Islamic Azad University U.A.E. Branch",
    location: "Dubai",
    website: "https://iau.ae/",
    img: "images/60B.jpg",
    logo: "images/60A.png",
    publicPrivate: "private",
    more: "description/ISLAMICAZAD.html",
  },
  {
    name: "Khawarizmi International College",
    location: "Abu Dhabi",
    website: "https://www.caa.ae/Pages/Institutes/Details.aspx?GUID=2",
    img: "images/35B.jpg",
    logo: "images/35A.jpg",
    publicPrivate: "private",
    more: "description/KHAWARIZMI.html",
  },
  {
    name: "Liwa College of Technology",
    location: "Abu Dhabi",
    website: "https://lc.ac.ae/",
    img: "images/36B.jpg",
    logo: "images/36A.jpg",
    publicPrivate: "private",
    more: "description/LIWA.html",
  },
  {
    name: "Manipal University, Dubai",
    location: "Dubai",
    website: "https://www.manipaldubai.com/",
    img: "images/37B.jpg",
    logo: "images/37A.png",
    publicPrivate: "private",
    more: "description/MANIPAl.html",
  },
  {
    name: "Middlesex University Dubai",
    location: "Dubai",
    website: "https://www.mdx.ac.ae/",
    img: "images/38B.jpg",
    logo: "images/38A.png",
    publicPrivate: "private",
    more: "description/MIDDLESEX.html",
  },
  {
    name: "Mohamed Bin Zayed University for Humanities",
    location: "Abu Dhabi",
    website: "https://www.mbzuh.ac.ae/en/",
    img: "images/39B.jpg",
    logo: "images/39A.png",
    publicPrivate: "private",
    more: "description/MOHAMEDBINZAYED.html",
  },
  {
    name: "Mohamed bin Zayed University of Artificial Intelligence",
    location: "Abu Dhabi",
    website: "https://mbzuai.ac.ae/",
    img: "images/40B.jpg",
    logo: "images/40A.png",
    publicPrivate: "private",
    more: "description/MOHAMEDBINZAYED2.html",
  },
  {
    name: "Mohammed Bin Rashid School of Government",
    location: "Dubai",
    website: "https://www.mbrsg.ae/home",
    img: "images/41B.jpg",
    logo: "images/41A.jpg",
    publicPrivate: "private",
    more: "description/MOHAMADBINRASHID.html",
  },
  {
    name: "Mohammed Bin Rashid University of Medicine and Health Sciences",
    location: "Dubai",
    website: "https://www.mbru.ac.ae/",
    img: "images/42B.jpg",
    logo: "images/42A.png",
    publicPrivate: "private",
    more: "description/MOHAMADBINRASHID2.html",
  },
  {
    name: "Murdoch University Dubai",
    location: "Dubai",
    website: "https://www.murdochuniversitydubai.com/",
    img: "images/43B.jpg",
    logo: "images/43A.png",
    publicPrivate: "private",
    more: "description/MURDOCH.html",
  },
  {
    name: "New York Institute of Technology Abu Dhabi",
    location: "Abu Dhabi",
    website: "https://www.murdochuniversitydubai.com/",
    img: "images/44B.jpg",
    logo: "images/44A.png",
    publicPrivate: "private",
    more: "description/NYIT.html",
  },
  {
    name: "New York University Abu Dhabi",
    location: "Abu Dhabi",
    website: "https://nyuad.nyu.edu/",
    img: "images/45B.jpg",
    logo: "images/45A.png",
    publicPrivate: "private",
    more: "description/NYUAD.html",
  },
  {
    name: "Ras al-Khaimah Medical and Health Sciences University",
    location: "RasAlKhaima",
    website: "https://www.rakmhsu.ac.ae/",
    img: "images/46B.jpg",
    logo: "images/46A.png",
    publicPrivate: "private",
    more: "description/RAKMHCU.html",
  },
  {
    name: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology Dubai",
    location: "Dubai",
    website: "http://www.szabist.ac.ae/",
    img: "images/47B.jpg",
    logo: "images/47A.jpg",
    publicPrivate: "private",
    more: "description/SZABISTD.html",
  },
  {
    name: "Skyline University College",
    location: "Sharjah",
    website: "https://www.skylineuniversity.ac.ae/",
    img: "images/48B.jpg",
    logo: "images/48A.jpg",
    publicPrivate: "private",
    more: "description/SUC.html",
  },
  {
    name: "The Emirates Academy of Hospitality Management",
    location: "Dubai",
    website: "http://emiratesacademy.edu/",
    img: "images/49B.jpg",
    logo: "images/49A.jpg",
    publicPrivate: "private",
    more: "description/EAHC.html",
  },
  {
    name: "Umm Al Quwain University",
    location: "Umm Al Quwain",
    website: "http://emiratesacademy.edu/",
    img: "images/50B.jpg",
    logo: "images/50A.png",
    publicPrivate: "private",
    more: "description/UAQU.html",
  },
  {
    name: "Université Paris-Sorbonne Abou Dhabi",
    location: "Abu Dhabi",
    website: "https://www.sorbonne.ae/en/",
    img: "images/51B.jpg",
    logo: "images/51A.png",
    publicPrivate: "private",
    more: "description/PARIS.html",
  },
  {
    name: "Université Saint-Joseph de Dubai",
    location: "Dubai",
    website: "https://www.sorbonne.ae/en/",
    img: "images/52B.jpg",
    logo: "images/52A.png",
    publicPrivate: "private",
    more: "description/PARIS2.html",
  },
  {
    name: "University of Birmingham Dubai",
    location: "Dubai",
    website: "https://www.birmingham.ac.uk/dubai",
    img: "images/53B.jpg",
    logo: "images/53A.jpg",
    publicPrivate: "private",
    more: "description/UBD.html",
  },
  {
    name: "University of Dubai",
    location: "Dubai",
    website: "https://www.birmingham.ac.uk/dubai",
    img: "images/55B.jpg",
    logo: "images/55A.jpg",
    publicPrivate: "private",
    more: "description/UD.html",
  },
  {
    name: "University of Fujairah",
    location: "Fujairah",
    website: "https://www.birmingham.ac.uk/dubai",
    img: "images/56B.jpg",
    logo: "images/56A.jpg",
    publicPrivate: "private",
    more: "description/UF.html",
  },
  {
    name: "University of Science and Technology of Fujairah",
    location: "Fujairah",
    website: "https://www.ustf.ac.ae/",
    img: "images/57B.jpg",
    logo: "images/57A.jpg",
    publicPrivate: "private",
    more: "description/USTF.html",
  },
  {
    name: "University of Wollongong in Dubai",
    location: "Dubai",
    website: "https://www.uowdubai.ac.ae/",
    img: "images/58B.jpg",
    logo: "images/58A.png",
    publicPrivate: "private",
    more: "description/UWD.html",
  },
];

//********************************************************************************************************************************************************************

const container = document.getElementById("accordion");

colleges.forEach((result, idx) => {
  // Create card element
  const card = document.createElement("div");
  card.classList = "card-body";

  // Construct card content

  const content = `<div class="card">
    <div class="item" data-id="1">
    <div class="card-body">
  
      <img src="${result.img}" class="card-img-top"/>
      <img src="${result.logo}" class="logo"/>
      <span class="circle"></span>
      
      <img
      src="images/like.png"
      class="heart"
      role="button"
      />    
      <h5 class="card-title">${result.name}</h5>
      <p id="location">${result.location} - ${result.publicPrivate}</p>
      
      <a href="${result.more}" target="_blank" class="btn btn-lg btn btn-outline-primary button-primary-over">Learn more</a>
      
    </div>
  </div>
  </div>
  
    `;

  console.log(result.website);
  // <a href="${result.website}" target="_blank" class="btn btn-lg btn btn-outline-primary button-primary-over">Visit Website</a>

  // Append newyly created card element to the container
  container.innerHTML += content;
});
//***********************************************************************************************************************************************************

const hearts = document.getElementsByClassName("heart");
Array.from(hearts).forEach(function (heart) {
  heart.addEventListener("click", function () {
    const src = heart.getAttribute("src");
    if (src === "images/like.png") {
      heart.setAttribute("src", "images/like (1).png");
      localStorage.setItem(heart.id, "liked"); // store the liked state in local storage
    } else if (src === "images/like (1).png") {
      heart.setAttribute("src", "images/like.png");
      localStorage.removeItem(heart.id);
    }
  });
});

//******************************************************************************************************************

function search() {
  var input, filter, items, txtValue;
  input = document.getElementById("searchbox");
  filter = input.value.toUpperCase();
  items = document.querySelectorAll(".card");
  for (var i = 0; i < items.length; i++) {
    txtValue =
      items[i].querySelector(".card-title").textContent ||
      items[i].querySelector(".card-title").innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

/**********************************************************************************************************************************
  //this one would theoretically work/*
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  });
  
  function filter() {
    const cards = document.querySelectorAll(".card");
  
    const DubaiCheckbox = document.getElementById("Dubai");
    const SharjahCheckbox = document.getElementById("Sharjah");
    const AbuDhabiCheckbox = document.getElementById("Abu Dhabi");
    const RasAlKhaimaCheckbox = document.getElementById("Ras Al Khaima");
    const AjmanCheckbox = document.getElementById("Ajman");
    const PrivateCheckbox = document.getElementById("Private");
    const PublicCheckbox = document.getElementById("Public");
  
    for (let i = 0; i < cards.length; i++) {
      const Location = colleges[i].location;
      const publicPrivate = colleges[i].publicPrivate;
  
      if (
        DubaiCheckbox.checked &&
        Location.includes("Dubai") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        DubaiCheckbox.checked &&
        Location.includes("Dubai") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        DubaiCheckbox.checked &&
        Location.includes("Dubai") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        DubaiCheckbox.checked &&
        Location.includes("Dubai") &&
        PrivateCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else if (
        SharjahCheckbox.checked &&
        Location.includes("Sharjah") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        SharjahCheckbox.checked &&
        Location.includes("Sharjah") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        SharjahCheckbox.checked &&
        Location.includes("Sharjah") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        SharjahCheckbox.checked &&
        Location.includes("Sharjah") &&
        PrivateCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else if (
        AbuDhabiCheckbox.checked &&
        Location.includes("Abu Dhabi") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        AbuDhabiCheckbox.checked &&
        Location.includes("Abu Dhabi") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        AbuDhabiCheckbox.checked &&
        Location.includes("Abu Dhabi") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        AbuDhabiCheckbox.checked &&
        Location.includes("Abu Dhabi") &&
        PrivateCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah") &&
        PrivateCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else if (
        AjmanCheckbox.checked &&
        Location.includes("Ajman") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        AjmanCheckbox.checked &&
        Location.includes("Ajman") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        AjmanCheckbox.checked &&
        Location.includes("Ajman") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        AjmanCheckbox.checked &&
        Location.includes("Ajman") &&
        PrivateCheckbox.AjmanCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
  }
});

function filter() {
  const cards = document.querySelectorAll(".card");

  const DubaiCheckbox = document.getElementById("Dubai");
  const SharjahCheckbox = document.getElementById("Sharjah");
  const AbuDhabiCheckbox = document.getElementById("Abu Dhabi");
  const RasAlKhaimaCheckbox = document.getElementById("RasAlKhaima");
  const AjmanCheckbox = document.getElementById("Ajman");
  const FujairahCheckbox = document.getElementById("Fujairah");
  const PrivateCheckbox = document.getElementById("Private");
  const PublicCheckbox = document.getElementById("Public");

  // we need thos as a string for each filter
  // Location
  let FDubaiCheckbox;
  let FSharjahCheckbox;
  let FAbuDhabiCheckbox;
  let FRasAlKhaimaCheckbox;
  let FAjmanCheckbox;
  let FFujairahCheckbox;
  // Private / Public
  let FPrivateCheckbox;
  let FPublicCheckbox;

  // empty page
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  if (DubaiCheckbox.checked) {
    FDubaiCheckbox = String(DubaiCheckbox.name);
  }
  if (SharjahCheckbox.checked) {
    FSharjahCheckbox = String(SharjahCheckbox.name);
  }
  if (AbuDhabiCheckbox.checked) {
    FAbuDhabiCheckbox = String(AbuDhabiCheckbox.name);
  }
  if (RasAlKhaimaCheckbox.checked) {
    FRasAlKhaimaCheckbox = String(RasAlKhaimaCheckbox.name);
  }
  if (AjmanCheckbox.checked) {
    FAjmanCheckbox = String(AjmanCheckbox.name);
  }
  if (FujairahCheckbox.checked) {
    FFujairahCheckbox = String(FujairahCheckbox.name);
  }

  if (PrivateCheckbox.checked) {
    FPrivateCheckbox = String(PrivateCheckbox.name.toLowerCase());
  }
  if (PublicCheckbox.checked) {
    FPublicCheckbox = String(PublicCheckbox.name.toLowerCase());
  }

  const Locarr = [
    FDubaiCheckbox,
    FSharjahCheckbox,
    FAbuDhabiCheckbox,
    FRasAlKhaimaCheckbox,
    FAjmanCheckbox,
    FFujairahCheckbox,
  ];
  const PrPubarr = [FPrivateCheckbox, FPublicCheckbox];

  for (let i = 0; i < cards.length; i++) {
    {
      const Location = colleges[i].location;
      const publicPrivate = colleges[i].publicPrivate;

      // if both filterss are checked
      if (
        (DubaiCheckbox.checked ||
          SharjahCheckbox.checked ||
          AbuDhabiCheckbox.checked ||
          RasAlKhaimaCheckbox.checked ||
          AjmanCheckbox.checked ||
          FujairahCheckbox.checked) &&
        (PublicCheckbox.checked || PrivateCheckbox.checked)
      ) {
        console.log("--------------Both Filter");
        if (
          Locarr.includes(Location) &&
          PrPubarr.includes(publicPrivate)
          // Location == SharjahCheckbox.name
          // Location in (DubaiCheckbox.name, SharjahCheckbox.name) ||
          // publicPrivate in (PrivateCheckbox, PublicCheckbox)
          //        Locarr.includes(Location) ||
          //      PrPubarr.includes(publicPrivate)
        ) {
          cards[i].style.display = "block";
        }
      }

      // Location filter is checked
      if (
        (DubaiCheckbox.checked ||
          SharjahCheckbox.checked ||
          AbuDhabiCheckbox.checked ||
          RasAlKhaimaCheckbox.checked ||
          AjmanCheckbox.checked ||
          FujairahCheckbox.checked) &&
        !(PublicCheckbox.checked || PrivateCheckbox.checked)
      ) {
        console.log("--------------Location filter");
        if (
          Locarr.includes(Location)
          // Location == SharjahCheckbox.name
          // Location in (DubaiCheckbox.name, SharjahCheckbox.name) ||
          // publicPrivate in (PrivateCheckbox, PublicCheckbox)
          //        Locarr.includes(Location) ||
          //      PrPubarr.includes(publicPrivate)
        ) {
          cards[i].style.display = "block";
        }
      }

      // PubPrivate filter is checked
      if (
        (PublicCheckbox.checked || PrivateCheckbox.checked) &&
        !(
          DubaiCheckbox.checked ||
          SharjahCheckbox.checked ||
          AbuDhabiCheckbox.checked ||
          RasAlKhaimaCheckbox.checked ||
          AjmanCheckbox.checked ||
          FujairahCheckbox.checked
        )
      ) {
        console.log("--------------PubPrivate filter");
        if (PrPubarr.includes(publicPrivate)) {
          cards[i].style.display = "block";
        }
      }
      if (
        !(
          ((DubaiCheckbox.checked ||
            SharjahCheckbox.checked ||
            AbuDhabiCheckbox.checked ||
            RasAlKhaimaCheckbox.checked ||
            AjmanCheckbox.checked ||
            FujairahCheckbox.checked) &&
            (PublicCheckbox.checked || PrivateCheckbox.checked)) ||
          ((PublicCheckbox.checked || PrivateCheckbox.checked) &&
            !(
              (DubaiCheckbox.checked ||
                SharjahCheckbox.checked ||
                AbuDhabiCheckbox.checked ||
                RasAlKhaimaCheckbox.checked ||
                AjmanCheckbox.checked ||
                FujairahCheckbox.checked) &&
              (PublicCheckbox.checked || PrivateCheckbox.checked)
            )) ||
          ((DubaiCheckbox.checked ||
            SharjahCheckbox.checked ||
            AbuDhabiCheckbox.checked ||
            RasAlKhaimaCheckbox.checked ||
            AjmanCheckbox.checked ||
            FujairahCheckbox.checked) &&
            !(
              (DubaiCheckbox.checked ||
                SharjahCheckbox.checked ||
                AbuDhabiCheckbox.checked ||
                RasAlKhaimaCheckbox.checked ||
                AjmanCheckbox.checked ||
                FujairahCheckbox.checked) &&
              (PublicCheckbox.checked || PrivateCheckbox.checked)
            ))
        )
      ) {
        cards[i].style.display = "block";
      }
    }
  }
}
