;(function() {                  // ignore this line
____set_up_book_learnin____()   // ignore this line




    /**** NOTE ****
     |
     | The way this file works is that a lot of (boring) code has already been
     | written for you, but the most important parts have been ripped out.
     |
     | The missing code has been replaced with a fill-in-the-blank.
     | Any time you see a blank space like  __________  your job is to figure
     | out what should go there & replace the blank line with the correct code.
     | 
     | Once you've filled in the blank, refresh the page in your browser.
     | 
     | Let's try a really simple one.
   */








//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~ THE LIST OF MEMES ~~


// This is a list of all the available memes. Later, we'll turn each of these 
// into a clickable image, and put it in the grid on the first page.

var meme_list = [
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







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~ VARIABLES ~~ 


    /**** NOTE ****
     | 
     | We'll spend a lot of our time finding HTML tags & doing things to them.
     | To find a tag on the page, we can "hashtag-ify" its ID, like this:
     |
     |    | We want to find this tag .....  <button id="shiner"> 
     |    | We'll use this code ..........  $("#shiner")
     |
     | (don't forget the quotation marks around "#shiner")
     |
     | You can find an element's ID in the index.html file (which you can
     | find in your left sidebar)
     |
     '*************/


// The main pages of our app
var $page1 = $('#page-1')
var $page2 = $('#page-2')


// Now let's find the thumbnail grid

var $thumbnail_grid = $('#thumbnail-grid')


    







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~ START THE APPLICATION ~~


function MAIN() {

  // You can print anything you want to The Console like this:
  console.log("Starting the application.", "Time is:", Date())


  // The screen is blank! We need to show the first page.
  $page1.show()


  // Add each meme in the above list to the thumbnail grid.
  meme_list.forEach( add_meme_thumbnail )


  // Now that everything's in place, let's listen for user actions
  // like clicking & typing...
  listen_for_user_actions()
}


function add_meme_thumbnail( meme_name ) {
  console.log("Adding a thumbnail for " + meme_name + " ...")

  // This is the (unfinished) HTML for a new thumbnail image
  var html = '<div class="col-xs-2"> ' +
               '<img class="thumbnail"  ' +
               '     src="/img/XXXXXXXXXX.jpg">' +
             '</div> '


  // XXXXXXXXXX.jpg is not a real file name. Let's replace it with our meme.
  html = html.replace('XXXXXXXXXX' , meme_name)

        // You might find this article helpful: 
        // http://www.w3schools.com/jsref/jsref_replace.asp


  // $my_html_tag.append() adds some HTML inside (at the end of) $my_html_tag
  // So let's use that to add our HTML inside the thumbnail grid.
  $thumbnail_grid.append(html)
}







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~ USER INTERACTION ~~


function listen_for_user_actions() {


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

  // To get attributes of html elements, we can use .attr()
  // For instance, to get a link's href, $myLink.attr('href')
  // To set attributes, do like this: $myLink.attr('href', 'http://google.com')

  // The `src` attribute (ie. the URL of the thumbnail)
  var thumbnail_src = $thumbnail.attr('src')

  // Set the `src` of the large image to the thumbnail's `src`
  $('#meme-image').attr('src', thumbnail_src)

  // Hide the choose-meme page
  $page1.hide()

  // Show the add-caption page
  $page2.show()
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
  var caption_text = $text_box.val()

  // Find the HTML tag corresponding to the text box
  var which_caption = $text_box.data('for')
  var $image_caption_element = $('#' + which_caption)

  // Upate the HTML tag w/ the new caption
  $image_caption_element.text(caption_text)


  // magical hack. removing this will break the text outline.
  __fix_text_outline__($image_caption_element)
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

function __fix_text_outline__($tag) {
  /** This function uses a hacky (but effective) technique to give us the
   *  nice black outline around the white text
   */
  $tag.attr('data-content', $tag.text())
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

      console.error("Error  -->  BLANK SPACE REMAINING on line " + line)
      return {show:function(){}, hide:function(){}}
    }
  })

  var __old_show__ = $.fn.show
  $.fn.show = function() {
    $.each(this, function(i,x){ $(x).trigger('shown') })
    __old_show__.apply(this, arguments)
  }

  $('body').on('shown', '#page-1', function() { $('#page-0').hide() })
}

}()); // ignore this line
