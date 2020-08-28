let watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'Пока не спросишь, я не смогу ответить!',
        yesno: ''
    },
    watch: {
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Жду, когда ты напишешь...';
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 400)
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Ты спрашиваешь или утверждаешь?';
                this.yesno = ''
                return
            }
            this.answer = '';
            this.yesno = ''
            this.yesno = Math.floor((Math.random() * 10)) % 2 === 0 ? "Нет" : "Да";
        }
    }
})

window.onload = () => {
    document.getElementById("text").focus();
}