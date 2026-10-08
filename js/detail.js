/* ==========================================================
   详情页 | 数据 + 渲染
   ========================================================== */

const DETAIL_DATA = {
  /* ---------- 文旅新貌 ---------- */
  taiping: {
    category: '文旅新貌',
    title: '太平古镇',
    subtitle: '国家AAAA级旅游景区 · 没有围墙的红色博物馆',
    images: [
    'images/太平古镇.png',
    'images/taiping-2.png',
    'images/taiping-3.png',
    'images/taiping-4.png',
    'images/taiping-5.png'
  ],
    intro: '太平古镇位于古蔺县北部赤水河畔，是红军长征四渡赤水的重要渡口之一，被誉为“没有围墙的红色博物馆”。',
    content: [
      '1935年2月，中央红军在太平渡架设浮桥三座，渡河兵力1.2万人，完成二渡赤水，挥师东进重入贵州。太平渡与二郎滩一起，成为四渡赤水战役中最关键的两个渡口。',
      '古镇完整保留了明清时期的建筑格局，吊脚楼错落有致，青石板路蜿蜒曲折，依山而建，临水而居。古镇内设中国工农红军四渡赤水太平渡陈列馆，是全国爱国主义教育示范基地。',
      '如今，太平古镇已被纳入长征国家文化公园建设重点示范项目，是川南红色旅游的核心目的地之一。'
    ],
    stats: ['渡河兵力 1.2万人', '架设浮桥 3座', '1935年2月']
  },

  trail: {
    category: '文旅新貌',
    title: '长征历史步道',
    subtitle: '川南黔北第一条长征历史步道',
    images: [
      'images/长征历史步道.png',
      'images/长征历史步道-2.png',
      'images/长征历史步道-3.png',
      'images/长征历史步道-4.png',
      'images/长征历史步道-5.png'
    ],
    intro: '古蔺县长征历史步道（太平二郎段）全长26公里，是川南黔北第一条以长征为主题的历史步道。',
    content: [
      '步道起点为太平渡渡口，止于二郎滩渡口，沿途串联了太平古镇、太平渡渡口、二郎滩渡口等多个红色遗址，完整再现了当年红军四渡赤水的行军路线。',
      '沿途设有解说牌、休息点、观景台，行走其间可以俯瞰赤水河谷的壮丽风光，感受红军当年跋山涉水的艰辛。',
      '如今，这条步道已成为红色研学、徒步体验、爱国主义教育的重要场所，每年吸引大量团队前来体验。'
    ],
    stats: ['全长 26公里', '起点 太平渡', '止于 二郎滩']
  },

  lake: {
    category: '文旅新貌',
    title: '观文千鸟湖',
    subtitle: '网红玻璃观景台 · 万只候鸟越冬地',
    images: [
      'images/观文千鸟湖.png',
      'images/观文千鸟湖-2.png',
      'images/观文千鸟湖-3.png',
      'images/观文千鸟湖-4.png',
      'images/观文千鸟湖-5.png',
    ],
    intro: '观文千鸟湖位于古蔺县观文镇，是一处集湖光山色、候鸟观赏、休闲度假为一体的生态旅游景区。',
    content: [
      '湖面开阔，水质清澈，每年冬季有上万只候鸟在此越冬，是川南地区重要的候鸟栖息地。',
      '景区内设有玻璃观景台，可俯瞰千鸟湖全景。湖光山色与红色文化交相辉映，是古蔺农文旅融合发展的典范。',
      '近年来，观文镇依托千鸟湖景区，带动了周边餐饮、民宿、农产品销售全链条消费，成为古蔺乡村旅游的新名片。'
    ],
    stats: ['玻璃观景台', '万只候鸟越冬', '生态旅游典范']
  },

  canola: {
    category: '文旅新貌',
    title: '白沙场镇菜花季',
    subtitle: '连续16届 · 累计游客超30万人次',
    images: [
      'images/白沙场镇菜花季.png',
      'images/白沙场镇菜花季-2.png',
      'images/白沙场镇菜花季-3.png',
      'images/白沙场镇菜花季-4.png',
      'images/白沙场镇菜花季-5.png',
    ],
    intro: '白沙场镇菜花文化旅游季已连续举办16届，累计吸引游客超30万人次，是古蔺农旅融合的生动实践。',
    content: [
      '每年3月，万亩油菜花海盛开，金黄色的花田与远处的青山交相辉映，是古蔺春天最美的名片。',
      '当地将火锅搬进花田，实现农旅结合，让游客在赏花的同时品尝地道美食，带动了餐饮、住宿、农产品销售的全链条发展。',
      '菜花季已成为古蔺乡村振兴的重要品牌活动，也是川南地区最受欢迎的春日打卡地之一。'
    ],
    stats: ['连续 16届', '累计游客 30万+', '万亩花海']
  },

  /* ---------- 美食古蔺 ---------- */
  chicken: {
    category: '美食古蔺',
    title: '古蔺麻辣鸡',
    subtitle: '国家地理标志 · 古蔺三宝之一',
    images: [
      'images/麻辣鸡.png',
      'images/古蔺麻辣鸡-2.png',
      'images/古蔺麻辣鸡-3.png',
      'images/古蔺麻辣鸡-4.png',
      'images/古蔺麻辣鸡-5.png'
    ],
    intro: '古蔺麻辣鸡是古蔺最具代表性的美食名片，国家地理标志证明商标。',
    content: [
      '选用本地土鸡，采用古法卤制，配以特制的麻辣蘸料，麻辣鲜香、回味悠长。',
      '相传当年红军长征转战古蔺时，这道菜是当地百姓犒劳红军的珍馐。如今，古蔺麻辣鸡已成为古蔺人待客的头道菜。',
      '它与郎酒、古蔺手工面并称“古蔺三宝”，是古蔺饮食文化的象征。'
    ],
    stats: ['国家地理标志', '古蔺三宝', '古法卤制']
  },

  herb: {
    category: '美食古蔺',
    title: '古蔺赶黄草',
    subtitle: '国家地理标志 · 药食同源',
    images: [
      'images/赶黄草.png',
      'images/古蔺赶黄草-2.png.png',
      'images/古蔺赶黄草-3.png',
      'images/古蔺赶黄草-4.png',
      'images/古蔺赶黄草-5.png',
    ],
    intro: '赶黄草是古蔺道地药材，具有清热解毒、保肝护肝的功效，药食同源。',
    content: [
      '古蔺是全国赶黄草地理认证产区，被誉为“赶黄草之乡”。',
      '当地百姓将赶黄草制成茶饮，是日常保健的常用饮品。',
      '近年来，赶黄草已成为古蔺特色农业的重要支柱产业之一，产品远销全国。'
    ],
    stats: ['国家地理标志', '药食同源', '道地产区']
  },

  pork: {
    category: '美食古蔺',
    title: '古蔺丫杈猪',
    subtitle: '国家地理标志 · 老腊肉闻名',
    images: [
      'images/腊肉.png',
      'images/古蔺丫杈猪-2.png',
      'images/古蔺丫杈猪-3.png',
      'images/古蔺丫杈猪-4.png',
      'images/古蔺丫杈猪-5.png'
    ],
    intro: '古蔺丫杈猪是古蔺本地优良猪种，国家地理标志证明商标。',
    content: [
      '因猪耳呈丫杈状而得名，肉质鲜美、肥而不腻。',
      '用丫杈猪肉制作的老腊肉，是古蔺人过年必备的年味。每年冬季，家家户户熏制腊肉，香气弥漫山间。',
      '丫杈猪养殖已成为古蔺山区农民增收的重要途径。'
    ],
    stats: ['国家地理标志', '本地优良猪种', '老腊肉']
  },

  noodle: {
    category: '美食古蔺',
    title: '古蔺手工面',
    subtitle: '国家地理标志 · 百年工艺',
    images: [
      'images/古蔺面.png',
      'images/古蔺手工面-2.png',
      'images/古蔺手工面-3.png',
      'images/古蔺手工面-4..png',
      'images/古蔺手工面-5.png'
    ],
    intro: '古蔺面是国家地理标志证明商标，手工面地理认证产区。',
    content: [
      '古蔺手工面以筋道爽滑著称，制作工艺传承百年。',
      '选用当地优质小麦，经和面、揉面、拉面、晾晒等多道工序精制而成。',
      '它是古蔺人早餐桌上的常客，也是古蔺三宝之一。'
    ],
    stats: ['国家地理标志', '百年工艺', '古蔺三宝']
  },

  wine: {
    category: '美食古蔺',
    title: '郎酒',
    subtitle: '中国两大酱香白酒之一',
    images: [
      'images/郎酒.png',
      'images/郎酒-2.png',
      'images/郎酒-3.png',
      'images/郎酒-4.png',
      'images/郎酒-5.png',
    ],
    intro: '郎酒产自赤水河畔二郎镇，是中国两大酱香白酒之一，与茅台隔河相望。',
    content: [
      '郎酒以赤水河谷独特的微生物环境和天然溶洞贮藏而闻名，酒质醇厚、空杯留香。',
      '二郎镇郎酒庄园已成为集酿酒、品鉴、旅游为一体的工业旅游景区。',
      '郎酒是古蔺的一张金字招牌，也是古蔺三宝之一。'
    ],
    stats: ['中国两大酱香', '赤水河畔', '二郎镇']
  },

  orange: {
    category: '美食古蔺',
    title: '古蔺甜橙',
    subtitle: '皮薄多汁 · 5+N 主导产业',
    images: [
      'images/甜橙.png',
      'images/古蔺甜橙-2.png',
      'images/古蔺甜橙-3.png',
      'images/古蔺甜橙-4.png',
      'images/古蔺甜橙-5.png',
    ],
    intro: '古蔺甜橙是古蔺“5+N”现代农业体系的主导产业之一。',
    content: [
      '赤水河谷独特的气候和土壤条件，造就了古蔺甜橙皮薄多汁、酸甜适口的优良品质。',
      '每年11月成熟，是古蔺秋冬季节的时令水果。',
      '近年来，古蔺甜橙通过电商渠道畅销全国，成为农民增收的重要来源。'
    ],
    stats: ['皮薄多汁', '11月成熟', '5+N 产业']
  },

  /* ---------- 非遗传承 ---------- */
  lantern: {
    category: '非遗传承',
    title: '古蔺花灯',
    subtitle: '国家级非物质文化遗产 · 花灯之乡',
    images: [
      'images/花灯.png',
      'images/古蔺花灯-2.png',
      'images/古蔺花灯-3.png',
      'images/古蔺花灯-4.png',
      'images/古蔺花灯-5.png',
    ],
    intro: '古蔺花灯是国家级非物质文化遗产，俗称“扭扭灯”。',
    content: [
      '表演时手持花灯、边唱边舞，具有“要逗要笑、要拽要闹、要唱要跳”的独特风格。',
      '古蔺因此被称为“花灯之乡”。',
      '花灯表演通常在春节、元宵等传统节日进行，是古蔺民间最重要的民俗活动之一。'
    ],
    stats: ['国家级非遗', '花灯之乡', '扭扭灯']
  },

  woodcarving: {
    category: '非遗传承',
    title: '黄荆根雕',
    subtitle: '传统美术类非遗 · 依形就势',
    images: [
      'images/黄荆根雕.png',
      'images/黄荆根雕-2.png',
      'images/黄荆根雕-3.png',
      'images/黄荆根雕-4.png',
      'images/黄荆根雕-5.png'
    ],
    intro: '古蔺黄荆根雕工艺是传统美术类非物质文化遗产项目。',
    content: [
      '以黄荆老林中的天然树根为原料，依形就势，雕刻出人物、动物、山水等造型。',
      '黄荆根雕古朴自然、独具匠心，每一件作品都是独一无二的艺术品。',
      '黄荆老林是地球北纬28度线上唯一保存完好的亚热带原始常绿阔叶林，为根雕提供了丰富的天然素材。'
    ],
    stats: ['传统美术', '黄荆老林', '依形就势']
  },

  tea: {
    category: '非遗传承',
    title: '马嘶苗族乡茶文化',
    subtitle: '苗乡文化 · 生态茶园 · 非遗活化',
    images: [
      'images/马嘶茶文化.png',
      'images/马嘶苗族乡茶文化-2.png',
      'images/马嘶苗族乡茶文化-3.png',
      'images/马嘶苗族乡茶文化-4.png',
      'images/马嘶苗族乡茶文化-5.png'
    ],
    intro: '马嘶苗族乡以茶为媒，构建“苗乡文化传承、非遗技艺活化、生态茶园建设、红色基因赓续”四位协同的文旅融合体系。',
    content: [
      '游客可以亲手采茶、制茶，体验苗族蜡染、苗绣等非遗技艺，感受苗乡的独特风情。',
      '马嘶苗族乡茶文化周已成为古蔺文旅融合的重要品牌活动。',
      '这里将传统苗乡文化与现代乡村旅游深度融合，是古蔺非遗活化利用的典范。'
    ],
    stats: ['苗乡文化', '生态茶园', '非遗活化']
  }
};


