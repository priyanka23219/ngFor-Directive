import { animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     
     movies: Movie[] =[  
        {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:' Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
        {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:' Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
        {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:' Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
        {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:' Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
        {title:'Sonic-The hedgehog', director:'Jeff Fowler', cast:'Ben Schwartz, James Marsden', releaseDate:'June 26 2020'},
        {title:'Underwater', director:'William Euak', cast:'kristen stewart, vincent cassel', releaseDate:'January 17 2020'}, 
        {title:'nherit the Viper', director:'Anthony jerjen', cast:'Josh hartnett , Margarita Levieva', releaseDate:'January 10 2020'}, 
        {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:' Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
        {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:' Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
        {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:' Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
        {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:' Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
        {title:'Sonic-The hedgehog', director:'Jeff Fowler', cast:'Ben Schwartz, James Marsden', releaseDate:'June 26 2020'},
        {title:'Underwater', director:'William Euak', cast:'kristen stewart, vincent cassel', releaseDate:'January 17 2020'}, 
        {title:'nherit the Viper', director:'Anthony jerjen', cast:'Josh hartnett , Margarita Levieva', releaseDate:'January 10 2020'},  
        {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:' Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
        {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:' Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
        {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:' Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
        {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:' Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
        {title:'Sonic-The hedgehog', director:'Jeff Fowler', cast:'Ben Schwartz, James Marsden', releaseDate:'June 26 2020'},
        {title:'Underwater', director:'William Euak', cast:'kristen stewart, vincent cassel', releaseDate:'January 17 2020'}, 
        {title:'nherit the Viper', director:'Anthony jerjen', cast:'Josh hartnett , Margarita Levieva', releaseDate:'January 10 2020'},    
      ]  
}   
class Movie {  
    title : string | undefined;  
    director : string | undefined;  
    cast : string | undefined;  
    releaseDate : string | undefined;  
}  


