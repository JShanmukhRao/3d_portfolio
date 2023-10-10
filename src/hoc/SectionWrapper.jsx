
import {styles} from '../styles'

const SectionWrapper = (Component,idName) => {
    return function (props) {
        return (
            <div  className={`${styles.padding} max-w-7xl mx-auto relative z-0  h-screen fade-out`}>

                <span id={idName}>&nbsp;</span>
                <Component {...props} />
            </div>
        )
    }
}

export default SectionWrapper;