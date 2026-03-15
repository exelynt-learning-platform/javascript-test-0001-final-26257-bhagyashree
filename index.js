const ROWS = 5;

// Upper half
for (let i = 1; i <= ROWS; i++) {
    let line = "";

    // spaces before star
    for (let j = 1; j <= ROWS - i; j++) {
        line += " ";
    }

    // first star
    line += "*";

    // middle spaces and second star
    if (i > 1) {
        for (let j = 1; j <= (2 * i - 3); j++) {
            line += " ";
        }
        line += "*";
    }

    console.log(line);
}

// Lower half
for (let i = ROWS - 1; i >= 1; i--) {
    let line = "";

    // spaces before star
    for (let j = 1; j <= ROWS - i; j++) {
        line += " ";
    }

    // first star
    line += "*";

    // middle spaces and second star
    if (i > 1) {
        for (let j = 1; j <= (2 * i - 3); j++) {
            line += " ";
        }
        line += "*";
    }

    console.log(line);
}
