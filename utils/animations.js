import { tween, styler, easing } from "popmotion";

export const _bubleAnimation = (
  posX,
  posY,
  fromScaleY,
  toScaleY,
  fromScaleX,
  toScaleX
) => {
  tween({
    from: { scaleY: fromScaleY, scaleX: fromScaleX },
    to: { scaleY: toScaleY, scaleX: toScaleX },
    duration: 1800,
    ease: easing.easeInOut,
    flip: Infinity
  }).start(v => {
    if (document.getElementById("target") !== null) {
      document.getElementById(
        "target"
      ).style.transform = `translate(${posX}px, ${posY}px) scaleY(${
        v.scaleY
      }) scaleX(${v.scaleX})`;
    }
  });
};
