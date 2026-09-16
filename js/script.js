// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.menu-btn');
  var sidebar = document.querySelector('.sidebar');
  var closeBtn = document.querySelector('.sidebar-close');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('open');
      });
    }

    sidebar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        sidebar.classList.remove('open');
      });
    });
  }

  // 학교 설정 문서 목차 (스크롤 시 현재 위치 강조)
  var tocLinks = document.querySelectorAll('.wiki-toc a');
  var tocTargets = document.querySelectorAll('.wiki-article [id]');

  if (tocLinks.length && tocTargets.length && 'IntersectionObserver' in window) {
    var tocObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        tocLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-30% 0px -55% 0px' });

    tocTargets.forEach(function (target) { tocObserver.observe(target); });
  }

  // 학생기록부 필터 (NPC / 2학년 그룹 단위)
  var filterBtns = document.querySelectorAll('.filter-btn');
  var memberGroups = document.querySelectorAll('.member-group');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var target = btn.getAttribute('data-filter');

      memberGroups.forEach(function (group) {
        if (target === 'all' || group.getAttribute('data-group') === target) {
          group.style.display = '';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
});
