import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Messages from '../layout/Messages';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import Loading from '../layout/Loading';
import ProjectCard from '../project/ProjectCard';

import styles from './Projects.module.css';

function Projects() {
  const location = useLocation();
  const [message, setMessage] = useState(null);
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prioridade para o state do router
    if (location.state?.message) {
      setMessage({
        text: location.state.message,
        type: 'success',
      });
    } else {
      const storedMessage = sessionStorage.getItem('flashMessage');
      if (storedMessage) {
        setMessage(JSON.parse(storedMessage));
        sessionStorage.removeItem('flashMessage');
      }
    }
  }, [location.state]);

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Dados da API:', data);
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((err) => {
        console.log(err);
        setError('Erro ao carregar projetos');
        setRemoveLoading(true);
      });
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error('Erro ao remover projeto');
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Projeto removido com sucesso!');
      })
      .catch((err) => {
        console.log(err);
        setProjectMessage('Erro ao remover projeto');
      });
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Messages type="success" msg={message.text} />}
      {projectMessage && <Messages type="success" msg={projectMessage} />}
      {error && <Messages type="error" msg={error} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category?.name || 'Sem categoria'}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;