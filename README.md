# react-boilerplate

This example project shows usage of @omgjs/turbo library
to create react web applications

```bash
npm install
```

Run in dev mode:

```bash
npm start
```

Create production build in "./build" directory:

```bash
npm run build
```

## Tutorials

To write good optimized components there are few rules, that you need to follow

### PureComponent

This is very good time saving feature of React. [Article about it](https://habr.com/company/redmadrobot/blog/318222/)

===
This is bad:

```html
<Entity values={this.props.values || []} />
```

This is good:
Use DefaultProps in component itself instead of **this.props.values || []**,
when you call it

===
This is bad:

```html
<CustomInput onChange={e => this.props.update(e.target.value)} />
```

This is good:

```javascript
constructor(props) {
    super(props); this.update = this.update.bind(this);
}
update(e) {
    this.props.update(e.target.value);
}
render() {
    return <MyInput onChange={this.update} />;
}
```

Bind prototype methods to object, so that pointer will not be changed, and value
of parameter not going to be changed as well. PureComponent will not be
re-rendered therefore.

### Immutable

Prefer to use immutability. Immutable.js library can help. Or make it manually:

```javascript
this.setState(prevState => ({
	words: prevState.items.concat(["new-item"]),
}));
```

It makes it easier to check props/state changes in shouldComponentUpdate method.
You don't need to check data, but only to check pointer/pointers to data.

### Emoji

🤘🤟💪😜😍❤️
