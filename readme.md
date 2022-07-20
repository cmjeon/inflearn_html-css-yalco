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

## strong 태그 vs. em 태그 비교

https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong#%3Cem%3E_vs._%3Cstrong%3E

strong : 중요한 내용

em : 강세

## 첨자 태그

sup : 지수, 서수

sub : 각주, 변수, 화학식

## 밑줄 태그와 취소선 태그

u : 철자 오류 표시

s : 더 이상 유효하지 않은 정보 표시

## 인용된 콘텐츠

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

## ul, ol, li

웹 상에서 나열되는 모든 요소들을 표현

ul : unordered list

ol : ordered list

li : 목록 아이템, ul, ol 의 1촌 자식은 오직 li 만 가능

## dl, dt, dd

dt 와 dd 는 n:n 관계가 가능

dt : 용어

dd : 정의

## 이미지 넣기

```html
<img src="(이미지 파일 경로)" alt="(대체 텍스트)" title="(툴팁 텍스트)">
```

- src : 원본파일 경로, 절대경로 또는 상대경로 
- alt : 대체 텍스트	스크린 리더, 원본파일 무효시 
- title : 툴팁	alt의 대체제나 반복이 되어서는 안됨 
- width :	너비	픽셀 단위의 정수 
- height : 높이	픽셀 단위의 정수

## 무료 이미지 사이트

Pixabay : https://pixabay.com/

Unsplash : https://unsplash.com/

## 맵 기능

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

## 테이블

<h3>⚠️ <code>&lt;table&gt;</code>은 <strong>표</strong> 용도로만 사용할 것! - <em><s>레이아웃</s></em></h3>

- `<table>` : 테이블	
- `<caption>` : 표 설명 또는 제목	선택사항
- `<tr>` : 테이블의 행	
- `<td>` : 테이블의 데이터 셀
- `<thead>`	: 테이블의 헤더 부분, tbody : 앞에 와야 함
- `<tbody>`	: 테이블의 본문 본 내용을 담음
- `<tfoot>` :	테이블의 푸터 부분
- `<tbody>` : 뒤에 와야 함
- `<th>` : 열 또는 행의 헤더	scope 속성으로 row, col 중 선택
- colspan : 열 병합
- rowspan : 행 병합
- `<colgroup>` : 표에 열을 묶어서 속성 부여, <caption>보다 뒤, 그 외 요소보다 앞에 와야 함
- `<col>` : 열의 묶음, span 속성으로 열 수 지정

## 링크

자막 달기 : https://www.easy-subtitle.com/

target 속성값

- _self : 현재 창	기본
- _blank : 새 창, 텍스트나 내부 이미지의 alt 등으로 명시 필요
- _parent : 부모 프레임, `<iframe>` 사용시
- _top : 최상위 프레임, `<iframe>` 사용시

## address

```html
<h1>Contacts</h1>
<address>
  웹사이트 주소: <a href="https://www.yalco.kr">yalco.kr</a> <br>
  오피스: 전산시 개발구 코딩동 123번길 45 <br>
  전화 <a href="tel:010-1234-5678">010-1234-5678</a> <br>
  이메일: <a href="mailto:yalco@kakao.com">yalco@kakao.com</a>
</address>
```

## 입력받기

`id` 는 페이지마다 고유한 속성이어야 함

<table>
  <thead>
    <tr>
      <th align="left">태그</th>
      <th align="left">설명</th>
      <th align="left">비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left"><code>&lt;form&gt;</code></td>
      <td align="left">정보를 제출하기 위한 태그들을 포함</td>
      <td align="left"><code>autocomplete</code> 속성: 자동완성 여부 (기본: <code>on</code>)</td>
    </tr>
    <tr>
      <td align="left"><code>&lt;input&gt;</code></td>
      <td align="left">입력을 받는 요소</td>
      <td align="left"><code>type</code> 속성을 통해 다양화</td>
    </tr>
    <tr>
      <td align="left"><code>&lt;label&gt;</code></td>
      <td align="left">인풋 요소마다의 라벨</td>
      <td align="left"><code>for</code> 속성값을 인풋 요소의 <code>id</code>와 연결. 인풋의 <strong>클릭 영역 확장</strong></td>
    </tr>
    <tr>
      <td align="left"><code>&lt;button&gt;</code></td>
      <td align="left">버튼</td>
      <td align="left"><code>type</code> 속성에 <code>submit</code>(제출), <code>reset</code>(초기화), <code>button</code>(기본 동작 없음)</td>
    </tr>
    <tr>
      <td align="left"><code>&lt;fieldset&gt;</code></td>
      <td align="left">폼 태그 내 입력요소와 라벨들을 그룹화</td>
      <td align="left"><code>disabled</code> 속성: 포함된 입력요소 비활성화</td>
    </tr>
    <tr>
      <td align="left"><code>&lt;legend&gt;</code></td>
      <td align="left">필드셋 요소의 제목 또는 설명</td>
      <td align="left"></td>
    </tr>
  </tbody>
