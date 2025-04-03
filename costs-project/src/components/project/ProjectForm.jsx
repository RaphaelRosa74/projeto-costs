import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){

    const[categorias, setCategorias] = useState([])

    useEffect(() =>{ 
        fetch('http://localhost:5000/categorias',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) =>{
                setCategorias(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <form className={styles.form}>
            <Input
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="Insira o Nome do projeto"
            />
            
            <Input
            type="number"
            text="Orçamento do Projeto"
            name="budge"
            placeholder="Insira o Orçamento total"
            />
            
            <Select 
            name="category_id" 
            text="Selecione a Categria"
            options={categorias}
            />
           
            <Submit text={btnText}/>
        </form>
    )
}

export default ProjectForm