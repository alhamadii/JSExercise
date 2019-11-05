let myTodo = {
    day:'Monday',
    meetings: 0,
    meetDone:0,
    leftM: 0,
    addMeetings: function(num){
        this.meetings = this.meetings +num;
        
        },
    setMeetingsDone: function(num){
        return this.meetDone = this.meetDone+num;
        },
    leftMeeting: function(){
           this.leftM = this.meetings - this.meetDone
        
    },
    sammary: function(){
        return `you have ${this.meetings} meetings today and ${this.meetDone} done meetings and left meetings is ${this.leftM}`;
        },
    resetDay: function(){
        this.meetings = 0;
        this.meetDone = 0;
        this.leftM = 0;
    },
    
}
myTodo.addMeetings(4);
myTodo.setMeetingsDone(3);
myTodo.leftMeeting();
console.log(myTodo.sammary());
myTodo.resetDay()
console.log(myTodo.sammary());
