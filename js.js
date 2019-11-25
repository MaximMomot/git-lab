// супер сложний проект з новим текстом
var books=[];

// class Book
// {
//   constructor(Book,Autor,Rik,Vudano,Storinok) 
//   {
//     this.book =Book;
//     this.autor =Autor;
//     this.rik=Rik;
//     this.vudano = Vudano;
//     this.storinok = Storinok;
    
//   }
//   book_out(){
//     console.log(this.vudano+"\t"+this.rik+"\t"+this.autor+"\t"+"\t"+this.storinok)
//   }
// }
function Book()

  {
    this.book =document.getElementById('name').value;
    this.autor =document.getElementById('autor').value;
    this.rik=document.getElementById('rik').value;
    this.vudano = document.getElementById('vudano').value;
    this.storinok = document.getElementById('kilk').value;
    
  }


// function  autoadd()
// {
//   var o=new Book;
//   o = new Book ('Сонечко','Петров І. В.','1995','Абабалагама','506');
//   books.push(o);
//   o = new Book ('Вірші','Савич К. С.','2002','йцукен','65');
//   books.push(o);
//   o = new Book ('Казки','Бихал М. П.','2007','qwerty','42');
//   books.push(o);
//   o = new Book ('Байки','Балагур Т. Р.','2001','Світ книг','131');
//   books.push(o);
//   o = new Book ('Тварини','Іванов Н. С.','1999','Укр книга','78');
//   books.push(o); 
// }

function  add()
{
  var o=new Book(document.getElementById('name').value,document.getElementById('autor').value,document.getElementById('rik').value,document.getElementById('vudano').value,document.getElementById('kilk').value);
  books.push(o);
  console.log("Ми додали наступну книгу: ");
  console.log(o); 
}

function out()
{
  books.sort(function(a, b)
  {
    return a.rik-b.rik
  })


  books.sort(function(a, b){
    var vudanoA=a.vudano.toLowerCase(), vudanoB=b.vudano.toLowerCase()
    if (vudanoA < vudanoB)
      return -1
    if (vudanoA > vudanoB)
      return 1
    return 0
    })
  console.log("Відсортований список книг:");
  for(i=0;i<books.length;i++)
  console.log("Видавництво: "+books[i].vudano+",    рік видавництва: "+books[i].rik,",    кількість сторінок: "+books[i].storinok,",    автор книги: "+books[i].autor);
  // for(i=0;i<books.length;i++)
  // books[i].book_out();
}