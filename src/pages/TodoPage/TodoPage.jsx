
import { useEffect, useState } from "react"
import { TodoCard } from "../../common/TodoCard/TodoCard"
import "./TodoPage.css"

export const TodoPage = () => {

    const initialTodos = [
        {
            id: 1,
            tittle: "first todo!",
            completed: 0,
        }
    ]



    const [todos, setTodos] = useState(initialTodos);

    const addEvent = (e) => {
        if (e.key == "Enter") {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    tittle: e.target.value,
                    completed: 0
                }
            ])

            e.target.value = ""
        }
    }


    const completeEvent = (id) => {

        console.log("entra")

        let outputTodos = todos.map((todo) => {
            if (todo.id == id) {

                return {
                    ...todo,
                    completed: !todo.completed
                }

            }
        })

        setTodos(outputTodos);


    }


    useEffect(() => {
        console.log(todos);
    }, [todos])

    const deleteEvent = (id) => {

        console.log("entra")

        let outputTodos = todos.filter((todo) => {
            if (todo.id != id) {
                return true;
            }
        })

        setTodos(outputTodos);
    }



    return (
        <div className="TodoPageDessign">


            <h2>Todo List</h2>

            <input onKeyUp={addEvent} placeholder="Escribe una nueva tarea..." />


            <div className="TodoCardList">


                {
                    todos.length == 0 ?

                    <div className="">
                        Veo que tienes mucho tiempo libre... ¿Estas de vacaciones? 🏖️☀️ 
                    </div>

                    :  todos.map((todo) => {
                        return <TodoCard
                            key={todo.id}
                            isCompleted={todo.completed}
                            TodoText={todo.tittle}
                            onDelete={() => deleteEvent(todo.id)}
                            onComplete={() => completeEvent(todo.id)}
                        />
                    })
                }




            </div>



        </div>
    )


}