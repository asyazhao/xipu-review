[Uploading README.md…]()
# 全科复习站

XJTLU 大二上 · 7 学科 / 75 章离线复习站，含 43 张本地 SVG 示意图与 111 张课件原图。

## 打开

直接双击 `site/index.html`（项目根 `index.html` 会自动跳转）。
无需服务器、无需联网、无需安装任何依赖。
首页下方有“课件原图”缩略图；全部 111 张在 `site/gallery.html`。
课件原图已按小节放进对应章节正文，图注与来源紧随图片，不再堆在章末。
正文中的词典术语用虚线下划线标出，悬停可看中文、英文与释义。

## 长期公网地址

**https://zhihezhao25.github.io/xipu-review/**

部署在 GitHub Pages（公开仓库 `zhihezhao25/xipu-review`，`main` 分支根目录）。
不依赖本机进程，电脑关机后仍可访问。

## 维护

内容在 `content/`，页面骨架在 `templates/`，样式在 `assets/`。

```bash
python3 tools/check_content.py   # 内容自检
python3 tools/build.py           # 全站构建
python3 tools/verify.py          # 链接检查
python3 tools/report.py          # 内容密度报告
python3 tools/make_figures.py    # 重新生成 43 张 SVG 示意图
python3 tools/import_course_figures.py   # 导入 BIO103/BIO105 课件原图
python3 tools/import_extra_figures.py    # 导入其余 5 科课件原图/整页
python3 tools/place_course_figures.py    # 按 section 插入对应小节
```

单学科导出：

```bash
python3 tools/export.py bio103
# 产物：exports/BIO103/index.html
```

新增章节、新增学科、删除/重命名、故障排查等完整说明见 **`05_维护说明.md`**。

## 文档

- `00_目录树.md` — 学科与章节划分
- `01_架构与设计规范.md` — 架构、导航、配色、字体
- `02_设计规范看板.html` — 双主题视觉看板
- `03_模板规范与模块拆分.md` — 模板与内容片段契约
- `04_构建报告.md` — 构建结果与 QA
- `05_维护说明.md` — 日常维护手册
