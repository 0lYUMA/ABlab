const auth1 = "ghp_U7M0r";
const auth2 = "q5WogDwPzV";
const auth3 = "vm9QuGnm";
const auth4 = "CgRxtcs1WOdLT";

const writerInput = document.querySelector('#writer');
const commentInput = document.querySelector('#comment');

const submit = document.querySelector('#submit');

const comments = document.querySelector('.comments');

function loadComments(auth) {
    fetch("https://api.github.com/repos/0lYUMA/ABlab/issues", {
        method: "GET",
        headers: {
            Authorization: "token " + auth,
        },
    })
    .then((response) => response.json())
    .then((issues) => {
        const comment = `
            <h6>${writerInput.value}</h6>
            <p>${commentInput.value}</p>
        `;

        const newComment = document.createElement('div');
        newComment.innerHTML = comment;
        comments.appendChild(newComment);
    });
}

loadComments(auth1 + auth2 + auth3 + auth4);

function registerComment(auth) {    
    fetch("https://api.github.com/repos/0lYUMA/ABlab/issues", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "token " + auth,
        },
        body: JSON.stringify({
            writer: writerInput.value,
            content: commentInput.value
        }),
    })
    .then(() => {
        writerInput.value = '';
        commentInput.value = '';
    });
}

submit.addEventListener('click', () => {
    registerComment(auth1 + auth2 + auth3 + auth4);
});