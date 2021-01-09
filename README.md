# template-react-native

# 설치 라이브러리

1. react-navigation
2. react-native-vector-icons
3. styled-components

작업중

4. react-native-bootsplash
5. react-native-push-notification

# source 구조

# 사용된 라이브러리 상세 내용

## 1) React Navigation 구조

```
├─ App
│  #) Assets 로딩 등 앱 로딩전 전처리 작업
│  └─ RootNavigator
│     │  1) 로그인 X
│     ├─ LoginNavigator
│     │     │  1-1) 로그인 전에 위치하는 화면들
│     │     ├─ LoginScreen
│     │     ├─ JoinScreen
│     │     └─ etc ..
│     │  2) 로그인 O
│     └─ MainNavigator
│           │  2-1) 로그인 이후 크게 3가지로 구분
│           ├─ AppModal           :: (공통 Modal 창 - 알림등)
│           ├─ CommonDetailScreen :: (중복 호출되는 Detail 화면)
│           └─ BottomTabNavigator :: (메인 바텀 네비게이터)
│                │  3) App 주요 화면들 (Home 등등)
│                ├─ TabA
│                ├─ TabB
│                └─ etc ...
```

## 2) Push Notification service

## 3) Bootsplash 설정
