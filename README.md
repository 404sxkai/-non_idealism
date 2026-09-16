# 비이상주의보

직성고등학교를 배경으로 한 자캐 커뮤니티 사이트입니다.

## 폴더 구조

```
index.html      01 홈 (커버 페이지, 사이드바 없음)
world.html      02 이상주의
school.html     03 직성고등학교 (위키 형식)
members.html    04 학생기록부
notices.html    05 안내사항
css/style.css   공용 스타일
js/script.js    모바일 메뉴 & 목차 강조 & 학생기록부 필터 스크립트
```

## GitHub Pages로 배포하기

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더의 파일 전체를 저장소에 업로드(또는 `git push`)합니다.
3. 저장소 **Settings → Pages**로 이동합니다.
4. **Source**를 `Deploy from a branch`로 설정하고, 브랜치는 `main`,
   폴더는 `/ (root)`를 선택한 뒤 저장합니다.
5. 잠시 후 `https://사용자이름.github.io/저장소이름/` 주소로 접속하면
   사이트가 열립니다.

## 내용 수정하기

- **색상**: `css/style.css` 맨 위 `:root` 안의 변수 값을 바꾸면 전체
  사이트의 색이 함께 바뀝니다.
- **01 홈 배경 이미지**: `index.html`의 `.cover-bg-placeholder` div를
  지우고, 주석 처리된 `<img src="assets/home-bg.jpg" ...>` 줄의 주석을
  해제한 뒤 실제 이미지 경로로 바꿔주세요. 데스크탑에서는 화면을 꽉
  채우고(`cover`), 모바일에서는 비율을 유지한 채 축소됩니다(`contain`).
- **학생기록부(04)**: `members.html`에서 `member-card` 블록을 복사해
  `member-photo-placeholder` div를 `<img src="..." alt="이름">`으로
  바꾸고, 한글/한자 이름을 입력하면 캐릭터가 추가됩니다. NPC인지
  2학년인지에 따라 알맞은 `member-group` 블록에 넣어주세요.
- **안내사항(05)**: `notices.html`의 `notice-item` 블록을 복사해
  순번, 태그, 제목, 내용을 바꾸면 새 공지가 추가됩니다.
