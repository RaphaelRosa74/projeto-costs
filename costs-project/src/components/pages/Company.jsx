import styles from './Company.module.css'

function Company() {
    return (
        <div className={styles.geral}>
            <div className={styles.header}>
                <h1 className={styles.title}>Costs</h1>
                <h2 className={styles.subtitle}>Sobre Nós</h2>
            </div>
            
            <div className={styles.section}>
                <p className={styles.tagline}><strong>Sua Solução em Gerenciamento de Projetos Simplificado</strong></p>
                <p className={styles.text}>Na Costs, acreditamos que organizar projetos não precisa ser complicado. Somos uma equipe apaixonada por criar ferramentas que transformam a gestão de projetos em uma experiência intuitiva e eficiente. Nossa plataforma foi desenvolvida para ajudar equipes e empreendedores a controlar orçamentos, delegar tarefas e acompanhar o progresso de seus projetos de maneira descomplicada.</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Nossa Missão</h2>
                <p className={styles.highlightText}>Simplificar a gestão de projetos para que você possa focar no que realmente importa: trazer suas ideias para o mundo.</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Valores da Costs</h2>
                <ul className={styles.valuesList}>
                    <li className={styles.valueItem}>
                        <span className={styles.valueName}>Simplicidade:</span> Acreditamos em soluções diretas e fáceis de usar
                    </li>
                    <li className={styles.valueItem}>
                        <span className={styles.valueName}>Transparência:</span> Ferramentas claras para um gerenciamento honesto
                    </li>
                    <li className={styles.valueItem}>
                        <span className={styles.valueName}>Colaboração:</span> Facilitamos o trabalho em equipe
                    </li>
                    <li className={styles.valueItem}>
                        <span className={styles.valueName}>Inovação:</span> Estamos sempre buscando melhorar sua experiência
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Company