
import "./TodoCard.css"
import { ButtonCard } from "../ButtonCard/ButtonCard"

export const TodoCard = ({TodoText = "Todo Text", onComplete = null, onDelete = null, isCompleted = false}) => {

    return (
        <div className={`TodoCardDessign ${isCompleted ? "is-completed" : ""}`}>

            <span className="card-tittle">{TodoText}</span>
            <hr/>



            <div className="button-actions-section">
                
              <ButtonCard TextButton="Completar" onClick={onComplete} />
              <ButtonCard TextButton="Eliminar" onClick={onDelete} />

            </div>


        </div>
    )




}