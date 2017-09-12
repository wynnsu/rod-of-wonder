# Rod of Wonder

Greetings, pathfinder. Here's a free Wayfinder for your battle!
![screenshot](https://github.com/wynnsu/rod-of-wonder/blob/master/images/screenshot.png "Screenshot")

## Intro

Rod of wonder is a pathfinder roleplaying game companion application built with React which provides easier access to game resources.

## Roadmap

- [x] ~~react-uwp~~
- [x] ~~react-bootstrap~~
- [x] ~~react-material-ui~~
- [x] styled-components
- [x] ~~css grid layout~~
- [x] ~~Heroku~~
- [x] Github pages
- [ ] color transparentize
- [ ] character sheet

## Code Snippets

### Style react-router Link component with styled-components

```javascript
const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 20px 40px;
    text-decoration: none;
    &:hover{
        background-color:#222;
    }
`;
```

### Github GraphQL api calling

```javascript
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
```
