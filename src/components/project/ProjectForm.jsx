import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, projectData}){
    const[categorias, setCategorias] = useState([]);
    const[project, setProject] = useState(projectData || {});

    const fetchCategories = async () => {
        fetch('http://localhost:5000/categorias',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then((data) => {
            setCategorias(data)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e){
        setProject({ 
            ...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }

    return(
        <form onSubmit={submit} className={styles.form}> {}
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o Nome do projeto"
                handleOnChange={handleChange}
                value={project.name || ''}
            />
            
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget" 
                placeholder="Insira o Orçamento total"
                handleOnChange={handleChange}
                value={project.budget || ''}
            />
            
            <Select 
                name="category_id" 
                text="Selecione a Categoria"
                options={categorias}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
           
            <Submit text={btnText}/>
        </form>
    )
}

export default ProjectForm