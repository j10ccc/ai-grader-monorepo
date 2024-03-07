import { AnswerPaperEntities } from "@ai-grader/entities";
import { ImageEvent, Leafer, Rect } from "leafer-ui";
import { useEffect, useId, useRef } from "react";
import AnnotationRect from "./annotation-rect";

interface IProps {
  imageUrl: string;
  items: AnswerPaperEntities.TemplateItem[];
}

export default function PaperWithAnnotation(props: IProps) {
  const { imageUrl, items } = props;
  const app = useRef<Leafer>();
  const appMountId = useId();
  const imageMeta = useRef<{ width: number; height: number }>();

  function loadAnnotation() {
    if (!app.current) return;
    const canvasSize = { height: app.current?.height, width: app.current?.width };
    const image = imageMeta.current;
    if (!image) throw new Error("no image loaded");
    const isFitHeight = canvasSize.width / canvasSize.height > image.width / image.height;
    const scale = isFitHeight ? canvasSize.height / image.height : canvasSize.width / image.width;
    const bounds = isFitHeight
      ? { x: canvasSize.width / 2 - image.width * scale / 2, y: 0, width: image.width * scale, height: canvasSize.height }
      : { x: 0, y: canvasSize.height / 2 - image.height * scale / 2, width: canvasSize.width, height: image.height * scale };

    items.forEach(item => {
      // render custom rect
      const rect = new AnnotationRect({
        x: (isFitHeight ? bounds.x : 0) + bounds.width * item.x / 100,
        y: (isFitHeight ? 0 : bounds.y) + bounds.height * item.y / 100,
        width: bounds.width * item.width / 100,
        height: bounds.height * item.height / 100,
        label: `第 ${item.id} 题`
      });
      app.current?.add(rect);
    });
  }

  function initialCanvas() {
    app.current = new Leafer({ view: appMountId, type: "draw" });
  }

  function loadImage() {
    if (!app.current) return;
    const imageRect = new Rect({
      height: app.current.height,
      width: app.current.width,
      fill: {
        type: "image",
        url: imageUrl,
        mode: "fit",
      },
    });
    imageRect.once(ImageEvent.LOADED, (e) => {
      imageMeta.current = { width: e.image.width, height: e.image.height };
      loadAnnotation();
    });
    app.current.add(imageRect);
  }

  useEffect(() => {
    initialCanvas();
    loadImage();

    return () => {
      app.current?.destroy();
    };
  }, []);

  return (
    <div id={appMountId} className="w-[80vw] h-[80vh]" />
  );
}