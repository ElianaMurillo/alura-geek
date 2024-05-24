const btnTheme = document.querySelector("[data-theme]");

export default function themeSelected() {

    const theme = localStorage.getItem("theme");

    function localStorageTheme() {
        if ( theme === "light" || theme === null ) {
            window.localStorage.setItem('theme', 'light');
            document.body.classList.add("light-theme");
            btnTheme.innerHTML = `<span>Dark</span><img src="./img/moon.png" alt="Choose website theme">`;
        } else {
            window.localStorage.setItem('theme', 'dark');
            document.body.classList.add("dark-theme");
            btnTheme.innerHTML = `<span>Light</span><img src="./img/sunny.png" alt="Choose website theme">`;
        }
    }

    localStorageTheme();

    btnTheme.addEventListener("click", () => {
        if (document.body.classList.contains("light-theme")) {
            // Turn light mode off -> dark mode on
            window.localStorage.setItem('theme', 'dark');
            document.body.classList.toggle("dark-theme");
            document.body.classList.remove("light-theme");
            btnTheme.innerHTML = `<span>Light</span><img src="./img/sunny.png" alt="Choose website theme">`;
        } else {
            // Turn dark mode off -> light mode on  
            document.body.classList.toggle("light-theme");
            document.body.classList.remove("dark-theme");
            window.localStorage.setItem('theme', 'light');
            btnTheme.innerHTML = `<span>Dark</span><img src="./img/moon.png" alt="Choose website theme"></img>`;
        }
    })
}
