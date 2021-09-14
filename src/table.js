import React from 'react';


const Tbody = (props)=>{
    const rows= props.characterData.map((row,index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=>{props.removeCharacter(index)}}>Delete</button>
                </td>
            </tr>
        )
    })
        return(
            <tbody>{rows}</tbody>
        )
    }

const Thead = () =>{
        return(
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
        )
    }




const Table = (props)=>{
        const {characterData, removeCharacter}= props
        return(
            <table>
                <Thead />
                <Tbody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }

export default Table