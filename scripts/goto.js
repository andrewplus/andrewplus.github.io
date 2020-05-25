// selectors
wrapperElement = document.querySelector(".wrapper");

const pageMode = page => {
    inPage = true;
    wrapperElement.classList.add("page-"+page);
    wrapperElement.classList.add("in-page");
    document.querySelector(".tile."+page).classList.add("open");
    document.querySelector(".click-mask").classList.add("display");
}

const goTo = (page, iframeOverride) => {
    if (page === "home") {
        inPage = false;
        wrapperElement.classList.remove("page-about-me");
        wrapperElement.classList.remove("page-portfolio");
        wrapperElement.classList.remove("page-share");
        wrapperElement.classList.remove("page-contact");
        wrapperElement.classList.remove("page-social");
        wrapperElement.classList.remove("page-github");
        document.querySelector(".open").classList.remove("open");
        document.querySelector(".page").remove();
        setTimeout(() => {
            wrapperElement.classList.remove("in-page");
            document.querySelector(".click-mask").classList.remove("display");
        }, 300);
    }
    if (!inPage) {
        setTimeout(() => {
            try { //supress errors
                if (iframeOverride === undefined) {
                    document.querySelector(".tile."+page).insertAdjacentHTML("beforeend", "<iframe scrolling='yes' src='pages/"+page+".html' class='page'></iframe>");
                } else {
                    document.querySelector(".tile."+page).insertAdjacentHTML("beforeend", "<iframe scrolling='yes' src='"+iframeOverride+"' class='page'></iframe>");
                }
            } catch(err) {}
        }, 300);
        if (page === "about-me") {
            pageMode("about-me");
        }
        if (page === "portfolio") {
            pageMode("portfolio");
        }
        if (page === "share") {
            pageMode("share");
        }
        if (page === "contact") {
            pageMode("contact");
        }
        if (page === "social") {
            pageMode("social");
        }
    }
}

const directLink = (url) => {
    window.open(url, '_blank');
}

/*window.onpopstate = (event) => {
    if (window.history.state !== null) {
        goTo(window.history.state.page);
    } else {
        goTo("home");
    }
}*/

/*document.body.onclick = (event) => {
    if (inPage) {
        goTo("home");
    }
}*/