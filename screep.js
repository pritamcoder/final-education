const navlink = document.getElementsByClassName("navlk")
const tab_link = document.getElementsByClassName("tab_link")
const tab_content = document.getElementsByClassName("tab_content")

function fastop() {

    for (const line of navlink) {
        line.classList.remove("activ")
    }
    event.currentTarget.classList.add("activ")
}
function about_style(fastarg) {
    for (const tabstyle of tab_link) {
        tabstyle.classList.remove("activ_link")
    }
    for (const tabcontent of tab_content) {
        tabcontent.classList.remove("activ_content")
    }
    event.currentTarget.classList.add("activ_link")
    document.getElementById(fastarg).classList.add("activ_content")
}

let ml1=document.getElementById('buttt')
let ul=document.getElementById('ul')



function anime(){
    ul.classList.toggle('anim')
    ml1.classList.toggle('chang')

}
