<h1 align='center'> Discord Alert</h1>

<p align='center'>Send a message/notification with http request to discord server

### Install

```js
$ npm install discord-alert

or

$ yarn add discord-alert

```

### Usage

```js
import Notification from "discord-alert";

Notification("discord webhook url", "message");
```

### Parameters

<table>
<tr>
<td>
url
</td>
<td>
 your discord server webhook url
</td>
</tr>
<tr>
<td>
message
</td>
<td>
 what message you want to send each time a certain event is being triggered.
</td>
</tr>
</table>

### Example

There are various cases where you can use this package. I'm using it to send a notification each time a user submits a support message for my personal [site](https://www.melvinliu.com/support).

Instead of receiving the notification through email which is quite convoluted (since you need an SMTP server, etc to make it work). I see discord webhook is much simpler and suit my need.

### Author

- [melvnl](https://github.com/melvnl/)
