import React from 'react';


const Video = ({source}: {source: string}) => {
    const style = {display: 'block', flex: 1, maxHeight: '100vh', maxWidth: '100vw'}
    return (
        <video style={style}>
            <source src={source}/>
        </video>
    )
}


export default Video
