import React, { useState } from 'react'


function SlidingPuzzle() {
    const [puzzle, setPuzzle] = useState(createPuzzle)

    function createPuzzle () {
        let puzzle = []
        let numRows = 4;
        let numCols = 4;
        let randomNums = shuffle( numRows * numCols)
        let num = 0


        for (let i = 0; i < numRows; i++) {
            let newRow = []
            for (let j = 0; j < numCols; j++) {
                newRow.push(randomNums[num]);
                num ++;
            }
            puzzle.push(newRow)
        }
        // puzzle[0][0] = "";

        return puzzle;
    }

    function shuffle(len) {
        let array = []
        for (let i = 1; i < len; i++){
            array.push(i)
        }
        array.push('')


        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    const renderPuzzle = () => {
        return puzzle.map((row, rowIdx) => {
            return (
                <div 
                    key={`row-${rowIdx}`}
                    className='row'
                >
                    {row.map((block, colIdx) => <div 
                        key={`col-${colIdx}`}
                        className="block"
                        onClick={(e) => moveBlock(e, [rowIdx, colIdx])}
                    >{block}</div>)}
                </div> 
                )
        })
    }

    function moveBlock (e, blockPos) {
        let emptyPos = getEmptyPos();

        if (validBlockToSwap(emptyPos, blockPos)) {
            swapBlocks(emptyPos, blockPos)
            return true
        } else {
            return false
        }

    }

    function getEmptyPos () {
        for (let i = 0; i < puzzle.length; i++){
            for (let j = 0; j < puzzle[0].length; j++){
                if (puzzle[i][j] === '') return [i, j]
            }
        }
    }

    function validBlockToSwap(emptyPos, blockPos){
        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        let [emptyX, emptyY] = emptyPos;
        let [blockX, blockY] = blockPos;

        for(let dir of dirs){
            let [dirX, dirY] = dir
            let newEmptyX = dirX + emptyX;
            let newEmptyY = dirY + emptyY;

            if(blockX === newEmptyX && blockY === newEmptyY){
                return true
            }
        }

        return false;
    }

    function swapBlocks(emptyPos, blockPos){
        let [blockX, blockY] = blockPos;
        let [emptyX, emptyY] = emptyPos;
        let newPuzzle = JSON.parse(JSON.stringify(puzzle));

        newPuzzle[emptyX][emptyY] = puzzle[blockX][blockY]
        newPuzzle[blockX][blockY] = ''

        setPuzzle(newPuzzle)
    }


    return(
        <div className='sliding-puzzle'>
            {renderPuzzle()}
        </div>
    )
}



export default SlidingPuzzle;