class Form1{
    constructor() {
        this.firstname = createInput("First Name");    
        this.lastname = createInput("Last Name");
        this.email = createInput("Email");
        this.password = createInput("Password");
        this.submit = createButton("Submit");
        this.rec1=createButton('Sign up as a cutomer') 
        this.title = createElement('h1');
    }
    hide(){

        this.title.hide();
        this.firstname.hide();
        this.lastname.hide();
        this.email.hide();
        this.password.hide();
        this.submit.hide();
    }
    display(){
        this.title.html("Sign Up Now!");
        this.title.position(100,30);
       
        rec1.mousePressed(()=>{

        this.title.hide();
        this.firstname.hide();
        this.lastname.hide();
        this.email.hide();
        this.password.hide();
        this.submit.hide();
        rec2.mousePressed(()=>{
            this.firstname.position(120,300);
            this.lastname.position(120,350);
            this.email.position(120,400);
            this.password.position(120,450);
            this.submit.position(165,500);
            rec1.position(120,540)
            this.title.hide();

        })


    
        })
}

}
