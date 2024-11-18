export const injectSvg = async () => {
  const SVGInject = (await import("@iconfu/svg-inject")).default;
  SVGInject(document.getElementsByClassName("icon-svg"));
};
