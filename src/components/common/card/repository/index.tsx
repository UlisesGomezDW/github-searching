import Icon from "src/components/common/icon"
import Tag from "src/components/common/tag"
import { Base } from "./index.styled"
import { Props } from "./index.type"

function RespositoryCard(props: Props): JSX.Element {
    const {
        className = "",
        style = {},
        name = "",
        description = "",
        topics = [],
        stars = 0,
        language = "",
        license = "",
    } = props

    return (
        <Base className={className} style={style}>
            <div className="card-row card-head">
                <Icon className="card-head-icon" name={"repository"} />
                <h5 className="card-title">{name}</h5>
            </div>
            <p className="card-description">{description}</p>
            {topics.length > 0 && (
                <div className="card-topics">
                    {topics.map((topic, index) => (
                        <Tag key={index}>{topic}</Tag>
                    ))}
                </div>
            )}
            <div className="card-row">
                <div className="card-row card-item">
                    <Icon className="card-item-icon" name={"star"} />
                    <p className="card-item-label">{stars}</p>
                </div>
                <div className="card-row card-item">
                    <span className="card-item-shape"></span>
                    <p className="card-item-label">{language}</p>
                </div>
                <p className="card-item-label">{license}</p>
            </div>
        </Base>
    )
}

export default RespositoryCard
