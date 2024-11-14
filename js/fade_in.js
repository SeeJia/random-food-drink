// 获取section元素
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');

// 创建 IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当 section 进入视口时，添加动画类
      entry.target.classList.add('fade-in-left');
      observer.unobserve(entry.target);  // 停止观察
    }
  });
}, {
  threshold: 0.5 // 触发动画的阈值（50% 可见时触发）
});

const observer2 = new IntersectionObserver((entries, observer2) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当 section 进入视口时，添加动画类
      entry.target.classList.add('fade-in-right');
      observer2.unobserve(entry.target);  // 停止观察
    }
  });
}, {
  threshold: 0.5 // 触发动画的阈值（50% 可见时触发）
});

const observer3 = new IntersectionObserver((entries, observer3) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当 section 进入视口时，添加动画类
      entry.target.classList.add('fade-in-left');
      observer3.unobserve(entry.target);  // 停止观察
    }
  });
}, {
  threshold: 0.5 // 触发动画的阈值（50% 可见时触发）
});

const observer4 = new IntersectionObserver((entries, observer4) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当 section 进入视口时，添加动画类
      entry.target.classList.add('fade-in-right');
      observer4.unobserve(entry.target);  // 停止观察
    }
  });
}, {
  threshold: 0.5 // 触发动画的阈值（50% 可见时触发）
});

const observer5 = new IntersectionObserver((entries, observer5) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当 section 进入视口时，添加动画类
      entry.target.classList.add('fade-in-left');
      observer5.unobserve(entry.target);  // 停止观察
    }
  });
}, {
  threshold: 0.5 // 触发动画的阈值（50% 可见时触发）
});

// 观察 section 元素
observer.observe(section1);
observer2.observe(section2);
observer3.observe(section3);
observer4.observe(section4);
observer5.observe(section5);