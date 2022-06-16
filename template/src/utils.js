// 创建饼图的间隙
// gapSize: 空隙占比大小
export function createGap(list, gapSize = 2, valueKey = 'value') {
  const length = list.length
  let sum = 0

  for (const item of list) {
    sum += item[valueKey]
  }

  // 计算间隔的数值大小 gapSize = 100 * interval / (interval * length + sum)
  const interval = sum / (100 / gapSize - length)

  return {
    name: '',
    value: interval,
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
    itemStyle: {
      color: 'transparent',
    },
  }
}
