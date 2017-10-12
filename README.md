# Tox Website

I decided to make a new website for Tox because the current one is weird and not userfriendly.  
Also, the audience we target is not tech-savvy so the website must be clear and not redundant.

##### Disclaimer
First, the website is **NOT** static.  
It uses AdonisJS for the back-end. Sass is used for the front-end styling.

You can find the static version that serves mostly for design [here](https://github.com/SkyzohKey/tox-website).

[Live demo @Heroku](https://tox-website.herokuapp.com/)

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

# Testing

Tests are super easy to write and are located in the `test` folder.
To run tests, run the following in project root.

```
# Run tests
adonis test
```

# CLI Commands

AdonisJs allows us to define commands to help developing faster. Here's a list of the currently available ones. This might be outdated so feel free to run `adonis --help` in the project root.

- `create:user` - Start an interactive shell to create an user.
- `create:blog:category` - Start an interactive shell to create a blog tag.
- `create:blog:post` - Start an interactive shell to create a blog post.

# Translating

We use OneSky to handle the translation process.  
Feel free to help by going on our [translation page](https://osljz2m.oneskyapp.com/collaboration/project?id=129664) ! :)

If you don't like OneSky you can always send a pull-request :)

# Sponsors

<a href="https://www.browserstack.com">
  <img src="https://a.doko.moe/cxkvnr.svg" height="26">
</a>

We are proudly powered by **BrowserStack**, they offer us a Sponsored account to test and debug the new Tox website. It's awesome and I'd personally like to thanks them for this!

# License
This project is under the [MIT License], so feel free to contribute or fork.

[MIT License]: License
[BrowserStack]: https://www.browserstack.com/
