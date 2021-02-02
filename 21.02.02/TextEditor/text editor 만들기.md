# text editor 만들기

> javascript30의 20번째 강의를 보다가 contenteditable이라는 속성에 대한 궁금증이 생겨서 [contentEditable 속성으로 인라인 텍스트 편집기 제작하기](https://code.tutsplus.com/ko/tutorials/create-an-inline-text-editor-with-the-contenteditable-attribute--cms-25655)를 참고하여 학습했습니다.

## 결과화면

- 편집 전

![image-20210202234303463](text%20editor%20%EB%A7%8C%EB%93%A4%EA%B8%B0.assets/image-20210202234303463.png)

- 편집 후

![image-20210202234148974](text%20editor%20%EB%A7%8C%EB%93%A4%EA%B8%B0.assets/image-20210202234148974.png)

## 코드

- contenteditable 속성
  - 말 그대로 content를 편집할 수 있도록 만들어주는 속성
  - `true`, `false`, `inherit`을 갖는데, 각각 `편집 가능 상태` / `불가능` / `부모 요소의 속성을 따라감`
  - 인라인 편집기를 만들기 위해서 `contentEditable`속성을 `true`로 설정하면 표준 HTML5요소들이 편집 가능한 상태가 된다.
  - 본문을 따라 `인라인 리치 텍스트 편집기`를 제작해보자

### 편집기 제작

- editor.html
  - 편집 상태를 토글하는 버튼과 편집 가능한 요소 생성
  - `editBtn`을 토글하여 편집가능 / 내용 저장

```html
<button id="editBtn" type="button">Edit Document</button>
 
<div id="editor">
    <h1 id="title">A Nice Heading.</h1>
    <p>Last Edited By - <span id="author">Monty Shokeen</span></p>
    <p id="content">Some content that needs correction.</p>
</div>
```

- editor.js

  1. 버튼과 편집할 요소를 `querySelectorAll`을 통해 모든 요소를 포함하는 `NodeList` 집기

  2. 버튼을 클릭하면 요소들이 `편집가능 상태`가, 그렇지 않으면 `편집 불가 상태`가 됨

  3. for문을 돌면서 localStorage에 편집 내용을 저장한다.

```javascript
// 1
var editBtn = document.getElementById('editBtn');
var editables = document.querySelectorAll('#title, #author, #content')

// 2
editBtn.addEventListener('click', function(e) {
  if (!editables[0].isContentEditable) {
    editables[0].contentEditable = 'true';
    editables[1].contentEditable = 'true';
    editables[2].contentEditable = 'true';
    editBtn.innerHTML = 'Save Changes';
    editBtn.style.backgroundColor = '#6F9';
  } else {
    // Disable Editing
    editables[0].contentEditable = 'false';
    editables[1].contentEditable = 'false';
    editables[2].contentEditable = 'false';
    // Change Button Text and Color
    editBtn.innerHTML = 'Enable Editing';
    editBtn.style.backgroundColor = '#F96';

// 3       
    // Save the data in localStorage 
    for (var i = 0; i < editables.length; i++) {
      localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
    }
  }
});
```



### 저장된 콘텐츠 불러오기

- editor.js
  - 변경된 내용이 존재한다면(localStorage에 담겨있다면), 사용자가 웹 페이지를 다시 방문할 때 그 데이터를 불러오기

```javascript
// ...

if (typeof(Storage) !== "undefined") {
 
  if (localStorage.getItem('title') !== null) {
    editables[0].innerHTML = localStorage.getItem('title');
  }
   
  if (localStorage.getItem('author') !== null) {
    editables[1].innerHTML = localStorage.getItem('author');
  }
   
  if (localStorage.getItem('content') !== null) {
    editables[2].innerHTML = localStorage.getItem('content');
  } 
}
```



### 사용자 친화적인 편집기 만들기

- editor.css
  - 편집 가능 상태와 그렇지 않은 상태를 명확히 구분시키기

```css
[contenteditable="true"] {
  font-family: "Rajdhani";
  color: #C00;
}
```

- editor.js

  1. 데이터 유실 방지를 위해 5초마다 데이터를 자동 저장

  2. `keydown` 이벤트마다 변경된 내용을 저장할 수도 있음

```javascript
// ...

// 1
setInterval(function() {
  for (var i = 0; i < editables.length; i++) {
    localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
  }
}, 5000);

// 2
document.addEventListener('keydown', function(e) {
  for (var i = 0; i < editables.length; i++) {
    localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
  }
});
```

### 디자인 모드로 페이지 전체를 편집하기

- `contentEditable`은 몇 개의 요소를 집어서 편집해야 할 때 유용하다.

- 하지만 전체를 편집할 때는 `designMode`속성을 사용하면 된다.

  당장 `F12`를 누른 후 `document.designMode='on'`을 쳐보면 마법처럼 페이지의 모든 요소를 수정할 수 있다.