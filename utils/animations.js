import { tween, styler, easing } from "popmotion";

export const _bubleAnimation = (
  posX,
  posX2,
  fromScaleX,
  toScaleX,
  posY,
  fromScaleY,
  toScaleY,
) => {
    tween({
      from: { transalteX: posX, scale: fromScaleX },
      to: { transalteX: posX2, scale: toScaleX },
      duration: 1800,
      ease: easing.easeInOut,
      flip: Infinity
    }).start(v => {
      if (document.getElementById("target") !== null) {
        document.getElementById("target").style.webkitTransform = `translate(${v.transalteX}px, -300px) scale(${v.scale})`;
        // document.getElementById("target").style.webkitTransform = `scaleY(${v.scaleY})`;
        // document.getElementById("target").style.MozTransform = `translate(${500}px, ${-250}px) scale(${v.scaleX})`;
      }
    });
};