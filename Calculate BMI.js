/* Calculate BMI https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */
bmi=(w,h)=>w/h**2<=18.5?'Underweight':w/h**2<=25?'Normal':w/h**2<=30?'Overweight':'Obese'


// multiple lines ?

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";