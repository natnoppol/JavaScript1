## Lesson
element - every item exemple button, menu, select, option etc. 
event - mouse click, input, every action 
 Template Literals = `${}` แทรกค่าตัวแปร
(Terminal)
git checkout -b develop - create branch
git checkout main  - swich
git merge develop  - convert





function formatCurrency(number) 

ถ้าตัวแปร Number ไม่เป็นประเภท ตัวเลข return error

{ if (typeof number !== 'number' || isNaN(number)) { 
return 'Invalid input. Please provide a valid number.'; } 

const formattedCurrency = number.toLocaleString('no-NO');
 return formattedCurrency; }