</table>

## input

input : https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input

## 시간 관련 타입

<p>👉
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local" target="_blank">datetime-local</a>,
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month" target="_blank">month</a>,
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time" target="_blank">time</a>,
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week" target="_blank">week</a>
</p>

## datalist

select 와 유사한데, 입력도 받을 수 있음

```html
<datalist id="jobs">
  <option value="학생"></option>
  <option value="디자이너"></option>
  <option value="퍼블리셔"></option>
  <option value="개발자"></option>
</datalist>
```

## pre

HTML 내에 입력한 그대로 보이는 태그, ASCII art 사용 시 등에 사용

## div, span

# Section 2. <꾸미는> CSS

```css
/* 모든 요소 선택 */
* {
  font-weight: bold;
  color: darkorange;
}

/* 같은 선택자의 경우 뒤에 오는 것이 우선순위 높음 */
* {
  color: plum;
}

/* 태그 선택자 */
p {
  color: olivedrab;
}

/* class 선택자 */
/* 태그보다 우선순위 높음 */
/* 페이지상의 여러 요소가 같은 class를 가질 수 있음 */
.blue {
  color: lightblue;
}

/* 다른 선택자에 이어붙일 수 있음(태그, 클래스 등...) */
/* 선택자는 구체적일수록 우선순위 높음 */
p.blue {
  color: slateblue;
}

.blue.dark {
  color: mediumblue;
}

p.blue.dark {
  color: darkblue;
}

/* id 선택자 */
/* class보다 우선순위 높음 */
/* id는 페이지상에서 요소마다 고유해야 함 */
#red {
  color: tomato;
}

/* 그룹 선택자 */
span, .dark, #red {
  text-decoration: underline;
}
```

```css
/* 자손 결합자 */
.outer li {
    color: olivedrab;
}

/* 자식(1촌 자손) 결합자 */
.outer > li {
    color: dodgerblue;
}

.outer > li li {
    text-decoration: underline;
}

/* 뒤따르는 모든 동생들 결합자 */
.starter ~ li {
    font-style: italic;
}

/* 뒤따르는 바로 다음 동생 결합자 */
.starter + li {
    font-weight: bold;
}

/* 첫 번째, 마지막 요소 가상 클래스 */
ol li:first-child,
ol li:last-child {
    color: yellowgreen;
}

/* ~가 아닌 요소 가상 클래스 */
.outer > li:not(:last-child) {
    text-decoration: line-through;
}

ul:not(.outer) li {
    font-weight: bold;
}

/* ~번째 요소 가상 클래스 */
/* #, #n, #n+#, odd, even 등 시도해보기 */
ol li:nth-child(3) {
    font-weight: bold;
    color: deeppink;
}

/* 마우스오버 가상 클래스 */
li:hover {
    font-weight: bold;
    color: blue;
}
```

https://flukeout.github.io/

## font-size

px는 절대값으로서 픽셀 단위입니다.

100%는 1em으로, 이들은 부모 요소와의 상대적 크기를 나타내죠.

rem은 html 요소와의 상대적 크기를 가지므로, 요소의 중첩에 영향을 받지 않습니다.

pt는 1인치/72로, 프린트할 컨텐츠에 사용됩니다.

## color

https://developer.mozilla.org/ko/docs/Web/CSS/color_value

https://www.google.com/search?q=color+picker&oq=color+picker&aqs=chrome..69i57.144j0j4&sourceid=chrome&ie=UTF-8

## 인라인요소와 블록요소

|                      | inline           | block | inline-block |
|----------------------|------------------|---------------|--------------|
| 기본 너비                | 컨텐츠만큼            | 부모의 너비만큼      | 컨텐츠만큼        |
| width, height 속성     | 무시               | 적용            | 적용           |
| 가로공간 차지              | 공유               | 독점            | 공유           |
| margin 속성 ( 바깥쪽 여백 ) | 가로만 적용           | 모두 적용 (상하 상쇄) | 모두 적용        |
| adding 속성 ( 안쪽 여백 )  | 가로만 적용, 세로는 배경색만 | 모두적용          | 모두 적용        |

