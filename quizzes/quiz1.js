first = Math.floor(Math.random() * 10)
second = Math.floor(Math.random() * 10)
ans = first+second
question = "$" + first + "+" + second + "=?$"

quiz = {
   "info": {
       "name":    "Quiz Time!",
       "main":    "ฮ่าฮ่า",
       "results": "คุณคือ....",
       "level1":  "The highest ranking",
       "level2":  "The almost highest ranking",
       "level3":  "The middle ranking",
       "level4":  "The almost lowest ranking",
       "level5":  "The lowest ranking"
   },
   "skipStartButton": true,
   "questions": [
       {
           "q": question,
           "a": [
               {"option": ans-1, "correct": false},
               {"option": ans, "correct": true},
               {"option": ans+1, "correct": false}
           ],
           "correct": "Nice!",
           "incorrect": "Try again...",
           "select_any": false, // optional, see "Question Options" above
           "force_checkbox": false, // optional, see "Question Options" above
           
       }
       // more questions
   ]
}
