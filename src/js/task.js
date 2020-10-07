const create_task_btn = document.querySelector('.create_task_btn')
const task_list = document.querySelector('.main_task_list')
const nav_list_task = document.querySelector('.nav_list_task')

const task = {
    task_name: '',
    task_date: '',
    task_end: '',
    task_desc: '',
    color: '',

    create_task(){
       const name_task = document.querySelector('#name_task')
       const date_task = document.querySelector('#date_task')
       const end_task = document.querySelector('#end_task')
       const desc_task = document.querySelector('#desc_task')
       
       this.task_name = name_task.value
       this.task_date = date_task.value
       this.task_end = end_task.value
       this.task_desc = desc_task.value

       this.render()
       
    },


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
        nav_list_task.innerHTML += `<li class="el_nav_list_task">${this.task_name}</li>`

        const check_status = document.createElement('input')
        check_status.type = "checkbox"

        const remove_task = document.createElement('button')
        remove_task.textContent = 'Удалить задачу'

        check_status.onclick = () => {
            if(check_status.checked === true){
                this.color = 'green'
                this.isSuccess = true
                div.style.backgroundColor = this.color
            }else{
                this.color = 'white'
                this.isSuccess = false
                div.style.backgroundColor = this.color
            }
        }


        remove_task.onclick = () => {
            const el_nav_list = document.querySelectorAll('.el_nav_list_task')

            el_nav_list.forEach(el => {
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
        task_date_end = new Date(this.task_end)
        if (`${task_date_end.getFullYear()}-${task_date_end.getMonth()}-${task_date_end.getDay()}` < `${date_now.getFullYear()}-${date_now.getMonth()}-${date_now.getDay()}`) {
            div.style.backgroundColor = "red"
            check_status.remove()
        }

    }
    
}

create_task_btn.onclick = () => {

    task.create_task()
}
