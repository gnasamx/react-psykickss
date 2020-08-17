**Props**

| Prop | Type | Description |
| --- | --- | --- |
| autoFocus | Boolean | Whether to automatically focus on this Button when it loads |
| children | Reactnode | Accepts a string, element, null, or some combined array of those. |
| disabled | Boolean | Applies disabled styling to the button. |
| download | Boolean | Treat links as downloadable content (rather than redirecting the tab or opening a new tab) |
| fluid | Boolean or responsive<boolean> | Render the button w/ 100% width. |
| href | String | Button link destination. When provided, an `<a>` is rendered in place of `<button>`. |
| icon | Icon | The icon to to display alongside text in a button |
| iconPosition | Iconposition | Display the icon to the left or the right of the text. |
| id | String | HTML id property. |
| input | Boolean | Render as an `<input>`. |
| isLoading | Boolean | Renders loading spinner in place of the button label. |
| name | String | HTML name property. |
| noWrap | Boolean | Prevent button text from wrapping. |
| onClick | Boolean or ((e: mouseevent<htmlelement, mouseevent>) => void) | Callback function for button click. |
| size | Size or responsive<size> | Size enum or Responsive size enum. |
| target | Target | Provide a `target` attribute if an `href` is provided. |
| type | Htmltype | HTML `type` attribute. |
| value | String | In conjunction with the `input` prop, sets the button text. |
| variant | Variant | New prop for design refresh. Specifies button variant background color. |
