const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง
// class Book {
//     constructor (isbn,title= "untitled",ebook= false){
//         this.isbn=isbn
//         this.title=title
//         this.ebook=ebook
//         this.authors=[]
//     }
//     addAuthor(fn,ln){
//         let name = {
//             firstname : fn,
//             lastname : ln
//         }
//         this.authors.push(name)
//         return this.authors.length
//     }
//     getFirstAuthor(){
//         return this.authors[0]
//     }
//     getCoAuthors(){
//         if(this.authors.length === 1){
//           return []  
//         }
//         else{
//         return this.authors.slice(1)
//         }
//     }
//     findAuthor(firstname, lastname){
//     return this.authors.find(e => e.firstname.toLowerCase() === firstname.toLowerCase() &&
//                                   e.lastname.toLowerCase() === lastname.toLowerCase())
//     }
//     hasEbook(){
//         return this.ebook
//     }
// }
class Book {
    constructor(isbn, title, ebook) {
      this.isbn = isbn;
      this.title = title || 'untitled';
      this.ebook = ebook || false;
      this.authors = [];
    }
  
    addAuthor(fn, ln) {
      this.authors.push({
        firstname: fn,
        lastname: ln
      });
      return this.authors.length;
    }
  
    getFirstAuthor() {
      return this.authors[0];
    }
  
    getCoAuthors() {
      return this.authors.slice(1);
    }
  
    findAuthor(firstname, lastname) {
      return this.authors.find(author => (author.firstname.toLowerCase() === firstname.toLowerCase()) && (author.lastname.toLowerCase() === lastname.toLowerCase()));
    }
  
    hasEbook() {
      return this.ebook;
    }
  }
module.exports = Book
