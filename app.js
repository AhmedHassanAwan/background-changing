const btn = document.querySelector("#click");


function color() {

    const x = Math.random() * 255
    const y = Math.random() * 255
    const z = Math.random() * 255


     btn.style.background ="rgb("+y+","+x+","+z+")"
     document.body.style.background ="rgb("+y+","+x+","+z+")"
    
}


