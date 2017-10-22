# Rod of Wonder

*Greetings, pathfinder. Here's a free Wayfinder for your battle!*

![screenshot](https://github.com/wynnsu/rod-of-wonder/blob/master/images/screenshot.png "Screenshot")

## Intro

Rod of wonder is a Character Sheet editor for Pathfinder roleplaying game based on [facebook/draft-js](https://github.com/facebook/draft-js).

### Inline toolbar

Inline-toolbar for Edit and Peek Link

#### Edit

* Change item
* Add brief
* Remove item

#### Peek Link

Peek full description

![inline-toolbar](https://github.com/wynnsu/rod-of-wonder/blob/master/images/design_inlinetoobar.png "Inline-toobar")

![peek](https://github.com/wynnsu/rod-of-wonder/blob/master/images/design_peek.png "Peek")

## Project Structure

### src/comopnents

Presentational components, display only

```js

export default class extends Component {
    render() {
        return (
            <div>
                <ItemWrapper>
                    <TitleBox>{this.props.itemdata.title}</TitleBox>
                    <PriceWrapper>
                        <PriceTitle>PRICE</PriceTitle>
                        <PriceBox>
                            {this.props.itemdata.price}&nbsp;GP
                        </PriceBox>
                    </PriceWrapper>
                    <ItemBox>
                        <b>AURA&nbsp;</b>{this.props.itemdata.aura}</ItemBox>
                    <ItemBox>
                        <b>CL&nbsp;</b>{this.props.itemdata.cl}</ItemBox>
                    <ItemBox>
                        <b>WEIGHT&nbsp;</b>{this.props.itemdata.weight}</ItemBox>
                </ItemWrapper>
                <Description>
                    {this.props.itemdata.description}
                </Description>
                <EffectTable rows={this.props.effectdata}/>
            </div>
        );
    }
}
```

### src/pages

Container components, handle logic and data

Example:

```js
export default class extends Component {
  render() {
    return (
      <Background>
        <Content>
          <ItemTable
            itemdata={ItemData(this.props.name)}
            effectdata={EffectTableData(this.props.name)}/>
        </Content>
      </Background>
    );
  }
}
```

### src/apis

Static mock data

```js
const items = [
    {
        id: 'rod-of-wonder',
        data: {
            'title': 'Rod of wonder',
            'price': 12000,
            'aura': 'moderate enchantment',
            'cl': 10,
            'weight': 5,
            'description': `A rod of wonder is a strange and unpredictable device that randomly generates
        any number of weird effects each time it is used.Activating the rod is a
        standard action.Typical powers of the rod include the following.`
        }
    }
];
```

## Components

* [Effect Table](src/components/item/EffectTable.js)

    Effect table with Pathfinder rule book looks.

* [Item Table](src/components/item/ItemTable.js)

    Item description with Pathfinder rule book looks.