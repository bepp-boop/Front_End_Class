import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, showQuiz, onQuiz }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showQuiz ? 'green' : 'red'} text={showQuiz ? 'Open user' : 'Close user'} onClick={onQuiz} />
        </header>

    )
}
Header.defaultProps = {
    title: 'Default',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header