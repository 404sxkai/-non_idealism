# 비이상주의보

칼릭스 대륙 / 녹턴 아카데미를 배경으로 한 자캐 커뮤니티 사이트입니다.

## 폴더 구조

```
index.html      메인 홈
world.html      세계관 설정
school.html     학교 설정
members.html    인물 멤버란
notices.html    공지사항
css/style.css   공용 스타일
js/script.js    모바일 메뉴 & 멤버 필터 스크립트
```

## GitHub Pages로 배포하기

1. GitHub에서 새 저장소를 만듭니다 (예: `tenebra-archive`).
2. 이 폴더의 파일 전체를 저장소에 업로드(또는 `git push`)합니다.
3. 저장소 **Settings → Pages**로 이동합니다.
4. **Source**를 `Deploy from a branch`로 설정하고, 브랜치는 `main`,
   폴더는 `/ (root)`를 선택한 뒤 저장합니다.
5. 잠시 후 `https://사용자이름.github.io/저장소이름/` 주소로 접속하면
   사이트가 열립니다.

## 내용 수정하기

- 모든 텍스트는 각 `.html` 파일을 열어 직접 수정하면 됩니다.
- **인물 멤버란**: `members.html`의 `member-card` 블록 하나를
  복사해서 이름·소속·소개·태그를 바꾸면 캐릭터가 추가됩니다.
- **공지사항**: `notices.html`의 `notice-item` 블록을 복사해서
  날짜·태그·제목·내용을 바꾸면 새 공지가 추가됩니다.
- **색상/폰트**: `css/style.css` 맨 위 `:root` 안의 변수 값을 바꾸면
  전체 사이트의 색과 글꼴이 함께 바뀝니다.
- **세계관 이름(칼릭스 대륙, 녹턴 아카데미 등)**은 예시로 지어낸
  이름이니 자유롭게 바꿔서 사용하세요.