/* ---------- 渲染逻辑 ---------- */
(function renderDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const data = DETAIL_DATA[id];

  const loading = document.getElementById('detailLoading');
  const wrap = document.getElementById('detailWrap');

  if (!data) {
    loading.innerHTML = '<div style="text-align:center;color:#d4a843;font-size:1rem;">未找到该内容<br><br><a href="index.html" style="color:#f5d78e;">← 返回主页</a></div>';
    return;
  }

  // 兼容旧的单图字段
  const images = data.images || (data.image ? [data.image] : []);

  // 填充文字
  document.getElementById('detailCategory').textContent = data.category;
  document.getElementById('detailTitle').textContent = data.title;
  document.getElementById('detailSubtitle').textContent = data.subtitle;
  document.getElementById('detailIntro').textContent = data.intro;

  // 正文段落
  const contentEl = document.getElementById('detailContent');
  contentEl.innerHTML = data.content.map(p => `<p>${p}</p>`).join('');

  // 数据标签
  const statsEl = document.getElementById('detailStats');
  statsEl.innerHTML = data.stats.map(s => `<span class="detail-stat">${s}</span>`).join('');

  // 初始化轮播
  initCarousel(images);

  // 显示
  loading.style.display = 'none';
  wrap.style.display = 'block';
  document.title = data.title + ' | 重走长征路 · 古蔺';
})();

