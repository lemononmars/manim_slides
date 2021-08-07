quiz = {
   "info": {
       "name":    "Quiz Time!",
       "main":    "ฮ่าฮ่า",
       "results": "The Quiz Results Copy",
       "level1":  "The highest ranking",
       "level2":  "The almost highest ranking",
       "level3":  "The middle ranking",
       "level4":  "The almost lowest ranking",
       "level5":  "The lowest ranking"
   },
   "questions": [
       {
           "q": "How many animations were there?",
           "a": [
               {"option": "1", "correct": false},
               {"option": "2", "correct": false},
               {"option": "3", "correct": true}
           ],
           "correct": "You counted well!",
           "incorrect": "Try again",
           "select_any": false, // optional, see "Question Options" above
           "force_checkbox": false, // optional, see "Question Options" above
           "skipStartButton": true
       }
       // more questions
   ]
}
