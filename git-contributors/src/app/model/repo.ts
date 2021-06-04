import { Contributor } from "./contributor";

export class Repo {

    id: number = 0;
    node_id: string = '';
    name: string = '';
    full_name: string = '';
    private: boolean = false;
    owner: Contributor = new Contributor();
    html_url: string = '';
    description: string = '';
    fork: boolean = false;
    url: string = '';
    forks_url: string = '';
    keys_url: string = '';
    collaborators_url: string = '';
    teams_url: string = '';
    hooks_url: string = '';
    issue_events_url: string = '';
    events_url: string = '';
    assignees_url: string = '';
    branches_url: string = '';
    tags_url: string = '';
    blobs_url: string = '';
    git_tags_url: string = '';
    git_refs_url: string = '';
    trees_url: string = '';
    statuses_url: string = '';
    languages_url: string = '';
    stargazers_url: string = '';
    contributors_url: string = '';
    subscribers_url: string = '';
    subscription_url: string = '';
    commits_url:  string = '';
    git_commits_url: string = '';
    comments_url: string = '';
    issue_comment_url: string = '';
    contents_url: string = '';
    compare_url: string = '';
    merges_url: string = '';
    archive_url: string = '';
    downloads_url: string = '';
    issues_url: string = '';
    pulls_url: string = '';
    milestones_url: string = '';
    notifications_url: string = '';
    labels_url: string = '';
    releases_url: string = '';
    deployments_url: string = '';
    created_at: string = '';
    updated_at: string = '';
    pushed_at: string = '';
    git_url: string = '';
    ssh_url: string = '';
    clone_url: string = '';
    svn_url: string = '';
    homepage: string = '';
    size: number = 0; 
    stargazers_count: number = 0;
    watchers_count: number = 0;
    language: string = '';
    has_issues: boolean = false;
    has_projects: boolean = false;
    has_downloads: boolean = false;
    has_wiki: boolean = false;
    has_pages: boolean = false;
    forks_count: number = 0;
    mirror_url: string = '';
    archived: boolean = false;
    disabled: boolean = false;
    open_issues_count: number = 0;
    license: any = null;
    forks: number = 0;
    open_issues: number = 0;
    watchers: number = 0;
    default_branch: string = '';

