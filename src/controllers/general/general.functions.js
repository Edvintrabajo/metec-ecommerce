
export const showAlert = (message, type) => {
    const alert = document.querySelector("#message-container");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    let timer = 2;

    if (type == "error") {
        img.src = "icons/cancel.svg";
        div.style.backgroundColor = "rgb(242, 101, 101)";
    }
    else if (type == "warning") {
        img.src = "icons/warning.svg";
        div.style.backgroundColor = "rgb(242, 242, 101)";
    }
    else if (type == "success") {
        img.src = "icons/check.svg";
        div.style.backgroundColor = "rgb(101, 242, 101)";
    } 
    else {
        img.src = "icons/info.svg";
        div.style.backgroundColor = "rgb(101, 242, 242)";
    } 
    
    img.style.width = "25px";
    img.style.margin = "10px";
    
    p.innerHTML = message;
    p.style.color = "black";
    
    div.appendChild(img);
    div.appendChild(p);
    div.style.display = "flex";
    div.style.width = "600px";
    div.style.height = "60px";
    div.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";
    div.style.padding = "5px";
    div.style.marginTop = "7px";
    div.style.justifyContent = "start";
    div.style.alignItems = "center";
    div.style.border = "2px solid black";
    div.style.borderRadius = "10px";
    div.style.opacity = 1;
    
    alert.appendChild(div);
    
    const interval = setInterval(() => {
        timer -= 0.005;
        if (timer <= 1) {
            timer -= 0.01;
            div.style.opacity = timer;
        }
        if (timer <= 0) {
            alert.removeChild(div);
            clearInterval(interval);
        }
    } , 10);
}

// Aplicar efecto smooth scroll
export const scrollToTopSmooth = () => {
    window.scrollTo({ top: 120, behavior: "smooth" });
};