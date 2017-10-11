# Tox Website

I decided to make a new website for Tox because the current one is weird and not userfriendly.  
Also, the audience we target is not tech-savvy so the website must be clear and not redundant.

##### Disclaimer
First, the website is **NOT** static.  
It uses AdonisJS for the back-end. Sass is used for the front-end styling.

You can find the static version that serves mostly for design [here](https://github.com/SkyzohKey/tox-website).

# Building
This use Adonis as a build tool so you need to run the following:

```
# Clone the repo and install dependencies
git clone https://github.com/ToxWebsite/tox.chat.git
cd tox-chat

npm install -g @adonisjs/cli
npm install

# Start !
adonis serve --dev --debug
```

Now you can access it by clicking on http://127.0.0.1:3333. You can change the port by passing a `PORT`env variable.

# Sponsors

<a href="https://www.browserstack.com">
  <img src="https://a.doko.moe/cxkvnr.svg" height="26">
</a>

We are proudly powered by **BrowserStack**, they offer us a Sponsored account to test and debug the new Tox website. It's awesome and I'd personally like to thanks them for this!

# License
This project is under the [MIT License], so feel free to contribute or fork.

[MIT License]: License
[BrowserStack]: https://www.browserstack.com/
