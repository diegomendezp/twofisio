import { tween, styler, easing } from 'popmotion';

export const _bubleAnimation = (
  posX,
  posX2,
  fromScaleX,
  toScaleX,
  fromScaleY,
  toScaleY,
  posY,
  posY2,
) => {
  tween({
    from: {
      transalteX: posX, transalteY: posY, scaleX: fromScaleX, scaleY: fromScaleY,
    },
    to: {
      transalteX: posX2, transalteY: posY2, scaleX: toScaleX, scaleY: toScaleY,
    },
    duration: 1800,
    ease: easing.easeInOut,
    flip: Infinity,
  }).start((v) => {
    if (document.getElementById('target') !== null) {
      document.getElementById(
        'target',
      ).style.webkitTransform = `translate(${v.transalteX}px, ${v.transalteY}px) scale(${
        v.scaleX}, ${v.scaleY}) `;
    }
  });
};


export const detectmob = () => {
  if (navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }

  return false;
};
