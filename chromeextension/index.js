let myLeads = []
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEL = document.getElementById("input-el")

const ulEL = document.getElementById("ul-el")

const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocal) {
    myLeads = leadsFromLocal
    render(myLeads)
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEL.value)
    inputEL.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEL.innerHTML = listItems
}