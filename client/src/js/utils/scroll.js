export function getScrollXY() {
  var scrOfX = 0, scrOfY = 0;
  if  (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if (
    document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)
  ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }

  return [ scrOfX, scrOfY ];
}

export function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}
