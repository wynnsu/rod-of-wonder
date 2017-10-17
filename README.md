# Rod of Wonder

*Greetings, pathfinder. Here's a free Wayfinder for your battle!*

![screenshot](https://github.com/wynnsu/rod-of-wonder/blob/master/images/screenshot.png "Screenshot")

## Intro

Rod of wonder is a Character Sheet editor for Pathfinder roleplaying game based on [facebook/draft-js](https://github.com/facebook/draft-js).

## Components

* [Effect Table](src/components/item/EffectTable.js)

    Effect table with Pathfinder rule book looks.

* [Item Table](src/components/item/ItemTable.js)

    Item description with Pathfinder rule book looks.

## Roadmap

* [x] ~~react-uwp~~
* [x] ~~react-bootstrap~~
* [x] ~~react-material-ui~~
* [x] styled-components
* [x] ~~css grid layout~~
* [x] ~~Heroku~~
* [x] Github pages
* [x] color transparentize
* [x] resume in html
* [ ] api
  * [x] local
  * [ ] graphql
* [ ] character sheet
  * [x] data
  * [ ] layout
* [x] Flexbox layout

## Code Snippets

### Deploy to github pages with react router

```jsx
const baseUrl=process.env.PUBLIC_URL;
const Routes = () => (
  <Router>
    <div>
      <Route exact path={baseUrl+"/"} component={Home}/>
    </div>
  </Router>
)
```

### Style react-router Link component with styled-components

```jsx
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
            user(login : "USERNAME") {
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
                "Authorization": "TOKEN"
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(result => result.data.user.repositories.nodes)
            .then(repos => this.setState({repos}));
    }
```
