var rls = require("readline-sync");
console.log("Welcome To Big Bang Theory Quiz!!");
console.log("\n");
var username = rls.question("Please Enter Your Name? ");
console.log("\n");
console.log("Welcome "+ username + "  To Big Bang Thoery ! Bazzinga !!");
var score = 0;
var quiz =(ak,que,op,ans)=>{
    console.log(que);
    console.log(op);
    var out = rls.question(ak);
    if(out == ans)
    {
        console.log("Correct !!");
        score = score+5;
    }
    else{
        console.log("Wrong!!");
        score = score-2;
    }
    console.log("Your Score is ",score);
    console.log("==========================================");
}
var queans = [
    {ask:"Your Answer :",q:"Question:- What does Sheldon's mom call him? ",options:"Options"+"\n"+"1.Sheldon"+"\n"+"2.Pumpkin"+"\n"+"3.Shelly"+"\n"+"4.Doc",a:"3"},
    {ask:"Your Answer :",q:"Question:- What astronaut nickname was Howard given by his space friends? ",options:"Options"+"\n"+"1.Rocket Man"+"\n"+"2.Howie"+"\n"+"3.Froot Loops"+"\n"+"4.Big Guy",a:"3"},
    {ask:"Your Answer :",q:"Question:- What is the name of the science show host played by Bob Newhart that Sheldon and Leonard love so much? ",options:"Options"+"\n"+"1.Professor Proton"+"\n"+"2.Dr.DNA"+"\n"+"3.Mr.Microbe"+"\n"+"4.The Sultan Science",a:"1"},
    {ask:"Your Answer :",q:"Question:- Amy brings home one of her monkeys from the lab in season four, and he has a terrible habit. What is it? ",options:"Options"+"\n"+"1.Farting"+"\n"+"2.Smoking"+"\n"+"3.Jumping"+"\n"+"4.Eating Everything",a:"2"},
    {ask:"Your Answer :",q:"Question:- Where did Amy get her undergraduate degree? ",options:"Options"+"\n"+"1.Stanford"+"\n"+"2.Yale"+"\n"+"3.MIT"+"\n"+"4.Harvard",a:"4"},
    {ask:"Your Answer :",q:"Question:- What apartment do Penny and Leonard live in? ",options:"Options"+"\n"+"1.4B"+"\n"+"2.3B"+"\n"+"3.3A"+"\n"+"4.4A",a:"4"},
    {ask:"Your Answer :",q:"Question:- Who officiates Sheldon and Amy's wedding? ",options:"Options"+"\n"+"1.Will Wheaton"+"\n"+"2.Raj"+"\n"+"3.Mark Hamill"+"\n"+"4.Leonard",a:"3"},
    {ask:"Your Answer :",q:"Question:- How many times does Sheldon have to knock on a door and say a person's name before he'll go in? ",options:"Options"+"\n"+"1.2 Times"+"\n"+"2.3 Times"+"\n"+"3.4 Times"+"\n"+"4.5 Times",a:"2"},
    {ask:"Your Answer :",q:"Question:- Where do Sheldon, Amy, Raj, Howard, and Leonard work?",options:"Options"+"\n"+"1.Caltech"+"\n"+"2.UCLA"+"\n"+"3.USC"+"\n"+"4.Cal Poly",a:"1"},
    {ask:"Your Answer :",q:"Question:- What state is Sheldon originally from? ",options:"Options"+"\n"+"1.Louisiana"+"\n"+"2.California"+"\n"+"3.Oklahoma"+"\n"+"4.Texas",a:"4"}
  ];
  for(var i =0;i<queans.length;i++)
  {
      var current = queans[i];
      quiz(current.ask,current.q,current.options,current.a);
  }
  console.log("YOUR FINAL SCORE IS: " + score+"/50")