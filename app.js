/** This is the heart & soul of the application. Here we turn the lifeless,
 *  still HTML page into an app that users can interact with.
 *
 *  btw - this is called a "comment". It's a chunk of text the computer will
 *  ignore. You can use them to help other people understand your code.       */



/* Keep a list of all the available memes. Later, we'll turn each of these 
 * into a clickable image, and put it in the grid on the first page.
 *
 * Each thing in the list is called a "string". A string is just a group of
 * letters/numbers/punctuation - like a word, sentence, phone #, or file name.  */

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


/* This is the HTML tag where we will insert our meme thumbnails. This line
 * is short-hand for 
 *
 *     search the page for an element with id="meme-list", and stuff
 *     it in a variable called $meme_list
 *
 *
 *  Best Practice: any variable that starts with "$" is an HTML tag         */

var $meme_list = $('#meme-list')

// other HTML tags we care about



// When the page has been fully loaded, let's start the show...

$(document).on('ready', main)



// Our app's starting point

function main() {

  memes.forEach( add_meme_to_list )

  $(".thumbnail").on("click", handle_thumbnail_click)

}



function add_meme_to_list( meme_name ) {

  /* This function takes a meme name, and adds a thumbnail to the mail list
   * of memes on the first page.
   *
   * Parameters:
   *    `meme_name` - one of the memes from the list at the top               */


  var html = ' <div class="col-xs-2"> ' +
             '     <img class="thumbnail" src="/img/' + meme_name + '.jpg">' +
             ' </div> '


  $meme_list.append(html)

}


function handle_thumbnail_click(event) {

  var $thumbnail = $(this)          // get the particular thumbnail that was clicked
  var img = thumbnail.attr('src')   // grab the URL of the image

}




/**  SIDE   When coding, it's considered a Best Practice to keep your lines
 *   NOTE   somewhat short. The normal rule of thumb is you should never have
 *          a line that's longer than 80 characters. It's a good rule of thumb
 *          b/c it makes your code easier to read, but it's not written in stone.
 */

