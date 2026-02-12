import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-USUSPH2O.js";

// node_modules/d3-timelines/node_modules/d3-axis/src/array.js
var slice;
var init_array = __esm({
  "node_modules/d3-timelines/node_modules/d3-axis/src/array.js"() {
    slice = Array.prototype.slice;
  }
});

// node_modules/d3-timelines/node_modules/d3-axis/src/identity.js
function identity_default(x) {
  return x;
}
var init_identity = __esm({
  "node_modules/d3-timelines/node_modules/d3-axis/src/identity.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-axis/src/axis.js
function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}
function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}
function number(scale) {
  return function(d) {
    return +scale(d);
  };
}
function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2;
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + 0.5, range1 = +range[range.length - 1] + 0.5, position = (scale.bandwidth ? center : number)(scale.copy()), selection2 = context.selection ? context.selection() : context, path = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
        return isFinite(d = position(d)) ? transform2(d) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
        var p = this.parentNode.__axis;
        return transform2(p && isFinite(p = p(d)) ? p : position(d));
      });
    }
    tickExit.remove();
    path.attr("d", orient === left || orient == right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d) {
      return transform2(position(d));
    });
    line.attr(x + "2", k * tickSizeInner);
    text.attr(x, k * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = slice.call(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis2) : tickFormat;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  return axis2;
}
function axisTop(scale) {
  return axis(top, scale);
}
function axisRight(scale) {
  return axis(right, scale);
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}
var top, right, bottom, left, epsilon;
var init_axis = __esm({
  "node_modules/d3-timelines/node_modules/d3-axis/src/axis.js"() {
    init_array();
    init_identity();
    top = 1;
    right = 2;
    bottom = 3;
    left = 4;
    epsilon = 1e-6;
  }
});

// node_modules/d3-timelines/node_modules/d3-axis/src/index.js
var src_exports = {};
__export(src_exports, {
  axisBottom: () => axisBottom,
  axisLeft: () => axisLeft,
  axisRight: () => axisRight,
  axisTop: () => axisTop
});
var init_src = __esm({
  "node_modules/d3-timelines/node_modules/d3-axis/src/index.js"() {
    init_axis();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/ascending.js
function ascending_default(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
var init_ascending = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/ascending.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/bisector.js
function bisector_default(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}
function ascendingComparator(f) {
  return function(d, x) {
    return ascending_default(f(d), x);
  };
}
var init_bisector = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/bisector.js"() {
    init_ascending();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/bisect.js
var ascendingBisect, bisectRight, bisectLeft, bisect_default;
var init_bisect = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/bisect.js"() {
    init_ascending();
    init_bisector();
    ascendingBisect = bisector_default(ascending_default);
    bisectRight = ascendingBisect.right;
    bisectLeft = ascendingBisect.left;
    bisect_default = bisectRight;
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/pairs.js
function pairs_default(array3, f) {
  if (f == null) f = pair;
  var i = 0, n = array3.length - 1, p = array3[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array3[++i]);
  return pairs;
}
function pair(a, b) {
  return [a, b];
}
var init_pairs = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/pairs.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/cross.js
function cross_default(values0, values1, reduce) {
  var n0 = values0.length, n1 = values1.length, values = new Array(n0 * n1), i0, i1, i, value0;
  if (reduce == null) reduce = pair;
  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }
  return values;
}
var init_cross = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/cross.js"() {
    init_pairs();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/descending.js
function descending_default(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
var init_descending = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/descending.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/number.js
function number_default(x) {
  return x === null ? NaN : +x;
}
var init_number = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/number.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/variance.js
function variance_default(values, valueof) {
  var n = values.length, m = 0, i = -1, mean = 0, value, delta, sum = 0;
  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number_default(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = number_default(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }
  if (m > 1) return sum / (m - 1);
}
var init_variance = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/variance.js"() {
    init_number();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/deviation.js
function deviation_default(array3, f) {
  var v = variance_default(array3, f);
  return v ? Math.sqrt(v) : v;
}
var init_deviation = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/deviation.js"() {
    init_variance();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/extent.js
function extent_default(values, valueof) {
  var n = values.length, i = -1, value, min, max;
  if (valueof == null) {
    while (++i < n) {
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) {
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) {
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }
  return [min, max];
}
var init_extent = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/extent.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/array.js
var array, slice2, map;
var init_array2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/array.js"() {
    array = Array.prototype;
    slice2 = array.slice;
    map = array.map;
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/constant.js
function constant_default(x) {
  return function() {
    return x;
  };
}
var init_constant = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/constant.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/identity.js
function identity_default2(x) {
  return x;
}
var init_identity2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/identity.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/range.js
function range_default(start2, stop, step) {
  start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range = new Array(n);
  while (++i < n) {
    range[i] = start2 + i * step;
  }
  return range;
}
var init_range = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/range.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/ticks.js
function ticks_default(start2, stop, count) {
  var reverse, i = -1, n, ticks, step;
  stop = +stop, start2 = +start2, count = +count;
  if (start2 === stop && count > 0) return [start2];
  if (reverse = stop < start2) n = start2, start2 = stop, stop = n;
  if ((step = tickIncrement(start2, stop, count)) === 0 || !isFinite(step)) return [];
  if (step > 0) {
    start2 = Math.ceil(start2 / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start2 + 1));
    while (++i < n) ticks[i] = (start2 + i) * step;
  } else {
    start2 = Math.floor(start2 * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start2 - stop + 1));
    while (++i < n) ticks[i] = (start2 - i) / step;
  }
  if (reverse) ticks.reverse();
  return ticks;
}
function tickIncrement(start2, stop, count) {
  var step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start2, stop, count) {
  var step0 = Math.abs(stop - start2) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start2 ? -step1 : step1;
}
var e10, e5, e2;
var init_ticks = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/ticks.js"() {
    e10 = Math.sqrt(50);
    e5 = Math.sqrt(10);
    e2 = Math.sqrt(2);
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/threshold/sturges.js
function sturges_default(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
}
var init_sturges = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/threshold/sturges.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/histogram.js
function histogram_default() {
  var value = identity_default2, domain = extent_default, threshold2 = sturges_default;
  function histogram(data) {
    var i, n = data.length, x, values = new Array(n);
    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }
    var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold2(values, x0, x1);
    if (!Array.isArray(tz)) {
      tz = tickStep(x0, x1, tz);
      tz = range_default(Math.ceil(x0 / tz) * tz, x1, tz);
    }
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;
    var bins = new Array(m + 1), bin;
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[bisect_default(tz, x, 0, m)].push(data[i]);
      }
    }
    return bins;
  }
  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default(_), histogram) : value;
  };
  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant_default([_[0], _[1]]), histogram) : domain;
  };
  histogram.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default(slice2.call(_)) : constant_default(_), histogram) : threshold2;
  };
  return histogram;
}
var init_histogram = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/histogram.js"() {
    init_array2();
    init_bisect();
    init_constant();
    init_extent();
    init_identity2();
    init_range();
    init_ticks();
    init_sturges();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/quantile.js
function quantile_default(values, p, valueof) {
  if (valueof == null) valueof = number_default;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}
var init_quantile = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/quantile.js"() {
    init_number();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/threshold/freedmanDiaconis.js
function freedmanDiaconis_default(values, min, max) {
  values = map.call(values, number_default).sort(ascending_default);
  return Math.ceil((max - min) / (2 * (quantile_default(values, 0.75) - quantile_default(values, 0.25)) * Math.pow(values.length, -1 / 3)));
}
var init_freedmanDiaconis = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/threshold/freedmanDiaconis.js"() {
    init_array2();
    init_ascending();
    init_number();
    init_quantile();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/threshold/scott.js
function scott_default(values, min, max) {
  return Math.ceil((max - min) / (3.5 * deviation_default(values) * Math.pow(values.length, -1 / 3)));
}
var init_scott = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/threshold/scott.js"() {
    init_deviation();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/max.js
function max_default(values, valueof) {
  var n = values.length, i = -1, value, max;
  if (valueof == null) {
    while (++i < n) {
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) {
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) {
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }
  return max;
}
var init_max = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/max.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/mean.js
function mean_default(values, valueof) {
  var n = values.length, m = n, i = -1, value, sum = 0;
  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number_default(values[i]))) sum += value;
      else --m;
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = number_default(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }
  if (m) return sum / m;
}
var init_mean = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/mean.js"() {
    init_number();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/median.js
function median_default(values, valueof) {
  var n = values.length, i = -1, value, numbers = [];
  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number_default(values[i]))) {
        numbers.push(value);
      }
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = number_default(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }
  return quantile_default(numbers.sort(ascending_default), 0.5);
}
var init_median = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/median.js"() {
    init_ascending();
    init_number();
    init_quantile();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/merge.js
function merge_default(arrays) {
  var n = arrays.length, m, i = -1, j = 0, merged, array3;
  while (++i < n) j += arrays[i].length;
  merged = new Array(j);
  while (--n >= 0) {
    array3 = arrays[n];
    m = array3.length;
    while (--m >= 0) {
      merged[--j] = array3[m];
    }
  }
  return merged;
}
var init_merge = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/merge.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/min.js
function min_default(values, valueof) {
  var n = values.length, i = -1, value, min;
  if (valueof == null) {
    while (++i < n) {
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) {
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) {
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }
  return min;
}
var init_min = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/min.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/permute.js
function permute_default(array3, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array3[indexes[i]];
  return permutes;
}
var init_permute = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/permute.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/scan.js
function scan_default(values, compare) {
  if (!(n = values.length)) return;
  var n, i = 0, j = 0, xi, xj = values[j];
  if (compare == null) compare = ascending_default;
  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }
  if (compare(xj, xj) === 0) return j;
}
var init_scan = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/scan.js"() {
    init_ascending();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/shuffle.js
function shuffle_default(array3, i0, i1) {
  var m = (i1 == null ? array3.length : i1) - (i0 = i0 == null ? 0 : +i0), t, i;
  while (m) {
    i = Math.random() * m-- | 0;
    t = array3[m + i0];
    array3[m + i0] = array3[i + i0];
    array3[i + i0] = t;
  }
  return array3;
}
var init_shuffle = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/shuffle.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/sum.js
function sum_default(values, valueof) {
  var n = values.length, i = -1, value, sum = 0;
  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value;
    }
  } else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }
  return sum;
}
var init_sum = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/sum.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/transpose.js
function transpose_default(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = min_default(matrix, length), transpose = new Array(m); ++i < m; ) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
}
function length(d) {
  return d.length;
}
var init_transpose = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/transpose.js"() {
    init_min();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/zip.js
function zip_default() {
  return transpose_default(arguments);
}
var init_zip = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/zip.js"() {
    init_transpose();
  }
});

// node_modules/d3-timelines/node_modules/d3-array/src/index.js
var src_exports2 = {};
__export(src_exports2, {
  ascending: () => ascending_default,
  bisect: () => bisect_default,
  bisectLeft: () => bisectLeft,
  bisectRight: () => bisectRight,
  bisector: () => bisector_default,
  cross: () => cross_default,
  descending: () => descending_default,
  deviation: () => deviation_default,
  extent: () => extent_default,
  histogram: () => histogram_default,
  max: () => max_default,
  mean: () => mean_default,
  median: () => median_default,
  merge: () => merge_default,
  min: () => min_default,
  pairs: () => pairs_default,
  permute: () => permute_default,
  quantile: () => quantile_default,
  range: () => range_default,
  scan: () => scan_default,
  shuffle: () => shuffle_default,
  sum: () => sum_default,
  thresholdFreedmanDiaconis: () => freedmanDiaconis_default,
  thresholdScott: () => scott_default,
  thresholdSturges: () => sturges_default,
  tickIncrement: () => tickIncrement,
  tickStep: () => tickStep,
  ticks: () => ticks_default,
  transpose: () => transpose_default,
  variance: () => variance_default,
  zip: () => zip_default
});
var init_src2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-array/src/index.js"() {
    init_bisect();
    init_ascending();
    init_bisector();
    init_cross();
    init_descending();
    init_deviation();
    init_extent();
    init_histogram();
    init_freedmanDiaconis();
    init_scott();
    init_sturges();
    init_max();
    init_mean();
    init_median();
    init_merge();
    init_min();
    init_pairs();
    init_permute();
    init_quantile();
    init_range();
    init_scan();
    init_shuffle();
    init_sum();
    init_ticks();
    init_transpose();
    init_variance();
    init_zip();
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/interval.js
function newInterval(floori, offseti, count, field) {
  function interval2(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval2.floor = function(date2) {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval2.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval2.round = function(date2) {
    var d0 = interval2(date2), d1 = interval2.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval2.offset = function(date2, step) {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval2.range = function(start2, stop, step) {
    var range = [], previous;
    start2 = interval2.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop) || !(step > 0)) return range;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop);
    return range;
  };
  interval2.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
        }
      }
    });
  };
  if (count) {
    interval2.count = function(start2, end) {
      t0.setTime(+start2), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval2.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? function(d) {
        return field(d) % step === 0;
      } : function(d) {
        return interval2.count(0, d) % step === 0;
      });
    };
  }
  return interval2;
}
var t0, t1;
var init_interval = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/interval.js"() {
    t0 = /* @__PURE__ */ new Date();
    t1 = /* @__PURE__ */ new Date();
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/millisecond.js
var millisecond, millisecond_default, milliseconds;
var init_millisecond = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/millisecond.js"() {
    init_interval();
    millisecond = newInterval(function() {
    }, function(date2, step) {
      date2.setTime(+date2 + step);
    }, function(start2, end) {
      return end - start2;
    });
    millisecond.every = function(k) {
      k = Math.floor(k);
      if (!isFinite(k) || !(k > 0)) return null;
      if (!(k > 1)) return millisecond;
      return newInterval(function(date2) {
        date2.setTime(Math.floor(date2 / k) * k);
      }, function(date2, step) {
        date2.setTime(+date2 + step * k);
      }, function(start2, end) {
        return (end - start2) / k;
      });
    };
    millisecond_default = millisecond;
    milliseconds = millisecond.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/duration.js
var durationSecond, durationMinute, durationHour, durationDay, durationWeek;
var init_duration = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/duration.js"() {
    durationSecond = 1e3;
    durationMinute = 6e4;
    durationHour = 36e5;
    durationDay = 864e5;
    durationWeek = 6048e5;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/second.js
