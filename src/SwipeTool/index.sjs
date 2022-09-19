const getWidth = (rightWidth) => {
  const num = rightWidth * 2;
  return `calc(100% + ${num}rpx)`;
};
const getWidth2 = (rightWidth) => {
  const num = rightWidth;
  return `calc(100% - ${num}rpx)`;
};
const getWidth3 = (rightWidth) => {
  return `calc(100% - ${rightWidth - 2}rpx)`;
};
const getMarginLeft = (rightWidth) => {
  const num = rightWidth;
  return `calc(-${num}rpx)`;
};
const getMarginLeft2 = (rightWidth) => {
  const num = rightWidth;
  return `${num}rpx`;
};
const getLeft = (tapType, item, idx, right) => {
  if (right.length === 1) {
    return tapType && tapType === item.type ? 'text-move-midd' : '';
  }
  if (right.length === 3 && idx === 1) {
    return tapType && tapType === item.type ? 'text-move-midd' : '';
  }
  let cls = '';
  if (idx === 0) {
    cls = 'text-move-left';
  } else {
    cls = 'text-move-right';
  }
  return tapType && tapType === item.type ? cls : '';
}

export default {
  getLeft,
  getWidth,
  getWidth2,
  getWidth3,
  getMarginLeft,
  getMarginLeft2,
};
