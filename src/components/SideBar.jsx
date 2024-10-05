function SideBar(props) {
    const {handleToggleModal, data} = props;
    // console.log('In SideBar:', data)
    return(
        <>
            <div className="sidebar">
                <div 
                    className="bgOverlay"
                    onClick={handleToggleModal}
                >
                </div>
                <div className="sidebarContents">
                    <h2>{data?.title}</h2>
                    <div className="descriptionContainer">
                        <p className="descriptionTitle">
                            Copyright: {data?.copyright} 
                        </p>
                        <p className="descriptionTitle">{data?.date}</p>
                        <p className="descriptionTitle">Description</p>
                        <p>{data?.explanation}</p>
                    </div>
                    <button
                        onClick={handleToggleModal}
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SideBar