/* =========================================
   QUESTION DATABASE
========================================= */

const questions = [

    {
        question:
            "Dân tộc Thái là một trong 54 dân tộc nào của Việt Nam?",

        answers: [
            "Dân tộc thiểu số",
            "Dân tộc du nhập gần đây",
            "Dân tộc chỉ sinh sống ở đô thị",
            "Dân tộc không có cộng đồng tại Việt Nam"
        ],

        correct: 0,

        explanation:
            "Người Thái là một trong các dân tộc thiểu số của Việt Nam."
    },

    {
        question:
            "Người Thái ở Việt Nam tập trung đông ở khu vực nào?",

        answers: [
            "Tây Bắc và một số khu vực miền núi phía Bắc",
            "Đồng bằng sông Cửu Long",
            "Các đảo xa ngoài khơi",
            "Chỉ khu vực Đông Nam Bộ"
        ],

        correct: 0,

        explanation:
            "Cộng đồng người Thái tập trung đông ở vùng Tây Bắc và một số địa phương miền núi phía Bắc."
    },

    {
        question:
            "Hai nhóm Thái thường được nhắc đến ở Việt Nam là gì?",

        answers: [
            "Thái Đen và Thái Trắng",
            "Thái Đỏ và Thái Xanh",
            "Thái Vàng và Thái Tím",
            "Thái Bắc và Thái Nam"
        ],

        correct: 0,

        explanation:
            "Trong nghiên cứu về người Thái ở Việt Nam, Thái Đen và Thái Trắng là hai nhóm thường được nhắc đến."
    },

    {
        question:
            "Ngôn ngữ của người Thái thuộc ngữ hệ nào?",

        answers: [
            "Tai-Kadai",
            "Nam Á",
            "Ấn-Âu",
            "Ural"
        ],

        correct: 0,

        explanation:
            "Tiếng Thái ở Việt Nam thuộc nhóm ngôn ngữ Tai-Kadai."
    },

    {
        question:
            "Loại hình nhà ở truyền thống nổi bật của người Thái là gì?",

        answers: [
            "Nhà sàn",
            "Nhà nổi giữa biển",
            "Nhà hầm",
            "Nhà kính"
        ],

        correct: 0,

        explanation:
            "Nhà sàn là một nét kiến trúc truyền thống nổi bật trong đời sống của nhiều cộng đồng người Thái."
    },

    {
        question:
            "Xòe là loại hình văn hóa nào nổi tiếng của người Thái?",

        answers: [
            "Múa dân gian",
            "Kịch nói",
            "Điêu khắc đá",
            "Tranh sơn dầu"
        ],

        correct: 0,

        explanation:
            "Xòe là hình thức múa dân gian nổi tiếng của cộng đồng người Thái."
    },

    {
        question:
            "Trang phục truyền thống của phụ nữ Thái thường có đặc điểm nào?",

        answers: [
            "Áo cóm và trang phục được trang trí tinh tế",
            "Áo giáp kim loại",
            "Áo choàng len kiểu châu Âu",
            "Trang phục hoàn toàn không có hoa văn"
        ],

        correct: 0,

        explanation:
            "Áo cóm là một trang phục nổi bật của phụ nữ Thái, thường kết hợp với các phụ kiện và cách trang trí truyền thống."
    },

    {
        question:
            "Một hoạt động văn hóa cộng đồng nổi tiếng của người Thái là gì?",

        answers: [
            "Múa xòe",
            "Đấu bò kiểu Tây Ban Nha",
            "Đua xe địa hình",
            "Trượt băng"
        ],

        correct: 0,

        explanation:
            "Múa xòe là một hoạt động văn hóa cộng đồng đặc trưng và nổi tiếng của người Thái."
    },

    {
        question:
            "Đời sống truyền thống của nhiều cộng đồng người Thái gắn với môi trường nào?",

        answers: [
            "Thung lũng, ruộng nước và vùng núi",
            "Sa mạc khô hạn",
            "Vùng băng tuyết quanh năm",
            "Các đảo san hô ngoài biển"
        ],

        correct: 0,

        explanation:
            "Nhiều cộng đồng người Thái cư trú tại các thung lũng, vùng núi và gắn bó với hoạt động canh tác ruộng nước."
    },

    {
        question:
            "Một giá trị nổi bật trong sinh hoạt văn hóa cộng đồng của người Thái là gì?",

        answers: [
            "Tinh thần cộng đồng",
            "Sống tách biệt hoàn toàn",
            "Không tổ chức hoạt động chung",
            "Không có sinh hoạt văn hóa"
        ],

        correct: 0,

        explanation:
            "Tinh thần cộng đồng thể hiện rõ qua các hoạt động sinh hoạt, lễ hội, nghệ thuật và đời sống chung của người Thái."
    }

];


/* =========================================
   GAME VARIABLES
========================================= */

let gameQuestions = [];

let currentQuestion = 0;

let score = 0;

let lives = 3;

let combo = 0;

let bestCombo = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let timeLeft = 15;

let timerInterval = null;

let answered = false;


/* =========================================
   DOM ELEMENTS
========================================= */

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const resultScreen =
    document.getElementById("resultScreen");

