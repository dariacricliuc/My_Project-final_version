document.addEventListener('DOMContentLoaded', function() {
    const quizForm=document.getElementById('quizForm');
    const resultsSection=document.getElementById('resultsSection');
    const testSection=document.querySelector('.test-section');
    const retryButton=document.getElementById('retryButton');

    const correctAnswers= {
        q1: 'a', q2: 'a', q3: 'b', q4: 'b', q5: 'b',
        q6: 'c', q7: 'b', q8: 'b', q9: 'a', q10: 'b',
        q11: 'b', q12: 'b', q13: 'a', q14: 'a', q15: 'c'
    };

    const questionTexts= {
        q1: '1. What style did Takashi Murakami create?',
        q2: '2. What does "Nihonga" mean?',
        q3: '3. Which philosophical principle values "traces of time and imperfection"?',
        q4: '4. In which decade did Japanese art make a global breakthrough?',
        q5: '5. Which museum is NOT mentioned as hosting Japanese art exhibitions?',
        q6: '6. What do modern Japanese artists explore through their philosophy?',
        q7: '7. Which city is considered an Asian art hub alongside Tokyo?',
        q8: '8. What does "Mono-no aware" mean?',
        q9: '9. Which work belongs to Ikenaga Yasunari?',
        q10: '10. Who created "Tan Tan Bo"?',
        q11: '11. What material does Chiharu Shiota use for installations?',
        q12: '12. Which artist is known as the "Princess of Polka Dots"?',
        q13: '13. Who uses found objects for installations about migration?',
        q14: '14. Which artist creates psychedelic landscapes using Nihonga techniques?',
        q15: '15. Which work by Yayoi Kusama is a famous installation?'
    };

    const answerOptions= {
        q1: { a: 'Superflat', b: 'Superrealism', c: 'Digital Impressionism' },
        q2: { a: 'Traditional Japanese painting', b: 'Modern digital graphics', c: 'Origami art' },
        q3: { a: 'Zen Buddhism', b: 'Wabi-sabi', c: 'Mono-no aware' },
        q4: { a: '1970s', b: '1990s', c: '2010s' },
        q5: { a: 'MoMA, New York', b: 'Louvre, Paris', c: 'Tate Modern, London' },
        q6: { a: 'Loneliness in urban society', b: 'Environmental issues', c: 'All of the above' },
        q7: { a: 'Beijing', b: 'Seoul', c: 'Bangkok' },
        q8: { a: 'Beauty of imperfection', b: 'Pathos of things (sweet sadness)', c: 'Simplicity and purity of form' },
        q9: { a: '"Goldfish"', b: '"Mr. DOB"', c: '"Infinity Room"' },
        q10: { a: 'Yayoi Kusama', b: 'Takashi Murakami', c: 'Chiharu Shiota' },
        q11: { a: 'Gold leaves', b: 'Yarn/Thread', c: 'Found objects' },
        q12: { a: 'Yuko Mohri', b: 'Yayoi Kusama', c: 'Hideaki Kawashima' },
        q13: { a: 'Yuko Mohri', b: 'Ikenaga Yasunari', c: 'Takashi Murakami' },
        q14: { a: 'Hideaki Kawashima', b: 'Chiharu Shiota', c: 'Yayoi Kusama' },
        q15: { a: '"Tan Tan Bo"', b: '"Goldfish"', c: '"Infinity Mirror Room"' }
    };

    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let score=0;
            const answersList=document.getElementById('answersList');
            answersList.innerHTML='';

            for (let i=1; i<=15; i++) {
                const qName='q'+i;
                const selected=document.querySelector('input[name="'+qName+'"]:checked');
                const uAns=selected? selected.value: null;
                const isCorr=uAns===correctAnswers[qName];

                if (isCorr) score++;

                const item=document.createElement('div');
                item.className='answer-item '+(isCorr? 'answer-correct': 'answer-incorrect');

                const qEl=document.createElement('div');
                qEl.className='answer-question';
                qEl.textContent=questionTexts[qName];

                const uEl=document.createElement('div');
                uEl.textContent='Your answer: '+(uAns? answerOptions[qName][uAns]: 'No answer');

                const cEl=document.createElement('div');
                cEl.style.color='#e74c3c';
                cEl.style.fontWeight='bold';
                cEl.textContent='Correct answer: '+answerOptions[qName][correctAnswers[qName]];

                item.appendChild(qEl);
                item.appendChild(uEl);
                if (!isCorr) item.appendChild(cEl);
                answersList.appendChild(item);
            }

            document.getElementById('score').textContent=score;
            const msg=document.getElementById('scoreMessage');
            if (msg) {
                if (score===15) msg.textContent='Amazing! You are a true expert!';
                else if (score>=10) msg.textContent='Excellent result!';
                else msg.textContent='Keep exploring and try again!';
            }

            testSection.classList.add('hidden');
            resultsSection.classList.remove('hidden');
            window.scrollTo({ 
                top: 0, behavior: 'smooth' 
            });
        });
    }

    if (retryButton) {
        retryButton.addEventListener('click', function() {
            location.reload();
        });
    }
});