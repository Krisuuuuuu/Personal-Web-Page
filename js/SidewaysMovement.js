function MoveMottoRight()
{
    const scrollValue = $document.scrollTop();
    console.log(scrollValue);
    
    if(scrollValue < windowHeight)
    {
        headerMotto.addClass('mottoActive');
    }
}

$document.on("scroll", MoveMottoRight);