function Pertanyaan (){
    function Question(question, answer, correct)  {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function(){
        console.log(this.question);

        for (var i = 0 ; i < this.answer.length; i++){
            console.log(i + ': '+ this.answer[i]);
        }
    }
    var skor=0;
    Question.prototype.checkAnswer = function(ans) {

        if (ans === this.correct){
            console.log('Jawaban Benar !');
            skor +=1;
        }
        else{
            console.log('SALAH !!! HARAP MENCOBA KEMBALI !')
        }
    }

    var q1 = new Question('Apakah JavaScript bahasa pemrograman paling populer?',
                         ['Ya','Tidak'],
                         '0');
    var q2 = new Question('Siapakah Dosen yang mengajar kuliah Pemrograman Web?',
                         ['P.Putu','P.Safar','P.Oskar'],
                         '2');
    var q3 = new Question('Kata manakah yang paling baik dalam mendeskripsikan tentang koding ?',
                         ['Bosen','Susah','Membahagiakan','Tidak Tertarik'],
                         '2');
    var q4 = new Question('Mata Kuliah yang diajarkan oleh Pak oskar?',
                          ['Pemrograman Web', 'DAA II', 'Kecerdasan Buatan'],
                          '0');

    var questions = [q1, q2, q3, q4];
    for (;;) {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer =prompt('Pilihlah Jawaban Yang Benar.');
      if (answer == 'exit'){
        console.log("skor total yang anda peroleh : "+skor);
        break;
      }
      questions[n].checkAnswer(answer);
    }

};
