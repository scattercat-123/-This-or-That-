# This or That? 🥊 - https://this-or-that-who-would-win.web.app/

Yo, welcome to this project! 👋 It's a fun little web app where you get to vote on two random options and see who gets the most votes. It's like "This or That" but with a twist! 

## What’s Going Down Here 🤔

- **Random Words**: We fetch two funny or random words using the OpenAI API.
- **Image Search**: Then we search for images related to those words using the Pexels API. 
- **Vote**: You get to vote for your favorite option.
- **Results**: Votes get counted, and you can see the percentage of votes for each option.

## How to Run This Thing 🖥️

1. Open this site - https://this-or-that-who-would-win.web.app/
   
## How It Works (For The Nerds) 🤓

- It fetches two random words from OpenAI and shows them.
- For each word, it pulls up images from the Pexels API.
- You can vote for your favorite word (Option 1 or Option 2).
- Results show up in real-time with a progress bar.
  
## APIs Used 🤖

- **OpenAI** – for getting random words
- **Pexels** – for fetching images based on those words

## API Keys (Important Stuff) 🔑

**Pro Tip**: Never expose your API keys in your public code, dude. If you're running this locally, store your keys securely. I have remoced the keys...

- You can use `.env` for local setups (with `dotenv` if you're on Node.js).
- If you're deploying somewhere, use whatever secret management service your hosting provider has.

## What You Can Do 🔧

- Fork this repo, make changes, and improve the app.
- Add more APIs if you want to get fancy.
- Share this with your friends and have fun voting! 🥳

## Wanna Improve This? 💡

- More random word generators? Go for it.
- Custom voting themes? Knock yourself out.
- Add animations or funky styles? Sure, make it pop!

## License 🤝

This code is open for everyone to use, remix, and do whatever! But please, don't break anything... or do, but credit me if you do something awesome with it! 😜

## Contact 📬

If you have any questions or wanna talk about code, hit me up!

- **Email**: replyatharv@gmail.com

Enjoy! 😎
