# QRL: Generate QR from the current url

This is a cross browser extension that resolves the problem to watch the site you are visiting in your desktop browser to you mobile without the need to have any sync tool. This way, whenever you want to keep surfing a website in the mobile you will do it faster and easier. Happy surfing!

# Development

## Context of the project
I want to create an extension that shows a little icon the user can press in
order to activate a popover with some UI inside.

In this case, I wan to create an exntension that reads the URL of the current
tab, and provides a QR code in the popover, which then the user can rad with
her smartphone in order to open the url, share it or save it for latter.


## Development
When we create an exntension, we should decide which browsers do we want to
support. There is a common API available to make it easier to develop for the
most popular browsers, but ther may be some little differences between them.

### Environment
In order to start working towards our extension creation, we don't want very
complex environments. In my case I am only using ATOM as text editor because of
its extensability, because its free and also because its quite minimalist if you
want it to be.

Also we will need to install the browsers we want to support in order to test
our extension/add-on accordingly.

### Manifest file
When developing an extension, the first thing we will need to create is a
`manifest.json` file. This file is used to provide important information about
your extension and also to specify the needed permissions and script files that
will be used.

#### Background


## Testing
In order to try the extension... `TBD`

### Firefox
Open [about:debugging](about:debugging) in your browser, or click at `Add-ons`
in the menu and then click at the cogs icon and select `Debug Add-ons` option.

In the Extension Management page, click `Load Temporary Add-on` button and
select any file in your extension's directory. Manigest file should work just
fine.

### Chrome
Go to [chrome://extensions](chrome://extensions) in your browser, or click at
`More tools` and `Extensions` on the menu.

In the Extension Management page, turn on `Developer Mode` (should be located in
  the top right corner).

Once this is done, lcick the `Load Unpacked` button and select your directory.


## Publishing

### Firefox
`TBD`

### Chrome
`TBD`

## Resources
* [Mozilla documenbtation about Web Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
* [How to do a chrome extension](https://medium.freecodecamp.org/how-to-create-a-chrome-extension-part-1-ad2a3a77541)
*
