# Fentanest 포트폴리오

제공할 수 있는 작업을 5개 분야로 정리한 정적 포트폴리오입니다. 각 사례에 사용 기술, 처리 흐름, 배포 방식을 함께 적었습니다.

## 페이지

| 분야 | 페이지 | 사례 |
| --- | --- | --- |
| 문서·파일 자동화 | `projects/worklazy.html` | Worklazy Tools, Word Compare, ExcelMerger, peti, fines |
| 데이터 수집·ETL | `projects/data-tools.html` | FolioTrace, Market Calendar — 문서 수집·정규화·누적 저장 |
| 앱·웹 데이터 서비스 | `projects/safetyreport.html` | 안전신문고 앱·공유 데이터·커뮤니티 지도·크롬 확장 |
| 외부 API·실시간 연동 | `projects/api-integration.html` | MyTradingDesk, Backtest |
| 스프레드시트 대시보드 | `projects/spreadsheets.html` | 실무자용 엑셀 조회·집계 화면 5종 |

`index.html`은 분야와 프로젝트 목록, `career.html`은 금융 준법·품질관리 경력과 실무 제작 사례를 담았습니다. `projects/fines.html`에는 금감원 보고서 자동 작성기의 입력·집계 구조와 실행 화면을 따로 정리했습니다.

HTML·CSS·JavaScript로 구성했습니다. 설치·빌드 과정과 서버 프로그램은 없습니다. 이미지 확대 보기 외의 본문·이동 기능은 JavaScript 없이도 동작합니다.

## GitHub Pages 배포

사이트: https://fentanest.github.io/

저장소: https://github.com/Fentanest/Fentanest.github.io

`main` 브랜치 루트에서 배포합니다. 파일을 수정해 `main`에 반영하면 GitHub Pages가 갱신됩니다. `.nojekyll` 파일을 유지합니다.

배포가 성공하면 `cleanup-pages-artifacts.yml`이 완료된 `deploy` 작업을 확인하고 해당 실행의 `github-pages` 아티팩트를 삭제합니다.

## 내용 수정

- 문구: 각 HTML 파일을 직접 수정합니다.
- 스타일: `assets/site.css`, `assets/services.css`, `assets/technical.css`. fines 상세 화면은 `assets/fines.css`.
- 이미지 확대: `assets/site.js`.
- 이미지: `assets/` 아래에 두고 HTML의 `src`·`href`를 함께 변경합니다.
- 경력 업데이트: `career.html`의 재직기간과 기준 월을 함께 수정합니다.

추가할 화면은 [IMAGE_TODO.md](IMAGE_TODO.md), 사용한 이미지 목록과 출처는 [ASSET_SOURCES.md](ASSET_SOURCES.md)를 확인합니다.

## 공개 범위

- 실명 대신 Fentanest를 사용합니다. 지원서·이력서 원문과 개인 연락처는 포함하지 않습니다.
- 실무 대시보드는 개인·회사 식별정보를 삭제한 화면만 사용합니다.
- 비공개 프로젝트 소스나 운영 설정은 포함하지 않습니다.
- 기존 공개 앱 이미지는 캡처 시점 화면입니다. 현재 앱 Demo 화면으로 표기하지 않습니다.
- 프로젝트에 사용한 외부 라이브러리·엔진은 각 프로젝트의 출처와 라이선스를 따릅니다. 이 포트폴리오에 해당 소스를 복제하지 않습니다.

## 반영한 화면

Worklazy Tools 공개 화면 3장, FolioTrace·Market Calendar 실제 서비스 화면 각 2장, Word Compare 결과, 안전신문고 앱 공개 화면 2장, 커뮤니티 지도와 크롬 확장 합성 화면, 개인·회사 식별정보를 삭제한 실무 대시보드 5장을 반영했습니다.

FolioTrace는 공개 보유 추정 현황과 종목별 공시 이력, Market Calendar는 국내 월간 달력과 미국 거래시간·공식 공지 화면을 넣었습니다. 2026-10-29에 worklazy.net에서 직접 촬영했으며, 필요한 화면 영역만 잘라 수치와 표시는 유지했습니다.

커뮤니티 지도는 광고·로그인 ID를 제거하고 차량 표기를 예시로 바꿨습니다. 크롬 확장은 통계창과 차량별·주소별 조회창이 한 화면에 보이도록 합성했습니다. 사용자명·담당자명·차량번호·신고번호·상세 주소를 예시로 바꾼 이미지를 사용했습니다. 각 창의 수치와 표시 내용은 유지했습니다.

fines는 런처, Google 연동 설정, 원천자료 업로드, 보고서 결과 2종을 반영했습니다. 서비스명·회사명은 fines로 바꾸고, 등록번호는 삭제하고, 개인명·상품명·문서 ID·인증 파일 경로는 예시로 치환했습니다. 화면 크기와 표의 수치·날짜는 유지했습니다.

추가할 화면은 해당 페이지와 IMAGE_TODO.md에 표시했습니다.

GitHub Pages 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
