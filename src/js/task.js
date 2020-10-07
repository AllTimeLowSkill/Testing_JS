const create_task_btn = document.querySelector('.create_task_btn')
const task_list = document.querySelector('.main_task_list')
const nav_list_task = document.querySelector('.nav_list_task')


class Task{

    task_name = ''
    task_date = ''
    task_end = ''
    task_desc = ''
    color = 'black'

    create_task(){
        const name_task = document.querySelector('#name_task')
        const date_task = document.querySelector('#date_task')
        const end_task = document.querySelector('#end_task')
        const desc_task = document.querySelector('#desc_task')
        
        this.task_name = name_task.value
        this.task_date = date_task.value
        this.task_end = end_task.value
        this.task_desc = desc_task.value

        if(this.task_end < this.task_date){
            alert('Введите корректную дату')
        }else{
            this.render()
        }
 
    }

    render(){
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.className = "task"
        
        div.innerHTML = `
            <p>Название: ${this.task_name}</p>
            <p>Дата начала: ${this.task_date}</p>
            <p>Дата окончания: ${this.task_end}</p>
            <p>Описание: ${this.task_desc}</p>
        `

        const nav_title = document.createElement('li')
        nav_title.textContent = this.task_name

        nav_list_task.append(nav_title)

        const check_status = document.createElement('input')
        check_status.type = "checkbox"

        const remove_task = document.createElement('button')
        remove_task.textContent = 'Удалить задачу'

        check_status.onclick = () => {
            if(check_status.checked === true){
                this.color = 'green'
                this.isSuccess = true
                div.style.backgroundColor = this.color
                nav_title.style.color = this.color
            }else{
                this.color = 'white'
                this.isSuccess = false
                div.style.backgroundColor = this.color
                nav_title.style.color = "black"
            }
        }

        remove_task.onclick = () => {
            nav_title.remove()
            li.remove()
        }

        div.append(check_status)
        div.append(remove_task)
        li.append(div)
        task_list.append(li)

        let date_now = new Date()
        const task_date_end = new Date(this.task_end)
        if (`${task_date_end.getFullYear()}-${task_date_end.getMonth()}-${task_date_end.getDay()}` < `${date_now.getFullYear()}-${date_now.getMonth()}-${date_now.getDay()}`) {
            div.style.backgroundColor = "red"
            nav_title.style.color = "red"
            check_status.remove()
        }

    }    
}

create_task_btn.onclick = () => {
    const task = new Task()
    task.create_task()
}
