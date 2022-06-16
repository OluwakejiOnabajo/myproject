

const person = (meme) => {
    return(
        <p>I am a {meme.name} component {Math.floor(Math.random()*3)}</p>
    )
}

export default person;