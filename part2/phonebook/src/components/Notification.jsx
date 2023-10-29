import ErrorMessage from './ErrorMessage'
import InfoMessage from './InfoMessage'

const Notification = ({message}) => {
    if (message === null) {
        return null
    } else if (message.type === 'error') {
        return <ErrorMessage message={message.text} />
    } else if (message.type === 'info') {
        return <InfoMessage message={message.text} />
    } else {
        return null
    }
}

export default Notification
