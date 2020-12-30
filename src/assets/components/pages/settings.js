const ColorKey = (props) => {

    const styles = {
        height: "2rem",
        width: "2rem",
        backgroundColor: props.color
    }

    return (
        <div className="flex align-center justify-between color-key">
            <div style={ styles }></div>
            <span>{ props.name }</span>
        </div>
    )
}


export {  
    ColorKey
}