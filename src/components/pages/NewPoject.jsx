import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Abordagem DUPLA: sessionStorage + state do router
        sessionStorage.setItem('flashMessage', JSON.stringify({
          text: "Projeto criado com sucesso!",
          type: "success"
        }));

        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
          replace: true // Evita duplicação no histórico
        });
      })
      .catch((err) => {
        console.log(err);
        // Mensagem de erro (opcional)
        sessionStorage.setItem('flashMessage', JSON.stringify({
          text: "Erro ao criar projeto!",
          type: "error"
        }));
        navigate("/projects");
      });
  }

  return (
    <div className={styles.np_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;