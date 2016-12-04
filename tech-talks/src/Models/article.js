import {get, post, update} from './requester';
import {joinTeam} from './user';

function loadArticles(callback) {
    // Request articles from db
    get('appdata', 'articles', 'kinvey')
        .then(callback);
}

function loadTeamDetails(articleId, onTeamSuccess) {
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

function create(title, content, callback) {
    let teamData = {
        title: title,
        articleContent: content
    };
    post('appdata', 'articles', teamData, 'kinvey')
        .then((response) => {
            joinTeam(response._id, callback);
        });
}

export {loadArticles, loadTeamDetails, loadUsersDetails, edit, create};