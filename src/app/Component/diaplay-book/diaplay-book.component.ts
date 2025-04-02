import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Service/Book/book.service';

@Component({
  selector: 'app-diaplay-book',
  standalone: false,
  templateUrl: './diaplay-book.component.html',
  styleUrl: './diaplay-book.component.scss'
})
export class DiaplayBookComponent implements OnInit {
  books: any[] = [];  // Array to store fetched book data

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.GetAllBooks().subscribe((res: any) => {
      console.log('Books received:', res);
   
        this.books = res.data; 
      
    });
  }
}
