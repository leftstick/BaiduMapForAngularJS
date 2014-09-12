# Baidu-map For AngularJS

> AngularJS directives for Baidu Maps

## Getting started

Latest stable version: v1.0.4
> Note: Baidu-map API currently doesn't support `https`, switch to goole-map API if you plan deploy the application on `https` server.

This is a directive for AngularJS `~1.2.0+`. And ease the way to display a baidu-map on your page.

If you plan to hack on the directives or want to run the example, first thing to do is to install NPM dependencies:

```shell
npm install
bower install ( for specs and dev dependencies)
```

### Building
To build the library after you made changes, simply run gulp:

```shell
gulp compress
```

### Running the demo
To run the demo page, just run

```shell
gulp demo
```

and open your browser on `http://localhost:8080/`.

### Documentation
The API specification documented at [API Docs](https://github.com/leftstick/BaiduMapForAngularJS/blob/master/docs/APIDocs.md).



Contributing

Pull requests more than welcome! If you're adding new features, it would be appreciated if you would provide some docs about the feature. This can be done either by adding a card to our Trello board, forking the website branch and issuing a PR with the updated documentation page, or by opening an issue for us to add the documentation to the site.

Branching Model w Git Flow We are trying to follow the git flow branching model where all bugs that are considered urgent / patches will be pull requested against master. If the PR (pull request) is an improvement and a non urgent fix it will go towards develop which is the working(SNAPSHOT) next version of what master will be.

When patches and bugs are rolled into master they will be immediatley rolled into develop as well. Where the flow is PR(bug fix) -> merge master -> merge develop .