var second, second_default, seconds;
var init_second = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/second.js"() {
    init_interval();
    init_duration();
    second = newInterval(function(date2) {
      date2.setTime(date2 - date2.getMilliseconds());
    }, function(date2, step) {
      date2.setTime(+date2 + step * durationSecond);
    }, function(start2, end) {
      return (end - start2) / durationSecond;
    }, function(date2) {
      return date2.getUTCSeconds();
    });
    second_default = second;
    seconds = second.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/minute.js
var minute, minute_default, minutes;
var init_minute = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/minute.js"() {
    init_interval();
    init_duration();
    minute = newInterval(function(date2) {
      date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
    }, function(date2, step) {
      date2.setTime(+date2 + step * durationMinute);
    }, function(start2, end) {
      return (end - start2) / durationMinute;
    }, function(date2) {
      return date2.getMinutes();
    });
    minute_default = minute;
    minutes = minute.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/hour.js
var hour, hour_default, hours;
var init_hour = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/hour.js"() {
    init_interval();
    init_duration();
    hour = newInterval(function(date2) {
      date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
    }, function(date2, step) {
      date2.setTime(+date2 + step * durationHour);
    }, function(start2, end) {
      return (end - start2) / durationHour;
    }, function(date2) {
      return date2.getHours();
    });
    hour_default = hour;
    hours = hour.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/day.js
var day, day_default, days;
var init_day = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/day.js"() {
    init_interval();
    init_duration();
    day = newInterval(function(date2) {
      date2.setHours(0, 0, 0, 0);
    }, function(date2, step) {
      date2.setDate(date2.getDate() + step);
    }, function(start2, end) {
      return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay;
    }, function(date2) {
      return date2.getDate() - 1;
    });
    day_default = day;
    days = day.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/week.js
function weekday(i) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays;
var init_week = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/week.js"() {
    init_interval();
    init_duration();
    sunday = weekday(0);
    monday = weekday(1);
    tuesday = weekday(2);
    wednesday = weekday(3);
    thursday = weekday(4);
    friday = weekday(5);
    saturday = weekday(6);
    sundays = sunday.range;
    mondays = monday.range;
    tuesdays = tuesday.range;
    wednesdays = wednesday.range;
    thursdays = thursday.range;
    fridays = friday.range;
    saturdays = saturday.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/month.js
var month, month_default, months;
var init_month = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/month.js"() {
    init_interval();
    month = newInterval(function(date2) {
      date2.setDate(1);
      date2.setHours(0, 0, 0, 0);
    }, function(date2, step) {
      date2.setMonth(date2.getMonth() + step);
    }, function(start2, end) {
      return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
    }, function(date2) {
      return date2.getMonth();
    });
    month_default = month;
    months = month.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/year.js
var year, year_default, years;
var init_year = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/year.js"() {
    init_interval();
    year = newInterval(function(date2) {
      date2.setMonth(0, 1);
      date2.setHours(0, 0, 0, 0);
    }, function(date2, step) {
      date2.setFullYear(date2.getFullYear() + step);
    }, function(start2, end) {
      return end.getFullYear() - start2.getFullYear();
    }, function(date2) {
      return date2.getFullYear();
    });
    year.every = function(k) {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date2) {
        date2.setFullYear(Math.floor(date2.getFullYear() / k) * k);
        date2.setMonth(0, 1);
        date2.setHours(0, 0, 0, 0);
      }, function(date2, step) {
        date2.setFullYear(date2.getFullYear() + step * k);
      });
    };
    year_default = year;
    years = year.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/utcMinute.js
var utcMinute, utcMinute_default, utcMinutes;
var init_utcMinute = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/utcMinute.js"() {
    init_interval();
    init_duration();
    utcMinute = newInterval(function(date2) {
      date2.setUTCSeconds(0, 0);
    }, function(date2, step) {
      date2.setTime(+date2 + step * durationMinute);
    }, function(start2, end) {
      return (end - start2) / durationMinute;
    }, function(date2) {
      return date2.getUTCMinutes();
    });
    utcMinute_default = utcMinute;
    utcMinutes = utcMinute.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/utcHour.js
var utcHour, utcHour_default, utcHours;
var init_utcHour = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/utcHour.js"() {
    init_interval();
    init_duration();
    utcHour = newInterval(function(date2) {
      date2.setUTCMinutes(0, 0, 0);
    }, function(date2, step) {
      date2.setTime(+date2 + step * durationHour);
    }, function(start2, end) {
      return (end - start2) / durationHour;
    }, function(date2) {
      return date2.getUTCHours();
    });
    utcHour_default = utcHour;
    utcHours = utcHour.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/utcDay.js
var utcDay, utcDay_default, utcDays;
var init_utcDay = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/utcDay.js"() {
    init_interval();
    init_duration();
    utcDay = newInterval(function(date2) {
      date2.setUTCHours(0, 0, 0, 0);
    }, function(date2, step) {
      date2.setUTCDate(date2.getUTCDate() + step);
    }, function(start2, end) {
      return (end - start2) / durationDay;
    }, function(date2) {
      return date2.getUTCDate() - 1;
    });
    utcDay_default = utcDay;
    utcDays = utcDay.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/utcWeek.js
function utcWeekday(i) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek;
  });
}
var utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays;
var init_utcWeek = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/utcWeek.js"() {
    init_interval();
    init_duration();
    utcSunday = utcWeekday(0);
    utcMonday = utcWeekday(1);
    utcTuesday = utcWeekday(2);
    utcWednesday = utcWeekday(3);
    utcThursday = utcWeekday(4);
    utcFriday = utcWeekday(5);
    utcSaturday = utcWeekday(6);
    utcSundays = utcSunday.range;
    utcMondays = utcMonday.range;
    utcTuesdays = utcTuesday.range;
    utcWednesdays = utcWednesday.range;
    utcThursdays = utcThursday.range;
    utcFridays = utcFriday.range;
    utcSaturdays = utcSaturday.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/utcMonth.js
var utcMonth, utcMonth_default, utcMonths;
var init_utcMonth = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/utcMonth.js"() {
    init_interval();
    utcMonth = newInterval(function(date2) {
      date2.setUTCDate(1);
      date2.setUTCHours(0, 0, 0, 0);
    }, function(date2, step) {
      date2.setUTCMonth(date2.getUTCMonth() + step);
    }, function(start2, end) {
      return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
    }, function(date2) {
      return date2.getUTCMonth();
    });
    utcMonth_default = utcMonth;
    utcMonths = utcMonth.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/utcYear.js
var utcYear, utcYear_default, utcYears;
var init_utcYear = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/utcYear.js"() {
    init_interval();
    utcYear = newInterval(function(date2) {
      date2.setUTCMonth(0, 1);
      date2.setUTCHours(0, 0, 0, 0);
    }, function(date2, step) {
      date2.setUTCFullYear(date2.getUTCFullYear() + step);
    }, function(start2, end) {
      return end.getUTCFullYear() - start2.getUTCFullYear();
    }, function(date2) {
      return date2.getUTCFullYear();
    });
    utcYear.every = function(k) {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date2) {
        date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k) * k);
        date2.setUTCMonth(0, 1);
        date2.setUTCHours(0, 0, 0, 0);
      }, function(date2, step) {
        date2.setUTCFullYear(date2.getUTCFullYear() + step * k);
      });
    };
    utcYear_default = utcYear;
    utcYears = utcYear.range;
  }
});

// node_modules/d3-timelines/node_modules/d3-time/src/index.js
var src_exports3 = {};
__export(src_exports3, {
  timeDay: () => day_default,
  timeDays: () => days,
  timeFriday: () => friday,
  timeFridays: () => fridays,
  timeHour: () => hour_default,
  timeHours: () => hours,
  timeInterval: () => newInterval,
  timeMillisecond: () => millisecond_default,
  timeMilliseconds: () => milliseconds,
  timeMinute: () => minute_default,
  timeMinutes: () => minutes,
  timeMonday: () => monday,
  timeMondays: () => mondays,
  timeMonth: () => month_default,
  timeMonths: () => months,
  timeSaturday: () => saturday,
  timeSaturdays: () => saturdays,
  timeSecond: () => second_default,
  timeSeconds: () => seconds,
  timeSunday: () => sunday,
  timeSundays: () => sundays,
  timeThursday: () => thursday,
  timeThursdays: () => thursdays,
  timeTuesday: () => tuesday,
  timeTuesdays: () => tuesdays,
  timeWednesday: () => wednesday,
  timeWednesdays: () => wednesdays,
  timeWeek: () => sunday,
  timeWeeks: () => sundays,
  timeYear: () => year_default,
  timeYears: () => years,
  utcDay: () => utcDay_default,
  utcDays: () => utcDays,
  utcFriday: () => utcFriday,
  utcFridays: () => utcFridays,
  utcHour: () => utcHour_default,
  utcHours: () => utcHours,
  utcMillisecond: () => millisecond_default,
  utcMilliseconds: () => milliseconds,
  utcMinute: () => utcMinute_default,
  utcMinutes: () => utcMinutes,
  utcMonday: () => utcMonday,
  utcMondays: () => utcMondays,
  utcMonth: () => utcMonth_default,
  utcMonths: () => utcMonths,
  utcSaturday: () => utcSaturday,
  utcSaturdays: () => utcSaturdays,
  utcSecond: () => second_default,
  utcSeconds: () => seconds,
  utcSunday: () => utcSunday,
  utcSundays: () => utcSundays,
  utcThursday: () => utcThursday,
  utcThursdays: () => utcThursdays,
  utcTuesday: () => utcTuesday,
  utcTuesdays: () => utcTuesdays,
  utcWednesday: () => utcWednesday,
  utcWednesdays: () => utcWednesdays,
  utcWeek: () => utcSunday,
  utcWeeks: () => utcSundays,
  utcYear: () => utcYear_default,
  utcYears: () => utcYears
});
var init_src3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-time/src/index.js"() {
    init_interval();
    init_millisecond();
    init_second();
    init_minute();
    init_hour();
    init_day();
    init_week();
    init_month();
    init_year();
    init_utcMinute();
    init_utcHour();
    init_utcDay();
    init_utcWeek();
    init_utcMonth();
    init_utcYear();
  }
});

