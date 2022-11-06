import './App.css';
import Book from './Book'

const books=[
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/300px-Book_stub_img.svg.png",
    author: "Maraga",
     title: "FirstBook"
   },
   
   {
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/300px-Book_stub_img.svg.png",
     author: "Tator",
     title: "mySecondBook"
   },
   
    {
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/300px-Book_stub_img.svg.png",
     author: "third book",
     title: "3333 Book"
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
