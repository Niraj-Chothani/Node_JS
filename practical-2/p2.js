const books = 
{   
    title: "Harry Potter and the Sorcerer's Stone",   
    author: "J.K. Rowling",   
    publish_year: 1997,   
    print_info: function () 
    {     
        console.log(`     
        title: ${this.title}     
        author: ${this.author} 
        publish_year: ${this.publish_year}
        `); 
    } 
}; 
books.print_info(); 
