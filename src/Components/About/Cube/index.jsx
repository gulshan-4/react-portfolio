import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './index.scss'

const Cube = ()=>{

    return (
        <div className="state-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faNode} color='#F7F7F7' />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faDatabase} color='#42759C' />
                    </div>
                </div>
            </div>
    )
}

export default Cube;