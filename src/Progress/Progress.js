import './styleLoad.css'

const Progress = () => {
    return (
        <div className="progress-bar-container">
            <label id='progress-bar-label'>Loading...</label>
            <progress id="progress-bar" value="0" max="100"></progress>
        </div>
    )
}
export default Progress