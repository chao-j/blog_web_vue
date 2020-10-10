<template>
  <div class="container">
    <canvas :width="width" :height="height" id="canvas"></canvas>
  </div>
</template>
<script>
export default {
  name: "GraphBG",
  data() {
    return {
      width: 0,
      height: 0,
      firstRender: true,
      scrollTop: 0
    };
  },
  props: {
    ratio: {
      type: Number,
      default: 0.3
    }
  },
  computed: {},
  mounted() {
    let { clientWidth, clientHeight } = document.body;
    this.width = clientWidth;
    this.height = clientHeight;
    // setTimeout(() => {
    //   const canvas = document.getElementById("canvas");
    //   const ctx = canvas.getContext("2d");
    //   renderGraph(ctx, this.width, this.height, this.opacity, 1);
    // }, 1000);
  },
  updated() {
    if (this.firstRender) {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      renderGraph(ctx, this.width, this.height, this.opacity, 3);
      this.firstRender = false;
    }
  }
};

// 渲染具有n个几何图形的背景
function renderGraph(context, width, height, opacity, n) {
  for (let i = 0; i < n; i++) {
    context.fillStyle = randomColor();
    // context.globalAlpha = opacity;
    let num = Math.floor(Math.random() * 7);
    if (num < 4) {
      num = 4;
    }
    const points = randomPoints(width, height, num);
    context.beginPath();
    for (let j = 0; j < points.length; j++) {
      let { x, y } = points[j];
      if (j == 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }
    context.fill();
  }
}

// 随机范围内的n个点
function randomPoints(width, height, n) {
  let points = new Array();
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);
    points.push({ x, y });
  }
  return points;
}

// 随机颜色
function randomColor() {
  const source = "0123456789abcdef".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * source.length);
    color += source[index];
  }
  return color;
}
</script>

<style scoped>
.container {
  position: absolute;
  /* border: 1px solid red; */
}
#canvas {
  /* background-color: burlywood; */
  position: absolute;
  z-index: 100;
  opacity: 0.2;
}
</style>
