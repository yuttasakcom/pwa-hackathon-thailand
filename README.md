# PWA Hackathon Thailand

### บันทึกขั้นตอนการทำ hackathon แบบเริ่มต้นตั้งแต่ 0
- เริ่ม 20.00 น. วันศุกร์ที่ 23 มิถุนายน 2560
- สิ้นสุด ...

### Setup Tool & Environment
- ติดตั้ง Ubuntu 16.04.2 LTS และ Dev tool อื่นๆ เช่น chrome ฯ
- ติดตั้ง Nodejs v.8.1.2
- ติดตั้ง VS Code & Setup extension 
- ติดตั้ง yarn & vue-cli

### เริ่มสร้าง project
#### ชื่อโปรเจ็กต์ : PWA Game Turnbased On/Off Line
- ติดตั้ง vue pwa และ install package เพิ่มดังนี้
  - bootstrap version 4.0.0-alpha.6
  - vuex
  - ... เดี๋ยวมาเพิ่มต่อ

### Design และ ออกแบบโครงสร้างเว็บ โดยจะมีโครงสร้างหลักๆประมาณนี้
```
.
+-- src
    +-- pages
    +-- containers
    +-- components
    +-- services
    +-- stores
    +-- router

```

pages คือ ไฟล์สำหรับเรียกใช้ containers หรือ components เพื่อแสดงผลทางเว็บเพจ มีทั้งหมดดังนี้
- Home
- Signup
- Login
- ChooseCharacter
- ChooseMap
- ChooseMonster
- Fighting
- Winner
- Loser
- ManageItem
- Ranking