const contents = document.querySelectorAll(".content");
const listItem = document.querySelectorAll("nav ul li");

listItem.forEach((item, indx)=> {
    item.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        contents[indx].classList.add('show');
    })
})

function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}
function hideAllItems(){
    listItem.forEach(item => item.classList.remove('active'))
}