// node_modules/d3-timelines/node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
  return {
    y,
    m,
    d,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad2 = c === "e" ? " " : "0";
          if (format2 = formats2[c]) c = format2(date2, pad2);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day2;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day2 = week.getUTCDay();
          week = day2 > 4 || day2 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay_default.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day2 = week.getDay();
          week = day2 > 4 || day2 === 0 ? monday.ceil(week) : monday(week);
          week = day_default.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day2 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day2 + 5) % 7 : d.w + d.U * 7 - (day2 + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c, parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length2 = string.length;
  return sign + (length2 < width ? new Array(width - length2 + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  var map4 = {}, i = -1, n = names.length;
  while (++i < n) map4[names[i].toLowerCase()] = i;
  return map4;
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + day_default.count(year_default(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day2 = d.getDay();
  return day2 === 0 ? 7 : day2;
}
function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year_default(d) - 1, d), p, 2);
}
function dISO(d) {
  var day2 = d.getDay();
  return day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(thursday.count(year_default(d), d) + (year_default(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year_default(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day2 = d.getDay();
  d = day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay_default.count(utcYear_default(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear_default(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day2 = d.getUTCDay();
  return day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear_default(d), d) + (utcYear_default(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear_default(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day2 = d.getUTCDay();
  d = day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}
var pads, numberRe, percentRe, requoteRe;
var init_locale = __esm({
  "node_modules/d3-timelines/node_modules/d3-time-format/src/locale.js"() {
    init_src3();
    pads = {
      "-": "",
      "_": " ",
      "0": "0"
    };
    numberRe = /^\s*\d+/;
    percentRe = /^%/;
    requoteRe = /[\\^$*+?|[\]().{}]/g;
  }
});

// node_modules/d3-timelines/node_modules/d3-time-format/src/defaultLocale.js
function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}
var locale, timeFormat, timeParse, utcFormat, utcParse;
var init_defaultLocale = __esm({
  "node_modules/d3-timelines/node_modules/d3-time-format/src/defaultLocale.js"() {
    init_locale();
    defaultLocale({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
  }
});

// node_modules/d3-timelines/node_modules/d3-time-format/src/isoFormat.js
function formatIsoNative(date2) {
  return date2.toISOString();
}
var isoSpecifier, formatIso, isoFormat_default;
var init_isoFormat = __esm({
  "node_modules/d3-timelines/node_modules/d3-time-format/src/isoFormat.js"() {
    init_defaultLocale();
    isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
    formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);
    isoFormat_default = formatIso;
  }
});

// node_modules/d3-timelines/node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date2 = new Date(string);
  return isNaN(date2) ? null : date2;
}
var parseIso, isoParse_default;
var init_isoParse = __esm({
  "node_modules/d3-timelines/node_modules/d3-time-format/src/isoParse.js"() {
    init_isoFormat();
    init_defaultLocale();
    parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);
    isoParse_default = parseIso;
  }
});

// node_modules/d3-timelines/node_modules/d3-time-format/src/index.js
var src_exports4 = {};
__export(src_exports4, {
  isoFormat: () => isoFormat_default,
  isoParse: () => isoParse_default,
  timeFormat: () => timeFormat,
  timeFormatDefaultLocale: () => defaultLocale,
  timeFormatLocale: () => formatLocale,
  timeParse: () => timeParse,
  utcFormat: () => utcFormat,
  utcParse: () => utcParse
});
var init_src4 = __esm({
  "node_modules/d3-timelines/node_modules/d3-time-format/src/index.js"() {
    init_defaultLocale();
    init_locale();
    init_isoFormat();
    init_isoParse();
  }
});

// node_modules/d3-collection/src/map.js
function Map() {
}
function map2(object, f) {
  var map4 = new Map();
  if (object instanceof Map) object.each(function(value, key2) {
    map4.set(key2, value);
  });
  else if (Array.isArray(object)) {
    var i = -1, n = object.length, o;
    if (f == null) while (++i < n) map4.set(i, object[i]);
    else while (++i < n) map4.set(f(o = object[i], i, object), o);
  } else if (object) for (var key in object) map4.set(key, object[key]);
  return map4;
}
var prefix, map_default;
var init_map = __esm({
  "node_modules/d3-collection/src/map.js"() {
    prefix = "$";
    Map.prototype = map2.prototype = {
      constructor: Map,
      has: function(key) {
        return prefix + key in this;
      },
      get: function(key) {
        return this[prefix + key];
      },
      set: function(key, value) {
        this[prefix + key] = value;
        return this;
      },
      remove: function(key) {
        var property = prefix + key;
        return property in this && delete this[property];
      },
      clear: function() {
        for (var property in this) if (property[0] === prefix) delete this[property];
      },
      keys: function() {
        var keys = [];
        for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
        return keys;
      },
      values: function() {
        var values = [];
        for (var property in this) if (property[0] === prefix) values.push(this[property]);
        return values;
      },
      entries: function() {
        var entries = [];
        for (var property in this) if (property[0] === prefix) entries.push({
          key: property.slice(1),
          value: this[property]
        });
        return entries;
      },
      size: function() {
        var size = 0;
        for (var property in this) if (property[0] === prefix) ++size;
        return size;
      },
      empty: function() {
        for (var property in this) if (property[0] === prefix) return false;
        return true;
      },
      each: function(f) {
        for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
      }
    };
    map_default = map2;
  }
});

// node_modules/d3-collection/src/nest.js
var init_nest = __esm({
  "node_modules/d3-collection/src/nest.js"() {
    init_map();
  }
});

// node_modules/d3-collection/src/set.js
function Set() {
}
function set(object, f) {
  var set4 = new Set();
  if (object instanceof Set) object.each(function(value) {
    set4.add(value);
  });
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set4.add(object[i]);
    else while (++i < n) set4.add(f(object[i], i, object));
  }
  return set4;
}
var proto;
var init_set = __esm({
  "node_modules/d3-collection/src/set.js"() {
    init_map();
    proto = map_default.prototype;
    Set.prototype = set.prototype = {
      constructor: Set,
      has: proto.has,
      add: function(value) {
        value += "";
        this[prefix + value] = value;
        return this;
      },
      remove: proto.remove,
      clear: proto.clear,
      values: proto.keys,
      size: proto.size,
      empty: proto.empty,
      each: proto.each
    };
  }
});

// node_modules/d3-collection/src/keys.js
var init_keys = __esm({
  "node_modules/d3-collection/src/keys.js"() {
  }
});

// node_modules/d3-collection/src/values.js
var init_values = __esm({
  "node_modules/d3-collection/src/values.js"() {
  }
});

// node_modules/d3-collection/src/entries.js
var init_entries = __esm({
  "node_modules/d3-collection/src/entries.js"() {
  }
});

// node_modules/d3-collection/index.js
var init_d3_collection = __esm({
  "node_modules/d3-collection/index.js"() {
    init_nest();
    init_set();
    init_map();
    init_keys();
    init_values();
    init_entries();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/array.js
var array2, map3, slice3;
var init_array3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/array.js"() {
    array2 = Array.prototype;
    map3 = array2.map;
    slice3 = array2.slice;
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/ordinal.js
function ordinal(range) {
  var index = map_default(), domain = [], unknown = implicit;
  range = range == null ? [] : slice3.call(range);
  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = map_default();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range = slice3.call(_), scale) : range.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal().domain(domain).range(range).unknown(unknown);
  };
  return scale;
}
var implicit;
var init_ordinal = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/ordinal.js"() {
    init_d3_collection();
    init_array3();
    implicit = {
      name: "implicit"
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, range = [0, 1], step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse = range[1] < range[0], start2 = range[reverse - 0], stop = range[1 - reverse];
    step = (stop - start2) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start2 += (stop - start2 - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
    var values = range_default(n).map(function(i) {
      return start2 + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band().domain(domain()).range(range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return rescale();
}
function pointish(scale) {
  var copy2 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy2());
  };
  return scale;
}
function point() {
  return pointish(band().paddingInner(1));
}
var init_band = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/band.js"() {
    init_src2();
    init_ordinal();
  }
});

// node_modules/d3-timelines/node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}
var init_define = __esm({
  "node_modules/d3-timelines/node_modules/d3-color/src/define.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-color/src/color.js
function Color() {
}
function color(format2) {
  var m;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex3.exec(format2)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1)) : (m = reHex6.exec(format2)) ? rgbn(parseInt(m[1], 16)) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
var darker, brighter, reI, reN, reP, reHex3, reHex6, reRgbInteger, reRgbPercent, reRgbaInteger, reRgbaPercent, reHslPercent, reHslaPercent, named;
var init_color = __esm({
  "node_modules/d3-timelines/node_modules/d3-color/src/color.js"() {
    init_define();
    darker = 0.7;
    brighter = 1 / darker;
    reI = "\\s*([+-]?\\d+)\\s*";
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
    reHex3 = /^#([0-9a-f]{3})$/;
    reHex6 = /^#([0-9a-f]{6})$/;
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
    named = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };
    define_default(Color, color, {
      displayable: function() {
        return this.rgb().displayable();
      },
      toString: function() {
        return this.rgb() + "";
      }
    });
    define_default(Rgb, rgb, extend(Color, {
      brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      rgb: function() {
        return this;
      },
      displayable: function() {
        return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
      },
      toString: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
      }
    }));
    define_default(Hsl, hsl, extend(Color, {
      brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
      },
      displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }
    }));
  }
});

// node_modules/d3-timelines/node_modules/d3-color/src/math.js
var deg2rad, rad2deg;
var init_math = __esm({
  "node_modules/d3-timelines/node_modules/d3-color/src/math.js"() {
    deg2rad = Math.PI / 180;
    rad2deg = 180 / Math.PI;
  }
});

// node_modules/d3-timelines/node_modules/d3-color/src/lab.js
function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var b = rgb2xyz(o.r), a = rgb2xyz(o.g), l = rgb2xyz(o.b), x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn), y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.072175 * l) / Yn), z = xyz2lab((0.0193339 * b + 0.119192 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t02;
}
function lab2xyz(t) {
  return t > t12 ? t * t * t : t2 * (t - t02);
}
function xyz2rgb(x) {
  return 255 * (x <= 31308e-7 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}
var Kn, Xn, Yn, Zn, t02, t12, t2, t3;
var init_lab = __esm({
  "node_modules/d3-timelines/node_modules/d3-color/src/lab.js"() {
    init_define();
    init_color();
    init_math();
    Kn = 18;
    Xn = 0.95047;
    Yn = 1;
    Zn = 1.08883;
    t02 = 4 / 29;
    t12 = 6 / 29;
    t2 = 3 * t12 * t12;
    t3 = t12 * t12 * t12;
    define_default(Lab, lab, extend(Color, {
      brighter: function(k) {
        return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
      },
      darker: function(k) {
        return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
      },
      rgb: function() {
        var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
        y = Yn * lab2xyz(y);
        x = Xn * lab2xyz(x);
        z = Zn * lab2xyz(z);
        return new Rgb(
          xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z),
          // D65 -> sRGB
          xyz2rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z),
          xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
          this.opacity
        );
      }
    }));
    define_default(Hcl, hcl, extend(Color, {
      brighter: function(k) {
        return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
      },
      darker: function(k) {
        return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
      },
      rgb: function() {
        return labConvert(this).rgb();
      }
    }));
  }
});

// node_modules/d3-timelines/node_modules/d3-color/src/cubehelix.js
function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
var A, B, C, D, E, ED, EB, BC_DA;
var init_cubehelix = __esm({
  "node_modules/d3-timelines/node_modules/d3-color/src/cubehelix.js"() {
    init_define();
    init_color();
    init_math();
    A = -0.14861;
    B = 1.78277;
    C = -0.29227;
    D = -0.90649;
    E = 1.97294;
    ED = E * D;
    EB = E * B;
    BC_DA = B * C - D * A;
    define_default(Cubehelix, cubehelix, extend(Color, {
      brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
      },
      darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
      },
      rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
        return new Rgb(255 * (l + a * (A * cosh2 + B * sinh2)), 255 * (l + a * (C * cosh2 + D * sinh2)), 255 * (l + a * (E * cosh2)), this.opacity);
      }
    }));
  }
});

// node_modules/d3-timelines/node_modules/d3-color/index.js
var init_d3_color = __esm({
  "node_modules/d3-timelines/node_modules/d3-color/index.js"() {
    init_color();
    init_lab();
    init_cubehelix();
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/basis.js
function basis(t13, v0, v1, v2, v3) {
  var t22 = t13 * t13, t32 = t22 * t13;
  return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}
var init_basis = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/basis.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}
var init_basisClosed = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/basisClosed.js"() {
    init_basis();
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/constant.js
function constant_default2(x) {
  return function() {
    return x;
  };
}
var init_constant2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/constant.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default2(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default2(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default2(isNaN(a) ? b : a);
}
var init_color2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/color.js"() {
    init_constant2();
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/rgb.js
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgb_default, rgbBasis, rgbBasisClosed;
var init_rgb = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/rgb.js"() {
    init_d3_color();
    init_basis();
    init_basisClosed();
    init_color2();
    rgb_default = function rgbGamma(y) {
      var color2 = gamma(y);
      function rgb2(start2, end) {
        var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
        return function(t) {
          start2.r = r(t);
          start2.g = g(t);
          start2.b = b(t);
          start2.opacity = opacity(t);
          return start2 + "";
        };
      }
      rgb2.gamma = rgbGamma;
      return rgb2;
    }(1);
    rgbBasis = rgbSpline(basis_default);
    rgbBasisClosed = rgbSpline(basisClosed_default);
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/array.js
function array_default(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) x[i] = value_default(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}
var init_array4 = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/array.js"() {
    init_value();
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/date.js
function date_default(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
}
var init_date = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/date.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/number.js
function number_default2(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
}
var init_number2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/number.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/object.js
function object_default(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value_default(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}
var init_object = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/object.js"() {
    init_value();
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/string.js
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({
        i,
        x: number_default2(am, bm)
      });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
var reA, reB;
var init_string = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/string.js"() {
    init_number2();
    reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    reB = new RegExp(reA.source, "g");
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/value.js
function value_default(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default2 : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : Array.isArray(b) ? array_default : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default2)(a, b);
}
var init_value = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/value.js"() {
    init_d3_color();
    init_rgb();
    init_array4();
    init_date();
    init_number2();
    init_object();
    init_string();
    init_constant2();
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/round.js
function round_default(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
}
var init_round = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/round.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/transform/decompose.js
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var degrees, identity;
var init_decompose = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/transform/decompose.js"() {
    degrees = 180 / Math.PI;
    identity = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/transform/parse.js
function parseCss(value) {
  if (value === "none") return identity;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose_default(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}
var cssNode, cssRoot, cssView, svgNode;
var init_parse = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/transform/parse.js"() {
    init_decompose();
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({
        i: i - 4,
        x: number_default2(xa, xb)
      }, {
        i: i - 2,
        x: number_default2(ya, yb)
      });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({
        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
        x: number_default2(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({
        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
        x: number_default2(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: number_default2(xa, xb)
      }, {
        i: i - 2,
        x: number_default2(ya, yb)
      });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss, interpolateTransformSvg;
var init_transform = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/transform/index.js"() {
    init_number2();
    init_parse();
    interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
    interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/zoom.js
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
function zoom_default(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
    };
  } else {
    var d1 = Math.sqrt(d2), b02 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
    };
  }
  i.duration = S * 1e3;
  return i;
}
var rho, rho2, rho4, epsilon2;
var init_zoom = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/zoom.js"() {
    rho = Math.SQRT2;
    rho2 = 2;
    rho4 = 4;
    epsilon2 = 1e-12;
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.s = s(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hsl_default, hslLong;
var init_hsl = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/hsl.js"() {
    init_d3_color();
    init_color2();
    hsl_default = hsl2(hue);
    hslLong = hsl2(nogamma);
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/lab.js
var init_lab2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/lab.js"() {
    init_d3_color();
    init_color2();
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c = nogamma(start2.c, end.c), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.c = c(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hcl_default, hclLong;
var init_hcl = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/hcl.js"() {
    init_d3_color();
    init_color2();
    hcl_default = hcl2(hue);
    hclLong = hcl2(nogamma);
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y) {
    y = +y;
    function cubehelix3(start2, end) {
      var h = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s(t);
        start2.l = l(Math.pow(t, y));
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default, cubehelixLong;
var init_cubehelix2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/cubehelix.js"() {
    init_d3_color();
    init_color2();
    cubehelix_default = cubehelix2(hue);
    cubehelixLong = cubehelix2(nogamma);
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/src/quantize.js
var init_quantize = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/src/quantize.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-interpolate/index.js
var init_d3_interpolate = __esm({
  "node_modules/d3-timelines/node_modules/d3-interpolate/index.js"() {
    init_value();
    init_array4();
    init_basis();
    init_basisClosed();
    init_date();
    init_number2();
    init_object();
    init_round();
    init_string();
    init_transform();
    init_zoom();
    init_rgb();
    init_hsl();
    init_lab2();
    init_hcl();
    init_cubehelix2();
    init_quantize();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/constant.js
function constant_default3(x) {
  return function() {
    return x;
  };
}
var init_constant3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/constant.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/number.js
function number_default3(x) {
  return +x;
}
var init_number3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/number.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/continuous.js
function deinterpolateLinear(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constant_default3(b);
}
function deinterpolateClamp(deinterpolate2) {
  return function(a, b) {
    var d = deinterpolate2(a = +a, b = +b);
    return function(x) {
      return x <= a ? 0 : x >= b ? 1 : d(x);
    };
  };
}
function reinterpolateClamp(reinterpolate2) {
  return function(a, b) {
    var r = reinterpolate2(a = +a, b = +b);
    return function(t) {
      return t <= 0 ? a : t >= 1 ? b : r(t);
    };
  };
}
function bimap(domain, range, deinterpolate2, reinterpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate2(d1, d0), r0 = reinterpolate2(r1, r0);
  else d0 = deinterpolate2(d0, d1), r0 = reinterpolate2(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, deinterpolate2, reinterpolate2) {
  var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = deinterpolate2(domain[i], domain[i + 1]);
    r[i] = reinterpolate2(range[i], range[i + 1]);
  }
  return function(x) {
    var i2 = bisect_default(domain, x, 1, j) - 1;
    return r[i2](d[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp());
}
function continuous(deinterpolate2, reinterpolate2) {
  var domain = unit, range = unit, interpolate = value_default, clamp = false, piecewise, output, input;
  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate2) : deinterpolate2, interpolate)))(+x);
  }
  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate2) : reinterpolate2)))(+y);
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = map3.call(_, number_default3), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = slice3.call(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = slice3.call(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  return rescale();
}
var unit;
var init_continuous = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/continuous.js"() {
    init_src2();
    init_d3_interpolate();
    init_array3();
    init_constant3();
    init_number3();
    unit = [0, 1];
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x.slice(0, i);
  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
}
var init_formatDecimal = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/formatDecimal.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/exponent.js
function exponent_default(x) {
  return x = formatDecimal_default(Math.abs(x)), x ? x[1] : NaN;
}
var init_exponent = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/exponent.js"() {
    init_formatDecimal();
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length2 = 0;
    while (i > 0 && g > 0) {
      if (length2 + g + 1 > width) g = Math.max(1, width - length2);
      t.push(value.substring(i -= g, i + g));
      if ((length2 += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
var init_formatGroup = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/formatGroup.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var init_formatNumerals = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/formatNumerals.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/formatDefault.js
function formatDefault_default(x, p) {
  x = x.toPrecision(p);
  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (x[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      case "e":
        break out;
      default:
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
}
var init_formatDefault = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/formatDefault.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/formatPrefixAuto.js
function formatPrefixAuto_default(x, p) {
  var d = formatDecimal_default(x, p);
  if (!d) return x + "";
  var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimal_default(x, Math.max(0, p + i - 1))[0];
}
var prefixExponent;
var init_formatPrefixAuto = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/formatPrefixAuto.js"() {
    init_formatDecimal();
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x, p) {
  var d = formatDecimal_default(x, p);
  if (!d) return x + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
var init_formatRounded = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/formatRounded.js"() {
    init_formatDecimal();
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/formatTypes.js
var formatTypes_default;
var init_formatTypes = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/formatTypes.js"() {
    init_formatDefault();
    init_formatPrefixAuto();
    init_formatRounded();
    formatTypes_default = {
      "": formatDefault_default,
      "%": function(x, p) {
        return (x * 100).toFixed(p);
      },
      "b": function(x) {
        return Math.round(x).toString(2);
      },
      "c": function(x) {
        return x + "";
      },
      "d": function(x) {
        return Math.round(x).toString(10);
      },
      "e": function(x, p) {
        return x.toExponential(p);
      },
      "f": function(x, p) {
        return x.toFixed(p);
      },
      "g": function(x, p) {
        return x.toPrecision(p);
      },
      "o": function(x) {
        return Math.round(x).toString(8);
      },
      "p": function(x, p) {
        return formatRounded_default(x * 100, p);
      },
      "r": formatRounded_default,
      "s": formatPrefixAuto_default,
      "X": function(x) {
        return Math.round(x).toString(16).toUpperCase();
      },
      "x": function(x) {
        return Math.round(x).toString(16);
      }
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/formatSpecifier.js
function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}
function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match, fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zero2 = !!match[5], width = match[6] && +match[6], comma = !!match[7], precision = match[8] && +match[8].slice(1), type = match[9] || "";
  if (type === "n") comma = true, type = "g";
  else if (!formatTypes_default[type]) type = "";
  if (zero2 || fill === "0" && align === "=") zero2 = true, fill = "0", align = "=";
  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero2;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}
var re;
var init_formatSpecifier = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/formatSpecifier.js"() {
    init_formatTypes();
    re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    formatSpecifier.prototype = FormatSpecifier.prototype;
    FormatSpecifier.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + this.type;
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/identity.js
function identity_default3(x) {
  return x;
}
var init_identity3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/identity.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/locale.js
function locale_default(locale3) {
  var group = locale3.grouping && locale3.thousands ? formatGroup_default(locale3.grouping, locale3.thousands) : identity_default3, currency = locale3.currency, decimal = locale3.decimal, numerals = locale3.numerals ? formatNumerals_default(locale3.numerals) : identity_default3, percent = locale3.percent || "%";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, type = specifier.type;
    var prefix2 = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = !type || /[defgprs%]/.test(type);
    precision = precision == null ? type ? 6 : 12 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix2, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);
        if (valueNegative && +value === 0) valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : "-" : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2) value = group(value, Infinity);
      var length2 = valuePrefix.length + value.length + valueSuffix.length, padding = length2 < width ? new Array(width - length2 + 1).join(fill) : "";
      if (comma && zero2) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length2 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length2);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k = Math.pow(10, -e), prefix2 = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var prefixes;
var init_locale2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/locale.js"() {
    init_exponent();
    init_formatGroup();
    init_formatNumerals();
    init_formatSpecifier();
    init_formatTypes();
    init_formatPrefixAuto();
    init_identity3();
    prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/defaultLocale.js
function defaultLocale2(definition) {
  locale2 = locale_default(definition);
  format = locale2.format;
  formatPrefix = locale2.formatPrefix;
  return locale2;
}
var locale2, format, formatPrefix;
var init_defaultLocale2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/defaultLocale.js"() {
    init_locale2();
    defaultLocale2({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}
var init_precisionFixed = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/precisionFixed.js"() {
    init_exponent();
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}
var init_precisionPrefix = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/precisionPrefix.js"() {
    init_exponent();
  }
});

// node_modules/d3-timelines/node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent_default(max) - exponent_default(step)) + 1;
}
var init_precisionRound = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/src/precisionRound.js"() {
    init_exponent();
  }
});

