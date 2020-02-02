import React from 'react';
import './gridItems.css';


//Different map sizes: 100 grid items, 200 grid items, 500 grid items --- 3 different maps at launch
//Different unit types: infanty, tank, ranged
//Unit health points: add unit health points

const COLORS = ['brickfire', '#EDC9AF', '#907b5a', '#0077be', '#62aa36', 'black']
const ITEMS = ['enemy', 'sand', 'mountain', 'water', 'home', 'cave']
const MAP = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2],
    [4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2],
    [4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2],
    [4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 2, 5, 2, 2],
    [4, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 1, 2, 2],
    [4, 4, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 3, 3, 3, 4, 4, 4, 4, 4],
    [4, 4, 4, 3, 3, 4, 2, 2, 2, 2, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4],
    [4, 4, 4, 4, 3, 4, 4, 2, 2, 4, 4, 3, 3, 3, 3, 3, 4, 4, 4, 4],
    [4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
    [1, 4, 1, 1, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4],
    [1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4],
    [1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
    [4, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4],
    [4, 1, 1, 1, 1, 1, 1, 4, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
    [4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 4, 4],
    [4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 3, 3, 3, 3, 4, 4],
    [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 4, 4, 4],
    [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 4, 4, 4],
    [4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4],
]


const GridItems = (props) => {
    
    const gridSet = []

    MAP.forEach((row, index) => {
        if(MAP.length)
        for(let i = 0; i < MAP[index].length; i++){
            let itemStyle = {
                backgroundColor: COLORS[MAP[index][i]]
            }

            gridSet.push(<div id={"gridItem" + index + "_" + i} className="gameGridItem" style={itemStyle} onClick={() => {
                MAP[index][i] !== 2 ? document.querySelector(`#gridItem${index}_${i}`).style.backgroundColor = 'firebrick' : console.log('Not valid.');
            }}></div>)
        }
        else{
            gridSet.push(<div className="gameGridItem"></div>)
        }
    })

    return gridSet;
}

export default GridItems;