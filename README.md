> 本项目是基于 https://github.com/zhouhuafei/npm-publish-ts/tree/build-ts-use-gulp-babel 项目改造

## 使用案例
```typescript
import { endlessLoop } from 'zhf.endless-loop'

function fn () {
  endlessLoop(3000) // 同步死循环3秒
  console.log('3秒后会打印这条日志')
}

fn()
```