// node_modules/d3-timelines/node_modules/d3-format/index.js
var init_d3_format = __esm({
  "node_modules/d3-timelines/node_modules/d3-format/index.js"() {
    init_defaultLocale2();
    init_locale2();
    init_formatSpecifier();
    init_precisionFixed();
    init_precisionPrefix();
    init_precisionRound();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/tickFormat.js
function tickFormat_default(domain, count, specifier) {
  var start2 = domain[0], stop = domain[domain.length - 1], step = tickStep(start2, stop, count == null ? 10 : count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
var init_tickFormat = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/tickFormat.js"() {
    init_src2();
    init_d3_format();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks_default(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    return tickFormat_default(domain(), count, specifier);
  };
  scale.nice = function(count) {
    if (count == null) count = 10;
    var d = domain(), i0 = 0, i1 = d.length - 1, start2 = d[i0], stop = d[i1], step;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    step = tickIncrement(start2, stop, count);
    if (step > 0) {
      start2 = Math.floor(start2 / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start2, stop, count);
    } else if (step < 0) {
      start2 = Math.ceil(start2 * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start2, stop, count);
    }
    if (step > 0) {
      d[i0] = Math.floor(start2 / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start2 * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous(deinterpolateLinear, number_default2);
  scale.copy = function() {
    return copy(scale, linear2());
  };
  return linearish(scale);
}
var init_linear = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/linear.js"() {
    init_src2();
    init_d3_interpolate();
    init_continuous();
    init_tickFormat();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/identity.js
function identity2() {
  var domain = [0, 1];
  function scale(x) {
    return +x;
  }
  scale.invert = scale;
  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map3.call(_, number_default3), scale) : domain.slice();
  };
  scale.copy = function() {
    return identity2().domain(domain);
  };
  return linearish(scale);
}
var init_identity4 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/identity.js"() {
    init_array3();
    init_linear();
    init_number3();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/nice.js
function nice_default(domain, interval2) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval2.floor(x0);
  domain[i1] = interval2.ceil(x1);
  return domain;
}
var init_nice = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/nice.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/log.js
function deinterpolate(a, b) {
  return (b = Math.log(b / a)) ? function(x) {
    return Math.log(x / a) / b;
  } : constant_default3(b);
}
function reinterpolate(a, b) {
  return a < 0 ? function(t) {
    return -Math.pow(-b, t) * Math.pow(-a, 1 - t);
  } : function(t) {
    return Math.pow(b, t) * Math.pow(a, 1 - t);
  };
}
function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x) {
    return Math.pow(base, x);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x) {
    return Math.log(x) / base;
  });
}
function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}
function log() {
  var scale = continuous(deinterpolate, reinterpolate).domain([1, 10]), domain = scale.domain, base = 10, logs = logp(10), pows = powp(10);
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = function(count) {
    var d = domain(), u = d[0], v = d[d.length - 1], r;
    if (r = v < u) i = u, u = v, v = i;
    var i = logs(u), j = logs(v), p, k, t, n = count == null ? 10 : +count, z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks_default(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length);
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };
  scale.nice = function() {
    return domain(nice_default(domain(), {
      floor: function(x) {
        return pows(Math.floor(logs(x)));
      },
      ceil: function(x) {
        return pows(Math.ceil(logs(x)));
      }
    }));
  };
  scale.copy = function() {
    return copy(scale, log().base(base));
  };
  return scale;
}
var init_log = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/log.js"() {
    init_src2();
    init_d3_format();
    init_constant3();
    init_nice();
    init_continuous();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/pow.js
function raise(x, exponent2) {
  return x < 0 ? -Math.pow(-x, exponent2) : Math.pow(x, exponent2);
}
function pow() {
  var exponent2 = 1, scale = continuous(deinterpolate2, reinterpolate2), domain = scale.domain;
  function deinterpolate2(a, b) {
    return (b = raise(b, exponent2) - (a = raise(a, exponent2))) ? function(x) {
      return (raise(x, exponent2) - a) / b;
    } : constant_default3(b);
  }
  function reinterpolate2(a, b) {
    b = raise(b, exponent2) - (a = raise(a, exponent2));
    return function(t) {
      return raise(a + b * t, 1 / exponent2);
    };
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent2 = +_, domain(domain())) : exponent2;
  };
  scale.copy = function() {
    return copy(scale, pow().exponent(exponent2));
  };
  return linearish(scale);
}
function sqrt() {
  return pow().exponent(0.5);
}
var init_pow = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/pow.js"() {
    init_constant3();
    init_linear();
    init_continuous();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/quantile.js
function quantile() {
  var domain = [], range = [], thresholds = [];
  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = quantile_default(domain, i / n);
    return scale;
  }
  function scale(x) {
    if (!isNaN(x = +x)) return range[bisect_default(thresholds, x)];
  }
  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
  };
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending_default);
    return rescale();
  };
  scale.range = function(_) {
    return arguments.length ? (range = slice3.call(_), rescale()) : range.slice();
  };
  scale.quantiles = function() {
    return thresholds.slice();
  };
  scale.copy = function() {
    return quantile().domain(domain).range(range);
  };
  return scale;
}
var init_quantile2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/quantile.js"() {
    init_src2();
    init_array3();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/quantize.js
