import { IPenInputData } from "@leafer-ui/interface";
import { Box, Pen, Rect } from "leafer-ui";

interface ICustomInputData extends IPenInputData {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
}

class AnnotationRect extends Pen {
  get __tag() { return "AnnotationRect"; }

  constructor(data: ICustomInputData) {
    super(data);
    const areaRect = new Rect({
      width: data.width,
      height: data.height,
      cornerRadius: 2,
      stroke: "black",
      strokeWidth: 2
    });
    this.add(areaRect);

    const labelRect = new Box({
      x: 0,
      y: 0,
      fill: "black",
      cornerRadius: 2,
      children: [{
        tag: "Text",
        fill: "white",
        fontSize: 12,
        text: data.label,
        padding: [1, 6]
      }]
    });
    this.add(labelRect);
    // this.setStyle({ fill: "#FF4B4B", windingRule: "nonzero" });
    // this.rect(0, 0, data.width, data.height);
    // this.lineTo(0, data.height).moveTo(0, 0);
  }
}

AnnotationRect.registerUI();

export default AnnotationRect;