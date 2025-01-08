let userInput = prompt("enter the day");
switch (userInput) {
    case "monday":
    case "tuesday":
        console.log("Football.");
        break;
    case "wednesday":
    case"thursday":
        console.log("Cricket.");
        break;
    case "friday":
        console.log("Volleyball");
        break;
    case "saturday":
        console.log("Basketball.");
        break;
    case "sunday":
        console.log("Holiday");
        break;
    default:
        console.log("Enter a valid day");
        
}