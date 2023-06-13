import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const auth1 = "ghp_U7M0r";
const auth2 = "q5WogDwPzV";
const auth3 = "vm9QuGnm";
const auth4 = "CgRxtcs1WOdLT";

const $writerInput = document.querySelector('#writer');
const $commentInput = document.querySelector('#comment');

const submit = document.querySelector('#submit');

const octokit = new Octokit({
    auth: auth1 + auth2 + auth3 + auth4
});
  
async function createIssue() {
    await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner: '0lYUMA',
      repo: 'ABlab',
      title: 'comment',
    });
}

submit.addEventListener('click', () => {
    const auth = auth1 + auth2 + auth3 + auth4;
    const commentData = {
        title: $writerInput.value,
        body: $commentInput.value
    };

    registerComment(auth, commentData);
});

function registerComment(auth, commentData) {    
    if (!$writerInput.value) {
        alert("이름을 입력해주세요!");
    } else if (!$commentInput.value) {
        alert("내용을 입력해주세요!");
    } else {
        fetch("https://api.github.com/repos/0lYUMA/ABlab/issues", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "token " + auth,
        },
        body: JSON.stringify({
            ...commentData
        }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }
        $writerInput.value = '';
        $commentInput.value = '';
    })
    }

}

loadComments(auth1 + auth2 + auth3 + auth4);

function loadComments(auth) {
    fetch("https://api.github.com/repos/0lYUMA/ABlab/issues", {
        method: "GET",
        headers: {
            Authorization: "token " + auth,
        },
    })
    .then((res) => res.json())
    .then((comments) => {
        let $commentList = document.getElementById("comment-list");
        for (let i in comments) {
            $commentList.innerHTML += `
            <li class="comment_li">
                <p style="color: #13322C; font-weight: bold; font-size: 20px; margin-bottom: 15px;">
                ${comments[i].title}</p>
                <p style="font-size: 17px;" >
                ${comments[i].body}</p>
            </li>
            <hr>`;
        }
    });
}