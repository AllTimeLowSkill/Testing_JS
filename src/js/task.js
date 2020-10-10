const create_task_btn = document.querySelector('.create_task_btn')
const task_list = document.querySelector('.main_task_list')
const nav_list_task = document.querySelector('.nav_list_task')
const back_list_task = document.querySelector('.back_list_task')
const search_task = document.querySelector('.search_task')
const search_task_btn = document.querySelector('.search_task_btn')

let id = 0;
let tasks = []

class Task{
    idx = 0
    task_name = ''
    task_date = ''
    task_end = ''
    task_desc = ''
    color = 'white'
    isSuccess = false

    create_task(){
        const name_task = document.querySelector('#name_task')
        const date_task = document.querySelector('#date_task')
        const end_task = document.querySelector('#end_task')
        const desc_task = document.querySelector('#desc_task')
        
        this.idx = id
        this.task_name = name_task.value
        this.task_date = date_task.value
        this.task_end = end_task.value
        this.task_desc = desc_task.value

        if(this.task_end < this.task_date){
            alert('Введите корректную дату')
        }else{
            this.render_nav_title()
            this.render()
            id++
        }
        
    }

    render_nav_title(){
        const nav_title = document.createElement('li')
        nav_title.className = "task_li" 
        nav_title.textContent = this.task_name

        nav_list_task.append(nav_title)

    }

    render(){
        const li = document.createElement('li')
        const div = document.createElement('div')
        li.className = 'task_li'
        div.className = "task"
        
        div.innerHTML = `
            <p>Название: ${this.task_name}</p>
            <p>Дата начала: ${this.task_date}</p>
            <p>Дата окончания: ${this.task_end}</p>
            <p>Описание: ${this.task_desc}</p>
        `

        const nav_title = document.querySelectorAll('.task_li')

        const check_status = document.createElement('input')
        check_status.type = "checkbox"

        const remove_task = document.createElement('button')
        remove_task.textContent = 'Удалить задачу'

        check_status.onclick = () => {
            if(check_status.checked === true){
                this.color = 'green'
                this.isSuccess = true
                div.style.backgroundColor = this.color

                nav_title.forEach(el => {
                    if(el.textContent === this.task_name){
                        el.style.color = "green"
                    }
                })

            }else{
                this.color = 'white'
                this.isSuccess = false
                div.style.backgroundColor = this.color

                nav_title.forEach(el => {
                    if(el.textContent === this.task_name){
                        el.style.color = "black"
                    }
                })
            }
        }

        remove_task.onclick = () => {

            tasks.forEach(el => {
                if(el.task_name === this.task_name){
                    const cur = tasks.indexOf(el)
                    tasks.splice(cur, 1)
                    console.log(tasks)
                }
            })

            nav_title.forEach(el => {
                if(el.textContent === this.task_name){
                    el.remove()
                }    
            })

            li.remove()
        }

        div.append(check_status)
        div.append(remove_task)
        li.append(div)
        task_list.append(li)

        let date_now = new Date()
        const task_date_end = new Date(this.task_end)
        if (`${task_date_end.getFullYear()}-${task_date_end.getMonth()}-${task_date_end.getDay()}` < `${date_now.getFullYear()}-${date_now.getMonth()}-${date_now.getDay()}`) {
            this.color = "red"
            div.style.backgroundColor = "red"
            nav_title.forEach(el => {
                if(el.textContent === this.task_name){
                    el.style.color = 'red'
                }
            })
            check_status.remove()
        }

    }    
}

create_task_btn.onclick = () => {
    
    const task = new Task()
    
    task.create_task()
    tasks.push(task)

    console.log(tasks)
}

search_task_btn.onclick = () => {
    
    const task_li = document.querySelectorAll('.task_li')
    task_li.forEach(el => {
        el.remove()
    })

    const new_tasks = tasks.filter(function (el) {
        return el.task_name === search_task.value
    })
    console.log(new_tasks)

    new_tasks.forEach(el => {
        el.render()
        el.render_nav_title()
    })
}

back_list_task.onclick = () => {
    const task_li = document.querySelectorAll('.task_li')
    task_li.forEach(el => {
        el.remove()
    })

    tasks.forEach(el => {
        el.render()
        el.render_nav_title()
    })
}

const isSuccess = document.querySelector('#isSuccsess')
const isFailed = document.querySelector('#isFailed')
const isWorking = document.querySelector('#isWorking')

isSuccess.onclick = () => {
    if(isSuccess.checked){
        const succsess_tasks = tasks.filter(el => {
            return el.color === "green"
        })

        const task_li = document.querySelectorAll('.task_li')
        task_li.forEach(el => {
            el.remove()
        })

        succsess_tasks.forEach(el => {
            el.render()
            el.render_nav_title()
        })
    }else{
        const task_li = document.querySelectorAll('.task_li')
        task_li.forEach(el => {
            el.remove()
        })

        tasks.forEach(el => {
            el.render()
            el.render_nav_title()
        })
    }
}

isFailed.onclick = () => {
    if(isFailed.checked){
        const succsess_tasks = tasks.filter(el => {
            return el.color === "red"
        })

        const task_li = document.querySelectorAll('.task_li')
        task_li.forEach(el => {
            el.remove()
        })

        succsess_tasks.forEach(el => {
            el.render()
            el.render_nav_title()
        })
    }else{
        const task_li = document.querySelectorAll('.task_li')
        task_li.forEach(el => {
            el.remove()
        })

        tasks.forEach(el => {
            el.render()
            el.render_nav_title()
        })
    }
}

isWorking.onclick = () => {
    if(isWorking.checked){
        const succsess_tasks = tasks.filter(el => {
            return el.color === "white"
        })

        const task_li = document.querySelectorAll('.task_li')
        task_li.forEach(el => {
            el.remove()
        })

        succsess_tasks.forEach(el => {
            el.render()
            el.render_nav_title()
        })
    }else{
        const task_li = document.querySelectorAll('.task_li')
        task_li.forEach(el => {
            el.remove()
        })

        tasks.forEach(el => {
            el.render()
            el.render_nav_title()
        })
    }
}