function quantize() {
  var x0 = 0, x1 = 1, n = 1, domain = [0.5], range = [0, 1];
  function scale(x) {
    if (x <= x) return range[bisect_default(domain, x, 0, n)];
  }
  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }
  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };
  scale.range = function(_) {
    return arguments.length ? (n = (range = slice3.call(_)).length - 1, rescale()) : range.slice();
  };
  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };
  scale.copy = function() {
    return quantize().domain([x0, x1]).range(range);
  };
  return linearish(scale);
}
var init_quantize2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/quantize.js"() {
    init_src2();
    init_array3();
    init_linear();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range = [0, 1], n = 1;
  function scale(x) {
    if (x <= x) return range[bisect_default(domain, x, 0, n)];
  }
  scale.domain = function(_) {
    return arguments.length ? (domain = slice3.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = slice3.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };
  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range);
  };
  return scale;
}
var init_threshold = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/threshold.js"() {
    init_src2();
    init_array3();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number2(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(year2, month2, week, day2, hour2, minute2, second2, millisecond2, format2) {
  var scale = continuous(deinterpolateLinear, number_default2), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  var tickIntervals = [[second2, 1, durationSecond2], [second2, 5, 5 * durationSecond2], [second2, 15, 15 * durationSecond2], [second2, 30, 30 * durationSecond2], [minute2, 1, durationMinute2], [minute2, 5, 5 * durationMinute2], [minute2, 15, 15 * durationMinute2], [minute2, 30, 30 * durationMinute2], [hour2, 1, durationHour2], [hour2, 3, 3 * durationHour2], [hour2, 6, 6 * durationHour2], [hour2, 12, 12 * durationHour2], [day2, 1, durationDay2], [day2, 2, 2 * durationDay2], [week, 1, durationWeek2], [month2, 1, durationMonth], [month2, 3, 3 * durationMonth], [year2, 1, durationYear]];
  function tickFormat(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute2(date2) < date2 ? formatSecond : hour2(date2) < date2 ? formatMinute : day2(date2) < date2 ? formatHour : month2(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year2(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  function tickInterval(interval2, start2, stop, step) {
    if (interval2 == null) interval2 = 10;
    if (typeof interval2 === "number") {
      var target = Math.abs(stop - start2) / interval2, i = bisector_default(function(i2) {
        return i2[2];
      }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start2 / durationYear, stop / durationYear, interval2);
        interval2 = year2;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval2 = i[0];
      } else {
        step = Math.max(tickStep(start2, stop, interval2), 1);
        interval2 = millisecond2;
      }
    }
    return step == null ? interval2 : interval2.every(step);
  }
  scale.invert = function(y) {
    return new Date(invert(y));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(map3.call(_, number2)) : domain().map(date);
  };
  scale.ticks = function(interval2, step) {
    var d = domain(), t03 = d[0], t13 = d[d.length - 1], r = t13 < t03, t;
    if (r) t = t03, t03 = t13, t13 = t;
    t = tickInterval(interval2, t03, t13, step);
    t = t ? t.range(t03, t13 + 1) : [];
    return r ? t.reverse() : t;
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format2(specifier);
  };
  scale.nice = function(interval2, step) {
    var d = domain();
    return (interval2 = tickInterval(interval2, d[0], d[d.length - 1], step)) ? domain(nice_default(d, interval2)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(year2, month2, week, day2, hour2, minute2, second2, millisecond2, format2));
  };
  return scale;
}
function time_default() {
  return calendar(year_default, month_default, sunday, day_default, hour_default, minute_default, second_default, millisecond_default, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
}
var durationSecond2, durationMinute2, durationHour2, durationDay2, durationWeek2, durationMonth, durationYear;
var init_time = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/time.js"() {
    init_src2();
    init_d3_interpolate();
    init_src3();
    init_src4();
    init_array3();
    init_continuous();
    init_nice();
    durationSecond2 = 1e3;
    durationMinute2 = durationSecond2 * 60;
    durationHour2 = durationMinute2 * 60;
    durationDay2 = durationHour2 * 24;
    durationWeek2 = durationDay2 * 7;
    durationMonth = durationDay2 * 30;
    durationYear = durationDay2 * 365;
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/utcTime.js
function utcTime_default() {
  return calendar(utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default, second_default, millisecond_default, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
}
var init_utcTime = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/utcTime.js"() {
    init_time();
    init_src4();
    init_src3();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/colors.js
function colors_default(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
}
var init_colors = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/colors.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/category10.js
var category10_default;
var init_category10 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/category10.js"() {
    init_colors();
    category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/category20b.js
var category20b_default;
var init_category20b = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/category20b.js"() {
    init_colors();
    category20b_default = colors_default("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/category20c.js
var category20c_default;
var init_category20c = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/category20c.js"() {
    init_colors();
    category20c_default = colors_default("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/category20.js
var category20_default;
var init_category20 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/category20.js"() {
    init_colors();
    category20_default = colors_default("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/cubehelix.js
var cubehelix_default2;
var init_cubehelix3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/cubehelix.js"() {
    init_d3_color();
    init_d3_interpolate();
    cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/rainbow.js
function rainbow_default(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
}
var warm, cool, rainbow;
var init_rainbow = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/rainbow.js"() {
    init_d3_color();
    init_d3_interpolate();
    warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
    cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
    rainbow = cubehelix();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/viridis.js
function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var viridis_default, magma, inferno, plasma;
var init_viridis = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/viridis.js"() {
    init_colors();
    viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
    inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
    plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/src/sequential.js
function sequential(interpolator) {
  var x0 = 0, x1 = 1, clamp = false;
  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }
  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };
  return linearish(scale);
}
var init_sequential = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/src/sequential.js"() {
    init_linear();
  }
});

// node_modules/d3-timelines/node_modules/d3-scale/index.js
var d3_scale_exports = {};
__export(d3_scale_exports, {
  interpolateCool: () => cool,
  interpolateCubehelixDefault: () => cubehelix_default2,
  interpolateInferno: () => inferno,
  interpolateMagma: () => magma,
  interpolatePlasma: () => plasma,
  interpolateRainbow: () => rainbow_default,
  interpolateViridis: () => viridis_default,
  interpolateWarm: () => warm,
  scaleBand: () => band,
  scaleIdentity: () => identity2,
  scaleImplicit: () => implicit,
  scaleLinear: () => linear2,
  scaleLog: () => log,
  scaleOrdinal: () => ordinal,
  scalePoint: () => point,
  scalePow: () => pow,
  scaleQuantile: () => quantile,
  scaleQuantize: () => quantize,
  scaleSequential: () => sequential,
  scaleSqrt: () => sqrt,
  scaleThreshold: () => threshold,
  scaleTime: () => time_default,
  scaleUtc: () => utcTime_default,
  schemeCategory10: () => category10_default,
  schemeCategory20: () => category20_default,
  schemeCategory20b: () => category20b_default,
  schemeCategory20c: () => category20c_default
});
var init_d3_scale = __esm({
  "node_modules/d3-timelines/node_modules/d3-scale/index.js"() {
    init_band();
    init_identity4();
    init_linear();
    init_log();
    init_ordinal();
    init_pow();
    init_quantile2();
    init_quantize2();
    init_threshold();
    init_time();
    init_utcTime();
    init_category10();
    init_category20b();
    init_category20c();
    init_category20();
    init_cubehelix3();
    init_rainbow();
    init_viridis();
    init_sequential();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/namespaces.js
var xhtml, namespaces_default;
var init_namespaces = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/namespaces.js"() {
    xhtml = "http://www.w3.org/1999/xhtml";
    namespaces_default = {
      svg: "http://www.w3.org/2000/svg",
      xhtml,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix2 = name += "", i = prefix2.indexOf(":");
  if (i >= 0 && (prefix2 = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix2) ? {
    space: namespaces_default[prefix2],
    local: name
  } : name;
}
var init_namespace = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/namespace.js"() {
    init_namespaces();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
var init_creator = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/creator.js"() {
    init_namespace();
    init_namespaces();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}
var init_selector = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selector.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
var init_select = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/select.js"() {
    init_selection();
    init_selector();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}
var init_selectorAll = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selectorAll.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/selectAll.js
function selectAll_default(select) {
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}
var init_selectAll = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/selectAll.js"() {
    init_selection();
    init_selectorAll();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
var init_matcher = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/matcher.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
var init_filter = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/filter.js"() {
    init_selection();
    init_matcher();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}
var init_sparse = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/sparse.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}
var init_enter = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/enter.js"() {
    init_sparse();
    init_selection();
    EnterNode.prototype = {
      constructor: EnterNode,
      appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
      },
      insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
      },
      querySelector: function(selector) {
        return this._parent.querySelector(selector);
      },
      querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
      }
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/constant.js
function constant_default4(x) {
  return function() {
    return x;
  };
}
var init_constant4 = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/constant.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
      exit[i] = node;
    }
  }
}
function data_default(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) {
      data[++j] = d;
    });
    return data;
  }
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default4(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
var keyPrefix;
var init_data = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/data.js"() {
    init_selection();
    init_enter();
    init_constant4();
    keyPrefix = "$";
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}
var init_exit = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/exit.js"() {
    init_sparse();
    init_selection();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
var init_join = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/join.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/merge.js
function merge_default2(selection2) {
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}
var init_merge2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/merge.js"() {
    init_selection();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
var init_order = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/order.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
var init_sort = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/sort.js"() {
    init_selection();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
var init_call = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/call.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() {
    nodes[++i] = this;
  });
  return nodes;
}
var init_nodes = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/nodes.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}
var init_node = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/node.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/size.js
function size_default() {
  var size = 0;
  this.each(function() {
    ++size;
  });
  return size;
}
var init_size = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/size.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}
var init_empty = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/empty.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
var init_each = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/each.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}
var init_attr = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/attr.js"() {
    init_namespace();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
var init_window = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/window.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}
var init_style = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/style.js"() {
    init_window();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
var init_property = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/property.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
var init_classed = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/classed.js"() {
    ClassList.prototype = {
      add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
          this._names.push(name);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
          this._names.splice(i, 1);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      contains: function(name) {
        return this._names.indexOf(name) >= 0;
      }
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}
var init_text = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/text.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
var init_html = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/html.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/raise.js
function raise2() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise2);
}
var init_raise = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/raise.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}
var init_lower = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/lower.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
var init_append = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/append.js"() {
    init_creator();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}
var init_insert = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/insert.js"() {
    init_creator();
    init_selector();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}
var init_remove = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/remove.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
var init_clone = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/clone.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
var init_datum = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/datum.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/on.js
function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event2) {
    var related = event2.relatedTarget;
    if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
      listener.call(this, event2);
    }
  };
}
function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event;
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {
      type: t,
      name
    };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {
      type: typename.type,
      name: typename.name,
      value,
      listener,
      capture
    };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
}
function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}
var filterEvents, event, element;
var init_on = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/on.js"() {
    filterEvents = {};
    event = null;
    if (typeof document !== "undefined") {
      element = document.documentElement;
      if (!("onmouseenter" in element)) {
        filterEvents = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
      }
    }
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event2 = window2.CustomEvent;
  if (typeof event2 === "function") {
    event2 = new event2(type, params);
  } else {
    event2 = window2.document.createEvent("Event");
    if (params) event2.initEvent(type, params.bubbles, params.cancelable), event2.detail = params.detail;
    else event2.initEvent(type, false, false);
  }
  node.dispatchEvent(event2);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function dispatch_default(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
var init_dispatch = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/dispatch.js"() {
    init_window();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selection/index.js
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
var root, selection_default;
var init_selection = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selection/index.js"() {
    init_select();
    init_selectAll();
    init_filter();
    init_data();
    init_enter();
    init_exit();
    init_join();
    init_merge2();
    init_order();
    init_sort();
    init_call();
    init_nodes();
    init_node();
    init_size();
    init_empty();
    init_each();
    init_attr();
    init_style();
    init_property();
    init_classed();
    init_text();
    init_html();
    init_raise();
    init_lower();
    init_append();
    init_insert();
    init_remove();
    init_clone();
    init_datum();
    init_on();
    init_dispatch();
    root = [null];
    Selection.prototype = selection.prototype = {
      constructor: Selection,
      select: select_default,
      selectAll: selectAll_default,
      filter: filter_default,
      data: data_default,
      enter: enter_default,
      exit: exit_default,
      join: join_default,
      merge: merge_default2,
      order: order_default,
      sort: sort_default,
      call: call_default,
      nodes: nodes_default,
      node: node_default,
      size: size_default,
      empty: empty_default,
      each: each_default,
      attr: attr_default,
      style: style_default,
      property: property_default,
      classed: classed_default,
      text: text_default,
      html: html_default,
      raise: raise_default,
      lower: lower_default,
      append: append_default,
      insert: insert_default,
      remove: remove_default,
      clone: clone_default,
      datum: datum_default,
      on: on_default,
      dispatch: dispatch_default
    };
    selection_default = selection;
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}
var init_select2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/select.js"() {
    init_selection();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/create.js
function create_default(name) {
  return select_default2(creator_default(name).call(document.documentElement));
}
var init_create = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/create.js"() {
    init_creator();
    init_select2();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/local.js
function local() {
  return new Local();
}
function Local() {
  this._ = "@" + (++nextId).toString(36);
}
var nextId;
var init_local = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/local.js"() {
    nextId = 0;
    Local.prototype = local.prototype = {
      constructor: Local,
      get: function(node) {
        var id2 = this._;
        while (!(id2 in node)) if (!(node = node.parentNode)) return;
        return node[id2];
      },
      set: function(node, value) {
        return node[this._] = value;
      },
      remove: function(node) {
        return this._ in node && delete node[this._];
      },
      toString: function() {
        return this._;
      }
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default() {
  var current = event, source;
  while (source = current.sourceEvent) current = source;
  return current;
}
var init_sourceEvent = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/sourceEvent.js"() {
    init_on();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/point.js
function point_default(node, event2) {
  var svg = node.ownerSVGElement || node;
  if (svg.createSVGPoint) {
    var point2 = svg.createSVGPoint();
    point2.x = event2.clientX, point2.y = event2.clientY;
    point2 = point2.matrixTransform(node.getScreenCTM().inverse());
    return [point2.x, point2.y];
  }
  var rect = node.getBoundingClientRect();
  return [event2.clientX - rect.left - node.clientLeft, event2.clientY - rect.top - node.clientTop];
}
var init_point = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/point.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/mouse.js
function mouse_default(node) {
  var event2 = sourceEvent_default();
  if (event2.changedTouches) event2 = event2.changedTouches[0];
  return point_default(node, event2);
}
var init_mouse = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/mouse.js"() {
    init_sourceEvent();
    init_point();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/selectAll.js
function selectAll_default2(selector) {
  return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([selector == null ? [] : selector], root);
}
var init_selectAll2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/selectAll.js"() {
    init_selection();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/touch.js
function touch_default(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = sourceEvent_default().changedTouches;
  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point_default(node, touch);
    }
  }
  return null;
}
var init_touch = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/touch.js"() {
    init_sourceEvent();
    init_point();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/touches.js
function touches_default(node, touches) {
  if (touches == null) touches = sourceEvent_default().touches;
  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point_default(node, touches[i]);
  }
  return points;
}
var init_touches = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/touches.js"() {
    init_sourceEvent();
    init_point();
  }
});

// node_modules/d3-timelines/node_modules/d3-selection/src/index.js
var src_exports5 = {};
__export(src_exports5, {
  clientPoint: () => point_default,
  create: () => create_default,
  creator: () => creator_default,
  customEvent: () => customEvent,
  event: () => event,
  local: () => local,
  matcher: () => matcher_default,
  mouse: () => mouse_default,
  namespace: () => namespace_default,
  namespaces: () => namespaces_default,
  select: () => select_default2,
  selectAll: () => selectAll_default2,
  selection: () => selection_default,
  selector: () => selector_default,
  selectorAll: () => selectorAll_default,
  style: () => styleValue,
  touch: () => touch_default,
  touches: () => touches_default,
  window: () => window_default
});
var init_src5 = __esm({
  "node_modules/d3-timelines/node_modules/d3-selection/src/index.js"() {
    init_create();
    init_creator();
    init_local();
    init_matcher();
    init_mouse();
    init_namespace();
    init_namespaces();
    init_point();
    init_select2();
    init_selectAll2();
    init_selection();
    init_selector();
    init_selectorAll();
    init_style();
    init_touch();
    init_touches();
    init_window();
    init_on();
  }
});

// node_modules/d3-timelines/node_modules/d3-dispatch/src/dispatch.js
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames2(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {
      type: t,
      name
    };
  });
}
function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set2(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({
    name,
    value: callback
  });
  return type;
}
var noop, dispatch_default2;
var init_dispatch2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-dispatch/src/dispatch.js"() {
    noop = {
      value: function() {
      }
    };
    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _ = this._, T = parseTypenames2(typename + "", _), t, i = -1, n = T.length;
        if (arguments.length < 2) {
          while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
          return;
        }
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while (++i < n) {
          if (t = (typename = T[i]).type) _[t] = set2(_[t], typename.name, callback);
          else if (callback == null) for (t in _) _[t] = set2(_[t], typename.name, null);
        }
        return this;
      },
      copy: function() {
        var copy2 = {}, _ = this._;
        for (var t in _) copy2[t] = _[t].slice();
        return new Dispatch(copy2);
      },
      call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      },
      apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      }
    };
    dispatch_default2 = dispatch;
  }
});

// node_modules/d3-timelines/node_modules/d3-dispatch/index.js
var init_d3_dispatch = __esm({
  "node_modules/d3-timelines/node_modules/d3-dispatch/index.js"() {
    init_dispatch2();
  }
});

// node_modules/d3-timelines/node_modules/d3-drag/src/noevent.js
function noevent_default() {
  event.preventDefault();
  event.stopImmediatePropagation();
}
var init_noevent = __esm({
  "node_modules/d3-timelines/node_modules/d3-drag/src/noevent.js"() {
    init_src5();
  }
});

