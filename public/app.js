const search_Textbox = document.getElementById('search_ArtistName');
const get_Artist_btn = document.getElementById('get_Artist');
const artistInfo_container = document.getElementById('artistInfo');


document.getElementById("search_ArtistName").addEventListener("keyup", function(event) {
    event.preventDefault(); //prevent sroll up refresh
    if (event.keyCode === 13) {//key code for enter is 13
        document.getElementById("get_Artist").click();
    }
});

get_Artist_btn.addEventListener('click', () => {
  if(search_Textbox.value){

	fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=' + search_Textbox.value)
		.then(res => res.json())
		.then(res =>
			{
        if(res && res.artists){
    				var artist = res.artists[0];
            createArtist(artist,artist.idArtist);
        }
        else
        {
            alert("This artist dont exist");
            search_Textbox.value = "";
            search_Textbox.placeholder = "Search";

        }
			});
    }else{
      alert("Please enter artist name");
    }
});




 const createArtist = (artist, artistID) => {
// console.log(album);
// console.log(artist);

	const newInnerHTML = `
		<div class="row">


				<div class="columns eight">
					<img src="${artist.strArtistThumb}" alt="Artist Image" onerror="this.src='/public/albumImage.jpg'";>
					<h4>${artist.strArtist}</h4>
          ${artist.strArtistAlternate ? `<p><strong>Full Name</strong> ${artist.strArtistAlternate}</p>` : ''}
        	${artist.intBornYear ? `<p><strong>D.O.B:</strong> ${artist.intBornYear}</p>` : ''}
          ${artist.strGender ? `<p><strong>Gender:</strong> ${artist.strGender}</p>` : ''}
          ${artist.strGenre ? `<p><strong>Genre:</strong> ${artist.strGenre}</p>` : ''}
			    <p><strong>Albums:</strong> <a id="albumInfo" href="Albums?id=${artistID}">View Album</a></p>
          ${artist.strLabel ? `<p><strong>Label:</strong> ${artist.strLabel}</p>` : ''}

          ${artist.strBiographyEN ? `<p><span id="strBiographyEN">${artist.strBiographyEN.substring(0,450)}</span>
          <a id="read_More1" href="#" > ... Read More </a>
          <a id="read_Less1" href="#" > ... Read Less </a>
          </p>`
          : ''}

          ${artist.strBiographyDE ? `<p><span id="strBiographyDE">${artist.strBiographyDE.substring(0,450)}</span>
          <a id="read_More2" href="#" > ... Read More </a>
          <a id="read_Less2" href="#" > ... Read Less </a>
          </p>`
          : ''}

          ${artist.strBiographyFR ? `<p ><span id="strBiographyFR">${artist.strBiographyFR.substring(0,450)}</span>
          <a id="read_More3" href="#" > ...Read More </a>
          <a id="read_Less3" href="#" > ... Read Less </a>
          </p>` : ''}
				</div>


			<div class="columns four"
        ${artist.strCountry ? `<p><strong>Country:</strong> ${artist.strCountry.split(',').join(', ')}</p>` : ''}
				${artist.strFacebook ? `<p><strong>Facebook:</strong> <a href="https://${artist.strFacebook}">${artist.strFacebook}</a></p>` : ''}
				${artist.strTwitter ? `<p><strong>Twitter:</strong> <a href="https://${artist.strTwitter}">${artist.strTwitter}</a></p>` : ''}
        ${artist.strWebsite ? `<p><strong>Website:</strong> <a href="https://${artist.strWebsite}">${artist.strWebsite}</a></p>` : ''}
        ${artist.strArtistLogo ? `<p><strong>Logo:</strong> <a href="${artist.strArtistLogo}">${artist.strArtistLogo}</a></p>` : ''}
			</div>


		</div>
		${artist.strYoutube ? `
		<div class="row">
			<h5>Video Recipe</h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${atrist.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>` : ''}
	`;


	artistInfo_container.innerHTML = newInnerHTML;

  const read_Mor1 = document.getElementById('read_More1');
  const read_Les1 = document.getElementById('read_Less1');

  read_Mor1.style.display = "inline-block"
  read_Les1.style.display = "none"


    read_Mor1.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById("strBiographyEN").innerHTML = artist.strBiographyEN;
      read_Les1.style.display = "inline-block";
      read_Mor1.style.display = "none";
    });

    read_Les1.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById("strBiographyEN").innerHTML = artist.strBiographyEN.substring(0,450);
      read_Mor1.style.display = "inline-block";
      read_Les1.style.display = "none";
    });



    const read_Mor2 = document.getElementById('read_More2');
    const read_Les2 = document.getElementById('read_Less2');

    read_Mor2.style.display = "inline-block"
    read_Les2.style.display = "none"


      read_Mor2.addEventListener('click',function (e) {
        e.preventDefault();
        document.getElementById("strBiographyDE").innerHTML = artist.strBiographyDE;
        read_Les2.style.display = "inline-block";
        read_Mor2.style.display = "none";
      });

      read_Les2.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById("strBiographyDE").innerHTML = artist.strBiographyDE.substring(0,450);
        read_Mor2.style.display = "inline-block";
        read_Les2.style.display = "none";
      });



      const read_Mor3 = document.getElementById('read_More3');
      const read_Les3 = document.getElementById('read_Less3');

      read_Mor3.style.display = "inline-block"
      read_Les3.style.display = "none"


        read_Mor3.addEventListener('click', function (e) {
          e.preventDefault();
          document.getElementById("strBiographyFR").innerHTML = artist.strBiographyFR;
          read_Les3.style.display = "inline-block";
          read_Mor3.style.display = "none";
        });

        read_Les3.addEventListener('click', function (e) {
          e.preventDefault();
          document.getElementById("strBiographyFR").innerHTML = artist.strBiographyFR.substring(0,450);
          read_Mor3.style.display = "inline-block";
          read_Les3.style.display = "none";
        });

}
