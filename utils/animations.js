import { tween, styler, easing } from 'popmotion';

export const _bubleAnimation = (
  posX,
  posY,
  fromScaleY,
  toScaleY,
  fromScaleX,
  toScaleX,
) => {
  tween({
    from: { scaleY: fromScaleY, scaleX: fromScaleX },
    to: { scaleY: toScaleY, scaleX: toScaleX },
    duration: 1800,
    ease: easing.easeInOut,
    flip: Infinity,
  }).start((v) => {
    if (document.getElementById('target') !== null) {
      document.getElementById(
        'target',
      ).style.webkitTransform = `translate3d(${posX}px, ${posY}px,0) scaleY(${
        v.scaleY
      }) scaleX(${v.scaleX})`;
      document.getElementById(
        'target',
      ).setAttribute('transform', `translate3d(${posX}px, ${posY}px,0) scaleY(${
        v.scaleY
      }) scaleX(${v.scaleX})`);
    }
  });
};