// node_modules/d3-timelines/node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, true);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, true);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, true);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
var init_nodrag = __esm({
  "node_modules/d3-timelines/node_modules/d3-drag/src/nodrag.js"() {
    init_src5();
    init_noevent();
  }
});

// node_modules/d3-timelines/node_modules/d3-drag/src/constant.js
var init_constant5 = __esm({
  "node_modules/d3-timelines/node_modules/d3-drag/src/constant.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-drag/src/event.js
function DragEvent(target, type, subject, id2, active, x, y, dx, dy, dispatch2) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id2;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch2;
}
var init_event = __esm({
  "node_modules/d3-timelines/node_modules/d3-drag/src/event.js"() {
    DragEvent.prototype.on = function() {
      var value = this._.on.apply(this._, arguments);
      return value === this._ ? this : value;
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-drag/src/drag.js
var init_drag = __esm({
  "node_modules/d3-timelines/node_modules/d3-drag/src/drag.js"() {
    init_d3_dispatch();
    init_src5();
    init_nodrag();
    init_noevent();
    init_constant5();
    init_event();
  }
});

// node_modules/d3-timelines/node_modules/d3-drag/index.js
var init_d3_drag = __esm({
  "node_modules/d3-timelines/node_modules/d3-drag/index.js"() {
    init_drag();
    init_nodrag();
  }
});

// node_modules/d3-timelines/node_modules/d3-timer/src/timer.js
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t03, t13 = taskHead, t22, time = Infinity;
  while (t13) {
    if (t13._call) {
      if (time > t13._time) time = t13._time;
      t03 = t13, t13 = t13._next;
    } else {
      t22 = t13._next, t13._next = null;
      t13 = t03 ? t03._next = t22 : taskHead = t22;
    }
  }
  taskTail = t03;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
var frame, timeout, interval, pokeDelay, taskHead, taskTail, clockLast, clockNow, clockSkew, clock, setFrame;
var init_timer = __esm({
  "node_modules/d3-timelines/node_modules/d3-timer/src/timer.js"() {
    frame = 0;
    timeout = 0;
    interval = 0;
    pokeDelay = 1e3;
    clockLast = 0;
    clockNow = 0;
    clockSkew = 0;
    clock = typeof performance === "object" && performance.now ? performance : Date;
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
      setTimeout(f, 17);
    };
    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail) taskTail._next = this;
          else taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var init_timeout = __esm({
  "node_modules/d3-timelines/node_modules/d3-timer/src/timeout.js"() {
    init_timer();
  }
});

// node_modules/d3-timelines/node_modules/d3-timer/src/interval.js
var init_interval2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-timer/src/interval.js"() {
    init_timer();
  }
});

// node_modules/d3-timelines/node_modules/d3-timer/index.js
var init_d3_timer = __esm({
  "node_modules/d3-timelines/node_modules/d3-timer/index.js"() {
    init_timer();
    init_timeout();
    init_interval2();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/schedule.js
function schedule_default(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set3(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(null, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}
var emptyOn, emptyTween, CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED;
var init_schedule = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/schedule.js"() {
    init_d3_dispatch();
    init_d3_timer();
    emptyOn = dispatch_default2("start", "end", "interrupt");
    emptyTween = [];
    CREATED = 0;
    SCHEDULED = 1;
    STARTING = 2;
    STARTED = 3;
    RUNNING = 4;
    ENDING = 5;
    ENDED = 6;
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}
var init_interrupt = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/interrupt.js"() {
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}
var init_interrupt2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/selection/interrupt.js"() {
    init_interrupt();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set3(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set3(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {
        name,
        value
      }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set3(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}
var init_tween = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/tween.js"() {
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default2 : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}
var init_interpolate = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/interpolate.js"() {
    init_d3_color();
    init_d3_interpolate();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var value00, interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var value00, interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var value00, value10, interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var value00, value10, interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value + ""));
}
var init_attr2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/attr.js"() {
    init_d3_interpolate();
    init_src5();
    init_tween();
    init_interpolate();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/attrTween.js
function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
var init_attrTween = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/attrTween.js"() {
    init_src5();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}
var init_delay = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/delay.js"() {
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set3(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set3(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}
var init_duration2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/duration.js"() {
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set3(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}
var init_ease = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/ease.js"() {
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
var init_filter2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/filter.js"() {
    init_src5();
    init_transition2();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/merge.js
function merge_default3(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
var init_merge3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/merge.js"() {
    init_transition2();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set3;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
var init_on2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/on.js"() {
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}
var init_remove2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/remove.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
var init_select3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/select.js"() {
    init_src5();
    init_transition2();
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule_default(child, name, id2, k, children, inherit2);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var init_selectAll3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/selectAll.js"() {
    init_src5();
    init_transition2();
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/selection.js
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}
var Selection2;
var init_selection2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/selection.js"() {
    init_src5();
    Selection2 = selection_default.prototype.constructor;
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/style.js
function styleRemove2(name, interpolate) {
  var value00, value10, interpolate0;
  return function() {
    var value0 = styleValue(this, name), value1 = (this.style.removeProperty(name), styleValue(this, name));
    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}
function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var value00, interpolate0;
  return function() {
    var value0 = styleValue(this, name);
    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var value00, value10, interpolate0;
  return function() {
    var value0 = styleValue(this, name), value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), styleValue(this, name));
    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleRemove2(name, i)).on("end.style." + name, styleRemoveEnd(name)) : this.styleTween(name, typeof value === "function" ? styleFunction2(name, i, tweenValue(this, "style." + name, value)) : styleConstant2(name, i, value + ""), priority);
}
var init_style2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/style.js"() {
    init_d3_interpolate();
    init_src5();
    init_tween();
    init_interpolate();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/styleTween.js
function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
var init_styleTween = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/styleTween.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}
var init_text2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/text.js"() {
    init_tween();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
var init_transition = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/transition.js"() {
    init_transition2();
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/transition/index.js
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var id, selection_prototype;
var init_transition2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/transition/index.js"() {
    init_src5();
    init_attr2();
    init_attrTween();
    init_delay();
    init_duration2();
    init_ease();
    init_filter2();
    init_merge3();
    init_on2();
    init_remove2();
    init_select3();
    init_selectAll3();
    init_selection2();
    init_style2();
    init_styleTween();
    init_text2();
    init_transition();
    init_tween();
    id = 0;
    selection_prototype = selection_default.prototype;
    Transition.prototype = transition.prototype = {
      constructor: Transition,
      select: select_default3,
      selectAll: selectAll_default3,
      filter: filter_default2,
      merge: merge_default3,
      selection: selection_default2,
      transition: transition_default,
      call: selection_prototype.call,
      nodes: selection_prototype.nodes,
      node: selection_prototype.node,
      size: selection_prototype.size,
      empty: selection_prototype.empty,
      each: selection_prototype.each,
      on: on_default2,
      attr: attr_default2,
      attrTween: attrTween_default,
      style: style_default2,
      styleTween: styleTween_default,
      text: text_default2,
      remove: remove_default2,
      tween: tween_default,
      delay: delay_default,
      duration: duration_default,
      ease: ease_default
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/linear.js
var init_linear2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/linear.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/quad.js
var init_quad = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/quad.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var init_cubic = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/cubic.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/poly.js
var exponent, polyIn, polyOut, polyInOut;
var init_poly = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/poly.js"() {
    exponent = 3;
    polyIn = function custom(e) {
      e = +e;
      function polyIn2(t) {
        return Math.pow(t, e);
      }
      polyIn2.exponent = custom;
      return polyIn2;
    }(exponent);
    polyOut = function custom2(e) {
      e = +e;
      function polyOut2(t) {
        return 1 - Math.pow(1 - t, e);
      }
      polyOut2.exponent = custom2;
      return polyOut2;
    }(exponent);
    polyInOut = function custom3(e) {
      e = +e;
      function polyInOut2(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
      }
      polyInOut2.exponent = custom3;
      return polyInOut2;
    }(exponent);
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/sin.js
var pi, halfPi;
var init_sin = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/sin.js"() {
    pi = Math.PI;
    halfPi = pi / 2;
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/exp.js
var init_exp = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/exp.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/circle.js
var init_circle = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/circle.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/bounce.js
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b0;
var init_bounce = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/bounce.js"() {
    b1 = 4 / 11;
    b2 = 6 / 11;
    b3 = 8 / 11;
    b4 = 3 / 4;
    b5 = 9 / 11;
    b6 = 10 / 11;
    b7 = 15 / 16;
    b8 = 21 / 22;
    b9 = 63 / 64;
    b0 = 1 / b1 / b1;
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/back.js
var overshoot, backIn, backOut, backInOut;
var init_back = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/back.js"() {
    overshoot = 1.70158;
    backIn = function custom4(s) {
      s = +s;
      function backIn2(t) {
        return t * t * ((s + 1) * t - s);
      }
      backIn2.overshoot = custom4;
      return backIn2;
    }(overshoot);
    backOut = function custom5(s) {
      s = +s;
      function backOut2(t) {
        return --t * t * ((s + 1) * t + s) + 1;
      }
      backOut2.overshoot = custom5;
      return backOut2;
    }(overshoot);
    backInOut = function custom6(s) {
      s = +s;
      function backInOut2(t) {
        return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
      }
      backInOut2.overshoot = custom6;
      return backInOut2;
    }(overshoot);
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/src/elastic.js
var tau, amplitude, period, elasticIn, elasticOut, elasticInOut;
var init_elastic = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/src/elastic.js"() {
    tau = 2 * Math.PI;
    amplitude = 1;
    period = 0.3;
    elasticIn = function custom7(a, p) {
      var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
      function elasticIn2(t) {
        return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
      }
      elasticIn2.amplitude = function(a2) {
        return custom7(a2, p * tau);
      };
      elasticIn2.period = function(p2) {
        return custom7(a, p2);
      };
      return elasticIn2;
    }(amplitude, period);
    elasticOut = function custom8(a, p) {
      var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
      function elasticOut2(t) {
        return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
      }
      elasticOut2.amplitude = function(a2) {
        return custom8(a2, p * tau);
      };
      elasticOut2.period = function(p2) {
        return custom8(a, p2);
      };
      return elasticOut2;
    }(amplitude, period);
    elasticInOut = function custom9(a, p) {
      var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
      function elasticInOut2(t) {
        return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
      }
      elasticInOut2.amplitude = function(a2) {
        return custom9(a2, p * tau);
      };
      elasticInOut2.period = function(p2) {
        return custom9(a, p2);
      };
      return elasticInOut2;
    }(amplitude, period);
  }
});

// node_modules/d3-timelines/node_modules/d3-ease/index.js
var init_d3_ease = __esm({
  "node_modules/d3-timelines/node_modules/d3-ease/index.js"() {
    init_linear2();
    init_quad();
    init_cubic();
    init_poly();
    init_sin();
    init_exp();
    init_circle();
    init_bounce();
    init_back();
    init_elastic();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/selection/transition.js
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = now(), defaultTiming;
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
var defaultTiming;
var init_transition3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/selection/transition.js"() {
    init_transition2();
    init_schedule();
    init_d3_ease();
    init_d3_timer();
    defaultTiming = {
      time: null,
      // Set on use.
      delay: 0,
      duration: 250,
      ease: cubicInOut
    };
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/selection/index.js
var init_selection3 = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/selection/index.js"() {
    init_src5();
    init_interrupt2();
    init_transition3();
    selection_default.prototype.interrupt = interrupt_default2;
    selection_default.prototype.transition = transition_default2;
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/src/active.js
var init_active = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/src/active.js"() {
    init_transition2();
    init_schedule();
  }
});

// node_modules/d3-timelines/node_modules/d3-transition/index.js
var init_d3_transition = __esm({
  "node_modules/d3-timelines/node_modules/d3-transition/index.js"() {
    init_selection3();
    init_transition2();
    init_active();
    init_interrupt();
  }
});

// node_modules/d3-timelines/node_modules/d3-zoom/src/constant.js
function constant_default6(x) {
  return function() {
    return x;
  };
}
var init_constant6 = __esm({
  "node_modules/d3-timelines/node_modules/d3-zoom/src/constant.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-zoom/src/event.js
function ZoomEvent(target, type, transform2) {
  this.target = target;
  this.type = type;
  this.transform = transform2;
}
var init_event2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-zoom/src/event.js"() {
  }
});

// node_modules/d3-timelines/node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity3;
  return node.__zoom;
}
var identity3;
var init_transform2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-zoom/src/transform.js"() {
    Transform.prototype = {
      constructor: Transform,
      scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
      },
      translate: function(x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
      },
      apply: function(point2) {
        return [point2[0] * this.k + this.x, point2[1] * this.k + this.y];
      },
      applyX: function(x) {
        return x * this.k + this.x;
      },
      applyY: function(y) {
        return y * this.k + this.y;
      },
      invert: function(location) {
        return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
      },
      invertX: function(x) {
        return (x - this.x) / this.k;
      },
      invertY: function(y) {
        return (y - this.y) / this.k;
      },
      rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
      },
      rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
      },
      toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      }
    };
    identity3 = new Transform(1, 0, 0);
    transform.prototype = Transform.prototype;
  }
});

// node_modules/d3-timelines/node_modules/d3-zoom/src/noevent.js
function nopropagation2() {
  event.stopImmediatePropagation();
}
function noevent_default2() {
  event.preventDefault();
  event.stopImmediatePropagation();
}
var init_noevent2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-zoom/src/noevent.js"() {
    init_src5();
  }
});

