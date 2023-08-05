/*
 * @Author: 54xavier
 * @LastEditors: 刘鑫 admin@54xavier.cn
 * @Date: 2023-02-28 14:00:03
 * @LastEditTime: 2023-08-05 15:13:28
 */
export const name = "DM码实现";
export const desc = "通过HTML元素实现DM码";
export const author = "54xavier";
export const link = "https://ccsimple.gitee.io/vue-plugin-hiprint/";
// url 或者 base64 或者 require('../../../assets/logo.png')
export const preview =
  "https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/template5.png";
export const printData = {
  DMCode1: "123456",
  DMCode2: "234567",
};
export const json = {
  panels: [
    {
      index: 0,
      name: 1,
      height: 297,
      width: 210,
      paperHeader: 0,
      paperFooter: 842,
      printElements: [
        {
          options: {
            left: 0,
            top: 0,
            height: 1,
            width: 1,
            formatter:
              'function(t, e, printData) {\n  var script = document.createElement("script");\n  script.setAttribute("type", "text/javascript");\n  script.setAttribute(\n    "src",\n    "https://datalog.github.io/demo/datamatrix-svg/datamatrix.min.js"\n  );\n  return script;\n}',
          },
          printElementType: {
            // 此元素为 DATAMatrix 依赖，此方法仅浏览器打印(print)生效，print2可能会无法加载依赖，需要手动在electron-hiprint项目中引入依赖
            // 如果不使用 print2 可将此依赖全局添加到你自己项目中，只需设计、预览时能加载到此依赖即可
            title: "DATAMatrix依赖",
            type: "html",
          },
        },
        {
          options: {
            left: 0,
            top: 0,
            height: 1,
            width: 1,
            formatter:
              'function(t, e, printData) {\n  var script = document.createElement("script");\n  script.setAttribute("type", "text/javascript");\n  script.setAttribute(\n    "src",\n    "https://cdnjs.cloudflare.com/ajax/libs/bwip-js/4.0.0/bwip-js-min.js"\n  );\n  return script;\n}',
          },
          printElementType: {
            // 此元素为 bwip-js 依赖，此方法仅浏览器打印(print)生效，print2可能会无法加载依赖，需要手动在electron-hiprint项目中引入依赖
            // 如果不使用 print2 可将此依赖全局添加到你自己项目中，只需设计、预览时能加载到此依赖即可
            title: "bwip-js依赖",
            type: "html",
          },
        },
        {
          options: {
            left: 12,
            top: 12,
            height: 200,
            width: 200,
            formatter:
              'function(t, e, printData) {\n  if (window.DATAMatrix) {\n    var svgNode = DATAMatrix({msg: printData?.DMCode1 || "testData", dim: 267});\n    return svgNode;\n  } else {\n    return "<div style=\'width: 267px;height: 267px;border: 1px solid;\'>点击打印预览查看</div>";\n  }\n}',
            coordinateSync: false,
            widthHeightSync: false,
          },
          printElementType: { title: "html", type: "html" },
        },
        {
          options: {
            left: 230,
            top: 12,
            height: 200,
            width: 200,
            formatter:
              'function(t, e, printData) {\n  if (window.bwipjs) {\n    var canvas = document.createElement("canvas");\n    var _bwip = bwipjs.toCanvas(canvas, {\n      bcid: "datamatrix",\n      text: printData?.DMCode2 || "testData",\n      scale: 3,\n      width: 30,\n      height: 30,\n    });\n    return `<img src="${_bwip.toDataURL()}"/>`;\n  } else {\n    return "<div style=\'width: 267px;height: 267px;border: 1px solid;\'>点击打印预览查看</div>";\n  }\n}',
            right: 566.24609375,
            bottom: 221.24609375,
            vCenter: 466.24609375,
            hCenter: 121.24609375,
            coordinateSync: false,
            widthHeightSync: false,
          },
          printElementType: { title: "html", type: "html" },
        },
        {
          options: {
            left: 12,
            top: 212,
            height: 12,
            width: 200,
            title: "datamatrix-svg",
            textAlign: "center",
            right: 119.75,
            bottom: 294.24609375,
            vCenter: 82.75,
            hCenter: 288.24609375,
            coordinateSync: false,
            widthHeightSync: false,
            qrCodeLevel: 0,
          },
          printElementType: { title: "自定义文本", type: "text" },
        },
        {
          options: {
            left: 230,
            top: 212,
            height: 12,
            width: 200,
            title: "bwip-js",
            textAlign: "center",
            right: 494,
            bottom: 327.24609375,
            vCenter: 457,
            hCenter: 321.24609375,
            coordinateSync: false,
            widthHeightSync: false,
            qrCodeLevel: 0,
          },
          printElementType: { title: "自定义文本", type: "text" },
        },
      ],
      paperNumberLeft: 565.5,
      paperNumberTop: 819,
      paperNumberContinue: true,
      watermarkOptions: {},
    },
  ],
};
export default {
  preview: preview,
  name: name,
  desc: desc,
  author: author,
  link: link,
  printData: printData,
  json: json,
};
