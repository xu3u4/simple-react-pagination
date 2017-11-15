# react-pagination
It is a simple react pagination which also supports RWD.

## Environment setup
1. Clone this repository
```shell
git clone https://github.com/xu3u4/react-pagination.git
```
2. Install packages
```shell
npm install #or yarn install
```
3. Start the app
```shell
npm run dev
```

## Params
| Name | Type | Default | Description |
|--------------|---------|-----------|---------------------------------------------------------|
| itemsPerPage | Number | 1 | Number of item per page. |
| totalItems | Number | *Required | The items in total you want to display. |
| reloadPage | Boolean | true | If true, reload the whole page. If false, the url changes but not the pagination; unless the props value changes and make it re-render. |
