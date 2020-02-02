$(document).ready(function(){
    // This allows the top navigation links to be visible via a hamburger menu when the screen is small enough, and for the menu to be dismissed upon clicking the x 
    $(function() {
        $('.topNavBar__hamburgerButton').click(function() {
            $('.topNavBar__dropdown').slideDown('slow'); 
            $('.topNavBar__hamburgerButton').removeClass('show');
            $('.topNavBar__exitButton').addClass('show');
            $('.topNavBar').addClass('border');
        });

        $('.topNavBar__exitButton').click(function() {
            $('.topNavBar__dropdown').slideUp('slow');
            $('.topNavBar__exitButton').removeClass('show');
            $('.topNavBar__hamburgerButton').addClass('show');
            $('.topNavBar').removeClass('border');
        });
    });
});

// I acknowledge that there is a bug: If you widen the page again while the dropdown is expanded, the dropdown still remains. Will need to address this in a v2. 