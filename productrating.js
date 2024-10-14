
let rating = prompt("Please rate the product from 1 to 5 stars:");

for (let i = 0; i < 1; i++) {
    if (rating >= 1 && rating <= 5) {
        alert(`Thank you for your ${rating}-star rating!`);
    } else {
        alert("Invalid rating. Please enter a number between 1 and 5.");
      
        rating=prompt('please rate the product : ')
   
        i--;
    }
}