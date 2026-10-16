import { createGlobalStyle } from "styled-components";

export const IconFont = createGlobalStyle`
    @font-face {
      font-family: "iconfont";
  src: url('./iconfont.eot?t=1612438077442'); /* IE9 */
  src: url('./iconfont.eot?t=1612438077442#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1612438077442') format('woff'),
  url('./iconfont.ttf?t=1612438077442') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1612438077442#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconziwojieshao:before {
  content: "\e6bc";
}

.iconfenxiang-1:before {
  content: "\e60b";
}

.iconxuesheng:before {
  content: "\e659";
}

.iconpinglun1:before {
  content: "\e8b4";
}

.iconhuabanfuben:before {
  content: "\eb7c";
}

.icongongzuo2:before {
  content: "\e608";
}

.iconcombinedshapecopy2:before {
  content: "\e652";
}

.iconwenzhang-copy:before {
  content: "\e643";
}

.iconzhanghuffffffpx:before {
  content: "\e603";
}

.icondengchu:before {
  content: "\e621";
}

.iconshoucang:before {
  content: "\e630";
}

.iconshezhi:before {
  content: "\e654";
}

.iconguanyu:before {
  content: "\e622";
}

.iconyuedu:before {
  content: "\e6b2";
}

.icontriangle-up:before {
  content: "\e67c";
}

.iconjiazai:before {
  content: "\e668";
}

.iconliaotian:before {
  content: "\e620";
}

.iconguanbi:before {
  content: "\e607";
}

.icondianzan:before {
  content: "\e60c";
}

.iconpinglun:before {
  content: "\e63a";
}

.iconfenxiang01:before {
  content: "\e6d1";
}

.iconspin:before {
  content: "\e851";
}

.iconicon-checkin:before {
  content: "\e615";
}

.iconsousuo:before {
  content: "\e633";
}

.iconxiala:before {
  content: "\e629";
}

.iconxiaoxi:before {
  content: "\e602";
}
`
