
import "./ButtonCard.css"

export const ButtonCard = ({TextButton, onClick = null}) => {

    return (
        <div className="ButtonCardDessign" onClick={onClick}>
            {TextButton}
        </div>
    )
}