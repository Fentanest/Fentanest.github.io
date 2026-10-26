# 최큰솔 포트폴리오

문서·엑셀 자동화, 데이터 수집·시각화, 문서 판독·데이터 정리, 업무 시스템 연동 사례를 소개하는 정적 웹사이트입니다.

## 페이지

| 파일 | 내용 |
| --- | --- |
| `index.html` | 제공 서비스 4개와 프로젝트 목록 |
| `career.html` | 금융 준법·품질관리 경력과 실무 제작 사례 |
| `projects/worklazy.html` | Worklazy Tools, Word Compare, ExcelMerger |
| `projects/safetyreport.html` | 안전신문고 앱·커뮤니티 지도·크롬 확장 |
| `projects/spreadsheets.html` | 실무 대시보드 5종 |
| `projects/data-tools.html` | FolioTrace, Market Calendar, MyTradingDesk, peti |

HTML·CSS·JavaScript로 구성했습니다. 설치·빌드 과정과 서버 프로그램은 없습니다. 이미지 확대 보기 외의 본문·이동 기능은 JavaScript 없이도 동작합니다.

## GitHub Pages 배포

사이트: https://fentanest.github.io/

저장소: https://github.com/Fentanest/Fentanest.github.io

`main` 브랜치 루트에서 배포합니다. 파일을 수정해 `main`에 반영하면 GitHub Pages가 갱신됩니다. `.nojekyll` 파일을 유지합니다.

## 내용 수정

- 문구: 각 HTML 파일을 직접 수정합니다.
- 스타일: `assets/site.css`, `assets/services.css`.
- 이미지 확대: `assets/site.js`.
- 이미지: `assets/` 아래에 두고 HTML의 `src`·`href`를 함께 변경합니다.
- 경력 업데이트: `career.html`의 재직기간과 기준 월을 함께 수정합니다.

추가할 화면은 [IMAGE_TODO.md](IMAGE_TODO.md), 사용한 이미지 목록과 출처는 [ASSET_SOURCES.md](ASSET_SOURCES.md)를 확인합니다.

## 공개 범위

- 지원서·이력서 원문, 개인 연락처, 등록번호, 계좌번호는 포함하지 않습니다.
- 비공개 프로젝트 소스나 운영 설정은 포함하지 않습니다.
- 기존 공개 앱 이미지는 캡처 시점 화면입니다. 현재 앱 Demo 화면으로 표기하지 않습니다.
- 프로젝트에 사용한 외부 라이브러리·엔진은 각 프로젝트의 출처와 라이선스를 따릅니다. 이 포트폴리오에 해당 소스를 복제하지 않습니다.

## 반영한 화면

서비스 4개, 프로젝트 상세, 경력 페이지를 구성했습니다. Worklazy Tools 공개 화면 3장과 Word Compare 결과, 안전신문고 앱 공개 화면 2장, 개인정보를 가린 실무 대시보드 5장을 반영했습니다.

커뮤니티 지도·크롬 확장 등 추가할 화면은 해당 페이지와 IMAGE_TODO.md에 표시했습니다.

GitHub Pages 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
