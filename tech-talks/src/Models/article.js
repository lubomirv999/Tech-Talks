import {get, post, update} from './requester';

function loadArticles(callback) {
    // Request articles from db
    get('appdata', 'articles', 'kinvey')
        .then(callback);
}

function loadArticleDetails(articleId, onTeamSuccess) {
    get('appdata', 'articles/' + articleId, 'kinvey')
        .then(onTeamSuccess);
}

function loadUsersDetails(articleId, onUsersSuccess) {
    get('user', `?query={"articleId": "${articleId}"}`, 'kinvey')
        .then(onUsersSuccess);
}

function edit(articleId, name, content, callback) {
    let teamData = {
        title: name,
        articleContent: content
    };
    update('appdata', 'articles/' + articleId, teamData, 'kinvey')
        .then(callback(true));
}

function create(title, content, callback, owner) {
    let teamData = {
        title: title,
        articleContent: content,
        owner: owner
    };
    post('appdata', 'articles', teamData, 'kinvey')
        .then(callback(true));
}

export {loadArticles, loadArticleDetails, loadUsersDetails, edit, create};