const scoreElement =
    document.getElementById("score");

const timerElement =
    document.getElementById("timer");

const heartsElement =
    document.getElementById("hearts");

const comboElement =
    document.getElementById("combo");

const questionCounter =
    document.getElementById("questionCounter");

const progressFill =
    document.getElementById("progressFill");

const questionNumber =
    document.getElementById("questionNumber");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextButton");


/* =========================================
   SCREEN SWITCH
========================================= */

function showScreen(screen) {

    startScreen.classList.remove("active");

    gameScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    screen.classList.add("active");
}


/* =========================================
   SHUFFLE
========================================= */

function shuffle(array) {

    const arr = [...array];

    for (
        let i = arr.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            arr[i],
            arr[j]
        ] = [
            arr[j],
            arr[i]
        ];
    }

    return arr;
}


/* =========================================
   START GAME
========================================= */

function startGame() {

    clearInterval(timerInterval);

    gameQuestions =
        shuffle(questions);

    currentQuestion = 0;

    score = 0;

    lives = 3;

    combo = 0;

    bestCombo = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    showScreen(gameScreen);

    updateStats();

    loadQuestion();
}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    clearInterval(timerInterval);

    answered = false;

    feedbackElement.className =
        "feedback";

    feedbackElement.innerHTML = "";

    nextButton.classList.remove("show");

    const q =
        gameQuestions[currentQuestion];

    questionCounter.textContent =
        `Câu ${currentQuestion + 1} / ${gameQuestions.length}`;

    questionNumber.textContent =
        `CÂU ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionElement.textContent =
        q.question;

    progressFill.style.width =
        `${(currentQuestion / gameQuestions.length) * 100}%`;

    answersElement.innerHTML = "";


    /* Shuffle answers */

    const shuffledAnswers =
        q.answers.map(
            (answer, index) => ({
                answer,
                originalIndex: index
            })
        );

    const randomized =
        shuffle(shuffledAnswers);


    randomized.forEach(
        (item, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.innerHTML = `
                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                ${item.answer}
            `;

            button.onclick = () =>
                selectAnswer(
                    button,
                    item.originalIndex
                );

            answersElement.appendChild(
                button
            );
        }
    );


    startTimer();
}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    timeLeft = 15;

    updateTimer();

    timerInterval =
        setInterval(() => {

            timeLeft--;

            updateTimer();

            if (timeLeft <= 0) {

                clearInterval(
                    timerInterval
                );

                if (!answered) {

                    timeOut();
                }
            }

        }, 1000);
}


function updateTimer() {

    timerElement.textContent =
        timeLeft;

    timerElement.classList.remove(
        "warning",
        "danger"
    );


    if (timeLeft <= 8) {

        timerElement.classList.add(
            "warning"
        );
    }


    if (timeLeft <= 5) {

        timerElement.classList.remove(
            "warning"
        );

        timerElement.classList.add(
            "danger"
        );
    }
}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    clickedButton,
    selectedIndex
) {

    if (answered)
        return;


    answered = true;

    clearInterval(timerInterval);


    const q =
        gameQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    /* =====================================
       CORRECT
    ===================================== */

    if (
        selectedIndex === q.correct
    ) {

        clickedButton.classList.add(
            "correct"
        );


        correctAnswers++;


        combo++;


        if (
            combo > bestCombo
        ) {

            bestCombo =
                combo;
        }


        const comboBonus =
            Math.max(
                0,
                combo - 1
            ) * 10;


        const timeBonus =
            timeLeft * 2;


        const points =
            100 +
            comboBonus +
            timeBonus;


        score += points;


        feedbackElement.classList.add(
            "show",
            "correct"
        );


        feedbackElement.innerHTML = `
            ✅ <strong>Chính xác!</strong>
            +${points} điểm
            <br>
            ${q.explanation}
        `;


        playCorrect();

    }


    /* =====================================
       WRONG
    ===================================== */

    else {

        clickedButton.classList.add(
            "wrong"
        );


        buttons.forEach(
            button => {

                if (
                    button.textContent
                        .trim()
                        .includes(
                            q.answers[q.correct]
                        )
                ) {

                    button.classList.add(
                        "correct"
                    );
                }
            }
        );


        wrongAnswers++;

        lives--;

        combo = 0;


        feedbackElement.classList.add(
            "show",
            "wrong"
        );


        feedbackElement.innerHTML = `
            ❌ <strong>Chưa chính xác!</strong>
            <br>
            Đáp án đúng:
            <strong>
                ${q.answers[q.correct]}
            </strong>
            <br>
            ${q.explanation}
        `;


        playWrong();


        if (lives <= 0) {

            updateStats();

            setTimeout(
                () => endGame(),
                1300
            );

            return;
        }
    }


    updateStats();

    nextButton.classList.add("show");


    if (
        currentQuestion ===
        gameQuestions.length - 1
    ) {

        nextButton.textContent =
            "XEM KẾT QUẢ 🏆";

    } else {

        nextButton.textContent =
            "CÂU TIẾP →";
    }
}


/* =========================================
   TIME OUT
========================================= */

function timeOut() {

    if (answered)
        return;


    answered = true;


    const q =
        gameQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    buttons.forEach(
        button => {

            if (
                button.textContent
                    .trim()
                    .includes(
                        q.answers[q.correct]
                    )
            ) {

                button.classList.add(
                    "correct"
                );
            }
        }
    );


    wrongAnswers++;

    lives--;

    combo = 0;


    feedbackElement.classList.add(
        "show",
        "wrong"
    );


    feedbackElement.innerHTML = `
        ⏰ <strong>Hết giờ!</strong>
        <br>
        Đáp án đúng:
        <strong>
            ${q.answers[q.correct]}
        </strong>
        <br>
        ${q.explanation}
    `;


    playWrong();

    updateStats();


    if (lives <= 0) {

        setTimeout(
            () => endGame(),
            1300
        );

        return;
    }


    nextButton.classList.add(
        "show"
    );
}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        gameQuestions.length
    ) {

        endGame();

        return;
    }


    loadQuestion();
}


/* =========================================
   UPDATE STATS
========================================= */

function updateStats() {

    scoreElement.textContent =
        score;

    comboElement.textContent =
        combo;

    heartsElement.textContent =
        "❤️".repeat(lives) +
        "🖤".repeat(3 - lives);
}


/* =========================================
   END GAME
========================================= */

function endGame() {

    clearInterval(timerInterval);

    showScreen(resultScreen);


    const percentage =
        Math.round(
            (
                correctAnswers /
                gameQuestions.length
            ) * 100
        );


    document.getElementById(
        "finalScore"
    ).textContent =
        score;


    document.getElementById(
        "correctCount"
    ).textContent =
        correctAnswers;


    document.getElementById(
        "wrongCount"
    ).textContent =
        wrongAnswers;


    document.getElementById(
        "bestCombo"
    ).textContent =
        bestCombo;


    let title;

    let message;

    let icon;


    if (percentage >= 90) {

        icon = "🏆";

        title = "Xuất sắc!";

        message =
            "Bạn có kiến thức rất tốt về văn hóa dân tộc Thái!";

        createConfetti();

    }

    else if (percentage >= 70) {

        icon = "🎉";

        title = "Rất tốt!";

        message =
            "Bạn đã nắm được nhiều nét văn hóa đặc trưng của người Thái.";

    }

    else if (percentage >= 50) {

        icon = "👍";

        title = "Khá tốt!";

        message =
            "Bạn đã biết những kiến thức cơ bản. Hãy thử lại để đạt điểm cao hơn.";

    }

    else {

        icon = "📚";

        title = "Cố gắng thêm nhé!";

        message =
            "Hãy tìm hiểu thêm về văn hóa và đời sống của dân tộc Thái rồi thử lại.";
    }


    document.getElementById(
        "resultIcon"
    ).textContent =
        icon;


    document.getElementById(
        "resultTitle"
    ).textContent =
        title;


    document.getElementById(
        "resultMessage"
    ).textContent =
        `${message} Bạn đạt ${percentage}%.`;
}


/* =========================================
   AUDIO
========================================= */

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();
    }

    return audioContext;
}


function playTone(
    frequency,
    duration,
    type = "sine"
) {

    try {

        const ctx =
            getAudioContext();


        const oscillator =
            ctx.createOscillator();


        const gain =
            ctx.createGain();


        oscillator.type =
            type;


        oscillator.frequency.value =
            frequency;


        gain.gain.setValueAtTime(
            0.08,
            ctx.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + duration
        );


        oscillator.connect(gain);

        gain.connect(
            ctx.destination
        );


        oscillator.start();


        oscillator.stop(
            ctx.currentTime + duration
        );

    }

    catch (error) {

        console.log(
            "Audio không khả dụng."
        );
    }
}


function playCorrect() {

    playTone(
        660,
        0.12
    );

    setTimeout(
        () => {
            playTone(
                880,
                0.15
            );
        },
        100
    );
}


function playWrong() {

    playTone(
        180,
        0.25,
        "sawtooth"
    );
}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "🟢",
        "🟡",
        "🔵",
        "🟣",
        "⭐",
        "✨"
    ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const element =
            document.createElement(
                "div"
            );


        element.className =
            "confetti";


        element.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        element.style.left =
            Math.random() *
            100 +
            "vw";


        element.style.animationDelay =
            Math.random() *
            2 +
            "s";


        element.style.fontSize =
            (
                10 +
                Math.random() * 18
            ) +
            "px";


        document.body.appendChild(
            element
        );


        setTimeout(
            () => {

                element.remove();

            },
            5000
        );
    }
}


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !gameScreen.classList.contains(
                "active"
            )
        ) {

            return;
        }


        /* After answering */

        if (answered) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                nextQuestion();
            }

            return;
        }


        const key =
            event.key.toLowerCase();


        const index =
            {
                a: 0,
                b: 1,
                c: 2,
                d: 3
            }[key];


        if (
            index !== undefined
        ) {

            const buttons =
                document.querySelectorAll(
                    ".answer"
                );


            if (
                buttons[index]
            ) {

                buttons[index].click();
            }
        }
    }
);