## border

맨 마지막줄 제외한 border-bottom 지정

```html
<ul>
  <li>ul 아이템 1</li>
  <li>ul 아이템 2</li>
  <li>ul 아이템 3</li>
  <li>ul 아이템 4</li>
  <li>ul 아이템 5</li>
</ul>
```

```css
ul > li:not(:last-child) {
  border-bottom : solid 1px black;
}
```

## positon

https://www.yalco.kr/@html-css/2-9/

static은 기본값으로, 전적으로 페이지의 흐름을 따르며 top, bottom, left, right, z-index 속성의 영향을 받지 않습니다.

static 으로 선언되면 자식요소의 기준이 될 수 없습니다.

relative 값은 원래 위치를 기준으로 top~right 속성값이 적용되도록 합니다.

요소의 위치는 이동하지만 요소가 차지하는 공백의 위치는 유지됩니다.

absolute 값은 static이 아닌 첫 부모 요소를 기준으로 top~right을 사용하여 위치를 조정할 수 있습니다.

요소는 페이지의 문서 흐름에서 벗어나, 자리를 차지하지 않게 됩니다.(위의 바깥쪽 div는 포지션이 relative로 되어 있습니다.)

fixed는 부모 요소가 아닌 viewport를 기준으로 위치를 지정합니다.

스크롤에 영향을 받지 않으므로, 다이얼로그 팝업처럼 움직이지 않는 요소들에 유용하게 사용될 수 있습니다.

sticky는 요소가 스크롤로 이동할 수 있는 공간을 top~right 속성으로 제한할 수 있습니다.

## flex layout

https://www.yalco.kr/@html-css/2-11/

display를 flex로 지정하면 플렉스 방식으로 자식 요소들을 배치하게 됩니다.

inline-flex는 해당 컨테니어 요소를 인라인으로 만든다는 차이가 있습니다.

flex-direction은 내부 요소(아이템)들을 어느 축(가로 또는 세로)을 이 값에 따라 justify-content, align-items, align-content 등의 속성들이 작용할 방향이 결정됩니다.

flex-wrap은 내부 요소의 갯수 X 길이가 컨테이너를 넘어갈 때 이들을 여러 줄에 걸쳐 나열할지 여부를 정합니다.

justify-content는 메인 축에서 아이템들을 정렬할 방식을 정합니다.

flex-start(end)는 row(column)-reverse의 영향을 받는다는 점에서 start(end)와 다릅니다. flex-가 붙은 것을 사용하세요.

align-items는 수직 축(메인 축의 반대)에서 아이템들을 정렬할 방식을 정합니다. 

wrap으로 아이템이 여러 줄이 되면 align-content를 사용해서 보다 다양한 방식으로 정렬할 수 있습니다.

gap 속성으로는 아이템간에 간격을 줄 수 있으며 두 개의 값을 넣어서 가로 간격과 세로 간격을 다르게 지정하는 것도 가능합니다.

# Section 3. HTML 더 깊이 알아보기

## 상단의 태그들

https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML

## 모두가 이용할 수 있는 웹사이트

https://nuli.navercorp.com/

눈에는 안보이지만 스크린리더에서는 보이도록 할 수 있음

```html
<img src="./sr-only.png" alt="">
<p class="sr-only">
  노트북으로 뭔가 공부하고 있는 아이의 독백: 코딩을 배우면 아마 굶지는 않을거랬어.
</p>

<dl>
  <dt class="sr-only">분야</dt>
  <dd>프로그래밍</dd>
  <dt class="sr-only">종류</dt>
  <dd>스티커</dd>
  <dt class="sr-only">디자이너</dt>
  <dd>얄코</dd>
  <dt class="sr-only">제작년도</dt>
  <dd>2021</dd>
</dl>
```

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

페이지네이션 처리

```html
<div class="page-buttons">
  <button aria-label="이전 페이지로">◀</button>
  <button aria-label="1번째 페이지로 (현재 페이지)" class="current">1</button>
  <button aria-label="2번째 페이지로">2</button>
  <button aria-label="3번째 페이지로">3</button>
  <button aria-label="4번째 페이지로">4</button>
  <button aria-label="5번째 페이지로">5</button>
  <button aria-label="다음 페이지로">▶</button>
</div>
```

눈에는 보이지만 스크린리더에 감추기 role, aria-label

