/** This is the heart & soul of the application. Here we turn the lifeless
 *  HTML page into an app that users can interact with.
 *
 *  btw - this is a "comment". It's a chunk of text the computer will ignore. */



/** Keep a list of all the available memes. Later, we'll turn each of these 
 *  into a clickable image, and put it in the grid on the first page.
 * 
 *  You can make a list by putting a comma-separated list of things inside
 *  square brackets, like this:
 *  
 *      [1, 2, 3, "shiner", "stinky breath"]
 *
 *  Each thing in this list is called a "string". A string is just a group of
 *  letters/numbers/punctuation - like a word, sentence, phone #, or file name.  */

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


/** We'll spend most of our time finding HTML tags & doing things to  them.
 *  We can find tags by their ID's.
 *  
 *  Let's say we're looking for this button:
 *
 *      <button id="shiner">
 *
 *  To find it, use the "hashtag version" of its ID, like this:
 *
 *      var btn = $.find("#shiner")
 *
 */



// When the page has been fully loaded, let's start the show...

$(document).on('ready', function() {

  PRINT("wOOt! loading application...")

  TODO("Add a thumbnail for each meme in the list")
  // memes.forEach( add_meme_thumbnail )

  TODO("When user clicks a thumbnail, show the add-caption page")
  $(".thumbnail").on("click", handle_thumbnail_click)

  TODO("When user types in text box, change the corresponding caption")
  $(".caption-input").on("keyup", handle_caption_change)

  TODO("When user clicks up/down, change the corresponding caption size")
  $(".size-change-up").on("click", handle_size_up)
  $(".size-change-down").on("click", handle_size_down)

})



function add_meme_thumbnail( meme_name ) {
  /* This function takes a meme name, and adds a thumbnail to the mail list
   * of memes on the first page.
   *
   * Parameters:
   *    `meme_name` - one of the memes from the list at the top               */


  var html = ' <div class="col-xs-2"> ' +
             '     <img class="thumbnail" src="/img/' + meme_name + '.jpg">' +
             ' </div> '


  $("#meme-list").append(html)

  LOG("Added " + meme_name + " to list")
}


function handle_thumbnail_click() {
  LOG("Thumbnail was clicked!")

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

  LOG("caption size UP")
}

function handle_size_down() {
  // Find the current font-size of the caption
  var size = GET_CAPTION_SIZE(this)

  // Decrease it
  CHANGE_CAPTION_SIZE(this, size - 4)

  LOG("caption size DOWN")
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

  return font_size
}
















//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
//
// BEHIND THE SCENES
//

console.log("%cWelcome to the console. It is your friend.", "font-size:2.5em;color:#444;font-weight:bold;")
console.log("%cTo use it, type in some code & hit enter.", "font-size:1.5em;")
console.log("%cYou can also print things here from inside your program.", "font-size:1.5em;")
console.log("")

console.log("%cTo get started programming, open the app.js file in your editor.", "font-weight:bold;color:#095;font-size:1.25em;font-family:monospace;")
console.log("")

function TODO(msg) {console.log('%cTODO: '+msg, 'color:#f51;font-weight:bold;') }
function PRINT(msg) { console.log('%c'+msg, 'font-style:italic;color:#78b') }
function LOG(msg) { console.log('%c'+msg, 'color:#aaa;font-style:italic;')}


function __fix_text_outline__($tag) {
  /** This function uses a hacky (but effective) technique to give us the
   *  nice black outline around the white text
   */
  $tag.attr('data-content', $tag.text())
}


