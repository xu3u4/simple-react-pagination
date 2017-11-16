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
| itemsPerPage | Number | 1 | Number of item to display on every page. |
| totalItems | Number | *Required | The overall items count. |
| reloadPage | Boolean | true | If true, reload the whole page. If false, rerender pagination. |
| changePageCB | Function | *Optional | Callback function after page change. For example, you can call an ajax to get more data. |
