// Run script on content load
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".cook-consent-overlay");
    const acceptButton = document.querySelector(".accept-cook");

    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Function to check a cookie value
    function checkCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].indexOf(nameEQ) === 0) {
                return cookies[i].substring(nameEQ.length);
            }
        }
        return null;
    }

    // Has the user already accepted cookies?
    if (checkCookie("cookiesAccepted") === "true") {
        overlay?.classList.remove("cook-active");
    } else {
        overlay?.classList.add("cook-active");
    }

    // Set cookiesAccepted to true on the button
    acceptButton?.addEventListener("click", () => {
        setCookie("cookiesAccepted", "true", 365);
        overlay?.classList.remove("cook-active");
    });
});
