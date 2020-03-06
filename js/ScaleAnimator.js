const $description = $("section.aboutMe div.container div.description")
const $section = $("section.aboutMe")
const sectionHeight = $section.outerHeight();
const sectionPosition = $section.offset().top;

function ShowDescritpion()
{
    let scrollValue = $document.scrollTop();

    if(scrollValue > sectionPosition - windowHeight)
    {
        $description.addClass("aboutMeActive");
    }
}

$document.on("scroll", ShowDescritpion);