SharePoint REST API 

API - minimum we need URL and Method (Get, Put, Post, DELETE etc )
Entry to SharePoint API is SiteCollectionUrl/_api

Information about Web (root web) : URL: SiteCollectionUrl/_api/web
Lists in Site Collection : URL: SiteCollectionURl/_api/web/lists
Dont pull all the properties of list, get only Title,ItemCount, Created, Hidden properties of the list 
 to achieve this we have to use oDATA $select to limit the columns(peropeties)
    URl: SiteCollectionURl/_api/web/lists?$select=Title,ItemCount,Created,Hidden
Dont bring any sharepiont list that are hidden from a user 
to Achieve this we have to use the oData $filter - limits the number of records returned (Comparison )
URl: SiteCollectionURl/_api/web/lists?$select=Title,ItemCount,Created,Hidden&$filter=Hidden eq false

Get specifc list from a sharepoint site collection by list name examle 
URL: /_api/web/lists/getbytitle('Name of the list')
example /_api/web/lists/getbytitle('Expense Tracker')?$select=Id,Title,ItemCount,Created,Hidden
gets list name called Expense Tracker

Items in sharepoint is 
URL: /_api/web/lists/getbytitle('Name of the list')/Items

How to know the person who created item (Author)
We have to use oDATA called $expand to expand user column or any lookup 
URL: /_api/web/lists/getbytitle('Name of the list')/Items?$expand=Author

Publicly available API example iTune search https://itunes.apple.com/search?term=Tilahun

Microsoft API: Graph API

HTML
HTML, CSS and javaScript are web technolgies, 

HTML represent the content or structure of a web 
CSS: Cascading style sheet is to format, layout, spacing an HTML content 
javaScript adds behavir to the Web 

An element or node is represened by <NameOfNode> and some comes with a pair.Start and End Node. 
End node is similar to start node with back slash in the start of the ndoe example: </NameOfNode>
What are the different contents we read on a web?
    - Paragraphs (Texts) - elenment p examle <p>Some text</p>
    - Links - element a  exmple <a href="">Some text</a>
    - Images - element img example <img src="">
    - new line(break) - element br example <br>
    - Table - element table, td, tr, th <table><tr><td></td></tr></table>
    - Bulletted items element ul, li example <ul><li>Item 1</li></ul>
    - Numbered Items ol, li  example <ol><li>Item 1</li></ol>
    - Headings h1,h2,h3...h6 example <h1>Thisis a heading</h1>
    - Videos element video 
    - Audio element audio 
    - Youtube and content from other website - element iframe 
    - block element - div example <div>Content </div>
    - inline element - span examle <span> content </span>

    - Button - element button <button>Buttun Name</button>
    - Text Box - element input <input>
    - Multi line text box - element textArea
    - Drop down - select, option
    - Radio button - element input type radio examle <input type="radio">
    - Check boxes - input type checkbox <input type="checkbox">
    

    Cascading style sheet 

    Syntax 

    selector {
        property1: value1; example: font-size: 16px;
        ropety2:value2;
        }






Reference: SharePoint REST
https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/use-odata-query-operations-in-sharepoint-rest-requests
https://www.w3schools.com/html HTML reference