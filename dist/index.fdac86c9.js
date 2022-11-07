"use strict";
()=>{
    const button = document.getElementById("hamburger");
    let open = false;
    button.addEventListener("click", ()=>{
        console.log("test");
        clearTimeout(timeOut1);
        if (!open) {
            button.classList.add("open");
            open = true;
            expanded = "true";
            menu.style.display = "grid";
        } else {
            button.classList.remove("open");
            open = false;
            expanded = "false";
            timeOut1 = setTimeout(()=>{
                menu.style.display = "none";
            }, 500);
        }
        if (timeOut2) clearTimeout(timeOut2);
        timeOut2 = setTimeout(()=>{
            menu.setAttribute("aria-expanded", expanded);
        });
    });
};

//# sourceMappingURL=index.fdac86c9.js.map