// node_modules/d3-timelines/node_modules/d3-zoom/src/zoom.js
function defaultFilter() {
  return !event.ctrlKey && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity3;
}
function defaultWheelDelta() {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3);
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function zoom_default2() {
  var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default2("start", "zoom", "end"), touchstarting, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point2) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point2);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p);
  };
  zoom.scaleTo = function(selection2, k, p) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t03 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t03.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t03, k1), p0, p1), e, translateExtent);
    }, p);
  };
  zoom.translateBy = function(selection2, x, y) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
    });
  };
  zoom.translateTo = function(selection2, x, y, p) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity3.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
    }, p);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x = p0[0] - p1[0] * transform2.k, y = p0[1] - p1[1] * transform2.k;
    return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point2) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args), e = extent.apply(that, args), p = point2 == null ? centroid(e) : typeof point2 === "function" ? point2.apply(that, args) : point2, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };
  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = mouse_default(this);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default2();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments, true), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = mouse_default(this), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2();
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved() {
      noevent_default2();
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse_default(g.that), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event.view, g.moved);
      noevent_default2();
      g.end();
    }
  }
  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t03 = this.__zoom, p0 = mouse_default(this), p1 = t03.invert(p0), k1 = t03.k * (event.shiftKey ? 0.5 : 2), t13 = constrain(translate(scale(t03, k1), p0, p1), extent.apply(this, arguments), translateExtent);
    noevent_default2();
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t13, p0);
    else select_default2(this).call(zoom.transform, t13);
  }
  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, arguments, event.changedTouches.length === n), started, i, t, p;
    nopropagation2();
    for (i = 0; i < n; ++i) {
      t = touches[i], p = touch_default(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved() {
    if (!this.__zooming) return;
    var g = gesture(this, arguments), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default2();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    g.taps = 0;
    for (i = 0; i < n; ++i) {
      t = touches[i], p = touch_default(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended() {
    if (!this.__zooming) return;
    var g = gesture(this, arguments), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation2();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        var p = select_default2(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default6(+_), zoom) : wheelDelta;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant_default6(!!_), zoom) : filter;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default6(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default6([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  return zoom;
}
var init_zoom2 = __esm({
  "node_modules/d3-timelines/node_modules/d3-zoom/src/zoom.js"() {
    init_d3_dispatch();
    init_d3_drag();
    init_d3_interpolate();
    init_src5();
    init_d3_transition();
    init_constant6();
    init_event2();
    init_transform2();
    init_noevent2();
  }
});

// node_modules/d3-timelines/node_modules/d3-zoom/src/index.js
var src_exports6 = {};
__export(src_exports6, {
  zoom: () => zoom_default2,
  zoomIdentity: () => identity3,
  zoomTransform: () => transform
});
var init_src6 = __esm({
  "node_modules/d3-timelines/node_modules/d3-zoom/src/index.js"() {
    init_zoom2();
    init_transform2();
  }
});

// node_modules/d3-timelines/build/d3-timelines.js
var require_d3_timelines = __commonJS({
  "node_modules/d3-timelines/build/d3-timelines.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, (init_src(), __toCommonJS(src_exports)), (init_src2(), __toCommonJS(src_exports2)), (init_src4(), __toCommonJS(src_exports4)), (init_src3(), __toCommonJS(src_exports3)), (init_d3_scale(), __toCommonJS(d3_scale_exports)), (init_src5(), __toCommonJS(src_exports5)), (init_src6(), __toCommonJS(src_exports6))) : typeof define === "function" && define.amd ? define(["exports", "d3-axis", "d3-array", "d3-time-format", "d3-time", "d3-scale", "d3-selection", "d3-zoom"], factory) : factory(global.d3 = global.d3 || {}, global.d3, global.d3, global.d3, global.d3, global.d3, global.d3, global.d3);
    })(exports, function(exports2, d3Axis, d3Array, d3TimeFormat, d3Time, d3Scale, d3Selection, d3Zoom) {
      "use strict";
      var timelines = function() {
        var DISPLAY_TYPES = ["circle", "rect"];
        var hover = function() {
        }, mouseover = function() {
        }, mouseout = function() {
        }, click = function() {
        }, scroll = function() {
        }, labelFunction = function(label) {
          return label;
        }, labelFloat = 0, navigateLeft = function() {
        }, navigateRight = function() {
        }, orient = "bottom", width = null, height = null, rowSeparatorsColor = null, backgroundColor = null, tickFormat = {
          format: d3TimeFormat.timeFormat("%I %p"),
          tickTime: d3Time.timeHour,
          tickInterval: 1,
          tickSize: 6,
          tickValues: null
        }, allowZoom = true, axisBgColor = "white", chartData = {}, colorCycle = d3Scale.scaleOrdinal(d3Scale.schemeCategory20), colorPropertyName = null, display = "rect", beginning = 0, labelMargin = 0, ending = 0, margin = {
          left: 30,
          right: 30,
          top: 30,
          bottom: 30
        }, maxZoom = 5, stacked = false, rotateTicks = false, timeIsRelative = false, timeIsLinear = false, fullLengthBackgrounds = false, itemHeight = 20, itemMargin = 5, navMargin = 60, showTimeAxis = true, showAxisTop = false, showTodayLine = false, timeAxisTick = false, timeAxisTickFormat = {
          stroke: "stroke-dasharray",
          spacing: "4 10"
        }, showTodayFormat = {
          marginTop: 25,
          marginBottom: 0,
          width: 1,
          color: colorCycle
        }, showBorderLine = false, showBorderFormat = {
          marginTop: 25,
          marginBottom: 0,
          width: 1,
          color: colorCycle
        }, showBorderLineClass = "timeline-border-line", showAxisHeaderBackground = false, showAxisNav = false, showAxisCalendarYear = false, xAxisClass = "timeline-xAxis";
        var appendTimeAxis = function(g, xAxis, yPosition) {
          if (showAxisHeaderBackground) {
            appendAxisHeaderBackground(g, 0, 0);
          }
          if (showAxisNav) {
            appendTimeAxisNav(g);
          }
          var axis2 = g.append("g").attr("class", xAxisClass).attr("transform", "translate(0," + yPosition + ")").call(xAxis);
          return axis2;
        };
        var appendTimeAxisCalendarYear = function(nav) {
          var calendarLabel = beginning.getFullYear();
          if (beginning.getFullYear() != ending.getFullYear()) {
            calendarLabel = beginning.getFullYear() + "-" + ending.getFullYear();
          }
          nav.append("text").attr("transform", "translate(20, 0)").attr("x", 0).attr("y", 14).attr("class", "calendarYear").text(calendarLabel);
        };
        var appendTimeAxisNav = function(g) {
          var timelineBlocks = 6;
          var leftNavMargin = margin.left - navMargin;
          var incrementValue = (width - margin.left) / timelineBlocks;
          var rightNavMargin = width - margin.right - incrementValue + navMargin;
          var nav = g.append("g").attr("class", "axis").attr("transform", "translate(0, 20)");
          if (showAxisCalendarYear) {
            appendTimeAxisCalendarYear(nav);
          }
          nav.append("text").attr("transform", "translate(" + leftNavMargin + ", 0)").attr("x", 0).attr("y", 14).attr("class", "chevron").text("<").on("click", function() {
            return navigateLeft(beginning, chartData);
          });
          nav.append("text").attr("transform", "translate(" + rightNavMargin + ", 0)").attr("x", 0).attr("y", 14).attr("class", "chevron").text(">").on("click", function() {
            return navigateRight(ending, chartData);
          });
        };
        var appendAxisHeaderBackground = function(g, xAxis, yAxis) {
          g.insert("rect").attr("class", "row-green-bar").attr("x", xAxis).attr("width", width).attr("y", yAxis).attr("height", itemHeight).attr("fill", axisBgColor);
        };
        var appendTimeAxisTick = function(g, xAxis, maxStack) {
          g.append("g").attr("class", "axis").attr("transform", "translate(0," + (margin.top + (itemHeight + itemMargin) * maxStack) + ")").attr(timeAxisTickFormat.stroke, timeAxisTickFormat.spacing).call(xAxis.tickFormat("").tickSize(-(margin.top + (itemHeight + itemMargin) * (maxStack - 1) + 3), 0, 0));
        };
        var appendBackgroundBar = function(yAxisMapping, index, g, data, datum) {
          var greenbarYAxis = (itemHeight + itemMargin) * yAxisMapping[index] + margin.top;
          g.selectAll("svg").data(data).enter().insert("rect", ":first-child").attr("class", "row-green-bar").attr("x", fullLengthBackgrounds ? 0 : margin.left).attr("width", fullLengthBackgrounds ? width : width - margin.right - margin.left).attr("y", greenbarYAxis).attr("height", itemHeight).attr("fill", backgroundColor instanceof Function ? backgroundColor(datum, index) : backgroundColor);
        };
        var appendLabel = function(gParent, yAxisMapping, index, hasLabel, datum) {
          var fullItemHeight = itemHeight + itemMargin;
          var rowsDown = margin.top + fullItemHeight / 2 + fullItemHeight * (yAxisMapping[index] || 1);
          gParent.append("text").attr("class", "timeline-label").attr("transform", "translate(" + labelMargin + "," + rowsDown + ")").text(hasLabel ? labelFunction(datum.label) : datum.id).on("click", function(d, i) {
            console.log("label click!");
            var point2 = d3Selection.mouse(this);
            gParent.append("rect").attr("id", "clickpoint").attr("x", point2[0]).attr("width", 10).attr("height", itemHeight);
            click(d, index, datum, point2, xScale.invert(point2[0]));
          });
        };
        function timelines2(gParent) {
          var gParentSize = gParent.node().getBoundingClientRect();
          var gParentItem = d3Selection.select(gParent.node());
          var g = gParent.append("g").attr("class", "container");
          var yAxisMapping = {}, maxStack = 1, minTime = 0, maxTime = 0;
          setWidth();
          if (timeIsRelative) {
            g.each(function(d, i) {
              var originTime = 0;
              d.forEach(function(datum, index) {
                datum.times.forEach(function(time, j) {
                  if (index === 0 && j === 0) {
                    originTime = time.starting_time;
                    time.starting_time = 0;
                    time.ending_time = time.ending_time - originTime;
                  } else {
                    time.starting_time = time.starting_time - originTime;
                    time.ending_time = time.ending_time - originTime;
                  }
                });
              });
            });
          }
          if (stacked || ending === 0 || beginning === 0) {
            g.each(function(d, i) {
              d.forEach(function(datum, index) {
                if (stacked && Object.keys(yAxisMapping).indexOf(index) == -1) {
                  yAxisMapping[index] = maxStack;
                  maxStack++;
                }
                datum.times.forEach(function(time, i2) {
                  if (beginning === 0) {
                    if (time.starting_time < minTime || minTime === 0 && timeIsRelative === false) minTime = time.starting_time;
                  }
                  if (ending === 0) {
                    if (time.ending_time > maxTime) maxTime = time.ending_time;
                  }
                });
              });
            });
            if (ending === 0) {
              ending = maxTime;
            }
            if (beginning === 0) {
              beginning = minTime;
            }
          }
          var scaleFactor = 1 / (ending - beginning) * (width - margin.left - margin.right);
          function formatDays(d) {
            var days2 = Math.floor(d / 86400), hours2 = Math.floor((d - days2 * 86400) / 3600), minutes2 = Math.floor((d - days2 * 86400 - hours2 * 3600) / 60), seconds2 = d - days2 * 86400 - hours2 * 3600 - minutes2 * 60;
            var output = "";
            if (seconds2) {
              output = seconds2 + "s";
            }
            if (minutes2) {
              output = minutes2 + "m " + output;
            }
            if (hours2) {
              output = hours2 + "h " + output;
            }
            if (days2) {
              output = days2 + "d " + output;
            }
            return output;
          }
          ;
          var xScale2;
          var xAxis;
          if (orient == "bottom") {
            xAxis = d3Axis.axisBottom();
          } else if (orient == "top") {
            xAxis = d3Axis.axisTop();
          }
          if (timeIsLinear) {
            xScale2 = d3Scale.scaleLinear().domain([beginning, ending]).range([margin.left, width - margin.right]);
            xAxis.scale(xScale2).tickFormat(formatDays).tickValues(d3Array.range(0, ending, 86400));
          } else {
            xScale2 = d3Scale.scaleTime().domain([beginning, ending]).range([margin.left, width - margin.right]);
            xAxis.scale(xScale2).tickFormat(tickFormat.format).tickSize(tickFormat.tickSize);
          }
          if (tickFormat.tickValues !== null) {
            xAxis.tickValues(tickFormat.tickValues);
          } else {
            xAxis.tickArguments(tickFormat.numTicks || [tickFormat.tickTime, tickFormat.tickInterval]);
          }
          var view = g.append("g").attr("class", "view");
          g.each(function(d, i) {
            chartData = d;
            d.forEach(function(datum, index) {
              var data = datum.times;
              data.forEach(function(d2) {
                d2.name = datum.name;
              });
              var hasLabel = typeof datum.label != "undefined";
              if (typeof datum.id != "undefined") {
                console.warn("d3Timeline Warning: Ids per dataset is deprecated in favor of a 'class' key. Ids are now per data element.");
              }
              if (backgroundColor) {
                appendBackgroundBar(yAxisMapping, index, g, data, datum);
              }
              view.selectAll("svg").data(data).enter().append(function(d2, i2) {
                return document.createElementNS(d3Selection.namespaces.svg, "display" in d2 ? d2.display : display);
              }).attr("x", getXPos).attr("y", getStackPosition).attr("width", function(d2, i2) {
                return (d2.ending_time - d2.starting_time) * scaleFactor;
              }).attr("cy", function(d2, i2) {
                return getStackPosition(d2, i2) + itemHeight / 2;
              }).attr("cx", getXPos).attr("r", itemHeight / 2).attr("height", itemHeight).style("fill", function(d2, i2) {
                var dColorPropName;
                if (d2.color) return d2.color;
                if (colorPropertyName) {
                  dColorPropName = d2[colorPropertyName];
                  if (dColorPropName) {
                    return colorCycle(dColorPropName);
                  } else {
                    return colorCycle(datum[colorPropertyName]);
                  }
                }
                return colorCycle(index);
              }).on("mousemove", function(d2, i2) {
                hover(d2, index, datum, i2);
              }).on("mouseover", function(d2, i2) {
                mouseover(d2, i2, datum, i2);
              }).on("mouseout", function(d2, i2) {
                mouseout(d2, i2, datum, i2);
              }).on("click", function(d2, i2) {
                var point2 = d3Selection.mouse(this);
                var selectedRect = d3Selection.select(this).node();
                var selectorLabel = "text#" + selectedRect.id + ".textnumbers";
                var selectedLabel = d3Selection.select(selectorLabel).node();
                click(d2, index, datum, selectedLabel, selectedRect, xScale2.invert(point2[0]));
              }).attr("class", function(d2, i2) {
                return datum.class ? "timelineSeries_" + datum.class : "timelineSeries_" + index;
              }).attr("id", function(d2, i2) {
                if (datum.id && !d2.id) {
                  return "timelineItem_" + datum.id;
                }
                return d2.id ? d2.id : "timelineItem_" + index + "_" + i2;
              });
              view.selectAll("svg").data(data).enter().append("text").attr("class", "textlabels").attr("id", function(d2) {
                return d2.id;
              }).attr("x", function(d2, i2) {
                return getXTextPos(d2, i2, d2.label, ".textlabels");
              }).attr("y", getStackTextPosition() - labelFloat).text(function(d2) {
                return d2.label;
              }).on("click", function(d2, i2) {
                var point2 = d3Selection.mouse(this);
                var id2 = this.id;
                var labelSelector = "text#" + id2 + ".textnumbers";
                var selectedLabel = d3Selection.select(labelSelector).node();
                var selector = "rect#" + id2;
                var selectedRect = d3Selection.select(selector).node();
                click(d2, index, datum, selectedLabel, selectedRect, xScale2.invert(point2[0]));
              });
              view.selectAll("svg").data(data).enter().filter(function(d2) {
                return d2.labelNumber !== void 0;
              }).append("text").attr("class", "textnumbers").attr("id", function(d2) {
                return d2.id;
              }).attr("x", function(d2, i2) {
                return getXTextPos(d2, i2, d2.labelNumber, ".textnumbers");
              }).attr("y", getStackTextPosition).text(function(d2) {
                return d2.labelNumber;
              }).on("click", function(d2, i2) {
                var point2 = d3Selection.mouse(this);
                var id2 = this.id;
                var selectedLabel = d3Selection.select(this).node();
                var selector = "rect#" + id2;
                var selectedRect = d3Selection.select(selector).node();
                click(d2, index, datum, selectedLabel, selectedRect, xScale2.invert(point2[0]));
              });
              if (rowSeparatorsColor) {
                var lineYAxis = itemHeight + itemMargin / 2 + margin.top + (itemHeight + itemMargin) * yAxisMapping[index];
                gParent.append("svg:line").attr("class", "row-separator").attr("x1", 0 + margin.left).attr("x2", width - margin.right).attr("y1", lineYAxis).attr("y2", lineYAxis).attr("stroke-width", 1).attr("stroke", rowSeparatorsColor);
              }
              if (hasLabel) {
                appendLabel(gParent, yAxisMapping, index, hasLabel, datum);
              }
              if (typeof datum.icon !== "undefined") {
                gParent.append("image").attr("class", "timeline-label").attr("transform", "translate(0," + (margin.top + (itemHeight + itemMargin) * yAxisMapping[index]) + ")").attr("xlink:href", datum.icon).attr("width", margin.left).attr("height", itemHeight);
              }
              function getStackPosition(d2, i2) {
                if (stacked) {
                  return margin.top + (itemHeight + itemMargin) * yAxisMapping[index];
                }
                return margin.top;
              }
              function getStackTextPosition(d2, i2) {
                if (stacked) {
                  return margin.top + (itemHeight + itemMargin) * yAxisMapping[index] + itemHeight * 0.75;
                }
                return margin.top + itemHeight * 0.75;
              }
            });
          });
          var belowLastItem = margin.top + (itemHeight + itemMargin) * maxStack;
          var aboveFirstItem = margin.top;
          var timeAxisYPosition = showAxisTop ? aboveFirstItem : belowLastItem;
          var gX;
          if (showTimeAxis) {
            gX = appendTimeAxis(g, xAxis, timeAxisYPosition);
          }
          if (timeAxisTick) {
            appendTimeAxisTick(g, xAxis, maxStack);
          }
          if (width > gParentSize.width) {
            var move = function() {
              g.select(".view").attr("transform", "translate(" + d3Selection.event.transform.x + ",0)scale(" + d3Selection.event.transform.k + " 1)");
              g.selectAll(".timeline-xAxis").attr("transform", function(d) {
                return "translate(" + d3Selection.event.transform.x + ", " + timeAxisYPosition + ")scale(" + d3Selection.event.transform.k + " 1)";
              });
              var new_xScale = d3Selection.event.transform.rescaleX(xScale2);
              g.selectAll(".timeline-xAxis").call(function(d) {
                xAxis.scale(new_xScale);
              });
              var xpos = -d3Selection.event.transform.x;
              scroll(xpos, xScale2);
            };
          }
          ;
          var zoom = d3Zoom.zoom().scaleExtent([0, maxZoom]).translateExtent([[0, 0], [width, 0]]).on("zoom", move);
          gParent.classed("scrollable", true).call(zoom);
          if (!allowZoom) {
            g.on("wheel", function() {
              d3Selection.event.preventDefault();
              d3Selection.event.stopImmediatePropagation();
            });
            g.on("dblclick.zoom", function() {
              d3Selection.event.preventDefault();
              d3Selection.event.stopImmediatePropagation();
            });
          }
          if (rotateTicks) {
            g.selectAll(".tick text").attr("transform", function(d) {
              return "rotate(" + rotateTicks + ")translate(" + (this.getBBox().width / 2 + 10) + "," + this.getBBox().height / 2 + ")";
            });
          }
          var gSize = g.node().getBoundingClientRect();
          setHeight();
          if (showBorderLine) {
            g.each(function(d, i) {
              d.forEach(function(datum) {
                var times = datum.times;
                times.forEach(function(time) {
                  appendLine(xScale2(time.starting_time), showBorderFormat, showBorderLineClass);
                  appendLine(xScale2(time.ending_time), showBorderFormat, showBorderLineClass);
                });
              });
            });
          }
          if (showTodayLine) {
            var todayLine = xScale2(/* @__PURE__ */ new Date());
            appendLine(todayLine, showTodayFormat);
          }
          function getXPos(d, i) {
            return margin.left + (d.starting_time - beginning) * scaleFactor;
          }
          function getTextWidth(text, font) {
            var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(text);
            return metrics.width;
          }
          function getXTextPos(d, i, text, style) {
            var width2 = 0;
            if (d.ending_time) {
              width2 = (d.ending_time - d.starting_time) / 2 * scaleFactor;
            }
            if (text && style) {
              var textl = getComputedStyle(document.querySelector(style));
              var fontInfo = textl.fontSize + " " + textl.fontFamily;
              var tl = getTextWidth(text, fontInfo);
              var textLength = tl / 2;
              var xPosition = margin.left + (d.starting_time - beginning) * scaleFactor + width2 - textLength;
              return xPosition;
            } else {
              return margin.left + (d.starting_time - beginning) * scaleFactor + 5;
            }
          }
          function setHeight() {
            if (!height && !gParentSize.height) {
              if (itemHeight) {
                height = gSize.height + gSize.top - gParentSize.top;
                d3Selection.select(gParent).node().attr("height", height);
              } else {
                throw "height of the timeline is not set";
              }
            } else {
              if (!height) {
                height = gParentSize.height;
              } else {
                gParentItem.node().attr("height", height);
              }
            }
          }
          function setWidth() {
            if (!width && !gParentSize.width) {
              try {
                width = gParentItem.node().attr("width");
                if (!width) {
                  throw "width of the timeline is not set. As of Firefox 27, timeline().with(x) needs to be explicitly set in order to render";
                }
              } catch (err) {
                console.log(err);
              }
            } else if (!width && gParentSize.width) {
              try {
                width = gParentSize.width;
              } catch (err) {
                console.log(err);
              }
            }
          }
          function appendLine(lineScale, lineFormat, lineClass) {
            lineClass = lineClass || "timeline-line";
            view.append("svg:line").attr("x1", lineScale).attr("y1", lineFormat.marginTop).attr("x2", lineScale).attr("y2", height - lineFormat.marginBottom).attr("class", lineClass).style("stroke", lineFormat.color).style("stroke-width", lineFormat.width);
          }
        }
        timelines2.margin = function(p) {
          if (!arguments.length) return margin;
          margin = p;
          return timelines2;
        };
        timelines2.orient = function(orientation) {
          if (!arguments.length) return orient;
          orient = orientation;
          return timelines2;
        };
        timelines2.itemHeight = function(h) {
          if (!arguments.length) return itemHeight;
          itemHeight = h;
          return timelines2;
        };
        timelines2.itemMargin = function(h) {
          if (!arguments.length) return itemMargin;
          itemMargin = h;
          return timelines2;
        };
        timelines2.navMargin = function(h) {
          if (!arguments.length) return navMargin;
          navMargin = h;
          return timelines2;
        };
        timelines2.height = function(h) {
          if (!arguments.length) return height;
          height = h;
          return timelines2;
        };
        timelines2.width = function(w) {
          if (!arguments.length) return width;
          width = w;
          return timelines2;
        };
        timelines2.display = function(displayType) {
          if (!arguments.length || DISPLAY_TYPES.indexOf(displayType) == -1) return display;
          display = displayType;
          return timelines2;
        };
        timelines2.labelFormat = function(f) {
          if (!arguments.length) return labelFunction;
          labelFunction = f;
          return timelines2;
        };
        timelines2.tickFormat = function(format2) {
          if (!arguments.length) return tickFormat;
          tickFormat = format2;
          return timelines2;
        };
        timelines2.allowZoom = function(zoomSetting) {
          if (!arguments.length) return allowZoom;
          allowZoom = zoomSetting;
          return timelines2;
        };
        timelines2.maxZoom = function(max) {
          if (!arguments.length) return maxZoom;
          maxZoom = max;
          return timelines2;
        };
        timelines2.hover = function(hoverFunc) {
          if (!arguments.length) return hover;
          hover = hoverFunc;
          return timelines2;
        };
        timelines2.mouseover = function(mouseoverFunc) {
          if (!arguments.length) return mouseover;
          mouseover = mouseoverFunc;
          return timelines2;
        };
        timelines2.mouseout = function(mouseoutFunc) {
          if (!arguments.length) return mouseout;
          mouseout = mouseoutFunc;
          return timelines2;
        };
        timelines2.click = function(clickFunc) {
          if (!arguments.length) return click;
          click = clickFunc;
          return timelines2;
        };
        timelines2.scroll = function(scrollFunc) {
          if (!arguments.length) return scroll;
          scroll = scrollFunc;
          return timelines2;
        };
        timelines2.colors = function(colorFormat) {
          if (!arguments.length) return colorCycle;
          colorCycle = colorFormat;
          return timelines2;
        };
        timelines2.beginning = function(b) {
          if (!arguments.length) return beginning;
          beginning = b;
          return timelines2;
        };
        timelines2.ending = function(e) {
          if (!arguments.length) return ending;
          ending = e;
          return timelines2;
        };
        timelines2.labelMargin = function(m) {
          if (!arguments.length) return labelMargin;
          labelMargin = m;
          return timelines2;
        };
        timelines2.labelFloat = function(f) {
          if (!arguments.length) return labelFloat;
          labelFloat = f;
          return timelines2;
        };
        timelines2.rotateTicks = function(degrees2) {
          if (!arguments.length) return rotateTicks;
          rotateTicks = degrees2;
          return timelines2;
        };
        timelines2.stack = function() {
          stacked = !stacked;
          return timelines2;
        };
        timelines2.relativeTime = function() {
          timeIsRelative = !timeIsRelative;
          return timelines2;
        };
        timelines2.linearTime = function() {
          timeIsLinear = !timeIsLinear;
          return timelines2;
        };
        timelines2.showBorderLine = function() {
          showBorderLine = !showBorderLine;
          return timelines2;
        };
        timelines2.showBorderFormat = function(borderFormat) {
          if (!arguments.length) return showBorderFormat;
          showBorderFormat = borderFormat;
          return timelines2;
        };
        timelines2.showBorderLineClass = function(borderClass) {
          if (!arguments.length) return showBorderLineClass;
          showBorderLineClass = borderClass;
          return timelines2;
        };
        timelines2.showToday = function() {
          showTodayLine = !showTodayLine;
          return timelines2;
        };
        timelines2.showTodayFormat = function(todayFormat) {
          if (!arguments.length) return showTodayFormat;
          showTodayFormat = todayFormat;
          return timelines2;
        };
        timelines2.colorProperty = function(colorProp) {
          if (!arguments.length) return colorPropertyName;
          colorPropertyName = colorProp;
          return timelines2;
        };
        timelines2.rowSeparators = function(color2) {
          if (!arguments.length) return rowSeparatorsColor;
          rowSeparatorsColor = color2;
          return timelines2;
        };
        timelines2.background = function(color2) {
          if (!arguments.length) return backgroundColor;
          backgroundColor = color2;
          return timelines2;
        };
        timelines2.showTimeAxis = function() {
          showTimeAxis = !showTimeAxis;
          return timelines2;
        };
        timelines2.showAxisTop = function() {
          showAxisTop = !showAxisTop;
          return timelines2;
        };
        timelines2.showAxisCalendarYear = function() {
          showAxisCalendarYear = !showAxisCalendarYear;
          return timelines2;
        };
        timelines2.showTimeAxisTick = function() {
          timeAxisTick = !timeAxisTick;
          return timelines2;
        };
        timelines2.fullLengthBackgrounds = function() {
          fullLengthBackgrounds = !fullLengthBackgrounds;
          return timelines2;
        };
        timelines2.showTimeAxisTickFormat = function(format2) {
          if (!arguments.length) return timeAxisTickFormat;
          timeAxisTickFormat = format2;
          return timelines2;
        };
        timelines2.showAxisHeaderBackground = function(bgColor) {
          showAxisHeaderBackground = !showAxisHeaderBackground;
          if (bgColor) {
            axisBgColor = bgColor;
          }
          return timelines2;
        };
        timelines2.xAxisClass = function(axisClass) {
          if (!arguments.length) return xAxisClass;
          xAxisClass = axisClass;
          return timelines2;
        };
        timelines2.navigate = function(navigateBackwards, navigateForwards) {
          if (!arguments.length) return [navigateLeft, navigateRight];
          navigateLeft = navigateBackwards;
          navigateRight = navigateForwards;
          showAxisNav = !showAxisNav;
          return timelines2;
        };
        timelines2.version = function() {
          return "1.0.0";
        };
        return timelines2;
      };
      exports2.timelines = timelines;
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
    });
  }
});
export default require_d3_timelines();
//# sourceMappingURL=d3-timelines.js.map
