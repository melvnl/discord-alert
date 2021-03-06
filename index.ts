import fetch from "node-fetch";

export default function Notification(url: string, message: string) {
    fetch(url, {
        body: JSON.stringify({
            content: message,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    })
        .then(function (res) { })
        .catch(function (res) {
            console.log(res);
        });
};