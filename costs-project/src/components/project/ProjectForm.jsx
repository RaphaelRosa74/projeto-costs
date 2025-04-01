function ProjectForm(){
    return(
        <form>
            <div>
                <input type="text" placeholder="Nome do projeto" />
            </div>
            <div>
                <input type="number" placeholder="Orçamento total" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected>Categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}

export default ProjectForm