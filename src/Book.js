import './index.css';

function Book(props) {
    const {image, title, author}=props.book
    const handleClick = function(){
        console.log(title);
    }
    return (
        <article className="book">
            <img src={image} alt="alt" />
            <h1>{author}</h1>
            <h1 onClick={handleClick}>{title}</h1>
            {/* <h1 onClick ={()=>console.log(title)}>{title}</h1> */}
            <button onClick={()=>alert("Hello world!")}> Click Here </button>


        </article>
    )
};

export default Book;
