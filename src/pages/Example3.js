import React, { useState } from 'react'
import Example3_ from './../component/Example3'
import { styled } from 'styled-components'

const Content = styled.div`
    display: flex; justify-content: space-between;
    width: 1200px; margin:0 auto;
    flex-wrap: wrap;
`
const Ctt = styled.ul`
    display: flex; justify-content: space-between;
    width: 1200px; 
`
const Style = styled.li`
    border: 1px solid #ddd; cursor: pointer;
    width: 80px; text-align: center;
`

function Example3() {
    let [data, setData] = useState(Example3_)
    let [animal, setAnimal] = useState("전체")
    const dataFilter = data.filter(e=>{
        if(animal === "전체"){
            return e.animal
        }else{
            return e.animal === animal
        }
    })
    const Filteranimal = [...new Set(data.map(e => e.animal))]
    console.log(Filteranimal)
  return (
    <Content>
        <Ctt>
            <Style onClick={() => setAnimal("전체")}>전체</Style>
            {
                Filteranimal.map((e,i)=>{
                    return(
                        <Style key={i} onClick={()=>setAnimal(e)}>{e}</Style>
                    )
                })
            }
        </Ctt>
        {
            dataFilter.map((e,i)=>{
                return(
                    <p key={i}>{e.animal}</p>
                )
            })
        }
    </Content>
  )
}

export default Example3