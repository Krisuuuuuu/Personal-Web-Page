const $spanCSharp = $("section.skills ul.skillsList li:nth-child(1) span.bar span")
const $spanCPlus = $("section.skills ul.skillsList li:nth-child(2) span.bar span")
const $spanHtml = $("section.skills ul.skillsList li:nth-child(3) span.bar span")
const $spanCss = $("section.skills ul.skillsList li:nth-child(4) span.bar span")
const $spanSql = $("section.skills ul.skillsList li:nth-child(5) span.bar span")
const $sectionSkills = $("section.skills")
const sectionSkillsHeight = $sectionSkills.outerHeight();
const sectionSkillsPosition = $sectionSkills.offset().top;

function ShowBars(){
    let scrollValue = $document.scrollTop();

    if(scrollValue > sectionSkillsPosition - sectionSkillsHeight + sectionSkillsHeight/4){
        $spanCSharp.addClass("cSharp");
        $spanCPlus.addClass("cPlus");
        $spanHtml.addClass("html");
        $spanCss.addClass("css");
        $spanSql.addClass("javascript");
    }
    
}

$document.on("scroll", ShowBars);