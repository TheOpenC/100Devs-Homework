let calculator = {
    read(){
      a = Number(prompt(`enter a value`, "?"))
      calculator.a = a
      b = Number(prompt(`enter another value`, "?"))
      calculator.b = b  
    }, sum(){
        return Number(this.a + this.b)
    }, mult(){
        return Number(this.a * this.b)
    }
}