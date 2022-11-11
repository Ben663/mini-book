import './App.css';
import Book from './Book'

const books=[
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/300px-Book_stub_img.svg.png",
    author: "Bengamin Grinvald",
    title: "The First Book"
   },
   
   {
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/300px-Book_stub_img.svg.png",
     author: "Bob Leo",
     title: "The Second Book"
   },
   
    {
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/300px-Book_stub_img.svg.png",
     author: "Big Snoow",
     title: "The Third Book"
   }
 ]
function BookList(){
  return(
    <section className="BookList">
      {books.map((book, index)=>{
        return (
          <div key={index}>
            <Book book={book} ></Book>
          </div>
        )

      })}
    </section>
  );
}

export default BookList;
