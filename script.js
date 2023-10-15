document.addEventListener("DOMContentLoaded", function() {
    const questionsAndAnswers = [
        {
            question: "Определяет комментарий",
            answer: "<!--...-->"
        },
        {
            question: "Определяет тип документа",
            answer: "<!DOCTYPE>"
        },
        {
            question: "Определяет гиперссылку",
            answer: "<a>"
        },
        {
            question: "Определяет аббревиатуру или акроним",
            answer: "<abbr>"
        },
        {
            question: "Не поддерживается в HTML5. Использовать <abbr> вместо. Определяет акроним",
            answer: "<acronym>"
        },
        {
            question: "Определяет контактные данные автора/владельца документа",
            answer: "<address>"
        },
        {
            question: "Не поддерживается в HTML5. Использовать <embed> or <object> вместо. Определяет встроенный апплет",
            answer: "<applet>"
        },
        {
            question: "Определяет область внутри изображения-карты",
            answer: "<area>"
        },
        {
            question: "Определяет статью",
            answer: "<article>"
        },
        {
            question: "Определяет содержание в стороне от содержимого страницы",
            answer: "<aside>"
        },
        {
            question: "Определяет звуковое содержимое",
            answer: "<audio>"
        },
        {
            question: "Определяет полужирный текст",
            answer: "<b>"
        },
        {
            question: "Указывает базовый URL-адрес/цель для всех относительных URL-адресов в документе",
            answer: "<base>"
        },
        {
            question: "Не поддерживается в HTML5. Вместо этого используйте CSS. Задает цвет, размер и шрифт по умолчанию для всего текста в документе",
            answer: "<basefont>"
        },
        {
            question: "Изолирует часть текста, которая может быть отформатирована в другом направлении от другого текста за его пределами",
            answer: "<bdi>"
        },
        {
            question: "Переопределяет текущее направление текста",
            answer: "<bdo>"
        },
        {
            question: "Не поддерживается в HTML5. Вместо этого используйте CSS. Определяет большой текст",
            answer: "<big>"
        },
        {
            question: "Определяет раздел, который цитируется из другого источника",
            answer: "<blockquote>"
        },
        {
            question: "Определяет тело документа",
            answer: "<body>"
        },
        {
            question: "Определяет один разрыв строки",
            answer: "<br>"
        },
        {
            question: "Определяет нажатую кнопку",
            answer: "<button>"
        },
        {
            question: "Используется для рисования графики, на лету, с помощью сценариев (обычно JavaScript)",
            answer: "<canvas>"
        },
        {
            question: "Определяет заголовок таблицы",
            answer: "<caption>"
        },
        {
            question: "Не поддерживается в HTML5. Вместо этого используйте CSS. Определяет центрированный текст",
            answer: "<center>"
        },
        {
            question: "Определяет название работы",
            answer: "<cite>"
        },
        {
            question: "Определяет часть кода компьютера",
            answer: "<code>"
        },
        {
            question: "Задает свойства столбца для каждого столбца в <colgroup> элементе",
            answer: "<col>"
        },
        {
            question: "Задает группу из одного или нескольких столбцов в таблице для форматирования",
            answer: "<colgroup>"
        },
        {
            question: "Связывает данное содержимое с машинно-читаемым переводом",
            answer: "<data>"
        },
        {
            question: "Задает список предварительно заданных параметров для элементов управления вводом",
            answer: "<datalist>"
        },
        {
            question: "Определяет описание/значение термина в списке описания",
            answer: "<dd>"
        },
        {
            question: "Определяет текст, который был удален из документа",
            answer: "<del>"
        },
        {
            question: "Определяет дополнительные сведения, которые пользователь может просматривать или скрывать",
            answer: "<details>"
        },
        {
            question: "Представляет определяющий экземпляр термина",
            answer: "<dfn>"
        },
        {
            question: "Определяет диалоговое окно или окно",
            answer: "<dialog>"
        },
        {
            question: "Не поддерживается в HTML5. Использовать <ul> вместо. Определяет список каталогов",
            answer: "<dir>"
        },
        {
            question: "Определяет раздел в документе",
            answer: "<div>"
        },
        {
            question: "Определяет список описания",
            answer: "<dl>"
        },
        {
            question: "Определяет термин/имя в списке описания",
            answer: "<dt>"
        },
        {
            question: "Определяет подчеркнутый текст",
            answer: "<em>"
        },
        {
            question: "Определяет контейнер для внешнего (не HTML) приложения",
            answer: "<embed>"
        },
        {
            question: "Группирует связанные элементы в форме",
            answer: "<fieldset>"
        },
        {
            question: "Определяет заголовок для <figure> элемента",
            answer: "<figcaption>"
        },
        {
            question: "Указывает автономное содержимое",
            answer: "<figure>"
        },
        {
            question: "Не поддерживается в HTML5. Вместо этого используйте CSS. Определяет шрифт, цвет и размер текста",
            answer: "<font>"
        },
        {
            question: "Определяет нижний колонтитул для документа или раздела",
            answer: "<footer>"
        },
        {
            question: "Определяет HTML-форму для ввода данных пользователем",
            answer: "<form>"
        },
        {
            question: "Не поддерживается в HTML5. Определяет окно (фрейм) во фрейме",
            answer: "<frame>"
        },
        {
            question: "Не поддерживается в HTML5. Определяет набор фреймов",
            answer: "<frameset>"
        },
        {
            question: "Определяет заголовки HTML",
            answer: "<h1> to <h6>"
        },
        {
            question: "Определяет сведения о документе",
            answer: "<head>"
        },
        {
            question: "Определяет заголовок документа или раздела",
            answer: "<header>"
        },
        {
            question: "Определяет тематическое изменение содержания",
            answer: "<hr>"
        },
        {
            question: "Определяет корень HTML-документа",
            answer: "<html>"
        },
        {
            question: "Определяет часть текста в альтернативный голос или настроение",
            answer: "<i>"
        },
        {
            question: "Определяет встроенный фрейм",
            answer: "<iframe>"
        },
        {
            question: "Определяет изображение",
            answer: "<img>"
        },
        {
            question: "Определяет элемент управления вводом",
            answer: "<input>"
        },
        {
            question: "Определяет текст, который был удален из документа",
            answer: "<ins>"
        },
        {
            question: "Определяет ввод с клавиатуры",
            answer: "<kbd>"
        },
        {
            question: "Определяет метку для <input> элемента",
            answer: "<label>"
        },
        {
            question: "Определяет заголовок для <fieldset> элемента",
            answer: "<legend>"
        },
        {
            question: "Определяет элемент списка",
            answer: "<li>"
        },
        {
            question: "Определяет связь между документом и внешним ресурсом (наиболее используемым для связывания с таблицами стилей)",
            answer: "<link>"
        },
        {
            question: "Указывает основное содержимое документа",
            answer: "<main>"
        },
        {
            question: "Определяет изображение на стороне клиента-Map",
            answer: "<map>"
        },
        {
            question: "Определяет выделенный/выделенный текст",
            answer: "<mark>"
        },
        {
            question: "Определяет список/меню команд",
            answer: "<menu>"
        },
        {
            question: "Определяет команду/пункт меню, который пользователь может вызвать из всплывающего меню",
            answer: "<menuitem>"
        },
        {
            question: "Определяет метаданные HTML-документа",
            answer: "<meta>"
        },
        {
            question: "Определяет скалярное измерение в пределах известного диапазона (датчика)",
            answer: "<meter>"
        },
        {
            question: "Определяет навигационные ссылки",
            answer: "<nav>"
        },
        {
            question: "Не поддерживается в HTML5. Определяет альтернативное содержимое для пользователей, которые не поддерживают кадры",
            answer: "<noframes>"
        },
        {
            question: "Определяет альтернативное содержимое для пользователей, которые не поддерживают сценарии на стороне клиента",
            answer: "<noscript>"
        },
        {
            question: "Определяет внедренный объект",
            answer: "<object>"
        },
        {
            question: "Определяет упорядоченный список",
            answer: "<ol>"
        },
        {
            question: "Определяет группу связанных параметров в раскрывающемся списке",
            answer: "<optgroup>"
        },
        {
            question: "Определяет параметр в раскрывающемся списке",
            answer: "<option>"
        },
        {
            question: "Определяет результат вычисления",
            answer: "<output>"
        },
        {
            question: "Определяет абзац",
            answer: "<p>"
        },
        {
            question: "Определяет параметр для объекта",
            answer: "<param>"
        },
        {
            question: "Определяет контейнер для нескольких ресурсов изображения",
            answer: "<picture>"
        },
        {
            question: "Определяет предварительно отформатированный текст",
            answer: "<pre>"
        },
        {
            question: "Представляет ход выполнения задачи",
            answer: "<progress>"
        },
        {
            question: "Определяет краткое предложение",
            answer: "<q>"
        },
        {
            question: "Определяет, что отображать в обозревателях, не поддерживающих аннотации Ruby",
            answer: "<rp>"
        },
        {
            question: "Определяет объяснение/произношение символов (для восточно-азиатских типографии)",
            answer: "<rt>"
        },
        {
            question: "Определяет аннотацию Ruby (для восточно-азиатских типографий)",
            answer: "<ruby>"
        },
        {
            question: "Определяет текст, который больше не является правильным",
            answer: "<s>"
        },
        {
            question: "Определяет выборку выходных данных из компьютерной программы",
            answer: "<samp>"
        },
        {
            question: "Определяет сценарий на стороне клиента",
            answer: "<script>"
        },
        {
            question: "Определяет раздел в документе",
            answer: "<section>"
        },
        {
            question: "Определяет раскрывающийся список",
            answer: "<select>"
        },
        {
            question: "Определяет меньший текст",
            answer: "<small>"
        },
        {
            question: "Определяет несколько мультимедийных ресурсов для элементов мультимедиа (<video> и <audio>)",
            answer: "<source>"
        },
        {
            question: "Определяет раздел в документе",
            answer: "<span>"
        },
        {
            question: "Не поддерживается в HTML5. Использовать <del> или <s> вместо. Определяет текст зачеркивания",
            answer: "<strike>"
        },
        {
            question: "Определяет важный текст",
            answer: "<strong>"
        },
        {
            question: "Определяет сведения о стиле для документа",
            answer: "<style>"
        },
        {
            question: "Определяет текст с подстрочным текстом",
            answer: "<sub>"
        },
        {
            question: "Определяет видимый заголовок для <details> элемента",
            answer: "<summary>"
        },
        {
            question: "Определяет текст с надписью",
            answer: "<sup>"
        },
        {
            question: "Определяет контейнер для графики SVG",
            answer: "<svg>"
        },
        {
            question: "Определяет таблицу",
            answer: "<table>"
        },
        {
            question: "Группирует содержимое тела в таблице",
            answer: "<tbody>"
        },
        {
            question: "Определяет ячейку в таблице",
            answer: "<td>"
        },
        {
            question: "Определяет шаблон",
            answer: "<template>"
        },
        {
            question: "Определяет многострочный элемент управления вводом (область текста)",
            answer: "<textarea>"
        },
        {
            question: "Группирует содержимое нижнего колонтитула в таблице",
            answer: "<tfoot>"
        },
        {
            question: "Определяет ячейку заголовка в таблице",
            answer: "<th>"
        },
        {
            question: "Группирует содержимое заголовка в таблице",
            answer: "<thead>"
        },
        {
            question: "Определяет дату и время",
            answer: "<time>"
        },
        {
            question: "Определяет заголовок документа",
            answer: "<title>"
        },
        {
            question: "Определяет строку в таблице",
            answer: "<tr>"
        },
        {
            question: "Определяет текстовые дорожки для элементов мультимедиа (<video> и <audio>)",
            answer: "<track>"
        },
        {
            question: "Не поддерживается в HTML5. Вместо этого используйте CSS. Определяет телетайп текст",
            answer: "<tt>"
        },
        {
            question: "Определяет текст, который должен быть стилистически отличается от обычного текста",
            answer: "<u>"
        },
        {
            question: "Определяет неупорядоченный список",
            answer: "<ul>"
        },
        {
            question: "Определяет переменную",
            answer: "<var>"
        },
        {
            question: "Определяет видео или фильм",
            answer: "<video>"
        },
        {
            question: "Определяет возможный разрыв строки",
            answer: "<wbr>"
        },
    ];
    shuffle(questionsAndAnswers);
    const totalQuestions = 25;
            const questionsOrder = Array.from({ length: totalQuestions }, (_, index) => index);
            let currentQuestionIndex = 0;
            let correctAnswers = 0;
    
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
    
            function displayQuestion() {
                if (currentQuestionIndex < totalQuestions) {
                    const questionContainer = document.getElementById("questions");
                    const questionData = questionsAndAnswers[currentQuestionIndex];
                    questionContainer.textContent = questionData.question;
                } else {
                    displayResults();
                }
            }
            function onAnswerButtonClick() {
                const userAnswer = document.getElementById("answer").value;
                const currentQuestionData = questionsAndAnswers[questionsOrder[currentQuestionIndex]];
            
                console.log("User Answer:", userAnswer);
                console.log("Correct Answer:", currentQuestionData.answer);
            
                if (currentQuestionData && checkAnswer(userAnswer, currentQuestionData.answer)) {
                    correctAnswers++;
                    console.log("Correct!");
                } else {
                    console.log("Incorrect.");
                }
            
                document.getElementById("numberQ").textContent = correctAnswers;
                currentQuestionIndex++;
                displayQuestion();
            }
    
            function checkAnswer(userAnswer, correctAnswer) {
                return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
            }
    
            function displayResults() {
                const questionContainer = document.getElementById("questions");
                questionContainer.textContent = "Результаты: " + correctAnswers + " из " + totalQuestions + " вопросов.";
                document.getElementById("answer").style.display = "none";
                document.getElementById("butt").style.display = "none";
            }
    
            const nextButton = document.getElementById("butt");
            nextButton.addEventListener("click", onAnswerButtonClick);
    
            displayQuestion();
});