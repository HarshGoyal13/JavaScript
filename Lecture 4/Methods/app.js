


// METHODS -> Jo functions object k ander bnae gye ho, that's called METHODS




let Marks = {
    evs: 88,
    maths: 55,
    hindi:44,
    english:67,

    total: function(){ // METHOD
    // when we do not return anything from function , then JS return automatically returns undefined
    return(this.evs + this.maths + this.hindi + this.english);    // THROUGH ** THIS ** KEYWORD WE ACCESS PROPERTIES IN OBJECT, WHERE THIS POINTS TO OBJECT OF METHOD
    
    }
}

console.log(Marks.total());







