import { Base } from "./index.styled"
import { Props } from "./index.type"

function UserCard(props: Props): JSX.Element {
    const { className = "", style = {}, name = "", description = "", image = "", onClick = undefined } = props
    return (
        <Base className={className} style={style} onClick={onClick}>
            <img className="card-image" height={20} src={image} alt="hola" />
            <div className="card-description">
                <h5 className="card-description-name">{name}</h5>
                <p className="card-description-label">{description}</p>
            </div>
        </Base>
    )
}

export default UserCard
