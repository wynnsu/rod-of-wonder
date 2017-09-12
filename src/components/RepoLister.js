import React, {Component} from 'react';

class RepoLister extends Component {
    constructor() {
        super();
        this.state = {
            repos: []
        };
    }
    componentDidMount() {
        const query = `{
            user(login : "wynnsu") {
                repositories(first : 10, isFork : false) {
                    nodes {
                        name owner {
                            login
                        }
                        primaryLanguage {
                            name
                        }
                        languages(first : 10) {
                            totalSize
                            edges {
                                size node {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }`;

        var url = "https://api.github.com/graphql";
        var options = {
            method: "POST",
            body: JSON.stringify({query: query}),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Basic d3lubnN1OjZjYmE1YTI4YTBjZWRiMjVkMDIxM2JlOGFkMjEyMTc4NjEyZDBmYjE="
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(result => result.data.user.repositories.nodes)
            .then(repos => this.setState({repos}));
    }
    render() {
        var totalSize = 0;
        var languages = {};
        this
            .state
            .repos
            .forEach(function (repo) {
                totalSize += repo.languages.totalSize;
                repo
                    .languages
                    .edges
                    .forEach(function (lan) {
                        languages[repo.primaryLanguage.name] = lan.size;
                    }, this);
            }, this);
        for (var k in languages) {
            if (languages.hasOwnProperty(k)) {
                languages[k] = Math.trunc(languages[k] * 1000 / totalSize);
            }
        }

        return (
            <div>
                <h1>Total Size: {totalSize}</h1>
                <ul>
                    {this
                        .state
                        .repos
                        .map(repo => repo.owner.login === "wynnsu" && <li key={repo.name}>
                            {repo.name
}
                        </li>)}
                </ul>
            </div>
        );
    }
};

export default RepoLister;