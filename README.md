# PWA Hackathon Thailand

### บันทึกขั้นตอนการทำ hackathon แบบเริ่มต้นตั้งแต่ 0
- เริ่ม 20.00 น. วันศุกร์ที่ 23 มิถุนายน 2560
- สิ้นสุด ...

### Setup Tool & Environment
- ติดตั้ง Ubuntu 16.04.2 LTS และ Dev tool อื่นๆ เช่น chrome, extension tool ฯ
- ติดตั้ง Nodejs v.8.1.2
- ติดตั้ง VS Code & Setup extension 
- ติดตั้ง yarn & vue-cli

### เริ่มสร้าง project
#### ชื่อโปรเจ็กต์ : PWA Game Turnbased On/Off Line
- ติดตั้ง vue pwa และ install package เพิ่มดังนี้
  - bootstrap version 4.0.0-alpha.6
  - vuex v.2.3.1
  - firebase v.4.1.3
  - ... เพิ่มทีหลัง

### Design และ ออกแบบโครงสร้างเว็บ โดยจะมีโครงสร้างหลักๆประมาณนี้
```
.
+-- src
    +-- pages
        +-- Home.vue
        +-- Signup.vue
        +-- Signin.vue
        +-- ChooseCharacter.vue
        +-- ChooseMap.vue
        +-- ChooseMonster.vue
        +-- Fighting.vue
        +-- Winner.vue
        +-- Loser.vue
        +-- ManageItem.vue
        +-- Ranking.vue
    +-- containers
    +-- components
    +-- services
        +-- firebase.json /* .gitignore */
    +-- stores
    +-- router
    ... เพิ่มทีหลัง
```

### Check list
#### สร้าง pages & routing
- [x] Home
- [x] Signup
- [x] Signin
- [ ] ChooseCharacter
- [ ] ChooseMap
- [ ] ChooseMonster
- [ ] Fighting
- [ ] Winner
- [ ] Loser
- [ ] ManageItem
- [ ] Ranking

#### สร้าง containers สำหรับ group component ไว้ใช้งาน
- [x] Navbar
- [x] Signin
- [x] Footer

#### สร้าง components
- [x] SigninButton
- [ ] Sprite

#### สร้าง services เชื่อมต่อ firebase
- [x] ติดตั้ง firebase tool `npm install -g firebase-tools` & `firebase init`
- [x] Auth service

#### สร้าง stores
- [x] User