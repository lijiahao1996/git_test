<template>
  <div class="home-page-content">
    <!-- 背景 -->
    <div class="bg-box">
      <img src="~assets/images/home/bg2.svg" style="top: 1035px; left: 0">
      <img src="~assets/images/home/bg3.png" style="bottom: 548px; left: 0; right: 0; margin: auto">

      <div class="safe-width-center">
        <img src="~assets/images/home/bg1.svg" style="top: 350px; right: 20px">
        <img src="~assets/images/home/bg4.svg" style="bottom: 473px; left: -180px">
        <img src="~assets/images/home/bg5.svg" style="bottom: 187px; left: 160px">
        <img src="~assets/images/home/bg6.svg" style="bottom: 178px; right: -70px">
      </div>
    </div>

    <!-- 头部 -->
    <div class="header-box safe-width-center">
      <div class="slide-up">
        <div class="slogan hover-scale">
          <img style="width: 280px" src="~assets/images/logo.png">

          <span>—— 就是让你挖的比别人多</span>
        </div>
      </div>

      <div class="sub-slogan text-center slide-up">真正零抽水，运行稳定，实测收益至少高2%</div>

      <div class="slide-up">
        <div class="try-now hover-scale" @click="onTryNow">立即体验</div>
      </div>
    </div>

    <!-- 优势 -->
    <div class="advantage-box safe-width-center">

      <div class="advantage-item">
        <div class="slide-up ghost-prepare">
          <img class="hover-scale" src="~assets/images/home/advantage1.svg">
        </div>

        <div class="advantage-item__des">
          <p class="dest-title slide-up">一站式OS管理系统与矿池组合</p>

          <p class="des-item slide-up">VOS一站式显卡矿机管理系统，一个界面高效完成注册、挖矿、管理<br>等所有流程</p>
          <p class="des-item slide-up">币印拥有多年矿池研发经验，打造了多个世界第一矿池</p>
          <p class="des-item slide-up">强强联合，真正做到零抽水，让您挖矿更稳、收益更高</p>
        </div>
      </div>

      <div class="advantage-item">
        <div class="slide-up ghost-prepare">
          <img class="hover-scale" src="~assets/images/home/advantage2.svg">
        </div>

        <div class="advantage-item__des">
          <p class="dest-title slide-up">高稳定性</p>

          <p class="des-item slide-up">
            国内首家独立自研挖矿核心vMiner，精心打磨，适配广泛<br>
            显卡类型，超高稳定性，多个矿场多种显卡实测，连续30<br>
            天不掉线。
          </p>
        </div>
      </div>

      <div class="advantage-item">
        <div class="slide-up ghost-prepare">
          <img class="hover-scale" src="~assets/images/home/advantage3.svg">
        </div>

        <div class="advantage-item__des">
          <p class="dest-title slide-up">易操作性</p>

          <p class="des-item slide-up target">简单三步操作，即刻开始挖矿</p>
          <p class="des-item slide-up">批量安装、批量超频，运维效率提升50%</p>
          <p class="des-item slide-up">精准定位问题矿机、问题原因，自动化重启及管理矿机</p>
        </div>
      </div>

      <div class="advantage-item">
        <div class="slide-up ghost-prepare">
          <img class="hover-scale" src="~assets/images/home/advantage4.svg">
        </div>

        <div class="advantage-item__des">
          <p class="dest-title slide-up">全数据监控</p>

          <p class="des-item slide-up">
            显卡运行数据清晰展示，实时查看所管理矿场、矿机、异<br>
            常、功耗等汇总及详细数据。一个面板，全数据掌握。
          </p>
        </div>
      </div>
    </div>

    <!-- 客户反馈 -->
    <div class="custom-box safe-width-center">
      <p class="title text-center slide-up">选对的工具，挖更稳的矿，得更多的收益</p>

      <div class="custom-item slide-up" style="top: 265px; left: 60px;">
        <div class="hover-scale">
          <img src="~assets/images/home/custom1.png">
          <div class="content">
            <p class="name">东：</p>
            <p class="say">很稳定</p>
          </div>
        </div>
      </div>

      <div class="custom-item slide-up" style="top: 183px; left: 390px;">
        <div class="hover-scale">
          <img src="~assets/images/home/custom2.png">
          <div class="content">
            <p class="name">Kee：</p>
            <p class="say">卡类型比较杂，N卡混插，比较喜欢单卡超频的功能。</p>
          </div>
        </div>
      </div>

      <div class="custom-item slide-up" style="top: 445px; left: 160px;">
        <div class="hover-scale">
          <img src="~assets/images/home/custom3.png">
          <div class="content">
            <p class="name">平行时界：</p>
            <p class="say">在会议上听说的VOS，后来整了几台显卡机试了一下，稳定性很好。现在把所有机器都改成了VOS系统，算力从36G到了38G。</p>
          </div>
        </div>
      </div>

      <div class="custom-item slide-up" style="top: 340px; left: 720px;">
        <div class="hover-scale">
          <img src="~assets/images/home/custom4.png">
          <div class="content">
            <p class="name">郝：</p>
            <p class="say">VOS服务还不错，来我们矿场帮忙操作，批量安装好了系统，效率很高。现在机器跑了一周左右，算力有点提升，跑的还挺稳定。</p>
          </div>
        </div>
      </div>

      <div class="custom-item slide-up" style="top: 800px; left: 361px;">
        <div class="hover-scale">
          <img src="~assets/images/home/custom5.png">
          <div class="content">
            <p class="name">亮亮：</p>
            <p class="say">3070的卡，换成vos后明显算力高了一些，之前用的低了好几M。</p>
          </div>
        </div>
      </div>

      <div class="custom-item slide-up" style="top: 614px; left: 657px;">
        <div class="hover-scale">
          <img src="~assets/images/home/custom6.png">
          <div class="content">
            <p class="name">Change：</p>
            <p class="say">还不错</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 立即开挖 -->
    <div class="immediate-box safe-width-center slide-up">
      <img class="hover-scale" src="~assets/images/home/qr-code.png">

      <p class="immediate-handle hover-scale" @click="onTryNow">立即开挖</p>
    </div>

    <!-- 页脚 -->
    <div class="foot-box">
      © 2017-2021 Poolin.com. All rights reserved. 京ICP备14027650号-3
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.initDomOffsetTop()
    this.scrollHandle()
    document.addEventListener('scroll', this.scrollHandle)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollHandle)
  },
  methods: {
    // 初始化domTop
    initDomOffsetTop() {
      let domList = [...document.querySelectorAll('.slide-up')]

      domList.forEach((elem) => {
        let rect = elem.getBoundingClientRect()
        let win = elem.ownerDocument.defaultView
        let offsetTop = rect.top + win.pageYOffset

        elem.initialOffsetTop = offsetTop - 100
      })
    },
    // 滚动事件处理
    scrollHandle() {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      const screenHeight = document.documentElement.clientHeight
      const totalDis = scrollTop + screenHeight
      let domList = [...document.querySelectorAll('.slide-up')]

      domList.forEach((elem) => {
        let offsetTop = elem.initialOffsetTop

        // 如果scrollTop + 屏幕高度 >= 元素自身offsetTop  则元素出现在屏幕中
        let isVisible = totalDis >= offsetTop
        let classMethod = isVisible ? 'add' : 'remove'

        // 如果包含ghost动画
        if (elem.classList.toString().includes('ghost-prepare')) {
          setTimeout(() => {
            elem.classList[classMethod]('ghost-animate')
          }, isVisible ? 800 : 0)
        }

        setTimeout(() => {
          elem.classList[classMethod]('active')
        })

      })
    },
    onTryNow() {
      window.open('https://vip.vosbyte.com/login')
    }
  }
}
</script>

