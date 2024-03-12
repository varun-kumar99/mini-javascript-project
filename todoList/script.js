const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const tasklist = document.querySelector('.task-list');

// let task = []
btn.addEventListener('click',(e)=>{
    // console.log(inp.value);
    const newitem = document.createElement('div');
    newitem.setAttribute('class', 'item');
    // console.log(newitem);
    let str = ` <div class="section-A">
    <input class="checkbox" type="checkbox"  >
        <li class="text">${inp.value}</li>
    </div>
    <div class="section-B">
        <span class="up">🔼</span>
        <span class="bin">🗑️</span>
        <span class="down">🔽</span>
    </div>`

    newitem.innerHTML = str;
    inp.value = "";
    tasklist.append(newitem);
})

tasklist.addEventListener('click', (e)=>{
    
    const element = e.target.getAttribute('class')
    // console.log(element);
    if(element === 'bin'){
        const item = e.target.parentElement.parentElement;

        // console.log(item);
        item.remove();
    }
    else if(element === 'up'){
        const curritem = e.target.parentElement.parentElement;
        const previtem = curritem.previousElementSibling;
        // console.log(previtem);
        previtem.before(curritem);

    }
    else if(element === 'down'){
        const curritem = e.target.parentElement.parentElement;
        const nextitem = curritem.nextElementSibling;
       
        nextitem.after(curritem);

    }
    else if(element === 'checkbox'){
        const textitem = e.target.nextElementSibling;
        // console.log(textitem)
        textitem.classList.toggle('checked')
    }
})