// Use this sample to create your own voice commands
intent('hi', p=>  {
    p.play('hi {{Loc}Anna');
});

intent('want to live in $(LOC)', p=>  {
    p.play('Me too1');
});