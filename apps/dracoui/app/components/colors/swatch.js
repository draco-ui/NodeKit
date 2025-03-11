import Color from "color";
import { convert } from 'colorizr';
import Component from "@glimmer/component";

export default class Swatch extends Component {
  get colorName() {
    return this.args.color.colorName;
  }

  get cssVariable() {
    return this.args.color.cssVariable;
  }

  get hexValue() {
    return this.args.color.value;
  }

  get rgbValue() {
    try {
      const color = Color(this.hexValue);
      const rgb = color.rgb().array();
      return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    } catch (error) {
      console.error("Error converting hex to RGB:", error);
      return "Error convert";
    }
  }

  get hslValue() {
    try {
      const color = Color(this.hexValue);
      const hsl = color.hsl().array();
      const h = Math.round(hsl[0]);
      const s = Math.round(hsl[1]);
      const l = Math.round(hsl[2]);
      return `hsl(${h}, ${s}%, ${l}%)`;
    } catch (error) {
      console.error("Error converting hex to HSL:", error);
      return "Invalid color";
    }
  }

  get oklchValue() {
    return convert(this.rgbValue, 'oklch');
  }
};
