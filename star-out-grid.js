function starOutGrid(grid) {
    // Loop through grid
    let rows = grid.length ; 
    let cols = grid[0].length ;

    // Create two arrays to track which rows and cols have stars
    let starRows = new Array(rows).fill(false);
    let starCols = new Array(cols).fill(false);

    // Loop through rows and cols and check if there is a star
    for (let i = 0 ; i < rows ; i++){
        for (let j = 0 ; j < cols ; j++){
            if (grid[i][j] === '*'){
                starRows[i] = true
                starCols[j] = true
            }
        }
    }

    // Star out the identified rows and columns
    for (let i = 0; i < rows ; i++){
        for (let j = 0 ; j < cols ; j++){
            if (starRows[i] || starCols[j]){
                grid[i][j] = '*'
            }
        }
    }

    return grid;
}



console.log(starOutGrid([
    ["A", "B", "C"],
    ["D", "E", "*"],
    ["G", "H", "I"],
]))

