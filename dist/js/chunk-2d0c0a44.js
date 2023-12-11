(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0a44"],{"433b":function(v,_,e){"use strict";e.r(_);var o=function(){var v=this;v._self._c;return v._m(0)},t=[function(){var v=this,_=v._self._c;return _("div",[_("h1",[v._v("Node实例")]),_("p",[v._v("每个节点都会实例化一个"),_("code",[v._v("node")]),v._v("实例")]),_("h2",[v._v("属性")]),_("h3",[v._v("nodeData")]),_("p",[v._v("该节点对应的真实数据")]),_("h3",[v._v("uid")]),_("p",[v._v("该节点唯一的标识")]),_("h3",[v._v("isRoot")]),_("p",[v._v("是否是根节点")]),_("h3",[v._v("layerIndex")]),_("p",[v._v("节点层级")]),_("h3",[v._v("width")]),_("p",[v._v("节点的宽")]),_("h3",[v._v("height")]),_("p",[v._v("节点的高")]),_("h3",[v._v("left")]),_("p",[v._v("节点的"),_("code",[v._v("left")]),v._v("位置")]),_("h3",[v._v("top")]),_("p",[v._v("节点的"),_("code",[v._v("top")]),v._v("位置")]),_("h3",[v._v("parent")]),_("p",[v._v("节点的父节点")]),_("h3",[v._v("children")]),_("p",[v._v("节点的子节点列表")]),_("h3",[v._v("group")]),_("p",[v._v("节点是内容容器，"),_("code",[v._v("svg")]),v._v("对象")]),_("h3",[v._v("isDrag")]),_("blockquote",[_("p",[v._v("v0.1.5+")])]),_("p",[v._v("节点是否正在拖拽中")]),_("h2",[v._v("方法")]),_("h3",[v._v("getPureData(removeActiveState = true, removeId = false)")]),_("blockquote",[_("p",[v._v("v0.9.0+")])]),_("ul",[_("li",[_("p",[_("code",[v._v("removeActiveState")]),v._v("：是否移除节点的激活状态")])]),_("li",[_("p",[_("code",[v._v("removeId")]),v._v("：是否移除节点的uid字段")])])]),_("p",[v._v("序列化节点，获取该节点的纯数据，不包含对节点实例的引用。")]),_("h3",[v._v("setGeneralizationOpacity(val)")]),_("blockquote",[_("p",[v._v("v0.9.0+")])]),_("ul",[_("li",[_("code",[v._v("val")]),v._v("：Number, 0-1，透明度")])]),_("p",[v._v("设置概要节点及曲线的透明度。")]),_("h3",[v._v("formatGetGeneralization()")]),_("blockquote",[_("p",[v._v("v0.9.0+")])]),_("p",[v._v("获取节点概要数据。")]),_("h3",[v._v("getIndexInBrothers()")]),_("blockquote",[_("p",[v._v("v0.9.0+")])]),_("p",[v._v("获取该节点在兄弟节点列表中的索引。")]),_("h3",[v._v("getRectInSvg()")]),_("blockquote",[_("p",[v._v("v0.9.0+")])]),_("p",[v._v("获取节点的尺寸和位置信息，宽高是应用了缩放效果后的实际宽高，位置信息相对于画布。")]),_("h3",[v._v("getRect()")]),_("blockquote",[_("p",[v._v("v0.8.1+")])]),_("p",[v._v("获取节点的尺寸和位置信息，宽高是应用了缩放效果后的实际宽高，位置是相对于浏览器窗口左上角的位置。")]),_("h3",[v._v("ancestorHasGeneralization()")]),_("blockquote",[_("p",[v._v("v0.8.1+")])]),_("p",[v._v("检查是否存在有概要的祖先节点。")]),_("h3",[v._v("getNoteContentPosition()")]),_("blockquote",[_("p",[v._v("v0.8.1+")])]),_("p",[v._v("获取节点备注显示位置。当节点存在备注且正在显示状态时，如果拖动或缩放会导致备注浮层和节点脱离，那么可以通过该方法获取新位置更新备注浮层。")]),_("h3",[v._v("updateNodeByActive(active)")]),_("blockquote",[_("p",[v._v("v0.8.0+")])]),_("ul",[_("li",[_("code",[v._v("active")]),v._v("：Boolean，激活状态。")])]),_("p",[v._v("根据是否激活更新节点。主要是更新节点的展开收起按钮的显示隐藏。")]),_("h3",[v._v("setOpacity(val)")]),_("blockquote",[_("p",[v._v("v0.7.2+")])]),_("ul",[_("li",[_("code",[v._v("val")]),v._v("：透明度，0-1")])]),_("p",[v._v("设置节点透明度，包括连接线和下级节点。")]),_("h3",[v._v("hideChildren()")]),_("blockquote",[_("p",[v._v("v0.7.2+")])]),_("p",[v._v("隐藏下级节点。")]),_("h3",[v._v("showChildren()")]),_("blockquote",[_("p",[v._v("v0.7.2+")])]),_("p",[v._v("显示下级节点。")]),_("h3",[v._v("hasCustomStyle()")]),_("blockquote",[_("p",[v._v("v0.6.2+")])]),_("p",[v._v("获取是否设置了自定义样式。")]),_("h3",[v._v("getSize()")]),_("p",[v._v("通过重新创建节点内容更新节点的宽高，返回一个布尔值，代表是否宽高发生了变化")]),_("h3",[v._v("render()")]),_("p",[v._v("递归渲染该节点及其所有子节点")]),_("h3",[v._v("updateNodeShape()")]),_("blockquote",[_("p",[v._v("v0.5.0+")])]),_("p",[v._v("更新节点形状节点。比如当节点状态改变后，调用该方法显示或取消激活样式。")]),_("h3",[v._v("remove()")]),_("p",[v._v("递归删除，只是从画布删除，节点容器还在，后续还可以重新插回画布")]),_("h3",[v._v("destroy()")]),_("blockquote",[_("p",[v._v("v0.5.0+")])]),_("p",[v._v("销毁节点，不但会从画布删除，而且原节点直接置空，后续无法再插回画布")]),_("h3",[v._v("renderLine()")]),_("p",[v._v("重新渲染该节点到其子节点之间的连线")]),_("h3",[v._v("removeLine()")]),_("p",[v._v("移除该节点到其子节点之间的连线")]),_("h3",[v._v("renderExpandBtn()")]),_("p",[v._v("渲染展开收缩按钮的内容")]),_("h3",[v._v("removeExpandBtn()")]),_("p",[v._v("移除展开收缩按钮")]),_("h3",[v._v("getStyle(prop, root, isActive)")]),_("p",[v._v("获取某个最终应用到该节点的样式值")]),_("p",[_("code",[v._v("prop")]),v._v("：要获取的样式属性")]),_("p",[_("code",[v._v("root")]),v._v("：是否是根节点，默认"),_("code",[v._v("false")])]),_("p",[_("code",[v._v("isActive")]),v._v("：v0.7.0+已废弃，获取的是否是激活状态的样式值，默认"),_("code",[v._v("false")])]),_("h3",[v._v("setStyle(prop, value, isActive)")]),_("p",[_("code",[v._v("isActive")]),v._v("：v0.7.0+已废弃")]),_("p",[v._v("修改节点的某个样式，"),_("code",[v._v("SET_NODE_STYLE")]),v._v("命令的快捷方法")]),_("h3",[v._v("setStyles(style, isActive)")]),_("blockquote",[_("p",[v._v("v0.6.12+")])]),_("p",[_("code",[v._v("isActive")]),v._v("：v0.7.0+已废弃")]),_("p",[v._v("修改节点多个样式，"),_("code",[v._v("SET_NODE_STYLES")]),v._v("命令的快捷方法")]),_("h3",[v._v("getData(key)")]),_("p",[v._v("获取该节点真实数据"),_("code",[v._v("nodeData")]),v._v("的"),_("code",[v._v("data")]),v._v("对象里的指定值，"),_("code",[v._v("key")]),v._v("不传返回这个"),_("code",[v._v("data")]),v._v("对象")]),_("h3",[v._v("setData(data)")]),_("p",[v._v("设置节点数据，"),_("code",[v._v("SET_NODE_DATA")]),v._v("命令的快捷方法")]),_("h3",[v._v("setText(text, richText, resetRichText)")]),_("ul",[_("li",[_("p",[_("code",[v._v("richText")]),v._v("：v0.4.2+，"),_("code",[v._v("Boolean")]),v._v("，如果要设置的是富文本内容，也就是"),_("code",[v._v("html")]),v._v("字符，"),_("code",[v._v("richText")]),v._v("需要传"),_("code",[v._v("true")])])]),_("li",[_("p",[_("code",[v._v("resetRichText")]),v._v("：v0.6.10+，"),_("code",[v._v("Boolean")]),v._v("，是否要复位富文本，默认为"),_("code",[v._v("false")]),v._v("，如果传"),_("code",[v._v("true")]),v._v("那么会重置富文本节点的样式")])])]),_("p",[v._v("设置节点文本，"),_("code",[v._v("SET_NODE_TEXT")]),v._v("命令的快捷方法")]),_("h3",[v._v("setImage(imgData)")]),_("p",[v._v("设置节点图片，"),_("code",[v._v("SET_NODE_IMAGE")]),v._v("命令的快捷方法")]),_("h3",[v._v("setIcon(icons)")]),_("p",[v._v("设置节点图标，"),_("code",[v._v("SET_NODE_ICON")]),v._v("命令的快捷方法")]),_("h3",[v._v("setHyperlink(link, title)")]),_("p",[v._v("设置节点超链接，"),_("code",[v._v("SET_NODE_HYPERLINK")]),v._v("命令的快捷方法")]),_("h3",[v._v("setNote(note)")]),_("p",[v._v("设置节点备注，"),_("code",[v._v("SET_NODE_NOTE")]),v._v("命令的快捷方法")]),_("h3",[v._v("setTag(tag)")]),_("p",[v._v("设置节点标签，"),_("code",[v._v("SET_NODE_TAG")]),v._v("的快捷方法")]),_("h3",[v._v("hide()")]),_("blockquote",[_("p",[v._v("v0.1.5+")])]),_("p",[v._v("隐藏节点及其下级节点")]),_("h3",[v._v("show()")]),_("blockquote",[_("p",[v._v("v0.1.5+")])]),_("p",[v._v("显示节点及其下级节点")]),_("h3",[v._v("isParent(node)")]),_("blockquote",[_("p",[v._v("v0.1.5+：检测当前节点是否是某个节点的祖先节点")])]),_("blockquote",[_("p",[v._v("v0.8.1+：检测当前节点是否是某个节点的父节点")])]),_("h3",[v._v("isAncestor(node)")]),_("blockquote",[_("p",[v._v("v0.8.1+")])]),_("p",[v._v("检测当前节点是否是某个节点的祖先节点")]),_("h3",[v._v("isBrother(node)")]),_("blockquote",[_("p",[v._v("v0.1.5+")])]),_("p",[v._v("检测当前节点是否是某个节点的兄弟节点")]),_("h3",[v._v("checkHasGeneralization()")]),_("blockquote",[_("p",[v._v("v0.2.0+")])]),_("p",[v._v("检查是否存在概要")]),_("h3",[v._v("checkHasSelfGeneralization()")]),_("blockquote",[_("p",[v._v("v0.9.0+")])]),_("p",[v._v("检查是否存在自身的概要，非子节点区间概要")]),_("h3",[v._v("hideGeneralization()")]),_("blockquote",[_("p",[v._v("v0.2.0+")])]),_("p",[v._v("隐藏概要节点")]),_("h3",[v._v("showGeneralization()")]),_("blockquote",[_("p",[v._v("v0.2.0+")])]),_("p",[v._v("显示概要节点")]),_("h3",[v._v("updateGeneralization()")]),_("blockquote",[_("p",[v._v("v0.2.0+")])]),_("p",[v._v("更新概要节点")]),_("h3",[v._v("hasCustomPosition()")]),_("blockquote",[_("p",[v._v("v0.2.0+")])]),_("p",[v._v("检查节点是否存在自定义数据")]),_("h3",[v._v("ancestorHasCustomPosition()")]),_("blockquote",[_("p",[v._v("v0.2.0+")])]),_("p",[v._v("检查节点是否存在自定义位置的祖先节点")]),_("h3",[v._v("getShape()")]),_("blockquote",[_("p",[v._v("v0.2.4+")])]),_("p",[v._v("获取节点形状")]),_("h3",[v._v("setShape(shape)")]),_("blockquote",[_("p",[v._v("v0.2.4+")])]),_("p",[v._v("设置节点形状，"),_("code",[v._v("SET_NODE_SHAPE")]),v._v("命令的快捷方法")]),_("h3",[v._v("getSelfStyle(prop)")]),_("blockquote",[_("p",[v._v("v0.2.5+")])]),_("p",[v._v("获取节点自身的自定义样式")]),_("h3",[v._v("getParentSelfStyle(prop)")]),_("blockquote",[_("p",[v._v("v0.2.5+")])]),_("p",[v._v("获取最近一个存在自身自定义样式的祖先节点的自定义样式")]),_("h3",[v._v("getSelfInhertStyle(prop)")]),_("blockquote",[_("p",[v._v("v0.2.5+")])]),_("p",[v._v("获取自身可继承的自定义样式")])])}],p={},c=p,h=e("2877"),l=Object(h["a"])(c,o,t,!1,null,null,null);_["default"]=l.exports}}]);