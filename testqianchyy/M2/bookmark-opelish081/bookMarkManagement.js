const { template } = require('@babel/core')
// const Book = require('../test-book-opelish081/book')
//64130500121 
// class BookMark {
//   constructor(isbn, totalPages) {
//     this.isbn = isbn;
//     this.bookMarks = [];
//     this.totalPages = totalPages || 0;
//   }

//   addBookMark(pageNumber) {
//     if (pageNumber >= 1 && pageNumber <= this.totalPages) {
//       this.bookMarks.push(pageNumber);
//       return this.bookMarks.length;
//     }
//   }

//   removeBookMark(pageNumber) {
//     const index = this.bookMarks.indexOf(pageNumber);
//     if (index > -1) {
//       return this.bookMarks.splice(index, 1)[0];
//     }
//   }

//   goToFirstBookMark() {
//     return this.bookMarks[0];
//   }

//   goToLastBookMark() {
//     return this.bookMarks[this.bookMarks.length - 1];
//   }

//   getBookMarks() {
//     return this.bookMarks;
//   }
// }

class BookMark {
  constructor(isbn, totalPages) {
    this.isbn = isbn;
    this.totalPages = totalPages || 0;
    this.bookMarks = [];
  }

  addBookMark(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.bookMarks.push(pageNumber);
      return this.bookMarks.length;
    }else{
      return this.bookMarks.length;
    }
  }
  

  removeBookMark(pageNumber) {
    const index = this.bookMarks.indexOf(pageNumber);
    if (index >= 0) {
      this.bookMarks.splice(index, 1);
      return pageNumber;
    }
  }

  goToFirstBookMark() {
    if (this.bookMarks.length > 0) {
      return this.bookMarks[0];
    }
  }

  goToLastBookMark() {
    if (this.bookMarks.length > 0) {
      return this.bookMarks[this.bookMarks.length - 1];
    }
  }

  getBookMarks() {
    return this.bookMarks;
  }
}
module.exports = BookMark





























