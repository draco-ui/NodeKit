import Component from "@glimmer/component";

export default class SwatchGroup extends Component {
  get colorName() {
    return this.args.name;
  }

  get colors() {
    return this.args.colors;
  }
}
