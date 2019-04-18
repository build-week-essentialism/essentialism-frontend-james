//Support Variables
const viewContainerTopOrBottomPadding = 25;
const viewContainerTopAndBottomPadding = viewContainerTopOrBottomPadding * 2;

//Export Variables
const headerHeight = '85.875px';
const viewContainerTopOrBottomPaddingPx = '25px 0';
const viewContainerHeight = `calc(100vh - ${headerHeight} - ${viewContainerTopAndBottomPadding}px)`;

module.exports = {
  headerHeight,
  viewContainerHeight,
  viewContainerTopOrBottomPaddingPx
};
