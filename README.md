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

개인 홈페이지 주소로 사용하려면 `Fentanest.github.io` 저장소에 이 폴더의 내용을 올립니다. 기존 다른 저장소는 변경하지 않습니다.

1. GitHub에서 새 공개 저장소 `Fentanest.github.io`를 만듭니다.
2. 이 폴더의 파일을 `main` 브랜치 루트에 올립니다.
3. **Settings → Pages → Build and deployment**에서 **Deploy from a branch**를 선택합니다.
4. `main` / `/(root)`를 선택하고 저장합니다.
5. 배포 완료 후 Pages 화면에 표시된 주소를 확인합니다.

다른 저장소 이름으로 배포해도 상대 경로를 사용하므로 동작합니다. `.nojekyll` 파일을 유지합니다.

## 내용 수정

- 문구: 각 HTML 파일을 직접 수정합니다.
- 스타일: `assets/site.css`, `assets/services.css`.
- 이미지 확대: `assets/site.js`.
- 이미지: `assets/` 아래에 두고 HTML의 `src`·`href`를 함께 변경합니다.
- 경력 업데이트: `career.html`의 재직기간과 기준 월을 함께 수정합니다.

이미지 교체 목록은 [IMAGE_TODO.md](IMAGE_TODO.md), 공개 이미지 출처는 [ASSET_SOURCES.md](ASSET_SOURCES.md)를 확인합니다.

## 공개 범위

- 지원서·이력서 원문, 개인 연락처, 등록번호, 계좌번호는 포함하지 않습니다.
- 비공개 프로젝트 소스나 운영 설정은 포함하지 않습니다.
- 기존 공개 앱 이미지는 캡처 시점 화면입니다. 현재 앱 Demo 화면으로 표기하지 않습니다.
- 프로젝트에 사용한 외부 라이브러리·엔진은 각 프로젝트의 출처와 라이선스를 따릅니다. 이 포트폴리오에 해당 소스를 복제하지 않습니다.

## 현재 준비 상태

사이트 구조·경력·공개 프로젝트 화면은 준비했습니다. 실무 대시보드 5장은 원본을 공개하지 않고 개인정보 삭제본을 추가할 자리를 마련했습니다. 

GitHub Pages 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