/* ---------- 轮播逻辑 ---------- */
/* ---------- 轮播逻辑（含灯箱） ---------- */
function initCarousel(images) {
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const carousel = document.getElementById('detailCarousel');

  if (!track || !images.length) return;

  // 生成所有图片
  track.innerHTML = images.map((src, i) => `
    <div class="carousel-slide">
      <img src="${src}" alt="图片 ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" data-index="${i}">
    </div>
  `).join('');

  // 单张图：隐藏箭头和圆点，但仍可点击看大图
  if (images.length <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (dotsWrap) dotsWrap.style.display = 'none';
  } else {
    // 生成圆点
    dotsWrap.innerHTML = images.map((_, i) =>
      `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`
    ).join('');

    const dots = dotsWrap.querySelectorAll('.carousel-dot');
    let current = 0;
    let autoTimer = null;

    function goTo(index) {
      current = (index + images.length) % images.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    // 箭头
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); next(); resetAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prev(); resetAuto(); });

    // 圆点
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goTo(parseInt(dot.dataset.index, 10));
        resetAuto();
      });
    });

    // 触摸滑动
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let moved = false;

    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
      moved = false;
    }, { passive: true });

    carousel.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        isDragging = false;
        moved = true;
        if (dx > 0) prev(); else next();
        resetAuto();
      }
    }, { passive: true });

    carousel.addEventListener('touchend', () => {
      isDragging = false;
    });

    // 自动轮播
    function startAuto() {
      autoTimer = setInterval(next, 5000);
    }
    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    carousel.addEventListener('mouseenter', () => clearInterval(autoTimer));
    carousel.addEventListener('mouseleave', startAuto);

    startAuto();
  }

  // 点击图片打开灯箱
  track.querySelectorAll('.carousel-slide img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(img.dataset.index, 10);
      openLightbox(images, index);
    });
  });
}

