import * as requester from './requester';

function loadArticleComments(articleId, onCommentSuccess) {
    requester.get('appdata', `comments?query={"articleId": "${articleId}"}`, 'kinvey')
        .then(onCommentSuccess)
}

function addComment(text, authorId, articleId, username, callback) {
    let commentData = {
        text,
        authorId,
        articleId,
        username
    };

    requester.post('appdata', 'comments', commentData, 'kinvey')
        .then(callback);
}

export { addComment, loadArticleComments }