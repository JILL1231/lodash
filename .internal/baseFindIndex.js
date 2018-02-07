/**
 * The base implementation of `findIndex` and `findLastIndex`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

/**
 * `findIndex` 和 `findLastIndex` 的基本实现方法
 *
 * @param array       需要处理的数组
 * @param predicate   这个函数用于判断条件且会在每一次迭代调用,接收三个参数：(value, index, array)
 * @param fromIndex   开始查找的索引
 * @param fromRight   从开始还是末尾开始判断
 * @returns {*}       返回匹配的索引值，否则返回"-1"
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  //获取数组的长度：const {length} = array <=> const length = array.length
  const { length } = array

  //通过三目运算符判断从开始还是末尾开始判断
  //若是从末尾开始判断，则开始查找的索引等于 搜索的索引 +1，否则开始查找的索引等于 搜索的索引 -1
  let index = fromIndex + (fromRight ? 1 : -1)

  //遍历每个元素，若是从末尾开始判断，数组索引循环递减，否则数组索引循环递增，直至大于数组长度。若为false，则返回-1
  while ((fromRight ? index-- : ++index < length)) {
    //若predicate函数结果为true,返回对应的index
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex
