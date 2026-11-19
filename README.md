# XJTLU_Bioinformatics_Course-Notes

> 从细胞到代码，从分子到模型。  
> From cells to code, from molecules to models.

欢迎来到我的课程笔记仓库。

我是西交利物浦大学（XJTLU）生物信息学专业学生。这个仓库把我本科阶段七门课的复习内容整理成一个可以直接打开的静态复习站：左边按学科和章节阅读，正文里保留课件原图，术语带释义，考前可以搜索、对照和打印。

Welcome! This is my personal, exam-oriented review site for seven undergraduate modules in Bioinformatics at XJTLU. It is a static, offline-friendly site built from my lecture notes, with courseware figures placed in the relevant sections, annotated terminology, full-text search, and per-subject export.

**在线复习站：** [打开复习站](https://zhihezhao25.github.io/xipu-review/)

> 这不是课程官方资料，也不能替代课堂、教材和老师的讲解。内容以我拿到的课件为准；课件没有覆盖的地方会明确标注，不自行编造。

---

## 建立本仓库的目的

生物信息学的课程横跨细胞生物学、化学、概率统计和编程。它们看起来是四套语言，真正做题和做项目时却经常要一起用：

- 看到一条基因序列，要知道它对应的分子过程和细胞结构；
- 看到一组测序数据，要知道用什么分布、什么检验；
- 写分析脚本时，要能把 Java / C / C++ 里的类型、内存和控制流讲清楚；
- 读一篇方法论文时，要能判断模型、数据和结论之间是否对得上。

这个仓库的目的，是把这些课在一个学期内学到的内容整理成**可以反复阅读、可以检索、可以带到考场外继续用**的形式，而不是考前一次性复制粘贴的“重点”。

具体来说：

- **课程笔记**：按章节梳理定义、机制、公式、代码和易错点，尽量保留推理过程，而不只是结论。
- **课件原图**：把老师课件里的结构图、机理图、统计图和程序内存图放回对应小节，避免图文分离。
- **术语对照**：中文、英文、释义一起标注，方便读英文课件和考试题干。
- **期末复习**：用对比表把容易混淆的概念放在一起，例如有丝分裂与减数分裂、亲核取代与消除、t 检验与 z 检验、值传递与引用传递。
- **自查与纠错**：对讲义里前后不一致的数值或表述，在正文中说明并按公式重算；不把错误悄悄带过去。

## 涵盖课程

本科课程（Undergraduate modules）

| 课程代码 | 课程 | 章节 | 主要内容 |
|---|---|---:|---|
| **BIO103** | 细胞与分子生物学<br>Cellular & Molecular Biology | 14 | 细胞结构、细胞周期、内膜系统、膜运输、细胞信号、线粒体与核糖体、DNA 复制/转录/翻译、蛋白质结构与实验方法 |
| **BIO105** | 生命的化学原理<br>Chemical Principles of Life | 9 | 原子与分子轨道、水与弱相互作用、热力学、酶动力学、呼吸链、光合作用、受体与结合曲线、神经与肌肉 |
| **CHE105** | 有机化学导论（非化学专业）<br>Introductory Organic Chemistry for Non-Chemists | 12 | 成键与杂化、立体化学、亲核取代与消除、羰基化学、羧酸衍生物、胺与含氮化合物、典型反应机理 |
| **MTH113** | 概率与统计<br>Introduction to Probability and Statistics | 10 | 概率空间、随机变量、常见分布、抽样分布、参数估计、假设检验、回归与相关 |
| **SCI101** | 科学人工智能<br>Artificial Intelligence for Science | 9 | Python 数据处理、回归、分类、聚类、模型评估、正则化、交叉验证与科研中的 AI 伦理 |
| **SOE102** | Java 程序设计<br>Introduction to Programming in Java | 8 | Java 基础语法、类与对象、继承与多态、接口、异常处理、集合与文件 I/O |
| **SOE105** | C/C++ 程序设计<br>C/C++ Programming | 13 | 类型与控制流、函数、数组、指针与动态内存、文件 I/O、程序开发与调试 |

合计：**7 门课程 / 75 章 / 101 个 HTML 页面**。

### 课程之间的连接

- **BIO103 × BIO105 × CHE105**：细胞结构、分子识别和化学反应机制互相解释。比如酶动力学里的结合曲线，回到 BIO105 的受体理论；有机化学里的羰基反应，回到 BIO103 的代谢与蛋白质功能。
- **MTH113 × SCI101**：概率分布和假设检验是理解模型评估、置信区间和交叉验证的基础。
- **SOE102 × SOE105**：Java 和 C/C++ 对照学习，更容易看清“对象、引用、内存、类型”这些概念在不同语言里的实现差异。
- **BIO103 × SCI101**：序列分析、组学数据和生物信息学流程，最终都要落到可复现的代码和可解释的统计上。

## 复习站有什么

| 内容 | 规模 | 说明 |
|---|---:|---|
| 学科 | 7 | BIO103、BIO105、CHE105、MTH113、SCI101、SOE102、SOE105 |
| 章节 | 75 | 每章有本章目录、正文、来源页和上下章导航 |
| HTML 页面 | 101 | 75 个章节页 + 学科索引 + 首页、术语、速记、搜索、图示 |
| 课件原图 | 111 张 | 从老师 PDF/PPTX 提取或整页渲染，按小节插入正文 |
| 矢量示意图 | 43 张 | 用于补充流程、结构、统计和程序内存示意 |
| 术语 | 671 条 | 正文首次出现时用虚线下划线标注，悬停看中英文与释义 |
| 对比表 | 40 张 | 按学科汇总易混概念，统一放在“速记”专栏 |
| 搜索 | 全站 | 构建时生成本地索引，离线也能搜 |
| 主题 | 浅色 / 暗色 | 米白纸墨与深灰夜间阅读 |
| 导出 | 7 个学科 | 每个学科可以单独导出为迷你站，直接打开 |

### 阅读方式

1. **按学科读**：首页选择课程 → 学科页看章节列表 → 进入章节。
2. **按问题读**：搜索页输入关键词，直接跳到相关章节和小节。
3. **按对比读**：速记页把 40 张对比表按学科放在一起，适合考前快速过一遍。
4. **按图读**：图示页汇总全部课件原图和 SVG，方便确认自己是否认得每一张图。
5. **打印**：章节页可以直接打印成 A4 PDF；打印样式会隐藏导航和折叠的提示词。

## 内容口径

这部分是我对整个仓库的约束，也方便后来查看或贡献的人判断内容边界。

- **只以课程讲义为主要来源**：正文中的定义、公式、例题和图片，优先来自 `_work/source_pages/` 中对应的 lecture PDF/PPTX。
- **不拿外部教材补写**：不使用 Clayden、Silberberg 等教材、网上百科或题库来补讲义没有的内容。
- **资料缺口明确标注**：例如 BIO105 缺 Lecture 8、SOE102 缺 Week 7–8、CHE105 部分章节的讲义文本不完整；这些地方在正文中标注“本课程资料未提供”，不自行续写。
- **课件原图不改绘**：图片来自老师课件，必要时整页渲染；不以自绘 SVG 冒充课件原图。SVG 只作为理解辅助，并明确标注为示意图。
- **题库只用于提炼易错点**：Mock、期末卷和练习只用于总结“高频易错点”，不把题目和答案收进复习站。
- **数值矛盾要说明**：如果讲义前后数值不一致，正文会指出并按公式重算，不把矛盾藏起来。

## 项目结构

```text
复习网站/
├─ content/                     # 内容源文件
│  ├─ outline.json              # 7 学科 / 75 章的唯一事实源
│  ├─ course_images.json        # 111 张课件原图的清单与落点
│  ├─ bio103/
│  │  ├─ index.html             # 学科首页
│  │  ├─ ch01.html … ch14.html  # 章节正文片段
│  │  ├─ glossary.json          # 术语词典
│  │  └─ compare.html           # 对比速记表
│  ├─ bio105/ …
│  └─ soe105/
├─ templates/                   # 页面骨架
│  ├─ base.html
│  ├─ home.html
│  ├─ subject.html
│  ├─ chapter.html
│  ├─ glossary.html
│  ├─ compare.html
│  ├─ search.html
│  └─ gallery.html
├─ assets/
│  ├─ css/                      # tokens / base / layout / components / print
│  ├─ js/                       # theme / search / copy
│  ├─ figures/                  # 43 张 SVG 示意图
│  └─ course/                   # 111 张课件原图
├─ tools/                       # 零依赖构建与维护脚本
│  ├─ build.py
│  ├─ check_content.py
│  ├─ verify.py
│  ├─ export.py
│  ├─ import_course_figures.py
│  ├─ import_extra_figures.py
│  └─ place_course_figures.py
├─ site/                        # 构建产物；发布到 GitHub Pages 的内容
├─ exports/                     # 7 个单学科迷你站
├─ 00_目录树.md                 # 学科 / 章节 / 来源映射
├─ 01_架构与设计规范.md
├─ 03_模板规范与模块拆分.md
├─ 04_构建报告.md
├─ 05_维护说明.md
└─ README.md
```

> 当前公开的 GitHub Pages 仓库保存的是构建后的 `site/` 内容；可编辑的 `content/`、`templates/`、`assets/` 和 `tools/` 在本地源码项目中维护。这样线上访问不需要 Python，也不会把源文件和构建产物混在一起。

## 使用方式

### 在线访问

[打开复习站](https://zhihezhao25.github.io/xipu-review/)

不依赖本机进程，电脑关机后仍然可以打开。站点由 GitHub Pages 从公开仓库的 `main` 分支发布。

### 本地打开

```bash
# 直接双击
site/index.html

# 或者在项目根目录启动一个本地静态服务器
python3 -m http.server 8000 --directory site
# 浏览器打开 http://127.0.0.1:8000/
```

站点不加载 CDN、网络字体或外部图片；断网也能完整阅读。

### 单科导出

```bash
python3 tools/export.py bio103
# 产物：exports/BIO103/index.html
```

导出目录保留 `subjects/<subject>/` 的相对路径，因此 `../../assets/` 的 CSS、JS 和图片不会失效。

### 打印

在章节页使用浏览器打印：

- 纸张：A4
- 建议开启“背景图形”
- 打印样式会自动隐藏侧栏、上下章导航和折叠的图示提示词

## 构建与更新

项目使用 Python 3 标准库构建，不依赖第三方包。

```bash
python3 tools/check_content.py   # 内容自检：片段结构、术语、图片引用
python3 tools/build.py           # 全站构建：生成 101 个 HTML 页面与搜索索引
python3 tools/verify.py          # 检查断链、缺失锚点和页面数量
python3 tools/report.py          # 输出内容密度报告
```

只有新增或替换课件图片时，才需要运行图片相关脚本：

```bash
python3 tools/import_course_figures.py   # BIO103 / BIO105 课件图
python3 tools/import_extra_figures.py    # 其余 5 科课件图 / 整页渲染
python3 tools/place_course_figures.py    # 按 section 把图插入对应小节
```

更新顺序建议：

```text
改 content/ 或 assets/
        ↓
check_content.py
        ↓
build.py
        ↓
verify.py
        ↓
发布 site/ 的内容到 GitHub Pages
```

不要直接手改 `site/` 里的 HTML；它是构建产物，下一次 `build.py` 会覆盖。

## 文件命名规范

### 章节与内容

```text
content/<subject>/ch<两位章节号>.html
content/<subject>/glossary.json
content/<subject>/compare.html
```

例如：

```text
content/bio103/ch09.html
content/che105/glossary.json
```

### 课件图片

```text
assets/course/<subject>-ch<两位章节号>-<语义化名称>.jpg
```

例如：

```text
assets/course/bio103-ch04-membrane-transport.jpg
assets/course/che105-ch04-orbitals.jpg
assets/course/soe105-ch09-pass-by-value.jpg
```

图片必须在 `content/course_images.json` 中登记 `subject`、`chapter`、`section`、`file`、`caption`、`source`，不能只把文件丢进目录。

### 导出与提交

```text
exports/<SUBJECT>/          # 单科导出，例如 exports/BIO103/
```

提交信息建议使用以下前缀：

- `feat:` 新增章节、图片或功能
- `fix:` 修正内容、断链或排版问题
- `docs:` 修改 README、维护说明或来源标注
- `style:` 只改样式，不改内容逻辑
- `refactor:` 重构模板、构建脚本或内容结构
- `chore:` 清理临时文件、重复副本或依赖

## 如何贡献

这是一个个人维护的复习仓库，但非常欢迎指正和补充。你可以：

1. **提 Issue**：指出错别字、图文不符、公式错误、断链，或指出某一页与课件不一致。请尽量带上课程、章节、来源页和截图。
2. **提 Pull Request**：修正内容或补充讲义中确实存在、但当前漏掉的知识点。
3. **讨论**：如果你也在学生物信息学，欢迎交流课程之间的连接、复习方法和更好的图表组织方式。

### 分支与提交

```bash
git checkout -b notes@<你的名字>
git add content/ assets/ templates/ tools/
git commit -m "docs: 补充 BIO103 DNA 复制校对机制"
git push origin notes@<你的名字>
```

然后在 GitHub 上创建 Pull Request。

### 内容贡献的三条底线

- **不编造**：讲义没有的内容，不凭印象补；确实需要补充时，标明来源。
- **不改写课件原图**：不把自绘示意图标成“课件原图”，也不把外部图片混进 `assets/course/`。
- **不收录题目**：题库、Mock 和期末卷只用于总结易错点，不把题目与答案搬进站点。

## 版权与声明

- 本站是**个人学习整理**，不是 XJTLU 官方课程网站，也不代表课程教师的观点。
- 课程讲义、课件原图、课程名称与相关材料的版权归原课程教师和 XJTLU 所有；本站仅用于个人复习与非商业学习交流，不构成对这些材料的再授权。
- 我原创的整理文字采用 **CC BY-NC-SA 4.0**（署名—非商业性使用—相同方式共享）；构建脚本可采用 MIT 许可证。课件原图不适用上述许可。
- 如果你是本课程教师或版权持有人，认为某张图或某段材料不适合公开，请联系我删除。

## 致谢

- 感谢 BIO103、BIO105、CHE105、MTH113、SCI101、SOE102、SOE105 各位老师的课件与讲解；没有这些讲义，就没有这份整理。
- 感谢一起讨论过题目、帮我指出错误的朋友和同学。

---

如果这份笔记恰好帮到你，欢迎点一个 Star；如果发现错误，也欢迎直接开 Issue。

------------------------End of File------------------------
