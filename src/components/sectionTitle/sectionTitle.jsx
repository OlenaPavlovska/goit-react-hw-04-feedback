import {
    Component
}

from "react";
import css from './sectionTitle.module.css'
import PropTypes from 'prop-types'




export class Section extends Component {
    render() {
        const {
            title,
            children
        }

        =this.props;

        return (<div> <h2 className= {
                css.title
            }

            > {
                title
            }

            </h2> {
                children
            }

            </div>)
    }
}

Section.propTypes= {
    title: PropTypes.string.isRequired
}