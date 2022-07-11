# 제대로-파는-html-css

https://www.inflearn.com/course/%EC%A0%9C%EB%8C%80%EB%A1%9C-%ED%8C%8C%EB%8A%94-html-css

# note

강의홈 : https://www.yalco.kr/lectures/html-css/

# 온라인 에디터

JSFiddle : https://jsfiddle.net/

CodePen : https://codepen.io/
 
HTML CSS JavaScript : https://html-css-js.com/

# Section 0. 인트로

# Section 1. <갖다 놓는> HTML

## 제목과 본문

! + `Tab` : HTML 기본틀 생성

## 종류와 중요도에 따른 태그

### strong 태그 vs. em 태그 비교

https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong#%3Cem%3E_vs._%3Cstrong%3E

strong : 중요한 내용

em : 강세

### 첨자 태그

sup : 지수, 서수

sub : 각주, 변수, 화학식

### 밑줄 태그와 취소선 태그

u : 철자 오류 표시

s : 더 이상 유효하지 않은 정보 표시

### 인용된 콘텐츠

문자 entity name 목록 보기 : https://html.spec.whatwg.org/multipage/named-characters.html

blockquote : 비교적 긴 인용문에 사용

cite : 저작물의 출처 표기, 속성/태그 둘 다 사용가능

q : 비교적 짧은 인용문에 사용

mark : 인용문 중 하이라이트 또는 사용자 행동과 연관된 곳 표시

abbr : 준말/머릿글자 표시

```html
<p>
  <strong>abbr</strong> 태그를 사용하여<abbr title="HyperText Markup Language">HTML</abbr>을 표기한 문단입니다. 소스 보기로 코드륵 확인해부세요!
</p>
```

### ul, ol, li

웹 상에서 나열되는 모든 요소들을 표현

ul : unordered list

ol : ordered list

li : 목록 아이템, ul, ol 의 1촌 자식은 오직 li 만 가능

### dl, dt, dd

dt 와 dd 는 n:n 관계가 가능

dt : 용어

dd : 정의

### 이미지 넣기

```html
<img src="(이미지 파일 경로)" alt="(대체 텍스트)" title="(툴팁 텍스트)">
```

- src : 원본파일 경로, 절대경로 또는 상대경로 
- alt : 대체 텍스트	스크린 리더, 원본파일 무효시 
- title : 툴팁	alt의 대체제나 반복이 되어서는 안됨 
- width :	너비	픽셀 단위의 정수 
- height : 높이	픽셀 단위의 정수

### 무료 이미지 사이트

Pixabay : https://pixabay.com/

Unsplash : https://unsplash.com/

### 맵 기능

```html
<img src="./map.png" alt="맵" usemap="#image-map">
  <map name="image-map">
    <area target="_blank" alt="Google" title="Google" href="https://www.google.com" coords="141,140,96" shape="circle">
    <area target="_blank" alt="Apple" title="Apple" href="https://www.apple.com" coords="332,50,510,227" shape="rect">
    <area target="_blank" alt="Microsoft" title="Microsoft" href="https://www.microsoft.com" coords="650,51,598,139,650,229,751,228,802,141,753,52" shape="poly">
  </map>
```

오늘날에는 잘 사용되지 않음

이미지 맵 생성사이트 : https://www.image-map.net/