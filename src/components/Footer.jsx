function Footer(props) {
    // desctructuring 
    const {showModal, handleToggleModal, data} = props;
    
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>
            </div>
            <button
                onClick={handleToggleModal}
            >
            <i className="fa-solid fa-circle-info fa-2x"></i>
            </button>
        </footer>
    )
}

export default Footer