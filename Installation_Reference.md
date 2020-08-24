1. Install Python

Most users can go [here](https://www.python.org/downloads/) to download and install `Python 3.8`.

__[Homebrew](https://brew.sh/)  on macOS:__
```
brew install python
```
> This will download the most recent python release. This series should be well supported in the future but if you need Python 3.8 go [here](https://www.python.org/downloads/) and find the section titled `Looking for a specific release?`

2. Install Node.js

Most users will go [here](https://nodejs.org/en/) to download and install `node.js`.


__[Homebrew](https://brew.sh/) on macOS:__
```
brew install node
```
> This will download the most recent Node.js release. If you need another version of node here go [here](https://nodejs.org/en/) or consider using the [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)

3. Install [Yarn](yarnpkg.com) (optional)
Yarn is an excellent alternative to using `npm` to install Node.js packages. Yarn caches packages so it speeds up the installs.

Assuming you have Node.js installed, you should have `npm` as well. Verify `npm` is installed by:

```
npm -v
```

If not error occurs, you can install yarn with:
```
npm install -g yarn
```
> If, for some unforseen reason, this fails, try to download yarn [here](https://classic.yarnpkg.com/en/docs/install/)

