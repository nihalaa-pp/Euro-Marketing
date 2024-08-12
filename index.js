document.addEventListener("DOMContentLoaded", function() {
    var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "0px";

    function menutoggle() {
        if (MenuItems.style.maxHeight === "0px") {
            MenuItems.style.maxHeight = "200px";
        } else {
            MenuItems.style.maxHeight = "0px";
        }
    }

    // Attach event listener to menu toggle button if it exists
    // Example: document.getElementById('menu-toggle-button').addEventListener('click', menutoggle);

    // JavaScript function included here as a fallback
    const buttons = document.querySelectorAll('.gtqt');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('CONTACT US - 9846967310,9495838063,9048842537');
            // You can replace this alert with code to handle the button click,
            // such as sending a request or showing a form.
        });
    });
});
