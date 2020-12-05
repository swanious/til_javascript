### Async vs Defer

[toc]

#### head+async(비동기) 로 js파일 불러오기

![image-20201201012826774](aysnc_defer_usestrict.assets/image-20201201012826774.png)

- async는 불린 타입으로 선언만해주면 True가 되어 아래와 같이 사용가능
- 장점
  - DOM에 랜더링 전 HTML를 다운로드(파싱)받을 때 병렬로 js파일을 받기 때문에 시간 효율적이다.
- 단점
  - js파일을 병렬로 fetching한 후 fetching이 끝나면 html을 block시키고 executing하게 된다.
  - js가 준비가 되면 html이 파싱하는 것을 block시키고 바로 실행시켜버리므로 querySelector로 dom조작하는 시점에 html요소를 다 불러오지 못할 수도 있다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script async src="main.js"></script>
</head>
<body></body>
</html>
```

#### head+defer로 js파일 불러오기

![image-20201201012809342](aysnc_defer_usestrict.assets/image-20201201012809342.png)

- html파일을 파싱하다가 js파일을 병렬적으로 fetching해놓고 html파일이 다 파싱되면 js파일을 executing하기때문에 효율적이다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script defer src="main.js"></script>
</head>
<body></body>
</body>
</html>
```

#### body 맨 끝에 js파일 불러오기

- 장점
  - html 파싱이 모두 끝난 후에 js파일을 fetching하고 executing하기 때문에 오류가 생기지 않는다.
- 단점
  - js파일에 의존한 작업을 할 경우 시간적으로 비효율적이다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <script src="main.js"></script>
</body>
</html>
```

### use strict

- 자바스크립트는 굉장히 유연한 언어(유연함 === 위험성 증가)
- 유연함때문에 변수를 선언하지 않아도 에러를 발생시키지 않는다. 
- 하지만 개발을 할때  `'use strict';`를 위에 선언하면 에러를 띄워서 정확한 코드를 쓸 수 있다.

```javascript
// whole-script strict mode syntax
// Javascript is Very flexible
// flexible === dangerous
// added ECMAScript 5

'use strict';

console.log('hello world')

a = 5
```

![image-20201201011411802](aysnc_defer_usestrict.assets/image-20201201011411802.png)

```javascript
// whole-script strict mode syntax
// Javascript is Very flexible
// flexible === dangerous
// added ECMAScript 5


'use strict';

console.log('hello world')

let a;
a = 5
```

![image-20201201011833355](aysnc_defer_usestrict.assets/image-20201201011833355.png)