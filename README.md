<p align="center">
  <img src="front-end/src/components/images/Icon.png" alt="Spotify Jazzed"/>
</p>

<h2 align="center">Spotify Jazzed by Cody Dalton</h2> 

<h3 align="center">Custom Search Interface Using Spotify Web API</h2>

Spotify Jazzed was one of my first projects during my time in university. After graduating, I decided I wanted to give my work a makeover. The result was Spotify Jazzed V2. 

<h2 align="center">Getting Started</h2>

To begin, you will want to click on the green code box on the upper portion of this repository’s screen. You will have three options on how to clone the repository down to your machine - HTTPS, SSH, and Github CLI. 

The easiest method is to open up a terminal window on your machine. CD into a directory you want to copy Neurolog onto, and then type into your command line:

> git clone https://github.com/ePortfolios/wdv349-DaltonCody-FS.git

Once the repository is clone to your machine, open it with the code editor of your choice. Before entering any commands into your code editor’s terminal, make sure you are in the root directory of this project. Once you are, enter the command:

> npm install

You may also need to cd into /front-end, and then into /api. In each, npm install. This will install the necessary packages that will get Spotify Jazzed running. In the /api section, if there isn't already a .env file you're going to want to use the command:

> npm install .dotenv

Once installed, create a file in /api called .env. In this file, you will need to type and save the following:

> PORT = 8888

There are three other environment variables you will need to add to this file, but first you'll need to set up an account at https://developer.spotify.com/

Once your account is created and verified, log in and navigate to your dashboard. In the corner, there should be a purple button that says "Create App". Click the button. Title it Spotify Jazzed.
In the input beside the label "redirect url" enter:

> http://localhost:8888/logged

Once the app is created, go to the app's settings. In there, you will find a Client ID and a Client Secret. Back in the .env file, add:

> REDIRECT_URI = http://localhost:8888/logged
> CLIENT_ID = {your client ID goes here, without brackets}
> CLIENT_SECRET = {your client secret goes here, without brackets}

In the .env file you should now have values for PORT, REDIRECT_URI, CLIENT_ID, and CLIENT_SECRET environment variables. Without these, Spotify Jazzed will not perform as designed.

Now, navigate to the root of the project and enter: 

> npm run start

<h2 align="center">Using Spotify Jazzed</h2>

<p align="center">
   <img src="front-end/src/components/images/new_SpotifyJazzed.gif" alt="Spotify Jazzed demo" />
</p>

If everything goes well, Spotify Jazzed should launch into your browser. From the login interface, you can play with the light and dark mode toggle, and you can log into your Spotify account.

Once logged in, you will be granted an access token and redirected to the search interface. Notice a greeting in the upper left-hand corner with the name belonging to your Spotify account. From the search bar, you can choose to search for an artist, album, or audiobook. Once you begin typing, the top ten results will display neatly below. Each result can be clicked on to access the Spotify page belonging to the artist, album, or audiobook.