```html
<div class="example">
  <span aria-hidden="true">😀</span> 반갑습니다!
</div>
<p>
  이모지나 SVG 요소 등을 스크린 리더에게만 감추고 싶다면 <br>
  <strong>aria-hidden</strong> 속성을 <em>true</em>로 만들어줍니다.
</p>

<br>

<div class="example">
  I <span role="img" aria-label="love">❤️</span> CODING!
</div>
<p>
  특정 정보를 나타내는 이모지나 SVG 요소 등을 <br>
  스크린 리더가 특정 텍스트로 읽도록 하려면 <br>
  <strong>role</strong> 속성으로 이미지임을 명시하고 <br>
  <strong>aria-label</strong> 속성에 값을 넣습니다.
</p>
```

figure, figcaption

```html
  <figure>
    <img src="./sr-only.png" alt="">
    <figcaption class="sr-only">
      노트북으로 뭔가 공부하고 있는 아이의 독백: 코딩을 배우면 아마 굶지는 않을거랬어.
    </figcaption>
  </figure>

  <br>

  <figure>
    <pre>
    ,d888a                          ,d88888888888ba.  ,88"I)   d
  a88']8i                         a88".8"8)   `"8888:88  " _a8'
.d8P' PP                        .d8P'.8  d)      "8:88:baad8P'
,d8P' ,ama,   .aa,  .ama.g ,mmm  d8P' 8  .8'        88):888P'
,d88' d8[ "8..a8"88 ,8I"88[ I88' d88   ]IaI"        d8[         
a88' dP "bm8mP8'(8'.8I  8[      d88'    `"         .88          
,88I ]8'  .d'.8     88' ,8' I[  ,88P ,ama    ,ama,  d8[  .ama.g
[88' I8, .d' ]8,  ,88B ,d8 aI   (88',88"8)  d8[ "8. 88 ,8I"88[
]88  `888P'  `8888" "88P"8m"    I88 88[ 8[ dP "bm8m88[.8I  8[
]88,          _,,aaaaaa,_       I88 8"  8 ]P'  .d' 88 88' ,8' I[
`888a,.  ,aadd88888888888bma.   )88,  ,]I I8, .d' )88a8B ,d8 aI
"888888PP"'        `8""""""8   "888PP'  `888P'  `88P"88P"8m"
    </pre>
    <figcaption class="sr-only">
      코카콜라 로고를 표현한 아스키 아트
    </figcaption>
  </figure>
```

웹 접근성 직군별 교육 : https://nuli.navercorp.com/education

## 용도에 따른 태그 사용하기

https://www.yalco.kr/@html-css-scoop/3-3/

시맨틱 태그가 무엇인가요?

- HTML5의 여러 태그들은 그 자체로 어떤 의미를 지닙니다.

이번 시간에 배울, 왼쪽 사이드바에 나열된 태그들은 기능적으로는 div 태그와 동일하지만 각각의 종류 자체가 페이지에서 해당 요소가 갖는 의미와 역할을 나타내죠.

## 가독성을 위한 이름 짓기

BEM : Block Element Modifier

https://en.bem.info/

https://9elements.com/bem-cheat-sheet/

class 명의 부적절한 사례

```css
.card { /* ... */ }
.card .thumb { /* ... */ }
.card .thumb .image { /* ... */ }
.card .body .title { /* ... */ }
.card .body .list { /* ... */ }
.card .body .list .list-item { /* ... */ }
.card .body .list .list-item.special { /* ... */ }
```

BEM 으로 class 를 명명한 사례

```css
.card { /* ... */ }
.card__thumb { /* ... */ }
.card__image { /* ... */ }
.card__title { /* ... */ }
.card__list { /* ... */ }
.card__list-item { /* ... */ }
.card__list-item--special { /* ... */ }
```

Block 의 크기를 정의하는 것이 중요함

## 기타 미디어

https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg

https://www.shapedivider.app/

https://app.haikei.app/

# CSS 더 깊이 알아보기

## 반복, 공통되는 스타일 

다른 css 파일 import 하기

```css
@import url(./shared.css);
```

CSS 변수 선언하기

```css
/* 특정 요소에서만 사용될 수 있는 변수 */
u {
  --not-good: wavy underline orange;
  --wrong: wavy underline red;
}
.wrong {
  --warn: yellow;
}

/* 모든 요소들에서 사용될 수 있는 변수 */
:root {
  --font-small: 8px;
  --font-normal: 16px;
  --font-large: 24px;
  --font-x-large: 32px;
  --font-xx-large: 40px;
  --font-xxx-large: 48px;

  --font-w-normal: 400;
  --font-w-bold: 600;
  --font-w-extrabold: 900;

  --color-main: #FF4200;
  --color-sub: #865A55;
  --color-text: #49281C;
}
```

변수 사용하기

```css
@import url(./common.css);

