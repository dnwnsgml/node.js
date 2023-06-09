const events = require('events');

const eventEmitter = new events.EventEmitter();
// 이벤트 관련 메소드를 사용할 수 있는 EventEmitter 객체 선언 => 새로운 이벤트를 생성하는 객체

const connectHandler = function connected() {
    console.log('1.connected함수 연결 성공!')
    eventEmitter.emit('data_received');     //data_receivde 이벤트 생성
}

//connection 이벤트와 connectHandler 핸들러와 연결
eventEmitter.on('connection', connectHandler);  //connection 이라는 이벤트를 발생해서 함수호출

//data_received 이벤트와 익명함수 연결
eventEmitter.on('data_received', () => {
    console.log('2.데이터 수신!')
});

eventEmitter.emit('connection');    //connection이라는 이벤트 발생