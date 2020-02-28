const $description = $("section.me div.aboutMe")
const descriptionHeight = $description.outerHeight();
const descriptionPosition = $description.offset().top;

function ShowDescritpion()
{
    let scrollValue = $document.scrollTop();

    if(scrollValue > descriptionPosition - windowHeight)
    {
        $description.addClass("aboutMeActive");
    }
}

$document.on("scroll", ShowDescritpion);