body {
  margin: 0;
  padding: 24px;
}

.not-good {
  text-decoration: var(--not-good);
}
.wrong {
  text-decoration: var(--wrong);
}

/* 스코프에 지정된 변수가 없을 경우 대안 값을 넣을 수도 있습니다. */
u {
  background-color: var(--warn, lightblue);
}

h1 {
  font-size: var(--font-x-large);
}
p {
  font-size: var(--font-large);
  color: var(--color-text);
}
```

컬러 조합 사이트

https://mycolor.space/

http://paletton.com/

https://colorhunt.co/

https://gradienthunt.com/

## 선택자 심화

### 특성 선택자

```css
/* 속성 값을 기준으로 선택 */
a[href="https://www.yalco.kr"] {
  color: #ff4e00;
  font-weight: bold;
}

/* 특정 속성이 있는 요소 선택 */
input[disabled]+label {
  color: lightgray;
  text-decoration: line-through;
}

/* 속성값이 특정 텍스트를 포함하는 요소 */
span[class*="item"] {
  text-decoration: underline;
}

/* 속성값이 특정 텍스트로 시작하는 요소 */
span[class^="fruit"] {
  color: tomato;
}
span[class^="vege"] {
  color: olivedrab;
}

/* 속성값이 특정 텍스트로 끝나는 요소 */
span[class$="-1"] {
  font-weight: bold;
}
```

특성 선택자 https://developer.mozilla.org/ko/docs/Web/CSS/Attribute_selectors

### 가상 클래스 1

```css
/* 마우스오버 */
a:hover {
  background-color: yellow;
}
/* 클릭중 */
a:active {
  background-color: aqua;
}

/* 체크된 것 */
input[type=radio]:checked+label {
  color: tomato;
  font-weight: bold;
}
/* 활성화된 것 */
input[type=radio]:enabled+label {
  text-decoration: underline;
}
/* 비활성화된 것 */
input[type=radio]:disabled+label {
  color: lightgray;
  text-decoration: line-through;
}
```

### 가상 클래스 2

```css
/* 인풋 등이 클릭되어 포커스된(입력을 받는) 상태 */
input[type="text"]:focus {
  /* border 밖의 선 (박스 요소가 아님) */
  outline: 2px solid dodgerblue;
}
/* 필수 입력요소 */
input:required {
  border-color: orangered;
}
/* 값이 유효한 입력요소 */
input[type="email"]:valid {
  border-color: green;
}
/* 값이 무효한 입력요소 */
input[type="email"]:not(:valid) {
  border-color: purple;
}

[class*="focus"]:focus {
  outline: 2px solid deeppink;
}
.tab-focus:focus,
.no-focus:focus {
  outline: none;
}
/* 탭으로 포커스된 요소에 적용 */
/* 브라우저 지원 확인 */
[class*="tab-focus"]:focus-visible {
  outline: 2px solid dodgerblue;
}
```

### 가상 클래스 3

```css
/* 부모 요소 내 첫 번째 ~요소 */
b:first-of-type {
  text-decoration: overline;
}
/* 부모 요소 내 마지막 ~요소 */
i:last-of-type {
  text-decoration: line-through;
}
/* 부모 요소 내 N번째 ~요소 */
b:nth-of-type(2) {
  text-decoration: underline;
}

/* 부모 요소 내 유일한 ~요소 */
div :only-of-type {
  text-decoration: overline line-through underline;
}
/* 부모 요소 내 종류 무관 유일한 요소 (독자) */
div :only-child {
  text-decoration: wavy underline tomato;
}
```

의사 클래스 https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes

### 가상 요소

```css
li.later::after {
  content: '다음 강좌';
  margin-left: 0.6em;
  padding: 0.16em 0.36em;
  font-size: 0.72em;
  font-weight: bold;
  color: white;
  background-color: darkmagenta;
  border-radius: 0.2em;
}

/* 바로 앞에 가상의 요소 추가 */
li::before {
  content: '';
  display: inline-block;
  margin: 0 0.4em;
  width: 0.8em;
  height: 0.8em;
  background-image: url(./check.png);
  background-size: contain;
}

/* 선택 영역 가상 요소 */
.orange::selection {
  background-color: orange;
}
.dark::selection {
  color: lightgreen;
  background-color: #222;
}