    // "id": 232583252,
    // "node_id": "MDEwOlJlcG9zaXRvcnkyMzI1ODMyNTI=",
    // "name": "abesse",
    // "full_name": "cherryApp/abesse",
    // "private": false,
    // "owner": {
    //   "login": "cherryApp",
    //   "id": 4568526,
    //   "node_id": "MDQ6VXNlcjQ1Njg1MjY=",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/4568526?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/cherryApp",
    //   "html_url": "https://github.com/cherryApp",
    //   "followers_url": "https://api.github.com/users/cherryApp/followers",
    //   "following_url": "https://api.github.com/users/cherryApp/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/cherryApp/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/cherryApp/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/cherryApp/subscriptions",
    //   "organizations_url": "https://api.github.com/users/cherryApp/orgs",
    //   "repos_url": "https://api.github.com/users/cherryApp/repos",
    //   "events_url": "https://api.github.com/users/cherryApp/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/cherryApp/received_events",
    //   "type": "User",
    //   "site_admin": false
    // },
    // "html_url": "https://github.com/cherryApp/abesse",
    // "description": "Cool stuffs for the Abesse team.",
    // "fork": false,
    // "url": "https://api.github.com/repos/cherryApp/abesse",
    // "forks_url": "https://api.github.com/repos/cherryApp/abesse/forks",
    // "keys_url": "https://api.github.com/repos/cherryApp/abesse/keys{/key_id}",
    // "collaborators_url": "https://api.github.com/repos/cherryApp/abesse/collaborators{/collaborator}",
    // "teams_url": "https://api.github.com/repos/cherryApp/abesse/teams",
    // "hooks_url": "https://api.github.com/repos/cherryApp/abesse/hooks",
    // "issue_events_url": "https://api.github.com/repos/cherryApp/abesse/issues/events{/number}",
    // "events_url": "https://api.github.com/repos/cherryApp/abesse/events",
    // "assignees_url": "https://api.github.com/repos/cherryApp/abesse/assignees{/user}",
    // "branches_url": "https://api.github.com/repos/cherryApp/abesse/branches{/branch}",
    // "tags_url": "https://api.github.com/repos/cherryApp/abesse/tags",
    // "blobs_url": "https://api.github.com/repos/cherryApp/abesse/git/blobs{/sha}",
    // "git_tags_url": "https://api.github.com/repos/cherryApp/abesse/git/tags{/sha}",
    // "git_refs_url": "https://api.github.com/repos/cherryApp/abesse/git/refs{/sha}",
    // "trees_url": "https://api.github.com/repos/cherryApp/abesse/git/trees{/sha}",
    // "statuses_url": "https://api.github.com/repos/cherryApp/abesse/statuses/{sha}",
    // "languages_url": "https://api.github.com/repos/cherryApp/abesse/languages",
    // "stargazers_url": "https://api.github.com/repos/cherryApp/abesse/stargazers",
    // "contributors_url": "https://api.github.com/repos/cherryApp/abesse/contributors",
    // "subscribers_url": "https://api.github.com/repos/cherryApp/abesse/subscribers",
    // "subscription_url": "https://api.github.com/repos/cherryApp/abesse/subscription",
    // "commits_url": "https://api.github.com/repos/cherryApp/abesse/commits{/sha}",
    // "git_commits_url": "https://api.github.com/repos/cherryApp/abesse/git/commits{/sha}",
    // "comments_url": "https://api.github.com/repos/cherryApp/abesse/comments{/number}",
    // "issue_comment_url": "https://api.github.com/repos/cherryApp/abesse/issues/comments{/number}",
    // "contents_url": "https://api.github.com/repos/cherryApp/abesse/contents/{+path}",
    // "compare_url": "https://api.github.com/repos/cherryApp/abesse/compare/{base}...{head}",
    // "merges_url": "https://api.github.com/repos/cherryApp/abesse/merges",
    // "archive_url": "https://api.github.com/repos/cherryApp/abesse/{archive_format}{/ref}",
    // "downloads_url": "https://api.github.com/repos/cherryApp/abesse/downloads",
    // "issues_url": "https://api.github.com/repos/cherryApp/abesse/issues{/number}",
    // "pulls_url": "https://api.github.com/repos/cherryApp/abesse/pulls{/number}",
    // "milestones_url": "https://api.github.com/repos/cherryApp/abesse/milestones{/number}",
    // "notifications_url": "https://api.github.com/repos/cherryApp/abesse/notifications{?since,all,participating}",
    // "labels_url": "https://api.github.com/repos/cherryApp/abesse/labels{/name}",
    // "releases_url": "https://api.github.com/repos/cherryApp/abesse/releases{/id}",
    // "deployments_url": "https://api.github.com/repos/cherryApp/abesse/deployments",
    // "created_at": "2020-01-08T14:33:55Z",
    // "updated_at": "2021-05-09T07:32:38Z",
    // "pushed_at": "2021-05-28T22:32:44Z",
    // "git_url": "git://github.com/cherryApp/abesse.git",
    // "ssh_url": "git@github.com:cherryApp/abesse.git",
    // "clone_url": "https://github.com/cherryApp/abesse.git",
    // "svn_url": "https://github.com/cherryApp/abesse",
    // "homepage": null,
    // "size": 7871,
    // "stargazers_count": 2,
    // "watchers_count": 2,
    // "language": "TypeScript",
    // "has_issues": true,
    // "has_projects": true,
    // "has_downloads": true,
    // "has_wiki": true,
    // "has_pages": false,
    // "forks_count": 0,
    // "mirror_url": null,
    // "archived": false,
    // "disabled": false,
    // "open_issues_count": 23,
    // "license": null,
    // "forks": 0,
    // "open_issues": 23,
    // "watchers": 2,
    // "default_branch": "master"

}
