import Icon from "src/components/common/icon"
import Tag from "src/components/common/tag"
import langColors from "src/utils/lang-colors.json"
import { useTheme } from "styled-components"
import { Base } from "./index.styled"
import { Props, LangColors } from "./index.type"

const colors: LangColors = langColors

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
        onClick = undefined,
    } = props

    const { font } = useTheme()

    return (
        <Base className={className} style={style} onClick={onClick}>
            <div className="card-row card-head">
                <Icon className="card-head-icon" name={"repository"} fillColor={font.color.primary} />
                <h5 className="card-title">{name}</h5>
            </div>
            <p className="card-description">{description}</p>
            {topics.length > 0 && (
                <div className="card-topics">
                    {topics.map((topic, index) => (
                        <Tag key={index} className="card-topics-tag">
                            {topic}
                        </Tag>
                    ))}
                </div>
            )}
            <div className="card-row">
                <div className="card-row card-item">
                    <Icon className="card-item-icon" name={"star"} />
                    <p className="card-item-label">{stars > 0 ? `${Math.round(stars / 1000)}k` : "0"}</p>
                </div>
                <div className="card-row card-item">
                    <span
                        className="card-item-shape"
                        style={{ backgroundColor: colors[language] || font.color.primary }}
                    ></span>
                    <p className="card-item-label">{language || "Otro"}</p>
                </div>
                <p className="card-item-label">{license}</p>
            </div>
        </Base>
    )
}

export default RespositoryCard