<style scoped lang="scss">
.home-page-content {
  position: relative;
  padding-top: 210px;
  color: #fff;

  img {
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
  }
}

.bg-box {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #080722;
  overflow: hidden;

  .safe-width-center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  img {
    position: absolute;
  }
}

.slogan {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  transition: all .6s ease-in-out;

  img {
    margin-right: 40px;
  }

  &:hover {
    position: relative;
    z-index: 9999;
    transform: translateZ(0) scale(1.035);
  }
}

.sub-slogan {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
}

.try-now {
  margin: 60px auto 0;
  width: 248px;
  height: 62px;
  line-height: 62px;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  background: linear-gradient(270deg, #505EFF 0%, #8027F0 100%);
  border-radius: 100px;
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;

  &:hover {
    position: relative;
    z-index: 9999;
    transform: translateZ(0) scale(1.05);
    background: linear-gradient(90deg, #505EFF 0%, #8027F0 100%);
  }
}

.advantage-box {
  margin-top: 160px;

  .advantage-item {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
  }

  .slide-up:hover {
    animation-play-state: paused;

    .hover-scale {
      position: relative;
      z-index: 9999;
      transform: translateZ(0) scale(1.04);
    }
  }

  .dest-title {
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 600;
  }

  .des-item {
    margin-bottom: 20px;
    padding-left: 54px;
    position: relative;
    line-height: 40px;
    font-size: 16px;

    &:before {
      content: '';
      position: absolute;
      top: 3px;
      left: 0;
      width: 34px;
      height: 34px;
      background: url("@/assets/images/home/advantage-des-tag.svg") no-repeat;
    }
  }
}

.custom-box {
  margin-top: 156px;
  min-height: 1150px;
  position: relative;

  .title {
    font-size: 48px;
    font-weight: 600;
  }

  .custom-item {
    position: absolute;
    z-index: 1;
    top: 600px;

    .hover-scale:hover {
      transform: translate3d(0, -10px, 0);
    }

    img {
      width: 88px;
      position: absolute;
      top: -50px;
      left: -60px;
    }

    .content {
      padding: 22px 30px 24px;
      position: relative;
      z-index: 0;
      min-width: 130px;
      max-width: 350px;
      line-height: 32px;
      background: #5E6174;
      border-radius: 12px;
    }

    .name {
      line-height: 36px;
      font-size: 20px;
      color: #a09fab;
    }

    .say {
      line-height: 32px;
      font-size: 16px;
      font-weight: 400;
    }
  }
}

.immediate-box {
  text-align: center;

  img {
    width: 158px;
  }

  .hover-scale:hover {
    position: relative;
    z-index: 9999;
    transform: translateZ(0) scale(1.06);
  }

  .immediate-handle {
    margin: 30px auto 0;
    width: 200px;
    line-height: 50px;
    font-size: 36px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateZ(0) scale(1.1);
    }
  }
}

.foot-box {
  padding: 197px 0 69px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #343046;
}

// 动画相关
.hover-scale {
  transition: all .3s ease-in-out;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}

.slide-up {
  opacity: 0;
  transition: all .6s ease-in-out;
  transform: translate3d(0, 100px, 0);

  &.active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.ghost-animate {
  animation: ghost 2s infinite;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}

@keyframes ghost {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    /* 2D位移 -15px 是向上走 */
    transform: translate3d(0, -15px, 0);
  }
}
</style>
