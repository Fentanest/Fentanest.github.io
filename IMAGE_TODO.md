# 추가할 화면

## 반영 완료

- Worklazy Tools: 홈페이지, 엑셀 병합, 워드 일괄 생성.
- Word Compare: 변경사항 비교 보고서.
- 안전신문고 앱: 기존 공개 통계·지도 화면.
- 커뮤니티 지도: 광고·식별정보를 제거한 실제 화면.
- 크롬 확장: 통계·차량별·주소별 조회 세 창을 한 장으로 합성. 개인정보는 예시로 치환.
- 실무 대시보드: 개인·회사 식별정보를 삭제한 실제 업무 화면 5장.

## 추가할 이미지

아래 화면은 해당 페이지에 “화면 준비 중 · 추후 추가”로 표시합니다.

| 위치 | 필요한 이미지 | 넣을 자리 |
| --- | --- | --- |
| 안전신문고 앱 | 현행 `Demo 보기`의 목록·상세·통계 | `projects/safetyreport.html`의 기존 앱 화면 교체 또는 추가 |
| FolioTrace | 공시 원문·추출값·검증 상태 | `projects/data-tools.html#foliotrace` |
| Market Calendar | 월별 달력·휴장 근거 | `projects/data-tools.html#market-calendar` |
| MyTradingDesk + Backtest | 계좌정보 없는 조회·전략 편집·모의 실행 결과 | `projects/api-integration.html` |
| peti | 가상 TXT 입력과 엑셀 출력 | `projects/worklazy.html#peti` |

## 교체 기준

- 사람이름, 이메일, 주민·법인등록번호, 전화번호, 계좌번호 등 식별정보를 가립니다.
- 실무 화면의 회사·기관·은행·법인명, 상품 브랜드, 시트명 등 회사 식별정보도 가립니다.
- 식별정보 외의 표·수치·차트는 유지합니다.
- 현재 화면과 이전 화면을 캡션에서 구분합니다.
- `data-lightbox` 링크의 `href`와 내부 이미지의 `src`를 같은 파일로 지정합니다.
- 화면을 넣은 뒤 해당 페이지의 “준비 중” 표시와 이 목록을 수정합니다.
