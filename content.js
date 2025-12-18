const  SHIN_CHAN=
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvhWZXl2B0_2z8LXxNzHD--NIezaNf4P3lCfYpKkPKuVjrZXWUJoz9hOHIt-fIQsZDdn7o0BGPZyt6rijbJF_Fo5smZEetnjsR8xG9V8w&s=10"
setInterval(() => {
    const imgs = document.getElementsByTagName("img");

    for (let img of imgs){
        img.src=SHIN_CHAN;
        img.removeAttribute("srcset");
        img.removeAttribute("sizes");
    }
},1000);