/* ---------- 灯箱 ---------- */
let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, startIndex) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightboxImages = images;
  lightboxIndex = startIndex;

  updateLightbox();
  lightbox.classList.add('show');
  document.body.style.overflow = 'hidden'; // 禁止背景滚动
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('show');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const img = document.getElementById('lightboxImage');
  const counter = document.getElementById('lightboxCounter');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!img) return;

  img.src = lightboxImages[lightboxIndex];
  img.alt = `图片 ${lightboxIndex + 1}`;
  counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;

  // 单张图隐藏箭头
  if (lightboxImages.length <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (counter) counter.style.display = 'none';
  } else {
    if (prevBtn) prevBtn.style.display = '';
    if (nextBtn) nextBtn.style.display = '';
    if (counter) counter.style.display = '';
  }
}

/* ---------- 灯箱事件绑定 ---------- */
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const overlay = lightbox.querySelector('.lightbox-overlay');

  function prevImage() {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightbox();
  }

  function nextImage() {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    updateLightbox();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay) overlay.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });

  // 键盘控制
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // 触摸滑动
  let startX = 0;
  let startY = 0;
  let isDragging = false;

  lightbox.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
  }, { passive: true });

  lightbox.addEventListener('touchmove', (e) => {
    if (!isDragging || lightboxImages.length <= 1) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
      isDragging = false;
      if (dx > 0) prevImage(); else nextImage();
    }
  }, { passive: true });

  lightbox.addEventListener('touchend', () => {
    isDragging = false;
  });
})();

/* ==================== 详情页背景音乐 ==================== */
(function initDetailMusic() {
  const bgMusic = document.getElementById('bgMusic');
  if (!bgMusic) return;

  // 从 sessionStorage 读取播放位置和状态
  const musicTime = parseFloat(sessionStorage.getItem('music_time') || '0');
  const musicWasPlaying = sessionStorage.getItem('music_playing') === 'true';

  // 恢复播放位置和音量
  bgMusic.currentTime = musicTime;
  bgMusic.volume = 0.35;

  // 尝试自动播放（用户刚点击过卡片，浏览器会允许）
  if (musicWasPlaying !== false) {
    bgMusic.play().catch(err => {
      console.warn('详情页音乐自动播放被阻止：', err);
    });
  }

  // 用户点击详情页任意位置时，确保音乐在播放
  document.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
  }, { once: true });

  // 离开详情页前，保存当前播放位置和状态
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('music_time', bgMusic.currentTime);
    sessionStorage.setItem('music_playing', !bgMusic.paused);
  });

  // 页面隐藏（切后台）也保存
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      sessionStorage.setItem('music_time', bgMusic.currentTime);
      sessionStorage.setItem('music_playing', !bgMusic.paused);
    }
  });
})();