;(function() {                  // ignore this line
____set_up_book_learnin____()   // ignore this line



    /**** NOTE ****
     |
     | This file is the guts of the application, where we add the interaction
     | (clicks, etc...) - and turn the "dead" HTML page into an "alive" app.
     | 
     | I'll break this file into pieces, separated by section headings, to
     | help you find your way around
     |
     '*************/



// THE VERY FIRST THING YOU SHOULD DO: delete this line & the one below
return;







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~ INITIAL SETUP ~~


// This is a list of all the available memes. Later, we'll turn each of these 
// into a clickable image, and put it in the grid on the first page.

var memes = [
  "does-not-simply",
  "batman-slap",
  "most-interesting-man",
  "ancient-aliens",
  "doge",
  "grumpy-cat",
  "first-world-problems",
  "condescending-wonka",
  "bad-luck-brian",
  "skeptical-fry",
  "y-u-no",
  "success",
  "brace-yourselves",
  "all-the-things",
  "i-guarantee-it",
  "scumbag-steve",
]

    /**** NOTE ****
    |
    | The thing above is called a "list" (some ppl call it an 'array')
    | To make a new list, put a comma-separated group of things inside a [ ]
    |  
    |    | example:
    |    |   var my_list = [1, 2, 3, "shiner is stinky?", true]
    |
    '*************/




// We'll spend a lot of our time finding HTML tags & doing things to them.
// Let's start by finding the 2 main pages of our application.

var $page1 = $('#page-1')
var $page2 = $('#page-2')


// Now let's find the thumbnail grid

var $thumbnail_grid = $('#thumbnail-grid')


    /**** NOTE ****
     | 
     | To find a tag, we can "hashtag-ify" its ID, like this:
     |
     |    | We want to find this tag .....  <button id="shiner"> 
     |    | We'll use this code ..........  $("#shiner")
     |
     | (don't forget those quotation marks around "#shiner")
     |
     | You can find an element's ID in the index.html file (which you can
     | find in your left sidebar)
     |
     '*************/







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~ START THE APPLICATION ~~


function MAIN() {

  // You can print anything you want to The Console by doing like this:
  console.log("Starting the application.", "Time is:", new Date)


  // The screen is blank! We need to show the first page.
  __________.show()


  // Add each meme in our list to the thumbnail grid.
  memes.forEach( add_meme_thumbnail )

  // Now that everything's in place, let's listen for user actions
  // like clicking & typing...
  listen_for_user_actions()
}


function add_meme_thumbnail( meme_name ) {
  
  // First, let's find the grid of thumbnails
  var $thumbnail_grid = $(__________)

  // Next, we'll put together the HTML for a new thumbnail image
  var html = '<div class="col-xs-2"> ' +
               '<img class="thumbnail"  ' +
               '     src="/img/ XXXXXXXXXX .jpg">' +
             '</div> '

  $(__________).append(html.replace('XXXXXXXXXX', __________))


  console.log("Added a thumbnail for ", meme_name, "!")
}







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~ USER INTERACTION ~~


function listen_for_user_actions() {


  // TODO: left off here


  // This means:
  //     Anytime a <img class="thumbnail"> gets clicked,
  //     run the code inside `handle_thumbnail_click`
  $(".thumbnail").on("click", handle_thumbnail_click)

  // TODO: call 
  $(".caption-input").on("keyup", handle_caption_change)

  $(".size-change-up").on("click", handle_size_up)
  $(".size-change-down").on("click", handle_size_down)
}


function handle_thumbnail_click() {
  console.log("Thumbnail was clicked!")

  // The HTML tag that was clicked is stored in a variable called
  // `this`.
  var $thumbnail = $(this)

  // The `src` attribute (ie. the URL of the thumbnail)
  var thumbnail_src = $thumbnail.attr('src')

  // Set the `src` of the large image to the thumbnail's `src`
  $('#meme-image').attr('src', thumbnail_src)

  // Show the add-caption page
  $('#choose-meme').hide()
  $('#add-caption').show()
}


function handle_size_up() {
  // Find the current font-size of the caption
  var size = GET_CAPTION_SIZE(this)

  // Increase it
  CHANGE_CAPTION_SIZE(this, size + 4)

  console.log("caption size UP")
}

function handle_size_down() {
  // Find the current font-size of the caption
  var size = GET_CAPTION_SIZE(this)

  // Decrease it
  CHANGE_CAPTION_SIZE(this, size - 4)

  console.log("caption size DOWN")
}


function handle_caption_change() {

  // Get the text inside the text box
  var $text_box = $(this)
  var caption = $text_box.val()

  // Find the HTML tag corresponding to the text box
  var $caption_tag = $('#' + $text_box.data('for'))

  // Upate the HTML tag w/ the new caption
  $caption_tag.text(caption)


  // magical hack. removing this will break the text outline.
  __fix_text_outline__($caption_tag)
}




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Helpful Functions
//
//      you don't need to fill these in, but it might be interesting to
//      figure out how they work. they're short & pretty simple.
//

function CHANGE_CAPTION_SIZE( button, new_size ) {
  // We're going to adjust the stroke size relative to the font size
  var stroke = Math.floor(new_size / 7)
  var $caption_tag = $('#' + $(button).data('for'))

  // Set the new font size
  $caption_tag.css('font-size', new_size)

  // Set the new stroke size
  $caption_tag.data('stroke', stroke+'px')
  // $('head').append('<style>j')
}


function GET_CAPTION_SIZE( button ) {
  /** Given a button, figure out which caption it corresponds to,
   *  and get that caption's font-size
   */

  // Find the HTML tag for the corresponding caption
  var $captionTag = $('#' + $(button).data('for'))

  // Get the caption's font-size
  var font_size = $captionTag.css('font-size')

  // This looks confusing, but is just a shorthand for saying
  // [ turn the string "48px" into the number 48
  return font_size.replace('px', '') | 0
}
















//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
//
// BEHIND THE SCENES - ignore this ;)
//

$(MAIN)
function ____set_up_book_learnin____() {
  console.log("%cWelcome to The Console. It is your friend.", "font-size:2.5em;color:#444;font-weight:bold;")
  console.log("%cTo use it, type some code & press enter.", "font-size:1.5em;padding-bottom:0.5em;")
  console.log("")

  console.log("%cTo get started programming, open the app.js file in your editor.", "font-weight:bold;color:#095;font-size:1.25em;font-family:monospace;")
  console.log("")

  function ERR(msg) {console.log('%c!! '+msg, 'color:#f51;font-weight:bold;') }
  function PRINT(msg) { console.log('%c'+msg, 'font-style:italic;color:#78b') }
  function LOG(msg) { console.log('%c'+msg, 'color:#aaa;font-style:italic;')}
 
  Object.defineProperty(window, '__________', {
    get: function(){
      var err = new Error('')
        , spl = err.stack.split("\n")
        , loc = spl[2].trim()
        , line = loc.split('/').slice(-1)[0].split(':')[1]

      throw "Error  -->  BLANK SPACE REMAINING on line " + line
      return {show:function(){}, hide:function(){}}
    }
  })

  function __fix_text_outline__($tag) {
    /** This function uses a hacky (but effective) technique to give us the
     *  nice black outline around the white text
     */
    $tag.attr('data-content', $tag.text())
  }
}


}()); // ignore this line
