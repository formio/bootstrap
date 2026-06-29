# Form.io Bootstrap Templates
This repository will change the rendering of forms in formio.js so that it uses html and classes compatible with [Bootstrap 3](https://getbootstrap.com/docs/3.4/), [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/), and [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/) frameworks.

Official Documentation
--------------------------
For the latest documentation, release information, and guides, always refer to the official Form.io Help Documentation available here:

**[https://help.form.io](https://help.form.io/dev/css-frameworks)**

### Using Bootstrap 3

```javascript
import bootstrap3 from '@formio/bootstrap/bootstrap3';
import { Formio } from 'formiojs';
Formio.use(bootstrap3);
```
### Using Bootstrap 4

```javascript
import bootstrap4 from '@formio/bootstrap/bootstrap4';
import { Formio } from 'formiojs';
Formio.use(bootstrap4);
```

### Using Bootstrap 5

```javascript
import bootstrap5 from '@formio/bootstrap/bootstrap5';
import { Formio } from 'formiojs';
Formio.use(bootstrap5);
```

## Script


```javascript
Formio.Templates.framework = "bootstrap3"
```
If icon is not show

```javascript
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script>
  Formio.icons = "fontawesome"
</script>
```
