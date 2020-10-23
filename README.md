# Frame-Frontend-Main

## Explain

Frame 메인 클라이언트입니다.

## Git commit Convention

### 1. 기본적으로 commit message는 아래와 같이 제목, 내용으로 구성한다.

```
[type]: [issue(pr) number] [content]
```

### 2. commit type

- CREATE: 새로운 파일, 폴더 추가
- ADD: 새로운 기능 추가
- UPDATE: 버그 수정
- DOCS: 문서 수정
- STYLE: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- REFACTOR: 코드 리팩토링
- TEST: 테스트 코드, 리팩토링 테스트 코드 추가
- CHORE: 빌드 업무 수정, 패키지 매니저 수정

### 3. content

- 내용은 60자를 넘기지 않는다.
- 무엇을 했는지를 기록한다.
- 과거시제를 사용하지 않고 명령어로 작성한다.
  - Fixed -> Fix
  - Added -> Add

### 4. issue(pr) number [optional]

- 이슈 또는 Pr에 관한 번호를 적는다
- 예시 : #1
- 보통 이슈해결 (Bug, Enhancement etc..)에 관해서만 Optional하게 사용한다

## Skills

### 언어(Language)

- JavaScript

### 프레임워크(Framework)

- Vue.js

### Gitflow

1. 자신의 Pull Request는 스스로 merge 합니다.
2. 머지가 완료된 feature 브랜치는 머지와 동시에 삭제합니다.

- main(master) : 제품으로 출시될 수 있는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

### Branch Naming Convention

```
[관련 기능]-[제작 상세]

[관련 기능] 또는 [제작 상세]에서 띄어쓰기는 '_(언더바)'로 구분한다.

ex) login-ui
ex) login-server_communication
ex) login-middleware
ex) login-plugin
```
## Project setup
```
yarn install ssds
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
