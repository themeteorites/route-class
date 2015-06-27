`meteor add themeteorites:route-class`

client/lib/router.js
```
Router.route('/', {name:'index'})
Router.route('/other')
Router.route('/other/sub')
```

client/main.html
```
<body>
  <div class="el">Different styles applied according to currently active route.</div>
</body>
```

styles.css
```
.el {
  border: 1px solid black;
}
.index .el {
  border-color: red;
}
.other .el {
  border-color: green;
  background-color: yellow;
}
.other.sub .el {
  border-color: blue;
  /* background-color is also active! */
}
```
