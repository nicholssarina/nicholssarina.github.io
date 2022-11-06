//window.addEventListener ('load',getQuote);

document.addEventListener('load',getMovie);

const movieButton = document.querySelector('.new-movie');
movieButton.addEventListener ('click',getMovie);

const endpoint = 'https://k2maan-moviehut.herokuapp.com/api/random';

const imageButton = document.querySelector('.actor-image');
imageButton.addEventListener ('click',choosePic);

async function getMovie () {
    console.log('test click worked');
    let text = await fetch(endpoint);
    //.then(text => await text.text())
    let response = await text.text ();
    //.then(y => myDisplay(y));

    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['name']);
    displayMovie(
        json_response['name']);

}

function displayMovie(x) {
    const quoteBox = document.querySelector('#js-movie-title'); 
    //console.log('display quote working');
    //quoteBox.innerText(x);
    const textMessage = document.createTextNode(x); 

    //quoteBox.appendChild(textMessage);

    document.getElementById ('js-movie-title').textContent = x; 
}



window.onload = choosePic;

var actorImages = new Array("actor/adamdriver.jpeg","actor/audreyhepburn.jpeg","actor/bradpitt.jpeg","actor/clinteastwood.jpeg","actor/ethanhawke.jpeg","actor/francesmcdormand.jpeg","actor/genarowlands.jpeg","actor/harveykeitel.jpeg","actor/jacknicholson.jpeg","actor/janefonda.jpeg","actor/jessicalange.jpeg","actor/joancrawford.jpeg","actor/joepesci.jpeg","actor/leodicap.jpeg","actor/lupitanyongo.jpeg","actor/megryan.jpeg","actor/merylstreep.jpeg","actor/nicolascage.jpeg","actor/robertdeniro.jpeg","actor/ruthgordon.jpeg","actor/sallyfield.jpeg","actor/samuelljackson.jpeg","actor/sandrabullock.jpeg","actor/shelleyduvall.jpeg","actor/shirleymaclaine.jpeg","actor/sissyspacek.jpeg","actor/timothyhutton.jpeg","actor/tomhanks.jpeg","actor/violadavis.jpeg","actor/willsmith.jpeg","actor/winonaryder.jpeg","actor/alpacino.jpeg","actor/anthonyhopkins.jpeg","actor/cateblanchett.jpeg","actor/danieldaylewis.jpeg","actor/denzelwashington.jpeg","actor/elizabethtaylor.jpeg","actor/glennclose.jpeg","actor/jacklemmon.jpeg","actor/juliaroberts.jpeg","actor/katewinslet.jpeg","actor/katharinehepburn.jpeg","actor/laurenceolivier.jpeg","actor/marlonbrando.jpeg","actor/morganfreeman.jpeg","actor/natalieportman.jpeg","actor/paulnewman.jpeg","actor/philipseymourhoffman.jpeg","actor/robertduvall.jpeg","actor/robinwilliams.jpeg","actor/seanpenn.jpeg","actor/sidneypoitier.jpeg","actor/sigourneyweaver.jpeg","actor/umathurman.jpeg","actor/vivienleigh.jpeg"
);

function choosePic() {
     var randomNum = Math.floor(Math.random() * actorImages.length);
     document.getElementById("actor-image").src = actorImages[randomNum];
     console.log(actorImages[randomNum]);
     console.log("actor is here");
}


//window.onload = actorImage;
  //  var img = ["actor/adamdriver.jpeg","actor/audreyhepburn.jpeg","actor/bradpitt.jpeg"]
    // function actorImage(imgArr) {
      //  return imgArr[Math.floor(Math.random() * imgArr.length)];
     //}
     //console.log(actorImage(img));

getMovie();