/* 플레이스홀더 가상 요소 */
input:required::placeholder {
  color: darkred;
  background-color: yellow;
}
```

의사 요소 : https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements

## 상속과 리셋

상속되는 속성이 있음

### inherit

스스로의 값을 포기하고 부모로부터 받은 상속값을 적용

https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties

https://developer.mozilla.org/ko/docs/Web/CSS/inherit

### initial

브라우저가 부여한 값을 포기하고 각 속성의 기본값을 적용

https://developer.mozilla.org/ko/docs/Web/CSS/initial

### unset

상속되는 값이 있다면 inherit, 없다면 initial처럼 작동

### revert

unset과 같지만, 상속받지 않은 값을 초기값으로 되돌리지는 않음

### all 속성

대부분의 속성을 inherit, initial, unset, revert값으로 지정할 수 있음

브라우저에서 지정한 기본값을 비우고 원하는 스타일로 초기화하는데 유용

```html

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="../pretty.css">
  <link rel="stylesheet" href="./common.css">

  <style>
    .parent { color: slateblue; }

    button:not(:first-of-type) {
      all: unset;
    }
    button:last-child {
      padding: 0.6em 1em;
      background-color: white;
      border: 2px solid #ddd;
      border-radius: 0.4em;
      cursor: pointer;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
    }
  </style>
  
  <title>hcs-04-03-06</title>
</head>
<body>

  <h1>all 속성</h1>
  <p>
    대부분의 속성을 <em>inherit</em>, <em>initial</em>, <em>unset</em>, <em>revert</em>값으로 지정할 수 있습니다. <br>
    브라우저에서 지정한 기본값을 비우고 원하는 스타일로 초기화하는데 유용합니다.
  </p>

  <div class="parent">
    <span class="class-label">.parent</span>
    파랑 글자색이 적용된 div
    <br><br>
  <button>all unset 적용 전 버튼</button>
  <br><br>
  <button>all unset 적용 후 버튼</button>
  <br><br>
  <button>all unset 적용 후 스타일 추가</button>
  </div>
  
</body>
</html>
```

### CSS Reset

https://meyerweb.com/eric/tools/css/reset/

https://necolas.github.io/normalize.css/

https://elad.medium.com/the-new-css-reset-53f41f13282e

## 벤더 프리픽스 Vendor Prefixes

각 브라우저에서 제공하는 css 속성

아직 표준화되지 않은 CSS 속성들에 사용

| 접두사         | 브라우저         |
|-------------|--------------|
| -webkit-    | 사파리, 크롬, 오페라 |
| -moz-	| 파이어폭스        |
|-ms-	| 엣지, 익스플로러    |
|-o-	| 구버전 오페라      |

```css
.element {
  -webkit-transition: all 4s ease;
     -moz-transition: all 4s ease;
      -ms-transition: all 4s ease;
       -o-transition: all 4s ease;
          transition: all 4s ease; /* 접두사가 붙지 않은 속성은 맨 마지막줄에 붙일 것(공식 속성을 마지막에 읽을 수 있도록) */
}
```

```css
.element {
    background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));
    background: -o-linear-gradient(top, white, black);
    background: linear-gradient(to bottom, white, black);
}
```

벤더 프리픽스가 붙은 css 로 바꿔주는 사이트

https://autoprefixer.github.io/

```css
.element {
  width: 100vw;
  break-after: auto;
  tab-size: 4;
  writing-mode: horizontal-tb;
}
```

## 서체와 웹폰트

### font-family 속성

```css
body {
  font-family: AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
}
```

serif : 삐침이 있음

sans-serif : 삐침이 없음

https://developer.mozilla.org/ko/docs/Web/CSS/font-family

### CSS 폰트의 한계

사용자의 컴퓨터에 있는 폰트만 실질 적용 가능

맥 사용자, 윈도우 사용자간 탑재 폰트 차이

일관성 유지 어려움

### 웹 폰트

서버에 저장된 서체를 사용자의 컴퓨터에서 사용할 수 있도록 함

https://fonts.google.com/

https://noonnu.cc/

### 웹폰트를 직접 배포

폰트를 다운받아서 fonts 폴더에 넣기

폰트명을 선언하고 사용

```css
@font-face {
    font-family: "MyNotoSans";
    src: url(./fonts/NotoSansKR-Regular.otf);
}
```

# 참고

https://www.inflearn.com/course/%EC%A0%9C%EB%8C%80%EB%A1%9C-%ED%8C%8C%EB%8A%94-html-css